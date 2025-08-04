/**
jQuery UI 1.10.4
Microsoft grants you the right to use these JavaScript files for the sole purpose of either: (i) interacting through your browser with the Microsoft website, subject to the website's terms of use; or (ii) using the files as included with a Microsoft product subject to that product's license terms. Microsoft reserves all other rights to the files not expressly granted by Microsoft, whether by implication, estoppel or otherwise. The notices and licenses below are for informational purposes only.
Copyright 2014 The jQuery Foundation
Provided for Informational Purposes Only
MIT License
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the ""Software""), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
(function(t,e){function i(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},t.extend(this._defaults,this.regional[""]),this.dpDiv=s(t("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function s(e){var i="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return e.delegate(i,"mouseout",function(){t(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).removeClass("ui-datepicker-next-hover")}).delegate(i,"mouseover",function(){t.datepicker._isDisabledDatepicker(a.inline?e.parent()[0]:a.input[0])||(t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),t(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).addClass("ui-datepicker-next-hover"))})}function n(e,i){t.extend(e,i);for(var s in i)null==i[s]&&(e[s]=i[s]);return e}t.extend(t.ui,{datepicker:{version:"1.10.4"}});var a,r="datepicker";t.extend(i.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(t){return n(this._defaults,t||{}),this},_attachDatepicker:function(e,i){var s,n,a;s=e.nodeName.toLowerCase(),n="div"===s||"span"===s,e.id||(this.uuid+=1,e.id="dp"+this.uuid),a=this._newInst(t(e),n),a.settings=t.extend({},i||{}),"input"===s?this._connectDatepicker(e,a):n&&this._inlineDatepicker(e,a)},_newInst:function(e,i){var n=e[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:n,input:e,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:i,dpDiv:i?s(t("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(e,i){var s=t(e);i.append=t([]),i.trigger=t([]),s.hasClass(this.markerClassName)||(this._attachments(s,i),s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),this._autoSize(i),t.data(e,r,i),i.settings.disabled&&this._disableDatepicker(e))},_attachments:function(e,i){var s,n,a,r=this._get(i,"appendText"),o=this._get(i,"isRTL");i.append&&i.append.remove(),r&&(i.append=t("<span class='"+this._appendClass+"'>"+r+"</span>"),e[o?"before":"after"](i.append)),e.unbind("focus",this._showDatepicker),i.trigger&&i.trigger.remove(),s=this._get(i,"showOn"),("focus"===s||"both"===s)&&e.focus(this._showDatepicker),("button"===s||"both"===s)&&(n=this._get(i,"buttonText"),a=this._get(i,"buttonImage"),i.trigger=t(this._get(i,"buttonImageOnly")?t("<span/>").addClass(this._triggerClass).addClass("symbolFont").addClass("Appointment-symbol").attr({src:a,alt:n,title:n}):t("<button type='button'></button>").addClass(this._triggerClass).addClass("symbolFont").addClass("Appointment-symbol").html(a?t("<img/>").attr({src:a,alt:n,title:n}):n)),e[o?"before":"after"](i.trigger),i.trigger.click(function(){return t.datepicker._datepickerShowing&&t.datepicker._lastInput===e[0]?t.datepicker._hideDatepicker():t.datepicker._datepickerShowing&&t.datepicker._lastInput!==e[0]?(t.datepicker._hideDatepicker(),t.datepicker._showDatepicker(e[0])):t.datepicker._showDatepicker(e[0]),!1}))},_autoSize:function(t){if(this._get(t,"autoSize")&&!t.inline){var e,i,s,n,a=new Date(2009,11,20),r=this._get(t,"dateFormat");r.match(/[DM]/)&&(e=function(t){for(i=0,s=0,n=0;t.length>n;n++)t[n].length>i&&(i=t[n].length,s=n);return s},a.setMonth(e(this._get(t,r.match(/MM/)?"monthNames":"monthNamesShort"))),a.setDate(e(this._get(t,r.match(/DD/)?"dayNames":"dayNamesShort"))+20-a.getDay())),t.input.attr("size",this._formatDate(t,a).length)}},_inlineDatepicker:function(e,i){var s=t(e);s.hasClass(this.markerClassName)||(s.addClass(this.markerClassName).append(i.dpDiv),t.data(e,r,i),this._setDate(i,this._getDefaultDate(i),!0),this._updateDatepicker(i),this._updateAlternate(i),i.settings.disabled&&this._disableDatepicker(e),i.dpDiv.css("display","block"))},_dialogDatepicker:function(e,i,s,a,o){var h,l,c,u,d,p=this._dialogInst;return p||(this.uuid+=1,h="dp"+this.uuid,this._dialogInput=t("<input type='text' id='"+h+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.keydown(this._doKeyDown),t("body").append(this._dialogInput),p=this._dialogInst=this._newInst(this._dialogInput,!1),p.settings={},t.data(this._dialogInput[0],r,p)),n(p.settings,a||{}),i=i&&i.constructor===Date?this._formatDate(p,i):i,this._dialogInput.val(i),this._pos=o?o.length?o:[o.pageX,o.pageY]:null,this._pos||(l=document.documentElement.clientWidth,c=document.documentElement.clientHeight,u=document.documentElement.scrollLeft||document.body.scrollLeft,d=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[l/2-100+u,c/2-150+d]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),p.settings.onSelect=s,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),t.blockUI&&t.blockUI(this.dpDiv),t.data(this._dialogInput[0],r,p),this},_destroyDatepicker:function(e){var i,s=t(e),n=t.data(e,r);s.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),t.removeData(e,r),"input"===i?(n.append.remove(),n.trigger.remove(),s.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):("div"===i||"span"===i)&&s.removeClass(this.markerClassName).empty())},_enableDatepicker:function(e){var i,s,n=t(e),a=t.data(e,r);n.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!1,a.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().removeClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}))},_disableDatepicker:function(e){var i,s,n=t(e),a=t.data(e,r);n.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!0,a.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().addClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}),this._disabledInputs[this._disabledInputs.length]=e)},_isDisabledDatepicker:function(t){if(!t)return!1;for(var e=0;this._disabledInputs.length>e;e++)if(this._disabledInputs[e]===t)return!0;return!1},_getInst:function(e){try{return t.data(e,r)}catch(i){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(i,s,a){var r,o,h,l,c=this._getInst(i);return 2===arguments.length&&"string"==typeof s?"defaults"===s?t.extend({},t.datepicker._defaults):c?"all"===s?t.extend({},c.settings):this._get(c,s):null:(r=s||{},"string"==typeof s&&(r={},r[s]=a),c&&(this._curInst===c&&this._hideDatepicker(),o=this._getDateDatepicker(i,!0),h=this._getMinMaxDate(c,"min"),l=this._getMinMaxDate(c,"max"),n(c.settings,r),null!==h&&r.dateFormat!==e&&r.minDate===e&&(c.settings.minDate=this._formatDate(c,h)),null!==l&&r.dateFormat!==e&&r.maxDate===e&&(c.settings.maxDate=this._formatDate(c,l)),"disabled"in r&&(r.disabled?this._disableDatepicker(i):this._enableDatepicker(i)),this._attachments(t(i),c),this._autoSize(c),this._setDate(c,o),this._updateAlternate(c),this._updateDatepicker(c)),e)},_changeDatepicker:function(t,e,i){this._optionDatepicker(t,e,i)},_refreshDatepicker:function(t){var e=this._getInst(t);e&&this._updateDatepicker(e)},_setDateDatepicker:function(t,e){var i=this._getInst(t);i&&(this._setDate(i,e),this._updateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(t,e){var i=this._getInst(t);return i&&!i.inline&&this._setDateFromField(i,e),i?this._getDate(i):null},_doKeyDown:function(e){var i,s,n,a=t.datepicker._getInst(e.target),r=!0,o=a.dpDiv.is(".ui-datepicker-rtl");if(a._keyEvent=!0,t.datepicker._datepickerShowing)switch(e.keyCode){case 9:t.datepicker._hideDatepicker(),r=!1;break;case 13:return n=t("td."+t.datepicker._dayOverClass+":not(."+t.datepicker._currentClass+")",a.dpDiv),n[0]&&t.datepicker._selectDay(e.target,a.selectedMonth,a.selectedYear,n[0]),i=t.datepicker._get(a,"onSelect"),i?(s=t.datepicker._formatDate(a),i.apply(a.input?a.input[0]:null,[s,a])):t.datepicker._hideDatepicker(),!1;case 27:t.datepicker._hideDatepicker();break;case 33:t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(a,"stepBigMonths"):-t.datepicker._get(a,"stepMonths"),"M");break;case 34:t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(a,"stepBigMonths"):+t.datepicker._get(a,"stepMonths"),"M");break;case 35:(e.ctrlKey||e.metaKey)&&t.datepicker._clearDate(e.target),r=e.ctrlKey||e.metaKey;break;case 36:(e.ctrlKey||e.metaKey)&&t.datepicker._gotoToday(e.target),r=e.ctrlKey||e.metaKey;break;case 37:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,o?1:-1,"D"),r=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(a,"stepBigMonths"):-t.datepicker._get(a,"stepMonths"),"M");break;case 38:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,-7,"D"),r=e.ctrlKey||e.metaKey;break;case 39:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,o?-1:1,"D"),r=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(a,"stepBigMonths"):+t.datepicker._get(a,"stepMonths"),"M");break;case 40:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,7,"D"),r=e.ctrlKey||e.metaKey;break;default:r=!1}else 36===e.keyCode&&e.ctrlKey?t.datepicker._showDatepicker(this):r=!1;r&&(e.preventDefault(),e.stopPropagation())},_doKeyPress:function(i){var s,n,a=t.datepicker._getInst(i.target);return t.datepicker._get(a,"constrainInput")?(s=t.datepicker._possibleChars(t.datepicker._get(a,"dateFormat")),n=String.fromCharCode(null==i.charCode?i.keyCode:i.charCode),i.ctrlKey||i.metaKey||" ">n||!s||s.indexOf(n)>-1):e},_doKeyUp:function(e){var i,s=t.datepicker._getInst(e.target);if(s.input.val()!==s.lastVal)try{i=t.datepicker.parseDate(t.datepicker._get(s,"dateFormat"),s.input?s.input.val():null,t.datepicker._getFormatConfig(s)),i&&(t.datepicker._setDateFromField(s),t.datepicker._updateAlternate(s),t.datepicker._updateDatepicker(s))}catch(n){}return!0},_showDatepicker:function(e){if(e=e.target||e,"input"!==e.nodeName.toLowerCase()&&(e=t("input",e.parentNode)[0]),!t.datepicker._isDisabledDatepicker(e)&&t.datepicker._lastInput!==e){var i,s,a,r,o,h,l,zi;if(t(e).zIndex()<1500){zi=1502}else{zi=t(e).zIndex()+2}i=t.datepicker._getInst(e),t.datepicker._curInst&&t.datepicker._curInst!==i&&(t.datepicker._curInst.dpDiv.stop(!0,!0),i&&t.datepicker._datepickerShowing&&t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),s=t.datepicker._get(i,"beforeShow"),a=s?s.apply(e,[e,i]):{},a!==!1&&(n(i.settings,a),i.lastVal=null,t.datepicker._lastInput=e,t.datepicker._setDateFromField(i),t.datepicker._inDialog&&(e.value=""),t.datepicker._pos||(t.datepicker._pos=t.datepicker._findPos(e),t.datepicker._pos[1]+=e.offsetHeight),r=!1,t(e).parents().each(function(){return r|="fixed"===t(this).css("position"),!r}),o={left:t.datepicker._pos[0],top:t.datepicker._pos[1]},t.datepicker._pos=null,i.dpDiv.empty(),i.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),t.datepicker._updateDatepicker(i),o=t.datepicker._checkOffset(i,o,r),i.dpDiv.css({position:t.datepicker._inDialog&&t.blockUI?"static":r?"fixed":"absolute",display:"none",left:o.left+"px",top:o.top+"px"}),i.inline||(h=t.datepicker._get(i,"showAnim"),l=t.datepicker._get(i,"duration"),i.dpDiv.zIndex(zi),t.datepicker._datepickerShowing=!0,t.effects&&t.effects.effect[h]?i.dpDiv.show(h,t.datepicker._get(i,"showOptions"),l):i.dpDiv[h||"show"](h?l:null),t.datepicker._shouldFocusInput(i)&&i.input.focus(),t.datepicker._curInst=i))}},_updateDatepicker:function(e){this.maxRows=4,a=e,e.dpDiv.empty().append(this._generateHTML(e)),this._attachHandlers(e),e.dpDiv.find("."+this._dayOverClass+" a").mouseover();var i,s=this._getNumberOfMonths(e),n=s[1],r=17;e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),n>1&&e.dpDiv.addClass("ui-datepicker-multi-"+n).css("width",r*n+"em"),e.dpDiv[(1!==s[0]||1!==s[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),e.dpDiv[(this._get(e,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),e===t.datepicker._curInst&&t.datepicker._datepickerShowing&&t.datepicker._shouldFocusInput(e)&&e.input.focus(),e.yearshtml&&(i=e.yearshtml,setTimeout(function(){i===e.yearshtml&&e.yearshtml&&e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml),i=e.yearshtml=null},0))},_shouldFocusInput:function(t){return t.input&&t.input.is(":visible")&&!t.input.is(":disabled")&&!t.input.is(":focus")},_checkOffset:function(e,i,s){var n=e.dpDiv.outerWidth(),a=e.dpDiv.outerHeight(),r=e.input?e.input.outerWidth():0,o=e.input?e.input.outerHeight():0,h=document.documentElement.clientWidth+(s?0:t(document).scrollLeft()),l=document.documentElement.clientHeight+(s?0:t(document).scrollTop());return i.left-=this._get(e,"isRTL")?n-r:0,i.left-=s&&i.left===e.input.offset().left?t(document).scrollLeft():0,i.top-=s&&i.top===e.input.offset().top+o?t(document).scrollTop():0,i.left-=Math.min(i.left,i.left+n>h&&h>n?Math.abs(i.left+n-h):0),i.top-=Math.min(i.top,i.top+a>l&&l>a?Math.abs(a+o):0),i},_findPos:function(e){for(var i,s=this._getInst(e),n=this._get(s,"isRTL");e&&("hidden"===e.type||1!==e.nodeType||t.expr.filters.hidden(e));)e=e[n?"previousSibling":"nextSibling"];return i=t(e).offset(),[i.left,i.top]},_hideDatepicker:function(e){var i,s,n,a,o=this._curInst;!o||e&&o!==t.data(e,r)||this._datepickerShowing&&(i=this._get(o,"showAnim"),s=this._get(o,"duration"),n=function(){t.datepicker._tidyDialog(o)},t.effects&&(t.effects.effect[i]||t.effects[i])?o.dpDiv.hide(i,t.datepicker._get(o,"showOptions"),s,n):o.dpDiv["slideDown"===i?"slideUp":"fadeIn"===i?"fadeOut":"hide"](i?s:null,n),i||n(),this._datepickerShowing=!1,a=this._get(o,"onClose"),a&&a.apply(o.input?o.input[0]:null,[o.input?o.input.val():"",o]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),t.blockUI&&(t.unblockUI(),t("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(t){t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(e){if(t.datepicker._curInst){var i=t(e.target),s=t.datepicker._getInst(i[0]);(i[0].id!==t.datepicker._mainDivId&&0===i.parents("#"+t.datepicker._mainDivId).length&&!i.hasClass(t.datepicker.markerClassName)&&!i.closest("."+t.datepicker._triggerClass).length&&t.datepicker._datepickerShowing&&(!t.datepicker._inDialog||!t.blockUI)||i.hasClass(t.datepicker.markerClassName)&&t.datepicker._curInst!==s)&&t.datepicker._hideDatepicker()}},_checkExternalEnterPress:function(e){if(13===e.keyCode){t.datepicker._checkExternalClick(e);}},_adjustDate:function(e,i,s){var n=t(e),a=this._getInst(n[0]);this._isDisabledDatepicker(n[0])||(this._adjustInstDate(a,i+("M"===s?this._get(a,"showCurrentAtPos"):0),s),this._updateDatepicker(a))},_gotoToday:function(e){var i,s=t(e),n=this._getInst(s[0]);this._get(n,"gotoCurrent")&&n.currentDay?(n.selectedDay=n.currentDay,n.drawMonth=n.selectedMonth=n.currentMonth,n.drawYear=n.selectedYear=n.currentYear):(i=new Date,n.selectedDay=i.getDate(),n.drawMonth=n.selectedMonth=i.getMonth(),n.drawYear=n.selectedYear=i.getFullYear()),this._notifyChange(n),this._adjustDate(s)},_selectMonthYear:function(e,i,s){var n=t(e),a=this._getInst(n[0]);a["selected"+("M"===s?"Month":"Year")]=a["draw"+("M"===s?"Month":"Year")]=parseInt(i.options[i.selectedIndex].value,10),this._notifyChange(a),this._adjustDate(n)},_selectDay:function(e,i,s,n){var a,r=t(e);t(n).hasClass(this._unselectableClass)||this._isDisabledDatepicker(r[0])||(a=this._getInst(r[0]),a.selectedDay=a.currentDay=t("a",n).html(),a.selectedMonth=a.currentMonth=i,a.selectedYear=a.currentYear=s,this._selectDate(e,this._formatDate(a,a.currentDay,a.currentMonth,a.currentYear)))},_clearDate:function(e){var i=t(e);this._selectDate(i,"")},_selectDate:function(e,i){var s,n=t(e),a=this._getInst(n[0]);i=null!=i?i:this._formatDate(a),a.input&&a.input.val(i),this._updateAlternate(a),s=this._get(a,"onSelect"),s?s.apply(a.input?a.input[0]:null,[i,a]):a.input&&a.input.trigger("change"),a.inline?this._updateDatepicker(a):(this._hideDatepicker(),this._lastInput=a.input[0],"object"!=typeof a.input[0]&&a.input.focus(),this._lastInput=null)},_updateAlternate:function(e){var i,s,n,a=this._get(e,"altField");a&&(i=this._get(e,"altFormat")||this._get(e,"dateFormat"),s=this._getDate(e),n=this.formatDate(i,s,this._getFormatConfig(e)),t(a).each(function(){t(this).val(n)}))},noWeekends:function(t){var e=t.getDay();return[e>0&&6>e,""]},iso8601Week:function(t){var e,i=new Date(t.getTime());return i.setDate(i.getDate()+4-(i.getDay()||7)),e=i.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((e-i)/864e5)/7)+1},parseDate:function(i,s,n){if(null==i||null==s)throw"Invalid arguments";if(s="object"==typeof s?""+s:s+"",""===s)return null;var a,r,o,h,l=0,c=(n?n.shortYearCutoff:null)||this._defaults.shortYearCutoff,u="string"!=typeof c?c:(new Date).getFullYear()%100+parseInt(c,10),d=(n?n.dayNamesShort:null)||this._defaults.dayNamesShort,p=(n?n.dayNames:null)||this._defaults.dayNames,f=(n?n.monthNamesShort:null)||this._defaults.monthNamesShort,m=(n?n.monthNames:null)||this._defaults.monthNames,g=-1,v=-1,_=-1,b=-1,y=!1,x=function(t){var e=i.length>a+1&&i.charAt(a+1)===t;return e&&a++,e},k=function(t){var e=x(t),i="@"===t?14:"!"===t?20:"y"===t&&e?4:"o"===t?3:2,n=RegExp("^\\d{1,"+i+"}"),a=s.substring(l).match(n);if(!a)throw"Missing number at position "+l;return l+=a[0].length,parseInt(a[0],10)},w=function(i,n,a){var r=-1,o=t.map(x(i)?a:n,function(t,e){return[[e,t]]}).sort(function(t,e){return-(t[1].length-e[1].length)});if(t.each(o,function(t,i){var n=i[1];return s.substr(l,n.length).toLowerCase()===n.toLowerCase()?(r=i[0],l+=n.length,!1):e}),-1!==r)return r+1;throw"Unknown name at position "+l},D=function(){if(s.charAt(l)!==i.charAt(a))throw"Unexpected literal at position "+l;l++};for(a=0;i.length>a;a++)if(y)"'"!==i.charAt(a)||x("'")?D():y=!1;else switch(i.charAt(a)){case"d":_=k("d");break;case"D":w("D",d,p);break;case"o":b=k("o");break;case"m":v=k("m");break;case"M":v=w("M",f,m);break;case"y":g=k("y");break;case"@":h=new Date(k("@")),g=h.getFullYear(),v=h.getMonth()+1,_=h.getDate();break;case"!":h=new Date((k("!")-this._ticksTo1970)/1e4),g=h.getFullYear(),v=h.getMonth()+1,_=h.getDate();break;case"'":x("'")?D():y=!0;break;default:D()}if(s.length>l&&(o=s.substr(l),!/^\s+/.test(o)))throw"Extra/unparsed characters found in date: "+o;if(-1===g?g=(new Date).getFullYear():100>g&&(g+=(new Date).getFullYear()-(new Date).getFullYear()%100+(u>=g?0:-100)),b>-1)for(v=1,_=b;;){if(r=this._getDaysInMonth(g,v-1),r>=_)break;v++,_-=r}if(h=this._daylightSavingAdjust(new Date(g,v-1,_)),h.getFullYear()!==g||h.getMonth()+1!==v||h.getDate()!==_)throw"Invalid date";return h},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:1e7*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(t,e,i){if(!e)return"";var s,n=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,a=(i?i.dayNames:null)||this._defaults.dayNames,r=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,o=(i?i.monthNames:null)||this._defaults.monthNames,h=function(e){var i=t.length>s+1&&t.charAt(s+1)===e;return i&&s++,i},l=function(t,e,i){var s=""+e;if(h(t))for(;i>s.length;)s="0"+s;return s},c=function(t,e,i,s){return h(t)?s[e]:i[e]},u="",d=!1;if(e)for(s=0;t.length>s;s++)if(d)"'"!==t.charAt(s)||h("'")?u+=t.charAt(s):d=!1;else switch(t.charAt(s)){case"d":u+=l("d",e.getDate(),2);break;case"D":u+=c("D",e.getDay(),n,a);break;case"o":u+=l("o",Math.round((new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime()-new Date(e.getFullYear(),0,0).getTime())/864e5),3);break;case"m":u+=l("m",e.getMonth()+1,2);break;case"M":u+=c("M",e.getMonth(),r,o);break;case"y":u+=h("y")?e.getFullYear():(10>e.getYear()%100?"0":"")+e.getYear()%100;break;case"@":u+=e.getTime();break;case"!":u+=1e4*e.getTime()+this._ticksTo1970;break;case"'":h("'")?u+="'":d=!0;break;default:u+=t.charAt(s)}return u},_possibleChars:function(t){var e,i="",s=!1,n=function(i){var s=t.length>e+1&&t.charAt(e+1)===i;return s&&e++,s};for(e=0;t.length>e;e++)if(s)"'"!==t.charAt(e)||n("'")?i+=t.charAt(e):s=!1;else switch(t.charAt(e)){case"d":case"m":case"y":case"@":i+="0123456789";break;case"D":case"M":return null;case"'":n("'")?i+="'":s=!0;break;default:i+=t.charAt(e)}return i},_get:function(t,i){return t.settings[i]!==e?t.settings[i]:this._defaults[i]},_setDateFromField:function(t,e){if(t.input.val()!==t.lastVal){var i=this._get(t,"dateFormat"),s=t.lastVal=t.input?t.input.val():null,n=this._getDefaultDate(t),a=n,r=this._getFormatConfig(t);try{a=this.parseDate(i,s,r)||n}catch(o){s=e?"":s}t.selectedDay=a.getDate(),t.drawMonth=t.selectedMonth=a.getMonth(),t.drawYear=t.selectedYear=a.getFullYear(),t.currentDay=s?a.getDate():0,t.currentMonth=s?a.getMonth():0,t.currentYear=s?a.getFullYear():0,this._adjustInstDate(t)}},_getDefaultDate:function(t){return this._restrictMinMax(t,this._determineDate(t,this._get(t,"defaultDate"),new Date))},_determineDate:function(e,i,s){var n=function(t){var e=new Date;return e.setDate(e.getDate()+t),e},a=function(i){try{return t.datepicker.parseDate(t.datepicker._get(e,"dateFormat"),i,t.datepicker._getFormatConfig(e))}catch(s){}for(var n=(i.toLowerCase().match(/^c/)?t.datepicker._getDate(e):null)||new Date,a=n.getFullYear(),r=n.getMonth(),o=n.getDate(),h=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,l=h.exec(i);l;){switch(l[2]||"d"){case"d":case"D":o+=parseInt(l[1],10);break;case"w":case"W":o+=7*parseInt(l[1],10);break;case"m":case"M":r+=parseInt(l[1],10),o=Math.min(o,t.datepicker._getDaysInMonth(a,r));break;case"y":case"Y":a+=parseInt(l[1],10),o=Math.min(o,t.datepicker._getDaysInMonth(a,r))}l=h.exec(i)}return new Date(a,r,o)},r=null==i||""===i?s:"string"==typeof i?a(i):"number"==typeof i?isNaN(i)?s:n(i):new Date(i.getTime());return r=r&&"Invalid Date"==""+r?s:r,r&&(r.setHours(0),r.setMinutes(0),r.setSeconds(0),r.setMilliseconds(0)),this._daylightSavingAdjust(r)},_daylightSavingAdjust:function(t){return t?(t.setHours(t.getHours()>12?t.getHours()+2:0),t):null},_setDate:function(t,e,i){var s=!e,n=t.selectedMonth,a=t.selectedYear,r=this._restrictMinMax(t,this._determineDate(t,e,new Date));t.selectedDay=t.currentDay=r.getDate(),t.drawMonth=t.selectedMonth=t.currentMonth=r.getMonth(),t.drawYear=t.selectedYear=t.currentYear=r.getFullYear(),n===t.selectedMonth&&a===t.selectedYear||i||this._notifyChange(t),this._adjustInstDate(t),t.input&&t.input.val(s?"":this._formatDate(t))},_getDate:function(t){var e=!t.currentYear||t.input&&""===t.input.val()?null:this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return e},_attachHandlers:function(e){var i=this._get(e,"stepMonths"),s="#"+e.id.replace(/\\\\/g,"\\");e.dpDiv.find("[data-handler]").map(function(){var e={prev:function(){t.datepicker._adjustDate(s,-i,"M")},next:function(){t.datepicker._adjustDate(s,+i,"M")},hide:function(){t.datepicker._hideDatepicker()},today:function(){t.datepicker._gotoToday(s)},selectDay:function(){return t.datepicker._selectDay(s,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return t.datepicker._selectMonthYear(s,this,"M"),!1},selectYear:function(){return t.datepicker._selectMonthYear(s,this,"Y"),!1}};t(this).bind(this.getAttribute("data-event"),e[this.getAttribute("data-handler")])})},_generateHTML:function(t){var e,i,s,n,a,r,o,h,l,c,u,d,p,f,m,g,v,_,b,y,x,k,w,D,T,C,S,M,N,I,P,A,z,H,E,F,O,j,W,R=new Date,L=this._daylightSavingAdjust(new Date(R.getFullYear(),R.getMonth(),R.getDate())),Y=this._get(t,"isRTL"),B=this._get(t,"showButtonPanel"),K=this._get(t,"hideIfNoPrevNext"),J=this._get(t,"navigationAsDateFormat"),Q=this._getNumberOfMonths(t),V=this._get(t,"showCurrentAtPos"),U=this._get(t,"stepMonths"),q=1!==Q[0]||1!==Q[1],X=this._daylightSavingAdjust(t.currentDay?new Date(t.currentYear,t.currentMonth,t.currentDay):new Date(9999,9,9)),G=this._getMinMaxDate(t,"min"),$=this._getMinMaxDate(t,"max"),Z=t.drawMonth-V,te=t.drawYear;if(0>Z&&(Z+=12,te--),$)for(e=this._daylightSavingAdjust(new Date($.getFullYear(),$.getMonth()-Q[0]*Q[1]+1,$.getDate())),e=G&&G>e?G:e;this._daylightSavingAdjust(new Date(te,Z,1))>e;)Z--,0>Z&&(Z=11,te--);for(t.drawMonth=Z,t.drawYear=te,i=this._get(t,"prevText"),i=J?this.formatDate(i,this._daylightSavingAdjust(new Date(te,Z-U,1)),this._getFormatConfig(t)):i,s=this._canAdjustMonth(t,-1,te,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>":K?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>",n=this._get(t,"nextText"),n=J?this.formatDate(n,this._daylightSavingAdjust(new Date(te,Z+U,1)),this._getFormatConfig(t)):n,a=this._canAdjustMonth(t,1,te,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>":K?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>",r=this._get(t,"currentText"),o=this._get(t,"gotoCurrent")&&t.currentDay?X:L,r=J?this.formatDate(r,o,this._getFormatConfig(t)):r,h=t.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(t,"closeText")+"</button>",l=B?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(Y?h:"")+(this._isInRange(t,o)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+r+"</button>":"")+(Y?"":h)+"</div>":"",c=parseInt(this._get(t,"firstDay"),10),c=isNaN(c)?0:c,u=this._get(t,"showWeek"),d=this._get(t,"dayNames"),p=this._get(t,"dayNamesMin"),f=this._get(t,"monthNames"),m=this._get(t,"monthNamesShort"),g=this._get(t,"beforeShowDay"),v=this._get(t,"showOtherMonths"),_=this._get(t,"selectOtherMonths"),b=this._getDefaultDate(t),y="",k=0;Q[0]>k;k++){for(w="",this.maxRows=4,D=0;Q[1]>D;D++){if(T=this._daylightSavingAdjust(new Date(te,Z,t.selectedDay)),C=" ui-corner-all",S="",q){if(S+="<div class='ui-datepicker-group",Q[1]>1)switch(D){case 0:S+=" ui-datepicker-group-first",C=" ui-corner-"+(Y?"right":"left");break;case Q[1]-1:S+=" ui-datepicker-group-last",C=" ui-corner-"+(Y?"left":"right");break;default:S+=" ui-datepicker-group-middle",C=""}S+="'>"}for(S+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+C+"'>"+(/all|left/.test(C)&&0===k?Y?a:s:"")+(/all|right/.test(C)&&0===k?Y?s:a:"")+this._generateMonthYearHeader(t,Z,te,G,$,k>0||D>0,f,m)+"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>",M=u?"<th class='ui-datepicker-week-col'>"+this._get(t,"weekHeader")+"</th>":"",x=0;7>x;x++)N=(x+c)%7,M+="<th"+((x+c+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+d[N]+"'>"+p[N]+"</span></th>";for(S+=M+"</tr></thead><tbody>",I=this._getDaysInMonth(te,Z),te===t.selectedYear&&Z===t.selectedMonth&&(t.selectedDay=Math.min(t.selectedDay,I)),P=(this._getFirstDayOfMonth(te,Z)-c+7)%7,A=Math.ceil((P+I)/7),z=q?this.maxRows>A?this.maxRows:A:A,this.maxRows=z,H=this._daylightSavingAdjust(new Date(te,Z,1-P)),E=0;z>E;E++){for(S+="<tr>",F=u?"<td class='ui-datepicker-week-col'>"+this._get(t,"calculateWeek")(H)+"</td>":"",x=0;7>x;x++)O=g?g.apply(t.input?t.input[0]:null,[H]):[!0,""],j=H.getMonth()!==Z,W=j&&!_||!O[0]||G&&G>H||$&&H>$,F+="<td class='"+((x+c+6)%7>=5?" ui-datepicker-week-end":"")+(j?" ui-datepicker-other-month":"")+(H.getTime()===T.getTime()&&Z===t.selectedMonth&&t._keyEvent||b.getTime()===H.getTime()&&b.getTime()===T.getTime()?" "+this._dayOverClass:"")+(W?" "+this._unselectableClass+" ui-state-disabled":"")+(j&&!v?"":" "+O[1]+(H.getTime()===X.getTime()?" "+this._currentClass:"")+(H.getTime()===L.getTime()?" ui-datepicker-today":""))+"'"+(j&&!v||!O[2]?"":" title='"+O[2].replace(/'/g,"&#39;")+"'")+(W?"":" data-handler='selectDay' data-event='click' data-month='"+H.getMonth()+"' data-year='"+H.getFullYear()+"'")+">"+(j&&!v?"&#xa0;":W?"<span class='ui-state-default'>"+H.getDate()+"</span>":"<a class='ui-state-default"+(H.getTime()===L.getTime()?" ui-state-highlight":"")+(H.getTime()===X.getTime()?" ui-state-active":"")+(j?" ui-priority-secondary":"")+"' href='#'>"+H.getDate()+"</a>")+"</td>",H.setDate(H.getDate()+1),H=this._daylightSavingAdjust(H);S+=F+"</tr>"}Z++,Z>11&&(Z=0,te++),S+="</tbody></table>"+(q?"</div>"+(Q[0]>0&&D===Q[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),w+=S}y+=w}return y+=l,t._keyEvent=!1,y},_generateMonthYearHeader:function(t,e,i,s,n,a,r,o){var h,l,c,u,d,p,f,m,g=this._get(t,"changeMonth"),v=this._get(t,"changeYear"),_=this._get(t,"showMonthAfterYear"),b="<div class='ui-datepicker-title'>",y="";if(a||!g)y+="<span class='ui-datepicker-month'>"+r[e]+"</span>";else{for(h=s&&s.getFullYear()===i,l=n&&n.getFullYear()===i,y+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",c=0;12>c;c++)(!h||c>=s.getMonth())&&(!l||n.getMonth()>=c)&&(y+="<option value='"+c+"'"+(c===e?" selected='selected'":"")+">"+o[c]+"</option>");y+="</select>"}if(_||(b+=y+(!a&&g&&v?"":"&#xa0;")),!t.yearshtml)if(t.yearshtml="",a||!v)b+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(u=this._get(t,"yearRange").split(":"),d=(new Date).getFullYear(),p=function(t){var e=t.match(/c[+\-].*/)?i+parseInt(t.substring(1),10):t.match(/[+\-].*/)?d+parseInt(t,10):parseInt(t,10);
return isNaN(e)?d:e},f=p(u[0]),m=Math.max(f,p(u[1]||"")),f=s?Math.max(f,s.getFullYear()):f,m=n?Math.min(m,n.getFullYear()):m,t.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";m>=f;f++)t.yearshtml+="<option value='"+f+"'"+(f===i?" selected='selected'":"")+">"+f+"</option>";t.yearshtml+="</select>",b+=t.yearshtml,t.yearshtml=null}return b+=this._get(t,"yearSuffix"),_&&(b+=(!a&&g&&v?"":"&#xa0;")+y),b+="</div>"},_adjustInstDate:function(t,e,i){var s=t.drawYear+("Y"===i?e:0),n=t.drawMonth+("M"===i?e:0),a=Math.min(t.selectedDay,this._getDaysInMonth(s,n))+("D"===i?e:0),r=this._restrictMinMax(t,this._daylightSavingAdjust(new Date(s,n,a)));t.selectedDay=r.getDate(),t.drawMonth=t.selectedMonth=r.getMonth(),t.drawYear=t.selectedYear=r.getFullYear(),("M"===i||"Y"===i)&&this._notifyChange(t)},_restrictMinMax:function(t,e){var i=this._getMinMaxDate(t,"min"),s=this._getMinMaxDate(t,"max"),n=i&&i>e?i:e;return s&&n>s?s:n},_notifyChange:function(t){var e=this._get(t,"onChangeMonthYear");e&&e.apply(t.input?t.input[0]:null,[t.selectedYear,t.selectedMonth+1,t])},_getNumberOfMonths:function(t){var e=this._get(t,"numberOfMonths");return null==e?[1,1]:"number"==typeof e?[1,e]:e},_getMinMaxDate:function(t,e){return this._determineDate(t,this._get(t,e+"Date"),null)},_getDaysInMonth:function(t,e){return 32-this._daylightSavingAdjust(new Date(t,e,32)).getDate()},_getFirstDayOfMonth:function(t,e){return new Date(t,e,1).getDay()},_canAdjustMonth:function(t,e,i,s){var n=this._getNumberOfMonths(t),a=this._daylightSavingAdjust(new Date(i,s+(0>e?e:n[0]*n[1]),1));return 0>e&&a.setDate(this._getDaysInMonth(a.getFullYear(),a.getMonth())),this._isInRange(t,a)},_isInRange:function(t,e){var i,s,n=this._getMinMaxDate(t,"min"),a=this._getMinMaxDate(t,"max"),r=null,o=null,h=this._get(t,"yearRange");return h&&(i=h.split(":"),s=(new Date).getFullYear(),r=parseInt(i[0],10),o=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(r+=s),i[1].match(/[+\-].*/)&&(o+=s)),(!n||e.getTime()>=n.getTime())&&(!a||e.getTime()<=a.getTime())&&(!r||e.getFullYear()>=r)&&(!o||o>=e.getFullYear())},_getFormatConfig:function(t){var e=this._get(t,"shortYearCutoff");return e="string"!=typeof e?e:(new Date).getFullYear()%100+parseInt(e,10),{shortYearCutoff:e,dayNamesShort:this._get(t,"dayNamesShort"),dayNames:this._get(t,"dayNames"),monthNamesShort:this._get(t,"monthNamesShort"),monthNames:this._get(t,"monthNames")}},_formatDate:function(t,e,i,s){e||(t.currentDay=t.selectedDay,t.currentMonth=t.selectedMonth,t.currentYear=t.selectedYear);var n=e?"object"==typeof e?e:this._daylightSavingAdjust(new Date(s,i,e)):this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return this.formatDate(this._get(t,"dateFormat"),n,this._getFormatConfig(t))}}),t.fn.datepicker=function(e){if(!this.length)return this;t.datepicker.initialized||(t(document).mousedown(t.datepicker._checkExternalClick),t(document).keydown(t.datepicker._checkExternalEnterPress),t.datepicker.initialized=!0),0===t("#"+t.datepicker._mainDivId).length&&t("body").append(t.datepicker.dpDiv);var i=Array.prototype.slice.call(arguments,1);return"string"!=typeof e||"isDisabled"!==e&&"getDate"!==e&&"widget"!==e?"option"===e&&2===arguments.length&&"string"==typeof arguments[1]?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i)):this.each(function(){"string"==typeof e?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this].concat(i)):t.datepicker._attachDatepicker(this,e)}):t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i))},t.datepicker=new i,t.datepicker.initialized=!1,t.datepicker.uuid=(new Date).getTime(),t.datepicker.version="1.10.4"})(jQuery);
/**
jQuery UI 1.10.4
Microsoft grants you the right to use these JavaScript files for the sole purpose of either: (i) interacting through your browser with the Microsoft website, subject to the website's terms of use; or (ii) using the files as included with a Microsoft product subject to that product's license terms. Microsoft reserves all other rights to the files not expressly granted by Microsoft, whether by implication, estoppel or otherwise. The notices and licenses below are for informational purposes only.
Copyright 2014 The jQuery Foundation
Provided for Informational Purposes Only
MIT License
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the ""Software""), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
(function(t){var e=5;t.widget("ui.slider",t.ui.mouse,{version:"1.10.4",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var e,i,s=this.options,n=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),a="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",o=[];for(i=s.values&&s.values.length||1,n.length>i&&(n.slice(i).remove(),n=n.slice(0,i)),e=n.length;i>e;e++)o.push(a);this.handles=n.add(t(o.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(e){t(this).data("ui-slider-handle-index",e)})},_createRange:function(){var e=this.options,i="";e.range?(e.range===!0&&(e.values?e.values.length&&2!==e.values.length?e.values=[e.values[0],e.values[0]]:t.isArray(e.values)&&(e.values=e.values.slice(0)):e.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=t("<div></div>").appendTo(this.element),i="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(i+("min"===e.range||"max"===e.range?" ui-slider-range-"+e.range:""))):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){var t=this.handles.add(this.range).filter("a");this._off(t),this._on(t,this._handleEvents),this._hoverable(t),this._focusable(t)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(e){var i,s,n,a,o,r,h,l,u=this,c=this.options;return c.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:e.pageX,y:e.pageY},s=this._normValueFromMouse(i),n=this._valueMax()-this._valueMin()+1,this.handles.each(function(e){var i=Math.abs(s-u.values(e));(n>i||n===i&&(e===u._lastChangedValue||u.values(e)===c.min))&&(n=i,a=t(this),o=e)}),r=this._start(e,o),r===!1?!1:(this._mouseSliding=!0,this._handleIndex=o,a.addClass("ui-state-active").focus(),h=a.offset(),l=!t(e.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:e.pageX-h.left-a.width()/2,top:e.pageY-h.top-a.height()/2-(parseInt(a.css("borderTopWidth"),10)||0)-(parseInt(a.css("borderBottomWidth"),10)||0)+(parseInt(a.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(e,o,s),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(t){var e={x:t.pageX,y:t.pageY},i=this._normValueFromMouse(e);return this._slide(t,this._handleIndex,i),!1},_mouseStop:function(t){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(t,this._handleIndex),this._change(t,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(t){var e,i,s,n,a;return"horizontal"===this.orientation?(e=this.elementSize.width,i=t.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(e=this.elementSize.height,i=t.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),s=i/e,s>1&&(s=1),0>s&&(s=0),"vertical"===this.orientation&&(s=1-s),n=this._valueMax()-this._valueMin(),a=this._valueMin()+s*n,this._trimAlignValue(a)},_start:function(t,e){var i={handle:this.handles[e],value:this.value()};return this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger("start",t,i)},_slide:function(t,e,i){var s,n,a;this.options.values&&this.options.values.length?(s=this.values(e?0:1),2===this.options.values.length&&this.options.range===!0&&(0===e&&i>s||1===e&&s>i)&&(i=s),i!==this.values(e)&&(n=this.values(),n[e]=i,a=this._trigger("slide",t,{handle:this.handles[e],value:i,values:n}),s=this.values(e?0:1),a!==!1&&this.values(e,i))):i!==this.value()&&(a=this._trigger("slide",t,{handle:this.handles[e],value:i}),a!==!1&&this.value(i))},_stop:function(t,e){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger("stop",t,i)},_change:function(t,e){if(!this._keySliding&&!this._mouseSliding){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._lastChangedValue=e,this._trigger("change",t,i)}},value:function(t){return arguments.length?(this.options.value=this._trimAlignValue(t),this._refreshValue(),this._change(null,0),undefined):this._value()},values:function(e,i){var s,n,a;if(arguments.length>1)return this.options.values[e]=this._trimAlignValue(i),this._refreshValue(),this._change(null,e),undefined;if(!arguments.length)return this._values();if(!t.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(e):this.value();for(s=this.options.values,n=arguments[0],a=0;s.length>a;a+=1)s[a]=this._trimAlignValue(n[a]),this._change(null,a);this._refreshValue()},_setOption:function(e,i){var s,n=0;switch("range"===e&&this.options.range===!0&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),t.isArray(this.options.values)&&(n=this.options.values.length),t.Widget.prototype._setOption.apply(this,arguments),e){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=0;n>s;s+=1)this._change(null,s);this._animateOff=!1;break;case"min":case"max":this._animateOff=!0,this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var t=this.options.value;return t=this._trimAlignValue(t)},_values:function(t){var e,i,s;if(arguments.length)return e=this.options.values[t],e=this._trimAlignValue(e);if(this.options.values&&this.options.values.length){for(i=this.options.values.slice(),s=0;i.length>s;s+=1)i[s]=this._trimAlignValue(i[s]);return i}return[]},_trimAlignValue:function(t){if(this._valueMin()>=t)return this._valueMin();if(t>=this._valueMax())return this._valueMax();var e=this.options.step>0?this.options.step:1,i=(t-this._valueMin())%e,s=t-i;return 2*Math.abs(i)>=e&&(s+=i>0?e:-e),parseFloat(s.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var e,i,s,n,a,o=this.options.range,r=this.options,h=this,l=this._animateOff?!1:r.animate,u={};this.options.values&&this.options.values.length?this.handles.each(function(s){i=100*((h.values(s)-h._valueMin())/(h._valueMax()-h._valueMin())),u["horizontal"===h.orientation?"left":"bottom"]=i+"%",t(this).stop(1,1)[l?"animate":"css"](u,r.animate),h.options.range===!0&&("horizontal"===h.orientation?(0===s&&h.range.stop(1,1)[l?"animate":"css"]({left:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({width:i-e+"%"},{queue:!1,duration:r.animate})):(0===s&&h.range.stop(1,1)[l?"animate":"css"]({bottom:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({height:i-e+"%"},{queue:!1,duration:r.animate}))),e=i}):(s=this.value(),n=this._valueMin(),a=this._valueMax(),i=a!==n?100*((s-n)/(a-n)):0,u["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[l?"animate":"css"](u,r.animate),"min"===o&&"horizontal"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({width:i+"%"},r.animate),"max"===o&&"horizontal"===this.orientation&&this.range[l?"animate":"css"]({width:100-i+"%"},{queue:!1,duration:r.animate}),"min"===o&&"vertical"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({height:i+"%"},r.animate),"max"===o&&"vertical"===this.orientation&&this.range[l?"animate":"css"]({height:100-i+"%"},{queue:!1,duration:r.animate}))},_handleEvents:{keydown:function(i){var s,n,a,o,r=t(i.target).data("ui-slider-handle-index");switch(i.keyCode){case t.ui.keyCode.HOME:case t.ui.keyCode.END:case t.ui.keyCode.PAGE_UP:case t.ui.keyCode.PAGE_DOWN:case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(i.preventDefault(),!this._keySliding&&(this._keySliding=!0,t(i.target).addClass("ui-state-active"),s=this._start(i,r),s===!1))return}switch(o=this.options.step,n=a=this.options.values&&this.options.values.length?this.values(r):this.value(),i.keyCode){case t.ui.keyCode.HOME:a=this._valueMin();break;case t.ui.keyCode.END:a=this._valueMax();break;case t.ui.keyCode.PAGE_UP:a=this._trimAlignValue(n+(this._valueMax()-this._valueMin())/e);break;case t.ui.keyCode.PAGE_DOWN:a=this._trimAlignValue(n-(this._valueMax()-this._valueMin())/e);break;case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:if(n===this._valueMax())return;a=this._trimAlignValue(n+o);break;case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(n===this._valueMin())return;a=this._trimAlignValue(n-o)}this._slide(i,r,a)},click:function(t){t.preventDefault()},keyup:function(e){var i=t(e.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(e,i),this._change(e,i),t(e.target).removeClass("ui-state-active"))}}})})(jQuery);
/*
Highcharts JS v4.0.1 (2014-04-24)
(c) 2009-2014 Torstein Honsi
License: www.highcharts.com/license
includes php.js
http://phpjs.org
php.js is copyright 2011 Kevin van Zonneveld.
Portions copyright Brett Zamir (http://brett-zamir.me), Kevin van Zonneveld (http://kevin.vanzonneveld.net), Onno Marsman, Theriault, Michael White (http://getsprink.com), Waldo Malqui Silva, Paulo Freitas, Jack, Jonas Raoni Soares Silva (http://www.jsfromhell.com), Philip Peterson, Legaev Andrey, Ates Goral (http://magnetiq.com), Alex, Ratheous, Martijn Wieringa, Rafał Kukawski (http://blog.kukawski.pl), lmeyrick (https://sourceforge.net/projects/bcmath-js/), Nate, Philippe Baumann, Enrique Gonzalez, Webtoolkit.info (http://www.webtoolkit.info/), Carlos R.
L. Rodrigues (http://www.jsfromhell.com), Ash Searle (http://hexmen.com/blog/), Jani Hartikainen, travc, Ole Vrijenhoek, Erkekjetter, Michael Grier, Rafał Kukawski (http://kukawski.pl), Johnny Mast (http://www.phpvrouwen.nl), T.Wild, d3x, http://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hex-in-javascript,
Rafał Kukawski (http://blog.kukawski.pl/), stag019, pilus, WebDevHobo (http://webdevhobo.blogspot.com/), marrtins, GeekFG (http://geekfg.blogspot.com), Andrea Giammarchi (http://webreflection.blogspot.com), Arpad Ray (mailto:arpad@php.net), gorthaur, Paul Smith, Tim de Koning (http://www.kingsquare.nl), Joris, Oleg Eremeev, Steve Hilder, majak, gettimeofday, KELAN, Josh Fraser (http://onlineaspect.com/2007/06/08/auto-detect-a-time-zone-with-javascript/),
Marc Palau, Kevin van Zonneveld (http://kevin.vanzonneveld.net/), Martin (http://www.erlenwiese.de/), Breaking Par Consulting Inc (http://www.breakingpar.com/bkp/home.nsf/0/87256B280015193F87256CFB006C45F7),
Chris, Mirek Slugen, saulius, Alfonso Jimenez (http://www.alfonsojimenez.com), Diplom@t (http://difane.com/), felix, Mailfaker (http://www.weedem.fr/), Tyler Akins (http://rumkin.com), Caio Ariede (http://caioariede.com), Robin, Kankrelune (http://www.webfaktory.info/), Karol Kowalski, Imgen Tata (http://www.myipdf.com/), mdsjack (http://www.mdsjack.bo.it), Dreamer, Felix Geisendoerfer (http://www.debuggable.com/felix), Lars Fischer, AJ, David, Aman Gupta, Michael White, Public Domain (http://www.json.org/json2.js), Steven Levithan (http://blog.stevenlevithan.com), Sakimori, Pellentesque Malesuada, Thunder.m, Dj (http://phpjs.org/functions/htmlentities:425#comment_134018),
Steve Clay, David James, Francois, class_exists, nobbler, T. Wild, Itsacon (http://www.itsacon.net/), date, Ole Vrijenhoek (http://www.nervous.nl/), Fox, Raphael (Ao RUDLER), Marco, noname, Mateusz "loonquawl" Zalega, Frank Forte, Arno, ger, mktime, john (http://www.jd-tech.net), Nick Kolosov (http://sammy.ru), marc andreu, Scott Cariss, Douglas Crockford (http://javascript.crockford.com), madipta, Slawomir Kaniecki, ReverseSyntax, Nathan, Alex Wilson, kenneth, Bayron Guevara, Adam Wallner (http://web2.bitbaro.hu/), paulo kuong, jmweb, Lincoln Ramsay, djmix, Pyerre, Jon Hohle, Thiago Mata (http://thiagomata.blog.com), lmeyrick (https://sourceforge.net/projects/bcmath-js/this.), Linuxworld, duncan, Gilbert, Sanjoy Roy, Shingo, sankai, Oskar Larsson Högfeldt (http://oskar-lh.name/), Denny Wardhana, 0m3r, Everlasto, Subhasis Deb, josh, jd, Pier Paolo Ramon (http://www.mastersoup.com/), P, merabi, Soren Hansen, Eugene Bulkin (http://doubleaw.com/), Der Simon (http://innerdom.sourceforge.net/), echo is bad, Ozh, XoraX (http://www.xorax.info), EdorFaus, JB, J A R, Marc Jansen, Francesco, LH, Stoyan Kyosev (http://www.svest.org/), nord_ua, omid (http://phpjs.org/functions/380:380#comment_137122), Brad Touesnard, MeEtc (http://yass.meetcweb.com), Peter-Paul Koch (http://www.quirksmode.org/js/beat.html), Olivier Louvignes (http://mg-crea.com/), T0bsn, Tim Wiel, Bryan Elliott, Jalal Berrami, Martin, JT, David Randall, Thomas Beaucourt (http://www.webapp.fr), taith, vlado houba, Pierre-Luc Paour, Kristof Coomans (SCK-CEN Belgian Nucleair Research Centre), Martin Pool, Kirk Strobeck, Rick Waldron, Brant Messenger (http://www.brantmessenger.com/), Devan Penner-Woelk, Saulo Vallory, Wagner B. Soares, Artur Tchernychev, Valentina De Rosa, Jason Wong (http://carrot.org/), Christoph, Daniel Esteban, strftime, Mick@el, rezna, Simon Willison (http://simonwillison.net), Anton Ongson, Gabriel Paderni, Marco van Oort, penutbutterjelly, Philipp Lenssen, Bjorn Roesbeke (http://www.bjornroesbeke.be/), Bug?, Eric Nagel, Tomasz Wesolowski, Evertjan Garretsen, Bobby Drake, Blues (http://tech.bluesmoon.info/), Luke Godfrey, Pul, uestla, Alan C, Ulrich, Rafal Kukawski, Yves Sucaet, sowberry, Norman "zEh" Fuchs, hitwork, Zahlii, johnrembo, Nick Callen, Steven Levithan (stevenlevithan.com), ejsanders, Scott Baker, Brian Tafoya (http://www.premasolutions.com/), Philippe Jausions (http://pear.php.net/user/jausions), Aidan Lister (http://aidanlister.com/), Rob, e-mike, HKM, ChaosNo1, metjay, strcasecmp, strcmp, Taras Bogach, jpfle, Alexander Ermolaev (http://snippets.dzone.com/user/AlexanderErmolaev), DxGx, kilops, Orlando, dptr1988, Le Torbi, James (http://www.james-bell.co.uk/), Pedro Tainha (http://www.pedrotainha.com), James, Arnout Kazemier (http://www.3rd-Eden.com), Chris McMacken, gabriel paderni, Yannoo, FGFEmperor, baris ozdil, Tod Gentille, Greg Frazier, jakes, 3D-GRAF, Allan Jensen (http://www.winternet.no), Howard Yeend, Benjamin Lupton, davook, daniel airton wermann (http://wermann.com.br), Atli Þór, Maximusya, Ryan W Tenney (http://ryan.10e.us), Alexander M Beedie, fearphage (http://http/my.opera.com/fearphage/), Nathan Sepulveda, Victor, Matteo, Billy, stensi, Cord, Manish, T.J. Leahy, Riddler (http://www.frontierwebdev.com/), Rafał Kukawski, FremyCompany, Matt Bradley, Tim de Koning, Luis Salazar (http://www.freaky-media.com/), Diogo Resende, Rival, Andrej Pavlovic, Garagoth, Le Torbi (http://www.letorbi.de/), Dino, Josep Sanz (http://www.ws3.es/), rem, Russell Walker (http://www.nbill.co.uk/), Jamie Beck (http://www.terabit.ca/), setcookie, Michael, YUI Library:
http://developer.yahoo.com/yui/docs/YAHOO.util.DateLocale.html, Blues at http://hacks.bluesmoon.info/strftime/strftime.js, Ben (http://benblume.co.uk/), DtTvB (http://dt.in.th/2008-09-16.string-length-in-bytes.html), Andreas, William, meo, incidence, Cagri Ekin, Amirouche, Amir Habibi (http://www.residence-mixte.com/), Luke Smith (http://lucassmith.name), Kheang Hok Chin (http://www.distantia.ca/), Jay Klehr, Lorenzo Pisani, Tony, Yen-Wei Liu, Greenseed, mk.keck, Leslie Hoare, dude, booeyOH, Ben Bryan
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL KEVIN VAN ZONNEVELD BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
(function(){function q(a,b){var c;a||(a={});for(c in b)a[c]=b[c];return a}function w(){var a,b=arguments,c,d={},e=function(a,b){var c,d;typeof a!=="object"&&(a={});for(d in b)b.hasOwnProperty(d)&&(c=b[d],a[d]=c&&typeof c==="object"&&Object.prototype.toString.call(c)!=="[object Array]"&&d!=="renderTo"&&typeof c.nodeType!=="number"?e(a[d]||{},c):b[d]);return a};b[0]===!0&&(d=b[1],b=Array.prototype.slice.call(b,2));c=b.length;for(a=0;a<c;a++)d=e(d,b[a]);return d}function z(a,b){return parseInt(a,b||
10)}function Fa(a){return typeof a==="string"}function ca(a){return typeof a==="object"}function La(a){return Object.prototype.toString.call(a)==="[object Array]"}function ha(a){return typeof a==="number"}function za(a){return U.log(a)/U.LN10}function ia(a){return U.pow(10,a)}function ja(a,b){for(var c=a.length;c--;)if(a[c]===b){a.splice(c,1);break}}function r(a){return a!==t&&a!==null}function H(a,b,c){var d,e;if(Fa(b))r(c)?a.setAttribute(b,c):a&&a.getAttribute&&(e=a.getAttribute(b));else if(r(b)&&
ca(b))for(d in b)a.setAttribute(d,b[d]);return e}function qa(a){return La(a)?a:[a]}function m(){var a=arguments,b,c,d=a.length;for(b=0;b<d;b++)if(c=a[b],typeof c!=="undefined"&&c!==null)return c}function G(a,b){if(Aa&&!aa&&b&&b.opacity!==t)b.filter="alpha(opacity="+b.opacity*100+")";q(a.style,b)}function Y(a,b,c,d,e){a=y.createElement(a);b&&q(a,b);e&&G(a,{padding:0,border:Q,margin:0});c&&G(a,c);d&&d.appendChild(a);return a}function ka(a,b){var c=function(){};c.prototype=new a;q(c.prototype,b);return c}
function Ga(a,b,c,d){var e=E.lang,a=+a||0,f=b===-1?(a.toString().split(".")[1]||"").length:isNaN(b=M(b))?2:b,b=c===void 0?e.decimalPoint:c,d=d===void 0?e.thousandsSep:d,e=a<0?"-":"",c=String(z(a=M(a).toFixed(f))),g=c.length>3?c.length%3:0;return e+(g?c.substr(0,g)+d:"")+c.substr(g).replace(/(\d{3})(?=\d)/g,"$1"+d)+(f?b+M(a-c).toFixed(f).slice(2):"")}function Ha(a,b){return Array((b||2)+1-String(a).length).join(0)+a}function Ma(a,b,c){var d=a[b];a[b]=function(){var a=Array.prototype.slice.call(arguments);
a.unshift(d);return c.apply(this,a)}}function Ia(a,b){for(var c="{",d=!1,e,f,g,h,i,j=[];(c=a.indexOf(c))!==-1;){e=a.slice(0,c);if(d){f=e.split(":");g=f.shift().split(".");i=g.length;e=b;for(h=0;h<i;h++)e=e[g[h]];if(f.length)f=f.join(":"),g=/\.([0-9])/,h=E.lang,i=void 0,/f$/.test(f)?(i=(i=f.match(g))?i[1]:-1,e!==null&&(e=Ga(e,i,h.decimalPoint,f.indexOf(",")>-1?h.thousandsSep:""))):e=cb(f,e)}j.push(e);a=a.slice(c+1);c=(d=!d)?"}":"{"}j.push(a);return j.join("")}function mb(a){return U.pow(10,T(U.log(a)/
U.LN10))}function nb(a,b,c,d){var e,c=m(c,1);e=a/c;b||(b=[1,2,2.5,5,10],d&&d.allowDecimals===!1&&(c===1?b=[1,2,5,10]:c<=0.1&&(b=[1/c])));for(d=0;d<b.length;d++)if(a=b[d],e<=(b[d]+(b[d+1]||b[d]))/2)break;a*=c;return a}function Bb(){this.symbol=this.color=0}function ob(a,b){var c=a.length,d,e;for(e=0;e<c;e++)a[e].ss_i=e;a.sort(function(a,c){d=b(a,c);return d===0?a.ss_i-c.ss_i:d});for(e=0;e<c;e++)delete a[e].ss_i}function Na(a){for(var b=a.length,c=a[0];b--;)a[b]<c&&(c=a[b]);return c}function Ba(a){for(var b=
a.length,c=a[0];b--;)a[b]>c&&(c=a[b]);return c}function Oa(a,b){for(var c in a)a[c]&&a[c]!==b&&a[c].destroy&&a[c].destroy(),delete a[c]}function Pa(a){db||(db=Y(Ja));a&&db.appendChild(a);db.innerHTML=""}function ra(a,b){var c="Highcharts error #"+a+": www.highcharts.com/errors/"+a;if(b)throw c;else I.console&&console.log(c)}function da(a){return parseFloat(a.toPrecision(14))}function Qa(a,b){va=m(a,b.animation)}function Cb(){var a=E.global.useUTC,b=a?"getUTC":"get",c=a?"setUTC":"set";Ra=(a&&E.global.timezoneOffset||
0)*6E4;eb=a?Date.UTC:function(a,b,c,g,h,i){return(new Date(a,b,m(c,1),m(g,0),m(h,0),m(i,0))).getTime()};pb=b+"Minutes";qb=b+"Hours";rb=b+"Day";Xa=b+"Date";fb=b+"Month";gb=b+"FullYear";Db=c+"Minutes";Eb=c+"Hours";sb=c+"Date";Fb=c+"Month";Gb=c+"FullYear"}function P(){}function Sa(a,b,c,d){this.axis=a;this.pos=b;this.type=c||"";this.isNew=!0;!c&&!d&&this.addLabel()}function la(){this.init.apply(this,arguments)}function Ya(){this.init.apply(this,arguments)}function Hb(a,b,c,d,e){var f=a.chart.inverted;
this.axis=a;this.isNegative=c;this.options=b;this.x=d;this.total=null;this.points={};this.stack=e;this.alignOptions={align:b.align||(f?c?"left":"right":"center"),verticalAlign:b.verticalAlign||(f?"middle":c?"bottom":"top"),y:m(b.y,f?4:c?14:-6),x:m(b.x,f?c?-6:6:0)};this.textAlign=b.textAlign||(f?c?"right":"left":"center")}var t,y=document,I=window,U=Math,u=U.round,T=U.floor,Ka=U.ceil,v=U.max,C=U.min,M=U.abs,Z=U.cos,ea=U.sin,ma=U.PI,Ca=ma*2/360,wa=navigator.userAgent,Ib=I.opera,Aa=/msie/i.test(wa)&&
!Ib,hb=y.documentMode===8,ib=/AppleWebKit/.test(wa),Ta=/Firefox/.test(wa),Jb=/(Mobile|Android|Windows Phone)/.test(wa),xa="http://www.w3.org/2000/svg",aa=!!y.createElementNS&&!!y.createElementNS(xa,"svg").createSVGRect,Nb=Ta&&parseInt(wa.split("Firefox/")[1],10)<4,fa=!aa&&!Aa&&!!y.createElement("canvas").getContext,Za,$a,Kb={},tb=0,db,E,cb,va,ub,A,sa=function(){},V=[],ab=0,Ja="div",Q="none",Ob=/^[0-9]+$/,Pb="stroke-width",eb,Ra,pb,qb,rb,Xa,fb,gb,Db,Eb,sb,Fb,Gb,F={},R=I.Highcharts=I.Highcharts?ra(16,
!0):{};cb=function(a,b,c){if(!r(b)||isNaN(b))return"Invalid date";var a=m(a,"%Y-%m-%d %H:%M:%S"),d=new Date(b-Ra),e,f=d[qb](),g=d[rb](),h=d[Xa](),i=d[fb](),j=d[gb](),k=E.lang,l=k.weekdays,d=q({a:l[g].substr(0,3),A:l[g],d:Ha(h),e:h,b:k.shortMonths[i],B:k.months[i],m:Ha(i+1),y:j.toString().substr(2,2),Y:j,H:Ha(f),I:Ha(f%12||12),l:f%12||12,M:Ha(d[pb]()),p:f<12?"AM":"PM",P:f<12?"am":"pm",S:Ha(d.getSeconds()),L:Ha(u(b%1E3),3)},R.dateFormats);for(e in d)for(;a.indexOf("%"+e)!==-1;)a=a.replace("%"+e,typeof d[e]===
"function"?d[e](b):d[e]);return c?a.substr(0,1).toUpperCase()+a.substr(1):a};Bb.prototype={wrapColor:function(a){if(this.color>=a)this.color=0},wrapSymbol:function(a){if(this.symbol>=a)this.symbol=0}};A=function(){for(var a=0,b=arguments,c=b.length,d={};a<c;a++)d[b[a++]]=b[a];return d}("millisecond",1,"second",1E3,"minute",6E4,"hour",36E5,"day",864E5,"week",6048E5,"month",26784E5,"year",31556952E3);ub={init:function(a,b,c){var b=b||"",d=a.shift,e=b.indexOf("C")>-1,f=e?7:3,g,b=b.split(" "),c=[].concat(c),
h,i,j=function(a){for(g=a.length;g--;)a[g]==="M"&&a.splice(g+1,0,a[g+1],a[g+2],a[g+1],a[g+2])};e&&(j(b),j(c));a.isArea&&(h=b.splice(b.length-6,6),i=c.splice(c.length-6,6));if(d<=c.length/f&&b.length===c.length)for(;d--;)c=[].concat(c).splice(0,f).concat(c);a.shift=0;if(b.length)for(a=c.length;b.length<a;)d=[].concat(b).splice(b.length-f,f),e&&(d[f-6]=d[f-2],d[f-5]=d[f-1]),b=b.concat(d);h&&(b=b.concat(h),c=c.concat(i));return[b,c]},step:function(a,b,c,d){var e=[],f=a.length;if(c===1)e=d;else if(f===
b.length&&c<1)for(;f--;)d=parseFloat(a[f]),e[f]=isNaN(d)?a[f]:c*parseFloat(b[f]-d)+d;else e=b;return e}};(function(a){I.HighchartsAdapter=I.HighchartsAdapter||a&&{init:function(b){var c=a.fx,d=c.step,e,f=a.Tween,g=f&&f.propHooks;e=a.cssHooks.opacity;a.extend(a.easing,{easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c}});a.each(["cur","_default","width","height","opacity"],function(a,b){var e=d,k;b==="cur"?e=c.prototype:b==="_default"&&f&&(e=g[b],b="set");(k=e[b])&&(e[b]=function(c){var d,c=
a?c:this;if(c.prop!=="align")return d=c.elem,d.attr?d.attr(c.prop,b==="cur"?t:c.now):k.apply(this,arguments)})});Ma(e,"get",function(a,b,c){return b.attr?b.opacity||0:a.call(this,b,c)});e=function(a){var c=a.elem,d;if(!a.started)d=b.init(c,c.d,c.toD),a.start=d[0],a.end=d[1],a.started=!0;c.attr("d",b.step(a.start,a.end,a.pos,c.toD))};f?g.d={set:e}:d.d=e;this.each=Array.prototype.forEach?function(a,b){return Array.prototype.forEach.call(a,b)}:function(a,b){for(var c=0,d=a.length;c<d;c++)if(b.call(a[c],
a[c],c,a)===!1)return c};a.fn.highcharts=function(){var a="Chart",b=arguments,c,d;if(this[0]){Fa(b[0])&&(a=b[0],b=Array.prototype.slice.call(b,1));c=b[0];if(c!==t)c.chart=c.chart||{},c.chart.renderTo=this[0],new R[a](c,b[1]),d=this;c===t&&(d=V[H(this[0],"data-highcharts-chart")])}return d}},getScript:a.getScript,inArray:a.inArray,adapterRun:function(b,c){return a(b)[c]()},grep:a.grep,map:function(a,c){for(var d=[],e=0,f=a.length;e<f;e++)d[e]=c.call(a[e],a[e],e,a);return d},offset:function(b){return a(b).offset()},
addEvent:function(b,c,d){a(b).bind(c,d)},removeEvent:function(b,c,d){var e=y.removeEventListener?"removeEventListener":"detachEvent";y[e]&&b&&!b[e]&&(b[e]=function(){});a(b).unbind(c,d)},fireEvent:function(b,c,d,e){var f=a.Event(c),g="detached"+c,h;!Aa&&d&&(delete d.layerX,delete d.layerY,delete d.returnValue);q(f,d);b[c]&&(b[g]=b[c],b[c]=null);a.each(["preventDefault","stopPropagation"],function(a,b){var c=f[b];f[b]=function(){try{c.call(f)}catch(a){b==="preventDefault"&&(h=!0)}}});a(b).trigger(f);
b[g]&&(b[c]=b[g],b[g]=null);e&&!f.isDefaultPrevented()&&!h&&e(f)},washMouseEvent:function(a){var c=a.originalEvent||a;if(c.pageX===t)c.pageX=a.pageX,c.pageY=a.pageY;return c},animate:function(b,c,d){var e=a(b);if(!b.style)b.style={};if(c.d)b.toD=c.d,c.d=1;e.stop();c.opacity!==t&&b.attr&&(c.opacity+="px");e.animate(c,d)},stop:function(b){a(b).stop()}}})(I.jQuery);var S=I.HighchartsAdapter,N=S||{};S&&S.init.call(S,ub);var jb=N.adapterRun,Qb=N.getScript,Da=N.inArray,p=N.each,vb=N.grep,Rb=N.offset,Ua=
N.map,K=N.addEvent,W=N.removeEvent,D=N.fireEvent,Sb=N.washMouseEvent,kb=N.animate,bb=N.stop,N={enabled:!0,x:0,y:15,style:{color:"#606060",cursor:"default",fontSize:"11px"}};E={colors:"#7cb5ec,#434348,#90ed7d,#f7a35c,#8085e9,#f15c80,#e4d354,#8085e8,#8d4653,#91e8e1".split(","),symbols:["circle","diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:"January,February,March,April,May,June,July,August,September,October,November,December".split(","),shortMonths:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
weekdays:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),decimalPoint:".",numericSymbols:"k,M,G,T,P,E".split(","),resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:","},global:{useUTC:!0,canvasToolsURL:"http://code.highcharts.com/4.0.1/modules/canvas-tools.js",VMLRadialGradientURL:"http://code.highcharts.com/4.0.1/gfx/vml-radial-gradient.png"},chart:{borderColor:"#4572A7",borderRadius:0,defaultSeriesType:"line",ignoreHiddenSeries:!0,spacing:[10,10,15,
10],backgroundColor:"#FFFFFF",plotBorderColor:"#C0C0C0",resetZoomButton:{theme:{zIndex:20},position:{align:"right",x:-10,y:10}}},title:{text:"Chart title",align:"center",margin:15,style:{color:"#333333",fontSize:"18px"}},subtitle:{text:"",align:"center",style:{color:"#555555"}},plotOptions:{line:{allowPointSelect:!1,showCheckbox:!1,animation:{duration:1E3},events:{},lineWidth:2,marker:{lineWidth:0,radius:4,lineColor:"#FFFFFF",states:{hover:{enabled:!0},select:{fillColor:"#FFFFFF",lineColor:"#000000",
lineWidth:2}}},point:{events:{}},dataLabels:w(N,{align:"center",enabled:!1,formatter:function(){return this.y===null?"":Ga(this.y,-1)},verticalAlign:"bottom",y:0}),cropThreshold:300,pointRange:0,states:{hover:{marker:{},halo:{size:10,opacity:0.25}},select:{marker:{}}},stickyTracking:!0,turboThreshold:1E3}},labels:{style:{position:"absolute",color:"#3E576F"}},legend:{enabled:!0,align:"center",layout:"horizontal",labelFormatter:function(){return this.name},borderColor:"#909090",borderRadius:0,navigation:{activeColor:"#274b6d",
inactiveColor:"#CCC"},shadow:!1,itemStyle:{color:"#333333",fontSize:"12px",fontWeight:"bold"},itemHoverStyle:{color:"#000"},itemHiddenStyle:{color:"#CCC"},itemCheckboxStyle:{position:"absolute",width:"13px",height:"13px"},symbolPadding:5,verticalAlign:"bottom",x:0,y:0,title:{style:{fontWeight:"bold"}}},loading:{labelStyle:{fontWeight:"bold",position:"relative",top:"1em"},style:{position:"absolute",backgroundColor:"white",opacity:0.5,textAlign:"center"}},tooltip:{enabled:!0,animation:aa,backgroundColor:"rgba(249, 249, 249, .85)",
borderWidth:1,borderRadius:3,dateTimeLabelFormats:{millisecond:"%A, %b %e, %H:%M:%S.%L",second:"%A, %b %e, %H:%M:%S",minute:"%A, %b %e, %H:%M",hour:"%A, %b %e, %H:%M",day:"%A, %b %e, %Y",week:"Week from %A, %b %e, %Y",month:"%B %Y",year:"%Y"},headerFormat:'<span style="font-size: 10px">{point.key}</span><br/>',pointFormat:'<span style="color:{series.color}">●</span> {series.name}: <b>{point.y}</b><br/>',shadow:!0,snap:Jb?25:10,style:{color:"#333333",cursor:"default",fontSize:"12px",padding:"8px",
whiteSpace:"nowrap"}},credits:{enabled:!0,text:"Highcharts.com",href:"http://www.highcharts.com",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",color:"#909090",fontSize:"9px"}}};var ba=E.plotOptions,S=ba.line;Cb();var Tb=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,Ub=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,Vb=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,ya=function(a){var b=[],c,
d;(function(a){a&&a.stops?d=Ua(a.stops,function(a){return ya(a[1])}):(c=Tb.exec(a))?b=[z(c[1]),z(c[2]),z(c[3]),parseFloat(c[4],10)]:(c=Ub.exec(a))?b=[z(c[1],16),z(c[2],16),z(c[3],16),1]:(c=Vb.exec(a))&&(b=[z(c[1]),z(c[2]),z(c[3]),1])})(a);return{get:function(c){var f;d?(f=w(a),f.stops=[].concat(f.stops),p(d,function(a,b){f.stops[b]=[f.stops[b][0],a.get(c)]})):f=b&&!isNaN(b[0])?c==="rgb"?"rgb("+b[0]+","+b[1]+","+b[2]+")":c==="a"?b[3]:"rgba("+b.join(",")+")":a;return f},brighten:function(a){if(d)p(d,
function(b){b.brighten(a)});else if(ha(a)&&a!==0){var c;for(c=0;c<3;c++)b[c]+=z(a*255),b[c]<0&&(b[c]=0),b[c]>255&&(b[c]=255)}return this},rgba:b,setOpacity:function(a){b[3]=a;return this}}};P.prototype={init:function(a,b){this.element=b==="span"?Y(b):y.createElementNS(xa,b);this.renderer=a},opacity:1,animate:function(a,b,c){b=m(b,va,!0);bb(this);if(b){b=w(b,{});if(c)b.complete=c;kb(this,a,b)}else this.attr(a),c&&c()},colorGradient:function(a,b,c){var d=this.renderer,e,f,g,h,i,j,k,l,o,n,s=[];a.linearGradient?
f="linearGradient":a.radialGradient&&(f="radialGradient");if(f){g=a[f];h=d.gradients;j=a.stops;o=c.radialReference;La(g)&&(a[f]=g={x1:g[0],y1:g[1],x2:g[2],y2:g[3],gradientUnits:"userSpaceOnUse"});f==="radialGradient"&&o&&!r(g.gradientUnits)&&(g=w(g,{cx:o[0]-o[2]/2+g.cx*o[2],cy:o[1]-o[2]/2+g.cy*o[2],r:g.r*o[2],gradientUnits:"userSpaceOnUse"}));for(n in g)n!=="id"&&s.push(n,g[n]);for(n in j)s.push(j[n]);s=s.join(",");h[s]?a=h[s].attr("id"):(g.id=a="highcharts-"+tb++,h[s]=i=d.createElement(f).attr(g).add(d.defs),
i.stops=[],p(j,function(a){a[1].indexOf("rgba")===0?(e=ya(a[1]),k=e.get("rgb"),l=e.get("a")):(k=a[1],l=1);a=d.createElement("stop").attr({offset:a[0],"stop-color":k,"stop-opacity":l}).add(i);i.stops.push(a)}));c.setAttribute(b,"url("+d.url+"#"+a+")")}},attr:function(a,b){var c,d,e=this.element,f,g=this,h;typeof a==="string"&&b!==t&&(c=a,a={},a[c]=b);if(typeof a==="string")g=(this[a+"Getter"]||this._defaultGetter).call(this,a,e);else{for(c in a){d=a[c];h=!1;this.symbolName&&/^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(c)&&
(f||(this.symbolAttr(a),f=!0),h=!0);if(this.rotation&&(c==="x"||c==="y"))this.doTransform=!0;h||(this[c+"Setter"]||this._defaultSetter).call(this,d,c,e);this.shadows&&/^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(c)&&this.updateShadows(c,d)}if(this.doTransform)this.updateTransform(),this.doTransform=!1}return g},updateShadows:function(a,b){for(var c=this.shadows,d=c.length;d--;)c[d].setAttribute(a,a==="height"?v(b-(c[d].cutHeight||0),0):a==="d"?this.d:b)},addClass:function(a){var b=this.element,
c=H(b,"class")||"";c.indexOf(a)===-1&&H(b,"class",c+" "+a);return this},symbolAttr:function(a){var b=this;p("x,y,r,start,end,width,height,innerR,anchorX,anchorY".split(","),function(c){b[c]=m(a[c],b[c])});b.attr({d:b.renderer.symbols[b.symbolName](b.x,b.y,b.width,b.height,b)})},clip:function(a){return this.attr("clip-path",a?"url("+this.renderer.url+"#"+a.id+")":Q)},crisp:function(a){var b,c={},d,e=a.strokeWidth||this.strokeWidth||this.attr&&this.attr("stroke-width")||0;d=u(e)%2/2;a.x=T(a.x||this.x||
0)+d;a.y=T(a.y||this.y||0)+d;a.width=T((a.width||this.width||0)-2*d);a.height=T((a.height||this.height||0)-2*d);a.strokeWidth=e;for(b in a)this[b]!==a[b]&&(this[b]=c[b]=a[b]);return c},css:function(a){var b=this.styles,c={},d=this.element,e,f,g="";e=!b;if(a&&a.color)a.fill=a.color;if(b)for(f in a)a[f]!==b[f]&&(c[f]=a[f],e=!0);if(e){e=this.textWidth=a&&a.width&&d.nodeName.toLowerCase()==="text"&&z(a.width);b&&(a=q(b,c));this.styles=a;e&&(fa||!aa&&this.renderer.forExport)&&delete a.width;if(Aa&&!aa)G(this.element,
a);else{b=function(a,b){return"-"+b.toLowerCase()};for(f in a)g+=f.replace(/([A-Z])/g,b)+":"+a[f]+";";H(d,"style",g)}e&&this.added&&this.renderer.buildText(this)}return this},on:function(a,b){var c=this,d=c.element;$a&&a==="click"?(d.ontouchstart=function(a){c.touchEventFired=Date.now();a.preventDefault();b.call(d,a)},d.onclick=function(a){(wa.indexOf("Android")===-1||Date.now()-(c.touchEventFired||0)>1100)&&b.call(d,a)}):d["on"+a]=b;return this},setRadialReference:function(a){this.element.radialReference=
a;return this},translate:function(a,b){return this.attr({translateX:a,translateY:b})},invert:function(){this.inverted=!0;this.updateTransform();return this},updateTransform:function(){var a=this.translateX||0,b=this.translateY||0,c=this.scaleX,d=this.scaleY,e=this.inverted,f=this.rotation,g=this.element;e&&(a+=this.attr("width"),b+=this.attr("height"));a=["translate("+a+","+b+")"];e?a.push("rotate(90) scale(-1,1)"):f&&a.push("rotate("+f+" "+(g.getAttribute("x")||0)+" "+(g.getAttribute("y")||0)+")");
(r(c)||r(d))&&a.push("scale("+m(c,1)+" "+m(d,1)+")");a.length&&g.setAttribute("transform",a.join(" "))},toFront:function(){var a=this.element;a.parentNode.appendChild(a);return this},align:function(a,b,c){var d,e,f,g,h={};e=this.renderer;f=e.alignedObjects;if(a){if(this.alignOptions=a,this.alignByTranslate=b,!c||Fa(c))this.alignTo=d=c||"renderer",ja(f,this),f.push(this),c=null}else a=this.alignOptions,b=this.alignByTranslate,d=this.alignTo;c=m(c,e[d],e);d=a.align;e=a.verticalAlign;f=(c.x||0)+(a.x||
0);g=(c.y||0)+(a.y||0);if(d==="right"||d==="center")f+=(c.width-(a.width||0))/{right:1,center:2}[d];h[b?"translateX":"x"]=u(f);if(e==="bottom"||e==="middle")g+=(c.height-(a.height||0))/({bottom:1,middle:2}[e]||1);h[b?"translateY":"y"]=u(g);this[this.placed?"animate":"attr"](h);this.placed=!0;this.alignAttr=h;return this},getBBox:function(){var a=this.bBox,b=this.renderer,c,d,e=this.rotation;c=this.element;var f=this.styles,g=e*Ca;d=this.textStr;var h;if(d===""||Ob.test(d))h="num."+d.toString().length+
(f?"|"+f.fontSize+"|"+f.fontFamily:"");h&&(a=b.cache[h]);if(!a){if(c.namespaceURI===xa||b.forExport){try{a=c.getBBox?q({},c.getBBox()):{width:c.offsetWidth,height:c.offsetHeight}}catch(i){}if(!a||a.width<0)a={width:0,height:0}}else a=this.htmlGetBBox();if(b.isSVG){c=a.width;d=a.height;if(Aa&&f&&f.fontSize==="11px"&&d.toPrecision(3)==="16.9")a.height=d=14;if(e)a.width=M(d*ea(g))+M(c*Z(g)),a.height=M(d*Z(g))+M(c*ea(g))}this.bBox=a;h&&(b.cache[h]=a)}return a},show:function(a){return a&&this.element.namespaceURI===
xa?(this.element.removeAttribute("visibility"),this):this.attr({visibility:a?"inherit":"visible"})},hide:function(){return this.attr({visibility:"hidden"})},fadeOut:function(a){var b=this;b.animate({opacity:0},{duration:a||150,complete:function(){b.hide()}})},add:function(a){var b=this.renderer,c=a||b,d=c.element||b.box,e=this.element,f=this.zIndex,g,h;if(a)this.parentGroup=a;this.parentInverted=a&&a.inverted;this.textStr!==void 0&&b.buildText(this);if(f)c.handleZ=!0,f=z(f);if(c.handleZ){a=d.childNodes;
for(g=0;g<a.length;g++)if(b=a[g],c=H(b,"zIndex"),b!==e&&(z(c)>f||!r(f)&&r(c))){d.insertBefore(e,b);h=!0;break}}h||d.appendChild(e);this.added=!0;if(this.onAdd)this.onAdd();return this},safeRemoveChild:function(a){var b=a.parentNode;b&&b.removeChild(a)},destroy:function(){var a=this,b=a.element||{},c=a.shadows,d=a.renderer.isSVG&&b.nodeName==="SPAN"&&a.parentGroup,e,f;b.onclick=b.onmouseout=b.onmouseover=b.onmousemove=b.point=null;bb(a);if(a.clipPath)a.clipPath=a.clipPath.destroy();if(a.stops){for(f=
0;f<a.stops.length;f++)a.stops[f]=a.stops[f].destroy();a.stops=null}a.safeRemoveChild(b);for(c&&p(c,function(b){a.safeRemoveChild(b)});d&&d.div.childNodes.length===0;)b=d.parentGroup,a.safeRemoveChild(d.div),delete d.div,d=b;a.alignTo&&ja(a.renderer.alignedObjects,a);for(e in a)delete a[e];return null},shadow:function(a,b,c){var d=[],e,f,g=this.element,h,i,j,k;if(a){i=m(a.width,3);j=(a.opacity||0.15)/i;k=this.parentInverted?"(-1,-1)":"("+m(a.offsetX,1)+", "+m(a.offsetY,1)+")";for(e=1;e<=i;e++){f=
g.cloneNode(0);h=i*2+1-2*e;H(f,{isShadow:"true",stroke:a.color||"black","stroke-opacity":j*e,"stroke-width":h,transform:"translate"+k,fill:Q});if(c)H(f,"height",v(H(f,"height")-h,0)),f.cutHeight=h;b?b.element.appendChild(f):g.parentNode.insertBefore(f,g);d.push(f)}this.shadows=d}return this},xGetter:function(a){this.element.nodeName==="circle"&&(a={x:"cx",y:"cy"}[a]||a);return this._defaultGetter(a)},_defaultGetter:function(a){a=m(this[a],this.element?this.element.getAttribute(a):null,0);/^[0-9\.]+$/.test(a)&&
(a=parseFloat(a));return a},dSetter:function(a,b,c){a&&a.join&&(a=a.join(" "));/(NaN| {2}|^$)/.test(a)&&(a="M 0 0");c.setAttribute(b,a);this[b]=a},dashstyleSetter:function(a){var b;if(a=a&&a.toLowerCase()){a=a.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash","8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,"").split(",");for(b=a.length;b--;)a[b]=z(a[b])*this.element.getAttribute("stroke-width");
a=a.join(",");this.element.setAttribute("stroke-dasharray",a)}},alignSetter:function(a){this.element.setAttribute("text-anchor",{left:"start",center:"middle",right:"end"}[a])},opacitySetter:function(a,b,c){this[b]=a;c.setAttribute(b,a)},"stroke-widthSetter":function(a,b,c){a===0&&(a=1.0E-5);this.strokeWidth=a;c.setAttribute(b,a)},titleSetter:function(a){var b=this.element.getElementsByTagName("title")[0];b||(b=y.createElementNS(xa,"title"),this.element.appendChild(b));b.textContent=a},textSetter:function(a){if(a!==
this.textStr)delete this.bBox,this.textStr=a,this.added&&this.renderer.buildText(this)},fillSetter:function(a,b,c){typeof a==="string"?c.setAttribute(b,a):a&&this.colorGradient(a,b,c)},zIndexSetter:function(a,b,c){c.setAttribute(b,a);this[b]=a},_defaultSetter:function(a,b,c){c.setAttribute(b,a)}};P.prototype.yGetter=P.prototype.xGetter;P.prototype.translateXSetter=P.prototype.translateYSetter=P.prototype.rotationSetter=P.prototype.verticalAlignSetter=P.prototype.scaleXSetter=P.prototype.scaleYSetter=
function(a,b){this[b]=a;this.doTransform=!0};P.prototype.strokeSetter=P.prototype.fillSetter;var ta=function(){this.init.apply(this,arguments)};ta.prototype={Element:P,init:function(a,b,c,d,e){var f=location,g,d=this.createElement("svg").attr({version:"1.1"}).css(this.getStyle(d));g=d.element;a.appendChild(g);a.innerHTML.indexOf("xmlns")===-1&&H(g,"xmlns",xa);this.isSVG=!0;this.box=g;this.boxWrapper=d;this.alignedObjects=[];this.url=(Ta||ib)&&y.getElementsByTagName("base").length?f.href.replace(/#.*?$/,
"").replace(/([\('\)])/g,"\\$1").replace(/ /g,"%20"):"";this.createElement("desc").add().element.appendChild(y.createTextNode("Created with Highcharts 4.0.1"));this.defs=this.createElement("defs").add();this.forExport=e;this.gradients={};this.cache={};this.setSize(b,c,!1);var h;if(Ta&&a.getBoundingClientRect)this.subPixelFix=b=function(){G(a,{left:0,top:0});h=a.getBoundingClientRect();G(a,{left:Ka(h.left)-h.left+"px",top:Ka(h.top)-h.top+"px"})},b(),K(I,"resize",b)},getStyle:function(a){return this.style=
q({fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',fontSize:"12px"},a)},isHidden:function(){return!this.boxWrapper.getBBox().width},destroy:function(){var a=this.defs;this.box=null;this.boxWrapper=this.boxWrapper.destroy();Oa(this.gradients||{});this.gradients=null;if(a)this.defs=a.destroy();this.subPixelFix&&W(I,"resize",this.subPixelFix);return this.alignedObjects=null},createElement:function(a){var b=new this.Element;b.init(this,a);return b},draw:function(){},
buildText:function(a){for(var b=a.element,c=this,d=c.forExport,e=m(a.textStr,"").toString(),f=e.indexOf("<")!==-1,g=b.childNodes,h,i,j=H(b,"x"),k=a.styles,l=a.textWidth,o=k&&k.lineHeight,n=g.length,s=function(a){return o?z(o):c.fontMetrics(/(px|em)$/.test(a&&a.style.fontSize)?a.style.fontSize:k&&k.fontSize||c.style.fontSize||12).h};n--;)b.removeChild(g[n]);!f&&e.indexOf(" ")===-1?b.appendChild(y.createTextNode(e)):(h=/<.*style="([^"]+)".*>/,i=/<.*href="(http[^"]+)".*>/,l&&!a.added&&this.box.appendChild(b),
e=f?e.replace(/<(b|strong)>/g,'<span style="font-weight:bold">').replace(/<(i|em)>/g,'<span style="font-style:italic">').replace(/<a/g,"<span").replace(/<\/(b|strong|i|em|a)>/g,"</span>").split(/<br.*?>/g):[e],e[e.length-1]===""&&e.pop(),p(e,function(e,f){var g,n=0,e=e.replace(/<span/g,"|||<span").replace(/<\/span>/g,"</span>|||");g=e.split("|||");p(g,function(e){if(e!==""||g.length===1){var o={},m=y.createElementNS(xa,"tspan"),p;h.test(e)&&(p=e.match(h)[1].replace(/(;| |^)color([ :])/,"$1fill$2"),
H(m,"style",p));i.test(e)&&!d&&(H(m,"onclick",'location.href="'+e.match(i)[1]+'"'),G(m,{cursor:"pointer"}));e=(e.replace(/<(.|\n)*?>/g,"")||" ").replace(/&lt;/g,"<").replace(/&gt;/g,">");if(e!==" "){m.appendChild(y.createTextNode(e));if(n)o.dx=0;else if(f&&j!==null)o.x=j;H(m,o);!n&&f&&(!aa&&d&&G(m,{display:"block"}),H(m,"dy",s(m),ib&&m.offsetHeight));b.appendChild(m);n++;if(l)for(var e=e.replace(/([^\^])-/g,"$1- ").split(" "),o=e.length>1&&k.whiteSpace!=="nowrap",$,r,B=a._clipHeight,q=[],v=s(),t=
1;o&&(e.length||q.length);)delete a.bBox,$=a.getBBox(),r=$.width,!aa&&c.forExport&&(r=c.measureSpanWidth(m.firstChild.data,a.styles)),$=r>l,!$||e.length===1?(e=q,q=[],e.length&&(t++,B&&t*v>B?(e=["..."],a.attr("title",a.textStr)):(m=y.createElementNS(xa,"tspan"),H(m,{dy:v,x:j}),p&&H(m,"style",p),b.appendChild(m),r>l&&(l=r)))):(m.removeChild(m.firstChild),q.unshift(e.pop())),e.length&&m.appendChild(y.createTextNode(e.join(" ").replace(/- /g,"-")))}}})}))},button:function(a,b,c,d,e,f,g,h,i){var j=this.label(a,
b,c,i,null,null,null,null,"button"),k=0,l,o,n,s,m,p,a={x1:0,y1:0,x2:0,y2:1},e=w({"stroke-width":1,stroke:"#CCCCCC",fill:{linearGradient:a,stops:[[0,"#FEFEFE"],[1,"#F6F6F6"]]},r:2,padding:5,style:{color:"black"}},e);n=e.style;delete e.style;f=w(e,{stroke:"#68A",fill:{linearGradient:a,stops:[[0,"#FFF"],[1,"#ACF"]]}},f);s=f.style;delete f.style;g=w(e,{stroke:"#68A",fill:{linearGradient:a,stops:[[0,"#9BD"],[1,"#CDF"]]}},g);m=g.style;delete g.style;h=w(e,{style:{color:"#CCC"}},h);p=h.style;delete h.style;
K(j.element,Aa?"mouseover":"mouseenter",function(){k!==3&&j.attr(f).css(s)});K(j.element,Aa?"mouseout":"mouseleave",function(){k!==3&&(l=[e,f,g][k],o=[n,s,m][k],j.attr(l).css(o))});j.setState=function(a){(j.state=k=a)?a===2?j.attr(g).css(m):a===3&&j.attr(h).css(p):j.attr(e).css(n)};return j.on("click",function(){k!==3&&d.call(j)}).attr(e).css(q({cursor:"default"},n))},crispLine:function(a,b){a[1]===a[4]&&(a[1]=a[4]=u(a[1])-b%2/2);a[2]===a[5]&&(a[2]=a[5]=u(a[2])+b%2/2);return a},path:function(a){var b=
{fill:Q};La(a)?b.d=a:ca(a)&&q(b,a);return this.createElement("path").attr(b)},circle:function(a,b,c){a=ca(a)?a:{x:a,y:b,r:c};b=this.createElement("circle");b.xSetter=function(a){this.element.setAttribute("cx",a)};b.ySetter=function(a){this.element.setAttribute("cy",a)};return b.attr(a)},arc:function(a,b,c,d,e,f){if(ca(a))b=a.y,c=a.r,d=a.innerR,e=a.start,f=a.end,a=a.x;a=this.symbol("arc",a||0,b||0,c||0,c||0,{innerR:d||0,start:e||0,end:f||0});a.r=c;return a},rect:function(a,b,c,d,e,f){var e=ca(a)?a.r:
e,g=this.createElement("rect"),a=ca(a)?a:a===t?{}:{x:a,y:b,width:v(c,0),height:v(d,0)};if(f!==t)a.strokeWidth=f,a=g.crisp(a);if(e)a.r=e;g.rSetter=function(a){H(this.element,{rx:a,ry:a})};return g.attr(a)},setSize:function(a,b,c){var d=this.alignedObjects,e=d.length;this.width=a;this.height=b;for(this.boxWrapper[m(c,!0)?"animate":"attr"]({width:a,height:b});e--;)d[e].align()},g:function(a){var b=this.createElement("g");return r(a)?b.attr({"class":"highcharts-"+a}):b},image:function(a,b,c,d,e){var f=
{preserveAspectRatio:Q};arguments.length>1&&q(f,{x:b,y:c,width:d,height:e});f=this.createElement("image").attr(f);f.element.setAttributeNS?f.element.setAttributeNS("http://www.w3.org/1999/xlink","href",a):f.element.setAttribute("hc-svg-href",a);return f},symbol:function(a,b,c,d,e,f){var g,h=this.symbols[a],h=h&&h(u(b),u(c),d,e,f),i=/^url\((.*?)\)$/,j,k;if(h)g=this.path(h),q(g,{symbolName:a,x:b,y:c,width:d,height:e}),f&&q(g,f);else if(i.test(a))k=function(a,b){a.element&&(a.attr({width:b[0],height:b[1]}),
a.alignByTranslate||a.translate(u((d-b[0])/2),u((e-b[1])/2)))},j=a.match(i)[1],a=Kb[j],g=this.image(j).attr({x:b,y:c}),g.isImg=!0,a?k(g,a):(g.attr({width:0,height:0}),Y("img",{onload:function(){k(g,Kb[j]=[this.width,this.height])},src:j}));return g},symbols:{circle:function(a,b,c,d){var e=0.166*c;return["M",a+c/2,b,"C",a+c+e,b,a+c+e,b+d,a+c/2,b+d,"C",a-e,b+d,a-e,b,a+c/2,b,"Z"]},square:function(a,b,c,d){return["M",a,b,"L",a+c,b,a+c,b+d,a,b+d,"Z"]},triangle:function(a,b,c,d){return["M",a+c/2,b,"L",
a+c,b+d,a,b+d,"Z"]},"triangle-down":function(a,b,c,d){return["M",a,b,"L",a+c,b,a+c/2,b+d,"Z"]},diamond:function(a,b,c,d){return["M",a+c/2,b,"L",a+c,b+d/2,a+c/2,b+d,a,b+d/2,"Z"]},arc:function(a,b,c,d,e){var f=e.start,c=e.r||c||d,g=e.end-0.001,d=e.innerR,h=e.open,i=Z(f),j=ea(f),k=Z(g),g=ea(g),e=e.end-f<ma?0:1;return["M",a+c*i,b+c*j,"A",c,c,0,e,1,a+c*k,b+c*g,h?"M":"L",a+d*k,b+d*g,"A",d,d,0,e,0,a+d*i,b+d*j,h?"":"Z"]},callout:function(a,b,c,d,e){var f=C(e&&e.r||0,c,d),g=f+6,h=e&&e.anchorX,i=e&&e.anchorY,
e=u(e.strokeWidth||0)%2/2;a+=e;b+=e;e=["M",a+f,b,"L",a+c-f,b,"C",a+c,b,a+c,b,a+c,b+f,"L",a+c,b+d-f,"C",a+c,b+d,a+c,b+d,a+c-f,b+d,"L",a+f,b+d,"C",a,b+d,a,b+d,a,b+d-f,"L",a,b+f,"C",a,b,a,b,a+f,b];h&&h>c&&i>b+g&&i<b+d-g?e.splice(13,3,"L",a+c,i-6,a+c+6,i,a+c,i+6,a+c,b+d-f):h&&h<0&&i>b+g&&i<b+d-g?e.splice(33,3,"L",a,i+6,a-6,i,a,i-6,a,b+f):i&&i>d&&h>a+g&&h<a+c-g?e.splice(23,3,"L",h+6,b+d,h,b+d+6,h-6,b+d,a+f,b+d):i&&i<0&&h>a+g&&h<a+c-g&&e.splice(3,3,"L",h-6,b,h,b-6,h+6,b,c-f,b);return e}},clipRect:function(a,
b,c,d){var e="highcharts-"+tb++,f=this.createElement("clipPath").attr({id:e}).add(this.defs),a=this.rect(a,b,c,d,0).add(f);a.id=e;a.clipPath=f;return a},text:function(a,b,c,d){var e=fa||!aa&&this.forExport,f={};if(d&&!this.forExport)return this.html(a,b,c);f.x=Math.round(b||0);if(c)f.y=Math.round(c);if(a||a===0)f.text=a;a=this.createElement("text").attr(f);e&&a.css({position:"absolute"});if(!d)a.xSetter=function(a,b,c){var d=c.childNodes,e,f;for(f=1;f<d.length;f++)e=d[f],e.getAttribute("x")===c.getAttribute("x")&&
e.setAttribute("x",a);c.setAttribute(b,a)};return a},fontMetrics:function(a){var a=a||this.style.fontSize,a=/px/.test(a)?z(a):/em/.test(a)?parseFloat(a)*12:12,a=a<24?a+4:u(a*1.2),b=u(a*0.8);return{h:a,b:b}},label:function(a,b,c,d,e,f,g,h,i){function j(){var a,b;a=s.element.style;J=(Va===void 0||wb===void 0||n.styles.textAlign)&&s.textStr&&s.getBBox();n.width=(Va||J.width||0)+2*x+v;n.height=(wb||J.height||0)+2*x;na=x+o.fontMetrics(a&&a.fontSize).b;if(z){if(!m)a=u(-L*x),b=h?-na:0,n.box=m=d?o.symbol(d,
a,b,n.width,n.height,B):o.rect(a,b,n.width,n.height,0,B[Pb]),m.attr("fill",Q).add(n);m.isImg||m.attr(q({width:u(n.width),height:u(n.height)},B));B=null}}function k(){var a=n.styles,a=a&&a.textAlign,b=v+x*(1-L),c;c=h?0:na;if(r(Va)&&J&&(a==="center"||a==="right"))b+={center:0.5,right:1}[a]*(Va-J.width);if(b!==s.x||c!==s.y)s.attr("x",b),c!==t&&s.attr("y",c);s.x=b;s.y=c}function l(a,b){m?m.attr(a,b):B[a]=b}var o=this,n=o.g(i),s=o.text("",0,0,g).attr({zIndex:1}),m,J,L=0,x=3,v=0,Va,wb,xb,yb,y=0,B={},na,
z;n.onAdd=function(){s.add(n);n.attr({text:a||"",x:b,y:c});m&&r(e)&&n.attr({anchorX:e,anchorY:f})};n.widthSetter=function(a){Va=a};n.heightSetter=function(a){wb=a};n.paddingSetter=function(a){r(a)&&a!==x&&(x=a,k())};n.paddingLeftSetter=function(a){r(a)&&a!==v&&(v=a,k())};n.alignSetter=function(a){L={left:0,center:0.5,right:1}[a]};n.textSetter=function(a){a!==t&&s.textSetter(a);j();k()};n["stroke-widthSetter"]=function(a,b){a&&(z=!0);y=a%2/2;l(b,a)};n.strokeSetter=n.fillSetter=n.rSetter=function(a,
b){b==="fill"&&a&&(z=!0);l(b,a)};n.anchorXSetter=function(a,b){e=a;l(b,a+y-xb)};n.anchorYSetter=function(a,b){f=a;l(b,a-yb)};n.xSetter=function(a){n.x=a;L&&(a-=L*((Va||J.width)+x));xb=u(a);n.attr("translateX",xb)};n.ySetter=function(a){yb=n.y=u(a);n.attr("translateY",yb)};var A=n.css;return q(n,{css:function(a){if(a){var b={},a=w(a);p("fontSize,fontWeight,fontFamily,color,lineHeight,width,textDecoration,textShadow".split(","),function(c){a[c]!==t&&(b[c]=a[c],delete a[c])});s.css(b)}return A.call(n,
a)},getBBox:function(){return{width:J.width+2*x,height:J.height+2*x,x:J.x-x,y:J.y-x}},shadow:function(a){m&&m.shadow(a);return n},destroy:function(){W(n.element,"mouseenter");W(n.element,"mouseleave");s&&(s=s.destroy());m&&(m=m.destroy());P.prototype.destroy.call(n);n=o=j=k=l=null}})}};Za=ta;q(P.prototype,{htmlCss:function(a){var b=this.element;if(b=a&&b.tagName==="SPAN"&&a.width)delete a.width,this.textWidth=b,this.updateTransform();this.styles=q(this.styles,a);G(this.element,a);return this},htmlGetBBox:function(){var a=
this.element,b=this.bBox;if(!b){if(a.nodeName==="text")a.style.position="absolute";b=this.bBox={x:a.offsetLeft,y:a.offsetTop,width:a.offsetWidth,height:a.offsetHeight}}return b},htmlUpdateTransform:function(){if(this.added){var a=this.renderer,b=this.element,c=this.translateX||0,d=this.translateY||0,e=this.x||0,f=this.y||0,g=this.textAlign||"left",h={left:0,center:0.5,right:1}[g],i=this.shadows;G(b,{marginLeft:c,marginTop:d});i&&p(i,function(a){G(a,{marginLeft:c+1,marginTop:d+1})});this.inverted&&
p(b.childNodes,function(c){a.invertChild(c,b)});if(b.tagName==="SPAN"){var j=this.rotation,k,l=z(this.textWidth),o=[j,g,b.innerHTML,this.textWidth].join(",");if(o!==this.cTT){k=a.fontMetrics(b.style.fontSize).b;r(j)&&this.setSpanRotation(j,h,k);i=m(this.elemWidth,b.offsetWidth);if(i>l&&/[ \-]/.test(b.textContent||b.innerText))G(b,{width:l+"px",display:"block",whiteSpace:"normal"}),i=l;this.getSpanCorrection(i,k,h,j,g)}G(b,{left:e+(this.xCorr||0)+"px",top:f+(this.yCorr||0)+"px"});if(ib)k=b.offsetHeight;
this.cTT=o}}else this.alignOnAdd=!0},setSpanRotation:function(a,b,c){var d={},e=Aa?"-ms-transform":ib?"-webkit-transform":Ta?"MozTransform":Ib?"-o-transform":"";d[e]=d.transform="rotate("+a+"deg)";d[e+(Ta?"Origin":"-origin")]=d.transformOrigin=b*100+"% "+c+"px";G(this.element,d)},getSpanCorrection:function(a,b,c){this.xCorr=-a*c;this.yCorr=-b}});q(ta.prototype,{html:function(a,b,c){var d=this.createElement("span"),e=d.element,f=d.renderer;d.textSetter=function(a){a!==e.innerHTML&&delete this.bBox;
e.innerHTML=this.textStr=a};d.xSetter=d.ySetter=d.alignSetter=d.rotationSetter=function(a,b){b==="align"&&(b="textAlign");d[b]=a;d.htmlUpdateTransform()};d.attr({text:a,x:u(b),y:u(c)}).css({position:"absolute",whiteSpace:"nowrap",fontFamily:this.style.fontFamily,fontSize:this.style.fontSize});d.css=d.htmlCss;if(f.isSVG)d.add=function(a){var b,c=f.box.parentNode,j=[];if(this.parentGroup=a){if(b=a.div,!b){for(;a;)j.push(a),a=a.parentGroup;p(j.reverse(),function(a){var d;b=a.div=a.div||Y(Ja,{className:H(a.element,
"class")},{position:"absolute",left:(a.translateX||0)+"px",top:(a.translateY||0)+"px"},b||c);d=b.style;q(a,{translateXSetter:function(b,c){d.left=b+"px";a[c]=b;a.doTransform=!0},translateYSetter:function(b,c){d.top=b+"px";a[c]=b;a.doTransform=!0},visibilitySetter:function(a,b){d[b]=a}})})}}else b=c;b.appendChild(e);d.added=!0;d.alignOnAdd&&d.htmlUpdateTransform();return d};return d}});var X;if(!aa&&!fa){R.VMLElement=X={init:function(a,b){var c=["<",b,' filled="f" stroked="f"'],d=["position: ","absolute",
";"],e=b===Ja;(b==="shape"||e)&&d.push("left:0;top:0;width:1px;height:1px;");d.push("visibility: ",e?"hidden":"visible");c.push(' style="',d.join(""),'"/>');if(b)c=e||b==="span"||b==="img"?c.join(""):a.prepVML(c),this.element=Y(c);this.renderer=a},add:function(a){var b=this.renderer,c=this.element,d=b.box,d=a?a.element||a:d;a&&a.inverted&&b.invertChild(c,d);d.appendChild(c);this.added=!0;this.alignOnAdd&&!this.deferUpdateTransform&&this.updateTransform();if(this.onAdd)this.onAdd();return this},updateTransform:P.prototype.htmlUpdateTransform,
setSpanRotation:function(){var a=this.rotation,b=Z(a*Ca),c=ea(a*Ca);G(this.element,{filter:a?["progid:DXImageTransform.Microsoft.Matrix(M11=",b,", M12=",-c,", M21=",c,", M22=",b,", sizingMethod='auto expand')"].join(""):Q})},getSpanCorrection:function(a,b,c,d,e){var f=d?Z(d*Ca):1,g=d?ea(d*Ca):0,h=m(this.elemHeight,this.element.offsetHeight),i;this.xCorr=f<0&&-a;this.yCorr=g<0&&-h;i=f*g<0;this.xCorr+=g*b*(i?1-c:c);this.yCorr-=f*b*(d?i?c:1-c:1);e&&e!=="left"&&(this.xCorr-=a*c*(f<0?-1:1),d&&(this.yCorr-=
h*c*(g<0?-1:1)),G(this.element,{textAlign:e}))},pathToVML:function(a){for(var b=a.length,c=[];b--;)if(ha(a[b]))c[b]=u(a[b]*10)-5;else if(a[b]==="Z")c[b]="x";else if(c[b]=a[b],a.isArc&&(a[b]==="wa"||a[b]==="at"))c[b+5]===c[b+7]&&(c[b+7]+=a[b+7]>a[b+5]?1:-1),c[b+6]===c[b+8]&&(c[b+8]+=a[b+8]>a[b+6]?1:-1);return c.join(" ")||"x"},clip:function(a){var b=this,c;a?(c=a.members,ja(c,b),c.push(b),b.destroyClip=function(){ja(c,b)},a=a.getCSS(b)):(b.destroyClip&&b.destroyClip(),a={clip:hb?"inherit":"rect(auto)"});
return b.css(a)},css:P.prototype.htmlCss,safeRemoveChild:function(a){a.parentNode&&Pa(a)},destroy:function(){this.destroyClip&&this.destroyClip();return P.prototype.destroy.apply(this)},on:function(a,b){this.element["on"+a]=function(){var a=I.event;a.target=a.srcElement;b(a)};return this},cutOffPath:function(a,b){var c,a=a.split(/[ ,]/);c=a.length;if(c===9||c===11)a[c-4]=a[c-2]=z(a[c-2])-10*b;return a.join(" ")},shadow:function(a,b,c){var d=[],e,f=this.element,g=this.renderer,h,i=f.style,j,k=f.path,
l,o,n,s;k&&typeof k.value!=="string"&&(k="x");o=k;if(a){n=m(a.width,3);s=(a.opacity||0.15)/n;for(e=1;e<=3;e++){l=n*2+1-2*e;c&&(o=this.cutOffPath(k.value,l+0.5));j=['<shape isShadow="true" strokeweight="',l,'" filled="false" path="',o,'" coordsize="10 10" style="',f.style.cssText,'" />'];h=Y(g.prepVML(j),null,{left:z(i.left)+m(a.offsetX,1),top:z(i.top)+m(a.offsetY,1)});if(c)h.cutOff=l+1;j=['<stroke color="',a.color||"black",'" opacity="',s*e,'"/>'];Y(g.prepVML(j),null,null,h);b?b.element.appendChild(h):
f.parentNode.insertBefore(h,f);d.push(h)}this.shadows=d}return this},updateShadows:sa,setAttr:function(a,b){hb?this.element[a]=b:this.element.setAttribute(a,b)},classSetter:function(a){this.element.className=a},dashstyleSetter:function(a,b,c){(c.getElementsByTagName("stroke")[0]||Y(this.renderer.prepVML(["<stroke/>"]),null,null,c))[b]=a||"solid";this[b]=a},dSetter:function(a,b,c){var d=this.shadows,a=a||[];this.d=a.join(" ");c.path=a=this.pathToVML(a);if(d)for(c=d.length;c--;)d[c].path=d[c].cutOff?
this.cutOffPath(a,d[c].cutOff):a;this.setAttr(b,a)},fillSetter:function(a,b,c){var d=c.nodeName;if(d==="SPAN")c.style.color=a;else if(d!=="IMG")c.filled=a!==Q,this.setAttr("fillcolor",this.renderer.color(a,c,b,this))},opacitySetter:sa,rotationSetter:function(a,b,c){c=c.style;this[b]=c[b]=a;c.left=-u(ea(a*Ca)+1)+"px";c.top=u(Z(a*Ca))+"px"},strokeSetter:function(a,b,c){this.setAttr("strokecolor",this.renderer.color(a,c,b))},"stroke-widthSetter":function(a,b,c){c.stroked=!!a;this[b]=a;ha(a)&&(a+="px");
this.setAttr("strokeweight",a)},titleSetter:function(a,b){this.setAttr(b,a)},visibilitySetter:function(a,b,c){a==="inherit"&&(a="visible");this.shadows&&p(this.shadows,function(c){c.style[b]=a});c.nodeName==="DIV"&&(a=a==="hidden"?"-999em":0,hb||(c.style[b]=a?"visible":"hidden"),b="top");c.style[b]=a},xSetter:function(a,b,c){this[b]=a;b==="x"?b="left":b==="y"&&(b="top");this.updateClipping?(this[b]=a,this.updateClipping()):c.style[b]=a},zIndexSetter:function(a,b,c){c.style[b]=a}};X=ka(P,X);X.prototype.ySetter=
X.prototype.widthSetter=X.prototype.heightSetter=X.prototype.xSetter;var ga={Element:X,isIE8:wa.indexOf("MSIE 8.0")>-1,init:function(a,b,c,d){var e;this.alignedObjects=[];d=this.createElement(Ja).css(q(this.getStyle(d),{position:"relative"}));e=d.element;a.appendChild(d.element);this.isVML=!0;this.box=e;this.boxWrapper=d;this.cache={};this.setSize(b,c,!1);if(!y.namespaces.hcv){y.namespaces.add("hcv","urn:schemas-microsoft-com:vml");try{y.createStyleSheet().cssText="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}catch(f){y.styleSheets[0].cssText+=
"hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}}},isHidden:function(){return!this.box.offsetWidth},clipRect:function(a,b,c,d){var e=this.createElement(),f=ca(a);return q(e,{members:[],left:(f?a.x:a)+1,top:(f?a.y:b)+1,width:(f?a.width:c)-1,height:(f?a.height:d)-1,getCSS:function(a){var b=a.element,c=b.nodeName,a=a.inverted,d=this.top-(c==="shape"?b.offsetTop:0),e=this.left,b=e+this.width,f=d+this.height,d={clip:"rect("+u(a?e:d)+"px,"+u(a?
f:b)+"px,"+u(a?b:f)+"px,"+u(a?d:e)+"px)"};!a&&hb&&c==="DIV"&&q(d,{width:b+"px",height:f+"px"});return d},updateClipping:function(){p(e.members,function(a){a.element&&a.css(e.getCSS(a))})}})},color:function(a,b,c,d){var e=this,f,g=/^rgba/,h,i,j=Q;a&&a.linearGradient?i="gradient":a&&a.radialGradient&&(i="pattern");if(i){var k,l,o=a.linearGradient||a.radialGradient,n,s,m,J,L,x="",a=a.stops,r,v=[],q=function(){h=['<fill colors="'+v.join(",")+'" opacity="',m,'" o:opacity2="',s,'" type="',i,'" ',x,'focus="100%" method="any" />'];
Y(e.prepVML(h),null,null,b)};n=a[0];r=a[a.length-1];n[0]>0&&a.unshift([0,n[1]]);r[0]<1&&a.push([1,r[1]]);p(a,function(a,b){g.test(a[1])?(f=ya(a[1]),k=f.get("rgb"),l=f.get("a")):(k=a[1],l=1);v.push(a[0]*100+"% "+k);b?(m=l,J=k):(s=l,L=k)});if(c==="fill")if(i==="gradient")c=o.x1||o[0]||0,a=o.y1||o[1]||0,n=o.x2||o[2]||0,o=o.y2||o[3]||0,x='angle="'+(90-U.atan((o-a)/(n-c))*180/ma)+'"',q();else{var j=o.r,t=j*2,u=j*2,y=o.cx,B=o.cy,na=b.radialReference,w,j=function(){na&&(w=d.getBBox(),y+=(na[0]-w.x)/w.width-
0.5,B+=(na[1]-w.y)/w.height-0.5,t*=na[2]/w.width,u*=na[2]/w.height);x='src="'+E.global.VMLRadialGradientURL+'" size="'+t+","+u+'" origin="0.5,0.5" position="'+y+","+B+'" color2="'+L+'" ';q()};d.added?j():d.onAdd=j;j=J}else j=k}else if(g.test(a)&&b.tagName!=="IMG")f=ya(a),h=["<",c,' opacity="',f.get("a"),'"/>'],Y(this.prepVML(h),null,null,b),j=f.get("rgb");else{j=b.getElementsByTagName(c);if(j.length)j[0].opacity=1,j[0].type="solid";j=a}return j},prepVML:function(a){var b=this.isIE8,a=a.join("");b?
(a=a.replace("/>",' xmlns="urn:schemas-microsoft-com:vml" />'),a=a.indexOf('style="')===-1?a.replace("/>",' style="display:inline-block;behavior:url(#default#VML);" />'):a.replace('style="','style="display:inline-block;behavior:url(#default#VML);')):a=a.replace("<","<hcv:");return a},text:ta.prototype.html,path:function(a){var b={coordsize:"10 10"};La(a)?b.d=a:ca(a)&&q(b,a);return this.createElement("shape").attr(b)},circle:function(a,b,c){var d=this.symbol("circle");if(ca(a))c=a.r,b=a.y,a=a.x;d.isCircle=
!0;d.r=c;return d.attr({x:a,y:b})},g:function(a){var b;a&&(b={className:"highcharts-"+a,"class":"highcharts-"+a});return this.createElement(Ja).attr(b)},image:function(a,b,c,d,e){var f=this.createElement("img").attr({src:a});arguments.length>1&&f.attr({x:b,y:c,width:d,height:e});return f},createElement:function(a){return a==="rect"?this.symbol(a):ta.prototype.createElement.call(this,a)},invertChild:function(a,b){var c=this,d=b.style,e=a.tagName==="IMG"&&a.style;G(a,{flip:"x",left:z(d.width)-(e?z(e.top):
1),top:z(d.height)-(e?z(e.left):1),rotation:-90});p(a.childNodes,function(b){c.invertChild(b,a)})},symbols:{arc:function(a,b,c,d,e){var f=e.start,g=e.end,h=e.r||c||d,c=e.innerR,d=Z(f),i=ea(f),j=Z(g),k=ea(g);if(g-f===0)return["x"];f=["wa",a-h,b-h,a+h,b+h,a+h*d,b+h*i,a+h*j,b+h*k];e.open&&!c&&f.push("e","M",a,b);f.push("at",a-c,b-c,a+c,b+c,a+c*j,b+c*k,a+c*d,b+c*i,"x","e");f.isArc=!0;return f},circle:function(a,b,c,d,e){e&&(c=d=2*e.r);e&&e.isCircle&&(a-=c/2,b-=d/2);return["wa",a,b,a+c,b+d,a+c,b+d/2,a+
c,b+d/2,"e"]},rect:function(a,b,c,d,e){return ta.prototype.symbols[!r(e)||!e.r?"square":"callout"].call(0,a,b,c,d,e)}}};R.VMLRenderer=X=function(){this.init.apply(this,arguments)};X.prototype=w(ta.prototype,ga);Za=X}ta.prototype.measureSpanWidth=function(a,b){var c=y.createElement("span"),d;d=y.createTextNode(a);c.appendChild(d);G(c,b);this.box.appendChild(c);d=c.offsetWidth;Pa(c);return d};var Lb;if(fa)R.CanVGRenderer=X=function(){xa="http://www.w3.org/1999/xhtml"},X.prototype.symbols={},Lb=function(){function a(){var a=
b.length,d;for(d=0;d<a;d++)b[d]();b=[]}var b=[];return{push:function(c,d){b.length===0&&Qb(d,a);b.push(c)}}}(),Za=X;Sa.prototype={addLabel:function(){var a=this.axis,b=a.options,c=a.chart,d=a.horiz,e=a.categories,f=a.names,g=this.pos,h=b.labels,i=a.tickPositions,d=d&&e&&!h.step&&!h.staggerLines&&!h.rotation&&c.plotWidth/i.length||!d&&(c.margin[3]||c.chartWidth*0.33),j=g===i[0],k=g===i[i.length-1],l,f=e?m(e[g],f[g],g):g,e=this.label,o=i.info;a.isDatetimeAxis&&o&&(l=b.dateTimeLabelFormats[o.higherRanks[g]||
o.unitName]);this.isFirst=j;this.isLast=k;b=a.labelFormatter.call({axis:a,chart:c,isFirst:j,isLast:k,dateTimeLabelFormat:l,value:a.isLog?da(ia(f)):f});g=d&&{width:v(1,u(d-2*(h.padding||10)))+"px"};g=q(g,h.style);if(r(e))e&&e.attr({text:b}).css(g);else{l={align:a.labelAlign};if(ha(h.rotation))l.rotation=h.rotation;if(d&&h.ellipsis)l._clipHeight=a.len/i.length;this.label=r(b)&&h.enabled?c.renderer.text(b,0,0,h.useHTML).attr(l).css(g).add(a.labelGroup):null}},getLabelSize:function(){var a=this.label,
b=this.axis;return a?a.getBBox()[b.horiz?"height":"width"]:0},getLabelSides:function(){var a=this.label.getBBox(),b=this.axis,c=b.horiz,d=b.options.labels,a=c?a.width:a.height,b=c?d.x-a*{left:0,center:0.5,right:1}[b.labelAlign]:0;return[b,c?a+b:a]},handleOverflow:function(a,b){var c=!0,d=this.axis,e=this.isFirst,f=this.isLast,g=d.horiz?b.x:b.y,h=d.reversed,i=d.tickPositions,j=this.getLabelSides(),k=j[0],j=j[1],l,o,n,s=this.label.line||0;l=d.labelEdge;o=d.justifyLabels&&(e||f);l[s]===t||g+k>l[s]?l[s]=
g+j:o||(c=!1);if(o){l=(o=d.justifyToPlot)?d.pos:0;o=o?l+d.len:d.chart.chartWidth;do a+=e?1:-1,n=d.ticks[i[a]];while(i[a]&&(!n||n.label.line!==s));d=n&&n.label.xy&&n.label.xy.x+n.getLabelSides()[e?0:1];e&&!h||f&&h?g+k<l&&(g=l-k,n&&g+j>d&&(c=!1)):g+j>o&&(g=o-j,n&&g+k<d&&(c=!1));b.x=g}return c},getPosition:function(a,b,c,d){var e=this.axis,f=e.chart,g=d&&f.oldChartHeight||f.chartHeight;return{x:a?e.translate(b+c,null,null,d)+e.transB:e.left+e.offset+(e.opposite?(d&&f.oldChartWidth||f.chartWidth)-e.right-
e.left:0),y:a?g-e.bottom+e.offset-(e.opposite?e.height:0):g-e.translate(b+c,null,null,d)-e.transB}},getLabelPosition:function(a,b,c,d,e,f,g,h){var i=this.axis,j=i.transA,k=i.reversed,l=i.staggerLines,o=i.chart.renderer.fontMetrics(e.style.fontSize).b,n=e.rotation,a=a+e.x-(f&&d?f*j*(k?-1:1):0),b=b+e.y-(f&&!d?f*j*(k?1:-1):0);n&&i.side===2&&(b-=o-o*Z(n*Ca));!r(e.y)&&!n&&(b+=o-c.getBBox().height/2);if(l)c.line=g/(h||1)%l,b+=c.line*(i.labelOffset/l);return{x:a,y:b}},getMarkPath:function(a,b,c,d,e,f){return f.crispLine(["M",
a,b,"L",a+(e?0:-c),b+(e?c:0)],d)},render:function(a,b,c){var d=this.axis,e=d.options,f=d.chart.renderer,g=d.horiz,h=this.type,i=this.label,j=this.pos,k=e.labels,l=this.gridLine,o=h?h+"Grid":"grid",n=h?h+"Tick":"tick",s=e[o+"LineWidth"],p=e[o+"LineColor"],J=e[o+"LineDashStyle"],L=e[n+"Length"],o=e[n+"Width"]||0,x=e[n+"Color"],r=e[n+"Position"],n=this.mark,v=k.step,q=!0,u=d.tickmarkOffset,w=this.getPosition(g,j,u,b),y=w.x,w=w.y,B=g&&y===d.pos+d.len||!g&&w===d.pos?-1:1;this.isActive=!0;if(s){j=d.getPlotLinePath(j+
u,s*B,b,!0);if(l===t){l={stroke:p,"stroke-width":s};if(J)l.dashstyle=J;if(!h)l.zIndex=1;if(b)l.opacity=0;this.gridLine=l=s?f.path(j).attr(l).add(d.gridGroup):null}if(!b&&l&&j)l[this.isNew?"attr":"animate"]({d:j,opacity:c})}if(o&&L)r==="inside"&&(L=-L),d.opposite&&(L=-L),h=this.getMarkPath(y,w,L,o*B,g,f),n?n.animate({d:h,opacity:c}):this.mark=f.path(h).attr({stroke:x,"stroke-width":o,opacity:c}).add(d.axisGroup);if(i&&!isNaN(y))i.xy=w=this.getLabelPosition(y,w,i,g,k,u,a,v),this.isFirst&&!this.isLast&&
!m(e.showFirstLabel,1)||this.isLast&&!this.isFirst&&!m(e.showLastLabel,1)?q=!1:!d.isRadial&&!k.step&&!k.rotation&&!b&&c!==0&&(q=this.handleOverflow(a,w)),v&&a%v&&(q=!1),q&&!isNaN(w.y)?(w.opacity=c,i[this.isNew?"attr":"animate"](w),this.isNew=!1):i.attr("y",-9999)},destroy:function(){Oa(this,this.axis)}};R.PlotLineOrBand=function(a,b){this.axis=a;if(b)this.options=b,this.id=b.id};R.PlotLineOrBand.prototype={render:function(){var a=this,b=a.axis,c=b.horiz,d=(b.pointRange||0)/2,e=a.options,f=e.label,
g=a.label,h=e.width,i=e.to,j=e.from,k=r(j)&&r(i),l=e.value,o=e.dashStyle,n=a.svgElem,s=[],p,J=e.color,L=e.zIndex,x=e.events,q={},t=b.chart.renderer;b.isLog&&(j=za(j),i=za(i),l=za(l));if(h){if(s=b.getPlotLinePath(l,h),q={stroke:J,"stroke-width":h},o)q.dashstyle=o}else if(k){j=v(j,b.min-d);i=C(i,b.max+d);s=b.getPlotBandPath(j,i,e);if(J)q.fill=J;if(e.borderWidth)q.stroke=e.borderColor,q["stroke-width"]=e.borderWidth}else return;if(r(L))q.zIndex=L;if(n)if(s)n.animate({d:s},null,n.onGetPath);else{if(n.hide(),
n.onGetPath=function(){n.show()},g)a.label=g=g.destroy()}else if(s&&s.length&&(a.svgElem=n=t.path(s).attr(q).add(),x))for(p in d=function(b){n.on(b,function(c){x[b].apply(a,[c])})},x)d(p);if(f&&r(f.text)&&s&&s.length&&b.width>0&&b.height>0){f=w({align:c&&k&&"center",x:c?!k&&4:10,verticalAlign:!c&&k&&"middle",y:c?k?16:10:k?6:-4,rotation:c&&!k&&90},f);if(!g){q={align:f.textAlign||f.align,rotation:f.rotation};if(r(L))q.zIndex=L;a.label=g=t.text(f.text,0,0,f.useHTML).attr(q).css(f.style).add()}b=[s[1],
s[4],m(s[6],s[1])];s=[s[2],s[5],m(s[7],s[2])];c=Na(b);k=Na(s);g.align(f,!1,{x:c,y:k,width:Ba(b)-c,height:Ba(s)-k});g.show()}else g&&g.hide();return a},destroy:function(){ja(this.axis.plotLinesAndBands,this);delete this.axis;Oa(this)}};la.prototype={defaultOptions:{dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%e. %b",week:"%e. %b",month:"%b '%y",year:"%Y"},endOnTick:!1,gridLineColor:"#C0C0C0",labels:N,lineColor:"#C0D0E0",lineWidth:1,minPadding:0.01,
maxPadding:0.01,minorGridLineColor:"#E0E0E0",minorGridLineWidth:1,minorTickColor:"#A0A0A0",minorTickLength:2,minorTickPosition:"outside",startOfWeek:1,startOnTick:!1,tickColor:"#C0D0E0",tickLength:10,tickmarkPlacement:"between",tickPixelInterval:100,tickPosition:"outside",tickWidth:1,title:{align:"middle",style:{color:"#707070"}},type:"linear"},defaultYAxisOptions:{endOnTick:!0,gridLineWidth:1,tickPixelInterval:72,showLastLabel:!0,labels:{x:-8,y:3},lineWidth:0,maxPadding:0.05,minPadding:0.05,startOnTick:!0,
tickWidth:0,title:{rotation:270,text:"Values"},stackLabels:{enabled:!1,formatter:function(){return Ga(this.total,-1)},style:N.style}},defaultLeftAxisOptions:{labels:{x:-15,y:null},title:{rotation:270}},defaultRightAxisOptions:{labels:{x:15,y:null},title:{rotation:90}},defaultBottomAxisOptions:{labels:{x:0,y:20},title:{rotation:0}},defaultTopAxisOptions:{labels:{x:0,y:-15},title:{rotation:0}},init:function(a,b){var c=b.isX;this.horiz=a.inverted?!c:c;this.coll=(this.isXAxis=c)?"xAxis":"yAxis";this.opposite=
b.opposite;this.side=b.side||(this.horiz?this.opposite?0:2:this.opposite?1:3);this.setOptions(b);var d=this.options,e=d.type;this.labelFormatter=d.labels.formatter||this.defaultLabelFormatter;this.userOptions=b;this.minPixelPadding=0;this.chart=a;this.reversed=d.reversed;this.zoomEnabled=d.zoomEnabled!==!1;this.categories=d.categories||e==="category";this.names=[];this.isLog=e==="logarithmic";this.isDatetimeAxis=e==="datetime";this.isLinked=r(d.linkedTo);this.tickmarkOffset=this.categories&&d.tickmarkPlacement===
"between"?0.5:0;this.ticks={};this.labelEdge=[];this.minorTicks={};this.plotLinesAndBands=[];this.alternateBands={};this.len=0;this.minRange=this.userMinRange=d.minRange||d.maxZoom;this.range=d.range;this.offset=d.offset||0;this.stacks={};this.oldStacks={};this.min=this.max=null;this.crosshair=m(d.crosshair,qa(a.options.tooltip.crosshairs)[c?0:1],!1);var f,d=this.options.events;Da(this,a.axes)===-1&&(c&&!this.isColorAxis?a.axes.splice(a.xAxis.length,0,this):a.axes.push(this),a[this.coll].push(this));
this.series=this.series||[];if(a.inverted&&c&&this.reversed===t)this.reversed=!0;this.removePlotLine=this.removePlotBand=this.removePlotBandOrLine;for(f in d)K(this,f,d[f]);if(this.isLog)this.val2lin=za,this.lin2val=ia},setOptions:function(a){this.options=w(this.defaultOptions,this.isXAxis?{}:this.defaultYAxisOptions,[this.defaultTopAxisOptions,this.defaultRightAxisOptions,this.defaultBottomAxisOptions,this.defaultLeftAxisOptions][this.side],w(E[this.coll],a))},defaultLabelFormatter:function(){var a=
this.axis,b=this.value,c=a.categories,d=this.dateTimeLabelFormat,e=E.lang.numericSymbols,f=e&&e.length,g,h=a.options.labels.format,a=a.isLog?b:a.tickInterval;if(h)g=Ia(h,this);else if(c)g=b;else if(d)g=cb(d,b);else if(f&&a>=1E3)for(;f--&&g===t;)c=Math.pow(1E3,f+1),a>=c&&e[f]!==null&&(g=Ga(b/c,-1)+e[f]);g===t&&(g=M(b)>=1E4?Ga(b,0):Ga(b,-1,t,""));return g},getSeriesExtremes:function(){var a=this,b=a.chart;a.hasVisibleSeries=!1;a.dataMin=a.dataMax=null;a.buildStacks&&a.buildStacks();p(a.series,function(c){if(c.visible||
!b.options.chart.ignoreHiddenSeries){var d;d=c.options.threshold;var e;a.hasVisibleSeries=!0;a.isLog&&d<=0&&(d=null);if(a.isXAxis){if(d=c.xData,d.length)a.dataMin=C(m(a.dataMin,d[0]),Na(d)),a.dataMax=v(m(a.dataMax,d[0]),Ba(d))}else{c.getExtremes();e=c.dataMax;c=c.dataMin;if(r(c)&&r(e))a.dataMin=C(m(a.dataMin,c),c),a.dataMax=v(m(a.dataMax,e),e);if(r(d))if(a.dataMin>=d)a.dataMin=d,a.ignoreMinPadding=!0;else if(a.dataMax<d)a.dataMax=d,a.ignoreMaxPadding=!0}}})},translate:function(a,b,c,d,e,f){var g=
1,h=0,i=d?this.oldTransA:this.transA,d=d?this.oldMin:this.min,j=this.minPixelPadding,e=(this.options.ordinal||this.isLog&&e)&&this.lin2val;if(!i)i=this.transA;if(c)g*=-1,h=this.len;this.reversed&&(g*=-1,h-=g*(this.sector||this.len));b?(a=a*g+h,a-=j,a=a/i+d,e&&(a=this.lin2val(a))):(e&&(a=this.val2lin(a)),f==="between"&&(f=0.5),a=g*(a-d)*i+h+g*j+(ha(f)?i*f*this.pointRange:0));return a},toPixels:function(a,b){return this.translate(a,!1,!this.horiz,null,!0)+(b?0:this.pos)},toValue:function(a,b){return this.translate(a-
(b?0:this.pos),!0,!this.horiz,null,!0)},getPlotLinePath:function(a,b,c,d,e){var f=this.chart,g=this.left,h=this.top,i,j,k=c&&f.oldChartHeight||f.chartHeight,l=c&&f.oldChartWidth||f.chartWidth,o;i=this.transB;e=m(e,this.translate(a,null,null,c));a=c=u(e+i);i=j=u(k-e-i);if(isNaN(e))o=!0;else if(this.horiz){if(i=h,j=k-this.bottom,a<g||a>g+this.width)o=!0}else if(a=g,c=l-this.right,i<h||i>h+this.height)o=!0;return o&&!d?null:f.renderer.crispLine(["M",a,i,"L",c,j],b||1)},getLinearTickPositions:function(a,
b,c){var d,e=da(T(b/a)*a),f=da(Ka(c/a)*a),g=[];if(b===c&&ha(b))return[b];for(b=e;b<=f;){g.push(b);b=da(b+a);if(b===d)break;d=b}return g},getMinorTickPositions:function(){var a=this.options,b=this.tickPositions,c=this.minorTickInterval,d=[],e;if(this.isLog){e=b.length;for(a=1;a<e;a++)d=d.concat(this.getLogTickPositions(c,b[a-1],b[a],!0))}else if(this.isDatetimeAxis&&a.minorTickInterval==="auto")d=d.concat(this.getTimeTicks(this.normalizeTimeTickInterval(c),this.min,this.max,a.startOfWeek)),d[0]<this.min&&
d.shift();else for(b=this.min+(b[0]-this.min)%c;b<=this.max;b+=c)d.push(b);return d},adjustForMinRange:function(){var a=this.options,b=this.min,c=this.max,d,e=this.dataMax-this.dataMin>=this.minRange,f,g,h,i,j;if(this.isXAxis&&this.minRange===t&&!this.isLog)r(a.min)||r(a.max)?this.minRange=null:(p(this.series,function(a){i=a.xData;for(g=j=a.xIncrement?1:i.length-1;g>0;g--)if(h=i[g]-i[g-1],f===t||h<f)f=h}),this.minRange=C(f*5,this.dataMax-this.dataMin));if(c-b<this.minRange){var k=this.minRange;d=
(k-c+b)/2;d=[b-d,m(a.min,b-d)];if(e)d[2]=this.dataMin;b=Ba(d);c=[b+k,m(a.max,b+k)];if(e)c[2]=this.dataMax;c=Na(c);c-b<k&&(d[0]=c-k,d[1]=m(a.min,c-k),b=Ba(d))}this.min=b;this.max=c},setAxisTranslation:function(a){var b=this,c=b.max-b.min,d=b.axisPointRange||0,e,f=0,g=0,h=b.linkedParent,i=!!b.categories,j=b.transA;if(b.isXAxis||i||d)h?(f=h.minPointOffset,g=h.pointRangePadding):p(b.series,function(a){var h=i?1:b.isXAxis?a.pointRange:b.axisPointRange||0,j=a.options.pointPlacement,n=a.closestPointRange;
h>c&&(h=0);d=v(d,h);f=v(f,Fa(j)?0:h/2);g=v(g,j==="on"?0:h);!a.noSharedTooltip&&r(n)&&(e=r(e)?C(e,n):n)}),h=b.ordinalSlope&&e?b.ordinalSlope/e:1,b.minPointOffset=f*=h,b.pointRangePadding=g*=h,b.pointRange=C(d,c),b.closestPointRange=e;if(a)b.oldTransA=j;b.translationSlope=b.transA=j=b.len/(c+g||1);b.transB=b.horiz?b.left:b.bottom;b.minPixelPadding=j*f},setTickPositions:function(a){var b=this,c=b.chart,d=b.options,e=b.isLog,f=b.isDatetimeAxis,g=b.isXAxis,h=b.isLinked,i=b.options.tickPositioner,j=d.maxPadding,
k=d.minPadding,l=d.tickInterval,o=d.minTickInterval,n=d.tickPixelInterval,s,$=b.categories;h?(b.linkedParent=c[b.coll][d.linkedTo],c=b.linkedParent.getExtremes(),b.min=m(c.min,c.dataMin),b.max=m(c.max,c.dataMax),d.type!==b.linkedParent.options.type&&ra(11,1)):(b.min=m(b.userMin,d.min,b.dataMin),b.max=m(b.userMax,d.max,b.dataMax));if(e)!a&&C(b.min,m(b.dataMin,b.min))<=0&&ra(10,1),b.min=da(za(b.min)),b.max=da(za(b.max));if(b.range&&r(b.max))b.userMin=b.min=v(b.min,b.max-b.range),b.userMax=b.max,b.range=
null;b.beforePadding&&b.beforePadding();b.adjustForMinRange();if(!$&&!b.axisPointRange&&!b.usePercentage&&!h&&r(b.min)&&r(b.max)&&(c=b.max-b.min)){if(!r(d.min)&&!r(b.userMin)&&k&&(b.dataMin<0||!b.ignoreMinPadding))b.min-=c*k;if(!r(d.max)&&!r(b.userMax)&&j&&(b.dataMax>0||!b.ignoreMaxPadding))b.max+=c*j}if(ha(d.floor))b.min=v(b.min,d.floor);if(ha(d.ceiling))b.max=C(b.max,d.ceiling);b.min===b.max||b.min===void 0||b.max===void 0?b.tickInterval=1:h&&!l&&n===b.linkedParent.options.tickPixelInterval?b.tickInterval=
b.linkedParent.tickInterval:(b.tickInterval=m(l,$?1:(b.max-b.min)*n/v(b.len,n)),!r(l)&&b.len<n&&!this.isRadial&&!this.isLog&&!$&&d.startOnTick&&d.endOnTick&&(s=!0,b.tickInterval/=4));g&&!a&&p(b.series,function(a){a.processData(b.min!==b.oldMin||b.max!==b.oldMax)});b.setAxisTranslation(!0);b.beforeSetTickPositions&&b.beforeSetTickPositions();if(b.postProcessTickInterval)b.tickInterval=b.postProcessTickInterval(b.tickInterval);if(b.pointRange)b.tickInterval=v(b.pointRange,b.tickInterval);if(!l&&b.tickInterval<
o)b.tickInterval=o;if(!f&&!e&&!l)b.tickInterval=nb(b.tickInterval,null,mb(b.tickInterval),d);b.minorTickInterval=d.minorTickInterval==="auto"&&b.tickInterval?b.tickInterval/5:d.minorTickInterval;b.tickPositions=a=d.tickPositions?[].concat(d.tickPositions):i&&i.apply(b,[b.min,b.max]);if(!a)!b.ordinalPositions&&(b.max-b.min)/b.tickInterval>v(2*b.len,200)&&ra(19,!0),a=f?b.getTimeTicks(b.normalizeTimeTickInterval(b.tickInterval,d.units),b.min,b.max,d.startOfWeek,b.ordinalPositions,b.closestPointRange,
!0):e?b.getLogTickPositions(b.tickInterval,b.min,b.max):b.getLinearTickPositions(b.tickInterval,b.min,b.max),s&&a.splice(1,a.length-2),b.tickPositions=a;if(!h)e=a[0],f=a[a.length-1],h=b.minPointOffset||0,d.startOnTick?b.min=e:b.min-h>e&&a.shift(),d.endOnTick?b.max=f:b.max+h<f&&a.pop(),a.length===1&&(d=M(b.max)>1E13?1:0.001,b.min-=d,b.max+=d)},setMaxTicks:function(){var a=this.chart,b=a.maxTicks||{},c=this.tickPositions,d=this._maxTicksKey=[this.coll,this.pos,this.len].join("-");if(!this.isLinked&&
!this.isDatetimeAxis&&c&&c.length>(b[d]||0)&&this.options.alignTicks!==!1)b[d]=c.length;a.maxTicks=b},adjustTickAmount:function(){var a=this._maxTicksKey,b=this.tickPositions,c=this.chart.maxTicks;if(c&&c[a]&&!this.isDatetimeAxis&&!this.categories&&!this.isLinked&&this.options.alignTicks!==!1&&this.min!==t){var d=this.tickAmount,e=b.length;this.tickAmount=a=c[a];if(e<a){for(;b.length<a;)b.push(da(b[b.length-1]+this.tickInterval));this.transA*=(e-1)/(a-1);this.max=b[b.length-1]}if(r(d)&&a!==d)this.isDirty=
!0}},setScale:function(){var a=this.stacks,b,c,d,e;this.oldMin=this.min;this.oldMax=this.max;this.oldAxisLength=this.len;this.setAxisSize();e=this.len!==this.oldAxisLength;p(this.series,function(a){if(a.isDirtyData||a.isDirty||a.xAxis.isDirty)d=!0});if(e||d||this.isLinked||this.forceRedraw||this.userMin!==this.oldUserMin||this.userMax!==this.oldUserMax){if(!this.isXAxis)for(b in a)for(c in a[b])a[b][c].total=null,a[b][c].cum=0;this.forceRedraw=!1;this.getSeriesExtremes();this.setTickPositions();this.oldUserMin=
this.userMin;this.oldUserMax=this.userMax;if(!this.isDirty)this.isDirty=e||this.min!==this.oldMin||this.max!==this.oldMax}else if(!this.isXAxis){if(this.oldStacks)a=this.stacks=this.oldStacks;for(b in a)for(c in a[b])a[b][c].cum=a[b][c].total}this.setMaxTicks()},setExtremes:function(a,b,c,d,e){var f=this,g=f.chart,c=m(c,!0),e=q(e,{min:a,max:b});D(f,"setExtremes",e,function(){f.userMin=a;f.userMax=b;f.eventArgs=e;f.isDirtyExtremes=!0;c&&g.redraw(d)})},zoom:function(a,b){var c=this.dataMin,d=this.dataMax,
e=this.options;this.allowZoomOutside||(r(c)&&a<=C(c,m(e.min,c))&&(a=t),r(d)&&b>=v(d,m(e.max,d))&&(b=t));this.displayBtn=a!==t||b!==t;this.setExtremes(a,b,!1,t,{trigger:"zoom"});return!0},setAxisSize:function(){var a=this.chart,b=this.options,c=b.offsetLeft||0,d=this.horiz,e=m(b.width,a.plotWidth-c+(b.offsetRight||0)),f=m(b.height,a.plotHeight),g=m(b.top,a.plotTop),b=m(b.left,a.plotLeft+c),c=/%$/;c.test(f)&&(f=parseInt(f,10)/100*a.plotHeight);c.test(g)&&(g=parseInt(g,10)/100*a.plotHeight+a.plotTop);
this.left=b;this.top=g;this.width=e;this.height=f;this.bottom=a.chartHeight-f-g;this.right=a.chartWidth-e-b;this.len=v(d?e:f,0);this.pos=d?b:g},getExtremes:function(){var a=this.isLog;return{min:a?da(ia(this.min)):this.min,max:a?da(ia(this.max)):this.max,dataMin:this.dataMin,dataMax:this.dataMax,userMin:this.userMin,userMax:this.userMax}},getThreshold:function(a){var b=this.isLog,c=b?ia(this.min):this.min,b=b?ia(this.max):this.max;c>a||a===null?a=c:b<a&&(a=b);return this.translate(a,0,1,0,1)},autoLabelAlign:function(a){a=
(m(a,0)-this.side*90+720)%360;return a>15&&a<165?"right":a>195&&a<345?"left":"center"},getOffset:function(){var a=this,b=a.chart,c=b.renderer,d=a.options,e=a.tickPositions,f=a.ticks,g=a.horiz,h=a.side,i=b.inverted?[1,0,3,2][h]:h,j,k=0,l,o=0,n=d.title,s=d.labels,$=0,J=b.axisOffset,L=b.clipOffset,x=[-1,1,1,-1][h],q,u=1,w=m(s.maxStaggerLines,5),y,z,A,B,na=h===2?c.fontMetrics(s.style.fontSize).b:0;a.hasData=j=a.hasVisibleSeries||r(a.min)&&r(a.max)&&!!e;a.showAxis=b=j||m(d.showEmpty,!0);a.staggerLines=
a.horiz&&s.staggerLines;if(!a.axisGroup)a.gridGroup=c.g("grid").attr({zIndex:d.gridZIndex||1}).add(),a.axisGroup=c.g("axis").attr({zIndex:d.zIndex||2}).add(),a.labelGroup=c.g("axis-labels").attr({zIndex:s.zIndex||7}).addClass("highcharts-"+a.coll.toLowerCase()+"-labels").add();if(j||a.isLinked){a.labelAlign=m(s.align||a.autoLabelAlign(s.rotation));p(e,function(b){f[b]?f[b].addLabel():f[b]=new Sa(a,b)});if(a.horiz&&!a.staggerLines&&w&&!s.rotation){for(q=a.reversed?[].concat(e).reverse():e;u<w;){j=
[];y=!1;for(s=0;s<q.length;s++)z=q[s],A=(A=f[z].label&&f[z].label.getBBox())?A.width:0,B=s%u,A&&(z=a.translate(z),j[B]!==t&&z<j[B]&&(y=!0),j[B]=z+A);if(y)u++;else break}if(u>1)a.staggerLines=u}p(e,function(b){if(h===0||h===2||{1:"left",3:"right"}[h]===a.labelAlign)$=v(f[b].getLabelSize(),$)});if(a.staggerLines)$*=a.staggerLines,a.labelOffset=$}else for(q in f)f[q].destroy(),delete f[q];if(n&&n.text&&n.enabled!==!1){if(!a.axisTitle)a.axisTitle=c.text(n.text,0,0,n.useHTML).attr({zIndex:7,rotation:n.rotation||
0,align:n.textAlign||{low:"left",middle:"center",high:"right"}[n.align]}).addClass("highcharts-"+this.coll.toLowerCase()+"-title").css(n.style).add(a.axisGroup),a.axisTitle.isNew=!0;if(b)k=a.axisTitle.getBBox()[g?"height":"width"],o=m(n.margin,g?5:10),l=n.offset;a.axisTitle[b?"show":"hide"]()}a.offset=x*m(d.offset,J[h]);a.axisTitleMargin=m(l,$+o+($&&x*d.labels[g?"y":"x"]-na));J[h]=v(J[h],a.axisTitleMargin+k+x*a.offset);L[i]=v(L[i],T(d.lineWidth/2)*2)},getLinePath:function(a){var b=this.chart,c=this.opposite,
d=this.offset,e=this.horiz,f=this.left+(c?this.width:0)+d,d=b.chartHeight-this.bottom-(c?this.height:0)+d;c&&(a*=-1);return b.renderer.crispLine(["M",e?this.left:f,e?d:this.top,"L",e?b.chartWidth-this.right:f,e?d:b.chartHeight-this.bottom],a)},getTitlePosition:function(){var a=this.horiz,b=this.left,c=this.top,d=this.len,e=this.options.title,f=a?b:c,g=this.opposite,h=this.offset,i=z(e.style.fontSize||12),d={low:f+(a?0:d),middle:f+d/2,high:f+(a?d:0)}[e.align],b=(a?c+this.height:b)+(a?1:-1)*(g?-1:1)*
this.axisTitleMargin+(this.side===2?i:0);return{x:a?d:b+(g?this.width:0)+h+(e.x||0),y:a?b-(g?this.height:0)+h:d+(e.y||0)}},render:function(){var a=this,b=a.horiz,c=a.reversed,d=a.chart,e=d.renderer,f=a.options,g=a.isLog,h=a.isLinked,i=a.tickPositions,j,k=a.axisTitle,l=a.ticks,o=a.minorTicks,n=a.alternateBands,s=f.stackLabels,m=f.alternateGridColor,J=a.tickmarkOffset,L=f.lineWidth,x=d.hasRendered&&r(a.oldMin)&&!isNaN(a.oldMin),q=a.hasData,v=a.showAxis,u,w=f.labels.overflow,y=a.justifyLabels=b&&w!==
!1,z;a.labelEdge.length=0;a.justifyToPlot=w==="justify";p([l,o,n],function(a){for(var b in a)a[b].isActive=!1});if(q||h)if(a.minorTickInterval&&!a.categories&&p(a.getMinorTickPositions(),function(b){o[b]||(o[b]=new Sa(a,b,"minor"));x&&o[b].isNew&&o[b].render(null,!0);o[b].render(null,!1,1)}),i.length&&(j=i.slice(),(b&&c||!b&&!c)&&j.reverse(),y&&(j=j.slice(1).concat([j[0]])),p(j,function(b,c){y&&(c=c===j.length-1?0:c+1);if(!h||b>=a.min&&b<=a.max)l[b]||(l[b]=new Sa(a,b)),x&&l[b].isNew&&l[b].render(c,
!0,0.1),l[b].render(c,!1,1)}),J&&a.min===0&&(l[-1]||(l[-1]=new Sa(a,-1,null,!0)),l[-1].render(-1))),m&&p(i,function(b,c){if(c%2===0&&b<a.max)n[b]||(n[b]=new R.PlotLineOrBand(a)),u=b+J,z=i[c+1]!==t?i[c+1]+J:a.max,n[b].options={from:g?ia(u):u,to:g?ia(z):z,color:m},n[b].render(),n[b].isActive=!0}),!a._addedPlotLB)p((f.plotLines||[]).concat(f.plotBands||[]),function(b){a.addPlotBandOrLine(b)}),a._addedPlotLB=!0;p([l,o,n],function(a){var b,c,e=[],f=va?va.duration||500:0,g=function(){for(c=e.length;c--;)a[e[c]]&&
!a[e[c]].isActive&&(a[e[c]].destroy(),delete a[e[c]])};for(b in a)if(!a[b].isActive)a[b].render(b,!1,0),a[b].isActive=!1,e.push(b);a===n||!d.hasRendered||!f?g():f&&setTimeout(g,f)});if(L)b=a.getLinePath(L),a.axisLine?a.axisLine.animate({d:b}):a.axisLine=e.path(b).attr({stroke:f.lineColor,"stroke-width":L,zIndex:7}).add(a.axisGroup),a.axisLine[v?"show":"hide"]();if(k&&v)k[k.isNew?"attr":"animate"](a.getTitlePosition()),k.isNew=!1;s&&s.enabled&&a.renderStackTotals();a.isDirty=!1},redraw:function(){var a=
this.chart.pointer;a&&a.reset(!0);this.render();p(this.plotLinesAndBands,function(a){a.render()});p(this.series,function(a){a.isDirty=!0})},destroy:function(a){var b=this,c=b.stacks,d,e=b.plotLinesAndBands;a||W(b);for(d in c)Oa(c[d]),c[d]=null;p([b.ticks,b.minorTicks,b.alternateBands],function(a){Oa(a)});for(a=e.length;a--;)e[a].destroy();p("stackTotalGroup,axisLine,axisTitle,axisGroup,cross,gridGroup,labelGroup".split(","),function(a){b[a]&&(b[a]=b[a].destroy())});this.cross&&this.cross.destroy()},
drawCrosshair:function(a,b){if(this.crosshair)if((r(b)||!m(this.crosshair.snap,!0))===!1)this.hideCrosshair();else{var c,d=this.crosshair,e=d.animation;m(d.snap,!0)?r(b)&&(c=this.chart.inverted!=this.horiz?b.plotX:this.len-b.plotY):c=this.horiz?a.chartX-this.pos:this.len-a.chartY+this.pos;c=this.isRadial?this.getPlotLinePath(this.isXAxis?b.x:m(b.stackY,b.y)):this.getPlotLinePath(null,null,null,null,c);if(c===null)this.hideCrosshair();else if(this.cross)this.cross.attr({visibility:"visible"})[e?"animate":
"attr"]({d:c},e);else{e={"stroke-width":d.width||1,stroke:d.color||"#C0C0C0",zIndex:d.zIndex||2};if(d.dashStyle)e.dashstyle=d.dashStyle;this.cross=this.chart.renderer.path(c).attr(e).add()}}},hideCrosshair:function(){this.cross&&this.cross.hide()}};q(la.prototype,{getPlotBandPath:function(a,b){var c=this.getPlotLinePath(b),d=this.getPlotLinePath(a);d&&c?d.push(c[4],c[5],c[1],c[2]):d=null;return d},addPlotBand:function(a){this.addPlotBandOrLine(a,"plotBands")},addPlotLine:function(a){this.addPlotBandOrLine(a,
"plotLines")},addPlotBandOrLine:function(a,b){var c=(new R.PlotLineOrBand(this,a)).render(),d=this.userOptions;c&&(b&&(d[b]=d[b]||[],d[b].push(a)),this.plotLinesAndBands.push(c));return c},removePlotBandOrLine:function(a){for(var b=this.plotLinesAndBands,c=this.options,d=this.userOptions,e=b.length;e--;)b[e].id===a&&b[e].destroy();p([c.plotLines||[],d.plotLines||[],c.plotBands||[],d.plotBands||[]],function(b){for(e=b.length;e--;)b[e].id===a&&ja(b,b[e])})}});la.prototype.getTimeTicks=function(a,b,
c,d){var e=[],f={},g=E.global.useUTC,h,i=new Date(b-Ra),j=a.unitRange,k=a.count;if(r(b)){j>=A.second&&(i.setMilliseconds(0),i.setSeconds(j>=A.minute?0:k*T(i.getSeconds()/k)));if(j>=A.minute)i[Db](j>=A.hour?0:k*T(i[pb]()/k));if(j>=A.hour)i[Eb](j>=A.day?0:k*T(i[qb]()/k));if(j>=A.day)i[sb](j>=A.month?1:k*T(i[Xa]()/k));j>=A.month&&(i[Fb](j>=A.year?0:k*T(i[fb]()/k)),h=i[gb]());j>=A.year&&(h-=h%k,i[Gb](h));if(j===A.week)i[sb](i[Xa]()-i[rb]()+m(d,1));b=1;Ra&&(i=new Date(i.getTime()+Ra));h=i[gb]();for(var d=
i.getTime(),l=i[fb](),o=i[Xa](),n=g?Ra:(864E5+i.getTimezoneOffset()*6E4)%864E5;d<c;)e.push(d),j===A.year?d=eb(h+b*k,0):j===A.month?d=eb(h,l+b*k):!g&&(j===A.day||j===A.week)?d=eb(h,l,o+b*k*(j===A.day?1:7)):d+=j*k,b++;e.push(d);p(vb(e,function(a){return j<=A.hour&&a%A.day===n}),function(a){f[a]="day"})}e.info=q(a,{higherRanks:f,totalRange:j*k});return e};la.prototype.normalizeTimeTickInterval=function(a,b){var c=b||[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",
[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1,2]],["week",[1,2]],["month",[1,2,3,4,6]],["year",null]],d=c[c.length-1],e=A[d[0]],f=d[1],g;for(g=0;g<c.length;g++)if(d=c[g],e=A[d[0]],f=d[1],c[g+1]&&a<=(e*f[f.length-1]+A[c[g+1][0]])/2)break;e===A.year&&a<5*e&&(f=[1,2,5]);c=nb(a/e,f,d[0]==="year"?v(mb(a/e),1):1);return{unitRange:e,count:c,unitName:d[0]}};la.prototype.getLogTickPositions=function(a,b,c,d){var e=this.options,f=this.len,g=[];if(!d)this._minorAutoInterval=null;if(a>=0.5)a=u(a),g=this.getLinearTickPositions(a,
b,c);else if(a>=0.08)for(var f=T(b),h,i,j,k,l,e=a>0.3?[1,2,4]:a>0.15?[1,2,4,6,8]:[1,2,3,4,5,6,7,8,9];f<c+1&&!l;f++){i=e.length;for(h=0;h<i&&!l;h++)j=za(ia(f)*e[h]),j>b&&(!d||k<=c)&&g.push(k),k>c&&(l=!0),k=j}else if(b=ia(b),c=ia(c),a=e[d?"minorTickInterval":"tickInterval"],a=m(a==="auto"?null:a,this._minorAutoInterval,(c-b)*(e.tickPixelInterval/(d?5:1))/((d?f/this.tickPositions.length:f)||1)),a=nb(a,null,mb(a)),g=Ua(this.getLinearTickPositions(a,b,c),za),!d)this._minorAutoInterval=a/5;if(!d)this.tickInterval=
a;return g};var Mb=R.Tooltip=function(){this.init.apply(this,arguments)};Mb.prototype={init:function(a,b){var c=b.borderWidth,d=b.style,e=z(d.padding);this.chart=a;this.options=b;this.crosshairs=[];this.now={x:0,y:0};this.isHidden=!0;this.label=a.renderer.label("",0,0,b.shape||"callout",null,null,b.useHTML,null,"tooltip").attr({padding:e,fill:b.backgroundColor,"stroke-width":c,r:b.borderRadius,zIndex:8}).css(d).css({padding:0}).add().attr({y:-9999});fa||this.label.shadow(b.shadow);this.shared=b.shared},
destroy:function(){if(this.label)this.label=this.label.destroy();clearTimeout(this.hideTimer);clearTimeout(this.tooltipTimeout)},move:function(a,b,c,d){var e=this,f=e.now,g=e.options.animation!==!1&&!e.isHidden,h=e.followPointer||e.len>1;q(f,{x:g?(2*f.x+a)/3:a,y:g?(f.y+b)/2:b,anchorX:h?t:g?(2*f.anchorX+c)/3:c,anchorY:h?t:g?(f.anchorY+d)/2:d});e.label.attr(f);if(g&&(M(a-f.x)>1||M(b-f.y)>1))clearTimeout(this.tooltipTimeout),this.tooltipTimeout=setTimeout(function(){e&&e.move(a,b,c,d)},32)},hide:function(){var a=
this,b;clearTimeout(this.hideTimer);if(!this.isHidden)b=this.chart.hoverPoints,this.hideTimer=setTimeout(function(){a.label.fadeOut();a.isHidden=!0},m(this.options.hideDelay,500)),b&&p(b,function(a){a.setState()}),this.chart.hoverPoints=null},getAnchor:function(a,b){var c,d=this.chart,e=d.inverted,f=d.plotTop,g=0,h=0,i,a=qa(a);c=a[0].tooltipPos;this.followPointer&&b&&(b.chartX===t&&(b=d.pointer.normalize(b)),c=[b.chartX-d.plotLeft,b.chartY-f]);c||(p(a,function(a){i=a.series.yAxis;g+=a.plotX;h+=(a.plotLow?
(a.plotLow+a.plotHigh)/2:a.plotY)+(!e&&i?i.top-f:0)}),g/=a.length,h/=a.length,c=[e?d.plotWidth-h:g,this.shared&&!e&&a.length>1&&b?b.chartY-f:e?d.plotHeight-g:h]);return Ua(c,u)},getPosition:function(a,b,c){var d=this.chart,e=this.distance,f={},g,h=["y",d.chartHeight,b,c.plotY+d.plotTop],i=["x",d.chartWidth,a,c.plotX+d.plotLeft],j=c.ttBelow||d.inverted&&!c.negative||!d.inverted&&c.negative,k=function(a,b,c,d){var g=c<d-e,b=d+e+c<b,c=d-e-c;d+=e;if(j&&b)f[a]=d;else if(!j&&g)f[a]=c;else if(g)f[a]=c;else if(b)f[a]=
d;else return!1},l=function(a,b,c,d){if(d<e||d>b-e)return!1;else f[a]=d<c/2?1:d>b-c/2?b-c-2:d-c/2},o=function(a){var b=h;h=i;i=b;g=a},n=function(){k.apply(0,h)!==!1?l.apply(0,i)===!1&&!g&&(o(!0),n()):g?f.x=f.y=0:(o(!0),n())};(d.inverted||this.len>1)&&o();n();return f},defaultFormatter:function(a){var b=this.points||qa(this),c=b[0].series,d;d=[a.tooltipHeaderFormatter(b[0])];p(b,function(a){c=a.series;d.push(c.tooltipFormatter&&c.tooltipFormatter(a)||a.point.tooltipFormatter(c.tooltipOptions.pointFormat))});
d.push(a.options.footerFormat||"");return d.join("")},refresh:function(a,b){var c=this.chart,d=this.label,e=this.options,f,g,h={},i,j=[];i=e.formatter||this.defaultFormatter;var h=c.hoverPoints,k,l=this.shared;clearTimeout(this.hideTimer);this.followPointer=qa(a)[0].series.tooltipOptions.followPointer;g=this.getAnchor(a,b);f=g[0];g=g[1];l&&(!a.series||!a.series.noSharedTooltip)?(c.hoverPoints=a,h&&p(h,function(a){a.setState()}),p(a,function(a){a.setState("hover");j.push(a.getLabelConfig())}),h={x:a[0].category,
y:a[0].y},h.points=j,this.len=j.length,a=a[0]):h=a.getLabelConfig();i=i.call(h,this);h=a.series;this.distance=m(h.tooltipOptions.distance,16);i===!1?this.hide():(this.isHidden&&(bb(d),d.attr("opacity",1).show()),d.attr({text:i}),k=e.borderColor||a.color||h.color||"#606060",d.attr({stroke:k}),this.updatePosition({plotX:f,plotY:g,negative:a.negative,ttBelow:a.ttBelow}),this.isHidden=!1);D(c,"tooltipRefresh",{text:i,x:f+c.plotLeft,y:g+c.plotTop,borderColor:k})},updatePosition:function(a){var b=this.chart,
c=this.label,c=(this.options.positioner||this.getPosition).call(this,c.width,c.height,a);this.move(u(c.x),u(c.y),a.plotX+b.plotLeft,a.plotY+b.plotTop)},tooltipHeaderFormatter:function(a){var b=a.series,c=b.tooltipOptions,d=c.dateTimeLabelFormats,e=c.xDateFormat,f=b.xAxis,g=f&&f.options.type==="datetime"&&ha(a.key),c=c.headerFormat,f=f&&f.closestPointRange,h;if(g&&!e){if(f)for(h in A){if(A[h]>=f||A[h]<=A.day&&a.key%A[h]>0){e=d[h];break}}else e=d.day;e=e||d.year}g&&e&&(c=c.replace("{point.key}","{point.key:"+
e+"}"));return Ia(c,{point:a,series:b})}};var oa;$a=y.documentElement.ontouchstart!==t;var Wa=R.Pointer=function(a,b){this.init(a,b)};Wa.prototype={init:function(a,b){var c=b.chart,d=c.events,e=fa?"":c.zoomType,c=a.inverted,f;this.options=b;this.chart=a;this.zoomX=f=/x/.test(e);this.zoomY=e=/y/.test(e);this.zoomHor=f&&!c||e&&c;this.zoomVert=e&&!c||f&&c;this.hasZoom=f||e;this.runChartClick=d&&!!d.click;this.pinchDown=[];this.lastValidTouch={};if(R.Tooltip&&b.tooltip.enabled)a.tooltip=new Mb(a,b.tooltip),
this.followTouchMove=b.tooltip.followTouchMove;this.setDOMEvents()},normalize:function(a,b){var c,d,a=a||window.event,a=Sb(a);if(!a.target)a.target=a.srcElement;d=a.touches?a.touches.length?a.touches.item(0):a.changedTouches[0]:a;if(!b)this.chartPosition=b=Rb(this.chart.container);d.pageX===t?(c=v(a.x,a.clientX-b.left),d=a.y):(c=d.pageX-b.left,d=d.pageY-b.top);return q(a,{chartX:u(c),chartY:u(d)})},getCoordinates:function(a){var b={xAxis:[],yAxis:[]};p(this.chart.axes,function(c){b[c.isXAxis?"xAxis":
"yAxis"].push({axis:c,value:c.toValue(a[c.horiz?"chartX":"chartY"])})});return b},getIndex:function(a){var b=this.chart;return b.inverted?b.plotHeight+b.plotTop-a.chartY:a.chartX-b.plotLeft},runPointActions:function(a){var b=this.chart,c=b.series,d=b.tooltip,e,f,g=b.hoverPoint,h=b.hoverSeries,i,j,k=b.chartWidth,l=this.getIndex(a);if(d&&this.options.tooltip.shared&&(!h||!h.noSharedTooltip)){f=[];i=c.length;for(j=0;j<i;j++)if(c[j].visible&&c[j].options.enableMouseTracking!==!1&&!c[j].noSharedTooltip&&
c[j].singularTooltips!==!0&&c[j].tooltipPoints.length&&(e=c[j].tooltipPoints[l])&&e.series)e._dist=M(l-e.clientX),k=C(k,e._dist),f.push(e);for(i=f.length;i--;)f[i]._dist>k&&f.splice(i,1);if(f.length&&f[0].clientX!==this.hoverX)d.refresh(f,a),this.hoverX=f[0].clientX}c=h&&h.tooltipOptions.followPointer;if(h&&h.tracker&&!c){if((e=h.tooltipPoints[l])&&e!==g)e.onMouseOver(a)}else d&&c&&!d.isHidden&&(h=d.getAnchor([{}],a),d.updatePosition({plotX:h[0],plotY:h[1]}));if(d&&!this._onDocumentMouseMove)this._onDocumentMouseMove=
function(a){if(V[oa])V[oa].pointer.onDocumentMouseMove(a)},K(y,"mousemove",this._onDocumentMouseMove);p(b.axes,function(b){b.drawCrosshair(a,m(e,g))})},reset:function(a){var b=this.chart,c=b.hoverSeries,d=b.hoverPoint,e=b.tooltip,f=e&&e.shared?b.hoverPoints:d;(a=a&&e&&f)&&qa(f)[0].plotX===t&&(a=!1);if(a)e.refresh(f),d&&d.setState(d.state,!0);else{if(d)d.onMouseOut();if(c)c.onMouseOut();e&&e.hide();if(this._onDocumentMouseMove)W(y,"mousemove",this._onDocumentMouseMove),this._onDocumentMouseMove=null;
p(b.axes,function(a){a.hideCrosshair()});this.hoverX=null}},scaleGroups:function(a,b){var c=this.chart,d;p(c.series,function(e){d=a||e.getPlotBox();e.xAxis&&e.xAxis.zoomEnabled&&(e.group.attr(d),e.markerGroup&&(e.markerGroup.attr(d),e.markerGroup.clip(b?c.clipRect:null)),e.dataLabelsGroup&&e.dataLabelsGroup.attr(d))});c.clipRect.attr(b||c.clipBox)},dragStart:function(a){var b=this.chart;b.mouseIsDown=a.type;b.cancelClick=!1;b.mouseDownX=this.mouseDownX=a.chartX;b.mouseDownY=this.mouseDownY=a.chartY},
drag:function(a){var b=this.chart,c=b.options.chart,d=a.chartX,e=a.chartY,f=this.zoomHor,g=this.zoomVert,h=b.plotLeft,i=b.plotTop,j=b.plotWidth,k=b.plotHeight,l,o=this.mouseDownX,n=this.mouseDownY;d<h?d=h:d>h+j&&(d=h+j);e<i?e=i:e>i+k&&(e=i+k);this.hasDragged=Math.sqrt(Math.pow(o-d,2)+Math.pow(n-e,2));if(this.hasDragged>10){l=b.isInsidePlot(o-h,n-i);if(b.hasCartesianSeries&&(this.zoomX||this.zoomY)&&l&&!this.selectionMarker)this.selectionMarker=b.renderer.rect(h,i,f?1:j,g?1:k,0).attr({fill:c.selectionMarkerFill||
"rgba(69,114,167,0.25)",zIndex:7}).add();this.selectionMarker&&f&&(d-=o,this.selectionMarker.attr({width:M(d),x:(d>0?0:d)+o}));this.selectionMarker&&g&&(d=e-n,this.selectionMarker.attr({height:M(d),y:(d>0?0:d)+n}));l&&!this.selectionMarker&&c.panning&&b.pan(a,c.panning)}},drop:function(a){var b=this.chart,c=this.hasPinched;if(this.selectionMarker){var d={xAxis:[],yAxis:[],originalEvent:a.originalEvent||a},a=this.selectionMarker,e=a.attr?a.attr("x"):a.x,f=a.attr?a.attr("y"):a.y,g=a.attr?a.attr("width"):
a.width,h=a.attr?a.attr("height"):a.height,i;if(this.hasDragged||c)p(b.axes,function(a){if(a.zoomEnabled){var b=a.horiz,c=a.toValue(b?e:f),b=a.toValue(b?e+g:f+h);!isNaN(c)&&!isNaN(b)&&(d[a.coll].push({axis:a,min:C(c,b),max:v(c,b)}),i=!0)}}),i&&D(b,"selection",d,function(a){b.zoom(q(a,c?{animation:!1}:null))});this.selectionMarker=this.selectionMarker.destroy();c&&this.scaleGroups()}if(b)G(b.container,{cursor:b._cursor}),b.cancelClick=this.hasDragged>10,b.mouseIsDown=this.hasDragged=this.hasPinched=
!1,this.pinchDown=[]},onContainerMouseDown:function(a){a=this.normalize(a);a.preventDefault&&a.preventDefault();this.dragStart(a)},onDocumentMouseUp:function(a){V[oa]&&V[oa].pointer.drop(a)},onDocumentMouseMove:function(a){var b=this.chart,c=this.chartPosition,d=b.hoverSeries,a=this.normalize(a,c);c&&d&&!this.inClass(a.target,"highcharts-tracker")&&!b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop)&&this.reset()},onContainerMouseLeave:function(){var a=V[oa];if(a)a.pointer.reset(),a.pointer.chartPosition=
null},onContainerMouseMove:function(a){var b=this.chart;oa=b.index;a=this.normalize(a);b.mouseIsDown==="mousedown"&&this.drag(a);(this.inClass(a.target,"highcharts-tracker")||b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop))&&!b.openMenu&&this.runPointActions(a)},inClass:function(a,b){for(var c;a;){if(c=H(a,"class"))if(c.indexOf(b)!==-1)return!0;else if(c.indexOf("highcharts-container")!==-1)return!1;a=a.parentNode}},onTrackerMouseOut:function(a){var b=this.chart.hoverSeries,c=(a=a.relatedTarget||
a.toElement)&&a.point&&a.point.series;if(b&&!b.options.stickyTracking&&!this.inClass(a,"highcharts-tooltip")&&c!==b)b.onMouseOut()},onContainerClick:function(a){var b=this.chart,c=b.hoverPoint,d=b.plotLeft,e=b.plotTop,a=this.normalize(a);a.cancelBubble=!0;b.cancelClick||(c&&this.inClass(a.target,"highcharts-tracker")?(D(c.series,"click",q(a,{point:c})),b.hoverPoint&&c.firePointEvent("click",a)):(q(a,this.getCoordinates(a)),b.isInsidePlot(a.chartX-d,a.chartY-e)&&D(b,"click",a)))},setDOMEvents:function(){var a=
this,b=a.chart.container;b.onmousedown=function(b){a.onContainerMouseDown(b)};b.onmousemove=function(b){a.onContainerMouseMove(b)};b.onclick=function(b){a.onContainerClick(b)};K(b,"mouseleave",a.onContainerMouseLeave);ab===1&&K(y,"mouseup",a.onDocumentMouseUp);if($a)b.ontouchstart=function(b){a.onContainerTouchStart(b)},b.ontouchmove=function(b){a.onContainerTouchMove(b)},ab===1&&K(y,"touchend",a.onDocumentTouchEnd)},destroy:function(){var a;W(this.chart.container,"mouseleave",this.onContainerMouseLeave);
ab||(W(y,"mouseup",this.onDocumentMouseUp),W(y,"touchend",this.onDocumentTouchEnd));clearInterval(this.tooltipTimeout);for(a in this)this[a]=null}};q(R.Pointer.prototype,{pinchTranslate:function(a,b,c,d,e,f){(this.zoomHor||this.pinchHor)&&this.pinchTranslateDirection(!0,a,b,c,d,e,f);(this.zoomVert||this.pinchVert)&&this.pinchTranslateDirection(!1,a,b,c,d,e,f)},pinchTranslateDirection:function(a,b,c,d,e,f,g,h){var i=this.chart,j=a?"x":"y",k=a?"X":"Y",l="chart"+k,o=a?"width":"height",n=i["plot"+(a?
"Left":"Top")],s,m,p=h||1,q=i.inverted,x=i.bounds[a?"h":"v"],r=b.length===1,v=b[0][l],u=c[0][l],t=!r&&b[1][l],w=!r&&c[1][l],y,c=function(){!r&&M(v-t)>20&&(p=h||M(u-w)/M(v-t));m=(n-u)/p+v;s=i["plot"+(a?"Width":"Height")]/p};c();b=m;b<x.min?(b=x.min,y=!0):b+s>x.max&&(b=x.max-s,y=!0);y?(u-=0.8*(u-g[j][0]),r||(w-=0.8*(w-g[j][1])),c()):g[j]=[u,w];q||(f[j]=m-n,f[o]=s);f=q?1/p:p;e[o]=s;e[j]=b;d[q?a?"scaleY":"scaleX":"scale"+k]=p;d["translate"+k]=f*n+(u-f*v)},pinch:function(a){var b=this,c=b.chart,d=b.pinchDown,
e=b.followTouchMove,f=a.touches,g=f.length,h=b.lastValidTouch,i=b.hasZoom,j=b.selectionMarker,k={},l=g===1&&(b.inClass(a.target,"highcharts-tracker")&&c.runTrackerClick||c.runChartClick),o={};(i||e)&&!l&&a.preventDefault();Ua(f,function(a){return b.normalize(a)});if(a.type==="touchstart")p(f,function(a,b){d[b]={chartX:a.chartX,chartY:a.chartY}}),h.x=[d[0].chartX,d[1]&&d[1].chartX],h.y=[d[0].chartY,d[1]&&d[1].chartY],p(c.axes,function(a){if(a.zoomEnabled){var b=c.bounds[a.horiz?"h":"v"],d=a.minPixelPadding,
e=a.toPixels(a.dataMin),f=a.toPixels(a.dataMax),g=C(e,f),e=v(e,f);b.min=C(a.pos,g-d);b.max=v(a.pos+a.len,e+d)}});else if(d.length){if(!j)b.selectionMarker=j=q({destroy:sa},c.plotBox);b.pinchTranslate(d,f,k,j,o,h);b.hasPinched=i;b.scaleGroups(k,o);!i&&e&&g===1&&this.runPointActions(b.normalize(a))}},onContainerTouchStart:function(a){var b=this.chart;oa=b.index;a.touches.length===1?(a=this.normalize(a),b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop)?(this.runPointActions(a),this.pinch(a)):this.reset()):
a.touches.length===2&&this.pinch(a)},onContainerTouchMove:function(a){(a.touches.length===1||a.touches.length===2)&&this.pinch(a)},onDocumentTouchEnd:function(a){V[oa]&&V[oa].pointer.drop(a)}});if(I.PointerEvent||I.MSPointerEvent){var ua={},zb=!!I.PointerEvent,Wb=function(){var a,b=[];b.item=function(a){return this[a]};for(a in ua)ua.hasOwnProperty(a)&&b.push({pageX:ua[a].pageX,pageY:ua[a].pageY,target:ua[a].target});return b},Ab=function(a,b,c,d){a=a.originalEvent||a;if((a.pointerType==="touch"||
a.pointerType===a.MSPOINTER_TYPE_TOUCH)&&V[oa])d(a),d=V[oa].pointer,d[b]({type:c,target:a.currentTarget,preventDefault:sa,touches:Wb()})};q(Wa.prototype,{onContainerPointerDown:function(a){Ab(a,"onContainerTouchStart","touchstart",function(a){ua[a.pointerId]={pageX:a.pageX,pageY:a.pageY,target:a.currentTarget}})},onContainerPointerMove:function(a){Ab(a,"onContainerTouchMove","touchmove",function(a){ua[a.pointerId]={pageX:a.pageX,pageY:a.pageY};if(!ua[a.pointerId].target)ua[a.pointerId].target=a.currentTarget})},
onDocumentPointerUp:function(a){Ab(a,"onContainerTouchEnd","touchend",function(a){delete ua[a.pointerId]})},batchMSEvents:function(a){a(this.chart.container,zb?"pointerdown":"MSPointerDown",this.onContainerPointerDown);a(this.chart.container,zb?"pointermove":"MSPointerMove",this.onContainerPointerMove);a(y,zb?"pointerup":"MSPointerUp",this.onDocumentPointerUp)}});Ma(Wa.prototype,"init",function(a,b,c){a.call(this,b,c);(this.hasZoom||this.followTouchMove)&&G(b.container,{"-ms-touch-action":Q,"touch-action":Q})});
Ma(Wa.prototype,"setDOMEvents",function(a){a.apply(this);(this.hasZoom||this.followTouchMove)&&this.batchMSEvents(K)});Ma(Wa.prototype,"destroy",function(a){this.batchMSEvents(W);a.call(this)})}var lb=R.Legend=function(a,b){this.init(a,b)};lb.prototype={init:function(a,b){var c=this,d=b.itemStyle,e=m(b.padding,8),f=b.itemMarginTop||0;this.options=b;if(b.enabled)c.baseline=z(d.fontSize)+3+f,c.itemStyle=d,c.itemHiddenStyle=w(d,b.itemHiddenStyle),c.itemMarginTop=f,c.padding=e,c.initialItemX=e,c.initialItemY=
e-5,c.maxItemWidth=0,c.chart=a,c.itemHeight=0,c.lastLineHeight=0,c.symbolWidth=m(b.symbolWidth,16),c.pages=[],c.render(),K(c.chart,"endResize",function(){c.positionCheckboxes()})},colorizeItem:function(a,b){var c=this.options,d=a.legendItem,e=a.legendLine,f=a.legendSymbol,g=this.itemHiddenStyle.color,c=b?c.itemStyle.color:g,h=b?a.legendColor||a.color||"#CCC":g,g=a.options&&a.options.marker,i={fill:h},j;d&&d.css({fill:c,color:c});e&&e.attr({stroke:h});if(f){if(g&&f.isMarker)for(j in i.stroke=h,g=a.convertAttribs(g),
g)d=g[j],d!==t&&(i[j]=d);f.attr(i)}},positionItem:function(a){var b=this.options,c=b.symbolPadding,b=!b.rtl,d=a._legendItemPos,e=d[0],d=d[1],f=a.checkbox;a.legendGroup&&a.legendGroup.translate(b?e:this.legendWidth-e-2*c-4,d);if(f)f.x=e,f.y=d},destroyItem:function(a){var b=a.checkbox;p(["legendItem","legendLine","legendSymbol","legendGroup"],function(b){a[b]&&(a[b]=a[b].destroy())});b&&Pa(a.checkbox)},destroy:function(){var a=this.group,b=this.box;if(b)this.box=b.destroy();if(a)this.group=a.destroy()},
positionCheckboxes:function(a){var b=this.group.alignAttr,c,d=this.clipHeight||this.legendHeight;if(b)c=b.translateY,p(this.allItems,function(e){var f=e.checkbox,g;f&&(g=c+f.y+(a||0)+3,G(f,{left:b.translateX+e.checkboxOffset+f.x-20+"px",top:g+"px",display:g>c-6&&g<c+d-6?"":Q}))})},renderTitle:function(){var a=this.padding,b=this.options.title,c=0;if(b.text){if(!this.title)this.title=this.chart.renderer.label(b.text,a-3,a-4,null,null,null,null,null,"legend-title").attr({zIndex:1}).css(b.style).add(this.group);
a=this.title.getBBox();c=a.height;this.offsetWidth=a.width;this.contentGroup.attr({translateY:c})}this.titleHeight=c},renderItem:function(a){var b=this.chart,c=b.renderer,d=this.options,e=d.layout==="horizontal",f=this.symbolWidth,g=d.symbolPadding,h=this.itemStyle,i=this.itemHiddenStyle,j=this.padding,k=e?m(d.itemDistance,20):0,l=!d.rtl,o=d.width,n=d.itemMarginBottom||0,s=this.itemMarginTop,p=this.initialItemX,q=a.legendItem,r=a.series&&a.series.drawLegendSymbol?a.series:a,x=r.options,x=this.createCheckboxForItem&&
x&&x.showCheckbox,t=d.useHTML;if(!q)a.legendGroup=c.g("legend-item").attr({zIndex:1}).add(this.scrollGroup),r.drawLegendSymbol(this,a),a.legendItem=q=c.text(d.labelFormat?Ia(d.labelFormat,a):d.labelFormatter.call(a),l?f+g:-g,this.baseline,t).css(w(a.visible?h:i)).attr({align:l?"left":"right",zIndex:2}).add(a.legendGroup),this.setItemEvents&&this.setItemEvents(a,q,t,h,i),this.colorizeItem(a,a.visible),x&&this.createCheckboxForItem(a);c=q.getBBox();f=a.checkboxOffset=d.itemWidth||a.legendItemWidth||
f+g+c.width+k+(x?20:0);this.itemHeight=g=u(a.legendItemHeight||c.height);if(e&&this.itemX-p+f>(o||b.chartWidth-2*j-p-d.x))this.itemX=p,this.itemY+=s+this.lastLineHeight+n,this.lastLineHeight=0;this.maxItemWidth=v(this.maxItemWidth,f);this.lastItemY=s+this.itemY+n;this.lastLineHeight=v(g,this.lastLineHeight);a._legendItemPos=[this.itemX,this.itemY];e?this.itemX+=f:(this.itemY+=s+g+n,this.lastLineHeight=g);this.offsetWidth=o||v((e?this.itemX-p-k:f)+j,this.offsetWidth)},getAllItems:function(){var a=
[];p(this.chart.series,function(b){var c=b.options;if(m(c.showInLegend,!r(c.linkedTo)?t:!1,!0))a=a.concat(b.legendItems||(c.legendType==="point"?b.data:b))});return a},render:function(){var a=this,b=a.chart,c=b.renderer,d=a.group,e,f,g,h,i=a.box,j=a.options,k=a.padding,l=j.borderWidth,o=j.backgroundColor;a.itemX=a.initialItemX;a.itemY=a.initialItemY;a.offsetWidth=0;a.lastItemY=0;if(!d)a.group=d=c.g("legend").attr({zIndex:7}).add(),a.contentGroup=c.g().attr({zIndex:1}).add(d),a.scrollGroup=c.g().add(a.contentGroup);
a.renderTitle();e=a.getAllItems();ob(e,function(a,b){return(a.options&&a.options.legendIndex||0)-(b.options&&b.options.legendIndex||0)});j.reversed&&e.reverse();a.allItems=e;a.display=f=!!e.length;p(e,function(b){a.renderItem(b)});g=j.width||a.offsetWidth;h=a.lastItemY+a.lastLineHeight+a.titleHeight;h=a.handleOverflow(h);if(l||o){g+=k;h+=k;if(i){if(g>0&&h>0)i[i.isNew?"attr":"animate"](i.crisp({width:g,height:h})),i.isNew=!1}else a.box=i=c.rect(0,0,g,h,j.borderRadius,l||0).attr({stroke:j.borderColor,
"stroke-width":l||0,fill:o||Q}).add(d).shadow(j.shadow),i.isNew=!0;i[f?"show":"hide"]()}a.legendWidth=g;a.legendHeight=h;p(e,function(b){a.positionItem(b)});f&&d.align(q({width:g,height:h},j),!0,"spacingBox");b.isResizing||this.positionCheckboxes()},handleOverflow:function(a){var b=this,c=this.chart,d=c.renderer,e=this.options,f=e.y,f=c.spacingBox.height+(e.verticalAlign==="top"?-f:f)-this.padding,g=e.maxHeight,h,i=this.clipRect,j=e.navigation,k=m(j.animation,!0),l=j.arrowSize||12,o=this.nav,n=this.pages,
s,q=this.allItems;e.layout==="horizontal"&&(f/=2);g&&(f=C(f,g));n.length=0;if(a>f&&!e.useHTML){this.clipHeight=h=f-20-this.titleHeight-this.padding;this.currentPage=m(this.currentPage,1);this.fullHeight=a;p(q,function(a,b){var c=a._legendItemPos[1],d=u(a.legendItem.getBBox().height),e=n.length;if(!e||c-n[e-1]>h&&(s||c)!==n[e-1])n.push(s||c),e++;b===q.length-1&&c+d-n[e-1]>h&&n.push(c);c!==s&&(s=c)});if(!i)i=b.clipRect=d.clipRect(0,this.padding,9999,0),b.contentGroup.clip(i);i.attr({height:h});if(!o)this.nav=
o=d.g().attr({zIndex:1}).add(this.group),this.up=d.symbol("triangle",0,0,l,l).on("click",function(){b.scroll(-1,k)}).add(o),this.pager=d.text("",15,10).css(j.style).add(o),this.down=d.symbol("triangle-down",0,0,l,l).on("click",function(){b.scroll(1,k)}).add(o);b.scroll(0);a=f}else if(o)i.attr({height:c.chartHeight}),o.hide(),this.scrollGroup.attr({translateY:1}),this.clipHeight=0;return a},scroll:function(a,b){var c=this.pages,d=c.length,e=this.currentPage+a,f=this.clipHeight,g=this.options.navigation,
h=g.activeColor,g=g.inactiveColor,i=this.pager,j=this.padding;e>d&&(e=d);if(e>0)b!==t&&Qa(b,this.chart),this.nav.attr({translateX:j,translateY:f+this.padding+7+this.titleHeight,visibility:"visible"}),this.up.attr({fill:e===1?g:h}).css({cursor:e===1?"default":"pointer"}),i.attr({text:e+"/"+d}),this.down.attr({x:18+this.pager.getBBox().width,fill:e===d?g:h}).css({cursor:e===d?"default":"pointer"}),c=-c[e-1]+this.initialItemY,this.scrollGroup.animate({translateY:c}),this.currentPage=e,this.positionCheckboxes(c)}};
N=R.LegendSymbolMixin={drawRectangle:function(a,b){var c=a.options.symbolHeight||12;b.legendSymbol=this.chart.renderer.rect(0,a.baseline-5-c/2,a.symbolWidth,c,a.options.symbolRadius||0).attr({zIndex:3}).add(b.legendGroup)},drawLineMarker:function(a){var b=this.options,c=b.marker,d;d=a.symbolWidth;var e=this.chart.renderer,f=this.legendGroup,a=a.baseline-u(e.fontMetrics(a.options.itemStyle.fontSize).b*0.3),g;if(b.lineWidth){g={"stroke-width":b.lineWidth};if(b.dashStyle)g.dashstyle=b.dashStyle;this.legendLine=
e.path(["M",0,a,"L",d,a]).attr(g).add(f)}if(c&&c.enabled!==!1)b=c.radius,this.legendSymbol=d=e.symbol(this.symbol,d/2-b,a-b,2*b,2*b).add(f),d.isMarker=!0}};(/Trident\/7\.0/.test(wa)||Ta)&&Ma(lb.prototype,"positionItem",function(a,b){var c=this,d=function(){b._legendItemPos&&a.call(c,b)};d();setTimeout(d)});Ya.prototype={init:function(a,b){var c,d=a.series;a.series=null;c=w(E,a);c.series=a.series=d;this.userOptions=a;d=c.chart;this.margin=this.splashArray("margin",d);this.spacing=this.splashArray("spacing",
d);var e=d.events;this.bounds={h:{},v:{}};this.callback=b;this.isResizing=0;this.options=c;this.axes=[];this.series=[];this.hasCartesianSeries=d.showAxes;var f=this,g;f.index=V.length;V.push(f);ab++;d.reflow!==!1&&K(f,"load",function(){f.initReflow()});if(e)for(g in e)K(f,g,e[g]);f.xAxis=[];f.yAxis=[];f.animation=fa?!1:m(d.animation,!0);f.pointCount=0;f.counters=new Bb;f.firstRender()},initSeries:function(a){var b=this.options.chart;(b=F[a.type||b.type||b.defaultSeriesType])||ra(17,!0);b=new b;b.init(this,
a);return b},isInsidePlot:function(a,b,c){var d=c?b:a,a=c?a:b;return d>=0&&d<=this.plotWidth&&a>=0&&a<=this.plotHeight},adjustTickAmounts:function(){this.options.chart.alignTicks!==!1&&p(this.axes,function(a){a.adjustTickAmount()});this.maxTicks=null},redraw:function(a){var b=this.axes,c=this.series,d=this.pointer,e=this.legend,f=this.isDirtyLegend,g,h,i=this.isDirtyBox,j=c.length,k=j,l=this.renderer,o=l.isHidden(),n=[];Qa(a,this);o&&this.cloneRenderTo();for(this.layOutTitles();k--;)if(a=c[k],a.options.stacking&&
(g=!0,a.isDirty)){h=!0;break}if(h)for(k=j;k--;)if(a=c[k],a.options.stacking)a.isDirty=!0;p(c,function(a){a.isDirty&&a.options.legendType==="point"&&(f=!0)});if(f&&e.options.enabled)e.render(),this.isDirtyLegend=!1;g&&this.getStacks();if(this.hasCartesianSeries){if(!this.isResizing)this.maxTicks=null,p(b,function(a){a.setScale()});this.adjustTickAmounts();this.getMargins();p(b,function(a){a.isDirty&&(i=!0)});p(b,function(a){if(a.isDirtyExtremes)a.isDirtyExtremes=!1,n.push(function(){D(a,"afterSetExtremes",
q(a.eventArgs,a.getExtremes()));delete a.eventArgs});(i||g)&&a.redraw()})}i&&this.drawChartBox();p(c,function(a){a.isDirty&&a.visible&&(!a.isCartesian||a.xAxis)&&a.redraw()});d&&d.reset(!0);l.draw();D(this,"redraw");o&&this.cloneRenderTo(!0);p(n,function(a){a.call()})},get:function(a){var b=this.axes,c=this.series,d,e;for(d=0;d<b.length;d++)if(b[d].options.id===a)return b[d];for(d=0;d<c.length;d++)if(c[d].options.id===a)return c[d];for(d=0;d<c.length;d++){e=c[d].points||[];for(b=0;b<e.length;b++)if(e[b].id===
a)return e[b]}return null},getAxes:function(){var a=this,b=this.options,c=b.xAxis=qa(b.xAxis||{}),b=b.yAxis=qa(b.yAxis||{});p(c,function(a,b){a.index=b;a.isX=!0});p(b,function(a,b){a.index=b});c=c.concat(b);p(c,function(b){new la(a,b)});a.adjustTickAmounts()},getSelectedPoints:function(){var a=[];p(this.series,function(b){a=a.concat(vb(b.points||[],function(a){return a.selected}))});return a},getSelectedSeries:function(){return vb(this.series,function(a){return a.selected})},getStacks:function(){var a=
this;p(a.yAxis,function(a){if(a.stacks&&a.hasVisibleSeries)a.oldStacks=a.stacks});p(a.series,function(b){if(b.options.stacking&&(b.visible===!0||a.options.chart.ignoreHiddenSeries===!1))b.stackKey=b.type+m(b.options.stack,"")})},setTitle:function(a,b,c){var g;var d=this,e=d.options,f;f=e.title=w(e.title,a);g=e.subtitle=w(e.subtitle,b),e=g;p([["title",a,f],["subtitle",b,e]],function(a){var b=a[0],c=d[b],e=a[1],a=a[2];c&&e&&(d[b]=c=c.destroy());a&&a.text&&!c&&(d[b]=d.renderer.text(a.text,0,0,a.useHTML).attr({align:a.align,
"class":"highcharts-"+b,zIndex:a.zIndex||4}).css(a.style).add())});d.layOutTitles(c)},layOutTitles:function(a){var b=0,c=this.title,d=this.subtitle,e=this.options,f=e.title,e=e.subtitle,g=this.spacingBox.width-44;if(c&&(c.css({width:(f.width||g)+"px"}).align(q({y:15},f),!1,"spacingBox"),!f.floating&&!f.verticalAlign))b=c.getBBox().height;d&&(d.css({width:(e.width||g)+"px"}).align(q({y:b+f.margin},e),!1,"spacingBox"),!e.floating&&!e.verticalAlign&&(b=Ka(b+d.getBBox().height)));c=this.titleOffset!==
b;this.titleOffset=b;if(!this.isDirtyBox&&c)this.isDirtyBox=c,this.hasRendered&&m(a,!0)&&this.isDirtyBox&&this.redraw()},getChartSize:function(){var a=this.options.chart,b=a.width,a=a.height,c=this.renderToClone||this.renderTo;if(!r(b))this.containerWidth=jb(c,"width");if(!r(a))this.containerHeight=jb(c,"height");this.chartWidth=v(0,b||this.containerWidth||600);this.chartHeight=v(0,m(a,this.containerHeight>19?this.containerHeight:400))},cloneRenderTo:function(a){var b=this.renderToClone,c=this.container;
a?b&&(this.renderTo.appendChild(c),Pa(b),delete this.renderToClone):(c&&c.parentNode===this.renderTo&&this.renderTo.removeChild(c),this.renderToClone=b=this.renderTo.cloneNode(0),G(b,{position:"absolute",top:"-9999px",display:"block"}),b.style.setProperty&&b.style.setProperty("display","block","important"),y.body.appendChild(b),c&&b.appendChild(c))},getContainer:function(){var a,b=this.options.chart,c,d,e;this.renderTo=a=b.renderTo;e="highcharts-"+tb++;if(Fa(a))this.renderTo=a=y.getElementById(a);
a||ra(13,!0);c=z(H(a,"data-highcharts-chart"));!isNaN(c)&&V[c]&&V[c].hasRendered&&V[c].destroy();H(a,"data-highcharts-chart",this.index);a.innerHTML="";!b.skipClone&&!a.offsetWidth&&this.cloneRenderTo();this.getChartSize();c=this.chartWidth;d=this.chartHeight;this.container=a=Y(Ja,{className:"highcharts-container"+(b.className?" "+b.className:""),id:e},q({position:"relative",overflow:"hidden",width:c+"px",height:d+"px",textAlign:"left",lineHeight:"normal",zIndex:0,"-webkit-tap-highlight-color":"rgba(0,0,0,0)"},
b.style),this.renderToClone||a);this._cursor=a.style.cursor;this.renderer=b.forExport?new ta(a,c,d,b.style,!0):new Za(a,c,d,b.style);fa&&this.renderer.create(this,a,c,d)},getMargins:function(){var a=this.spacing,b,c=this.legend,d=this.margin,e=this.options.legend,f=m(e.margin,20),g=e.x,h=e.y,i=e.align,j=e.verticalAlign,k=this.titleOffset;this.resetMargins();b=this.axisOffset;if(k&&!r(d[0]))this.plotTop=v(this.plotTop,k+this.options.title.margin+a[0]);if(c.display&&!e.floating)if(i==="right"){if(!r(d[1]))this.marginRight=
v(this.marginRight,c.legendWidth-g+f+a[1])}else if(i==="left"){if(!r(d[3]))this.plotLeft=v(this.plotLeft,c.legendWidth+g+f+a[3])}else if(j==="top"){if(!r(d[0]))this.plotTop=v(this.plotTop,c.legendHeight+h+f+a[0])}else if(j==="bottom"&&!r(d[2]))this.marginBottom=v(this.marginBottom,c.legendHeight-h+f+a[2]);this.extraBottomMargin&&(this.marginBottom+=this.extraBottomMargin);this.extraTopMargin&&(this.plotTop+=this.extraTopMargin);this.hasCartesianSeries&&p(this.axes,function(a){a.getOffset()});r(d[3])||
(this.plotLeft+=b[3]);r(d[0])||(this.plotTop+=b[0]);r(d[2])||(this.marginBottom+=b[2]);r(d[1])||(this.marginRight+=b[1]);this.setChartSize()},reflow:function(a){var b=this,c=b.options.chart,d=b.renderTo,e=c.width||jb(d,"width"),f=c.height||jb(d,"height"),c=a?a.target:I,d=function(){if(b.container)b.setSize(e,f,!1),b.hasUserSize=null};if(!b.hasUserSize&&e&&f&&(c===I||c===y)){if(e!==b.containerWidth||f!==b.containerHeight)clearTimeout(b.reflowTimeout),a?b.reflowTimeout=setTimeout(d,100):d();b.containerWidth=
e;b.containerHeight=f}},initReflow:function(){var a=this,b=function(b){a.reflow(b)};K(I,"resize",b);K(a,"destroy",function(){W(I,"resize",b)})},setSize:function(a,b,c){var d=this,e,f,g;d.isResizing+=1;g=function(){d&&D(d,"endResize",null,function(){d.isResizing-=1})};Qa(c,d);d.oldChartHeight=d.chartHeight;d.oldChartWidth=d.chartWidth;if(r(a))d.chartWidth=e=v(0,u(a)),d.hasUserSize=!!e;if(r(b))d.chartHeight=f=v(0,u(b));(va?kb:G)(d.container,{width:e+"px",height:f+"px"},va);d.setChartSize(!0);d.renderer.setSize(e,
f,c);d.maxTicks=null;p(d.axes,function(a){a.isDirty=!0;a.setScale()});p(d.series,function(a){a.isDirty=!0});d.isDirtyLegend=!0;d.isDirtyBox=!0;d.layOutTitles();d.getMargins();d.redraw(c);d.oldChartHeight=null;D(d,"resize");va===!1?g():setTimeout(g,va&&va.duration||500)},setChartSize:function(a){var b=this.inverted,c=this.renderer,d=this.chartWidth,e=this.chartHeight,f=this.options.chart,g=this.spacing,h=this.clipOffset,i,j,k,l;this.plotLeft=i=u(this.plotLeft);this.plotTop=j=u(this.plotTop);this.plotWidth=
k=v(0,u(d-i-this.marginRight));this.plotHeight=l=v(0,u(e-j-this.marginBottom));this.plotSizeX=b?l:k;this.plotSizeY=b?k:l;this.plotBorderWidth=f.plotBorderWidth||0;this.spacingBox=c.spacingBox={x:g[3],y:g[0],width:d-g[3]-g[1],height:e-g[0]-g[2]};this.plotBox=c.plotBox={x:i,y:j,width:k,height:l};d=2*T(this.plotBorderWidth/2);b=Ka(v(d,h[3])/2);c=Ka(v(d,h[0])/2);this.clipBox={x:b,y:c,width:T(this.plotSizeX-v(d,h[1])/2-b),height:T(this.plotSizeY-v(d,h[2])/2-c)};a||p(this.axes,function(a){a.setAxisSize();
a.setAxisTranslation()})},resetMargins:function(){var a=this.spacing,b=this.margin;this.plotTop=m(b[0],a[0]);this.marginRight=m(b[1],a[1]);this.marginBottom=m(b[2],a[2]);this.plotLeft=m(b[3],a[3]);this.axisOffset=[0,0,0,0];this.clipOffset=[0,0,0,0]},drawChartBox:function(){var a=this.options.chart,b=this.renderer,c=this.chartWidth,d=this.chartHeight,e=this.chartBackground,f=this.plotBackground,g=this.plotBorder,h=this.plotBGImage,i=a.borderWidth||0,j=a.backgroundColor,k=a.plotBackgroundColor,l=a.plotBackgroundImage,
o=a.plotBorderWidth||0,n,s=this.plotLeft,m=this.plotTop,p=this.plotWidth,q=this.plotHeight,r=this.plotBox,v=this.clipRect,u=this.clipBox;n=i+(a.shadow?8:0);if(i||j)if(e)e.animate(e.crisp({width:c-n,height:d-n}));else{e={fill:j||Q};if(i)e.stroke=a.borderColor,e["stroke-width"]=i;this.chartBackground=b.rect(n/2,n/2,c-n,d-n,a.borderRadius,i).attr(e).addClass("highcharts-background").add().shadow(a.shadow)}if(k)f?f.animate(r):this.plotBackground=b.rect(s,m,p,q,0).attr({fill:k}).add().shadow(a.plotShadow);
if(l)h?h.animate(r):this.plotBGImage=b.image(l,s,m,p,q).add();v?v.animate({width:u.width,height:u.height}):this.clipRect=b.clipRect(u);if(o)g?g.animate(g.crisp({x:s,y:m,width:p,height:q})):this.plotBorder=b.rect(s,m,p,q,0,-o).attr({stroke:a.plotBorderColor,"stroke-width":o,fill:Q,zIndex:1}).add();this.isDirtyBox=!1},propFromSeries:function(){var a=this,b=a.options.chart,c,d=a.options.series,e,f;p(["inverted","angular","polar"],function(g){c=F[b.type||b.defaultSeriesType];f=a[g]||b[g]||c&&c.prototype[g];
for(e=d&&d.length;!f&&e--;)(c=F[d[e].type])&&c.prototype[g]&&(f=!0);a[g]=f})},linkSeries:function(){var a=this,b=a.series;p(b,function(a){a.linkedSeries.length=0});p(b,function(b){var d=b.options.linkedTo;if(Fa(d)&&(d=d===":previous"?a.series[b.index-1]:a.get(d)))d.linkedSeries.push(b),b.linkedParent=d})},renderSeries:function(){p(this.series,function(a){a.translate();a.setTooltipPoints&&a.setTooltipPoints();a.render()})},render:function(){var a=this,b=a.axes,c=a.renderer,d=a.options,e=d.labels,f=
d.credits,g;a.setTitle();a.legend=new lb(a,d.legend);a.getStacks();p(b,function(a){a.setScale()});a.getMargins();a.maxTicks=null;p(b,function(a){a.setTickPositions(!0);a.setMaxTicks()});a.adjustTickAmounts();a.getMargins();a.drawChartBox();a.hasCartesianSeries&&p(b,function(a){a.render()});if(!a.seriesGroup)a.seriesGroup=c.g("series-group").attr({zIndex:3}).add();a.renderSeries();e.items&&p(e.items,function(b){var d=q(e.style,b.style),f=z(d.left)+a.plotLeft,g=z(d.top)+a.plotTop+12;delete d.left;delete d.top;
c.text(b.html,f,g).attr({zIndex:2}).css(d).add()});if(f.enabled&&!a.credits)g=f.href,a.credits=c.text(f.text,0,0).on("click",function(){if(g)location.href=g}).attr({align:f.position.align,zIndex:8}).css(f.style).add().align(f.position);a.hasRendered=!0},destroy:function(){var a=this,b=a.axes,c=a.series,d=a.container,e,f=d&&d.parentNode;D(a,"destroy");V[a.index]=t;ab--;a.renderTo.removeAttribute("data-highcharts-chart");W(a);for(e=b.length;e--;)b[e]=b[e].destroy();for(e=c.length;e--;)c[e]=c[e].destroy();
p("title,subtitle,chartBackground,plotBackground,plotBGImage,plotBorder,seriesGroup,clipRect,credits,pointer,scroller,rangeSelector,legend,resetZoomButton,tooltip,renderer".split(","),function(b){var c=a[b];c&&c.destroy&&(a[b]=c.destroy())});if(d)d.innerHTML="",W(d),f&&Pa(d);for(e in a)delete a[e]},isReadyToRender:function(){var a=this;return!aa&&I==I.top&&y.readyState!=="complete"||fa&&!I.canvg?(fa?Lb.push(function(){a.firstRender()},a.options.global.canvasToolsURL):y.attachEvent("onreadystatechange",
function(){y.detachEvent("onreadystatechange",a.firstRender);y.readyState==="complete"&&a.firstRender()}),!1):!0},firstRender:function(){var a=this,b=a.options,c=a.callback;if(a.isReadyToRender()){a.getContainer();D(a,"init");a.resetMargins();a.setChartSize();a.propFromSeries();a.getAxes();p(b.series||[],function(b){a.initSeries(b)});a.linkSeries();D(a,"beforeRender");if(R.Pointer)a.pointer=new Wa(a,b);a.render();a.renderer.draw();c&&c.apply(a,[a]);p(a.callbacks,function(b){b.apply(a,[a])});a.cloneRenderTo(!0);
D(a,"load")}},splashArray:function(a,b){var c=b[a],c=ca(c)?c:[c,c,c,c];return[m(b[a+"Top"],c[0]),m(b[a+"Right"],c[1]),m(b[a+"Bottom"],c[2]),m(b[a+"Left"],c[3])]}};Ya.prototype.callbacks=[];X=R.CenteredSeriesMixin={getCenter:function(){var a=this.options,b=this.chart,c=2*(a.slicedOffset||0),d,e=b.plotWidth-2*c,f=b.plotHeight-2*c,b=a.center,a=[m(b[0],"50%"),m(b[1],"50%"),a.size||"100%",a.innerSize||0],g=C(e,f),h;return Ua(a,function(a,b){h=/%$/.test(a);d=b<2||b===2&&h;return(h?[e,f,g,g][b]*z(a)/100:
a)+(d?c:0)})}};var Ea=function(){};Ea.prototype={init:function(a,b,c){this.series=a;this.applyOptions(b,c);this.pointAttr={};if(a.options.colorByPoint&&(b=a.options.colors||a.chart.options.colors,this.color=this.color||b[a.colorCounter++],a.colorCounter===b.length))a.colorCounter=0;a.chart.pointCount++;return this},applyOptions:function(a,b){var c=this.series,d=c.pointValKey,a=Ea.prototype.optionsToObject.call(this,a);q(this,a);this.options=this.options?q(this.options,a):a;if(d)this.y=this[d];if(this.x===
t&&c)this.x=b===t?c.autoIncrement():b;return this},optionsToObject:function(a){var b={},c=this.series,d=c.pointArrayMap||["y"],e=d.length,f=0,g=0;if(typeof a==="number"||a===null)b[d[0]]=a;else if(La(a)){if(a.length>e){c=typeof a[0];if(c==="string")b.name=a[0];else if(c==="number")b.x=a[0];f++}for(;g<e;)b[d[g++]]=a[f++]}else if(typeof a==="object"){b=a;if(a.dataLabels)c._hasPointLabels=!0;if(a.marker)c._hasPointMarkers=!0}return b},destroy:function(){var a=this.series.chart,b=a.hoverPoints,c;a.pointCount--;
if(b&&(this.setState(),ja(b,this),!b.length))a.hoverPoints=null;if(this===a.hoverPoint)this.onMouseOut();if(this.graphic||this.dataLabel)W(this),this.destroyElements();this.legendItem&&a.legend.destroyItem(this);for(c in this)this[c]=null},destroyElements:function(){for(var a="graphic,dataLabel,dataLabelUpper,group,connector,shadowGroup".split(","),b,c=6;c--;)b=a[c],this[b]&&(this[b]=this[b].destroy())},getLabelConfig:function(){return{x:this.category,y:this.y,key:this.name||this.category,series:this.series,
point:this,percentage:this.percentage,total:this.total||this.stackTotal}},tooltipFormatter:function(a){var b=this.series,c=b.tooltipOptions,d=m(c.valueDecimals,""),e=c.valuePrefix||"",f=c.valueSuffix||"";p(b.pointArrayMap||["y"],function(b){b="{point."+b;if(e||f)a=a.replace(b+"}",e+b+"}"+f);a=a.replace(b+"}",b+":,."+d+"f}")});return Ia(a,{point:this,series:this.series})},firePointEvent:function(a,b,c){var d=this,e=this.series.options;(e.point.events[a]||d.options&&d.options.events&&d.options.events[a])&&
this.importEvents();a==="click"&&e.allowPointSelect&&(c=function(a){d.select(null,a.ctrlKey||a.metaKey||a.shiftKey)});D(this,a,b,c)}};var O=function(){};O.prototype={isCartesian:!0,type:"line",pointClass:Ea,sorted:!0,requireSorting:!0,pointAttrToOptions:{stroke:"lineColor","stroke-width":"lineWidth",fill:"fillColor",r:"radius"},axisTypes:["xAxis","yAxis"],colorCounter:0,parallelArrays:["x","y"],init:function(a,b){var c=this,d,e,f=a.series,g=function(a,b){return m(a.options.index,a._i)-m(b.options.index,
b._i)};c.chart=a;c.options=b=c.setOptions(b);c.linkedSeries=[];c.bindAxes();q(c,{name:b.name,state:"",pointAttr:{},visible:b.visible!==!1,selected:b.selected===!0});if(fa)b.animation=!1;e=b.events;for(d in e)K(c,d,e[d]);if(e&&e.click||b.point&&b.point.events&&b.point.events.click||b.allowPointSelect)a.runTrackerClick=!0;c.getColor();c.getSymbol();p(c.parallelArrays,function(a){c[a+"Data"]=[]});c.setData(b.data,!1);if(c.isCartesian)a.hasCartesianSeries=!0;f.push(c);c._i=f.length-1;ob(f,g);this.yAxis&&
ob(this.yAxis.series,g);p(f,function(a,b){a.index=b;a.name=a.name||"Series "+(b+1)})},bindAxes:function(){var a=this,b=a.options,c=a.chart,d;p(a.axisTypes||[],function(e){p(c[e],function(c){d=c.options;if(b[e]===d.index||b[e]!==t&&b[e]===d.id||b[e]===t&&d.index===0)c.series.push(a),a[e]=c,c.isDirty=!0});!a[e]&&a.optionalAxis!==e&&ra(18,!0)})},updateParallelArrays:function(a,b){var c=a.series,d=arguments;p(c.parallelArrays,typeof b==="number"?function(d){var f=d==="y"&&c.toYData?c.toYData(a):a[d];
c[d+"Data"][b]=f}:function(a){Array.prototype[b].apply(c[a+"Data"],Array.prototype.slice.call(d,2))})},autoIncrement:function(){var a=this.options,b=this.xIncrement,b=m(b,a.pointStart,0);this.pointInterval=m(this.pointInterval,a.pointInterval,1);this.xIncrement=b+this.pointInterval;return b},getSegments:function(){var a=-1,b=[],c,d=this.points,e=d.length;if(e)if(this.options.connectNulls){for(c=e;c--;)d[c].y===null&&d.splice(c,1);d.length&&(b=[d])}else p(d,function(c,g){c.y===null?(g>a+1&&b.push(d.slice(a+
1,g)),a=g):g===e-1&&b.push(d.slice(a+1,g+1))});this.segments=b},setOptions:function(a){var b=this.chart,c=b.options.plotOptions,b=b.userOptions||{},d=b.plotOptions||{},e=c[this.type];this.userOptions=a;c=w(e,c.series,a);this.tooltipOptions=w(E.tooltip,E.plotOptions[this.type].tooltip,b.tooltip,d.series&&d.series.tooltip,d[this.type]&&d[this.type].tooltip,a.tooltip);e.marker===null&&delete c.marker;return c},getColor:function(){var a=this.options,b=this.userOptions,c=this.chart.options.colors,d=this.chart.counters,
e;e=a.color||ba[this.type].color;if(!e&&!a.colorByPoint)r(b._colorIndex)?a=b._colorIndex:(b._colorIndex=d.color,a=d.color++),e=c[a];this.color=e;d.wrapColor(c.length)},getSymbol:function(){var a=this.userOptions,b=this.options.marker,c=this.chart,d=c.options.symbols,c=c.counters;this.symbol=b.symbol;if(!this.symbol)r(a._symbolIndex)?a=a._symbolIndex:(a._symbolIndex=c.symbol,a=c.symbol++),this.symbol=d[a];if(/^url/.test(this.symbol))b.radius=0;c.wrapSymbol(d.length)},drawLegendSymbol:N.drawLineMarker,
setData:function(a,b,c,d){var e=this,f=e.points,g=f&&f.length||0,h,i=e.options,j=e.chart,k=null,l=e.xAxis,o=l&&!!l.categories,n=e.tooltipPoints,s=i.turboThreshold,q=this.xData,r=this.yData,v=(h=e.pointArrayMap)&&h.length,a=a||[];h=a.length;b=m(b,!0);if(d!==!1&&h&&g===h&&!e.cropped&&!e.hasGroupedData)p(a,function(a,b){f[b].update(a,!1)});else{e.xIncrement=null;e.pointRange=o?1:i.pointRange;e.colorCounter=0;p(this.parallelArrays,function(a){e[a+"Data"].length=0});if(s&&h>s){for(c=0;k===null&&c<h;)k=
a[c],c++;if(ha(k)){o=m(i.pointStart,0);i=m(i.pointInterval,1);for(c=0;c<h;c++)q[c]=o,r[c]=a[c],o+=i;e.xIncrement=o}else if(La(k))if(v)for(c=0;c<h;c++)i=a[c],q[c]=i[0],r[c]=i.slice(1,v+1);else for(c=0;c<h;c++)i=a[c],q[c]=i[0],r[c]=i[1];else ra(12)}else for(c=0;c<h;c++)if(a[c]!==t&&(i={series:e},e.pointClass.prototype.applyOptions.apply(i,[a[c]]),e.updateParallelArrays(i,c),o&&i.name))l.names[i.x]=i.name;Fa(r[0])&&ra(14,!0);e.data=[];e.options.data=a;for(c=g;c--;)f[c]&&f[c].destroy&&f[c].destroy();
if(n)n.length=0;if(l)l.minRange=l.userMinRange;e.isDirty=e.isDirtyData=j.isDirtyBox=!0;c=!1}b&&j.redraw(c)},processData:function(a){var b=this.xData,c=this.yData,d=b.length,e;e=0;var f,g,h=this.xAxis,i=this.options,j=i.cropThreshold,k=0,l=this.isCartesian,o,n;if(l&&!this.isDirty&&!h.isDirty&&!this.yAxis.isDirty&&!a)return!1;if(l&&this.sorted&&(!j||d>j||this.forceCrop))if(o=h.min,n=h.max,b[d-1]<o||b[0]>n)b=[],c=[];else if(b[0]<o||b[d-1]>n)e=this.cropData(this.xData,this.yData,o,n),b=e.xData,c=e.yData,
e=e.start,f=!0,k=b.length;for(d=b.length-1;d>=0;d--)a=b[d]-b[d-1],!f&&b[d]>o&&b[d]<n&&k++,a>0&&(g===t||a<g)?g=a:a<0&&this.requireSorting&&ra(15);this.cropped=f;this.cropStart=e;this.processedXData=b;this.processedYData=c;this.activePointCount=k;if(i.pointRange===null)this.pointRange=g||1;this.closestPointRange=g},cropData:function(a,b,c,d){var e=a.length,f=0,g=e,h=m(this.cropShoulder,1),i;for(i=0;i<e;i++)if(a[i]>=c){f=v(0,i-h);break}for(;i<e;i++)if(a[i]>d){g=i+h;break}return{xData:a.slice(f,g),yData:b.slice(f,
g),start:f,end:g}},generatePoints:function(){var a=this.options.data,b=this.data,c,d=this.processedXData,e=this.processedYData,f=this.pointClass,g=d.length,h=this.cropStart||0,i,j=this.hasGroupedData,k,l=[],o;if(!b&&!j)b=[],b.length=a.length,b=this.data=b;for(o=0;o<g;o++)i=h+o,j?l[o]=(new f).init(this,[d[o]].concat(qa(e[o]))):(b[i]?k=b[i]:a[i]!==t&&(b[i]=k=(new f).init(this,a[i],d[o])),l[o]=k);if(b&&(g!==(c=b.length)||j))for(o=0;o<c;o++)if(o===h&&!j&&(o+=g),b[o])b[o].destroyElements(),b[o].plotX=
t;this.data=b;this.points=l},getExtremes:function(a){var b=this.yAxis,c=this.processedXData,d,e=[],f=0;d=this.xAxis.getExtremes();var g=d.min,h=d.max,i,j,k,l,a=a||this.stackedYData||this.processedYData;d=a.length;for(l=0;l<d;l++)if(j=c[l],k=a[l],i=k!==null&&k!==t&&(!b.isLog||k.length||k>0),j=this.getExtremesFromAll||this.cropped||(c[l+1]||j)>=g&&(c[l-1]||j)<=h,i&&j)if(i=k.length)for(;i--;)k[i]!==null&&(e[f++]=k[i]);else e[f++]=k;this.dataMin=m(void 0,Na(e));this.dataMax=m(void 0,Ba(e))},translate:function(){this.processedXData||
this.processData();this.generatePoints();for(var a=this.options,b=a.stacking,c=this.xAxis,d=c.categories,e=this.yAxis,f=this.points,g=f.length,h=!!this.modifyValue,i=a.pointPlacement,j=i==="between"||ha(i),k=a.threshold,a=0;a<g;a++){var l=f[a],o=l.x,n=l.y,s=l.low,p=b&&e.stacks[(this.negStacks&&n<k?"-":"")+this.stackKey];if(e.isLog&&n<=0)l.y=n=null;l.plotX=c.translate(o,0,0,0,1,i,this.type==="flags");if(b&&this.visible&&p&&p[o])p=p[o],n=p.points[this.index+","+a],s=n[0],n=n[1],s===0&&(s=m(k,e.min)),
e.isLog&&s<=0&&(s=null),l.total=l.stackTotal=p.total,l.percentage=p.total&&l.y/p.total*100,l.stackY=n,p.setOffset(this.pointXOffset||0,this.barW||0);l.yBottom=r(s)?e.translate(s,0,1,0,1):null;h&&(n=this.modifyValue(n,l));l.plotY=typeof n==="number"&&n!==Infinity?e.translate(n,0,1,0,1):t;l.clientX=j?c.translate(o,0,0,0,1):l.plotX;l.negative=l.y<(k||0);l.category=d&&d[l.x]!==t?d[l.x]:l.x}this.getSegments()},animate:function(a){var b=this.chart,c=b.renderer,d;d=this.options.animation;var e=this.clipBox||
b.clipBox,f=b.inverted,g;if(d&&!ca(d))d=ba[this.type].animation;g=["_sharedClip",d.duration,d.easing,e.height].join(",");a?(a=b[g],d=b[g+"m"],a||(b[g]=a=c.clipRect(q(e,{width:0})),b[g+"m"]=d=c.clipRect(-99,f?-b.plotLeft:-b.plotTop,99,f?b.chartWidth:b.chartHeight)),this.group.clip(a),this.markerGroup.clip(d),this.sharedClipKey=g):((a=b[g])&&a.animate({width:b.plotSizeX},d),b[g+"m"]&&b[g+"m"].animate({width:b.plotSizeX+99},d),this.animate=null)},afterAnimate:function(){var a=this.chart,b=this.sharedClipKey,
c=this.group,d=this.clipBox;if(c&&this.options.clip!==!1){if(!b||!d)c.clip(d?a.renderer.clipRect(d):a.clipRect);this.markerGroup.clip()}D(this,"afterAnimate");setTimeout(function(){b&&a[b]&&(d||(a[b]=a[b].destroy()),a[b+"m"]&&(a[b+"m"]=a[b+"m"].destroy()))},100)},drawPoints:function(){var a,b=this.points,c=this.chart,d,e,f,g,h,i,j,k;d=this.options.marker;var l=this.pointAttr[""],o,n=this.markerGroup,s=m(d.enabled,this.activePointCount<0.5*this.xAxis.len/d.radius);if(d.enabled!==!1||this._hasPointMarkers)for(f=
b.length;f--;)if(g=b[f],d=T(g.plotX),e=g.plotY,k=g.graphic,i=g.marker||{},a=s&&i.enabled===t||i.enabled,o=c.isInsidePlot(u(d),e,c.inverted),a&&e!==t&&!isNaN(e)&&g.y!==null)if(a=g.pointAttr[g.selected?"select":""]||l,h=a.r,i=m(i.symbol,this.symbol),j=i.indexOf("url")===0,k)k[o?"show":"hide"](!0).animate(q({x:d-h,y:e-h},k.symbolName?{width:2*h,height:2*h}:{}));else{if(o&&(h>0||j))g.graphic=c.renderer.symbol(i,d-h,e-h,2*h,2*h).attr(a).add(n)}else if(k)g.graphic=k.destroy()},convertAttribs:function(a,
b,c,d){var e=this.pointAttrToOptions,f,g,h={},a=a||{},b=b||{},c=c||{},d=d||{};for(f in e)g=e[f],h[f]=m(a[g],b[f],c[f],d[f]);return h},getAttribs:function(){var a=this,b=a.options,c=ba[a.type].marker?b.marker:b,d=c.states,e=d.hover,f,g=a.color;f={stroke:g,fill:g};var h=a.points||[],i,j=[],k,l=a.pointAttrToOptions;k=a.hasPointSpecificOptions;var o=b.negativeColor,n=c.lineColor,s=c.fillColor;i=b.turboThreshold;var m;b.marker?(e.radius=e.radius||c.radius+2,e.lineWidth=e.lineWidth||c.lineWidth+1):e.color=
e.color||ya(e.color||g).brighten(e.brightness).get();j[""]=a.convertAttribs(c,f);p(["hover","select"],function(b){j[b]=a.convertAttribs(d[b],j[""])});a.pointAttr=j;g=h.length;if(!i||g<i||k)for(;g--;){i=h[g];if((c=i.options&&i.options.marker||i.options)&&c.enabled===!1)c.radius=0;if(i.negative&&o)i.color=i.fillColor=o;k=b.colorByPoint||i.color;if(i.options)for(m in l)r(c[l[m]])&&(k=!0);if(k){c=c||{};k=[];d=c.states||{};f=d.hover=d.hover||{};if(!b.marker)f.color=f.color||!i.options.color&&e.color||
ya(i.color).brighten(f.brightness||e.brightness).get();f={color:i.color};if(!s)f.fillColor=i.color;if(!n)f.lineColor=i.color;k[""]=a.convertAttribs(q(f,c),j[""]);k.hover=a.convertAttribs(d.hover,j.hover,k[""]);k.select=a.convertAttribs(d.select,j.select,k[""])}else k=j;i.pointAttr=k}},destroy:function(){var a=this,b=a.chart,c=/AppleWebKit\/533/.test(wa),d,e,f=a.data||[],g,h,i;D(a,"destroy");W(a);p(a.axisTypes||[],function(b){if(i=a[b])ja(i.series,a),i.isDirty=i.forceRedraw=!0});a.legendItem&&a.chart.legend.destroyItem(a);
for(e=f.length;e--;)(g=f[e])&&g.destroy&&g.destroy();a.points=null;clearTimeout(a.animationTimeout);p("area,graph,dataLabelsGroup,group,markerGroup,tracker,graphNeg,areaNeg,posClip,negClip".split(","),function(b){a[b]&&(d=c&&b==="group"?"hide":"destroy",a[b][d]())});if(b.hoverSeries===a)b.hoverSeries=null;ja(b.series,a);for(h in a)delete a[h]},getSegmentPath:function(a){var b=this,c=[],d=b.options.step;p(a,function(e,f){var g=e.plotX,h=e.plotY,i;b.getPointSpline?c.push.apply(c,b.getPointSpline(a,
e,f)):(c.push(f?"L":"M"),d&&f&&(i=a[f-1],d==="right"?c.push(i.plotX,h):d==="center"?c.push((i.plotX+g)/2,i.plotY,(i.plotX+g)/2,h):c.push(g,i.plotY)),c.push(e.plotX,e.plotY))});return c},getGraphPath:function(){var a=this,b=[],c,d=[];p(a.segments,function(e){c=a.getSegmentPath(e);e.length>1?b=b.concat(c):d.push(e[0])});a.singlePoints=d;return a.graphPath=b},drawGraph:function(){var a=this,b=this.options,c=[["graph",b.lineColor||this.color]],d=b.lineWidth,e=b.dashStyle,f=b.linecap!=="square",g=this.getGraphPath(),
h=b.negativeColor;h&&c.push(["graphNeg",h]);p(c,function(c,h){var k=c[0],l=a[k];if(l)bb(l),l.animate({d:g});else if(d&&g.length)l={stroke:c[1],"stroke-width":d,fill:Q,zIndex:1},e?l.dashstyle=e:f&&(l["stroke-linecap"]=l["stroke-linejoin"]="round"),a[k]=a.chart.renderer.path(g).attr(l).add(a.group).shadow(!h&&b.shadow)})},clipNeg:function(){var a=this.options,b=this.chart,c=b.renderer,d=a.negativeColor||a.negativeFillColor,e,f=this.graph,g=this.area,h=this.posClip,i=this.negClip;e=b.chartWidth;var j=
b.chartHeight,k=v(e,j),l=this.yAxis;if(d&&(f||g)){d=u(l.toPixels(a.threshold||0,!0));d<0&&(k-=d);a={x:0,y:0,width:k,height:d};k={x:0,y:d,width:k,height:k};if(b.inverted)a.height=k.y=b.plotWidth-d,c.isVML&&(a={x:b.plotWidth-d-b.plotLeft,y:0,width:e,height:j},k={x:d+b.plotLeft-e,y:0,width:b.plotLeft+d,height:e});l.reversed?(b=k,e=a):(b=a,e=k);h?(h.animate(b),i.animate(e)):(this.posClip=h=c.clipRect(b),this.negClip=i=c.clipRect(e),f&&this.graphNeg&&(f.clip(h),this.graphNeg.clip(i)),g&&(g.clip(h),this.areaNeg.clip(i)))}},
invertGroups:function(){function a(){var a={width:b.yAxis.len,height:b.xAxis.len};p(["group","markerGroup"],function(c){b[c]&&b[c].attr(a).invert()})}var b=this,c=b.chart;if(b.xAxis)K(c,"resize",a),K(b,"destroy",function(){W(c,"resize",a)}),a(),b.invertGroups=a},plotGroup:function(a,b,c,d,e){var f=this[a],g=!f;g&&(this[a]=f=this.chart.renderer.g(b).attr({visibility:c,zIndex:d||0.1}).add(e));f[g?"attr":"animate"](this.getPlotBox());return f},getPlotBox:function(){var a=this.chart,b=this.xAxis,c=this.yAxis;
if(a.inverted)b=c,c=this.xAxis;return{translateX:b?b.left:a.plotLeft,translateY:c?c.top:a.plotTop,scaleX:1,scaleY:1}},render:function(){var a=this,b=a.chart,c,d=a.options,e=(c=d.animation)&&!!a.animate&&b.renderer.isSVG&&m(c.duration,500)||0,f=a.visible?"visible":"hidden",g=d.zIndex,h=a.hasRendered,i=b.seriesGroup;c=a.plotGroup("group","series",f,g,i);a.markerGroup=a.plotGroup("markerGroup","markers",f,g,i);e&&a.animate(!0);a.getAttribs();c.inverted=a.isCartesian?b.inverted:!1;a.drawGraph&&(a.drawGraph(),
a.clipNeg());a.drawDataLabels&&a.drawDataLabels();a.visible&&a.drawPoints();a.drawTracker&&a.options.enableMouseTracking!==!1&&a.drawTracker();b.inverted&&a.invertGroups();d.clip!==!1&&!a.sharedClipKey&&!h&&c.clip(b.clipRect);e&&a.animate();if(!h)e?a.animationTimeout=setTimeout(function(){a.afterAnimate()},e):a.afterAnimate();a.isDirty=a.isDirtyData=!1;a.hasRendered=!0},redraw:function(){var a=this.chart,b=this.isDirtyData,c=this.group,d=this.xAxis,e=this.yAxis;c&&(a.inverted&&c.attr({width:a.plotWidth,
height:a.plotHeight}),c.animate({translateX:m(d&&d.left,a.plotLeft),translateY:m(e&&e.top,a.plotTop)}));this.translate();this.setTooltipPoints&&this.setTooltipPoints(!0);this.render();b&&D(this,"updatedData")}};Hb.prototype={destroy:function(){Oa(this,this.axis)},render:function(a){var b=this.options,c=b.format,c=c?Ia(c,this):b.formatter.call(this);this.label?this.label.attr({text:c,visibility:"hidden"}):this.label=this.axis.chart.renderer.text(c,null,null,b.useHTML).css(b.style).attr({align:this.textAlign,
rotation:b.rotation,visibility:"hidden"}).add(a)},setOffset:function(a,b){var c=this.axis,d=c.chart,e=d.inverted,f=this.isNegative,g=c.translate(c.usePercentage?100:this.total,0,0,0,1),c=c.translate(0),c=M(g-c),h=d.xAxis[0].translate(this.x)+a,i=d.plotHeight,f={x:e?f?g:g-c:h,y:e?i-h-b:f?i-g-c:i-g,width:e?c:b,height:e?b:c};if(e=this.label)e.align(this.alignOptions,null,f),f=e.alignAttr,e[this.options.crop===!1||d.isInsidePlot(f.x,f.y)?"show":"hide"](!0)}};la.prototype.buildStacks=function(){var a=
this.series,b=m(this.options.reversedStacks,!0),c=a.length;if(!this.isXAxis){for(this.usePercentage=!1;c--;)a[b?c:a.length-c-1].setStackedPoints();if(this.usePercentage)for(c=0;c<a.length;c++)a[c].setPercentStacks()}};la.prototype.renderStackTotals=function(){var a=this.chart,b=a.renderer,c=this.stacks,d,e,f=this.stackTotalGroup;if(!f)this.stackTotalGroup=f=b.g("stack-labels").attr({visibility:"visible",zIndex:6}).add();f.translate(a.plotLeft,a.plotTop);for(d in c)for(e in a=c[d],a)a[e].render(f)};
O.prototype.setStackedPoints=function(){if(this.options.stacking&&!(this.visible!==!0&&this.chart.options.chart.ignoreHiddenSeries!==!1)){var a=this.processedXData,b=this.processedYData,c=[],d=b.length,e=this.options,f=e.threshold,g=e.stack,e=e.stacking,h=this.stackKey,i="-"+h,j=this.negStacks,k=this.yAxis,l=k.stacks,o=k.oldStacks,n,m,p,q,r,u;for(q=0;q<d;q++){r=a[q];u=b[q];p=this.index+","+q;m=(n=j&&u<f)?i:h;l[m]||(l[m]={});if(!l[m][r])o[m]&&o[m][r]?(l[m][r]=o[m][r],l[m][r].total=null):l[m][r]=new Hb(k,
k.options.stackLabels,n,r,g);m=l[m][r];m.points[p]=[m.cum||0];e==="percent"?(n=n?h:i,j&&l[n]&&l[n][r]?(n=l[n][r],m.total=n.total=v(n.total,m.total)+M(u)||0):m.total=da(m.total+(M(u)||0))):m.total=da(m.total+(u||0));m.cum=(m.cum||0)+(u||0);m.points[p].push(m.cum);c[q]=m.cum}if(e==="percent")k.usePercentage=!0;this.stackedYData=c;k.oldStacks={}}};O.prototype.setPercentStacks=function(){var a=this,b=a.stackKey,c=a.yAxis.stacks,d=a.processedXData;p([b,"-"+b],function(b){var e;for(var f=d.length,g,h;f--;)if(g=
d[f],e=(h=c[b]&&c[b][g])&&h.points[a.index+","+f],g=e)h=h.total?100/h.total:0,g[0]=da(g[0]*h),g[1]=da(g[1]*h),a.stackedYData[f]=g[1]})};q(Ya.prototype,{addSeries:function(a,b,c){var d,e=this;a&&(b=m(b,!0),D(e,"addSeries",{options:a},function(){d=e.initSeries(a);e.isDirtyLegend=!0;e.linkSeries();b&&e.redraw(c)}));return d},addAxis:function(a,b,c,d){var e=b?"xAxis":"yAxis",f=this.options;new la(this,w(a,{index:this[e].length,isX:b}));f[e]=qa(f[e]||{});f[e].push(a);m(c,!0)&&this.redraw(d)},showLoading:function(a){var b=
this.options,c=this.loadingDiv,d=b.loading;if(!c)this.loadingDiv=c=Y(Ja,{className:"highcharts-loading"},q(d.style,{zIndex:10,display:Q}),this.container),this.loadingSpan=Y("span",null,d.labelStyle,c);this.loadingSpan.innerHTML=a||b.lang.loading;if(!this.loadingShown)G(c,{opacity:0,display:"",left:this.plotLeft+"px",top:this.plotTop+"px",width:this.plotWidth+"px",height:this.plotHeight+"px"}),kb(c,{opacity:d.style.opacity},{duration:d.showDuration||0}),this.loadingShown=!0},hideLoading:function(){var a=
this.options,b=this.loadingDiv;b&&kb(b,{opacity:0},{duration:a.loading.hideDuration||100,complete:function(){G(b,{display:Q})}});this.loadingShown=!1}});q(Ea.prototype,{update:function(a,b,c){var d=this,e=d.series,f=d.graphic,g,h=e.data,i=e.chart,j=e.options,b=m(b,!0);d.firePointEvent("update",{options:a},function(){d.applyOptions(a);if(ca(a)){e.getAttribs();if(f)a&&a.marker&&a.marker.symbol?d.graphic=f.destroy():f.attr(d.pointAttr[d.state||""]);if(a&&a.dataLabels&&d.dataLabel)d.dataLabel=d.dataLabel.destroy()}g=
Da(d,h);e.updateParallelArrays(d,g);j.data[g]=d.options;e.isDirty=e.isDirtyData=!0;if(!e.fixedBox&&e.hasCartesianSeries)i.isDirtyBox=!0;j.legendType==="point"&&i.legend.destroyItem(d);b&&i.redraw(c)})},remove:function(a,b){var c=this,d=c.series,e=d.points,f=d.chart,g,h=d.data;Qa(b,f);a=m(a,!0);c.firePointEvent("remove",null,function(){g=Da(c,h);h.length===e.length&&e.splice(g,1);h.splice(g,1);d.options.data.splice(g,1);d.updateParallelArrays(c,"splice",g,1);c.destroy();d.isDirty=!0;d.isDirtyData=
!0;a&&f.redraw()})}});q(O.prototype,{addPoint:function(a,b,c,d){var e=this.options,f=this.data,g=this.graph,h=this.area,i=this.chart,j=this.xAxis&&this.xAxis.names,k=g&&g.shift||0,l=e.data,o,n=this.xData;Qa(d,i);c&&p([g,h,this.graphNeg,this.areaNeg],function(a){if(a)a.shift=k+1});if(h)h.isArea=!0;b=m(b,!0);d={series:this};this.pointClass.prototype.applyOptions.apply(d,[a]);g=d.x;h=n.length;if(this.requireSorting&&g<n[h-1])for(o=!0;h&&n[h-1]>g;)h--;this.updateParallelArrays(d,"splice",h,0,0);this.updateParallelArrays(d,
h);if(j)j[g]=d.name;l.splice(h,0,a);o&&(this.data.splice(h,0,null),this.processData());e.legendType==="point"&&this.generatePoints();c&&(f[0]&&f[0].remove?f[0].remove(!1):(f.shift(),this.updateParallelArrays(d,"shift"),l.shift()));this.isDirtyData=this.isDirty=!0;b&&(this.getAttribs(),i.redraw())},remove:function(a,b){var c=this,d=c.chart,a=m(a,!0);if(!c.isRemoving)c.isRemoving=!0,D(c,"remove",null,function(){c.destroy();d.isDirtyLegend=d.isDirtyBox=!0;d.linkSeries();a&&d.redraw(b)});c.isRemoving=
!1},update:function(a,b){var c=this.chart,d=this.type,e=F[d].prototype,f,a=w(this.userOptions,{animation:!1,index:this.index,pointStart:this.xData[0]},{data:this.options.data},a);this.remove(!1);for(f in e)e.hasOwnProperty(f)&&(this[f]=t);q(this,F[a.type||d].prototype);this.init(c,a);m(b,!0)&&c.redraw(!1)}});q(la.prototype,{update:function(a,b){var c=this.chart,a=c.options[this.coll][this.options.index]=w(this.userOptions,a);this.destroy(!0);this._addedPlotLB=t;this.init(c,q(a,{events:t}));c.isDirtyBox=
!0;m(b,!0)&&c.redraw()},remove:function(a){for(var b=this.chart,c=this.coll,d=this.series,e=d.length;e--;)d[e]&&d[e].remove(!1);ja(b.axes,this);ja(b[c],this);b.options[c].splice(this.options.index,1);p(b[c],function(a,b){a.options.index=b});this.destroy();b.isDirtyBox=!0;m(a,!0)&&b.redraw()},setTitle:function(a,b){this.update({title:a},b)},setCategories:function(a,b){this.update({categories:a},b)}});ga=ka(O);F.line=ga;ba.area=w(S,{threshold:0});var pa=ka(O,{type:"area",getSegments:function(){var a=
[],b=[],c=[],d=this.xAxis,e=this.yAxis,f=e.stacks[this.stackKey],g={},h,i,j=this.points,k=this.options.connectNulls,l,o,n;if(this.options.stacking&&!this.cropped){for(o=0;o<j.length;o++)g[j[o].x]=j[o];for(n in f)f[n].total!==null&&c.push(+n);c.sort(function(a,b){return a-b});p(c,function(a){if(!k||g[a]&&g[a].y!==null)g[a]?b.push(g[a]):(h=d.translate(a),l=f[a].percent?f[a].total?f[a].cum*100/f[a].total:0:f[a].cum,i=e.toPixels(l,!0),b.push({y:null,plotX:h,clientX:h,plotY:i,yBottom:i,onMouseOver:sa}))});
b.length&&a.push(b)}else O.prototype.getSegments.call(this),a=this.segments;this.segments=a},getSegmentPath:function(a){var b=O.prototype.getSegmentPath.call(this,a),c=[].concat(b),d,e=this.options;d=b.length;var f=this.yAxis.getThreshold(e.threshold),g;d===3&&c.push("L",b[1],b[2]);if(e.stacking&&!this.closedStacks)for(d=a.length-1;d>=0;d--)g=m(a[d].yBottom,f),d<a.length-1&&e.step&&c.push(a[d+1].plotX,g),c.push(a[d].plotX,g);else this.closeSegment(c,a,f);this.areaPath=this.areaPath.concat(c);return b},
closeSegment:function(a,b,c){a.push("L",b[b.length-1].plotX,c,"L",b[0].plotX,c)},drawGraph:function(){this.areaPath=[];O.prototype.drawGraph.apply(this);var a=this,b=this.areaPath,c=this.options,d=c.negativeColor,e=c.negativeFillColor,f=[["area",this.color,c.fillColor]];(d||e)&&f.push(["areaNeg",d,e]);p(f,function(d){var e=d[0],f=a[e];f?f.animate({d:b}):a[e]=a.chart.renderer.path(b).attr({fill:m(d[2],ya(d[1]).setOpacity(m(c.fillOpacity,0.75)).get()),zIndex:0}).add(a.group)})},drawLegendSymbol:N.drawRectangle});
F.area=pa;ba.spline=w(S);ga=ka(O,{type:"spline",getPointSpline:function(a,b,c){var d=b.plotX,e=b.plotY,f=a[c-1],g=a[c+1],h,i,j,k;if(f&&g){a=f.plotY;j=g.plotX;var g=g.plotY,l;h=(1.5*d+f.plotX)/2.5;i=(1.5*e+a)/2.5;j=(1.5*d+j)/2.5;k=(1.5*e+g)/2.5;l=(k-i)*(j-d)/(j-h)+e-k;i+=l;k+=l;i>a&&i>e?(i=v(a,e),k=2*e-i):i<a&&i<e&&(i=C(a,e),k=2*e-i);k>g&&k>e?(k=v(g,e),i=2*e-k):k<g&&k<e&&(k=C(g,e),i=2*e-k);b.rightContX=j;b.rightContY=k}c?(b=["C",f.rightContX||f.plotX,f.rightContY||f.plotY,h||d,i||e,d,e],f.rightContX=
f.rightContY=null):b=["M",d,e];return b}});F.spline=ga;ba.areaspline=w(ba.area);pa=pa.prototype;ga=ka(ga,{type:"areaspline",closedStacks:!0,getSegmentPath:pa.getSegmentPath,closeSegment:pa.closeSegment,drawGraph:pa.drawGraph,drawLegendSymbol:N.drawRectangle});F.areaspline=ga;ba.column=w(S,{borderColor:"#FFFFFF",borderRadius:0,groupPadding:0.2,marker:null,pointPadding:0.1,minPointLength:0,cropThreshold:50,pointRange:null,states:{hover:{brightness:0.1,shadow:!1,halo:!1},select:{color:"#C0C0C0",borderColor:"#000000",
shadow:!1}},dataLabels:{align:null,verticalAlign:null,y:null},stickyTracking:!1,tooltip:{distance:6},threshold:0});ga=ka(O,{type:"column",pointAttrToOptions:{stroke:"borderColor",fill:"color",r:"borderRadius"},cropShoulder:0,trackerGroups:["group","dataLabelsGroup"],negStacks:!0,init:function(){O.prototype.init.apply(this,arguments);var a=this,b=a.chart;b.hasRendered&&p(b.series,function(b){if(b.type===a.type)b.isDirty=!0})},getColumnMetrics:function(){var a=this,b=a.options,c=a.xAxis,d=a.yAxis,e=
c.reversed,f,g={},h,i=0;b.grouping===!1?i=1:p(a.chart.series,function(b){var c=b.options,e=b.yAxis;if(b.type===a.type&&b.visible&&d.len===e.len&&d.pos===e.pos)c.stacking?(f=b.stackKey,g[f]===t&&(g[f]=i++),h=g[f]):c.grouping!==!1&&(h=i++),b.columnIndex=h});var c=C(M(c.transA)*(c.ordinalSlope||b.pointRange||c.closestPointRange||c.tickInterval||1),c.len),j=c*b.groupPadding,k=(c-2*j)/i,l=b.pointWidth,b=r(l)?(k-l)/2:k*b.pointPadding,l=m(l,k-2*b);return a.columnMetrics={width:l,offset:b+(j+((e?i-(a.columnIndex||
0):a.columnIndex)||0)*k-c/2)*(e?-1:1)}},translate:function(){var a=this,b=a.chart,c=a.options,d=a.borderWidth=m(c.borderWidth,a.activePointCount>0.5*a.xAxis.len?0:1),e=a.yAxis,f=a.translatedThreshold=e.getThreshold(c.threshold),g=m(c.minPointLength,5),c=a.getColumnMetrics(),h=c.width,i=a.barW=Ka(v(h,1+2*d)),j=a.pointXOffset=c.offset,k=-(d%2?0.5:0),l=d%2?0.5:1;b.renderer.isVML&&b.inverted&&(l+=1);O.prototype.translate.apply(a);p(a.points,function(c){var d=m(c.yBottom,f),p=C(v(-999-d,c.plotY),e.len+
999+d),q=c.plotX+j,r=i,t=C(p,d),x;x=v(p,d)-t;M(x)<g&&g&&(x=g,t=u(M(t-f)>g?d-g:f-(e.translate(c.y,0,1,0,1)<=f?g:0)));c.barX=q;c.pointWidth=h;c.tooltipPos=b.inverted?[e.len-p,a.xAxis.len-q-r/2]:[q+r/2,p];d=M(q)<0.5;r=u(q+r)+k;q=u(q)+k;r-=q;p=M(t)<0.5;x=u(t+x)+l;t=u(t)+l;x-=t;d&&(q+=1,r-=1);p&&(t-=1,x+=1);c.shapeType="rect";c.shapeArgs={x:q,y:t,width:r,height:x}})},getSymbol:sa,drawLegendSymbol:N.drawRectangle,drawGraph:sa,drawPoints:function(){var a=this,b=this.chart,c=a.options,d=b.renderer,e=c.animationLimit||
250,f,g,h;p(a.points,function(i){var j=i.plotY,k=i.graphic;if(j!==t&&!isNaN(j)&&i.y!==null)f=i.shapeArgs,h=r(a.borderWidth)?{"stroke-width":a.borderWidth}:{},g=i.pointAttr[i.selected?"select":""]||a.pointAttr[""],k?(bb(k),k.attr(h)[b.pointCount<e?"animate":"attr"](w(f))):i.graphic=d[i.shapeType](f).attr(g).attr(h).add(a.group).shadow(c.shadow,null,c.stacking&&!c.borderRadius);else if(k)i.graphic=k.destroy()})},animate:function(a){var b=this.yAxis,c=this.options,d=this.chart.inverted,e={};if(aa)a?
(e.scaleY=0.001,a=C(b.pos+b.len,v(b.pos,b.toPixels(c.threshold))),d?e.translateX=a-b.len:e.translateY=a,this.group.attr(e)):(e.scaleY=1,e[d?"translateX":"translateY"]=b.pos,this.group.animate(e,this.options.animation),this.animate=null)},remove:function(){var a=this,b=a.chart;b.hasRendered&&p(b.series,function(b){if(b.type===a.type)b.isDirty=!0});O.prototype.remove.apply(a,arguments)}});F.column=ga;ba.bar=w(ba.column);pa=ka(ga,{type:"bar",inverted:!0});F.bar=pa;ba.scatter=w(S,{lineWidth:0,tooltip:{headerFormat:'<span style="color:{series.color}">●</span> <span style="font-size: 10px;"> {series.name}</span><br/>',
pointFormat:"x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"},stickyTracking:!1});pa=ka(O,{type:"scatter",sorted:!1,requireSorting:!1,noSharedTooltip:!0,trackerGroups:["markerGroup"],takeOrdinalPosition:!1,singularTooltips:!0,drawGraph:function(){this.options.lineWidth&&O.prototype.drawGraph.call(this)}});F.scatter=pa;ba.pie=w(S,{borderColor:"#FFFFFF",borderWidth:1,center:[null,null],clip:!1,colorByPoint:!0,dataLabels:{distance:30,enabled:!0,formatter:function(){return this.point.name}},ignoreHiddenPoint:!0,
legendType:"point",marker:null,size:null,showInLegend:!1,slicedOffset:10,states:{hover:{brightness:0.1,shadow:!1}},stickyTracking:!1,tooltip:{followPointer:!0}});S={type:"pie",isCartesian:!1,pointClass:ka(Ea,{init:function(){Ea.prototype.init.apply(this,arguments);var a=this,b;if(a.y<0)a.y=null;q(a,{visible:a.visible!==!1,name:m(a.name,"Slice")});b=function(b){a.slice(b.type==="select")};K(a,"select",b);K(a,"unselect",b);return a},setVisible:function(a){var b=this,c=b.series,d=c.chart;b.visible=b.options.visible=
a=a===t?!b.visible:a;c.options.data[Da(b,c.data)]=b.options;p(["graphic","dataLabel","connector","shadowGroup"],function(c){if(b[c])b[c][a?"show":"hide"](!0)});b.legendItem&&d.legend.colorizeItem(b,a);if(!c.isDirty&&c.options.ignoreHiddenPoint)c.isDirty=!0,d.redraw()},slice:function(a,b,c){var d=this.series;Qa(c,d.chart);m(b,!0);this.sliced=this.options.sliced=a=r(a)?a:!this.sliced;d.options.data[Da(this,d.data)]=this.options;a=a?this.slicedTranslation:{translateX:0,translateY:0};this.graphic.animate(a);
this.shadowGroup&&this.shadowGroup.animate(a)},haloPath:function(a){var b=this.shapeArgs,c=this.series.chart;return this.series.chart.renderer.symbols.arc(c.plotLeft+b.x,c.plotTop+b.y,b.r+a,b.r+a,{innerR:this.shapeArgs.r,start:b.start,end:b.end})}}),requireSorting:!1,noSharedTooltip:!0,trackerGroups:["group","dataLabelsGroup"],axisTypes:[],pointAttrToOptions:{stroke:"borderColor","stroke-width":"borderWidth",fill:"color"},singularTooltips:!0,getColor:sa,animate:function(a){var b=this,c=b.points,d=
b.startAngleRad;if(!a)p(c,function(a){var c=a.graphic,a=a.shapeArgs;c&&(c.attr({r:b.center[3]/2,start:d,end:d}),c.animate({r:a.r,start:a.start,end:a.end},b.options.animation))}),b.animate=null},setData:function(a,b,c,d){O.prototype.setData.call(this,a,!1,c,d);this.processData();this.generatePoints();m(b,!0)&&this.chart.redraw(c)},generatePoints:function(){var a,b=0,c,d,e,f=this.options.ignoreHiddenPoint;O.prototype.generatePoints.call(this);c=this.points;d=c.length;for(a=0;a<d;a++)e=c[a],b+=f&&!e.visible?
0:e.y;this.total=b;for(a=0;a<d;a++)e=c[a],e.percentage=b>0?e.y/b*100:0,e.total=b},translate:function(a){this.generatePoints();var b=0,c=this.options,d=c.slicedOffset,e=d+c.borderWidth,f,g,h,i=c.startAngle||0,j=this.startAngleRad=ma/180*(i-90),i=(this.endAngleRad=ma/180*(m(c.endAngle,i+360)-90))-j,k=this.points,l=c.dataLabels.distance,c=c.ignoreHiddenPoint,o,n=k.length,p;if(!a)this.center=a=this.getCenter();this.getX=function(b,c){h=U.asin(C((b-a[1])/(a[2]/2+l),1));return a[0]+(c?-1:1)*Z(h)*(a[2]/
2+l)};for(o=0;o<n;o++){p=k[o];f=j+b*i;if(!c||p.visible)b+=p.percentage/100;g=j+b*i;p.shapeType="arc";p.shapeArgs={x:a[0],y:a[1],r:a[2]/2,innerR:a[3]/2,start:u(f*1E3)/1E3,end:u(g*1E3)/1E3};h=(g+f)/2;h>1.5*ma?h-=2*ma:h<-ma/2&&(h+=2*ma);p.slicedTranslation={translateX:u(Z(h)*d),translateY:u(ea(h)*d)};f=Z(h)*a[2]/2;g=ea(h)*a[2]/2;p.tooltipPos=[a[0]+f*0.7,a[1]+g*0.7];p.half=h<-ma/2||h>ma/2?1:0;p.angle=h;e=C(e,l/2);p.labelPos=[a[0]+f+Z(h)*l,a[1]+g+ea(h)*l,a[0]+f+Z(h)*e,a[1]+g+ea(h)*e,a[0]+f,a[1]+g,l<0?
"center":p.half?"right":"left",h]}},drawGraph:null,drawPoints:function(){var a=this,b=a.chart.renderer,c,d,e=a.options.shadow,f,g;if(e&&!a.shadowGroup)a.shadowGroup=b.g("shadow").add(a.group);p(a.points,function(h){d=h.graphic;g=h.shapeArgs;f=h.shadowGroup;if(e&&!f)f=h.shadowGroup=b.g("shadow").add(a.shadowGroup);c=h.sliced?h.slicedTranslation:{translateX:0,translateY:0};f&&f.attr(c);d?d.animate(q(g,c)):h.graphic=d=b[h.shapeType](g).setRadialReference(a.center).attr(h.pointAttr[h.selected?"select":
""]).attr({"stroke-linejoin":"round"}).attr(c).add(a.group).shadow(e,f);h.visible!==void 0&&h.setVisible(h.visible)})},sortByAngle:function(a,b){a.sort(function(a,d){return a.angle!==void 0&&(d.angle-a.angle)*b})},drawLegendSymbol:N.drawRectangle,getCenter:X.getCenter,getSymbol:sa};S=ka(O,S);F.pie=S;O.prototype.drawDataLabels=function(){var a=this,b=a.options,c=b.cursor,d=b.dataLabels,e=a.points,f,g,h,i;if(d.enabled||a._hasPointLabels)a.dlProcessOptions&&a.dlProcessOptions(d),i=a.plotGroup("dataLabelsGroup",
"data-labels","hidden",d.zIndex||6),!a.hasRendered&&m(d.defer,!0)&&(i.attr({opacity:0}),K(a,"afterAnimate",function(){a.dataLabelsGroup.show()[b.animation?"animate":"attr"]({opacity:1},{duration:200})})),g=d,p(e,function(b){var e,l=b.dataLabel,o,n,p=b.connector,u=!0;f=b.options&&b.options.dataLabels;e=m(f&&f.enabled,g.enabled);if(l&&!e)b.dataLabel=l.destroy();else if(e){d=w(g,f);e=d.rotation;o=b.getLabelConfig();h=d.format?Ia(d.format,o):d.formatter.call(o,d);d.style.color=m(d.color,d.style.color,
a.color,"black");if(l)if(r(h))l.attr({text:h}),u=!1;else{if(b.dataLabel=l=l.destroy(),p)b.connector=p.destroy()}else if(r(h)){l={fill:d.backgroundColor,stroke:d.borderColor,"stroke-width":d.borderWidth,r:d.borderRadius||0,rotation:e,padding:d.padding,zIndex:1};for(n in l)l[n]===t&&delete l[n];l=b.dataLabel=a.chart.renderer[e?"text":"label"](h,0,-999,null,null,null,d.useHTML).attr(l).css(q(d.style,c&&{cursor:c})).add(i).shadow(d.shadow)}l&&a.alignDataLabel(b,l,d,null,u)}})};O.prototype.alignDataLabel=
function(a,b,c,d,e){var f=this.chart,g=f.inverted,h=m(a.plotX,-999),i=m(a.plotY,-999),j=b.getBBox();if(a=this.visible&&(a.series.forceDL||f.isInsidePlot(h,u(i),g)||d&&f.isInsidePlot(h,g?d.x+1:d.y+d.height-1,g)))d=q({x:g?f.plotWidth-i:h,y:u(g?f.plotHeight-h:i),width:0,height:0},d),q(c,{width:j.width,height:j.height}),c.rotation?(g={align:c.align,x:d.x+c.x+d.width/2,y:d.y+c.y+d.height/2},b[e?"attr":"animate"](g)):(b.align(c,null,d),g=b.alignAttr,m(c.overflow,"justify")==="justify"?this.justifyDataLabel(b,
c,g,j,d,e):m(c.crop,!0)&&(a=f.isInsidePlot(g.x,g.y)&&f.isInsidePlot(g.x+j.width,g.y+j.height)));if(!a)b.attr({y:-999}),b.placed=!1};O.prototype.justifyDataLabel=function(a,b,c,d,e,f){var g=this.chart,h=b.align,i=b.verticalAlign,j,k;j=c.x;if(j<0)h==="right"?b.align="left":b.x=-j,k=!0;j=c.x+d.width;if(j>g.plotWidth)h==="left"?b.align="right":b.x=g.plotWidth-j,k=!0;j=c.y;if(j<0)i==="bottom"?b.verticalAlign="top":b.y=-j,k=!0;j=c.y+d.height;if(j>g.plotHeight)i==="top"?b.verticalAlign="bottom":b.y=g.plotHeight-
j,k=!0;if(k)a.placed=!f,a.align(b,null,e)};if(F.pie)F.pie.prototype.drawDataLabels=function(){var a=this,b=a.data,c,d=a.chart,e=a.options.dataLabels,f=m(e.connectorPadding,10),g=m(e.connectorWidth,1),h=d.plotWidth,d=d.plotHeight,i,j,k=m(e.softConnector,!0),l=e.distance,o=a.center,n=o[2]/2,q=o[1],r=l>0,t,w,x,y,z=[[],[]],A,C,G,D,B,F=[0,0,0,0],N=function(a,b){return b.y-a.y};if(a.visible&&(e.enabled||a._hasPointLabels)){O.prototype.drawDataLabels.apply(a);p(b,function(a){a.dataLabel&&a.visible&&z[a.half].push(a)});
for(D=0;!y&&b[D];)y=b[D]&&b[D].dataLabel&&(b[D].dataLabel.getBBox().height||21),D++;for(D=2;D--;){var b=[],K=[],H=z[D],I=H.length,E;a.sortByAngle(H,D-0.5);if(l>0){for(B=q-n-l;B<=q+n+l;B+=y)b.push(B);w=b.length;if(I>w){c=[].concat(H);c.sort(N);for(B=I;B--;)c[B].rank=B;for(B=I;B--;)H[B].rank>=w&&H.splice(B,1);I=H.length}for(B=0;B<I;B++){c=H[B];x=c.labelPos;c=9999;var Q,P;for(P=0;P<w;P++)Q=M(b[P]-x[1]),Q<c&&(c=Q,E=P);if(E<B&&b[B]!==null)E=B;else for(w<I-B+E&&b[B]!==null&&(E=w-I+B);b[E]===null;)E++;K.push({i:E,
y:b[E]});b[E]=null}K.sort(N)}for(B=0;B<I;B++){c=H[B];x=c.labelPos;t=c.dataLabel;G=c.visible===!1?"hidden":"visible";c=x[1];if(l>0){if(w=K.pop(),E=w.i,C=w.y,c>C&&b[E+1]!==null||c<C&&b[E-1]!==null)C=c}else C=c;A=e.justify?o[0]+(D?-1:1)*(n+l):a.getX(E===0||E===b.length-1?c:C,D);t._attr={visibility:G,align:x[6]};t._pos={x:A+e.x+({left:f,right:-f}[x[6]]||0),y:C+e.y-10};t.connX=A;t.connY=C;if(this.options.size===null)w=t.width,A-w<f?F[3]=v(u(w-A+f),F[3]):A+w>h-f&&(F[1]=v(u(A+w-h+f),F[1])),C-y/2<0?F[0]=
v(u(-C+y/2),F[0]):C+y/2>d&&(F[2]=v(u(C+y/2-d),F[2]))}}if(Ba(F)===0||this.verifyDataLabelOverflow(F))this.placeDataLabels(),r&&g&&p(this.points,function(b){i=b.connector;x=b.labelPos;if((t=b.dataLabel)&&t._pos)G=t._attr.visibility,A=t.connX,C=t.connY,j=k?["M",A+(x[6]==="left"?5:-5),C,"C",A,C,2*x[2]-x[4],2*x[3]-x[5],x[2],x[3],"L",x[4],x[5]]:["M",A+(x[6]==="left"?5:-5),C,"L",x[2],x[3],"L",x[4],x[5]],i?(i.animate({d:j}),i.attr("visibility",G)):b.connector=i=a.chart.renderer.path(j).attr({"stroke-width":g,
stroke:e.connectorColor||b.color||"#606060",visibility:G}).add(a.dataLabelsGroup);else if(i)b.connector=i.destroy()})}},F.pie.prototype.placeDataLabels=function(){p(this.points,function(a){var a=a.dataLabel,b;if(a)(b=a._pos)?(a.attr(a._attr),a[a.moved?"animate":"attr"](b),a.moved=!0):a&&a.attr({y:-999})})},F.pie.prototype.alignDataLabel=sa,F.pie.prototype.verifyDataLabelOverflow=function(a){var b=this.center,c=this.options,d=c.center,e=c=c.minSize||80,f;d[0]!==null?e=v(b[2]-v(a[1],a[3]),c):(e=v(b[2]-
a[1]-a[3],c),b[0]+=(a[3]-a[1])/2);d[1]!==null?e=v(C(e,b[2]-v(a[0],a[2])),c):(e=v(C(e,b[2]-a[0]-a[2]),c),b[1]+=(a[0]-a[2])/2);e<b[2]?(b[2]=e,this.translate(b),p(this.points,function(a){if(a.dataLabel)a.dataLabel._pos=null}),this.drawDataLabels&&this.drawDataLabels()):f=!0;return f};if(F.column)F.column.prototype.alignDataLabel=function(a,b,c,d,e){var f=this.chart,g=f.inverted,h=a.dlBox||a.shapeArgs,i=a.below||a.plotY>m(this.translatedThreshold,f.plotSizeY),j=m(c.inside,!!this.options.stacking);if(h&&
(d=w(h),g&&(d={x:f.plotWidth-d.y-d.height,y:f.plotHeight-d.x-d.width,width:d.height,height:d.width}),!j))g?(d.x+=i?0:d.width,d.width=0):(d.y+=i?d.height:0,d.height=0);c.align=m(c.align,!g||j?"center":i?"right":"left");c.verticalAlign=m(c.verticalAlign,g||j?"middle":i?"top":"bottom");O.prototype.alignDataLabel.call(this,a,b,c,d,e)};S=R.TrackerMixin={drawTrackerPoint:function(){var a=this,b=a.chart,c=b.pointer,d=a.options.cursor,e=d&&{cursor:d},f=function(c){var d=c.target,e;if(b.hoverSeries!==a)a.onMouseOver();
for(;d&&!e;)e=d.point,d=d.parentNode;if(e!==t&&e!==b.hoverPoint)e.onMouseOver(c)};p(a.points,function(a){if(a.graphic)a.graphic.element.point=a;if(a.dataLabel)a.dataLabel.element.point=a});if(!a._hasTracking)p(a.trackerGroups,function(b){if(a[b]&&(a[b].addClass("highcharts-tracker").on("mouseover",f).on("mouseout",function(a){c.onTrackerMouseOut(a)}).css(e),$a))a[b].on("touchstart",f)}),a._hasTracking=!0},drawTrackerGraph:function(){var a=this,b=a.options,c=b.trackByArea,d=[].concat(c?a.areaPath:
a.graphPath),e=d.length,f=a.chart,g=f.pointer,h=f.renderer,i=f.options.tooltip.snap,j=a.tracker,k=b.cursor,l=k&&{cursor:k},k=a.singlePoints,m,n=function(){if(f.hoverSeries!==a)a.onMouseOver()},q="rgba(192,192,192,"+(aa?1.0E-4:0.002)+")";if(e&&!c)for(m=e+1;m--;)d[m]==="M"&&d.splice(m+1,0,d[m+1]-i,d[m+2],"L"),(m&&d[m]==="M"||m===e)&&d.splice(m,0,"L",d[m-2]+i,d[m-1]);for(m=0;m<k.length;m++)e=k[m],d.push("M",e.plotX-i,e.plotY,"L",e.plotX+i,e.plotY);j?j.attr({d:d}):(a.tracker=h.path(d).attr({"stroke-linejoin":"round",
visibility:a.visible?"visible":"hidden",stroke:q,fill:c?q:Q,"stroke-width":b.lineWidth+(c?0:2*i),zIndex:2}).add(a.group),p([a.tracker,a.markerGroup],function(a){a.addClass("highcharts-tracker").on("mouseover",n).on("mouseout",function(a){g.onTrackerMouseOut(a)}).css(l);if($a)a.on("touchstart",n)}))}};if(F.column)ga.prototype.drawTracker=S.drawTrackerPoint;if(F.pie)F.pie.prototype.drawTracker=S.drawTrackerPoint;if(F.scatter)pa.prototype.drawTracker=S.drawTrackerPoint;q(lb.prototype,{setItemEvents:function(a,
b,c,d,e){var f=this;(c?b:a.legendGroup).on("mouseover",function(){a.setState("hover");b.css(f.options.itemHoverStyle)}).on("mouseout",function(){b.css(a.visible?d:e);a.setState()}).on("click",function(b){var c=function(){a.setVisible()},b={browserEvent:b};a.firePointEvent?a.firePointEvent("legendItemClick",b,c):D(a,"legendItemClick",b,c)})},createCheckboxForItem:function(a){a.checkbox=Y("input",{type:"checkbox",checked:a.selected,defaultChecked:a.selected},this.options.itemCheckboxStyle,this.chart.container);
K(a.checkbox,"click",function(b){D(a,"checkboxClick",{checked:b.target.checked},function(){a.select()})})}});E.legend.itemStyle.cursor="pointer";q(Ya.prototype,{showResetZoom:function(){var a=this,b=E.lang,c=a.options.chart.resetZoomButton,d=c.theme,e=d.states,f=c.relativeTo==="chart"?null:"plotBox";this.resetZoomButton=a.renderer.button(b.resetZoom,null,null,function(){a.zoomOut()},d,e&&e.hover).attr({align:c.position.align,title:b.resetZoomTitle}).add().align(c.position,!1,f)},zoomOut:function(){var a=
this;D(a,"selection",{resetSelection:!0},function(){a.zoom()})},zoom:function(a){var b,c=this.pointer,d=!1,e;!a||a.resetSelection?p(this.axes,function(a){b=a.zoom()}):p(a.xAxis.concat(a.yAxis),function(a){var e=a.axis,h=e.isXAxis;if(c[h?"zoomX":"zoomY"]||c[h?"pinchX":"pinchY"])b=e.zoom(a.min,a.max),e.displayBtn&&(d=!0)});e=this.resetZoomButton;if(d&&!e)this.showResetZoom();else if(!d&&ca(e))this.resetZoomButton=e.destroy();b&&this.redraw(m(this.options.chart.animation,a&&a.animation,this.pointCount<
100))},pan:function(a,b){var c=this,d=c.hoverPoints,e;d&&p(d,function(a){a.setState()});p(b==="xy"?[1,0]:[1],function(b){var d=a[b?"chartX":"chartY"],h=c[b?"xAxis":"yAxis"][0],i=c[b?"mouseDownX":"mouseDownY"],j=(h.pointRange||0)/2,k=h.getExtremes(),l=h.toValue(i-d,!0)+j,i=h.toValue(i+c[b?"plotWidth":"plotHeight"]-d,!0)-j;h.series.length&&l>C(k.dataMin,k.min)&&i<v(k.dataMax,k.max)&&(h.setExtremes(l,i,!1,!1,{trigger:"pan"}),e=!0);c[b?"mouseDownX":"mouseDownY"]=d});e&&c.redraw(!1);G(c.container,{cursor:"move"})}});
q(Ea.prototype,{select:function(a,b){var c=this,d=c.series,e=d.chart,a=m(a,!c.selected);c.firePointEvent(a?"select":"unselect",{accumulate:b},function(){c.selected=c.options.selected=a;d.options.data[Da(c,d.data)]=c.options;c.setState(a&&"select");b||p(e.getSelectedPoints(),function(a){if(a.selected&&a!==c)a.selected=a.options.selected=!1,d.options.data[Da(a,d.data)]=a.options,a.setState(""),a.firePointEvent("unselect")})})},onMouseOver:function(a){var b=this.series,c=b.chart,d=c.tooltip,e=c.hoverPoint;
if(e&&e!==this)e.onMouseOut();this.firePointEvent("mouseOver");d&&(!d.shared||b.noSharedTooltip)&&d.refresh(this,a);this.setState("hover");c.hoverPoint=this},onMouseOut:function(){var a=this.series.chart,b=a.hoverPoints;if(!b||Da(this,b)===-1)this.firePointEvent("mouseOut"),this.setState(),a.hoverPoint=null},importEvents:function(){if(!this.hasImportedEvents){var a=w(this.series.options.point,this.options).events,b;this.events=a;for(b in a)K(this,b,a[b]);this.hasImportedEvents=!0}},setState:function(a,
b){var c=this.plotX,d=this.plotY,e=this.series,f=e.options.states,g=ba[e.type].marker&&e.options.marker,h=g&&!g.enabled,i=g&&g.states[a],j=i&&i.enabled===!1,k=e.stateMarkerGraphic,l=this.marker||{},m=e.chart,n=e.halo,p,a=a||"";p=this.pointAttr[a]||e.pointAttr[a];if(!(a===this.state&&!b||this.selected&&a!=="select"||f[a]&&f[a].enabled===!1||a&&(j||h&&i.enabled===!1)||a&&l.states&&l.states[a]&&l.states[a].enabled===!1)){if(this.graphic)g=g&&this.graphic.symbolName&&p.r,this.graphic.attr(w(p,g?{x:c-
g,y:d-g,width:2*g,height:2*g}:{})),k&&k.hide();else{if(a&&i)if(g=i.radius,l=l.symbol||e.symbol,k&&k.currentSymbol!==l&&(k=k.destroy()),k)k[b?"animate":"attr"]({x:c-g,y:d-g});else if(l)e.stateMarkerGraphic=k=m.renderer.symbol(l,c-g,d-g,2*g,2*g).attr(p).add(e.markerGroup),k.currentSymbol=l;if(k)k[a&&m.isInsidePlot(c,d,m.inverted)?"show":"hide"]()}if((c=f[a]&&f[a].halo)&&c.size){if(!n)e.halo=n=m.renderer.path().add(e.seriesGroup);n.attr(q({fill:ya(this.color||e.color).setOpacity(c.opacity).get()},c.attributes))[b?
"animate":"attr"]({d:this.haloPath(c.size)})}else n&&n.attr({d:[]});this.state=a}},haloPath:function(a){var b=this.series,c=b.chart,d=b.getPlotBox(),e=c.inverted;return c.renderer.symbols.circle(d.translateX+(e?b.yAxis.len-this.plotY:this.plotX)-a,d.translateY+(e?b.xAxis.len-this.plotX:this.plotY)-a,a*2,a*2)}});q(O.prototype,{onMouseOver:function(){var a=this.chart,b=a.hoverSeries;if(b&&b!==this)b.onMouseOut();this.options.events.mouseOver&&D(this,"mouseOver");this.setState("hover");a.hoverSeries=
this},onMouseOut:function(){var a=this.options,b=this.chart,c=b.tooltip,d=b.hoverPoint;if(d)d.onMouseOut();this&&a.events.mouseOut&&D(this,"mouseOut");c&&!a.stickyTracking&&(!c.shared||this.noSharedTooltip)&&c.hide();this.setState();b.hoverSeries=null},setState:function(a){var b=this.options,c=this.graph,d=this.graphNeg,e=b.states,b=b.lineWidth,a=a||"";if(this.state!==a)this.state=a,e[a]&&e[a].enabled===!1||(a&&(b=e[a].lineWidth||b+1),c&&!c.dashstyle&&(a={"stroke-width":b},c.attr(a),d&&d.attr(a)))},
setVisible:function(a,b){var c=this,d=c.chart,e=c.legendItem,f,g=d.options.chart.ignoreHiddenSeries,h=c.visible;f=(c.visible=a=c.userOptions.visible=a===t?!h:a)?"show":"hide";p(["group","dataLabelsGroup","markerGroup","tracker"],function(a){if(c[a])c[a][f]()});if(d.hoverSeries===c)c.onMouseOut();e&&d.legend.colorizeItem(c,a);c.isDirty=!0;c.options.stacking&&p(d.series,function(a){if(a.options.stacking&&a.visible)a.isDirty=!0});p(c.linkedSeries,function(b){b.setVisible(a,!1)});if(g)d.isDirtyBox=!0;
b!==!1&&d.redraw();D(c,f)},setTooltipPoints:function(a){var b=[],c,d,e=this.xAxis,f=e&&e.getExtremes(),g=e?e.tooltipLen||e.len:this.chart.plotSizeX,h,i,j=[];if(!(this.options.enableMouseTracking===!1||this.singularTooltips)){if(a)this.tooltipPoints=null;p(this.segments||this.points,function(a){b=b.concat(a)});e&&e.reversed&&(b=b.reverse());this.orderTooltipPoints&&this.orderTooltipPoints(b);a=b.length;for(i=0;i<a;i++)if(e=b[i],c=e.x,c>=f.min&&c<=f.max){h=b[i+1];c=d===t?0:d+1;for(d=b[i+1]?C(v(0,T((e.clientX+
(h?h.wrappedClientX||h.clientX:g))/2)),g):g;c>=0&&c<=d;)j[c++]=e}this.tooltipPoints=j}},show:function(){this.setVisible(!0)},hide:function(){this.setVisible(!1)},select:function(a){this.selected=a=a===t?!this.selected:a;if(this.checkbox)this.checkbox.checked=a;D(this,a?"select":"unselect")},drawTracker:S.drawTrackerGraph});q(R,{Axis:la,Chart:Ya,Color:ya,Point:Ea,Tick:Sa,Renderer:Za,Series:O,SVGElement:P,SVGRenderer:ta,arrayMin:Na,arrayMax:Ba,charts:V,dateFormat:cb,format:Ia,pathAnim:ub,getOptions:function(){return E},
hasBidiBug:Nb,isTouchDevice:Jb,numberFormat:Ga,seriesTypes:F,setOptions:function(a){E=w(!0,E,a);Cb();return E},addEvent:K,removeEvent:W,createElement:Y,discardElement:Pa,css:G,each:p,extend:q,map:Ua,merge:w,pick:m,splat:qa,extendClass:ka,pInt:z,wrap:Ma,svg:aa,canvas:fa,vml:!aa&&!fa,product:"Highcharts",version:"4.0.1"})})();
/*
Highcharts funnel module, Beta
(c) 2010-2012 Torstein Hønsi
License: www.highcharts.com/license
*/
(function(l){var B=l.getOptions().plotOptions,q=l.seriesTypes,D=l.merge,C=function(){},z=l.each;B.funnel=D(B.pie,{center:["50%","50%"],width:"90%",neckWidth:"30%",height:"100%",neckHeight:"25%",dataLabels:{connectorWidth:1,connectorColor:"#606060"},size:!0,states:{select:{color:"#C0C0C0",borderColor:"#000000",shadow:!1}}});q.funnel=l.extendClass(q.pie,{type:"funnel",animate:C,translate:function(){var a=function(i,a){return/%$/.test(i)?a*parseInt(i,10)/100:parseInt(i,10)},f=0,d=this.chart,e=d.plotWidth,
d=d.plotHeight,g=0,c=this.options,j=c.center,b=a(j[0],e),j=a(j[0],d),l=a(c.width,e),h,r,m=a(c.height,d),s=a(c.neckWidth,e),u=a(c.neckHeight,d),v=m-u,a=this.data,w,x,q=c.dataLabels.position==="left"?1:0,y,n,A,o,k,t,p;this.getWidthAt=r=function(i){return i>m-u?s:s+(l-s)*((m-u-i)/(m-u))};this.getX=function(i,a){return b+(a?-1:1)*(r(i)/2+c.dataLabels.distance)};this.center=[b,j,m];this.centerX=b;z(a,function(a){f+=a.y});z(a,function(a){p=null;x=f?a.y/f:0;n=g*m;k=n+x*m;h=r(n);y=b-h/2;A=y+h;h=r(k);o=b-
h/2;t=o+h;n>v?(y=o=b-s/2,A=t=b+s/2):k>v&&(p=k,h=r(v),o=b-h/2,t=o+h,k=v);w=["M",y,n,"L",A,n,t,k];p&&w.push(t,p,o,p);w.push(o,k,"Z");a.shapeType="path";a.shapeArgs={d:w};a.percentage=x*100;a.plotX=b;a.plotY=(n+(p||k))/2;a.tooltipPos=[b,a.plotY];a.slice=C;a.half=q;g+=x});this.setTooltipPoints()},drawPoints:function(){var a=this,f=a.options,d=a.chart.renderer;z(a.data,function(e){var g=e.graphic,c=e.shapeArgs;g?g.animate(c):e.graphic=d.path(c).attr({fill:e.color,stroke:f.borderColor,"stroke-width":f.borderWidth}).add(a.group)})},
drawDataLabels:function(){var a=this.data,f=this.options.dataLabels.distance,d,e,g,c=a.length,j,b;for(this.center[2]-=2*f;c--;)g=a[c],e=(d=g.half)?1:-1,b=g.plotY,j=this.getX(b,d),g.labelPos=[0,b,j+(f-5)*e,b,j+f*e,b,d?"right":"left",0];q.pie.prototype.drawDataLabels.call(this)}})})(Highcharts);
/*
* Microsoft grants you the right to use these script files for the sole purpose of either:
* (i) interacting through your browser with the Microsoft website, subject to the website�s
* terms of use; or (ii) using the files as included with a Microsoft product subject to that
* product�s license terms. Microsoft reserves all other rights to the files not expressly
* granted by Microsoft, whether by implication, estoppel or otherwise. The notices and
* licenses below are for informational purposes only.
*/
/*
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
; (function ($) {
/**
* jqGrid English Translation
* Tony Tomov tony@trirand.com
* http://trirand.com/blog/
* Dual licensed under the MIT and GPL licenses:
* http://www.opensource.org/licenses/mit-license.php
* http://www.gnu.org/licenses/gpl.html
**/
$.jgrid = $.jgrid || {};
$.jgrid.localString = Microsoft.Crm.Client.Core.Framework.Common.jqGridResourceManager.getLocalizedString;
$.extend($.jgrid,{
defaults : {
recordtext: $.jgrid.localString("jqGrid.strings.recordtext"),
emptyrecords: $.jgrid.localString("jqGrid.defaults.emptyrecords"),
loadtext: $.jgrid.localString("jqGrid.defaults.loading"),
pgtext : $.jgrid.localString("jqGrid.strings.pgtext")
},
search : {
caption: $.jgrid.localString("jqGrid.strings.Search"),
Find:  $.jgrid.localString("jqGrid.strings.Find") ,
Reset: $.jgrid.localString("jqGrid.strings.Reset"),
odata: [$.jgrid.localString("jqGrid.strings.equal"), $.jgrid.localString("jqGrid.strings.notequal"), $.jgrid.localString("jqGrid.strings.less"), $.jgrid.localString("jqGrid.strings.lessorequal"), $.jgrid.localString("jqGrid.strings.greater"), $.jgrid.localString("jqGrid.strings.greaterorequal"), $.jgrid.localString("jqGrid.strings.beginswith"), $.jgrid.localString("jqGrid.strings.doesnotbeginwith"), $.jgrid.localString("jqGrid.strings.isin"), $.jgrid.localString("jqGrid.strings.isnotin"), $.jgrid.localString("jqGrid.strings.endswith"), $.jgrid.localString("jqGrid.strings.doesnotendwith"), $.jgrid.localString("jqGrid.strings.contains"), $.jgrid.localString("jqGrid.strings.doesnotcontain")],
groupOps: [{ op: $.jgrid.localString("jqGrid.strings.AND"), text: $.jgrid.localString("jqGrid.strings.all") }, { op: $.jgrid.localString("jqGrid.strings.OR"), text: $.jgrid.localString("jqGrid.strings.any") }],
equal:$.jgrid.localString("jqGrid.strings.equal") ,
notequal:$.jgrid.localString("jqGrid.strings.notequal") ,
less:$.jgrid.localString("jqGrid.strings.less") ,
lessorequal:$.jgrid.localString("jqGrid.strings.lessorequal") ,
greater:$.jgrid.localString("jqGrid.strings.greater") ,
greaterorequal:$.jgrid.localString("jqGrid.strings.greaterorequal") ,
beginswith:$.jgrid.localString("jqGrid.strings.beginswith") ,
doesnotbeginwith:$.jgrid.localString("jqGrid.strings.doesnotbeginwith") ,
isin:$.jgrid.localString("jqGrid.strings.isin") ,
isnotin:$.jgrid.localString("jqGrid.strings.isnotin") ,
endswith:$.jgrid.localString("jqGrid.strings.endswith") ,
doesnotendwith:$.jgrid.localString("jqGrid.strings.doesnotendwith") ,
contains:$.jgrid.localString("jqGrid.strings.contains") ,
doesnotcontain:$.jgrid.localString("jqGrid.strings.doesnotcontain") ,
matchText: $.jgrid.localString("jqGrid.strings.match") ,
rulesText: $.jgrid.localString("jqGrid.strings.rules") ,
AND: $.jgrid.localString("jqGrid.strings.AND") ,
all: $.jgrid.localString("jqGrid.strings.all") ,
OR: $.jgrid.localString("jqGrid.strings.OR") ,
any: $.jgrid.localString("jqGrid.strings.any")
},
edit : {
addCaption: $.jgrid.localString("jqGrid.strings.AddRecord") ,
editCaption: $.jgrid.localString("jqGrid.strings.EditRecord") ,
bSubmit:$.jgrid.localString("jqGrid.strings.editSubmit") ,
bCancel:  $.jgrid.localString("jqGrid.strings.editCancel") ,
bClose:  $.jgrid.localString("jqGrid.strings.editClose") ,
saveData:  $.jgrid.localString("jqGrid.strings.saveData") ,
bYes : $.jgrid.localString("jqGrid.strings.editYes") ,
bNo : $.jgrid.localString("jqGrid.strings.editNo") ,
bExit : $.jgrid.localString("jqGrid.strings.editExit") ,
msg: {
required: $.jgrid.localString("jqGrid.strings.required") ,
number:$.jgrid.localString("jqGrid.strings.number") ,
minValue:$.jgrid.localString("jqGrid.strings.minValue") ,
maxValue:$.jgrid.localString("jqGrid.strings.maxValue") ,
email: $.jgrid.localString("jqGrid.strings.email") ,
integer: $.jgrid.localString("jqGrid.strings.integer") ,
date: $.jgrid.localString("jqGrid.strings.date") ,
url:  $.jgrid.localString("jqGrid.strings.url") ,
nodefined :  $.jgrid.localString("jqGrid.strings.nodefined") ,
novalue : $.jgrid.localString("jqGrid.strings.novalue") ,
customarray : $.jgrid.localString("jqGrid.strings.customarray") ,
customfcheck :  $.jgrid.localString("jqGrid.strings.customfcheck")
}
},
view : {
caption: $.jgrid.localString("jqGrid.strings.ViewRecord") ,
bClose: $.jgrid.localString("jqGrid.strings.viewClose")
},
del : {
caption: $.jgrid.localString("jqGrid.strings.Delete") ,
msg: $.jgrid.localString("jqGrid.strings.msg") ,
bSubmit: $.jgrid.localString("jqGrid.strings.delSubmit") ,
bCancel: $.jgrid.localString("jqGrid.strings.delCancel")
},
nav : {
edittext: "",
edittitle: $.jgrid.localString("jqGrid.strings.edittitle") ,
addtext:"",
addtitle: $.jgrid.localString("jqGrid.strings.addtitle") ,
deltext: "",
deltitle:  $.jgrid.localString("jqGrid.strings.deltitle") ,
searchtext: "",
searchtitle: $.jgrid.localString("jqGrid.strings.searchtitle") ,
refreshtext: "",
refreshtitle: $.jgrid.localString("jqGrid.strings.refreshtitle") ,
alertcap: $.jgrid.localString("jqGrid.strings.navWarning") ,
alerttext: $.jgrid.localString("jqGrid.strings.navAlert") ,
viewtext: "",
viewtitle: $.jgrid.localString("jqGrid.strings.viewtitle")
},
col : {
caption: $.jgrid.localString("jqGrid.strings.selectcolumns") ,
bSubmit: $.jgrid.localString("jqGrid.strings.colOk") ,
bCancel: $.jgrid.localString("jqGrid.strings.colCancel")
},
errors : {
errcap : $.jgrid.localString("jqGrid.strings.errorserrcap") ,
nourl : $.jgrid.localString("jqGrid.strings.nourl") ,
norecords: $.jgrid.localString("jqGrid.strings.norecords") ,
model : $.jgrid.localString("jqGrid.strings.model")
},
formatter : {
integer : {thousandsSeparator: ",", defaultValue: '0'},
number : {decimalSeparator:".", thousandsSeparator: ",", decimalPlaces: 2, defaultValue: '0.00'},
currency : {decimalSeparator:".", thousandsSeparator: ",", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0.00'},
date : {
dayNames:   [
$.jgrid.localString("jqGrid.strings.Sun"), $.jgrid.localString("jqGrid.strings.Mon"), $.jgrid.localString("jqGrid.strings.Tue"), $.jgrid.localString("jqGrid.strings.Wed"), $.jgrid.localString("jqGrid.strings.Thu"), $.jgrid.localString("jqGrid.strings.Fri"), $.jgrid.localString("jqGrid.strings.Sat"),
$.jgrid.localString("jqGrid.strings.Sunday"), $.jgrid.localString("jqGrid.strings.Monday"), $.jgrid.localString("jqGrid.strings.Tuesday"), $.jgrid.localString("jqGrid.strings.Wednesday"), $.jgrid.localString("jqGrid.strings.Thursday"), $.jgrid.localString("jqGrid.strings.Friday"), $.jgrid.localString("jqGrid.strings.Saturday")
],
Sunday : $.jgrid.localString("jqGrid.strings.Sun") ,
Monday : $.jgrid.localString("jqGrid.strings.Mon") ,
Tuesday : $.jgrid.localString("jqGrid.strings.Tue") ,
Wednesday : $.jgrid.localString("jqGrid.strings.Wed") ,
Thursday : $.jgrid.localString("jqGrid.strings.Thu") ,
Friday : $.jgrid.localString("jqGrid.strings.Fri") ,
Saturday : $.jgrid.localString("jqGrid.strings.Sat") ,
Sun : $.jgrid.localString("jqGrid.strings.Sunday") ,
Mon : $.jgrid.localString("jqGrid.strings.Monday") ,
Tue : $.jgrid.localString("jqGrid.strings.Tuesday") ,
Wed : $.jgrid.localString("jqGrid.strings.Wednesday") ,
Thu : $.jgrid.localString("jqGrid.strings.Thursday") ,
Fri : $.jgrid.localString("jqGrid.strings.Friday") ,
Sat : $.jgrid.localString("jqGrid.strings.Saturday") ,
monthNames: [
$.jgrid.localString("jqGrid.strings.Jan"), $.jgrid.localString("jqGrid.strings.Feb"), $.jgrid.localString("jqGrid.strings.Mar"), $.jgrid.localString("jqGrid.strings.Apr"), $.jgrid.localString("jqGrid.strings.May"), $.jgrid.localString("jqGrid.strings.Jun"), $.jgrid.localString("jqGrid.strings.Jul"), $.jgrid.localString("jqGrid.strings.Aug"), $.jgrid.localString("jqGrid.strings.Sep"), $.jgrid.localString("jqGrid.strings.Oct"), $.jgrid.localString("jqGrid.strings.Nov"), $.jgrid.localString("jqGrid.strings.Dec"),
$.jgrid.localString("jqGrid.strings.January"), $.jgrid.localString("jqGrid.strings.February"), $.jgrid.localString("jqGrid.strings.March"), $.jgrid.localString("jqGrid.strings.April"), $.jgrid.localString("jqGrid.strings.May"), $.jgrid.localString("jqGrid.strings.June"), $.jgrid.localString("jqGrid.strings.July"), $.jgrid.localString("jqGrid.strings.August"), $.jgrid.localString("jqGrid.strings.September"), $.jgrid.localString("jqGrid.strings.October"), $.jgrid.localString("jqGrid.strings.November"), $.jgrid.localString("jqGrid.strings.December")
],
January : $.jgrid.localString("jqGrid.strings.Jan") ,
February :  $.jgrid.localString("jqGrid.strings.Feb") ,
March: $.jgrid.localString("jqGrid.strings.Mar") ,
April:  $.jgrid.localString("jqGrid.strings.Apr") ,
May :  $.jgrid.localString("jqGrid.strings.May") ,
June: $.jgrid.localString("jqGrid.strings.Jun") ,
July: $.jgrid.localString("jqGrid.strings.Jul") ,
August:  $.jgrid.localString("jqGrid.strings.Aug") ,
September:  $.jgrid.localString("jqGrid.strings.Sep") ,
October:  $.jgrid.localString("jqGrid.strings.Oct") ,
November: $.jgrid.localString("jqGrid.strings.Nov") ,
December: $.jgrid.localString("jqGrid.strings.Dec") ,
Jan : $.jgrid.localString("jqGrid.strings.January") ,
Feb: $.jgrid.localString("jqGrid.strings.February"),
Mar: $.jgrid.localString("jqGrid.strings.March") ,
Apr:  $.jgrid.localString("jqGrid.strings.April") ,
May :  $.jgrid.localString("jqGrid.strings.May") ,
Jun: $.jgrid.localString("jqGrid.strings.June") ,
Jul: $.jgrid.localString("jqGrid.strings.July") ,
Aug:  $.jgrid.localString("jqGrid.strings.August") ,
Sep:  $.jgrid.localString("jqGrid.strings.September") ,
Oct:  $.jgrid.localString("jqGrid.strings.October") ,
Nov: $.jgrid.localString("jqGrid.strings.November") ,
Dec: $.jgrid.localString("jqGrid.strings.December") ,
AmPm: [$.jgrid.localString("jqGrid.strings.am"), $.jgrid.localString("jqGrid.strings.pm"), $.jgrid.localString("jqGrid.strings.AMUpperCase"), $.jgrid.localString("jqGrid.strings.PMUpperCase")],
am : $.jgrid.localString("jqGrid.strings.am") ,
pm : $.jgrid.localString("jqGrid.strings.pm") ,
AM: $.jgrid.localString("jqGrid.strings.AMUpperCase") ,
PM: $.jgrid.localString("jqGrid.strings.PMUpperCase") ,
S: function (j) {return j < 11 || j > 13 ? ['st', 'nd', 'rd', 'th'][Math.min((j - 1) % 10, 3)] : 'th';},
srcformat: 'Y-m-d',
newformat: 'n/j/Y',
masks : {
// see http://php.net/manual/en/function.date.php for PHP format used in jqGrid
// and see http://docs.jquery.com/UI/Datepicker/formatDate
// and https://github.com/jquery/globalize#dates for alternative formats used frequently
// one can find on https://github.com/jquery/globalize/tree/master/lib/cultures many
// information about date, time, numbers and currency formats used in different countries
// one should just convert the information in PHP format
ISO8601Long:$.jgrid.localString("jqGrid.strings.Y_m_d_H_i_s") ,
ISO8601Short:$.jgrid.localString("jqGrid.strings.shortY_m_d") ,
// short date:
//    n - Numeric representation of a month, without leading zeros
//    j - Day of the month without leading zeros
//    Y - A full numeric representation of a year, 4 digits
// example: 3/1/2012 which means 1 March 2012
ShortDate:$.jgrid.localString("jqGrid.strings.n_j_Y") ,
// long date:
//    l - A full textual representation of the day of the week
//    F - A full textual representation of a month
//    d - Day of the month, 2 digits with leading zeros
//    Y - A full numeric representation of a year, 4 digits
LongDate:$.jgrid.localString("jqGrid.strings.l_F_d_Y") ,
// long date with long time:
//    l - A full textual representation of the day of the week
//    F - A full textual representation of a month
//    d - Day of the month, 2 digits with leading zeros
//    Y - A full numeric representation of a year, 4 digits
//    g - 12-hour format of an hour without leading zeros
//    i - Minutes with leading zeros
//    s - Seconds, with leading zeros
//    A - Uppercase Ante meridiem and Post meridiem (AM or PM)
FullDateTime:$.jgrid.localString("jqGrid.strings.l_F_d_Y_g_i_s_A") ,
// month day:
//    F - A full textual representation of a month
//    d - Day of the month, 2 digits with leading zeros
MonthDay: $.jgrid.localString("jqGrid.strings.F_d") ,
// short time (without seconds)
//    g - 12-hour format of an hour without leading zeros
//    i - Minutes with leading zeros
//    A - Uppercase Ante meridiem and Post meridiem (AM or PM)
ShortTime: $.jgrid.localString("jqGrid.strings.g_i_A") ,
// long time (with seconds)
//    g - 12-hour format of an hour without leading zeros
//    i - Minutes with leading zeros
//    s - Seconds, with leading zeros
//    A - Uppercase Ante meridiem and Post meridiem (AM or PM)
LongTime:$.jgrid.localString("jqGrid.strings.g_i_s_A") ,
SortableDateTime: $.jgrid.localString("jqGrid.strings.Y_m_d_TH_i_s") ,
UniversalSortableDateTime:  $.jgrid.localString("jqGrid.strings.Y_m_d_H_i_sO") ,
// month with year
//    Y - A full numeric representation of a year, 4 digits
//    F - A full textual representation of a month
YearMonth:  $.jgrid.localString("jqGrid.strings.F_Y")
},
reformatAfterEdit : false
},
baseLinkUrl: '',
showAction: '',
target: '',
checkbox : {disabled:true},
idName : 'id'
}
});
})(jQuery);
/*
* Microsoft grants you the right to use these script files for the sole purpose of either:
* (i) interacting through your browser with the Microsoft website, subject to the website�s
* terms of use; or (ii) using the files as included with a Microsoft product subject to that
* product�s license terms. Microsoft reserves all other rights to the files not expressly
* granted by Microsoft, whether by implication, estoppel or otherwise. The notices and
* licenses below are for informational purposes only.
*/
/*
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
/**
* jqGrid English Translation
* Tony Tomov tony@trirand.com
* http://trirand.com/blog/
* Dual licensed under the MIT and GPL licenses:
* http://www.opensource.org/licenses/mit-license.php
* http://www.gnu.org/licenses/gpl.html
**/
/*
* jqGrid  4.4.4 - jQuery Grid
* Copyright (c) 2008, Tony Tomov, tony@trirand.com
* Dual licensed under the MIT and GPL licenses
* http://www.opensource.org/licenses/mit-license.php
* http://www.gnu.org/licenses/gpl-2.0.html
* Date:2013-01-30
* Modules: grid.base.js; jquery.fmatter.js; grid.custom.js; grid.common.js; grid.formedit.js; grid.filter.js; grid.inlinedit.js; grid.celledit.js; jqModal.js; jqDnR.js; grid.subgrid.js; grid.grouping.js; grid.treegrid.js; grid.import.js; JsonXml.js; grid.tbltogrid.js; grid.jqueryui.js;
*/
function tableToGrid(n, t) {
jQuery(n).each(function () {
if (!this.grid) {
jQuery(this).width("99%");
var n = jQuery(this).width(),
u = jQuery("tr td:first-child input[type=checkbox]:first", jQuery(this)),
i = jQuery("tr td:first-child input[type=radio]:first", jQuery(this)),
u = 0 < u.length,
i = !u && 0 < i.length,
h = u || i,
r = [],
e = [];
jQuery("th", jQuery(this)).each(function () {
0 === r.length && h ? (r.push({
name: "__selection__",
index: "__selection__",
width: 0,
hidden: !0
}), e.push("__selection__")) : (r.push({
name: jQuery(this).attr("id") || jQuery.trim(jQuery.jgrid.stripHtml(jQuery(this).html())).split(" ").join("_"),
index: jQuery(this).attr("id") || jQuery.trim(jQuery.jgrid.stripHtml(jQuery(this).html())).split(" ").join("_"),
width: jQuery(this).width() || 150
}), e.push(jQuery(this).html()))
});
var f = [],
o = [],
s = [];
for (jQuery("tbody > tr", jQuery(this)).each(function () {
var t = {},
n = 0;
jQuery("td", jQuery(this)).each(function () {
if (0 === n && h) {
var i = jQuery("input", jQuery(this)),
u = i.attr("value");
o.push(u || f.length), i.is(":checked") && s.push(u), t[r[n].name] = i.attr("value")
} else t[r[n].name] = jQuery(this).html();
n++
}), 0 < n && f.push(t)
}), jQuery(this).empty(), jQuery(this).addClass("scroll"), jQuery(this).jqGrid(jQuery.extend({
datatype: "local",
width: n,
colNames: e,
colModel: r,
multiselect: u
}, t || {})), n = 0; n < f.length; n++) i = null, 0 < o.length && (i = o[n]) && i.replace && (i = encodeURIComponent(i).replace(/[.\-%]/g, "_")), null === i && (i = n + 1), jQuery(this).jqGrid("addRowData", i, f[n]);
for (n = 0; n < s.length; n++) jQuery(this).jqGrid("setSelection", s[n])
}
})
} (function (n) {
n.jgrid = n.jgrid || {}, n.extend(n.jgrid, {
defaults: {
recordtext: "View {0} - {1} of {2}",
emptyrecords: "No records to view",
loadtext: "Loading...",
pgtext: "Page {0} of {1}"
},
search: {
caption: "Search...",
Find: "Find",
Reset: "Reset",
odata: ["equal", "not equal", "less", "less or equal", "greater", "greater or equal", "begins with", "does not begin with", "is in", "is not in", "ends with", "does not end with", "contains", "does not contain"],
groupOps: [{
op: "AND",
text: "all"
}, {
op: "OR",
text: "any"
}],
matchText: " match",
rulesText: " rules"
},
edit: {
addCaption: "Add Record",
editCaption: "Edit Record",
bSubmit: "Submit",
bCancel: "Cancel",
bClose: "Close",
saveData: "Data has been changed! Save changes?",
bYes: "Yes",
bNo: "No",
bExit: "Cancel",
msg: {
required: "Field is required",
number: "Please, enter valid number",
minValue: "value must be greater than or equal to ",
maxValue: "value must be less than or equal to",
email: "is not a valid e-mail",
integer: "Please, enter valid integer value",
date: "Please, enter valid date value",
url: "is not a valid URL. Prefix required ('http://' or 'https://')",
nodefined: " is not defined!",
novalue: " return value is required!",
customarray: "Custom function should return array!",
customfcheck: "Custom function should be present in case of custom checking!"
}
},
view: {
caption: "View Record",
bClose: "Close"
},
del: {
caption: "Delete",
msg: "Delete selected record(s)?",
bSubmit: "Delete",
bCancel: "Cancel"
},
nav: {
edittext: "",
edittitle: "Edit selected row",
addtext: "",
addtitle: "Add new row",
deltext: "",
deltitle: "Delete selected row",
searchtext: "",
searchtitle: "Find records",
refreshtext: "",
refreshtitle: "Reload Grid",
alertcap: "Warning",
alerttext: "Please, select row",
viewtext: "",
viewtitle: "View selected row"
},
col: {
caption: "Select columns",
bSubmit: "Ok",
bCancel: "Cancel"
},
errors: {
errcap: "Error",
nourl: "No url is set",
norecords: "No records to process",
model: "Length of colNames <> colModel!"
},
formatter: {
integer: {
thousandsSeparator: ",",
defaultValue: "0"
},
number: {
decimalSeparator: ".",
thousandsSeparator: ",",
decimalPlaces: 2,
defaultValue: "0.00"
},
currency: {
decimalSeparator: ".",
thousandsSeparator: ",",
decimalPlaces: 2,
prefix: "",
suffix: "",
defaultValue: "0.00"
},
date: {
dayNames: ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
AmPm: ["am", "pm", "AM", "PM"],
S: function (n) {
return n < 11 || n > 13 ? ["st", "nd", "rd", "th"][Math.min((n - 1) % 10, 3)] : "th"
},
srcformat: "Y-m-d",
newformat: "n/j/Y",
masks: {
ISO8601Long: "Y-m-d H:i:s",
ISO8601Short: "Y-m-d",
ShortDate: "n/j/Y",
LongDate: "l, F d, Y",
FullDateTime: "l, F d, Y g:i:s A",
MonthDay: "F d",
ShortTime: "g:i A",
LongTime: "g:i:s A",
SortableDateTime: "Y-m-d\\TH:i:s",
UniversalSortableDateTime: "Y-m-d H:i:sO",
YearMonth: "F, Y"
},
reformatAfterEdit: !1
},
baseLinkUrl: "",
showAction: "",
target: "",
checkbox: {
disabled: !0
},
idName: "id"
}
})
})(jQuery),
function (n) {
n.jgrid = n.jgrid || {}, n.extend(n.jgrid, {
version: "4.4.4",
htmlDecode: function (n) {
return n && ("&nbsp;" == n || "&#160;" == n || 1 === n.length && 160 === n.charCodeAt(0)) ? "" : n ? ("" + n).replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&quot;/g, '"').replace(/&amp;/g, "&") : n
},
htmlEncode: function (n) {
return n ? ("" + n).replace(/&/g, "&amp;").replace(/\"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;") : n
},
format: function (t) {
var i = n.makeArray(arguments).slice(1);
return null == t && (t = ""), t.replace(/\{(\d+)\}/g, function (n, t) {
return i[t]
})
},
msie: "Microsoft Internet Explorer" == navigator.appName,
msiever: function () {
var n = -1;
return null != /MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent) && (n = parseFloat(RegExp.$1)), n
},
getCellIndex: function (t) {
return (t = n(t), t.is("tr")) ? -1 : (t = (!t.is("td") && !t.is("th") ? t.closest("td,th") : t)[0], n.jgrid.msie ? n.inArray(t, t.parentNode.cells) : t.cellIndex)
},
stripHtml: function (n) {
var n = "" + n;
return n ? (n = n.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi, "")) && "&nbsp;" !== n && "&#160;" !== n ? n.replace(/\"/g, "'") : "" : n
},
stripPref: function (t, i) {
var r = n.type(t);
return ("string" == r || "number" == r) && (t = "" + t, i = "" !== t ? ("" + i).replace("" + t, "") : i), i
},
stringToDoc: function (n) {
var t;
if ("string" != typeof n) return n;
try {
t = (new DOMParser).parseFromString(n, "text/xml")
} catch (i) {
t = new ActiveXObject("Microsoft.XMLDOM"), t.async = !1, t.loadXML(n)
}
return t && t.documentElement && "parsererror" != t.documentElement.tagName ? t : null
},
parse: function (t) {
return "while(1);" == t.substr(0, 9) && (t = t.substr(9)), "/*" == t.substr(0, 2) && (t = t.substr(2, t.length - 4)), t || (t = "{}"), !0 === n.jgrid.useJSON && "object" == typeof JSON && "function" == typeof JSON.parse ? JSON.parse(t) : eval("(" + t + ")")
},
parseDate: function (t, i) {
var u = {
m: 1,
d: 1,
y: 1970,
h: 0,
i: 0,
s: 0,
u: 0
},
r, o, f;
if (r = /[\\\/:_;.,\t\T\s-]/, i && null != i) {
i = n.trim(i), i = i.split(r), void 0 !== n.jgrid.formatter.date.masks[t] && (t = n.jgrid.formatter.date.masks[t]);
var t = t.split(r),
s = n.jgrid.formatter.date.monthNames,
e = n.jgrid.formatter.date.AmPm,
h = function (n, t) {
return 0 === n ? 12 === t && (t = 0) : 12 !== t && (t += 12), t
};
for (r = 0, o = t.length; r < o; r++) "M" == t[r] && (f = n.inArray(i[r], s), -1 !== f && 12 > f && (i[r] = f + 1, u.m = i[r])), "F" == t[r] && (f = n.inArray(i[r], s), -1 !== f && 11 < f && (i[r] = f + 1 - 12, u.m = i[r])), "a" == t[r] && (f = n.inArray(i[r], e), -1 !== f && 2 > f && i[r] == e[f] && (i[r] = f, u.h = h(i[r], u.h))), "A" == t[r] && (f = n.inArray(i[r], e), -1 !== f && 1 < f && i[r] == e[f] && (i[r] = f - 2, u.h = h(i[r], u.h))), "g" === t[r] && (u.h = parseInt(i[r], 10)), void 0 !== i[r] && (u[t[r].toLowerCase()] = parseInt(i[r], 10));
u.m = parseInt(u.m, 10) - 1, r = u.y, 70 <= r && 99 >= r ? u.y = 1900 + u.y : 0 <= r && 69 >= r && (u.y = 2e3 + u.y), void 0 !== u.j && (u.d = u.j), void 0 !== u.n && (u.m = parseInt(u.n, 10) - 1)
}
return new Date(u.y, u.m, u.d, u.h, u.i, u.s, u.u)
},
jqID: function (n) {
return ("" + n).replace(/[!"#$%&'()*+,.\/:; <=>?@\[\\\]\^`{|}~]/g, "\\$&")
},
guid: 1,
uidPref: "jqg",
randId: function (t) {
return (t || n.jgrid.uidPref) + n.jgrid.guid++
},
getAccessor: function (n, t) {
var i, u, r = [],
f;
if ("function" == typeof t) return t(n);
if (i = n[t], void 0 === i) try {
if ("string" == typeof t && (r = t.split(".")), f = r.length)
for (i = n; i && f--;) u = r.shift(), i = i[u]
} catch (e) { }
return i
},
getXmlData: function (t, i, r) {
var u = "string" == typeof i ? i.match(/^(.*)\[(\w+)\]$/) : null;
return "function" == typeof i ? i(t) : u && u[2] ? u[1] ? n(u[1], t).attr(u[2]) : n(t).attr(u[2]) : (t = n(i, t), r ? t : 0 < t.length ? n(t).text() : void 0)
},
cellWidth: function () {
var t = n("<div class='ui-jqgrid' style='left:10000px'><table class='ui-jqgrid-btable' style='width:5px;'><tr class='jqgrow'><td style='width:5px;'><\/td><\/tr><\/table><\/div>"),
i = t.appendTo("body").find("td").width();
return t.remove(), 5 !== i
},
cell_width: !0,
ajaxOptions: {},
from: function (t) {
return new function (t, i) {
"string" == typeof t && (t = n.data(t));
var r = this,
u = t,
h = !0,
o = !1,
f = i,
v = /[\$,%]/g,
l = null,
y = null,
p = 0,
e = !1,
a = "",
s = [],
c = !0;
if ("object" == typeof t && t.push) 0 < t.length && (c = "object" != typeof t[0] ? !1 : !0);
else throw "data provides is not an array";
return this._hasData = function () {
return null === u ? !1 : 0 === u.length ? !1 : !0
}, this._getStr = function (n) {
var t = [];
return o && t.push("jQuery.trim("), t.push("String(" + n + ")"), o && t.push(")"), h || t.push(".toLowerCase()"), t.join("")
}, this._strComp = function (n) {
return "string" == typeof n ? ".toString()" : ""
}, this._group = function (n, t) {
return {
field: n.toString(),
unique: t,
items: []
}
}, this._toStr = function (t) {
return o && (t = n.trim(t)), t = t.toString().replace(/\\/g, "\\\\").replace(/\"/g, '\\"'), h ? t : t.toLowerCase()
}, this._funcLoop = function (t) {
var i = [];
return n.each(u, function (n, r) {
i.push(t(r))
}), i
}, this._append = function (n) {
var t;
for (f = null === f ? "" : f + ("" === a ? " && " : a), t = 0; t < p; t++) f += "(";
e && (f += "!"), f += "(" + n + ")", e = !1, a = "", p = 0
}, this._setCommand = function (n, t) {
l = n, y = t
}, this._resetNegate = function () {
e = !1
}, this._repeatCommand = function (n, t) {
return null === l ? r : null !== n && null !== t ? l(n, t) : null === y || !c ? l(n) : l(y, n)
}, this._equals = function (n, t) {
return 0 === r._compare(n, t, 1)
}, this._compare = function (n, t, i) {
var r = Object.prototype.toString;
return (void 0 === i && (i = 1), void 0 === n && (n = null), void 0 === t && (t = null), null === n && null === t) ? 0 : null === n && null !== t ? 1 : null !== n && null === t ? -1 : "[object Date]" === r.call(n) && "[object Date]" === r.call(t) ? n < t ? -i : n > t ? i : 0 : (h || "number" == typeof n || "number" == typeof t || (n = "" + n, t = "" + t), n < t ? -i : n > t ? i : 0)
}, this._performSort = function () {
0 !== s.length && (u = r._doSort(u, 0))
}, this._doSort = function (n, t) {
var f = s[t].by,
e = s[t].dir,
i = s[t].type,
u = s[t].datefmt;
if (t == s.length - 1) return r._getOrder(n, f, e, i, u);
t++;
for (var f = r._getGroup(n, f, e, i, u), e = [], o, i = 0; i < f.length; i++)
for (o = r._doSort(f[i].items, t), u = 0; u < o.length; u++) e.push(o[u]);
return e
}, this._getOrder = function (t, i, u, f, e) {
var c = [],
s = [],
y = "a" == u ? 1 : -1,
o, l, f, a;
for (void 0 === f && (f = "text"), l = "float" == f || "number" == f || "currency" == f || "numeric" == f ? function (n) {
return n = parseFloat(("" + n).replace(v, "")), isNaN(n) ? 0 : n
} : "int" == f || "integer" == f ? function (n) {
return n ? parseFloat(("" + n).replace(v, "")) : 0
} : "date" == f || "datetime" == f ? function (t) {
return n.jgrid.parseDate(e, t).getTime()
} : n.isFunction(f) ? f : function (t) {
return t = t ? n.trim("" + t) : "", h ? t : t.toLowerCase()
}, n.each(t, function (t, r) {
o = "" !== i ? n.jgrid.getAccessor(r, i) : r, void 0 === o && (o = ""), o = l(o, r), s.push({
vSort: o,
index: t
})
}), s.sort(function (n, t) {
return n = n.vSort, t = t.vSort, r._compare(n, t, y)
}), f = 0, a = t.length; f < a;) u = s[f].index, c.push(t[u]), f++;
return c
}, this._getGroup = function (t, i, u, f, e) {
var h = [],
o = null,
c = null,
s;
return n.each(r._getOrder(t, i, u, f, e), function (t, u) {
s = n.jgrid.getAccessor(u, i), null == s && (s = ""), r._equals(c, s) || (c = s, null !== o && h.push(o), o = r._group(i, s)), o.items.push(u)
}), null !== o && h.push(o), h
}, this.ignoreCase = function () {
return h = !1, r
}, this.useCase = function () {
return h = !0, r
}, this.trim = function () {
return o = !0, r
}, this.noTrim = function () {
return o = !1, r
}, this.execute = function () {
var t = f,
i = [];
return null === t ? r : (n.each(u, function () {
eval(t) && i.push(this)
}), u = i, r)
}, this.data = function () {
return u
}, this.select = function (t) {
if (r._performSort(), !r._hasData()) return [];
if (r.execute(), n.isFunction(t)) {
var i = [];
return n.each(u, function (n, r) {
i.push(t(r))
}), i
}
return u
}, this.hasMatch = function () {
return r._hasData() ? (r.execute(), 0 < u.length) : !1
}, this.andNot = function (n, t, i) {
return e = !e, r.and(n, t, i)
}, this.orNot = function (n, t, i) {
return e = !e, r.or(n, t, i)
}, this.not = function (n, t, i) {
return r.andNot(n, t, i)
}, this.and = function (n, t, i) {
return a = " && ", void 0 === n ? r : r._repeatCommand(n, t, i)
}, this.or = function (n, t, i) {
return a = " || ", void 0 === n ? r : r._repeatCommand(n, t, i)
}, this.orBegin = function () {
return p++, r
}, this.orEnd = function () {
return null !== f && (f += ")"), r
}, this.isNot = function (n) {
return e = !e, r.is(n)
}, this.is = function (n) {
return r._append("this." + n), r._resetNegate(), r
}, this._compareValues = function (t, i, u, f, e) {
var s, o, h;
if (s = c ? "jQuery.jgrid.getAccessor(this,'" + i + "')" : "this", void 0 === u && (u = null), o = u, h = void 0 === e.stype ? "text" : e.stype, null !== u) switch (h) {
case "int":
case "integer":
o = isNaN(Number(o)) || "" === o ? "0" : o, s = "parseInt(" + s + ",10)", o = "parseInt(" + o + ",10)";
break;
case "float":
case "number":
case "numeric":
o = ("" + o).replace(v, ""), o = isNaN(Number(o)) || "" === o ? "0" : o, s = "parseFloat(" + s + ")", o = "parseFloat(" + o + ")";
break;
case "date":
case "datetime":
o = "" + n.jgrid.parseDate(e.newfmt || "Y-m-d", o).getTime(), s = 'jQuery.jgrid.parseDate("' + e.srcfmt + '",' + s + ").getTime()";
break;
default:
s = r._getStr(s), o = r._getStr('"' + r._toStr(o) + '"')
}
return r._append(s + " " + f + " " + o), r._setCommand(t, i), r._resetNegate(), r
}, this.equals = function (n, t, i) {
return r._compareValues(r.equals, n, t, "==", i)
}, this.notEquals = function (n, t, i) {
return r._compareValues(r.equals, n, t, "!==", i)
}, this.isNull = function (n, t, i) {
return r._compareValues(r.equals, n, null, "===", i)
}, this.greater = function (n, t, i) {
return r._compareValues(r.greater, n, t, ">", i)
}, this.less = function (n, t, i) {
return r._compareValues(r.less, n, t, "<", i)
}, this.greaterOrEquals = function (n, t, i) {
return r._compareValues(r.greaterOrEquals, n, t, ">=", i)
}, this.lessOrEquals = function (n, t, i) {
return r._compareValues(r.lessOrEquals, n, t, "<=", i)
}, this.startsWith = function (t, i) {
var u = null == i ? t : i,
u = o ? n.trim(u.toString()).length : u.toString().length;
return c ? r._append(r._getStr("jQuery.jgrid.getAccessor(this,'" + t + "')") + ".substr(0," + u + ") == " + r._getStr('"' + r._toStr(i) + '"')) : (u = o ? n.trim(i.toString()).length : i.toString().length, r._append(r._getStr("this") + ".substr(0," + u + ") == " + r._getStr('"' + r._toStr(t) + '"'))), r._setCommand(r.startsWith, t), r._resetNegate(), r
}, this.endsWith = function (t, i) {
var u = null == i ? t : i,
u = o ? n.trim(u.toString()).length : u.toString().length;
return c ? r._append(r._getStr("jQuery.jgrid.getAccessor(this,'" + t + "')") + ".substr(" + r._getStr("jQuery.jgrid.getAccessor(this,'" + t + "')") + ".length-" + u + "," + u + ') == "' + r._toStr(i) + '"') : r._append(r._getStr("this") + ".substr(" + r._getStr("this") + '.length-"' + r._toStr(t) + '".length,"' + r._toStr(t) + '".length) == "' + r._toStr(t) + '"'), r._setCommand(r.endsWith, t), r._resetNegate(), r
}, this.contains = function (n, t) {
return c ? r._append(r._getStr("jQuery.jgrid.getAccessor(this,'" + n + "')") + '.indexOf("' + r._toStr(t) + '",0) > -1') : r._append(r._getStr("this") + '.indexOf("' + r._toStr(n) + '",0) > -1'), r._setCommand(r.contains, n), r._resetNegate(), r
}, this.groupBy = function (n, t, i, f) {
return r._hasData() ? r._getGroup(u, n, t, i, f) : null
}, this.orderBy = function (t, i, u, f) {
return i = null == i ? "a" : n.trim(i.toString().toLowerCase()), null == u && (u = "text"), null == f && (f = "Y-m-d"), ("desc" == i || "descending" == i) && (i = "d"), ("asc" == i || "ascending" == i) && (i = "a"), s.push({
by: t,
dir: i,
type: u,
datefmt: f
}), r
}, r
}(t, null)
},
getMethod: function (t) {
return this.getAccessor(n.fn.jqGrid, t)
},
extend: function (t) {
n.extend(n.fn.jqGrid, t), this.no_legacy_api || n.fn.extend(t)
}
}), n.fn.jqGrid = function (t) {
var i, r;
if ("string" == typeof t) {
if (i = n.jgrid.getMethod(t), !i) throw "jqGrid - No such method: " + t;
return r = n.makeArray(arguments).slice(1), i.apply(this, r)
}
return this.each(function () {
var f, o, ft, b, ei, w, ct, lt, at, s, e, d, ut, g, l, nt, c, tt, h, v, kt, vt, oi;
if (!this.grid) {
var u = n.extend(!0, {
url: "",
height: 150,
page: 1,
rowNum: 20,
rowTotal: null,
records: 0,
pager: "",
pgbuttons: !0,
pginput: !0,
colModel: [],
rowList: [],
colNames: [],
sortorder: "asc",
sortname: "",
datatype: "xml",
mtype: "GET",
altRows: !1,
selarrrow: [],
savedRow: [],
shrinkToFit: !0,
xmlReader: {},
jsonReader: {},
subGrid: !1,
subGridModel: [],
reccount: 0,
lastpage: 0,
lastsort: 0,
selrow: null,
beforeSelectRow: null,
onSelectRow: null,
onSortCol: null,
ondblClickRow: null,
onRightClickRow: null,
onPaging: null,
onSelectAll: null,
onInitGrid: null,
loadComplete: null,
gridComplete: null,
loadError: null,
loadBeforeSend: null,
afterInsertRow: null,
beforeRequest: null,
beforeProcessing: null,
onHeaderClick: null,
viewrecords: !1,
loadonce: !1,
multiselect: !1,
multikey: !1,
editurl: null,
search: !1,
caption: "",
hidegrid: !0,
hiddengrid: !1,
postData: {},
userData: {},
treeGrid: !1,
treeGridModel: "nested",
treeReader: {},
treeANode: -1,
ExpandColumn: null,
tree_root_level: 0,
prmNames: {
page: "page",
rows: "rows",
sort: "sidx",
order: "sord",
search: "_search",
nd: "nd",
id: "id",
oper: "oper",
editoper: "edit",
addoper: "add",
deloper: "del",
subgridid: "id",
npage: null,
totalrows: "totalrows"
},
forceFit: !1,
gridstate: "visible",
cellEdit: !1,
cellsubmit: "remote",
nv: 0,
loadui: "enable",
toolbar: [!1, ""],
scroll: !1,
multiboxonly: !1,
deselectAfterSort: !0,
scrollrows: !1,
autowidth: !1,
scrollOffset: 18,
cellLayout: 5,
subGridWidth: 20,
multiselectWidth: 20,
gridview: !1,
rownumWidth: 25,
rownumbers: !1,
pagerpos: "center",
recordpos: "right",
footerrow: !1,
userDataOnFooter: !1,
hoverrows: !0,
altclass: "ui-priority-secondary",
viewsortcols: [!1, "vertical", !0],
resizeclass: "",
autoencode: !1,
remapColumns: [],
ajaxGridOptions: {},
direction: "ltr",
toppager: !1,
headertitles: !1,
scrollTimeout: 40,
data: [],
_index: {},
grouping: !1,
groupingView: {
groupField: [],
groupOrder: [],
groupText: [],
groupColumnShow: [],
groupSummary: [],
showSummaryOnHide: !1,
sortitems: [],
sortnames: [],
summary: [],
summaryval: [],
plusicon: "ui-icon-circlesmall-plus",
minusicon: "ui-icon-circlesmall-minus",
displayField: []
},
ignoreCase: !1,
cmTemplate: {},
idPrefix: ""
}, n.jgrid.defaults, t || {}),
i = this,
r = {
headers: [],
cols: [],
footers: [],
dragStart: function (t, r, f) {
this.resizing = {
idx: t,
startX: r.clientX,
sOL: f[0]
}, this.hDiv.style.cursor = "col-resize", this.curGbox = n("#rs_m" + n.jgrid.jqID(u.id), "#gbox_" + n.jgrid.jqID(u.id)), this.curGbox.css({
display: "block",
left: f[0],
top: f[1],
height: f[2]
}), n(i).triggerHandler("jqGridResizeStart", [r, t]), n.isFunction(u.resizeStart) && u.resizeStart.call(this, r, t), document.onselectstart = function () {
return !1
}
},
dragMove: function (n) {
if (this.resizing) {
var t = n.clientX - this.resizing.startX,
n = this.headers[this.resizing.idx],
r = "ltr" === u.direction ? n.width + t : n.width - t,
i;
33 < r && (this.curGbox.css({
left: this.resizing.sOL + t
}), !0 === u.forceFit ? (i = this.headers[this.resizing.idx + u.nv], t = "ltr" === u.direction ? i.width - t : i.width + t, 33 < t && (n.newWidth = r, i.newWidth = t)) : (this.newWidth = "ltr" === u.direction ? u.tblwidth + t : u.tblwidth - t, n.newWidth = r))
}
},
dragEnd: function () {
if (this.hDiv.style.cursor = "default", this.resizing) {
var t = this.resizing.idx,
r = this.headers[t].newWidth || this.headers[t].width,
r = parseInt(r, 10);
this.resizing = !1, n("#rs_m" + n.jgrid.jqID(u.id)).css("display", "none"), u.colModel[t].width = r, this.headers[t].width = r, this.headers[t].el.style.width = r + "px", this.cols[t].style.width = r + "px", 0 < this.footers.length && (this.footers[t].style.width = r + "px"), !0 === u.forceFit ? (r = this.headers[t + u.nv].newWidth || this.headers[t + u.nv].width, this.headers[t + u.nv].width = r, this.headers[t + u.nv].el.style.width = r + "px", this.cols[t + u.nv].style.width = r + "px", 0 < this.footers.length && (this.footers[t + u.nv].style.width = r + "px"), u.colModel[t + u.nv].width = r) : (u.tblwidth = this.newWidth || u.tblwidth, n("table:first", this.bDiv).css("width", u.tblwidth + "px"), n("table:first", this.hDiv).css("width", u.tblwidth + "px"), this.hDiv.scrollLeft = this.bDiv.scrollLeft, u.footerrow && (n("table:first", this.sDiv).css("width", u.tblwidth + "px"), this.sDiv.scrollLeft = this.bDiv.scrollLeft)), n(i).triggerHandler("jqGridResizeStop", [r, t]), n.isFunction(u.resizeStop) && u.resizeStop.call(this, r, t)
}
this.curGbox = null, document.onselectstart = function () {
return !0
}
},
populateVisible: function () {
var h, f, i, t, l, o, s, e, c, a;
if (r.timer && clearTimeout(r.timer), r.timer = null, h = n(r.bDiv).height(), h) {
if (f = n("table:first", r.bDiv), f[0].rows.length) try {
t = (i = f[0].rows[1]) ? n(i).outerHeight() || r.prevRowHeight : r.prevRowHeight
} catch (v) {
t = r.prevRowHeight
}
t && (r.prevRowHeight = t, l = u.rowNum, i = r.scrollTop = r.bDiv.scrollTop, o = Math.round(f.position().top) - i, s = o + f.height(), t *= l, s < h && 0 >= o && (void 0 === u.lastpage || parseInt((s + i + t - 1) / t, 10) <= u.lastpage) && (c = parseInt((h - s + t - 1) / t, 10), 0 <= s || 2 > c || !0 === u.scroll ? (e = Math.round((s + i) / t) + 1, o = -1) : o = 1), 0 < o && (e = parseInt(i / t, 10) + 1, c = parseInt((i + h) / t, 10) + 2 - e, a = !0), !c || u.lastpage && (e > u.lastpage || 1 == u.lastpage || e === u.page && e === u.lastpage) || (r.hDiv.loading ? r.timer = setTimeout(r.populateVisible, u.scrollTimeout) : (u.page = e, a && (r.selectionPreserver(f[0]), r.emptyRows.call(f[0], !1, !1)), r.populate(c))))
}
},
scrollGrid: function (n) {
if (u.scroll) {
var t = r.bDiv.scrollTop;
void 0 === r.scrollTop && (r.scrollTop = 0), t != r.scrollTop && (r.scrollTop = t, r.timer && clearTimeout(r.timer), r.timer = setTimeout(r.populateVisible, u.scrollTimeout))
}
r.hDiv.scrollLeft = r.bDiv.scrollLeft, u.footerrow && (r.sDiv.scrollLeft = r.bDiv.scrollLeft), n && n.stopPropagation()
},
selectionPreserver: function (t) {
var i = t.p,
u = i.selrow,
r = i.selarrrow ? n.makeArray(i.selarrrow) : null,
e = t.grid.bDiv.scrollLeft,
f = function () {
var o;
if (i.selrow = null, i.selarrrow = [], i.multiselect && r && 0 < r.length)
for (o = 0; o < r.length; o++) r[o] != u && n(t).jqGrid("setSelection", r[o], !1, null);
u && n(t).jqGrid("setSelection", u, !1, null), t.grid.bDiv.scrollLeft = e, n(t).unbind(".selectionPreserver", f)
};
n(t).bind("jqGridGridComplete.selectionPreserver", f)
}
};
if ("TABLE" != this.tagName.toUpperCase()) alert("Element is not a table");
else if (void 0 !== document.documentMode && 5 >= document.documentMode) alert("Grid can not be used in this ('quirks') mode!");
else {
if (n(this).empty().attr("tabindex", "0"), this.p = u, this.p.useProp = !!n.fn.prop, 0 === this.p.colNames.length)
for (f = 0; f < this.p.colModel.length; f++) this.p.colNames[f] = this.p.colModel[f].label || this.p.colModel[f].name;
if (this.p.colNames.length !== this.p.colModel.length) alert(n.jgrid.errors.model);
else {
c = n("<div class='ui-jqgrid-view'><\/div>"), ft = n.jgrid.msie, i.p.direction = n.trim(i.p.direction.toLowerCase()), -1 == n.inArray(i.p.direction, ["ltr", "rtl"]) && (i.p.direction = "ltr"), o = i.p.direction, n(c).insertBefore(this), n(this).removeClass("scroll").appendTo(c), b = n("<div class='ui-jqgrid ui-widget ui-widget-content ui-corner-all'><\/div>"), n(b).attr({
id: "gbox_" + this.id,
dir: o
}).insertBefore(c), n(c).attr("id", "gview_" + this.id).appendTo(b), n("<div class='ui-widget-overlay jqgrid-overlay' id='lui_" + this.id + "'><\/div>").insertBefore(c), n("<div class='loading ui-state-default ui-state-active' id='load_" + this.id + "'>" + this.p.loadtext + "<\/div>").insertBefore(c), n(this).attr({
cellspacing: "0",
cellpadding: "0",
border: "0",
role: "grid",
"aria-multiselectable": !!this.p.multiselect,
"aria-labelledby": "gbox_" + this.id
});
var p = function (n, t) {
return n = parseInt(n, 10), isNaN(n) ? t || 0 : n
},
it = function (t, u, f, e, o, s) {
var l = i.p.colModel[t],
v = l.align,
h = 'style="',
a = l.classes,
y = l.name,
c = [];
return v && (h = h + ("text-align:" + v + ";")), l.hidden === !0 && (h = h + "display:none;"), u === 0 ? h = h + ("width: " + r.headers[t].width + "px;") : l.cellattr && n.isFunction(l.cellattr) && (t = l.cellattr.call(i, o, f, e, l, s)) && typeof t == "string" && (t = t.replace(/style/i, "style").replace(/title/i, "title"), t.indexOf("title") > -1 && (l.title = !1), t.indexOf("class") > -1 && (a = void 0), c = t.split("style"), c.length === 2 ? (c[1] = n.trim(c[1].replace("=", "")), (c[1].indexOf("'") === 0 || c[1].indexOf('"') === 0) && (c[1] = c[1].substring(1)), h = h + c[1].replace(/'/gi, '"')) : h = h + '"'), c.length || (c[0] = "", h = h + '"'), h = h + ((a !== void 0 ? ' class="' + a + '"' : "") + (l.title && f ? ' title="' + n.jgrid.stripHtml(f) + '"' : "")), h = h + (' aria-describedby="' + i.p.id + "_" + y + '"'), h + c[0]
},
dt = function (t) {
return t == null || t === "" ? "&#160;" : i.p.autoencode ? n.jgrid.htmlEncode(t) : "" + t
},
gt = function (t, r, u, f, e) {
var o = i.p.colModel[u];
return o.formatter !== void 0 ? (t = "" + i.p.idPrefix != "" ? n.jgrid.stripPref(i.p.idPrefix, t) : t, t = {
rowId: t,
colModel: o,
gid: i.p.id,
pos: u
}, r = n.isFunction(o.formatter) ? o.formatter.call(i, r, t, f, e) : n.fmatter ? n.fn.fmatter.call(i, o.formatter, r, t, f, e) : dt(r)) : r = dt(r), r
},
yt = function (n, t, i, r, u, f) {
return t = gt(n, t, i, u, "add"), '<td role="gridcell" ' + it(i, r, t, u, n, f) + ">" + t + "<\/td>"
},
ni = function (n, t, r, u) {
return u = '<input role="checkbox" type="checkbox" id="jqg_' + i.p.id + "_" + n + '" class="cbox" name="jqg_' + i.p.id + "_" + n + '"' + (u ? 'checked="checked"' : "") + "/>", '<td role="gridcell" ' + it(t, r, "", null, n, !0) + ">" + u + "<\/td>"
},
ti = function (n, t, i, r) {
return i = (parseInt(i, 10) - 1) * parseInt(r, 10) + 1 + t, '<td role="gridcell" class="ui-state-default jqgrid-rownum" ' + it(n, t, i, null, t, !0) + ">" + i + "<\/td>"
},
ii = function (n) {
for (var t, u = [], f = 0, r = 0; r < i.p.colModel.length; r++) t = i.p.colModel[r], t.name !== "cb" && t.name !== "subgrid" && t.name !== "rn" && (u[f] = n == "local" ? t.name : n == "xml" || n === "xmlstring" ? t.xmlmap || t.name : t.jsonmap || t.name, f++);
return u
},
et = function (t) {
var r = i.p.remapColumns;
return r && r.length || (r = n.map(i.p.colModel, function (n, t) {
return t
})), t && (r = n.map(r, function (n) {
return n < t ? null : n - t
})), r
},
rt = function (t, i) {
var r;
this.p.deepempty ? n(this.rows).slice(1).remove() : (r = this.rows.length > 0 ? this.rows[0] : null, n(this.firstChild).empty().append(r)), t && this.p.scroll && (n(this.grid.bDiv.firstChild).css({
height: "auto"
}), n(this.grid.bDiv.firstChild.firstChild).css({
height: 0,
display: "none"
}), this.grid.bDiv.scrollTop !== 0 && (this.grid.bDiv.scrollTop = 0)), i === !0 && this.p.treeGrid && (this.p.data = [], this.p._index = {})
},
pt = function () {
var f = i.p.data.length,
u, t, r;
for (u = i.p.rownumbers === !0 ? 1 : 0, t = i.p.multiselect === !0 ? 1 : 0, r = i.p.subGrid === !0 ? 1 : 0, u = i.p.keyIndex === !1 || i.p.loadonce === !0 ? i.p.localReader.id : i.p.colModel[i.p.keyIndex + t + r + u].name, t = 0; t < f; t++) r = n.jgrid.getAccessor(i.p.data[t], u), r === void 0 && (r = "" + (t + 1)), i.p._index[r] = t
},
wt = function (t, r, u, f, e, o) {
var c = "-1",
h = "",
s, r = r ? "display:none;" : "",
u = "ui-widget-content jqgrow ui-row-" + i.p.direction + u + (o ? " ui-state-highlight" : ""),
f = n.isFunction(i.p.rowattr) ? i.p.rowattr.call(i, f, e) : {};
if (!n.isEmptyObject(f)) {
f.hasOwnProperty("id") && (t = f.id, delete f.id), f.hasOwnProperty("tabindex") && (c = f.tabindex, delete f.tabindex), f.hasOwnProperty("style") && (r = r + f.style, delete f.style), f.hasOwnProperty("class") && (u = u + (" " + f["class"]), delete f["class"]);
try {
delete f.role
} catch (l) { }
for (s in f) f.hasOwnProperty(s) && (h = h + (" " + s + "=" + f[s]))
}
return '<tr role="row" id="' + t + '" tabindex="' + c + '" class="' + u + '"' + (r === "" ? "" : ' style="' + r + '"') + h + ">"
},
bt = function (t, r, u, f, e) {
var gt = new Date,
ft = i.p.datatype != "local" && i.p.loadonce || i.p.datatype == "xmlstring",
o = i.p.xmlReader,
ot = i.p.datatype == "local" ? "local" : "xml",
e, ct, pt, bt, kt, dt;
if (ft && (i.p.data = [], i.p._index = {}, i.p.localReader.id = "_id_"), i.p.reccount = 0, n.isXMLDoc(t)) {
i.p.treeANode !== -1 || i.p.scroll ? u = u > 1 ? u : 1 : (rt.call(i, !1, !0), u = 1);
var nt = n(i),
l, ut, d = 0,
w, y = i.p.multiselect === !0 ? 1 : 0,
b = 0,
lt, v = i.p.rownumbers === !0 ? 1 : 0,
k, g = [],
it, s = {},
a, h, c = [],
ri = i.p.altRows === !0 ? " " + i.p.altclass : "",
at;
i.p.subGrid === !0 && (b = 1, lt = n.jgrid.getMethod("addSubGridCell")), o.repeatitems || (g = ii(ot)), k = i.p.keyIndex === !1 ? n.isFunction(o.id) ? o.id.call(i, t) : o.id : i.p.keyIndex, g.length > 0 && !isNaN(k) && (i.p.remapColumns && i.p.remapColumns.length && (k = n.inArray(k, i.p.remapColumns)), k = g[k]), ot = ("" + k).indexOf("[") === -1 ? g.length ? function (t, i) {
return n(k, t).text() || i
} : function (t, i) {
return n(o.cell, t).eq(k).text() || i
} : function (n, t) {
return n.getAttribute(k.replace(/[\[\]]/g, "")) || t
}, i.p.userData = {}, i.p.page = n.jgrid.getXmlData(t, o.page) || i.p.page || 0, i.p.lastpage = n.jgrid.getXmlData(t, o.total), i.p.lastpage === void 0 && (i.p.lastpage = 1), i.p.records = n.jgrid.getXmlData(t, o.records) || 0, n.isFunction(o.userdata) ? i.p.userData = o.userdata.call(i, t) || {} : n.jgrid.getXmlData(t, o.userdata, !0).each(function () {
i.p.userData[this.getAttribute("name")] = n(this).text()
}), t = n.jgrid.getXmlData(t, o.root, !0), (t = n.jgrid.getXmlData(t, o.row, !0)) || (t = []);
var tt = t.length,
p = 0,
st = [],
ht = parseInt(i.p.rowNum, 10),
vt = i.p.scroll ? n.jgrid.randId() : 1;
if (tt > 0 && i.p.page <= 0 && (i.p.page = 1), t && tt)
for (e && (ht = ht * (e + 1)), e = n.isFunction(i.p.afterInsertRow), ct = !1, i.p.grouping && (ct = i.p.groupingView.groupCollapse === !0, pt = n.jgrid.getMethod("groupingPrepare")) ; p < tt;) {
if (a = t[p], h = ot(a, vt + p), h = i.p.idPrefix + h, l = u === 0 ? 0 : u + 1, at = (l + p) % 2 == 1 ? ri : "", bt = c.length, c.push(""), v && c.push(ti(0, p, i.p.page, i.p.rowNum)), y && c.push(ni(h, v, p, !1)), b && c.push(lt.call(nt, y + v, p + u)), o.repeatitems) it || (it = et(y + b + v)), kt = n.jgrid.getXmlData(a, o.cell, !0), n.each(it, function (n) {
var t = kt[this];
if (!t) return !1;
w = t.textContent || t.text, s[i.p.colModel[n + y + b + v].name] = w, c.push(yt(h, w, n + y + b + v, p + u, a, s))
});
else
for (l = 0; l < g.length; l++) w = n.jgrid.getXmlData(a, g[l]), s[i.p.colModel[l + y + b + v].name] = w, c.push(yt(h, w, l + y + b + v, p + u, a, s));
if (c[bt] = wt(h, ct, at, s, a, !1), c.push("<\/tr>"), i.p.grouping && (st = pt.call(nt, c, st, s, p), c = []), (ft || i.p.treeGrid === !0) && (s._id_ = h, i.p.data.push(s), i.p._index[h] = i.p.data.length - 1), i.p.gridview === !1 && (n("tbody:first", r).append(c.join("")), nt.triggerHandler("jqGridAfterInsertRow", [h, s, a]), e && i.p.afterInsertRow.call(i, h, s, a), c = []), s = {}, d++, p++, d == ht) break
}
if (i.p.gridview === !0 && (ut = i.p.treeANode > -1 ? i.p.treeANode : 0, i.p.grouping ? (nt.jqGrid("groupingRender", st, i.p.colModel.length), st = null) : i.p.treeGrid === !0 && ut > 0 ? n(i.rows[ut]).after(c.join("")) : n("tbody:first", r).append(c.join(""))), i.p.subGrid === !0) try {
nt.jqGrid("addSubGrid", y + v)
} catch (ui) { }
if (i.p.totaltime = new Date - gt, d > 0 && i.p.records === 0 && (i.p.records = tt), c = null, i.p.treeGrid === !0) try {
nt.jqGrid("setTreeNode", ut + 1, d + ut + 1)
} catch (fi) { }
if (i.p.treeGrid || i.p.scroll || (i.grid.bDiv.scrollTop = 0), i.p.reccount = d, i.p.treeANode = -1, i.p.userDataOnFooter && nt.jqGrid("footerData", "set", i.p.userData, !0), ft && (i.p.records = tt, i.p.lastpage = Math.ceil(tt / ht)), f || i.updatepager(!1, !0), ft)
for (; d < tt;) {
if (a = t[d], h = ot(a, d + vt), h = i.p.idPrefix + h, o.repeatitems) it || (it = et(y + b + v)), dt = n.jgrid.getXmlData(a, o.cell, !0), n.each(it, function (n) {
var t = dt[this];
if (!t) return !1;
w = t.textContent || t.text, s[i.p.colModel[n + y + b + v].name] = w
});
else
for (l = 0; l < g.length; l++) w = n.jgrid.getXmlData(a, g[l]), s[i.p.colModel[l + y + b + v].name] = w;
s._id_ = h, i.p.data.push(s), i.p._index[h] = i.p.data.length - 1, s = {}, d++
}
}
},
ot = function (t, r, u, f, e) {
var s, c, tt, bt;
if (r = new Date, t) {
i.p.treeANode !== -1 || i.p.scroll ? u = u > 1 ? u : 1 : (rt.call(i, !1, !0), u = 1), tt = i.p.datatype != "local" && i.p.loadonce || i.p.datatype == "jsonstring", tt && (i.p.data = [], i.p._index = {}, i.p.localReader.id = "_id_"), i.p.reccount = 0, i.p.datatype == "local" ? (s = i.p.localReader, c = "local") : (s = i.p.jsonReader, c = "json");
var d = n(i),
v = 0,
y, a, it = [],
w, k = i.p.multiselect ? 1 : 0,
g = 0,
ht, b = i.p.rownumbers === !0 ? 1 : 0,
p, nt, l = {},
ut, o, h = [],
kt = i.p.altRows === !0 ? " " + i.p.altclass : "",
ct;
i.p.page = n.jgrid.getAccessor(t, s.page) || i.p.page || 0, p = n.jgrid.getAccessor(t, s.total), i.p.subGrid === !0 && (g = 1, ht = n.jgrid.getMethod("addSubGridCell")), i.p.lastpage = p === void 0 ? 1 : p, i.p.records = n.jgrid.getAccessor(t, s.records) || 0, i.p.userData = n.jgrid.getAccessor(t, s.userdata) || {}, s.repeatitems || (w = it = ii(c)), c = i.p.keyIndex === !1 ? n.isFunction(s.id) ? s.id.call(i, t) : s.id : i.p.keyIndex, it.length > 0 && !isNaN(c) && (i.p.remapColumns && i.p.remapColumns.length && (c = n.inArray(c, i.p.remapColumns)), c = it[c]), (nt = n.jgrid.getAccessor(t, s.root)) || (nt = []), p = nt.length, t = 0, p > 0 && i.p.page <= 0 && (i.p.page = 1);
var ft = parseInt(i.p.rowNum, 10),
lt = i.p.scroll ? n.jgrid.randId() : 1,
at = !1,
ot;
e && (ft = ft * (e + 1)), i.p.datatype !== "local" || i.p.deselectAfterSort || (at = !0);
var dt = n.isFunction(i.p.afterInsertRow),
st = [],
vt = !1,
pt;
for (i.p.grouping && (vt = i.p.groupingView.groupCollapse === !0, pt = n.jgrid.getMethod("groupingPrepare")) ; t < p;) {
for (e = nt[t], o = n.jgrid.getAccessor(e, c), o === void 0 && (o = lt + t, it.length === 0 && s.cell && (y = n.jgrid.getAccessor(e, s.cell), o = y !== void 0 ? y[c] || o : o)), o = i.p.idPrefix + o, y = u === 1 ? 0 : u, ct = (y + t) % 2 == 1 ? kt : "", at && (ot = i.p.multiselect ? n.inArray(o, i.p.selarrrow) !== -1 : o === i.p.selrow), bt = h.length, h.push(""), b && h.push(ti(0, t, i.p.page, i.p.rowNum)), k && h.push(ni(o, b, t, ot)), g && h.push(ht.call(d, k + b, t + u)), s.repeatitems && (s.cell && (e = n.jgrid.getAccessor(e, s.cell)), w || (w = et(k + g + b))), a = 0; a < w.length; a++) y = n.jgrid.getAccessor(e, w[a]), l[i.p.colModel[a + k + g + b].name] = y, h.push(yt(o, y, a + k + g + b, t + u, e, l));
if (h[bt] = wt(o, vt, ct, l, e, ot), h.push("<\/tr>"), i.p.grouping && (st = pt.call(d, h, st, l, t), h = []), (tt || i.p.treeGrid === !0) && (l._id_ = o, i.p.data.push(l), i.p._index[o] = i.p.data.length - 1), i.p.gridview === !1 && (n("#" + n.jgrid.jqID(i.p.id) + " tbody:first").append(h.join("")), d.triggerHandler("jqGridAfterInsertRow", [o, l, e]), dt && i.p.afterInsertRow.call(i, o, l, e), h = []), l = {}, v++, t++, v == ft) break
}
if (i.p.gridview === !0 && (ut = i.p.treeANode > -1 ? i.p.treeANode : 0, i.p.grouping ? d.jqGrid("groupingRender", st, i.p.colModel.length) : i.p.treeGrid === !0 && ut > 0 ? n(i.rows[ut]).after(h.join("")) : n("#" + n.jgrid.jqID(i.p.id) + " tbody:first").append(h.join(""))), i.p.subGrid === !0) try {
d.jqGrid("addSubGrid", k + b)
} catch (gt) { }
if (i.p.totaltime = new Date - r, v > 0 && i.p.records === 0 && (i.p.records = p), i.p.treeGrid === !0) try {
d.jqGrid("setTreeNode", ut + 1, v + ut + 1)
} catch (ri) { }
if (i.p.treeGrid || i.p.scroll || (i.grid.bDiv.scrollTop = 0), i.p.reccount = v, i.p.treeANode = -1, i.p.userDataOnFooter && d.jqGrid("footerData", "set", i.p.userData, !0), tt && (i.p.records = p, i.p.lastpage = Math.ceil(p / ft)), f || i.updatepager(!1, !0), tt)
for (; v < p && nt[v];) {
if (e = nt[v], o = n.jgrid.getAccessor(e, c), o === void 0 && (o = lt + v, it.length === 0 && s.cell && (o = n.jgrid.getAccessor(e, s.cell)[c] || o)), e) {
for (o = i.p.idPrefix + o, s.repeatitems && (s.cell && (e = n.jgrid.getAccessor(e, s.cell)), w || (w = et(k + g + b))), a = 0; a < w.length; a++) y = n.jgrid.getAccessor(e, w[a]), l[i.p.colModel[a + k + g + b].name] = y;
l._id_ = o, i.p.data.push(l), i.p._index[o] = i.p.data.length - 1, l = {}
}
v++
}
}
},
si = function () {
function k(n) {
var f = 0,
i, o, s, e, r;
if (n.groups != null) {
for ((o = n.groups.length && n.groupOp.toString().toUpperCase() === "OR") && t.orBegin(), i = 0; i < n.groups.length; i++) {
f > 0 && o && t.or();
try {
k(n.groups[i])
} catch (h) {
alert(h)
}
f++
}
o && t.orEnd()
}
if (n.rules != null) try {
for ((s = n.rules.length && n.groupOp.toString().toUpperCase() === "OR") && t.orBegin(), i = 0; i < n.rules.length; i++) r = n.rules[i], e = n.groupOp.toString().toUpperCase(), c[r.op] && r.field && (f > 0 && e && e === "OR" && (t = t.or()), t = c[r.op](t, e)(r.field, r.data, u[r.field])), f++;
s && t.orEnd()
} catch (l) {
alert(l)
}
}
var e, l = !1,
u = {},
a = [],
d = [],
v, s, y, h, p, r, c, t, f;
if (n.isArray(i.p.data))
if (h = i.p.grouping ? i.p.groupingView : !1, n.each(i.p.colModel, function () {
if (s = this.sorttype || "text", s == "date" || s == "datetime" ? (this.formatter && typeof this.formatter == "string" && this.formatter == "date" ? (v = this.formatoptions && this.formatoptions.srcformat ? this.formatoptions.srcformat : n.jgrid.formatter.date.srcformat, y = this.formatoptions && this.formatoptions.newformat ? this.formatoptions.newformat : n.jgrid.formatter.date.newformat) : v = y = this.datefmt || "Y-m-d", u[this.name] = {
stype: s,
srcfmt: v,
newfmt: y
}) : u[this.name] = {
stype: s,
srcfmt: "",
newfmt: ""
}, i.p.grouping)
for (r = 0, p = h.groupField.length; r < p; r++)
if (this.name == h.groupField[r]) {
var t = this.name;
this.index && (t = this.index), a[r] = u[t], d[r] = t
}
l || this.index != i.p.sortname && this.name != i.p.sortname || (e = this.name, l = !0)
}), i.p.treeGrid) n(i).jqGrid("SortTree", e, i.p.sortorder, u[e].stype, u[e].srcfmt);
else {
if (c = {
eq: function (n) {
return n.equals
},
ne: function (n) {
return n.notEquals
},
lt: function (n) {
return n.less
},
le: function (n) {
return n.lessOrEquals
},
gt: function (n) {
return n.greater
},
ge: function (n) {
return n.greaterOrEquals
},
cn: function (n) {
return n.contains
},
nc: function (n, t) {
return t === "OR" ? n.orNot().contains : n.andNot().contains
},
bw: function (n) {
return n.startsWith
},
bn: function (n, t) {
return t === "OR" ? n.orNot().startsWith : n.andNot().startsWith
},
en: function (n, t) {
return t === "OR" ? n.orNot().endsWith : n.andNot().endsWith
},
ew: function (n) {
return n.endsWith
},
ni: function (n, t) {
return t === "OR" ? n.orNot().equals : n.andNot().equals
},
"in": function (n) {
return n.equals
},
nu: function (n) {
return n.isNull
},
nn: function (n, t) {
return t === "OR" ? n.orNot().isNull : n.andNot().isNull
}
}, t = n.jgrid.from(i.p.data), i.p.ignoreCase && (t = t.ignoreCase()), i.p.search === !0)
if (f = i.p.postData.filters, f) typeof f == "string" && (f = n.jgrid.parse(f)), k(f);
else try {
t = c[i.p.postData.searchOper](t)(i.p.postData.searchField, i.p.postData.searchString, u[i.p.postData.searchField])
} catch (tt) { }
if (i.p.grouping)
for (r = 0; r < p; r++) t.orderBy(d[r], h.groupOrder[r], a[r].stype, a[r].srcfmt);
e && i.p.sortorder && l && (i.p.sortorder.toUpperCase() == "DESC" ? t.orderBy(i.p.sortname, "d", u[e].stype, u[e].srcfmt) : t.orderBy(i.p.sortname, "a", u[e].stype, u[e].srcfmt));
var f = t.select(),
w = parseInt(i.p.rowNum, 10),
g = f.length,
b = parseInt(i.p.page, 10),
nt = Math.ceil(g / w),
o = {},
f = f.slice((b - 1) * w, b * w),
u = t = null;
return o[i.p.localReader.total] = nt, o[i.p.localReader.page] = b, o[i.p.localReader.records] = g, o[i.p.localReader.root] = f, o[i.p.localReader.userdata] = i.p.userData, f = null, o
}
},
st = function () {
if (i.grid.hDiv.loading = !0, !i.p.hiddengrid) switch (i.p.loadui) {
case "enable":
n("#load_" + n.jgrid.jqID(i.p.id)).show();
break;
case "block":
n("#lui_" + n.jgrid.jqID(i.p.id)).show(), n("#load_" + n.jgrid.jqID(i.p.id)).show()
}
},
k = function () {
i.grid.hDiv.loading = !1;
switch (i.p.loadui) {
case "enable":
n("#load_" + n.jgrid.jqID(i.p.id)).hide();
break;
case "block":
n("#lui_" + n.jgrid.jqID(i.p.id)).hide(), n("#load_" + n.jgrid.jqID(i.p.id)).hide()
}
},
y = function (t) {
var c, e, l, a, v, r;
if (!i.grid.hDiv.loading) {
var p = i.p.scroll && t === !1,
r = {},
o, u = i.p.prmNames;
i.p.page <= 0 && (i.p.page = 1), u.search !== null && (r[u.search] = i.p.search), u.nd !== null && (r[u.nd] = (new Date).getTime()), u.rows !== null && (r[u.rows] = i.p.rowNum), u.page !== null && (r[u.page] = i.p.page), u.sort !== null && (r[u.sort] = i.p.sortname), u.order !== null && (r[u.order] = i.p.sortorder), i.p.rowTotal !== null && u.totalrows !== null && (r[u.totalrows] = i.p.rowTotal);
var s = n.isFunction(i.p.loadComplete),
f = s ? i.p.loadComplete : null,
h = 0,
t = t || 1;
if (t > 1 ? u.npage !== null ? (r[u.npage] = t, h = t - 1, t = 1) : f = function (n) {
i.p.page++, i.grid.hDiv.loading = !1, s && i.p.loadComplete.call(i, n), y(t - 1)
} : u.npage !== null && delete i.p.postData[u.npage], i.p.grouping) {
for (n(i).jqGrid("groupingSetup"), c = i.p.groupingView, l = "", e = 0; e < c.groupField.length; e++) a = c.groupField[e], n.each(i.p.colModel, function (n, t) {
t.name == a && t.index && (a = t.index)
}), l = l + (a + " " + c.groupOrder[e] + ", ");
r[u.sort] = l + r[u.sort]
}
if (n.extend(i.p.postData, r), v = i.p.scroll ? i.rows.length - 1 : 1, r = n(i).triggerHandler("jqGridBeforeRequest"), !(r === !1 || r === "stop"))
if (n.isFunction(i.p.datatype)) i.p.datatype.call(i, i.p.postData, "load_" + i.p.id);
else {
if (n.isFunction(i.p.beforeRequest) && (r = i.p.beforeRequest.call(i), r === void 0 && (r = !0), r === !1)) return;
o = i.p.datatype.toLowerCase();
switch (o) {
case "json":
case "jsonp":
case "xml":
case "script":
n.ajax(n.extend({
url: i.p.url,
type: i.p.mtype,
dataType: o,
data: n.isFunction(i.p.serializeGridData) ? i.p.serializeGridData.call(i, i.p.postData) : i.p.postData,
success: function (r, u, e) {
n.isFunction(i.p.beforeProcessing) && i.p.beforeProcessing.call(i, r, u, e) === !1 ? k() : (o === "xml" ? bt(r, i.grid.bDiv, v, t > 1, h) : ot(r, i.grid.bDiv, v, t > 1, h), n(i).triggerHandler("jqGridLoadComplete", [r]), f && f.call(i, r), n(i).triggerHandler("jqGridAfterLoadComplete", [r]), p && i.grid.populateVisible(), (i.p.loadonce || i.p.treeGrid) && (i.p.datatype = "local"), t === 1 && k())
},
error: function (r, u, f) {
n.isFunction(i.p.loadError) && i.p.loadError.call(i, r, u, f), t === 1 && k()
},
beforeSend: function (t, r) {
var u = !0;
if (n.isFunction(i.p.loadBeforeSend) && (u = i.p.loadBeforeSend.call(i, t, r)), u === void 0 && (u = !0), u === !1) return !1;
st()
}
}, n.jgrid.ajaxOptions, i.p.ajaxGridOptions));
break;
case "xmlstring":
st(), r = n.jgrid.stringToDoc(i.p.datastr), bt(r, i.grid.bDiv), n(i).triggerHandler("jqGridLoadComplete", [r]), s && i.p.loadComplete.call(i, r), n(i).triggerHandler("jqGridAfterLoadComplete", [r]), i.p.datatype = "local", i.p.datastr = null, k();
break;
case "jsonstring":
st(), r = typeof i.p.datastr == "string" ? n.jgrid.parse(i.p.datastr) : i.p.datastr, ot(r, i.grid.bDiv), n(i).triggerHandler("jqGridLoadComplete", [r]), s && i.p.loadComplete.call(i, r), n(i).triggerHandler("jqGridAfterLoadComplete", [r]), i.p.datatype = "local", i.p.datastr = null, k();
break;
case "local":
case "clientside":
st(), i.p.datatype = "local", r = si(), ot(r, i.grid.bDiv, v, t > 1, h), n(i).triggerHandler("jqGridLoadComplete", [r]), f && f.call(i, r), n(i).triggerHandler("jqGridAfterLoadComplete", [r]), p && i.grid.populateVisible(), k()
}
}
}
},
ht = function (t) {
n("#cb_" + n.jgrid.jqID(i.p.id), i.grid.hDiv)[i.p.useProp ? "prop" : "attr"]("checked", t), i.p.frozenColumns && i.p.id + "_frozen" && n("#cb_" + n.jgrid.jqID(i.p.id), i.grid.fhDiv)[i.p.useProp ? "prop" : "attr"]("checked", t)
},
ri = function (t, r) {
var h = "",
u = "<table cellspacing='0' cellpadding='0' border='0' style='table-layout:auto;' class='ui-pg-table'><tbody><tr>",
e = "",
s, f, l, a, c = function (t) {
var r;
return n.isFunction(i.p.onPaging) && (r = i.p.onPaging.call(i, t)), i.p.selrow = null, i.p.multiselect && (i.p.selarrrow = [], ht(!1)), i.p.savedRow = [], r == "stop" ? !1 : !0
},
t = t.substr(1),
r = r + ("_" + t);
if (s = "pg_" + t, f = t + "_left", l = t + "_center", a = t + "_right", n("#" + n.jgrid.jqID(t)).append("<div id='" + s + "' class='ui-pager-control' role='group'><table cellspacing='0' cellpadding='0' border='0' class='ui-pg-table' style='width:100%;table-layout:fixed;height:100%;' role='row'><tbody><tr><td id='" + f + "' align='left'><\/td><td id='" + l + "' align='center' style='white-space:pre;'><\/td><td id='" + a + "' align='right'><\/td><\/tr><\/tbody><\/table><\/div>").attr("dir", "ltr"), i.p.rowList.length > 0) {
for (e = "<td dir='" + o + "'>", e = e + "<select class='ui-pg-selbox' role='listbox'>", f = 0; f < i.p.rowList.length; f++) e = e + ('<option role="option" value="' + i.p.rowList[f] + '"' + (i.p.rowNum == i.p.rowList[f] ? ' selected="selected"' : "") + ">" + i.p.rowList[f] + "<\/option>");
e = e + "<\/select><\/td>"
}
o == "rtl" && (u = u + e), i.p.pginput === !0 && (h = "<td dir='" + o + "'>" + n.jgrid.format(i.p.pgtext || "", "<input class='ui-pg-input' type='text' size='2' maxlength='7' value='0' role='textbox'/>", "<span id='sp_1_" + n.jgrid.jqID(t) + "'><\/span>") + "<\/td>"), i.p.pgbuttons === !0 ? (f = ["first" + r, "prev" + r, "next" + r, "last" + r], o == "rtl" && f.reverse(), u = u + ("<td id='" + f[0] + "' class='ui-pg-button ui-corner-all'><span class='ui-icon ui-icon-seek-first'><\/span><\/td>"), u = u + ("<td id='" + f[1] + "' class='ui-pg-button ui-corner-all'><span class='ui-icon ui-icon-seek-prev'><\/span><\/td>"), u = u + (h !== "" ? "<td class='ui-pg-button ui-state-disabled' style='width:4px;'><span class='ui-separator'><\/span><\/td>" + h + "<td class='ui-pg-button ui-state-disabled' style='width:4px;'><span class='ui-separator'><\/span><\/td>" : "") + ("<td id='" + f[2] + "' class='ui-pg-button ui-corner-all'><span class='ui-icon ui-icon-seek-next'><\/span><\/td>"), u = u + ("<td id='" + f[3] + "' class='ui-pg-button ui-corner-all'><span class='ui-icon ui-icon-seek-end'><\/span><\/td>")) : h !== "" && (u = u + h), o == "ltr" && (u = u + e), u = u + "<\/tr><\/tbody><\/table>", i.p.viewrecords === !0 && n("td#" + t + "_" + i.p.recordpos, "#" + s).append("<div dir='" + o + "' style='text-align:" + i.p.recordpos + "' class='ui-paging-info'><\/div>"), n("td#" + t + "_" + i.p.pagerpos, "#" + s).append(u), e = n(".ui-jqgrid").css("font-size") || "11px", n(document.body).append("<div id='testpg' class='ui-jqgrid ui-widget ui-widget-content' style='font-size:" + e + ";visibility:hidden;' ><\/div>"), u = n(u).clone().appendTo("#testpg").width(), n("#testpg").remove(), u > 0 && (h !== "" && (u = u + 50), n("td#" + t + "_" + i.p.pagerpos, "#" + s).width(u)), i.p._nvtd = [], i.p._nvtd[0] = u ? Math.floor((i.p.width - u) / 2) : Math.floor(i.p.width / 3), i.p._nvtd[1] = 0, u = null, n(".ui-pg-selbox", "#" + s).bind("change", function () {
return c("records") ? (i.p.page = Math.round(i.p.rowNum * (i.p.page - 1) / this.value - .5) + 1, i.p.rowNum = this.value, i.p.pager && n(".ui-pg-selbox", i.p.pager).val(this.value), i.p.toppager && n(".ui-pg-selbox", i.p.toppager).val(this.value), y(), !1) : !1
}), i.p.pgbuttons === !0 && (n(".ui-pg-button", "#" + s).hover(function () {
n(this).hasClass("ui-state-disabled") ? this.style.cursor = "default" : (n(this).addClass("ui-state-hover"), this.style.cursor = "pointer")
}, function () {
n(this).hasClass("ui-state-disabled") || (n(this).removeClass("ui-state-hover"), this.style.cursor = "default")
}), n("#first" + n.jgrid.jqID(r) + ", #prev" + n.jgrid.jqID(r) + ", #next" + n.jgrid.jqID(r) + ", #last" + n.jgrid.jqID(r)).click(function () {
var n = p(i.p.page, 1),
t = p(i.p.lastpage, 1),
u = !1,
o = !0,
s = !0,
f = !0,
e = !0;
return (t === 0 || t === 1 ? e = f = s = o = !1 : t > 1 && n >= 1 ? n === 1 ? s = o = !1 : n === t && (e = f = !1) : t > 1 && n === 0 && (e = f = !1, n = t - 1), !c(this.id)) ? !1 : (this.id === "first" + r && o && (i.p.page = 1, u = !0), this.id === "prev" + r && s && (i.p.page = n - 1, u = !0), this.id === "next" + r && f && (i.p.page = n + 1, u = !0), this.id === "last" + r && e && (i.p.page = t, u = !0), u && y(), !1)
})), i.p.pginput === !0 && n("input.ui-pg-input", "#" + s).keypress(function (t) {
return (t.charCode || t.keyCode || 0) == 13 ? c("user") ? (i.p.page = n(this).val() > 0 ? n(this).val() : i.p.page, y(), !1) : !1 : this
})
},
ui = function (t, r, u, f) {
if (i.p.colModel[r].sortable && !(i.p.savedRow.length > 0)) {
if (u || (i.p.lastsort == r ? i.p.sortorder == "asc" ? i.p.sortorder = "desc" : i.p.sortorder == "desc" && (i.p.sortorder = "asc") : i.p.sortorder = i.p.colModel[r].firstsortorder || "asc", i.p.page = 1), f) {
if (i.p.lastsort == r && i.p.sortorder == f && !u) return;
i.p.sortorder = f
}
u = i.grid.headers[i.p.lastsort].el, f = i.grid.headers[r].el, n("span.ui-grid-ico-sort", u).addClass("ui-state-disabled"), n(u).attr("aria-selected", "false"), n("span.ui-icon-" + i.p.sortorder, f).removeClass("ui-state-disabled"), n(f).attr("aria-selected", "true"), i.p.viewsortcols[0] || i.p.lastsort == r || (n("span.s-ico", u).hide(), n("span.s-ico", f).show()), t = t.substring(5 + i.p.id.length + 1), i.p.sortname = i.p.colModel[r].index || t, u = i.p.sortorder, n(i).triggerHandler("jqGridSortCol", [t, r, u]) === "stop" ? i.p.lastsort = r : n.isFunction(i.p.onSortCol) && i.p.onSortCol.call(i, t, r, u) == "stop" ? i.p.lastsort = r : (i.p.datatype == "local" ? i.p.deselectAfterSort && n(i).jqGrid("resetSelection") : (i.p.selrow = null, i.p.multiselect && ht(!1), i.p.selarrrow = [], i.p.savedRow = []), i.p.scroll && (u = i.grid.bDiv.scrollLeft, rt.call(i, !0, !1), i.grid.hDiv.scrollLeft = u), i.p.subGrid && i.p.datatype == "local" && n("td.sgexpanded", "#" + n.jgrid.jqID(i.p.id)).each(function () {
n(this).trigger("click")
}), y(), i.p.lastsort = r, i.p.sortname != t && r && (i.p.lastsort = r))
}
},
hi = function (t) {
for (var r = [0], f = n.jgrid.cell_width ? 0 : i.p.cellLayout, u = 0; u <= t; u++) i.p.colModel[u].hidden === !1 && (r[0] = r[0] + (i.p.colModel[u].width + f));
return i.p.direction == "rtl" && (r[0] = i.p.width - r[0]), r[0] = r[0] - i.grid.bDiv.scrollLeft, r.push(n(i.grid.hDiv).position().top), r.push(n(i.grid.bDiv).offset().top - n(i.grid.hDiv).offset().top + n(i.grid.bDiv).height()), r
},
fi = function (t) {
for (var u = i.grid.headers, f = n.jgrid.getCellIndex(t), r = 0; r < u.length; r++)
if (t === u[r].el) {
f = r;
break
}
return f
};
for (this.p.id = this.id, -1 == n.inArray(i.p.multikey, ["shiftKey", "altKey", "ctrlKey"]) && (i.p.multikey = !1), i.p.keyIndex = !1, f = 0; f < i.p.colModel.length; f++) i.p.colModel[f] = n.extend(!0, {}, i.p.cmTemplate, i.p.colModel[f].template || {}, i.p.colModel[f]), !1 === i.p.keyIndex && !0 === i.p.colModel[f].key && (i.p.keyIndex = f);
if (i.p.sortorder = i.p.sortorder.toLowerCase(), n.jgrid.cell_width = n.jgrid.cellWidth(), !0 === i.p.grouping && (i.p.scroll = !1, i.p.rownumbers = !1, i.p.treeGrid = !1, i.p.gridview = !0), !0 === this.p.treeGrid) {
try {
n(this).jqGrid("setTreeGrid")
} catch (ci) { }
"local" != i.p.datatype && (i.p.localReader = {
id: "_id_"
})
}
if (this.p.subGrid) try {
n(i).jqGrid("setSubGrid")
} catch (li) { }
if (this.p.multiselect && (this.p.colNames.unshift("<input role='checkbox' id='cb_" + this.p.id + "' class='cbox' type='checkbox'/>"), this.p.colModel.unshift({
name: "cb",
width: n.jgrid.cell_width ? i.p.multiselectWidth + i.p.cellLayout : i.p.multiselectWidth,
sortable: !1,
resizable: !1,
hidedlg: !0,
search: !1,
align: "center",
fixed: !0
})), this.p.rownumbers && (this.p.colNames.unshift(""), this.p.colModel.unshift({
name: "rn",
width: i.p.rownumWidth,
sortable: !1,
resizable: !1,
hidedlg: !0,
search: !1,
align: "center",
fixed: !0
})), i.p.xmlReader = n.extend(!0, {
root: "rows",
row: "row",
page: "rows>page",
total: "rows>total",
records: "rows>records",
repeatitems: !0,
cell: "cell",
id: "[id]",
userdata: "userdata",
subgrid: {
root: "rows",
row: "row",
repeatitems: !0,
cell: "cell"
}
}, i.p.xmlReader), i.p.jsonReader = n.extend(!0, {
root: "rows",
page: "page",
total: "total",
records: "records",
repeatitems: !0,
cell: "cell",
id: "id",
userdata: "userdata",
subgrid: {
root: "rows",
repeatitems: !0,
cell: "cell"
}
}, i.p.jsonReader), i.p.localReader = n.extend(!0, {
root: "rows",
page: "page",
total: "total",
records: "records",
repeatitems: !1,
cell: "cell",
id: "id",
userdata: "userdata",
subgrid: {
root: "rows",
repeatitems: !0,
cell: "cell"
}
}, i.p.localReader), i.p.scroll && (i.p.pgbuttons = !1, i.p.pginput = !1, i.p.rowList = []), i.p.data.length && pt(), l = "<thead><tr class='ui-jqgrid-labels' role='rowheader'>", w = d = "", !0 === i.p.shrinkToFit && !0 === i.p.forceFit)
for (f = i.p.colModel.length - 1; 0 <= f; f--)
if (!i.p.colModel[f].hidden) {
i.p.colModel[f].resizable = !1;
break
}
for ("horizontal" == i.p.viewsortcols[1] && (d = " ui-i-asc", w = " ui-i-desc"), ei = ft ? "class='ui-th-div-ie'" : "", d = "<span class='s-ico' style='display:none'><span sort='asc' class='ui-grid-ico-sort ui-icon-asc" + d + " ui-state-disabled ui-icon ui-icon-triangle-1-n ui-sort-" + o + "'><\/span>" + ("<span sort='desc' class='ui-grid-ico-sort ui-icon-desc" + w + " ui-state-disabled ui-icon ui-icon-triangle-1-s ui-sort-" + o + "'><\/span><\/span>"), f = 0; f < this.p.colNames.length; f++) w = i.p.headertitles ? ' title="' + n.jgrid.stripHtml(i.p.colNames[f]) + '"' : "", l += "<th id='" + i.p.id + "_" + i.p.colModel[f].name + "' role='columnheader' class='ui-state-default ui-th-column ui-th-" + o + "'" + w + ">", w = i.p.colModel[f].index || i.p.colModel[f].name, l += "<div id='jqgh_" + i.p.id + "_" + i.p.colModel[f].name + "' " + ei + ">" + i.p.colNames[f], i.p.colModel[f].width = i.p.colModel[f].width ? parseInt(i.p.colModel[f].width, 10) : 150, "boolean" != typeof i.p.colModel[f].title && (i.p.colModel[f].title = !0), w == i.p.sortname && (i.p.lastsort = f), l += d + "<\/div><\/th>";
if (d = null, n(this).append(l + "<\/tr><\/thead>"), n("thead tr:first th", this).hover(function () {
n(this).addClass("ui-state-hover")
}, function () {
n(this).removeClass("ui-state-hover")
}), this.p.multiselect && (ut = [], n("#cb_" + n.jgrid.jqID(i.p.id), this).bind("click", function () {
i.p.selarrrow = [];
var t = i.p.frozenColumns === !0 ? i.p.id + "_frozen" : "";
this.checked ? (n(i.rows).each(function (r) {
r > 0 && !n(this).hasClass("ui-subgrid") && !n(this).hasClass("jqgroup") && !n(this).hasClass("ui-state-disabled") && (n("#jqg_" + n.jgrid.jqID(i.p.id) + "_" + n.jgrid.jqID(this.id))[i.p.useProp ? "prop" : "attr"]("checked", !0), n(this).addClass("ui-state-highlight").attr("aria-selected", "true"), i.p.selarrrow.push(this.id), i.p.selrow = this.id, t && (n("#jqg_" + n.jgrid.jqID(i.p.id) + "_" + n.jgrid.jqID(this.id), i.grid.fbDiv)[i.p.useProp ? "prop" : "attr"]("checked", !0), n("#" + n.jgrid.jqID(this.id), i.grid.fbDiv).addClass("ui-state-highlight")))
}), g = !0, ut = []) : (n(i.rows).each(function (r) {
r > 0 && !n(this).hasClass("ui-subgrid") && !n(this).hasClass("ui-state-disabled") && (n("#jqg_" + n.jgrid.jqID(i.p.id) + "_" + n.jgrid.jqID(this.id))[i.p.useProp ? "prop" : "attr"]("checked", !1), n(this).removeClass("ui-state-highlight").attr("aria-selected", "false"), ut.push(this.id), t && (n("#jqg_" + n.jgrid.jqID(i.p.id) + "_" + n.jgrid.jqID(this.id), i.grid.fbDiv)[i.p.useProp ? "prop" : "attr"]("checked", !1), n("#" + n.jgrid.jqID(this.id), i.grid.fbDiv).removeClass("ui-state-highlight")))
}), i.p.selrow = null, g = !1), n(i).triggerHandler("jqGridSelectAll", [g ? i.p.selarrrow : ut, g]), n.isFunction(i.p.onSelectAll) && i.p.onSelectAll.call(i, g ? i.p.selarrrow : ut, g)
})), !0 === i.p.autowidth && (l = n(b).innerWidth(), i.p.width = 0 < l ? l : "nw"), function () {
var t = 0,
u = n.jgrid.cell_width ? 0 : p(i.p.cellLayout, 0),
f = 0,
o, c = p(i.p.scrollOffset, 0),
s, a = !1,
l, e = 0,
v = 0,
h;
n.each(i.p.colModel, function () {
if (this.hidden === void 0 && (this.hidden = !1), i.p.grouping && i.p.autowidth) {
var r = n.inArray(this.name, i.p.groupingView.groupField);
r !== -1 && (this.hidden = !i.p.groupingView.groupColumnShow[r])
}
this.widthOrg = s = p(this.width, 0), this.hidden === !1 && (t = t + (s + u), this.fixed ? e = e + (s + u) : f++, v++)
}), isNaN(i.p.width) && (i.p.width = t + (i.p.shrinkToFit === !1 && !isNaN(i.p.height) ? c : 0)), r.width = i.p.width, i.p.tblwidth = t, i.p.shrinkToFit === !1 && i.p.forceFit === !0 && (i.p.forceFit = !1), i.p.shrinkToFit === !0 && f > 0 && (l = r.width - u * f - e, isNaN(i.p.height) || (l = l - c, a = !0), t = 0, n.each(i.p.colModel, function (n) {
this.hidden !== !1 || this.fixed || (this.width = s = Math.round(l * this.width / (i.p.tblwidth - u * f - e)), t = t + s, o = n)
}), h = 0, a ? r.width - e - (t + u * f) !== c && (h = r.width - e - (t + u * f) - c) : !a && Math.abs(r.width - e - (t + u * f)) !== 1 && (h = r.width - e - (t + u * f)), i.p.colModel[o].width = i.p.colModel[o].width + h, i.p.tblwidth = t + h + u * f + e, i.p.tblwidth > i.p.width && (i.p.colModel[o].width = i.p.colModel[o].width - (i.p.tblwidth - parseInt(i.p.width, 10)), i.p.tblwidth = i.p.width))
}(), n(b).css("width", r.width + "px").append("<div class='ui-jqgrid-resize-mark' id='rs_m" + i.p.id + "'>&#160;<\/div>"), n(c).css("width", r.width + "px"), l = n("thead:first", i).get(0), nt = "", i.p.footerrow && (nt += "<table role='grid' style='width:" + i.p.tblwidth + "px' class='ui-jqgrid-ftable' cellspacing='0' cellpadding='0' border='0'><tbody><tr role='row' class='ui-widget-content footrow footrow-" + o + "'>"), c = n("tr:first", l), tt = "<tr class='jqgfirstrow' role='row' style='height:auto'>", i.p.disableClick = !1, n("th", c).each(function (t) {
ct = i.p.colModel[t].width, i.p.colModel[t].resizable === void 0 && (i.p.colModel[t].resizable = !0), i.p.colModel[t].resizable ? (lt = document.createElement("span"), n(lt).html("&#160;").addClass("ui-jqgrid-resize ui-jqgrid-resize-" + o).css("cursor", "col-resize"), n(this).addClass(i.p.resizeclass)) : lt = "", n(this).css("width", ct + "px").prepend(lt);
var u = "";
i.p.colModel[t].hidden && (n(this).css("display", "none"), u = "display:none;"), tt = tt + ("<td role='gridcell' style='height:0px;width:" + ct + "px;" + u + "'><\/td>"), r.headers[t] = {
width: ct,
el: this
}, at = i.p.colModel[t].sortable, typeof at != "boolean" && (at = i.p.colModel[t].sortable = !0), u = i.p.colModel[t].name, u == "cb" || u == "subgrid" || u == "rn" || i.p.viewsortcols[2] && n(">div", this).addClass("ui-jqgrid-sortable"), at && (i.p.viewsortcols[0] ? (n("div span.s-ico", this).show(), t == i.p.lastsort && n("div span.ui-icon-" + i.p.sortorder, this).removeClass("ui-state-disabled")) : t == i.p.lastsort && (n("div span.s-ico", this).show(), n("div span.ui-icon-" + i.p.sortorder, this).removeClass("ui-state-disabled"))), i.p.footerrow && (nt = nt + ("<td role='gridcell' " + it(t, 0, "", null, "", !1) + ">&#160;<\/td>"))
}).mousedown(function (t) {
var u, o, e, f;
if (n(t.target).closest("th>span.ui-jqgrid-resize").length == 1) {
if (u = fi(this), i.p.forceFit === !0) {
for (o = i.p, e = u, f = u + 1; f < i.p.colModel.length; f++)
if (i.p.colModel[f].hidden !== !0) {
e = f;
break
}
o.nv = e - u
}
return r.dragStart(u, t, hi(u)), !1
}
}).click(function (t) {
if (i.p.disableClick) return i.p.disableClick = !1;
var r = "th>div.ui-jqgrid-sortable",
u, f;
return i.p.viewsortcols[2] || (r = "th>div>span>span.ui-grid-ico-sort"), t = n(t.target).closest(r), t.length == 1 ? (r = fi(this), i.p.viewsortcols[2] || (u = !0, f = t.attr("sort")), ui(n("div", this)[0].id, r, u, f), !1) : void 0
}), i.p.sortable && n.fn.sortable) try {
n(i).jqGrid("sortableColumns", c)
} catch (ai) { }
i.p.footerrow && (nt += "<\/tr><\/tbody><\/table>"), tt += "<\/tr>", this.appendChild(document.createElement("tbody")), n(this).addClass("ui-jqgrid-btable").append(tt);
var tt = null,
c = n("<table class='ui-jqgrid-htable' style='width:" + i.p.tblwidth + "px' role='grid' aria-labelledby='gbox_" + this.id + "' cellspacing='0' cellpadding='0' border='0'><\/table>").append(l),
a = i.p.caption && !0 === i.p.hiddengrid ? !0 : !1;
f = n("<div class='ui-jqgrid-hbox" + ("rtl" == o ? "-rtl" : "") + "'><\/div>"), l = null, r.hDiv = document.createElement("div"), n(r.hDiv).css({
width: r.width + "px"
}).addClass("ui-state-default ui-jqgrid-hdiv").append(f), n(f).append(c), c = null, a && n(r.hDiv).hide(), i.p.pager && ("string" == typeof i.p.pager ? "#" != i.p.pager.substr(0, 1) && (i.p.pager = "#" + i.p.pager) : i.p.pager = "#" + n(i.p.pager).attr("id"), n(i.p.pager).css({
width: r.width + "px"
}).addClass("ui-state-default ui-jqgrid-pager ui-corner-bottom").appendTo(b), a && n(i.p.pager).hide(), ri(i.p.pager, "")), !1 === i.p.cellEdit && !0 === i.p.hoverrows && n(i).bind("mouseover", function (t) {
e = n(t.target).closest("tr.jqgrow"), n(e).attr("class") !== "ui-subgrid" && n(e).addClass("ui-state-hover")
}).bind("mouseout", function (t) {
e = n(t.target).closest("tr.jqgrow"), n(e).removeClass("ui-state-hover")
}), n(i).before(r.hDiv).click(function (t) {
var r, u, f;
if (s = t.target, e = n(s, i.rows).closest("tr.jqgrow"), n(e).length === 0 || e[0].className.indexOf("ui-state-disabled") > -1 || (n(s, i).closest("table.ui-jqgrid-btable").attr("id") || "").replace("_frozen", "") !== i.id) return this;
if (r = n(s).hasClass("cbox"), u = n(i).triggerHandler("jqGridBeforeSelectRow", [e[0].id, t]), (u = u === !1 || u === "stop" ? !1 : !0) && n.isFunction(i.p.beforeSelectRow) && (u = i.p.beforeSelectRow.call(i, e[0].id, t)), !(s.tagName == "A" || (s.tagName == "INPUT" || s.tagName == "TEXTAREA" || s.tagName == "OPTION" || s.tagName == "SELECT") && !r) && u === !0)
if (h = e[0].id, v = n.jgrid.getCellIndex(s), kt = n(s).closest("td,th").html(), n(i).triggerHandler("jqGridCellSelect", [h, v, kt, t]), n.isFunction(i.p.onCellSelect) && i.p.onCellSelect.call(i, h, v, kt, t), i.p.cellEdit === !0)
if (i.p.multiselect && r) n(i).jqGrid("setSelection", h, !0, t);
else {
h = e[0].rowIndex;
try {
n(i).jqGrid("editCell", h, v, !0)
} catch (o) { }
} else i.p.multikey ? t[i.p.multikey] ? n(i).jqGrid("setSelection", h, !0, t) : i.p.multiselect && r && (r = n("#jqg_" + n.jgrid.jqID(i.p.id) + "_" + h).is(":checked"), n("#jqg_" + n.jgrid.jqID(i.p.id) + "_" + h)[i.p.useProp ? "prop" : "attr"]("checked", r)) : (i.p.multiselect && i.p.multiboxonly && !r && (f = i.p.frozenColumns ? i.p.id + "_frozen" : "", n(i.p.selarrrow).each(function (t, r) {
var u = i.rows.namedItem(r);
n(u).removeClass("ui-state-highlight"), n("#jqg_" + n.jgrid.jqID(i.p.id) + "_" + n.jgrid.jqID(r))[i.p.useProp ? "prop" : "attr"]("checked", !1), f && (n("#" + n.jgrid.jqID(r), "#" + n.jgrid.jqID(f)).removeClass("ui-state-highlight"), n("#jqg_" + n.jgrid.jqID(i.p.id) + "_" + n.jgrid.jqID(r), "#" + n.jgrid.jqID(f))[i.p.useProp ? "prop" : "attr"]("checked", !1))
}), i.p.selarrrow = []), n(i).jqGrid("setSelection", h, !0, t))
}).bind("reloadGrid", function (t, r) {
if (i.p.treeGrid === !0 && (i.p.datatype = i.p.treedatatype), r && r.current && i.grid.selectionPreserver(i), i.p.datatype == "local" ? (n(i).jqGrid("resetSelection"), i.p.data.length && pt()) : i.p.treeGrid || (i.p.selrow = null, i.p.multiselect && (i.p.selarrrow = [], ht(!1)), i.p.savedRow = []), i.p.scroll && rt.call(i, !0, !1), r && r.page) {
var u = r.page;
u > i.p.lastpage && (u = i.p.lastpage), u < 1 && (u = 1), i.p.page = u, i.grid.bDiv.scrollTop = i.grid.prevRowHeight ? (u - 1) * i.grid.prevRowHeight * i.p.rowNum : 0
}
return i.grid.prevRowHeight && i.p.scroll ? (delete i.p.lastpage, i.grid.populateVisible()) : i.grid.populate(), i.p._inlinenav === !0 && n(i).jqGrid("showAddEditButtons"), !1
}).dblclick(function (t) {
s = t.target, e = n(s, i.rows).closest("tr.jqgrow"), n(e).length !== 0 && (h = e[0].rowIndex, v = n.jgrid.getCellIndex(s), n(i).triggerHandler("jqGridDblClickRow", [n(e).attr("id"), h, v, t]), n.isFunction(this.p.ondblClickRow) && i.p.ondblClickRow.call(i, n(e).attr("id"), h, v, t))
}).bind("contextmenu", function (t) {
s = t.target, e = n(s, i.rows).closest("tr.jqgrow"), n(e).length !== 0 && (i.p.multiselect || n(i).jqGrid("setSelection", e[0].id, !0, t), h = e[0].rowIndex, v = n.jgrid.getCellIndex(s), n(i).triggerHandler("jqGridRightClickRow", [n(e).attr("id"), h, v, t]), n.isFunction(this.p.onRightClickRow) && i.p.onRightClickRow.call(i, n(e).attr("id"), h, v, t))
}), r.bDiv = document.createElement("div"), ft && "auto" === ("" + i.p.height).toLowerCase() && (i.p.height = "100%"), n(r.bDiv).append(n('<div style="position:relative;' + (ft && 8 > n.jgrid.msiever() ? "height:0.01%;" : "") + '"><\/div>').append("<div><\/div>").append(this)).addClass("ui-jqgrid-bdiv").css({
height: i.p.height + (isNaN(i.p.height) ? "" : "px"),
width: r.width + "px"
}).scroll(r.scrollGrid), n("table:first", r.bDiv).css({
width: i.p.tblwidth + "px"
}), n.support.tbody || 2 == n("tbody", this).length && n("tbody:gt(0)", this).remove(), i.p.multikey && (n.jgrid.msie ? n(r.bDiv).bind("selectstart", function () {
return !1
}) : n(r.bDiv).bind("mousedown", function () {
return !1
})), a && n(r.bDiv).hide(), r.cDiv = document.createElement("div"), vt = !0 === i.p.hidegrid ? n("<a role='link' href='javascript:void(0)'/>").addClass("ui-jqgrid-titlebar-close HeaderButton").hover(function () {
vt.addClass("ui-state-hover")
}, function () {
vt.removeClass("ui-state-hover")
}).append("<span class='ui-icon ui-icon-circle-triangle-n'><\/span>").css("rtl" == o ? "left" : "right", "0px") : "", n(r.cDiv).append(vt).append("<span class='ui-jqgrid-title" + ("rtl" == o ? "-rtl" : "") + "'>" + i.p.caption + "<\/span>").addClass("ui-jqgrid-titlebar ui-widget-header ui-corner-top ui-helper-clearfix"), n(r.cDiv).insertBefore(r.hDiv), i.p.toolbar[0] && (r.uDiv = document.createElement("div"), "top" == i.p.toolbar[1] ? n(r.uDiv).insertBefore(r.hDiv) : "bottom" == i.p.toolbar[1] && n(r.uDiv).insertAfter(r.hDiv), "both" == i.p.toolbar[1] ? (r.ubDiv = document.createElement("div"), n(r.uDiv).addClass("ui-userdata ui-state-default").attr("id", "t_" + this.id).insertBefore(r.hDiv), n(r.ubDiv).addClass("ui-userdata ui-state-default").attr("id", "tb_" + this.id).insertAfter(r.hDiv), a && n(r.ubDiv).hide()) : n(r.uDiv).width(r.width).addClass("ui-userdata ui-state-default").attr("id", "t_" + this.id), a && n(r.uDiv).hide()), i.p.toppager && (i.p.toppager = n.jgrid.jqID(i.p.id) + "_toppager", r.topDiv = n("<div id='" + i.p.toppager + "'><\/div>")[0], i.p.toppager = "#" + i.p.toppager, n(r.topDiv).addClass("ui-state-default ui-jqgrid-toppager").width(r.width).insertBefore(r.hDiv), ri(i.p.toppager, "_t")), i.p.footerrow && (r.sDiv = n("<div class='ui-jqgrid-sdiv'><\/div>")[0], f = n("<div class='ui-jqgrid-hbox" + ("rtl" == o ? "-rtl" : "") + "'><\/div>"), n(r.sDiv).append(f).width(r.width).insertAfter(r.hDiv), n(f).append(nt), r.footers = n(".ui-jqgrid-ftable", r.sDiv)[0].rows[0].cells, i.p.rownumbers && (r.footers[0].className = "ui-state-default jqgrid-rownum"), a && n(r.sDiv).hide()), f = null, i.p.caption ? (oi = i.p.datatype, !0 === i.p.hidegrid && (n(".ui-jqgrid-titlebar-close", r.cDiv).click(function (t) {
var e = n.isFunction(i.p.onHeaderClick),
u = ".ui-jqgrid-bdiv, .ui-jqgrid-hdiv, .ui-jqgrid-pager, .ui-jqgrid-sdiv",
f, o = this;
return i.p.toolbar[0] === !0 && (i.p.toolbar[1] == "both" && (u = u + (", #" + n(r.ubDiv).attr("id"))), u = u + (", #" + n(r.uDiv).attr("id"))), f = n(u, "#gview_" + n.jgrid.jqID(i.p.id)).length, i.p.gridstate == "visible" ? n(u, "#gbox_" + n.jgrid.jqID(i.p.id)).slideUp("fast", function () {
f--, f === 0 && (n("span", o).removeClass("ui-icon-circle-triangle-n").addClass("ui-icon-circle-triangle-s"), i.p.gridstate = "hidden", n("#gbox_" + n.jgrid.jqID(i.p.id)).hasClass("ui-resizable") && n(".ui-resizable-handle", "#gbox_" + n.jgrid.jqID(i.p.id)).hide(), n(i).triggerHandler("jqGridHeaderClick", [i.p.gridstate, t]), e && (a || i.p.onHeaderClick.call(i, i.p.gridstate, t)))
}) : i.p.gridstate == "hidden" && n(u, "#gbox_" + n.jgrid.jqID(i.p.id)).slideDown("fast", function () {
f--, f === 0 && (n("span", o).removeClass("ui-icon-circle-triangle-s").addClass("ui-icon-circle-triangle-n"), a && (i.p.datatype = oi, y(), a = !1), i.p.gridstate = "visible", n("#gbox_" + n.jgrid.jqID(i.p.id)).hasClass("ui-resizable") && n(".ui-resizable-handle", "#gbox_" + n.jgrid.jqID(i.p.id)).show(), n(i).triggerHandler("jqGridHeaderClick", [i.p.gridstate, t]), e && (a || i.p.onHeaderClick.call(i, i.p.gridstate, t)))
}), !1
}), a && (i.p.datatype = "local", n(".ui-jqgrid-titlebar-close", r.cDiv).trigger("click")))) : n(r.cDiv).hide(), n(r.hDiv).after(r.bDiv).mousemove(function (n) {
if (r.resizing) return r.dragMove(n), !1
}), n(".ui-jqgrid-labels", r.hDiv).bind("selectstart", function () {
return !1
}), n(document).mouseup(function () {
return r.resizing ? (r.dragEnd(), !1) : !0
}), i.formatCol = it, i.sortData = ui, i.updatepager = function (t, r) {
var u, s, f, c, l, v, a, h = "",
e = i.p.pager ? "_" + n.jgrid.jqID(i.p.pager.substr(1)) : "",
o = i.p.toppager ? "_" + i.p.toppager.substr(1) : "";
f = parseInt(i.p.page, 10) - 1, f < 0 && (f = 0), f = f * parseInt(i.p.rowNum, 10), l = f + i.p.reccount, i.p.scroll && (u = n("tbody:first > tr:gt(0)", i.grid.bDiv), f = l - u.length, i.p.reccount = u.length, (s = u.outerHeight() || i.grid.prevRowHeight) && (u = f * s, s = parseInt(i.p.records, 10) * s, n(">div:first", i.grid.bDiv).css({
height: s
}).children("div:first").css({
height: u,
display: u ? "" : "none"
})), i.grid.bDiv.scrollLeft = i.grid.hDiv.scrollLeft), h = i.p.pager || "", (h = h + (i.p.toppager ? h ? "," + i.p.toppager : i.p.toppager : "")) && (a = n.jgrid.formatter.integer || {}, u = p(i.p.page), s = p(i.p.lastpage), n(".selbox", h)[this.p.useProp ? "prop" : "attr"]("disabled", !1), i.p.pginput === !0 && (n(".ui-pg-input", h).val(i.p.page), c = i.p.toppager ? "#sp_1" + e + ",#sp_1" + o : "#sp_1" + e, n(c).html(n.fmatter ? n.fmatter.util.NumberFormat(i.p.lastpage, a) : i.p.lastpage)), i.p.viewrecords && (i.p.reccount === 0 ? n(".ui-paging-info", h).html(i.p.emptyrecords) : (c = f + 1, v = i.p.records, n.fmatter && (c = n.fmatter.util.NumberFormat(c, a), l = n.fmatter.util.NumberFormat(l, a), v = n.fmatter.util.NumberFormat(v, a)), n(".ui-paging-info", h).html(n.jgrid.format(i.p.recordtext, c, l, v)))), i.p.pgbuttons === !0 && (u <= 0 && (u = s = 0), u == 1 || u === 0 ? (n("#first" + e + ", #prev" + e).addClass("ui-state-disabled").removeClass("ui-state-hover"), i.p.toppager && n("#first_t" + o + ", #prev_t" + o).addClass("ui-state-disabled").removeClass("ui-state-hover")) : (n("#first" + e + ", #prev" + e).removeClass("ui-state-disabled"), i.p.toppager && n("#first_t" + o + ", #prev_t" + o).removeClass("ui-state-disabled")), u == s || u === 0 ? (n("#next" + e + ", #last" + e).addClass("ui-state-disabled").removeClass("ui-state-hover"), i.p.toppager && n("#next_t" + o + ", #last_t" + o).addClass("ui-state-disabled").removeClass("ui-state-hover")) : (n("#next" + e + ", #last" + e).removeClass("ui-state-disabled"), i.p.toppager && n("#next_t" + o + ", #last_t" + o).removeClass("ui-state-disabled")))), t === !0 && i.p.rownumbers === !0 && n("td.jqgrid-rownum", i.rows).each(function (t) {
n(this).html(f + 1 + t)
}), r && i.p.jqgdnd && n(i).jqGrid("gridDnD", "updateDnD"), n(i).triggerHandler("jqGridGridComplete"), n.isFunction(i.p.gridComplete) && i.p.gridComplete.call(i), n(i).triggerHandler("jqGridAfterGridComplete")
}, i.refreshIndex = pt, i.setHeadCheckBox = ht, i.constructTr = wt, i.formatter = function (n, t, i, r, u) {
return gt(n, t, i, r, u)
}, n.extend(r, {
populate: y,
emptyRows: rt
}), this.grid = r, i.addXmlData = function (n) {
bt(n, i.grid.bDiv)
}, i.addJSONData = function (n) {
ot(n, i.grid.bDiv)
}, this.grid.cols = this.rows[0].cells, n(i).triggerHandler("jqGridInitGrid"), n.isFunction(i.p.onInitGrid) && i.p.onInitGrid.call(i), y(), i.p.hiddengrid = !1
}
}
}
})
}, n.jgrid.extend({
getGridParam: function (n) {
var t = this[0];
if (t && t.grid) return n ? void 0 !== t.p[n] ? t.p[n] : null : t.p
},
setGridParam: function (t) {
return this.each(function () {
this.grid && "object" == typeof t && n.extend(!0, this.p, t)
})
},
getDataIDs: function () {
var r = [],
t = 0,
i, u = 0;
return this.each(function () {
if ((i = this.rows.length) && 0 < i)
for (; t < i;) n(this.rows[t]).hasClass("jqgrow") && (r[u] = this.rows[t].id, u++), t++
}), r
},
setSelection: function (t, i, r) {
return this.each(function () {
var f, u, h, e, o, s;
void 0 === t || (i = !1 === i ? !1 : !0, !(u = this.rows.namedItem("" + t)) || !u.className || -1 < u.className.indexOf("ui-state-disabled")) || ((!0 === this.p.scrollrows && (h = this.rows.namedItem(t).rowIndex, 0 <= h && (f = n(this.grid.bDiv)[0].clientHeight, e = n(this.grid.bDiv)[0].scrollTop, o = n(this.rows[h]).position().top, h = this.rows[h].clientHeight, o + h >= f + e ? n(this.grid.bDiv)[0].scrollTop = o - (f + e) + h + e : o < f + e && o < e && (n(this.grid.bDiv)[0].scrollTop = o))), !0 === this.p.frozenColumns && (s = this.p.id + "_frozen"), this.p.multiselect) ? (this.setHeadCheckBox(!1), this.p.selrow = u.id, e = n.inArray(this.p.selrow, this.p.selarrrow), -1 === e ? ("ui-subgrid" !== u.className && n(u).addClass("ui-state-highlight").attr("aria-selected", "true"), f = !0, this.p.selarrrow.push(this.p.selrow)) : ("ui-subgrid" !== u.className && n(u).removeClass("ui-state-highlight").attr("aria-selected", "false"), f = !1, this.p.selarrrow.splice(e, 1), o = this.p.selarrrow[0], this.p.selrow = void 0 === o ? null : o), n("#jqg_" + n.jgrid.jqID(this.p.id) + "_" + n.jgrid.jqID(u.id))[this.p.useProp ? "prop" : "attr"]("checked", f), s && (-1 === e ? n("#" + n.jgrid.jqID(t), "#" + n.jgrid.jqID(s)).addClass("ui-state-highlight") : n("#" + n.jgrid.jqID(t), "#" + n.jgrid.jqID(s)).removeClass("ui-state-highlight"), n("#jqg_" + n.jgrid.jqID(this.p.id) + "_" + n.jgrid.jqID(t), "#" + n.jgrid.jqID(s))[this.p.useProp ? "prop" : "attr"]("checked", f)), n(this).triggerHandler("jqGridSelectRow", [u.id, f, r]), this.p.onSelectRow && i && this.p.onSelectRow.call(this, u.id, f, r)) : "ui-subgrid" !== u.className && (this.p.selrow != u.id ? (n(this.rows.namedItem(this.p.selrow)).removeClass("ui-state-highlight").attr({
"aria-selected": "false",
tabindex: "-1"
}), n(u).addClass("ui-state-highlight").attr({
"aria-selected": "true",
tabindex: "0"
}), s && (n("#" + n.jgrid.jqID(this.p.selrow), "#" + n.jgrid.jqID(s)).removeClass("ui-state-highlight"), n("#" + n.jgrid.jqID(t), "#" + n.jgrid.jqID(s)).addClass("ui-state-highlight")), f = !0) : f = !1, this.p.selrow = u.id, n(this).triggerHandler("jqGridSelectRow", [u.id, f, r]), this.p.onSelectRow && i && this.p.onSelectRow.call(this, u.id, f, r)))
})
},
resetSelection: function (t) {
return this.each(function () {
var i = this,
f, u, r;
!0 === i.p.frozenColumns && (r = i.p.id + "_frozen"), void 0 !== t ? (u = t === i.p.selrow ? i.p.selrow : t, n("#" + n.jgrid.jqID(i.p.id) + " tbody:first tr#" + n.jgrid.jqID(u)).removeClass("ui-state-highlight").attr("aria-selected", "false"), r && n("#" + n.jgrid.jqID(u), "#" + n.jgrid.jqID(r)).removeClass("ui-state-highlight"), i.p.multiselect && (n("#jqg_" + n.jgrid.jqID(i.p.id) + "_" + n.jgrid.jqID(u), "#" + n.jgrid.jqID(i.p.id))[i.p.useProp ? "prop" : "attr"]("checked", !1), r && n("#jqg_" + n.jgrid.jqID(i.p.id) + "_" + n.jgrid.jqID(u), "#" + n.jgrid.jqID(r))[i.p.useProp ? "prop" : "attr"]("checked", !1), i.setHeadCheckBox(!1)), u = null) : i.p.multiselect ? (n(i.p.selarrrow).each(function (t, u) {
f = i.rows.namedItem(u), n(f).removeClass("ui-state-highlight").attr("aria-selected", "false"), n("#jqg_" + n.jgrid.jqID(i.p.id) + "_" + n.jgrid.jqID(u))[i.p.useProp ? "prop" : "attr"]("checked", !1), r && (n("#" + n.jgrid.jqID(u), "#" + n.jgrid.jqID(r)).removeClass("ui-state-highlight"), n("#jqg_" + n.jgrid.jqID(i.p.id) + "_" + n.jgrid.jqID(u), "#" + n.jgrid.jqID(r))[i.p.useProp ? "prop" : "attr"]("checked", !1))
}), i.setHeadCheckBox(!1), i.p.selarrrow = []) : i.p.selrow && (n("#" + n.jgrid.jqID(i.p.id) + " tbody:first tr#" + n.jgrid.jqID(i.p.selrow)).removeClass("ui-state-highlight").attr("aria-selected", "false"), r && n("#" + n.jgrid.jqID(i.p.selrow), "#" + n.jgrid.jqID(r)).removeClass("ui-state-highlight"), i.p.selrow = null), !0 === i.p.cellEdit && 0 <= parseInt(i.p.iCol, 10) && 0 <= parseInt(i.p.iRow, 10) && (n("td:eq(" + i.p.iCol + ")", i.rows[i.p.iRow]).removeClass("edit-cell ui-state-highlight"), n(i.rows[i.p.iRow]).removeClass("selected-row ui-state-hover")), i.p.savedRow = []
})
},
getRowData: function (t) {
var i = {},
r, u = !1,
f, e = 0;
return this.each(function () {
var o = this,
s, h;
if (void 0 === t) u = !0, r = [], f = o.rows.length;
else {
if (h = o.rows.namedItem(t), !h) return i;
f = 2
}
for (; e < f;) u && (h = o.rows[e]), n(h).hasClass("jqgrow") && (n('td[role="gridcell"]', h).each(function (t) {
if (s = o.p.colModel[t].name, "cb" !== s && "subgrid" !== s && "rn" !== s)
if (!0 === o.p.treeGrid && s == o.p.ExpandColumn) i[s] = n.jgrid.htmlDecode(n("span:first", this).html());
else try {
i[s] = n.unformat.call(o, this, {
rowId: h.id,
colModel: o.p.colModel[t]
}, t)
} catch (r) {
i[s] = n.jgrid.htmlDecode(n(this).html())
}
}), u && (r.push(i), i = {})), e++
}), r || i
},
delRowData: function (t) {
var i = !1,
r, u;
return this.each(function () {
var f, e;
if (r = this.rows.namedItem(t), !r) return !1;
n(r).remove(), this.p.records--, this.p.reccount--, this.updatepager(!0, !1), i = !0, this.p.multiselect && (u = n.inArray(t, this.p.selarrrow), -1 != u && this.p.selarrrow.splice(u, 1)), this.p.selrow = this.p.multiselect && 0 < this.p.selarrrow.length ? this.p.selarrrow[this.p.selarrrow.length - 1] : null, "local" == this.p.datatype && (f = this.p._index[n.jgrid.stripPref(this.p.idPrefix, t)], void 0 !== f && (this.p.data.splice(f, 1), this.refreshIndex())), !0 === this.p.altRows && i && (e = this.p.altclass, n(this.rows).each(function (t) {
t % 2 == 1 ? n(this).addClass(e) : n(this).removeClass(e)
}))
}), i
},
setRowData: function (t, i, r) {
var u, f = !0,
e;
return this.each(function () {
var y, l, a;
if (!this.grid) return !1;
var o = this,
h, s, v = typeof r,
c = {};
if (s = o.rows.namedItem(t), !s) return !1;
if (i) try {
if (n(this.p.colModel).each(function (r) {
u = this.name, void 0 !== i[u] && (c[u] = this.formatter && "string" == typeof this.formatter && "date" == this.formatter ? n.unformat.date.call(o, i[u], this) : i[u], h = o.formatter(t, i[u], r, i, "edit"), e = this.title ? {
title: n.jgrid.stripHtml(h)
} : {}, !0 === o.p.treeGrid && u == o.p.ExpandColumn ? n("td[role='gridcell']:eq(" + r + ") > span:first", s).html(h).attr(e) : n("td[role='gridcell']:eq(" + r + ")", s).html(h).attr(e))
}), "local" == o.p.datatype) {
if (y = n.jgrid.stripPref(o.p.idPrefix, t), l = o.p._index[y], o.p.treeGrid)
for (a in o.p.treeReader) o.p.treeReader.hasOwnProperty(a) && delete c[o.p.treeReader[a]];
void 0 !== l && (o.p.data[l] = n.extend(!0, o.p.data[l], c)), c = null
}
} catch (p) {
f = !1
}
f && ("string" === v ? n(s).addClass(r) : "object" === v && n(s).css(r), n(o).triggerHandler("jqGridAfterGridComplete"))
}), f
},
addRowData: function (t, i, r, u) {
r || (r = "last");
var d = !1,
w, f, h, b, s, e, c, a, l = "",
v, y, p, o, g, k;
return i && (n.isArray(i) ? (v = !0, r = "last", y = t) : (i = [i], v = !1), this.each(function () {
var rt = i.length;
s = this.p.rownumbers === !0 ? 1 : 0, h = this.p.multiselect === !0 ? 1 : 0, b = this.p.subGrid === !0 ? 1 : 0, v || (t !== void 0 ? t = "" + t : (t = n.jgrid.randId(), this.p.keyIndex !== !1 && (y = this.p.colModel[this.p.keyIndex + h + b + s].name, i[0][y] !== void 0 && (t = i[0][y])))), p = this.p.altclass;
for (var tt = 0, it = "", nt = {}, ut = n.isFunction(this.p.afterInsertRow) ? !0 : !1; tt < rt;) {
if (o = i[tt], f = [], v) {
try {
t = o[y], t === void 0 && (t = n.jgrid.randId())
} catch (ft) {
t = n.jgrid.randId()
}
it = this.p.altRows === !0 ? (this.rows.length - 1) % 2 == 0 ? p : "" : ""
}
for (k = t, t = this.p.idPrefix + t, s && (l = this.formatCol(0, 1, "", null, t, !0), f[f.length] = '<td role="gridcell" class="ui-state-default jqgrid-rownum" ' + l + ">0<\/td>"), h && (a = '<input role="checkbox" type="checkbox" id="jqg_' + this.p.id + "_" + t + '" class="cbox"/>', l = this.formatCol(s, 1, "", null, t, !0), f[f.length] = '<td role="gridcell" ' + l + ">" + a + "<\/td>"), b && (f[f.length] = n(this).jqGrid("addSubGridCell", h + s, 1)), c = h + b + s; c < this.p.colModel.length; c++) g = this.p.colModel[c], w = g.name, nt[w] = o[w], a = this.formatter(t, n.jgrid.getAccessor(o, w), c, o), l = this.formatCol(c, 1, a, o, t, nt), f[f.length] = '<td role="gridcell" ' + l + ">" + a + "<\/td>";
if (f.unshift(this.constructTr(t, !1, it, nt, o, !1)), f[f.length] = "<\/tr>", this.rows.length === 0) n("table:first", this.grid.bDiv).append(f.join(""));
else switch (r) {
case "last":
n(this.rows[this.rows.length - 1]).after(f.join("")), e = this.rows.length - 1;
break;
case "first":
n(this.rows[0]).after(f.join("")), e = 1;
break;
case "after":
(e = this.rows.namedItem(u)) && (n(this.rows[e.rowIndex + 1]).hasClass("ui-subgrid") ? n(this.rows[e.rowIndex + 1]).after(f) : n(e).after(f.join(""))), e++;
break;
case "before":
(e = this.rows.namedItem(u)) && (n(e).before(f.join("")), e = e.rowIndex), e--
}
this.p.subGrid === !0 && n(this).jqGrid("addSubGrid", h + s, e), this.p.records++, this.p.reccount++, n(this).triggerHandler("jqGridAfterInsertRow", [t, o, o]), ut && this.p.afterInsertRow.call(this, t, o, o), tt++, this.p.datatype == "local" && (nt[this.p.localReader.id] = k, this.p._index[k] = this.p.data.length, this.p.data.push(nt), nt = {})
}
this.p.altRows !== !0 || v || (r == "last" ? (this.rows.length - 1) % 2 == 1 && n(this.rows[this.rows.length - 1]).addClass(p) : n(this.rows).each(function (t) {
t % 2 == 1 ? n(this).addClass(p) : n(this).removeClass(p)
})), this.updatepager(!0, !0), d = !0
})), d
},
footerData: function (t, i, r) {
function s(n) {
for (var t in n)
if (n.hasOwnProperty(t)) return !1;
return !0
}
var u, f = !1,
e = {},
o;
return void 0 === t && (t = "get"), "boolean" != typeof r && (r = !0), t = t.toLowerCase(), this.each(function () {
var h = this,
c;
if (!h.grid || !h.p.footerrow || "set" == t && s(i)) return !1;
f = !0, n(this.p.colModel).each(function (s) {
u = this.name, "set" == t ? void 0 !== i[u] && (c = r ? h.formatter("", i[u], s, i, "edit") : i[u], o = this.title ? {
title: n.jgrid.stripHtml(c)
} : {}, n("tr.footrow td:eq(" + s + ")", h.grid.sDiv).html(c).attr(o), f = !0) : "get" == t && (e[u] = n("tr.footrow td:eq(" + s + ")", h.grid.sDiv).html())
})
}), "get" == t ? e : f
},
showHideCol: function (t, i) {
return this.each(function () {
var r = this,
o = !1,
s = n.jgrid.cell_width ? 0 : r.p.cellLayout,
f, u, e;
r.grid && ("string" == typeof t && (t = [t]), i = "none" != i ? "" : "none", u = "" === i ? !0 : !1, e = r.p.groupHeader && ("object" == typeof r.p.groupHeader || n.isFunction(r.p.groupHeader)), e && n(r).jqGrid("destroyGroupHeader", !1), n(this.p.colModel).each(function (e) {
if (-1 !== n.inArray(this.name, t) && this.hidden === u) {
if (!0 === r.p.frozenColumns && !0 === this.frozen) return !0;
n("tr", r.grid.hDiv).each(function () {
n(this.cells[e]).css("display", i)
}), n(r.rows).each(function () {
n(this).hasClass("jqgroup") || n(this.cells[e]).css("display", i)
}), r.p.footerrow && n("tr.footrow td:eq(" + e + ")", r.grid.sDiv).css("display", i), f = parseInt(this.width, 10), r.p.tblwidth = "none" === i ? r.p.tblwidth - (f + s) : r.p.tblwidth + (f + s), this.hidden = !u, o = !0, n(r).triggerHandler("jqGridShowHideCol", [u, this.name, e])
}
}), !0 === o && (!0 === r.p.shrinkToFit && !isNaN(r.p.height) && (r.p.tblwidth += parseInt(r.p.scrollOffset, 10)), n(r).jqGrid("setGridWidth", !0 === r.p.shrinkToFit ? r.p.tblwidth : r.p.width)), e && n(r).jqGrid("setGroupHeaders", r.p.groupHeader))
})
},
hideCol: function (t) {
return this.each(function () {
n(this).jqGrid("showHideCol", t, "none")
})
},
showCol: function (t) {
return this.each(function () {
n(this).jqGrid("showHideCol", t, "")
})
},
remapColumns: function (t, i, r) {
function f(i) {
var r;
r = i.length ? n.makeArray(i) : n.extend({}, i), n.each(t, function (n) {
i[n] = r[this]
})
}
function e(i, r) {
n(">tr" + (r || ""), i).each(function () {
var i = this,
r = n.makeArray(i.cells);
n.each(t, function () {
var n = r[this];
n && i.appendChild(n)
})
})
}
var u = this.get(0);
f(u.p.colModel), f(u.p.colNames), f(u.grid.headers), e(n("thead:first", u.grid.hDiv), r && ":not(.ui-jqgrid-labels)"), i && e(n("#" + n.jgrid.jqID(u.p.id) + " tbody:first"), ".jqgfirstrow, tr.jqgrow, tr.jqfoot"), u.p.footerrow && e(n("tbody:first", u.grid.sDiv)), u.p.remapColumns && (u.p.remapColumns.length ? f(u.p.remapColumns) : u.p.remapColumns = n.makeArray(t)), u.p.lastsort = n.inArray(u.p.lastsort, t), u.p.treeGrid && (u.p.expColInd = n.inArray(u.p.expColInd, t)), n(u).triggerHandler("jqGridRemapColumns", [t, i, r])
},
setGridWidth: function (t, i) {
return this.each(function () {
var f, y;
if (this.grid) {
var r = this,
u, f = 0,
e = n.jgrid.cell_width ? 0 : r.p.cellLayout,
o, s = 0,
l = !1,
a = r.p.scrollOffset,
v, h = 0,
p = 0,
c;
if ("boolean" != typeof i && (i = r.p.shrinkToFit), !isNaN(t)) {
if (t = parseInt(t, 10), r.grid.width = r.p.width = t, n("#gbox_" + n.jgrid.jqID(r.p.id)).css("width", t + "px"), n("#gview_" + n.jgrid.jqID(r.p.id)).css("width", t + "px"), n(r.grid.bDiv).css("width", t + "px"), n(r.grid.hDiv).css("width", t + "px"), r.p.pager && n(r.p.pager).css("width", t + "px"), r.p.toppager && n(r.p.toppager).css("width", t + "px"), !0 === r.p.toolbar[0] && (n(r.grid.uDiv).css("width", t + "px"), "both" == r.p.toolbar[1] && n(r.grid.ubDiv).css("width", t + "px")), r.p.footerrow && n(r.grid.sDiv).css("width", t + "px"), !1 === i && !0 === r.p.forceFit && (r.p.forceFit = !1), !0 === i) {
if (n.each(r.p.colModel, function () {
this.hidden === !1 && (u = this.widthOrg, f = f + (u + e), this.fixed ? h = h + (u + e) : s++, p++)
}), 0 === s) return;
if (r.p.tblwidth = f, v = t - e * s - h, !isNaN(r.p.height) && (n(r.grid.bDiv)[0].clientHeight < n(r.grid.bDiv)[0].scrollHeight || 1 === r.rows.length) && (l = !0, v -= a), f = 0, y = 0 < r.grid.cols.length, n.each(r.p.colModel, function (n) {
this.hidden !== !1 || this.fixed || (u = this.widthOrg, u = Math.round(v * u / (r.p.tblwidth - e * s - h)), u < 0 || (this.width = u, f = f + u, r.grid.headers[n].width = u, r.grid.headers[n].el.style.width = u + "px", r.p.footerrow && (r.grid.footers[n].style.width = u + "px"), y && (r.grid.cols[n].style.width = u + "px"), o = n))
}), !o) return;
c = 0, l ? t - h - (f + e * s) !== a && (c = t - h - (f + e * s) - a) : 1 !== Math.abs(t - h - (f + e * s)) && (c = t - h - (f + e * s)), r.p.colModel[o].width += c, r.p.tblwidth = f + c + e * s + h, r.p.tblwidth > t ? (l = r.p.tblwidth - parseInt(t, 10), r.p.tblwidth = t, u = r.p.colModel[o].width -= l) : u = r.p.colModel[o].width, r.grid.headers[o].width = u, r.grid.headers[o].el.style.width = u + "px", y && (r.grid.cols[o].style.width = u + "px"), r.p.footerrow && (r.grid.footers[o].style.width = u + "px")
}
r.p.tblwidth && (n("table:first", r.grid.bDiv).css("width", r.p.tblwidth + "px"), n("table:first", r.grid.hDiv).css("width", r.p.tblwidth + "px"), r.grid.hDiv.scrollLeft = r.grid.bDiv.scrollLeft, r.p.footerrow && n("table:first", r.grid.sDiv).css("width", r.p.tblwidth + "px"))
}
}
})
},
setGridHeight: function (t) {
return this.each(function () {
if (this.grid) {
var i = n(this.grid.bDiv);
i.css({
height: t + (isNaN(t) ? "" : "px")
}), !0 === this.p.frozenColumns && n("#" + n.jgrid.jqID(this.p.id) + "_frozen").parent().height(i.height() - 16), this.p.height = t, this.p.scroll && this.grid.populateVisible()
}
})
},
setCaption: function (t) {
return this.each(function () {
this.p.caption = t, n("span.ui-jqgrid-title, span.ui-jqgrid-title-rtl", this.grid.cDiv).html(t), n(this.grid.cDiv).show()
})
},
setLabel: function (t, i, r, u) {
return this.each(function () {
var e = -1,
f, o;
this.grid && void 0 !== t && (n(this.p.colModel).each(function (n) {
if (this.name == t) return e = n, !1
}), 0 <= e) && (f = n("tr.ui-jqgrid-labels th:eq(" + e + ")", this.grid.hDiv), i && (o = n(".s-ico", f), n("[id^=jqgh_]", f).empty().html(i).append(o), this.p.colNames[e] = i), r && ("string" == typeof r ? n(f).addClass(r) : n(f).css(r)), "object" == typeof u && n(f).attr(u))
})
},
setCell: function (t, i, r, u, f, e) {
return this.each(function () {
var s = -1,
o, c, h;
this.grid && (isNaN(i) ? n(this.p.colModel).each(function (n) {
if (this.name == i) return s = n, !1
}) : s = parseInt(i, 10), 0 <= s && (o = this.rows.namedItem(t))) && (h = n("td:eq(" + s + ")", o), ("" !== r || !0 === e) && (o = this.formatter(t, r, s, o, "edit"), c = this.p.colModel[s].title ? {
title: n.jgrid.stripHtml(o)
} : {}, this.p.treeGrid && 0 < n(".tree-wrap", n(h)).length ? n("span", n(h)).html(o).attr(c) : n(h).html(o).attr(c), "local" == this.p.datatype && (o = this.p.colModel[s], r = o.formatter && "string" == typeof o.formatter && "date" == o.formatter ? n.unformat.date.call(this, r, o) : r, c = this.p._index[t], void 0 !== c && (this.p.data[c][o.name] = r))), "string" == typeof u ? n(h).addClass(u) : u && n(h).css(u), "object" == typeof f && n(h).attr(f))
})
},
getCell: function (t, i) {
var r = !1;
return this.each(function () {
var u = -1,
f;
if (this.grid && (isNaN(i) ? n(this.p.colModel).each(function (n) {
if (this.name === i) return u = n, !1
}) : u = parseInt(i, 10), 0 <= u) && (f = this.rows.namedItem(t), f)) try {
r = n.unformat.call(this, n("td:eq(" + u + ")", f), {
rowId: f.id,
colModel: this.p.colModel[u]
}, u)
} catch (e) {
r = n.jgrid.htmlDecode(n("td:eq(" + u + ")", f).html())
}
}), r
},
getCol: function (t, i, r) {
var u = [],
f, h = 0,
s, e, o, i = "boolean" != typeof i ? !1 : i;
return void 0 === r && (r = !1), this.each(function () {
var l = -1,
a, c;
if (this.grid && (isNaN(t) ? n(this.p.colModel).each(function (n) {
if (this.name === t) return l = n, !1
}) : l = parseInt(t, 10), 0 <= l) && (a = this.rows.length, c = 0, a && 0 < a)) {
for (; c < a;) {
if (n(this.rows[c]).hasClass("jqgrow")) {
try {
f = n.unformat.call(this, n(this.rows[c].cells[l]), {
rowId: this.rows[c].id,
colModel: this.p.colModel[l]
}, l)
} catch (v) {
f = n.jgrid.htmlDecode(this.rows[c].cells[l].innerHTML)
}
r ? (o = parseFloat(f), h += o, void 0 === e && (e = s = o), s = Math.min(s, o), e = Math.max(e, o)) : i ? u.push({
id: this.rows[c].id,
value: f
}) : u.push(f)
}
c++
}
if (r) switch (r.toLowerCase()) {
case "sum":
u = h;
break;
case "avg":
u = h / a;
break;
case "count":
u = a;
break;
case "min":
u = s;
break;
case "max":
u = e
}
}
}), u
},
clearGridData: function (t) {
return this.each(function () {
if (this.grid) {
if ("boolean" != typeof t && (t = !1), this.p.deepempty) n("#" + n.jgrid.jqID(this.p.id) + " tbody:first tr:gt(0)").remove();
else {
var i = n("#" + n.jgrid.jqID(this.p.id) + " tbody:first tr:first")[0];
n("#" + n.jgrid.jqID(this.p.id) + " tbody:first").empty().append(i)
}
this.p.footerrow && t && n(".ui-jqgrid-ftable td", this.grid.sDiv).html("&#160;"), this.p.selrow = null, this.p.selarrrow = [], this.p.savedRow = [], this.p.records = 0, this.p.page = 1, this.p.lastpage = 0, this.p.reccount = 0, this.p.data = [], this.p._index = {}, this.updatepager(!0, !1)
}
})
},
getInd: function (n, t) {
var r = !1,
i;
return this.each(function () {
(i = this.rows.namedItem(n)) && (r = !0 === t ? i : i.rowIndex)
}), r
},
bindKeys: function (t) {
var i = n.extend({
onEnter: null,
onSpace: null,
onLeftKey: null,
onRightKey: null,
scrollingRows: !0
}, t || {});
return this.each(function () {
var t = this;
n("body").is("[role]") || n("body").attr("role", "application"), t.p.scrollrows = i.scrollingRows, n(t).keydown(function (r) {
var e = n(t).find("tr[tabindex=0]")[0],
f, u, o, s = t.p.treeReader.expanded_field;
if (e)
if (o = t.p._index[e.id], 37 === r.keyCode || 38 === r.keyCode || 39 === r.keyCode || 40 === r.keyCode) {
if (38 === r.keyCode) {
if (u = e.previousSibling, f = "", u)
if (n(u).is(":hidden")) {
for (; u;)
if (u = u.previousSibling, !n(u).is(":hidden") && n(u).hasClass("jqgrow")) {
f = u.id;
break
}
} else f = u.id;
n(t).jqGrid("setSelection", f, !0, r), r.preventDefault()
}
if (40 === r.keyCode) {
if (u = e.nextSibling, f = "", u)
if (n(u).is(":hidden")) {
for (; u;)
if (u = u.nextSibling, !n(u).is(":hidden") && n(u).hasClass("jqgrow")) {
f = u.id;
break
}
} else f = u.id;
n(t).jqGrid("setSelection", f, !0, r), r.preventDefault()
}
37 === r.keyCode && (t.p.treeGrid && t.p.data[o][s] && n(e).find("div.treeclick").trigger("click"), n(t).triggerHandler("jqGridKeyLeft", [t.p.selrow]), n.isFunction(i.onLeftKey) && i.onLeftKey.call(t, t.p.selrow)), 39 === r.keyCode && (t.p.treeGrid && !t.p.data[o][s] && n(e).find("div.treeclick").trigger("click"), n(t).triggerHandler("jqGridKeyRight", [t.p.selrow]), n.isFunction(i.onRightKey) && i.onRightKey.call(t, t.p.selrow))
} else 13 === r.keyCode ? (n(t).triggerHandler("jqGridKeyEnter", [t.p.selrow]), n.isFunction(i.onEnter) && i.onEnter.call(t, t.p.selrow)) : 32 === r.keyCode && (n(t).triggerHandler("jqGridKeySpace", [t.p.selrow]), n.isFunction(i.onSpace) && i.onSpace.call(t, t.p.selrow))
})
})
},
unbindKeys: function () {
return this.each(function () {
n(this).unbind("keydown")
})
},
getLocalRow: function (n) {
var i = !1,
t;
return this.each(function () {
void 0 !== n && (t = this.p._index[n], 0 <= t && (i = this.p.data[t]))
}), i
}
})
}(jQuery),
function (n) {
n.fmatter = {}, n.extend(n.fmatter, {
isBoolean: function (n) {
return "boolean" == typeof n
},
isObject: function (t) {
return t && ("object" == typeof t || n.isFunction(t)) || !1
},
isString: function (n) {
return "string" == typeof n
},
isNumber: function (n) {
return "number" == typeof n && isFinite(n)
},
isNull: function (n) {
return null === n
},
isUndefined: function (n) {
return void 0 === n
},
isValue: function (n) {
return this.isObject(n) || this.isString(n) || this.isNumber(n) || this.isBoolean(n)
},
isEmpty: function (t) {
return !this.isString(t) && this.isValue(t) ? !1 : this.isValue(t) ? (t = n.trim(t).replace(/\&nbsp\;/ig, "").replace(/\&#160\;/ig, ""), "" === t) : !0
}
}), n.fn.fmatter = function (t, i, r, u, f) {
var e = i,
r = n.extend({}, n.jgrid.formatter, r);
try {
e = n.fn.fmatter[t].call(this, i, r, u, f)
} catch (o) { }
return e
}, n.fmatter.util = {
NumberFormat: function (t, i) {
var u, s, e;
if (n.fmatter.isNumber(t) || (t *= 1), n.fmatter.isNumber(t)) {
var h = 0 > t,
r = "" + t,
u = i.decimalSeparator || ".",
f;
if (n.fmatter.isNumber(i.decimalPlaces)) {
var o = i.decimalPlaces,
r = Math.pow(10, o),
r = "" + Math.round(t * r) / r;
if (f = r.lastIndexOf("."), 0 < o)
for (0 > f ? (r += u, f = r.length - 1) : "." !== u && (r = r.replace(".", u)) ; r.length - 1 - f < o;) r += "0"
}
if (i.thousandsSeparator) {
for (o = i.thousandsSeparator, f = r.lastIndexOf(u), f = -1 < f ? f : r.length, u = r.substring(f), s = -1, e = f; 0 < e; e--) s++, 0 == s % 3 && e !== f && (!h || 1 < e) && (u = o + u), u = r.charAt(e - 1) + u;
r = u
}
return r = i.prefix ? i.prefix + r : r, i.suffix ? r + i.suffix : r
}
return t
},
DateFormat: function (t, i, r, u) {
var s = /^\/Date\((([-+])?[0-9]+)(([-+])([0-9]{2})([0-9]{2}))?\)\/$/,
o = "string" == typeof i ? i.match(s) : null,
s = function (n, t) {
for (n = "" + n, t = parseInt(t, 10) || 2; n.length < t;) n = "0" + n;
return n
},
e = {
m: 1,
d: 1,
y: 1970,
h: 0,
i: 0,
s: 0,
u: 0
},
f = 0,
c, h = ["i18n"];
if (h.i18n = {
dayNames: u.dayNames,
monthNames: u.monthNames
}, u.masks.hasOwnProperty(t) && (t = u.masks[t]), isNaN(+i) || "u" != ("" + t).toLowerCase())
if (i.constructor === Date) f = i;
else if (null !== o) f = new Date(parseInt(o[1], 10)), o[3] && (t = 60 * Number(o[5]) + Number(o[6]), t *= "-" == o[4] ? 1 : -1, t -= f.getTimezoneOffset(), f.setTime(Number(Number(f) + 6e4 * t)));
else {
for (i = ("" + i).split(/[\\\/:_;.,\t\T\s-]/), t = t.split(/[\\\/:_;.,\t\T\s-]/), o = 0, c = t.length; o < c; o++) "M" == t[o] && (f = n.inArray(i[o], h.i18n.monthNames), -1 !== f && 12 > f && (i[o] = f + 1)), "F" == t[o] && (f = n.inArray(i[o], h.i18n.monthNames), -1 !== f && 11 < f && (i[o] = f + 1 - 12)), i[o] && (e[t[o].toLowerCase()] = parseInt(i[o], 10));
if (e.f && (e.m = e.f), 0 === e.m && 0 === e.y && 0 === e.d) return "&#160;";
e.m = parseInt(e.m, 10) - 1, f = e.y, 70 <= f && 99 >= f ? e.y = 1900 + e.y : 0 <= f && 69 >= f && (e.y = 2e3 + e.y), f = new Date(e.y, e.m, e.d, e.h, e.i, e.s, e.u)
} else f = new Date(1e3 * parseFloat(i));
u.masks.hasOwnProperty(r) ? r = u.masks[r] : r || (r = "Y-m-d"), t = f.getHours(), i = f.getMinutes(), e = f.getDate(), o = f.getMonth() + 1, c = f.getTimezoneOffset();
var w = f.getSeconds(),
b = f.getMilliseconds(),
a = f.getDay(),
l = f.getFullYear(),
v = (a + 6) % 7 + 1,
y = (new Date(l, o - 1, e) - new Date(l, 0, 1)) / 864e5,
p = {
d: s(e),
D: h.i18n.dayNames[a],
j: e,
l: h.i18n.dayNames[a + 7],
N: v,
S: u.S(e),
w: a,
z: y,
W: 5 > v ? Math.floor((y + v - 1) / 7) + 1 : Math.floor((y + v - 1) / 7) || (4 > (new Date(l - 1, 0, 1).getDay() + 6) % 7 ? 53 : 52),
F: h.i18n.monthNames[o - -11],
m: s(o),
M: h.i18n.monthNames[o - 1],
n: o,
t: "?",
L: "?",
o: "?",
Y: l,
y: ("" + l).substring(2),
a: 12 > t ? u.AmPm[0] : u.AmPm[1],
A: 12 > t ? u.AmPm[2] : u.AmPm[3],
B: "?",
g: t % 12 || 12,
G: t,
h: s(t % 12 || 12),
H: s(t),
i: s(i),
s: s(w),
u: b,
e: "?",
I: "?",
O: (0 < c ? "-" : "+") + s(100 * Math.floor(Math.abs(c) / 60) + Math.abs(c) % 60, 4),
P: "?",
T: (("" + f).match(/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g) || [""]).pop().replace(/[^-+\dA-Z]/g, ""),
Z: "?",
c: "?",
r: "?",
U: Math.floor(f / 1e3)
};
return r.replace(/\\.|[dDjlNSwzWFmMntLoYyaABgGhHisueIOPTZcrU]/g, function (n) {
return p.hasOwnProperty(n) ? p[n] : n.substring(1)
})
}
}, n.fn.fmatter.defaultFormat = function (t, i) {
return n.fmatter.isValue(t) && "" !== t ? t : i.defaultValue || "&#160;"
}, n.fn.fmatter.email = function (t, i) {
return n.fmatter.isEmpty(t) ? n.fn.fmatter.defaultFormat(t, i) : '<a href="mailto:' + t + '">' + t + "<\/a>"
}, n.fn.fmatter.checkbox = function (t, i) {
var r = n.extend({}, i.checkbox),
u;
return void 0 === i.colModel || n.fmatter.isUndefined(i.colModel.formatoptions) || (r = n.extend({}, r, i.colModel.formatoptions)), u = !0 === r.disabled ? 'disabled="disabled"' : "", (n.fmatter.isEmpty(t) || n.fmatter.isUndefined(t)) && (t = n.fn.fmatter.defaultFormat(t, r)), t = ("" + t).toLowerCase(), '<input type="checkbox" ' + (0 > t.search(/(false|0|no|n|off)/i) ? " checked='checked' " : "") + ' value="' + t + '" offval="no" ' + u + "/>"
}, n.fn.fmatter.link = function (t, i) {
var r = {
target: i.target
},
u = "";
return void 0 === i.colModel || n.fmatter.isUndefined(i.colModel.formatoptions) || (r = n.extend({}, r, i.colModel.formatoptions)), r.target && (u = "target=" + r.target), n.fmatter.isEmpty(t) ? n.fn.fmatter.defaultFormat(t, i) : "<a " + u + ' href="' + t + '">' + t + "<\/a>"
}, n.fn.fmatter.showlink = function (t, i) {
var r = {
baseLinkUrl: i.baseLinkUrl,
showAction: i.showAction,
addParam: i.addParam || "",
target: i.target,
idName: i.idName
},
u = "";
return void 0 === i.colModel || n.fmatter.isUndefined(i.colModel.formatoptions) || (r = n.extend({}, r, i.colModel.formatoptions)), r.target && (u = "target=" + r.target), r = r.baseLinkUrl + r.showAction + "?" + r.idName + "=" + i.rowId + r.addParam, n.fmatter.isString(t) || n.fmatter.isNumber(t) ? "<a " + u + ' href="' + r + '">' + t + "<\/a>" : n.fn.fmatter.defaultFormat(t, i)
}, n.fn.fmatter.integer = function (t, i) {
var r = n.extend({}, i.integer);
return void 0 === i.colModel || n.fmatter.isUndefined(i.colModel.formatoptions) || (r = n.extend({}, r, i.colModel.formatoptions)), n.fmatter.isEmpty(t) ? r.defaultValue : n.fmatter.util.NumberFormat(t, r)
}, n.fn.fmatter.number = function (t, i) {
var r = n.extend({}, i.number);
return void 0 === i.colModel || n.fmatter.isUndefined(i.colModel.formatoptions) || (r = n.extend({}, r, i.colModel.formatoptions)), n.fmatter.isEmpty(t) ? r.defaultValue : n.fmatter.util.NumberFormat(t, r)
}, n.fn.fmatter.currency = function (t, i) {
var r = n.extend({}, i.currency);
return void 0 === i.colModel || n.fmatter.isUndefined(i.colModel.formatoptions) || (r = n.extend({}, r, i.colModel.formatoptions)), n.fmatter.isEmpty(t) ? r.defaultValue : n.fmatter.util.NumberFormat(t, r)
}, n.fn.fmatter.date = function (t, i, r, u) {
return r = n.extend({}, i.date), void 0 === i.colModel || n.fmatter.isUndefined(i.colModel.formatoptions) || (r = n.extend({}, r, i.colModel.formatoptions)), !r.reformatAfterEdit && "edit" == u ? n.fn.fmatter.defaultFormat(t, i) : n.fmatter.isEmpty(t) ? n.fn.fmatter.defaultFormat(t, i) : n.fmatter.util.DateFormat(r.srcformat, t, r.newformat, r)
}, n.fn.fmatter.select = function (t, i) {
var t = "" + t,
u = !1,
e = [],
o, r, s, f, c, l, h;
if (n.fmatter.isUndefined(i.colModel.formatoptions) ? n.fmatter.isUndefined(i.colModel.editoptions) || (u = i.colModel.editoptions.value, o = void 0 === i.colModel.editoptions.separator ? ":" : i.colModel.editoptions.separator, r = void 0 === i.colModel.editoptions.delimiter ? ";" : i.colModel.editoptions.delimiter) : (u = i.colModel.formatoptions.value, o = void 0 === i.colModel.formatoptions.separator ? ":" : i.colModel.formatoptions.separator, r = void 0 === i.colModel.formatoptions.delimiter ? ";" : i.colModel.formatoptions.delimiter), u)
if (s = !0 === i.colModel.editoptions.multiple ? !0 : !1, f = [], s && (f = t.split(","), f = n.map(f, function (t) {
return n.trim(t)
})), n.fmatter.isString(u)) {
for (c = u.split(r), l = 0, h = 0; h < c.length; h++)
if (r = c[h].split(o), 2 < r.length && (r[1] = n.map(r, function (n, t) {
if (t > 0) return n
}).join(o)), s) -1 < n.inArray(r[0], f) && (e[l] = r[1], l++);
else if (n.trim(r[0]) == n.trim(t)) {
e[0] = r[1];
break
}
} else n.fmatter.isObject(u) && (s ? e = n.map(f, function (n) {
return u[n]
}) : e[0] = u[t] || "");
return t = e.join(", "), "" === t ? n.fn.fmatter.defaultFormat(t, i) : t
}, n.fn.fmatter.rowactions = function (t) {
var o = n(this).closest("tr.jqgrow"),
r = n(this).parent(),
e = o.attr("id"),
u = n(this).closest("table.ui-jqgrid-btable"),
s = u[0],
f = s.p,
h = f.colModel[n.jgrid.getCellIndex(this)],
i = {
keys: !1,
onEdit: null,
onSuccess: null,
afterSave: null,
onError: null,
afterRestore: null,
extraparam: {},
url: null,
restoreAfterError: !0,
mtype: "POST",
delOptions: {},
editOptions: {}
},
c = function (t) {
n.isFunction(i.afterRestore) && i.afterRestore.call(s, t), r.find("div.ui-inline-edit,div.ui-inline-del").show(), r.find("div.ui-inline-save,div.ui-inline-cancel").hide()
};
n.fmatter.isUndefined(h.formatoptions) || (i = n.extend(i, h.formatoptions)), n.fmatter.isUndefined(f.editOptions) || (i.editOptions = f.editOptions), n.fmatter.isUndefined(f.delOptions) || (i.delOptions = f.delOptions), o.hasClass("jqgrid-new-row") && (i.extraparam[f.prmNames.oper] = f.prmNames.addoper), o = {
keys: i.keys,
oneditfunc: i.onEdit,
successfunc: i.onSuccess,
url: i.url,
extraparam: i.extraparam,
aftersavefunc: function (t, u) {
n.isFunction(i.afterSave) && i.afterSave.call(s, t, u), r.find("div.ui-inline-edit,div.ui-inline-del").show(), r.find("div.ui-inline-save,div.ui-inline-cancel").hide()
},
errorfunc: i.onError,
afterrestorefunc: c,
restoreAfterError: i.restoreAfterError,
mtype: i.mtype
};
switch (t) {
case "edit":
u.jqGrid("editRow", e, o), r.find("div.ui-inline-edit,div.ui-inline-del").hide(), r.find("div.ui-inline-save,div.ui-inline-cancel").show(), u.triggerHandler("jqGridAfterGridComplete");
break;
case "save":
u.jqGrid("saveRow", e, o) && (r.find("div.ui-inline-edit,div.ui-inline-del").show(), r.find("div.ui-inline-save,div.ui-inline-cancel").hide(), u.triggerHandler("jqGridAfterGridComplete"));
break;
case "cancel":
u.jqGrid("restoreRow", e, c), r.find("div.ui-inline-edit,div.ui-inline-del").show(), r.find("div.ui-inline-save,div.ui-inline-cancel").hide(), u.triggerHandler("jqGridAfterGridComplete");
break;
case "del":
u.jqGrid("delGridRow", e, i.delOptions);
break;
case "formedit":
u.jqGrid("setSelection", e), u.jqGrid("editGridRow", e, i.editOptions)
}
}, n.fn.fmatter.actions = function (t, i) {
var u = {
keys: !1,
editbutton: !0,
delbutton: !0,
editformbutton: !1
},
f = i.rowId,
r = "";
return (n.fmatter.isUndefined(i.colModel.formatoptions) || (u = n.extend(u, i.colModel.formatoptions)), void 0 === f || n.fmatter.isEmpty(f)) ? "" : (u.editformbutton ? r += "<div title='" + n.jgrid.nav.edittitle + "' style='float:left;cursor:pointer;' class='ui-pg-div ui-inline-edit' onclick=jQuery.fn.fmatter.rowactions.call(this,'formedit'); onmouseover=jQuery(this).addClass('ui-state-hover'); onmouseout=jQuery(this).removeClass('ui-state-hover'); ><span class='ui-icon ui-icon-pencil'><\/span><\/div>" : u.editbutton && (r += "<div title='" + n.jgrid.nav.edittitle + "' style='float:left;cursor:pointer;' class='ui-pg-div ui-inline-edit' onclick=jQuery.fn.fmatter.rowactions.call(this,'edit'); onmouseover=jQuery(this).addClass('ui-state-hover'); onmouseout=jQuery(this).removeClass('ui-state-hover') ><span class='ui-icon ui-icon-pencil'><\/span><\/div>"), u.delbutton && (r += "<div title='" + n.jgrid.nav.deltitle + "' style='float:left;margin-left:5px;' class='ui-pg-div ui-inline-del' onclick=jQuery.fn.fmatter.rowactions.call(this,'del'); onmouseover=jQuery(this).addClass('ui-state-hover'); onmouseout=jQuery(this).removeClass('ui-state-hover'); ><span class='ui-icon ui-icon-trash'><\/span><\/div>"), r += "<div title='" + n.jgrid.edit.bSubmit + "' style='float:left;display:none' class='ui-pg-div ui-inline-save' onclick=jQuery.fn.fmatter.rowactions.call(this,'save'); onmouseover=jQuery(this).addClass('ui-state-hover'); onmouseout=jQuery(this).removeClass('ui-state-hover'); ><span class='ui-icon ui-icon-disk'><\/span><\/div>", r += "<div title='" + n.jgrid.edit.bCancel + "' style='float:left;display:none;margin-left:5px;' class='ui-pg-div ui-inline-cancel' onclick=jQuery.fn.fmatter.rowactions.call(this,'cancel'); onmouseover=jQuery(this).addClass('ui-state-hover'); onmouseout=jQuery(this).removeClass('ui-state-hover'); ><span class='ui-icon ui-icon-cancel'><\/span><\/div>", "<div style='margin-left:8px;'>" + r + "<\/div>")
}, n.unformat = function (t, i, r, u) {
var f, o = i.colModel.formatter,
e = i.colModel.formatoptions || {},
s = /([\.\*\_\'\(\)\{\}\+\?\\])/g,
h = i.colModel.unformat || n.fn.fmatter[o] && n.fn.fmatter[o].unformat;
if (void 0 !== h && n.isFunction(h)) f = h.call(this, n(t).text(), i, t);
else if (!n.fmatter.isUndefined(o) && n.fmatter.isString(o)) switch (f = n.jgrid.formatter || {}, o) {
case "integer":
e = n.extend({}, f.integer, e), i = e.thousandsSeparator.replace(s, "\\$1"), f = n(t).text().replace(RegExp(i, "g"), "");
break;
case "number":
e = n.extend({}, f.number, e), i = e.thousandsSeparator.replace(s, "\\$1"), f = n(t).text().replace(RegExp(i, "g"), "").replace(e.decimalSeparator, ".");
break;
case "currency":
e = n.extend({}, f.currency, e), i = e.thousandsSeparator.replace(s, "\\$1"), i = RegExp(i, "g"), f = n(t).text(), e.prefix && e.prefix.length && (f = f.substr(e.prefix.length)), e.suffix && e.suffix.length && (f = f.substr(0, f.length - e.suffix.length)), f = f.replace(i, "").replace(e.decimalSeparator, ".");
break;
case "checkbox":
e = i.colModel.editoptions ? i.colModel.editoptions.value.split(":") : ["Yes", "No"], f = n("input", t).is(":checked") ? e[0] : e[1];
break;
case "select":
f = n.unformat.select(t, i, r, u);
break;
case "actions":
return "";
default:
f = n(t).text()
}
return void 0 !== f ? f : !0 === u ? n(t).text() : n.jgrid.htmlDecode(n(t).html())
}, n.unformat.select = function (t, i, r, u) {
var h, c, s;
if (r = [], t = n(t).text(), !0 === u) return t;
var u = n.extend({}, n.fmatter.isUndefined(i.colModel.formatoptions) ? i.colModel.editoptions : i.colModel.formatoptions),
i = void 0 === u.separator ? ":" : u.separator,
f = void 0 === u.delimiter ? ";" : u.delimiter;
if (u.value) {
var o = u.value,
u = !0 === u.multiple ? !0 : !1,
e = [];
if (u && (e = t.split(","), e = n.map(e, function (t) {
return n.trim(t)
})), n.fmatter.isString(o)) {
for (h = o.split(f), c = 0, s = 0; s < h.length; s++)
if (f = h[s].split(i), 2 < f.length && (f[1] = n.map(f, function (n, t) {
if (t > 0) return n
}).join(i)), u) -1 < n.inArray(f[1], e) && (r[c] = f[0], c++);
else if (n.trim(f[1]) == n.trim(t)) {
r[0] = f[0];
break
}
} else (n.fmatter.isObject(o) || n.isArray(o)) && (u || (e[0] = t), r = n.map(e, function (t) {
var i;
return n.each(o, function (n, r) {
if (r == t) return i = n, !1
}), i !== void 0 ? i : void 0
}));
return r.join(", ")
}
return t || ""
}, n.unformat.date = function (t, i) {
var r = n.jgrid.formatter.date || {};
return n.fmatter.isUndefined(i.formatoptions) || (r = n.extend({}, r, i.formatoptions)), n.fmatter.isEmpty(t) ? n.fn.fmatter.defaultFormat(t, i) : n.fmatter.util.DateFormat(r.newformat, t, r.srcformat, r)
}
}(jQuery),
function (n) {
n.jgrid.extend({
getColProp: function (n) {
var r = {},
t = this[0],
i;
if (!t.grid) return !1;
for (t = t.p.colModel, i = 0; i < t.length; i++)
if (t[i].name == n) {
r = t[i];
break
}
return r
},
setColProp: function (t, i) {
return this.each(function () {
if (this.grid && i)
for (var u = this.p.colModel, r = 0; r < u.length; r++)
if (u[r].name == t) {
n.extend(!0, this.p.colModel[r], i);
break
}
})
},
sortGrid: function (n, t, i) {
return this.each(function () {
var u = -1,
r;
if (this.grid) {
for (n || (n = this.p.sortname), r = 0; r < this.p.colModel.length; r++)
if (this.p.colModel[r].index == n || this.p.colModel[r].name == n) {
u = r;
break
} -1 != u && (r = this.p.colModel[u].sortable, "boolean" != typeof r && (r = !0), "boolean" != typeof t && (t = !1), r && this.sortData("jqgh_" + this.p.id + "_" + n, u, t, i))
}
})
},
clearBeforeUnload: function () {
return this.each(function () {
var t = this.grid,
i, r;
for (t.emptyRows.call(this, !0, !0), n(t.hDiv).unbind("mousemove"), n(this).unbind(), t.dragEnd = null, t.dragMove = null, t.dragStart = null, t.emptyRows = null, t.populate = null, t.populateVisible = null, t.scrollGrid = null, t.selectionPreserver = null, t.bDiv = null, t.cDiv = null, t.hDiv = null, t.cols = null, r = t.headers.length, i = 0; i < r; i++) t.headers[i].el = null;
this.addJSONData = this.addXmlData = this.formatter = this.constructTr = this.setHeadCheckBox = this.refreshIndex = this.updatepager = this.sortData = this.formatCol = null
})
},
GridDestroy: function () {
return this.each(function () {
if (this.grid) {
this.p.pager && n(this.p.pager).remove();
try {
n(this).jqGrid("clearBeforeUnload"), n("#gbox_" + n.jgrid.jqID(this.id)).remove()
} catch (t) { }
}
})
},
GridUnload: function () {
return this.each(function () {
var t, r, i;
this.grid && (t = n(this).attr("id"), r = n(this).attr("class"), this.p.pager && n(this.p.pager).empty().removeClass("ui-state-default ui-jqgrid-pager corner-bottom"), i = document.createElement("table"), n(i).attr({
id: t
}), i.className = r, t = n.jgrid.jqID(this.id), n(i).removeClass("ui-jqgrid-btable"), 1 === n(this.p.pager).parents("#gbox_" + t).length ? (n(i).insertBefore("#gbox_" + t).show(), n(this.p.pager).insertBefore("#gbox_" + t)) : n(i).insertBefore("#gbox_" + t).show(), n(this).jqGrid("clearBeforeUnload"), n("#gbox_" + t).remove())
})
},
setGridState: function (t) {
return this.each(function () {
this.grid && ("hidden" == t ? (n(".ui-jqgrid-bdiv, .ui-jqgrid-hdiv", "#gview_" + n.jgrid.jqID(this.p.id)).slideUp("fast"), this.p.pager && n(this.p.pager).slideUp("fast"), this.p.toppager && n(this.p.toppager).slideUp("fast"), !0 === this.p.toolbar[0] && ("both" == this.p.toolbar[1] && n(this.grid.ubDiv).slideUp("fast"), n(this.grid.uDiv).slideUp("fast")), this.p.footerrow && n(".ui-jqgrid-sdiv", "#gbox_" + n.jgrid.jqID(this.p.id)).slideUp("fast"), n(".ui-jqgrid-titlebar-close span", this.grid.cDiv).removeClass("ui-icon-circle-triangle-n").addClass("ui-icon-circle-triangle-s"), this.p.gridstate = "hidden") : "visible" == t && (n(".ui-jqgrid-hdiv, .ui-jqgrid-bdiv", "#gview_" + n.jgrid.jqID(this.p.id)).slideDown("fast"), this.p.pager && n(this.p.pager).slideDown("fast"), this.p.toppager && n(this.p.toppager).slideDown("fast"), !0 === this.p.toolbar[0] && ("both" == this.p.toolbar[1] && n(this.grid.ubDiv).slideDown("fast"), n(this.grid.uDiv).slideDown("fast")), this.p.footerrow && n(".ui-jqgrid-sdiv", "#gbox_" + n.jgrid.jqID(this.p.id)).slideDown("fast"), n(".ui-jqgrid-titlebar-close span", this.grid.cDiv).removeClass("ui-icon-circle-triangle-s").addClass("ui-icon-circle-triangle-n"), this.p.gridstate = "visible"))
})
},
filterToolbar: function (t) {
return t = n.extend({
autosearch: !0,
searchOnEnter: !0,
beforeSearch: null,
afterSearch: null,
beforeClear: null,
afterClear: null,
searchurl: "",
stringResult: !1,
groupOp: "AND",
defaultSearch: "bw"
}, t || {}), this.each(function () {
var i = this,
r, u, f;
this.ftoolbar || (r = function () {
var e = {},
h = 0,
c, u, l = {},
a, v, r, o, s, f;
n.each(i.p.colModel, function () {
if (u = this.index || this.name, a = this.searchoptions && this.searchoptions.sopt ? this.searchoptions.sopt[0] : "select" == this.stype ? "eq" : t.defaultSearch, c = n("#gs_" + n.jgrid.jqID(this.name), !0 === this.frozen && !0 === i.p.frozenColumns ? i.grid.fhDiv : i.grid.hDiv).val()) e[u] = c, l[u] = a, h++;
else try {
delete i.p.postData[u]
} catch (r) { }
}), v = 0 < h ? !0 : !1, !0 === t.stringResult || "local" == i.p.datatype ? (r = '{"groupOp":"' + t.groupOp + '","rules":[', o = 0, n.each(e, function (n, t) {
0 < o && (r += ","), r += '{"field":"' + n + '",', r += '"op":"' + l[n] + '",', r += '"data":"' + (t + "").replace(/\\/g, "\\\\").replace(/\"/g, '\\"') + '"}', o++
}), r += "]}", n.extend(i.p.postData, {
filters: r
}), n.each(["searchField", "searchString", "searchOper"], function (n, t) {
i.p.postData.hasOwnProperty(t) && delete i.p.postData[t]
})) : n.extend(i.p.postData, e), i.p.searchurl && (s = i.p.url, n(i).jqGrid("setGridParam", {
url: i.p.searchurl
})), f = "stop" === n(i).triggerHandler("jqGridToolbarBeforeSearch") ? !0 : !1, !f && n.isFunction(t.beforeSearch) && (f = t.beforeSearch.call(i)), f || n(i).jqGrid("setGridParam", {
search: v
}).trigger("reloadGrid", [{
page: 1
}]), s && n(i).jqGrid("setGridParam", {
url: s
}), n(i).triggerHandler("jqGridToolbarAfterSearch"), n.isFunction(t.afterSearch) && t.afterSearch.call(i)
}, u = n("<tr class='ui-search-toolbar' role='rowheader'><\/tr>"), n.each(i.p.colModel, function () {
var e = this,
s, y, o, h, c, v, l, a, p;
if (y = n("<th role='columnheader' class='ui-state-default ui-th-column ui-th-" + i.p.direction + "'><\/th>"), s = n("<div style='position:relative;height:100%;padding-right:0.3em;'><\/div>"), !0 === this.hidden && n(y).css("display", "none"), this.search = !1 === this.search ? !1 : !0, void 0 === this.stype && (this.stype = "text"), o = n.extend({}, this.searchoptions || {}), this.search) switch (this.stype) {
case "select":
if (h = this.surl || o.dataUrl) n.ajax(n.extend({
url: h,
dataType: "html",
success: function (u) {
o.buildSelect !== void 0 ? (u = o.buildSelect(u)) && n(s).append(u) : n(s).append(u), o.defaultValue !== void 0 && n("select", s).val(o.defaultValue), n("select", s).attr({
name: e.index || e.name,
id: "gs_" + e.name
}), o.attr && n("select", s).attr(o.attr), n("select", s).css({
width: "100%"
}), n.jgrid.bindEv(n("select", s)[0], o, i), t.autosearch === !0 && n("select", s).change(function () {
return r(), !1
}), u = null
}
}, n.jgrid.ajaxOptions, i.p.ajaxSelectOptions || {}));
else if (e.searchoptions ? (c = void 0 === e.searchoptions.value ? "" : e.searchoptions.value, v = void 0 === e.searchoptions.separator ? ":" : e.searchoptions.separator, l = void 0 === e.searchoptions.delimiter ? ";" : e.searchoptions.delimiter) : e.editoptions && (c = void 0 === e.editoptions.value ? "" : e.editoptions.value, v = void 0 === e.editoptions.separator ? ":" : e.editoptions.separator, l = void 0 === e.editoptions.delimiter ? ";" : e.editoptions.delimiter), c) {
if (h = document.createElement("select"), h.style.width = "100%", n(h).attr({
name: e.index || e.name,
id: "gs_" + e.name
}), "string" == typeof c)
for (c = c.split(l), p = 0; p < c.length; p++) a = c[p].split(v), l = document.createElement("option"), l.value = a[0], l.innerHTML = a[1], h.appendChild(l);
else if ("object" == typeof c)
for (a in c) c.hasOwnProperty(a) && (l = document.createElement("option"), l.value = a, l.innerHTML = c[a], h.appendChild(l));
void 0 !== o.defaultValue && n(h).val(o.defaultValue), o.attr && n(h).attr(o.attr), n.jgrid.bindEv(h, o, i), n(s).append(h), !0 === t.autosearch && n(h).change(function () {
return r(), !1
})
}
break;
case "text":
v = void 0 !== o.defaultValue ? o.defaultValue : "", n(s).append("<input type='text' style='width:95%;padding:0px;' name='" + (e.index || e.name) + "' id='gs_" + e.name + "' value='" + v + "'/>"), o.attr && n("input", s).attr(o.attr), n.jgrid.bindEv(n("input", s)[0], o, i), !0 === t.autosearch && (t.searchOnEnter ? n("input", s).keypress(function (n) {
return (n.charCode || n.keyCode || 0) == 13 ? (r(), !1) : this
}) : n("input", s).keydown(function (n) {
switch (n.which) {
case 13:
return !1;
case 9:
case 16:
case 37:
case 38:
case 39:
case 40:
case 27:
break;
default:
f && clearTimeout(f), f = setTimeout(function () {
r()
}, 500)
}
}))
}
n(y).append(s), n(u).append(y)
}), n("table thead", i.grid.hDiv).append(u), this.ftoolbar = !0, this.triggerToolbar = r, this.clearToolbar = function (r) {
var e = {},
s = 0,
f, r = "boolean" != typeof r ? !0 : r,
l, u, h, c, o;
n.each(i.p.colModel, function () {
var t;
this.searchoptions && void 0 !== this.searchoptions.defaultValue && (t = this.searchoptions.defaultValue), f = this.index || this.name;
switch (this.stype) {
case "select":
if (n("#gs_" + n.jgrid.jqID(this.name) + " option", !0 === this.frozen && !0 === i.p.frozenColumns ? i.grid.fhDiv : i.grid.hDiv).each(function (i) {
return i === 0 && (this.selected = !0), n(this).val() == t ? (this.selected = !0, !1) : void 0
}), void 0 !== t) e[f] = t, s++;
else try {
delete i.p.postData[f]
} catch (r) { }
break;
case "text":
if (n("#gs_" + n.jgrid.jqID(this.name), !0 === this.frozen && !0 === i.p.frozenColumns ? i.grid.fhDiv : i.grid.hDiv).val(t), void 0 !== t) e[f] = t, s++;
else try {
delete i.p.postData[f]
} catch (u) { }
}
}), l = 0 < s ? !0 : !1, !0 === t.stringResult || "local" == i.p.datatype ? (u = '{"groupOp":"' + t.groupOp + '","rules":[', h = 0, n.each(e, function (n, t) {
0 < h && (u += ","), u += '{"field":"' + n + '",', u += '"op":"eq",', u += '"data":"' + (t + "").replace(/\\/g, "\\\\").replace(/\"/g, '\\"') + '"}', h++
}), u += "]}", n.extend(i.p.postData, {
filters: u
}), n.each(["searchField", "searchString", "searchOper"], function (n, t) {
i.p.postData.hasOwnProperty(t) && delete i.p.postData[t]
})) : n.extend(i.p.postData, e), i.p.searchurl && (c = i.p.url, n(i).jqGrid("setGridParam", {
url: i.p.searchurl
})), o = "stop" === n(i).triggerHandler("jqGridToolbarBeforeClear") ? !0 : !1, !o && n.isFunction(t.beforeClear) && (o = t.beforeClear.call(i)), o || r && n(i).jqGrid("setGridParam", {
search: l
}).trigger("reloadGrid", [{
page: 1
}]), c && n(i).jqGrid("setGridParam", {
url: c
}), n(i).triggerHandler("jqGridToolbarAfterClear"), n.isFunction(t.afterClear) && t.afterClear()
}, this.toggleToolbar = function () {
var r = n("tr.ui-search-toolbar", i.grid.hDiv),
t = !0 === i.p.frozenColumns ? n("tr.ui-search-toolbar", i.grid.fhDiv) : !1;
"none" == r.css("display") ? (r.show(), t && t.show()) : (r.hide(), t && t.hide())
})
})
},
destroyFilterToolbar: function () {
return this.each(function () {
this.ftoolbar && (this.toggleToolbar = this.clearToolbar = this.triggerToolbar = null, this.ftoolbar = !1, n(this.grid.hDiv).find("table thead tr.ui-search-toolbar").remove())
})
},
destroyGroupHeader: function (t) {
return void 0 === t && (t = !0), this.each(function () {
var f, i, s, u, r, e, o, h;
if (i = this.grid, o = n("table.ui-jqgrid-htable thead", i.hDiv), h = this.p.colModel, i) {
for (n(this).unbind(".setGroupHeaders"), f = n("<tr>", {
role: "rowheader"
}).addClass("ui-jqgrid-labels"), u = i.headers, i = 0, s = u.length; i < s; i++) {
r = h[i].hidden ? "none" : "", r = n(u[i].el).width(u[i].width).css("display", r);
try {
r.removeAttr("rowSpan")
} catch (c) {
r.attr("rowSpan", 1)
}
f.append(r), e = r.children("span.ui-jqgrid-resize"), 0 < e.length && (e[0].style.height = ""), r.children("div")[0].style.top = ""
}
n(o).children("tr.ui-jqgrid-labels").remove(), n(o).prepend(f), !0 === t && n(this).jqGrid("setGridParam", {
groupHeader: null
})
}
})
},
setGroupHeaders: function (t) {
return t = n.extend({
useColSpanStyle: !1,
groupHeaders: []
}, t || {}), this.each(function () {
var h, p, w;
this.p.groupHeader = t;
var u, r, c = 0,
f, i, o, l, a, e = this.p.colModel,
v = e.length,
y = this.grid.headers,
s = n("table.ui-jqgrid-htable", this.grid.hDiv),
b = s.children("thead").children("tr.ui-jqgrid-labels:last").addClass("jqg-second-row-header");
for (f = s.children("thead"), h = s.find(".jqg-first-row-header"), void 0 === h[0] ? h = n("<tr>", {
role: "row",
"aria-hidden": "true"
}).addClass("jqg-first-row-header").css("height", "auto") : h.empty(), w = function (n, t) {
for (var r = t.length, i = 0; i < r; i++)
if (t[i].startColumnName === n) return i;
return -1
}, n(this).prepend(f), f = n("<tr>", {
role: "rowheader"
}).addClass("ui-jqgrid-labels jqg-third-row-header"), u = 0; u < v; u++)
if (o = y[u].el, l = n(o), r = e[u], i = {
height: "0px",
width: y[u].width + "px",
display: r.hidden ? "none" : ""
}, n("<th>", {
role: "gridcell"
}).css(i).addClass("ui-first-th-" + this.p.direction).appendTo(h), o.style.width = "", i = w(r.name, t.groupHeaders), 0 <= i) {
for (i = t.groupHeaders[i], c = i.numberOfColumns, a = i.titleText, i = r = 0; i < c && u + i < v; i++) e[u + i].hidden || r++;
i = n("<th>").attr({
role: "columnheader"
}).addClass("ui-state-default ui-th-column-header ui-th-" + this.p.direction).css({
height: "22px",
"border-top": "0px none"
}).html(a), 0 < r && i.attr("colspan", "" + r), this.p.headertitles && i.attr("title", i.text()), 0 === r && i.hide(), l.before(i), f.append(o), c -= 1
} else 0 === c ? t.useColSpanStyle ? l.attr("rowspan", "2") : (n("<th>", {
role: "columnheader"
}).addClass("ui-state-default ui-th-column-header ui-th-" + this.p.direction).css({
display: r.hidden ? "none" : "",
"border-top": "0px none"
}).insertBefore(l), f.append(o)) : (f.append(o), c--);
e = n(this).children("thead"), e.prepend(h), f.insertAfter(b), s.append(e), t.useColSpanStyle && (s.find("span.ui-jqgrid-resize").each(function () {
var t = n(this).parent();
t.is(":visible") && (this.style.cssText = "height: " + t.height() + "px !important; cursor: col-resize;")
}), s.find("div.ui-jqgrid-sortable").each(function () {
var t = n(this),
i = t.parent();
i.is(":visible") && i.is(":has(span.ui-jqgrid-resize)") && t.css("top", (i.height() - t.outerHeight()) / 2 + "px")
})), p = e.find("tr.jqg-first-row-header"), n(this).bind("jqGridResizeStop.setGroupHeaders", function (n, t, i) {
p.find("th").eq(i).width(t)
})
})
},
setFrozenColumns: function () {
return this.each(function () {
var f, e;
if (this.grid) {
var t = this,
i = t.p.colModel,
r = 0,
s = i.length,
u = -1,
o = !1;
if (!(!0 === t.p.subGrid || !0 === t.p.treeGrid || !0 === t.p.cellEdit || t.p.sortable || t.p.scroll || t.p.grouping)) {
for (t.p.rownumbers && r++, t.p.multiselect && r++; r < s;) {
if (!0 === i[r].frozen) o = !0, u = r;
else break;
r++
}
0 <= u && o && (i = t.p.caption ? n(t.grid.cDiv).outerHeight() : 0, r = n(".ui-jqgrid-htable", "#gview_" + n.jgrid.jqID(t.p.id)).height(), t.p.toppager && (i += n(t.grid.topDiv).outerHeight()), !0 === t.p.toolbar[0] && "bottom" != t.p.toolbar[1] && (i += n(t.grid.uDiv).outerHeight()), t.grid.fhDiv = n('<div style="position:absolute;left:0px;top:' + i + "px;height:" + r + 'px;" class="frozen-div ui-state-default ui-jqgrid-hdiv"><\/div>'), t.grid.fbDiv = n('<div style="position:absolute;left:0px;top:' + (parseInt(i, 10) + parseInt(r, 10) + 1) + 'px;overflow-y:hidden" class="frozen-bdiv ui-jqgrid-bdiv"><\/div>'), n("#gview_" + n.jgrid.jqID(t.p.id)).append(t.grid.fhDiv), i = n(".ui-jqgrid-htable", "#gview_" + n.jgrid.jqID(t.p.id)).clone(!0), t.p.groupHeader ? (n("tr.jqg-first-row-header, tr.jqg-third-row-header", i).each(function () {
n("th:gt(" + u + ")", this).remove()
}), f = -1, e = -1, n("tr.jqg-second-row-header th", i).each(function () {
var t = parseInt(n(this).attr("colspan"), 10);
return t && (f += t, e++), f === u ? !1 : void 0
}), f !== u && (e = u), n("tr.jqg-second-row-header", i).each(function () {
n("th:gt(" + e + ")", this).remove()
})) : n("tr", i).each(function () {
n("th:gt(" + u + ")", this).remove()
}), n(i).width(1), n(t.grid.fhDiv).append(i).mousemove(function (n) {
if (t.grid.resizing) return t.grid.dragMove(n), !1
}), n(t).bind("jqGridResizeStop.setFrozenColumns", function (i, r, u) {
i = n(".ui-jqgrid-htable", t.grid.fhDiv), n("th:eq(" + u + ")", i).width(r), i = n(".ui-jqgrid-btable", t.grid.fbDiv), n("tr:first td:eq(" + u + ")", i).width(r)
}), n(t).bind("jqGridOnSortCol.setFrozenColumns", function (i, r) {
var u = n("tr.ui-jqgrid-labels:last th:eq(" + t.p.lastsort + ")", t.grid.fhDiv),
f = n("tr.ui-jqgrid-labels:last th:eq(" + r + ")", t.grid.fhDiv);
n("span.ui-grid-ico-sort", u).addClass("ui-state-disabled"), n(u).attr("aria-selected", "false"), n("span.ui-icon-" + t.p.sortorder, f).removeClass("ui-state-disabled"), n(f).attr("aria-selected", "true"), t.p.viewsortcols[0] || t.p.lastsort == r || (n("span.s-ico", u).hide(), n("span.s-ico", f).show())
}), n("#gview_" + n.jgrid.jqID(t.p.id)).append(t.grid.fbDiv), n(t.grid.bDiv).scroll(function () {
n(t.grid.fbDiv).scrollTop(n(this).scrollTop())
}), !0 === t.p.hoverrows && n("#" + n.jgrid.jqID(t.p.id)).unbind("mouseover").unbind("mouseout"), n(t).bind("jqGridAfterGridComplete.setFrozenColumns", function () {
n("#" + n.jgrid.jqID(t.p.id) + "_frozen").remove(), n(t.grid.fbDiv).height(n(t.grid.bDiv).height() - 16);
var i = n("#" + n.jgrid.jqID(t.p.id)).clone(!0);
n("tr", i).each(function () {
n("td:gt(" + u + ")", this).remove()
}), n(i).width(1).attr("id", t.p.id + "_frozen"), n(t.grid.fbDiv).append(i), !0 === t.p.hoverrows && (n("tr.jqgrow", i).hover(function () {
n(this).addClass("ui-state-hover"), n("#" + n.jgrid.jqID(this.id), "#" + n.jgrid.jqID(t.p.id)).addClass("ui-state-hover")
}, function () {
n(this).removeClass("ui-state-hover"), n("#" + n.jgrid.jqID(this.id), "#" + n.jgrid.jqID(t.p.id)).removeClass("ui-state-hover")
}), n("tr.jqgrow", "#" + n.jgrid.jqID(t.p.id)).hover(function () {
n(this).addClass("ui-state-hover"), n("#" + n.jgrid.jqID(this.id), "#" + n.jgrid.jqID(t.p.id) + "_frozen").addClass("ui-state-hover")
}, function () {
n(this).removeClass("ui-state-hover"), n("#" + n.jgrid.jqID(this.id), "#" + n.jgrid.jqID(t.p.id) + "_frozen").removeClass("ui-state-hover")
})), i = null
}), t.p.frozenColumns = !0)
}
}
})
},
destroyFrozenColumns: function () {
return this.each(function () {
if (this.grid && !0 === this.p.frozenColumns) {
if (n(this.grid.fhDiv).remove(), n(this.grid.fbDiv).remove(), this.grid.fhDiv = null, this.grid.fbDiv = null, n(this).unbind(".setFrozenColumns"), !0 === this.p.hoverrows) {
var t;
n("#" + n.jgrid.jqID(this.p.id)).bind("mouseover", function (i) {
t = n(i.target).closest("tr.jqgrow"), "ui-subgrid" !== n(t).attr("class") && n(t).addClass("ui-state-hover")
}).bind("mouseout", function (i) {
t = n(i.target).closest("tr.jqgrow"), n(t).removeClass("ui-state-hover")
})
}
this.p.frozenColumns = !1
}
})
}
})
}(jQuery),
function (n) {
n.extend(n.jgrid, {
showModal: function (n) {
n.w.show()
},
closeModal: function (n) {
n.w.hide().attr("aria-hidden", "true"), n.o && n.o.remove()
},
hideModal: function (t, i) {
if (i = n.extend({
jqm: !0,
gb: ""
}, i || {}), i.onClose) {
var r = i.gb && "string" == typeof i.gb && "#gbox_" === i.gb.substr(0, 6) ? i.onClose.call(n("#" + i.gb.substr(6))[0], t) : i.onClose(t);
if ("boolean" == typeof r && !r) return
}
if (n.fn.jqm && !0 === i.jqm) n(t).attr("aria-hidden", "true").jqmHide();
else {
if ("" !== i.gb) try {
n(".jqgrid-overlay:first", i.gb).hide()
} catch (u) { }
n(t).hide().attr("aria-hidden", "true")
}
},
findPos: function (n) {
var t = 0,
i = 0;
if (n.offsetParent)
do t += n.offsetLeft, i += n.offsetTop; while (n = n.offsetParent);
return [t, i]
},
createModal: function (t, i, r, u, f, e, o) {
var r = n.extend(!0, {}, n.jgrid.jqModal || {}, r),
s = document.createElement("div"),
a, v = this,
o = n.extend({}, o || {}),
h, c, l;
if (a = "rtl" == n(r.gbox).attr("dir") ? !0 : !1, s.className = "ui-widget ui-widget-content ui-corner-all ui-jqdialog", s.id = t.themodal, h = document.createElement("div"), h.className = "ui-jqdialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix", h.id = t.modalhead, n(h).append("<span class='ui-jqdialog-title'>" + r.caption + "<\/span>"), c = n("<a href='javascript:void(0)' class='ui-jqdialog-titlebar-close ui-corner-all'><\/a>").hover(function () {
c.addClass("ui-state-hover")
}, function () {
c.removeClass("ui-state-hover")
}).append("<span class='ui-icon ui-icon-closethick'><\/span>"), n(h).append(c), a ? (s.dir = "rtl", n(".ui-jqdialog-title", h).css("float", "right"), n(".ui-jqdialog-titlebar-close", h).css("left", "0.3em")) : (s.dir = "ltr", n(".ui-jqdialog-title", h).css("float", "left"), n(".ui-jqdialog-titlebar-close", h).css("right", "0.3em")), l = document.createElement("div"), n(l).addClass("ui-jqdialog-content ui-widget-content").attr("id", t.modalcontent), n(l).append(i), s.appendChild(l), n(s).prepend(h), !0 === e ? n("body").append(s) : "string" == typeof e ? n(e).append(s) : n(s).insertBefore(u), n(s).css(o), void 0 === r.jqModal && (r.jqModal = !0), i = {}, n.fn.jqm && !0 === r.jqModal ? (0 === r.left && 0 === r.top && r.overlay && (o = [], o = n.jgrid.findPos(f), r.left = o[0] + 4, r.top = o[1] + 4), i.top = r.top + "px", i.left = r.left) : (0 !== r.left || 0 !== r.top) && (i.left = r.left, i.top = r.top + "px"), n("a.ui-jqdialog-titlebar-close", h).click(function () {
var i = n("#" + n.jgrid.jqID(t.themodal)).data("onClose") || r.onClose,
u = n("#" + n.jgrid.jqID(t.themodal)).data("gbox") || r.gbox;
return v.hideModal("#" + n.jgrid.jqID(t.themodal), {
gb: u,
jqm: r.jqModal,
onClose: i
}), !1
}), 0 !== r.width && r.width || (r.width = 300), 0 !== r.height && r.height || (r.height = 200), r.zIndex || (u = n(u).parents("*[role=dialog]").filter(":first").css("z-index"), r.zIndex = u ? parseInt(u, 10) + 2 : 950), u = 0, a && i.left && !e && (u = n(r.gbox).width() - (isNaN(r.width) ? 0 : parseInt(r.width, 10)) - 8, i.left = parseInt(i.left, 10) + parseInt(u, 10)), i.left && (i.left += "px"), n(s).css(n.extend({
width: isNaN(r.width) ? "auto" : r.width + "px",
height: isNaN(r.height) ? "auto" : r.height + "px",
zIndex: r.zIndex,
overflow: "hidden"
}, i)).attr({
tabIndex: "-1",
role: "dialog",
"aria-labelledby": t.modalhead,
"aria-hidden": "true"
}), void 0 === r.drag && (r.drag = !0), void 0 === r.resize && (r.resize = !0), r.drag)
if (n(h).css("cursor", "move"), n.fn.jqDrag) n(s).jqDrag(h);
else try {
n(s).draggable({
handle: n("#" + n.jgrid.jqID(h.id))
})
} catch (y) { }
if (r.resize)
if (n.fn.jqResize) n(s).append("<div class='jqResize ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se'><\/div>"), n("#" + n.jgrid.jqID(t.themodal)).jqResize(".jqResize", t.scrollelm ? "#" + n.jgrid.jqID(t.scrollelm) : !1);
else try {
n(s).resizable({
handles: "se, sw",
alsoResize: t.scrollelm ? "#" + n.jgrid.jqID(t.scrollelm) : !1
})
} catch (p) { } !0 === r.closeOnEscape && n(s).keydown(function (i) {
i.which == 27 && (i = n("#" + n.jgrid.jqID(t.themodal)).data("onClose") || r.onClose, v.hideModal("#" + n.jgrid.jqID(t.themodal), {
gb: r.gbox,
jqm: r.jqModal,
onClose: i
}))
})
},
viewModal: function (t, i) {
if (i = n.extend({
toTop: !0,
overlay: 10,
modal: !1,
overlayClass: "ui-widget-overlay",
onShow: n.jgrid.showModal,
onHide: n.jgrid.closeModal,
gbox: "",
jqm: !0,
jqM: !0
}, i || {}), n.fn.jqm && !0 === i.jqm) i.jqM ? n(t).attr("aria-hidden", "false").jqm(i).jqmShow() : n(t).attr("aria-hidden", "false").jqmShow();
else {
"" !== i.gbox && (n(".jqgrid-overlay:first", i.gbox).show(), n(t).data("gbox", i.gbox)), n(t).show().attr("aria-hidden", "false");
try {
n(":input:visible", t)[0].focus()
} catch (r) { }
}
},
info_dialog: function (t, i, r, u) {
var f = {
width: 290,
height: "auto",
dataheight: "auto",
drag: !0,
resize: !1,
left: 250,
top: 170,
zIndex: 1e3,
jqModal: !0,
modal: !1,
closeOnEscape: !0,
align: "center",
buttonalign: "center",
buttons: []
},
e, o;
if (n.extend(!0, f, n.jgrid.jqModal || {}, {
caption: "<b>" + t + "<\/b>"
}, u || {}), e = f.jqModal, o = this, n.fn.jqm && !e && (e = !1), t = "", 0 < f.buttons.length)
for (u = 0; u < f.buttons.length; u++) void 0 === f.buttons[u].id && (f.buttons[u].id = "info_button_" + u), t += "<a href='javascript:void(0)' id='" + f.buttons[u].id + "' class='fm-button ui-state-default ui-corner-all'>" + f.buttons[u].text + "<\/a>";
u = isNaN(f.dataheight) ? f.dataheight : f.dataheight + "px", i = "<div id='info_id'>" + ("<div id='infocnt' style='margin:0px;padding-bottom:1em;width:100%;overflow:auto;position:relative;height:" + u + ";" + ("text-align:" + f.align + ";") + "'>" + i + "<\/div>"), i += r ? "<div class='ui-widget-content ui-helper-clearfix' style='text-align:" + f.buttonalign + ";padding-bottom:0.8em;padding-top:0.5em;background-image: none;border-width: 1px 0 0 0;'><a href='javascript:void(0)' id='closedialog' class='fm-button ui-state-default ui-corner-all'>" + r + "<\/a>" + t + "<\/div>" : "" !== t ? "<div class='ui-widget-content ui-helper-clearfix' style='text-align:" + f.buttonalign + ";padding-bottom:0.8em;padding-top:0.5em;background-image: none;border-width: 1px 0 0 0;'>" + t + "<\/div>" : "", i += "<\/div>";
try {
"false" == n("#info_dialog").attr("aria-hidden") && n.jgrid.hideModal("#info_dialog", {
jqm: e
}), n("#info_dialog").remove()
} catch (s) { }
n.jgrid.createModal({
themodal: "info_dialog",
modalhead: "info_head",
modalcontent: "info_content",
scrollelm: "infocnt"
}, i, f, "", "", !0), t && n.each(f.buttons, function (t) {
n("#" + n.jgrid.jqID(this.id), "#info_id").bind("click", function () {
return f.buttons[t].onClick.call(n("#info_dialog")), !1
})
}), n("#closedialog", "#info_id").click(function () {
return o.hideModal("#info_dialog", {
jqm: e
}), !1
}), n(".fm-button", "#info_dialog").hover(function () {
n(this).addClass("ui-state-hover")
}, function () {
n(this).removeClass("ui-state-hover")
}), n.isFunction(f.beforeOpen) && f.beforeOpen(), n.jgrid.viewModal("#info_dialog", {
onHide: function (n) {
n.w.hide().remove(), n.o && n.o.remove()
},
modal: f.modal,
jqm: e
}), n.isFunction(f.afterOpen) && f.afterOpen();
try {
n("#info_dialog").focus()
} catch (h) { }
},
bindEv: function (t, i, r) {
n.isFunction(i.dataInit) && i.dataInit.call(r, t), i.dataEvents && n.each(i.dataEvents, function () {
void 0 !== this.data ? n(t).bind(this.type, this.data, this.fn) : n(t).bind(this.type, this.fn)
})
},
createEl: function (t, i, r, u, f) {
function c(t, i, r) {
var u = "dataInit,dataEvents,dataUrl,buildSelect,sopt,searchhidden,defaultValue,attr,custom_element,custom_value".split(",");
void 0 !== r && n.isArray(r) && n.merge(u, r), n.each(i, function (i, r) {
-1 === n.inArray(i, u) && n(t).attr(i, r)
}), i.hasOwnProperty("id") || n(t).attr("id", n.jgrid.randId())
}
var e = "",
l = this,
o, v, h, s, f;
switch (t) {
case "textarea":
e = document.createElement("textarea"), u ? i.cols || n(e).css({
width: "98%"
}) : i.cols || (i.cols = 20), i.rows || (i.rows = 2), ("&nbsp;" == r || "&#160;" == r || 1 == r.length && 160 == r.charCodeAt(0)) && (r = ""), e.value = r, c(e, i), n(e).attr({
role: "textbox",
multiline: "true"
});
break;
case "checkbox":
e = document.createElement("input"), e.type = "checkbox", i.value ? (t = i.value.split(":"), r === t[0] && (e.checked = !0, e.defaultChecked = !0), e.value = t[0], n(e).attr("offval", t[1])) : (t = r.toLowerCase(), 0 > t.search(/(false|0|no|off|undefined)/i) && "" !== t ? (e.checked = !0, e.defaultChecked = !0, e.value = r) : e.value = "on", n(e).attr("offval", "off")), c(e, i, ["value"]), n(e).attr("role", "checkbox");
break;
case "select":
if (e = document.createElement("select"), e.setAttribute("role", "select"), u = [], !0 === i.multiple ? (t = !0, e.multiple = "multiple", n(e).attr("aria-multiselectable", "true")) : t = !1, void 0 !== i.dataUrl) t = i.name ? ("" + i.id).substring(0, ("" + i.id).length - ("" + i.name).length - 1) : "" + i.id, u = i.postData || f.postData, l.p && l.p.idPrefix ? t = n.jgrid.stripPref(l.p.idPrefix, t) : u = void 0, n.ajax(n.extend({
url: i.dataUrl,
type: "GET",
dataType: "html",
data: n.isFunction(u) ? u.call(l, t, r, "" + i.name) : u,
context: {
elem: e,
options: i,
vl: r
},
success: function (t) {
var i = [],
u = this.elem,
f = this.vl,
r = n.extend({}, this.options),
e = r.multiple === !0;
n.isFunction(r.buildSelect) && (t = r.buildSelect.call(l, t)), (t = n(t).html()) && (n(u).append(t), c(u, r), r.size === void 0 && (r.size = e ? 3 : 1), e ? (i = f.split(","), i = n.map(i, function (t) {
return n.trim(t)
})) : i[0] = n.trim(f), setTimeout(function () {
n("option", u).each(function (t) {
t === 0 && u.multiple && (this.selected = !1), n(this).attr("role", "option"), (n.inArray(n.trim(n(this).text()), i) > -1 || n.inArray(n.trim(n(this).val()), i) > -1) && (this.selected = "selected")
})
}, 0))
}
}, f || {}));
else if (i.value) {
if (void 0 === i.size && (i.size = t ? 3 : 1), t && (u = r.split(","), u = n.map(u, function (t) {
return n.trim(t)
})), "function" == typeof i.value && (i.value = i.value()), s = void 0 === i.separator ? ":" : i.separator, f = void 0 === i.delimiter ? ";" : i.delimiter, "string" == typeof i.value)
for (v = i.value.split(f), o = 0; o < v.length; o++) h = v[o].split(s), 2 < h.length && (h[1] = n.map(h, function (n, t) {
if (t > 0) return n
}).join(s)), f = document.createElement("option"), f.setAttribute("role", "option"), f.value = h[0], f.innerHTML = h[1], e.appendChild(f), t || n.trim(h[0]) != n.trim(r) && n.trim(h[1]) != n.trim(r) || (f.selected = "selected"), t && (-1 < n.inArray(n.trim(h[1]), u) || -1 < n.inArray(n.trim(h[0]), u)) && (f.selected = "selected");
else if ("object" == typeof i.value)
for (o in s = i.value, s) s.hasOwnProperty(o) && (f = document.createElement("option"), f.setAttribute("role", "option"), f.value = o, f.innerHTML = s[o], e.appendChild(f), t || n.trim(o) != n.trim(r) && n.trim(s[o]) != n.trim(r) || (f.selected = "selected"), t && (-1 < n.inArray(n.trim(s[o]), u) || -1 < n.inArray(n.trim(o), u)) && (f.selected = "selected"));
c(e, i, ["value"])
}
break;
case "text":
case "password":
case "button":
o = "button" == t ? "button" : "textbox", e = document.createElement("input"), e.type = t, e.value = r, c(e, i), "button" != t && (u ? i.size || n(e).css({
width: "98%"
}) : i.size || (i.size = 20)), n(e).attr("role", o);
break;
case "image":
case "file":
e = document.createElement("input"), e.type = t, c(e, i);
break;
case "custom":
e = document.createElement("span");
try {
if (n.isFunction(i.custom_element))
if (s = i.custom_element.call(l, r, i)) s = n(s).addClass("customelement").attr({
id: i.id,
name: i.name
}), n(e).empty().append(s);
else throw "e2";
else throw "e1";
} catch (a) {
"e1" == a && n.jgrid.info_dialog(n.jgrid.errors.errcap, "function 'custom_element' " + n.jgrid.edit.msg.nodefined, n.jgrid.edit.bClose), "e2" == a ? n.jgrid.info_dialog(n.jgrid.errors.errcap, "function 'custom_element' " + n.jgrid.edit.msg.novalue, n.jgrid.edit.bClose) : n.jgrid.info_dialog(n.jgrid.errors.errcap, "string" == typeof a ? a : a.message, n.jgrid.edit.bClose)
}
}
return e
},
checkDate: function (n, t) {
var i = {},
r, n = n.toLowerCase(),
f, e, o, u, s;
if (r = -1 != n.indexOf("/") ? "/" : -1 != n.indexOf("-") ? "-" : -1 != n.indexOf(".") ? "." : "/", n = n.split(r), t = t.split(r), 3 != t.length) return !1;
for (r = -1, e = -1, o = -1, u = 0; u < n.length; u++) f = isNaN(t[u]) ? 0 : parseInt(t[u], 10), i[n[u]] = f, f = n[u], -1 != f.indexOf("y") && (r = u), -1 != f.indexOf("m") && (o = u), -1 != f.indexOf("d") && (e = u);
return (f = "y" == n[r] || "yyyy" == n[r] ? 4 : "yy" == n[r] ? 2 : -1, u = function (n) {
for (var t = 1; t <= n; t++) this[t] = 31, (4 == t || 6 == t || 9 == t || 11 == t) && (this[t] = 30), 2 == t && (this[t] = 29);
return this
}(12), -1 === r) ? !1 : (s = i[n[r]].toString(), 2 == f && 1 == s.length && (f = 1), s.length != f || 0 === i[n[r]] && "00" != t[r] || -1 === o) ? !1 : (s = i[n[o]].toString(), 1 > s.length || 1 > i[n[o]] || 12 < i[n[o]] || -1 === e) ? !1 : (s = i[n[e]].toString(), 1 > s.length || 1 > i[n[e]] || 31 < i[n[e]] || 2 == i[n[o]] && i[n[e]] > (0 == i[n[r]] % 4 && (0 != i[n[r]] % 100 || 0 == i[n[r]] % 400) ? 29 : 28) || i[n[e]] > u[i[n[o]]] ? !1 : !0)
},
isEmpty: function (n) {
return n.match(/^\s+$/) || "" === n ? !0 : !1
},
checkTime: function (t) {
if (!n.jgrid.isEmpty(t))
if (t = t.match(/^(\d{1,2}):(\d{2})([ap]m)?$/)) {
if (t[3]) {
if (1 > t[1] || 12 < t[1]) return !1
} else if (23 < t[1]) return !1;
if (59 < t[2]) return !1
} else return !1;
return !0
},
checkValues: function (t, i, r, u, f) {
var e, o;
if (void 0 === u)
if ("string" == typeof i) {
for (u = 0, f = r.p.colModel.length; u < f; u++)
if (r.p.colModel[u].name == i) {
e = r.p.colModel[u].editrules, i = u;
try {
o = r.p.colModel[u].formoptions.label
} catch (s) { }
break
}
} else 0 <= i && (e = r.p.colModel[i].editrules);
else e = u, o = void 0 === f ? "_" : f;
if (e) {
if (o || (o = r.p.colNames[i]), !0 === e.required && n.jgrid.isEmpty(t)) return [!1, o + ": " + n.jgrid.edit.msg.required, ""];
if (u = !1 === e.required ? !1 : !0, !0 === e.number && !(!1 === u && n.jgrid.isEmpty(t)) && isNaN(t)) return [!1, o + ": " + n.jgrid.edit.msg.number, ""];
if (void 0 !== e.minValue && !isNaN(e.minValue) && parseFloat(t) < parseFloat(e.minValue)) return [!1, o + ": " + n.jgrid.edit.msg.minValue + " " + e.minValue, ""];
if (void 0 !== e.maxValue && !isNaN(e.maxValue) && parseFloat(t) > parseFloat(e.maxValue)) return [!1, o + ": " + n.jgrid.edit.msg.maxValue + " " + e.maxValue, ""];
if (!0 === e.email && !(!1 === u && n.jgrid.isEmpty(t)) && (f = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i, !f.test(t))) return [!1, o + ": " + n.jgrid.edit.msg.email, ""];
if (!0 === e.integer && !(!1 === u && n.jgrid.isEmpty(t)) && (isNaN(t) || 0 != t % 1 || -1 != t.indexOf("."))) return [!1, o + ": " + n.jgrid.edit.msg.integer, ""];
if (!0 === e.date && !(!1 === u && n.jgrid.isEmpty(t)) && (i = r.p.colModel[i].formatoptions && r.p.colModel[i].formatoptions.newformat ? r.p.colModel[i].formatoptions.newformat : r.p.colModel[i].datefmt || "Y-m-d", !n.jgrid.checkDate(i, t))) return [!1, o + ": " + n.jgrid.edit.msg.date + " - " + i, ""];
if (!0 === e.time && !(!1 === u && n.jgrid.isEmpty(t)) && !n.jgrid.checkTime(t)) return [!1, o + ": " + n.jgrid.edit.msg.date + " - hh:mm (am/pm)", ""];
if (!0 === e.url && !(!1 === u && n.jgrid.isEmpty(t)) && (f = /^(((https?)|(ftp)):\/\/([\-\w]+\.)+\w{2,3}(\/[%\-\w]+(\.\w{2,})?)*(([\w\-\.\?\\\/+@&#;`~=%!]*)(\.\w{2,})?)*\/?)/i, !f.test(t))) return [!1, o + ": " + n.jgrid.edit.msg.url, ""];
if (!0 === e.custom && !(!1 === u && n.jgrid.isEmpty(t))) return n.isFunction(e.custom_func) ? (t = e.custom_func.call(r, t, o), n.isArray(t) ? t : [!1, n.jgrid.edit.msg.customarray, ""]) : [!1, n.jgrid.edit.msg.customfcheck, ""]
}
return [!0, "", ""]
}
})
}(jQuery),
function (n) {
var t = {};
n.jgrid.extend({
searchGrid: function (t) {
return t = n.extend(!0, {
recreateFilter: !1,
drag: !0,
sField: "searchField",
sValue: "searchString",
sOper: "searchOper",
sFilter: "filters",
loadDefaults: !0,
beforeShowSearch: null,
afterShowSearch: null,
onInitializeSearch: null,
afterRedraw: null,
afterChange: null,
closeAfterSearch: !1,
closeAfterReset: !1,
closeOnEscape: !1,
searchOnEnter: !1,
multipleSearch: !1,
multipleGroup: !1,
top: 0,
left: 0,
jqModal: !0,
modal: !1,
resize: !0,
width: 450,
height: "auto",
dataheight: "auto",
showQuery: !1,
errorcheck: !0,
sopt: null,
stringResult: void 0,
onClose: null,
onSearch: null,
onReset: null,
toTop: !0,
overlay: 30,
columns: [],
tmplNames: null,
tmplFilters: null,
tmplLabel: " Template: ",
showOnLoad: !1,
layer: null
}, n.jgrid.search, t || {}), this.each(function () {
function w(f) {
s = n(i).triggerHandler("jqGridFilterBeforeShow", [f]), void 0 === s && (s = !0), s && n.isFunction(t.beforeShowSearch) && (s = t.beforeShowSearch.call(i, f)), s && (n.jgrid.viewModal("#" + n.jgrid.jqID(u.themodal), {
gbox: "#gbox_" + n.jgrid.jqID(r),
jqm: t.jqModal,
modal: t.modal,
overlay: t.overlay,
toTop: t.toTop
}), n(i).triggerHandler("jqGridFilterAfterShow", [f]), n.isFunction(t.afterShowSearch) && t.afterShowSearch.call(i, f))
}
var i = this,
v;
if (i.grid) {
var r = "fbox_" + i.p.id,
s = !0,
u = {
themodal: "searchmod" + r,
modalhead: "searchhd" + r,
modalcontent: "searchcnt" + r,
scrollelm: r
},
e = i.p.postData[t.sFilter];
if ("string" == typeof e && (e = n.jgrid.parse(e)), !0 === t.recreateFilter && n("#" + n.jgrid.jqID(u.themodal)).remove(), void 0 !== n("#" + n.jgrid.jqID(u.themodal))[0]) w(n("#fbox_" + n.jgrid.jqID(+i.p.id)));
else {
var f = n("<div><div id='" + r + "' class='searchFilter' style='overflow:auto'><\/div><\/div>").insertBefore("#gview_" + n.jgrid.jqID(i.p.id)),
a = "left",
b = "";
"rtl" == i.p.direction && (a = "right", b = " style='text-align:left'", f.attr("dir", "rtl"));
var h = n.extend([], i.p.colModel),
k = "<a href='javascript:void(0)' id='" + r + "_search' class='fm-button ui-state-default ui-corner-all fm-button-icon-right ui-reset'><span class='ui-icon ui-icon-search'><\/span>" + t.Find + "<\/a>",
d = "<a href='javascript:void(0)' id='" + r + "_reset' class='fm-button ui-state-default ui-corner-all fm-button-icon-left ui-search'><span class='ui-icon ui-icon-arrowreturnthick-1-w'><\/span>" + t.Reset + "<\/a>",
y = "",
o = "",
p, c = !1,
l = -1;
t.showQuery && (y = "<a href='javascript:void(0)' id='" + r + "_query' class='fm-button ui-state-default ui-corner-all fm-button-icon-left'><span class='ui-icon ui-icon-comment'><\/span>Query<\/a>"), t.columns.length ? h = t.columns : n.each(h, function (n, t) {
if (t.label || (t.label = i.p.colNames[n]), !c) {
var r = t.search === void 0 ? !0 : t.search,
u = t.hidden === !0;
(t.searchoptions && t.searchoptions.searchhidden === !0 && r || r && !u) && (c = !0, p = t.index || t.name, l = n)
}
}), (!e && p || !1 === t.multipleSearch) && (v = "eq", 0 <= l && h[l].searchoptions && h[l].searchoptions.sopt ? v = h[l].searchoptions.sopt[0] : t.sopt && t.sopt.length && (v = t.sopt[0]), e = {
groupOp: "AND",
rules: [{
field: p,
op: v,
data: ""
}]
}), c = !1, t.tmplNames && t.tmplNames.length && (c = !0, o = t.tmplLabel, o += "<select class='ui-template'>", o += "<option value='default'>Default<\/option>", n.each(t.tmplNames, function (n, t) {
o = o + ("<option value='" + n + "'>" + t + "<\/option>")
}), o += "<\/select>"), a = "<table class='EditTable' style='border:0px none;margin-top:5px' id='" + r + "_2'><tbody><tr><td colspan='2'><hr class='ui-widget-content' style='margin:1px'/><\/td><\/tr><tr><td class='EditButton' style='text-align:" + a + "'>" + d + o + "<\/td><td class='EditButton' " + b + ">" + y + k + "<\/td><\/tr><\/tbody><\/table>", r = n.jgrid.jqID(r), n("#" + r).jqFilter({
columns: h,
filter: t.loadDefaults ? e : null,
showQuery: t.showQuery,
errorcheck: t.errorcheck,
sopt: t.sopt,
groupButton: t.multipleGroup,
ruleButtons: t.multipleSearch,
afterRedraw: t.afterRedraw,
_gridsopt: n.jgrid.search.odata,
ajaxSelectOptions: i.p.ajaxSelectOptions,
groupOps: t.groupOps,
onChange: function () {
this.p.showQuery && n(".query", this).html(this.toUserFriendlyString()), n.isFunction(t.afterChange) && t.afterChange.call(i, n("#" + r), t)
},
direction: i.p.direction
}), f.append(a), c && t.tmplFilters && t.tmplFilters.length && n(".ui-template", f).bind("change", function () {
var i = n(this).val();
return i == "default" ? n("#" + r).jqFilter("addFilter", e) : n("#" + r).jqFilter("addFilter", t.tmplFilters[parseInt(i, 10)]), !1
}), !0 === t.multipleGroup && (t.multipleSearch = !0), n(i).triggerHandler("jqGridFilterInitialize", [n("#" + r)]), n.isFunction(t.onInitializeSearch) && t.onInitializeSearch.call(i, n("#" + r)), t.gbox = "#gbox_" + r, t.layer ? n.jgrid.createModal(u, f, t, "#gview_" + n.jgrid.jqID(i.p.id), n("#gbox_" + n.jgrid.jqID(i.p.id))[0], "#" + n.jgrid.jqID(t.layer), {
position: "relative"
}) : n.jgrid.createModal(u, f, t, "#gview_" + n.jgrid.jqID(i.p.id), n("#gbox_" + n.jgrid.jqID(i.p.id))[0]), (t.searchOnEnter || t.closeOnEscape) && n("#" + n.jgrid.jqID(u.themodal)).keydown(function (i) {
var f = n(i.target);
return t.searchOnEnter && i.which === 13 && !f.hasClass("add-group") && !f.hasClass("add-rule") && !f.hasClass("delete-group") && !f.hasClass("delete-rule") && (!f.hasClass("fm-button") || !f.is("[id$=_query]")) ? (n("#" + r + "_search").focus().click(), !1) : t.closeOnEscape && i.which === 27 ? (n("#" + n.jgrid.jqID(u.modalhead)).find(".ui-jqdialog-titlebar-close").focus().click(), !1) : void 0
}), y && n("#" + r + "_query").bind("click", function () {
return n(".queryresult", f).toggle(), !1
}), void 0 === t.stringResult && (t.stringResult = t.multipleSearch), n("#" + r + "_search").bind("click", function () {
var o = n("#" + r),
f = {},
s, e = o.jqFilter("filterData");
if (t.errorcheck && (o[0].hideError(), t.showQuery || o.jqFilter("toSQLString"), o[0].p.error)) return o[0].showError(), !1;
if (t.stringResult) {
try {
s = xmlJsonClass.toJson(e, "", "", !1)
} catch (h) {
try {
s = JSON.stringify(e)
} catch (c) { }
}
typeof s == "string" && (f[t.sFilter] = s, n.each([t.sField, t.sValue, t.sOper], function () {
f[this] = ""
}))
} else t.multipleSearch ? (f[t.sFilter] = e, n.each([t.sField, t.sValue, t.sOper], function () {
f[this] = ""
})) : (f[t.sField] = e.rules[0].field, f[t.sValue] = e.rules[0].data, f[t.sOper] = e.rules[0].op, f[t.sFilter] = "");
return i.p.search = !0, n.extend(i.p.postData, f), n(i).triggerHandler("jqGridFilterSearch"), n.isFunction(t.onSearch) && t.onSearch.call(i), n(i).trigger("reloadGrid", [{
page: 1
}]), t.closeAfterSearch && n.jgrid.hideModal("#" + n.jgrid.jqID(u.themodal), {
gb: "#gbox_" + n.jgrid.jqID(i.p.id),
jqm: t.jqModal,
onClose: t.onClose
}), !1
}), n("#" + r + "_reset").bind("click", function () {
var u = {},
e = n("#" + r);
return i.p.search = !1, t.multipleSearch === !1 ? u[t.sField] = u[t.sValue] = u[t.sOper] = "" : u[t.sFilter] = "", e[0].resetFilter(), c && n(".ui-template", f).val("default"), n.extend(i.p.postData, u), n(i).triggerHandler("jqGridFilterReset"), n.isFunction(t.onReset) && t.onReset.call(i), n(i).trigger("reloadGrid", [{
page: 1
}]), !1
}), w(n("#" + r)), n(".fm-button:not(.ui-state-disabled)", f).hover(function () {
n(this).addClass("ui-state-hover")
}, function () {
n(this).removeClass("ui-state-hover")
})
}
}
})
},
editGridRow: function (i, r) {
return r = n.extend(!0, {
top: 0,
left: 0,
width: 300,
datawidth: "auto",
height: "auto",
dataheight: "auto",
modal: !1,
overlay: 30,
drag: !0,
resize: !0,
url: null,
mtype: "POST",
clearAfterAdd: !0,
closeAfterEdit: !1,
reloadAfterSubmit: !0,
onInitializeForm: null,
beforeInitData: null,
beforeShowForm: null,
afterShowForm: null,
beforeSubmit: null,
afterSubmit: null,
onclickSubmit: null,
afterComplete: null,
onclickPgButtons: null,
afterclickPgButtons: null,
editData: {},
recreateForm: !1,
jqModal: !0,
closeOnEscape: !1,
addedrow: "first",
topinfo: "",
bottominfo: "",
saveicon: [],
closeicon: [],
savekey: [!1, 13],
navkeys: [!1, 38, 40],
checkOnSubmit: !1,
checkOnUpdate: !1,
_savedData: {},
processing: !1,
onClose: null,
ajaxEditOptions: {},
serializeEditData: null,
viewPagerButtons: !0
}, n.jgrid.edit, r || {}), t[n(this)[0].p.id] = r, this.each(function () {
function at() {
return n(o + " > tbody > tr > td > .FormElement").each(function () {
var i = n(".customelement", this),
t, r;
if (i.length) t = n(i[0]).attr("name"), n.each(u.p.colModel, function () {
if (this.name === t && this.editoptions && n.isFunction(this.editoptions.custom_value)) {
try {
if (f[t] = this.editoptions.custom_value.call(u, n("#" + n.jgrid.jqID(t), o), "get"), void 0 === f[t]) throw "e1";
} catch (i) {
"e1" === i ? n.jgrid.info_dialog(n.jgrid.errors.errcap, "function 'custom_value' " + n.jgrid.edit.msg.novalue, n.jgrid.edit.bClose) : n.jgrid.info_dialog(n.jgrid.errors.errcap, i.message, n.jgrid.edit.bClose)
}
return !0
}
});
else {
switch (n(this).get(0).type) {
case "checkbox":
n(this).is(":checked") ? f[this.name] = n(this).val() : (i = n(this).attr("offval"), f[this.name] = i);
break;
case "select-one":
f[this.name] = n("option:selected", this).val(), y[this.name] = n("option:selected", this).text();
break;
case "select-multiple":
f[this.name] = n(this).val(), f[this.name] = f[this.name] ? f[this.name].join(",") : "", r = [], n("option:selected", this).each(function (t, i) {
r[t] = n(i).text()
}), y[this.name] = r.join(",");
break;
case "password":
case "text":
case "textarea":
case "button":
f[this.name] = n(this).val()
}
u.p.autoencode && (f[this.name] = n.jgrid.htmlEncode(f[this.name]))
}
}), !0
}
function bt(i, r, f, o) {
for (var h, k, c, y = 0, s, p, l, w = [], a = !1, b = "", v = 1; v <= o; v++) b += "<td class='CaptionTD'>&#160;<\/td><td class='DataTD'>&#160;<\/td>";
return "_empty" != i && (a = n(r).jqGrid("getInd", i)), n(r.p.colModel).each(function (v) {
var tt;
if (h = this.name, p = (k = this.editrules && !0 === this.editrules.edithidden ? !1 : !0 === this.hidden ? !0 : !1) ? "style='display:none'" : "", "cb" !== h && "subgrid" !== h && !0 === this.editable && "rn" !== h) {
if (!1 === a) s = "";
else if (h == r.p.ExpandColumn && !0 === r.p.treeGrid) s = n("td[role='gridcell']:eq(" + v + ")", r.rows[a]).text();
else {
try {
s = n.unformat.call(r, n("td[role='gridcell']:eq(" + v + ")", r.rows[a]), {
rowId: i,
colModel: this
}, v)
} catch (rt) {
s = this.edittype && "textarea" == this.edittype ? n("td[role='gridcell']:eq(" + v + ")", r.rows[a]).text() : n("td[role='gridcell']:eq(" + v + ")", r.rows[a]).html()
}
s && "&nbsp;" != s && "&#160;" != s && (1 != s.length || 160 != s.charCodeAt(0)) || (s = "")
}
var d = n.extend({}, this.editoptions || {}, {
id: h,
name: h
}),
g = n.extend({}, {
elmprefix: "",
elmsuffix: "",
rowabove: !1,
rowcontent: ""
}, this.formoptions || {}),
nt = parseInt(g.rowpos, 10) || y + 1,
it = parseInt(2 * (parseInt(g.colpos, 10) || 1), 10);
"_empty" == i && d.defaultValue && (s = n.isFunction(d.defaultValue) ? d.defaultValue.call(u) : d.defaultValue), this.edittype || (this.edittype = "text"), u.p.autoencode && (s = n.jgrid.htmlDecode(s)), l = n.jgrid.createEl.call(u, this.edittype, d, s, !1, n.extend({}, n.jgrid.ajaxOptions, r.p.ajaxSelectOptions || {})), "" === s && "checkbox" == this.edittype && (s = n(l).attr("offval")), "" === s && "select" == this.edittype && (s = n("option:eq(0)", l).text()), (t[u.p.id].checkOnSubmit || t[u.p.id].checkOnUpdate) && (t[u.p.id]._savedData[h] = s), n(l).addClass("FormElement"), -1 < n.inArray(this.edittype, ["text", "textarea", "password", "select"]) && n(l).addClass("ui-widget-content ui-corner-all"), c = n(f).find("tr[rowpos=" + nt + "]"), g.rowabove && (tt = n("<tr><td class='contentinfo' colspan='" + 2 * o + "'>" + g.rowcontent + "<\/td><\/tr>"), n(f).append(tt), tt[0].rp = nt), 0 === c.length && (c = n("<tr " + p + " rowpos='" + nt + "'><\/tr>").addClass("FormData").attr("id", "tr_" + h), n(c).append(b), n(f).append(c), c[0].rp = nt), n("td:eq(" + (it - 2) + ")", c[0]).html(void 0 === g.label ? r.p.colNames[v] : g.label), n("td:eq(" + (it - 1) + ")", c[0]).append(g.elmprefix).append(l).append(g.elmsuffix), n.isFunction(d.custom_value) && "_empty" !== i && d.custom_value.call(u, n("#" + h, "#" + e), "set", s), n.jgrid.bindEv(l, d, u), w[y] = v, y++
}
}), 0 < y && (v = n("<tr class='FormData' style='display:none'><td class='CaptionTD'><\/td><td colspan='" + (2 * o - 1) + "' class='DataTD'><input class='FormElement' id='id_g' type='text' name='" + r.p.id + "_id' value='" + i + "'/><\/td><\/tr>"), v[0].rp = y + 999, n(f).append(v), t[u.p.id].checkOnSubmit || t[u.p.id].checkOnUpdate) && (t[u.p.id]._savedData[r.p.id + "_id"] = i), w
}
function g(i, r, f) {
var e, p = 0,
s, h, a, l, v, c, y;
(t[u.p.id].checkOnSubmit || t[u.p.id].checkOnUpdate) && (t[u.p.id]._savedData = {}, t[u.p.id]._savedData[r.p.id + "_id"] = i), c = r.p.colModel, "_empty" == i ? (n(c).each(function () {
e = this.name, a = n.extend({}, this.editoptions || {}), (h = n("#" + n.jgrid.jqID(e), "#" + f)) && h.length && null !== h[0] && (l = "", a.defaultValue ? (l = n.isFunction(a.defaultValue) ? a.defaultValue.call(u) : a.defaultValue, "checkbox" == h[0].type ? (v = l.toLowerCase(), 0 > v.search(/(false|0|no|off|undefined)/i) && "" !== v ? (h[0].checked = !0, h[0].defaultChecked = !0, h[0].value = l) : (h[0].checked = !1, h[0].defaultChecked = !1)) : h.val(l)) : "checkbox" == h[0].type ? (h[0].checked = !1, h[0].defaultChecked = !1, l = n(h).attr("offval")) : h[0].type && "select" == h[0].type.substr(0, 6) ? h[0].selectedIndex = 0 : h.val(l), !0 === t[u.p.id].checkOnSubmit || t[u.p.id].checkOnUpdate) && (t[u.p.id]._savedData[e] = l)
}), n("#id_g", "#" + f).val(i)) : (y = n(r).jqGrid("getInd", i, !0), y && (n('td[role="gridcell"]', y).each(function (o) {
if (e = c[o].name, "cb" !== e && "subgrid" !== e && "rn" !== e && !0 === c[o].editable) {
if (e == r.p.ExpandColumn && !0 === r.p.treeGrid) s = n(this).text();
else try {
s = n.unformat.call(r, n(this), {
rowId: i,
colModel: c[o]
}, o)
} catch (a) {
s = "textarea" == c[o].edittype ? n(this).text() : n(this).html()
}
u.p.autoencode && (s = n.jgrid.htmlDecode(s)), (!0 === t[u.p.id].checkOnSubmit || t[u.p.id].checkOnUpdate) && (t[u.p.id]._savedData[e] = s), e = n.jgrid.jqID(e);
switch (c[o].edittype) {
case "password":
case "text":
case "button":
case "image":
case "textarea":
("&nbsp;" == s || "&#160;" == s || 1 == s.length && 160 == s.charCodeAt(0)) && (s = ""), n("#" + e, "#" + f).val(s);
break;
case "select":
var h = s.split(","),
h = n.map(h, function (t) {
return n.trim(t)
});
n("#" + e + " option", "#" + f).each(function () {
this.selected = !c[o].editoptions.multiple && (n.trim(s) == n.trim(n(this).text()) || h[0] == n.trim(n(this).text()) || h[0] == n.trim(n(this).val())) ? !0 : c[o].editoptions.multiple ? -1 < n.inArray(n.trim(n(this).text()), h) || -1 < n.inArray(n.trim(n(this).val()), h) ? !0 : !1 : !1
});
break;
case "checkbox":
s = "" + s, c[o].editoptions && c[o].editoptions.value ? c[o].editoptions.value.split(":")[0] == s ? (n("#" + e, "#" + f)[u.p.useProp ? "prop" : "attr"]("checked", !0), n("#" + e, "#" + f)[u.p.useProp ? "prop" : "attr"]("defaultChecked", !0)) : (n("#" + e, "#" + f)[u.p.useProp ? "prop" : "attr"]("checked", !1), n("#" + e, "#" + f)[u.p.useProp ? "prop" : "attr"]("defaultChecked", !1)) : (s = s.toLowerCase(), 0 > s.search(/(false|0|no|off|undefined)/i) && "" !== s ? (n("#" + e, "#" + f)[u.p.useProp ? "prop" : "attr"]("checked", !0), n("#" + e, "#" + f)[u.p.useProp ? "prop" : "attr"]("defaultChecked", !0)) : (n("#" + e, "#" + f)[u.p.useProp ? "prop" : "attr"]("checked", !1), n("#" + e, "#" + f)[u.p.useProp ? "prop" : "attr"]("defaultChecked", !1)));
break;
case "custom":
try {
if (c[o].editoptions && n.isFunction(c[o].editoptions.custom_value)) c[o].editoptions.custom_value.call(u, n("#" + e, "#" + f), "set", s);
else throw "e1";
} catch (l) {
"e1" == l ? n.jgrid.info_dialog(n.jgrid.errors.errcap, "function 'custom_value' " + n.jgrid.edit.msg.nodefined, n.jgrid.edit.bClose) : n.jgrid.info_dialog(n.jgrid.errors.errcap, l.message, n.jgrid.edit.bClose)
}
}
p++
}
}), 0 < p && n("#id_g", o).val(i)))
}
function kt() {
n.each(u.p.colModel, function (n, t) {
t.editoptions && !0 === t.editoptions.NullIfEmpty && f.hasOwnProperty(t.name) && "" === f[t.name] && (f[t.name] = "null")
})
}
function nt() {
var d, i = [!0, "", ""],
h = {},
l = u.p.prmNames,
v, w, nt, k, p, b = n(u).triggerHandler("jqGridAddEditBeforeCheckValues", [n("#" + e), a]);
b && "object" == typeof b && (f = b), n.isFunction(t[u.p.id].beforeCheckValues) && (b = t[u.p.id].beforeCheckValues.call(u, f, n("#" + e), "_empty" == f[u.p.id + "_id"] ? l.addoper : l.editoper)) && "object" == typeof b && (f = b);
for (nt in f)
if (f.hasOwnProperty(nt) && (i = n.jgrid.checkValues.call(u, f[nt], nt, u), !1 === i[0])) break;
if (kt(), i[0] && (h = n(u).triggerHandler("jqGridAddEditClickSubmit", [t[u.p.id], f, a]), void 0 === h && n.isFunction(t[u.p.id].onclickSubmit) && (h = t[u.p.id].onclickSubmit.call(u, t[u.p.id], f) || {}), i = n(u).triggerHandler("jqGridAddEditBeforeSubmit", [f, n("#" + e), a]), void 0 === i && (i = [!0, "", ""]), i[0] && n.isFunction(t[u.p.id].beforeSubmit) && (i = t[u.p.id].beforeSubmit.call(u, f, n("#" + e)))), i[0] && !t[u.p.id].processing) {
if (t[u.p.id].processing = !0, n("#sData", o + "_2").addClass("ui-state-active"), w = l.oper, v = l.id, f[w] = "_empty" == n.trim(f[u.p.id + "_id"]) ? l.addoper : l.editoper, f[w] != l.addoper ? f[v] = f[u.p.id + "_id"] : void 0 === f[v] && (f[v] = f[u.p.id + "_id"]), delete f[u.p.id + "_id"], f = n.extend(f, t[u.p.id].editData, h), !0 === u.p.treeGrid)
for (p in f[w] == l.addoper && (k = n(u).jqGrid("getGridParam", "selrow"), f["adjacency" == u.p.treeGridModel ? u.p.treeReader.parent_id_field : "parent_id"] = k), u.p.treeReader) u.p.treeReader.hasOwnProperty(p) && (h = u.p.treeReader[p], f.hasOwnProperty(h) && !(f[w] == l.addoper && "parent_id_field" === p) && delete f[h]);
f[v] = n.jgrid.stripPref(u.p.idPrefix, f[v]), p = n.extend({
url: t[u.p.id].url || n(u).jqGrid("getGridParam", "editurl"),
type: t[u.p.id].mtype,
data: n.isFunction(t[u.p.id].serializeEditData) ? t[u.p.id].serializeEditData.call(u, f) : f,
complete: function (h, p) {
var b;
if (f[v] = u.p.idPrefix + f[v], p != "success" ? (i[0] = !1, i[1] = n(u).triggerHandler("jqGridAddEditErrorTextFormat", [h, a]), i[1] = n.isFunction(t[u.p.id].errorTextFormat) ? t[u.p.id].errorTextFormat.call(u, h) : p + " Status: '" + h.statusText + "'. Error code: " + h.status) : (i = n(u).triggerHandler("jqGridAddEditAfterSubmit", [h, f, a]), i === void 0 && (i = [!0, "", ""]), i[0] && n.isFunction(t[u.p.id].afterSubmit) && (i = t[u.p.id].afterSubmit.call(u, h, f))), i[0] === !1) n("#FormError>td", o).html(i[1]), n("#FormError", o).show();
else if (n.each(u.p.colModel, function () {
if (y[this.name] && this.formatter && this.formatter == "select") try {
delete y[this.name]
} catch (n) { }
}), f = n.extend(f, y), u.p.autoencode && n.each(f, function (t, i) {
f[t] = n.jgrid.htmlDecode(i)
}), f[w] == l.addoper ? (i[2] || (i[2] = n.jgrid.randId()), f[v] = i[2], t[u.p.id].closeAfterAdd ? (t[u.p.id].reloadAfterSubmit ? n(u).trigger("reloadGrid") : u.p.treeGrid === !0 ? n(u).jqGrid("addChildNode", i[2], k, f) : (n(u).jqGrid("addRowData", i[2], f, r.addedrow), n(u).jqGrid("setSelection", i[2])), n.jgrid.hideModal("#" + n.jgrid.jqID(s.themodal), {
gb: "#gbox_" + n.jgrid.jqID(c),
jqm: r.jqModal,
onClose: t[u.p.id].onClose
})) : t[u.p.id].clearAfterAdd ? (t[u.p.id].reloadAfterSubmit ? n(u).trigger("reloadGrid") : u.p.treeGrid === !0 ? n(u).jqGrid("addChildNode", i[2], k, f) : n(u).jqGrid("addRowData", i[2], f, r.addedrow), g("_empty", u, e)) : t[u.p.id].reloadAfterSubmit ? n(u).trigger("reloadGrid") : u.p.treeGrid === !0 ? n(u).jqGrid("addChildNode", i[2], k, f) : n(u).jqGrid("addRowData", i[2], f, r.addedrow)) : (t[u.p.id].reloadAfterSubmit ? (n(u).trigger("reloadGrid"), t[u.p.id].closeAfterEdit || setTimeout(function () {
n(u).jqGrid("setSelection", f[v])
}, 1e3)) : u.p.treeGrid === !0 ? n(u).jqGrid("setTreeRow", f[v], f) : n(u).jqGrid("setRowData", f[v], f), t[u.p.id].closeAfterEdit && n.jgrid.hideModal("#" + n.jgrid.jqID(s.themodal), {
gb: "#gbox_" + n.jgrid.jqID(c),
jqm: r.jqModal,
onClose: t[u.p.id].onClose
})), n.isFunction(t[u.p.id].afterComplete) && (d = h, setTimeout(function () {
n(u).triggerHandler("jqGridAddEditAfterComplete", [d, f, n("#" + e), a]), t[u.p.id].afterComplete.call(u, d, f, n("#" + e)), d = null
}, 500)), (t[u.p.id].checkOnSubmit || t[u.p.id].checkOnUpdate) && (n("#" + e).data("disabled", !1), t[u.p.id]._savedData[u.p.id + "_id"] != "_empty"))
for (b in t[u.p.id]._savedData) t[u.p.id]._savedData.hasOwnProperty(b) && f[b] && (t[u.p.id]._savedData[b] = f[b]);
t[u.p.id].processing = !1, n("#sData", o + "_2").removeClass("ui-state-active");
try {
n(":input:visible", "#" + e)[0].focus()
} catch (nt) { }
}
}, n.jgrid.ajaxOptions, t[u.p.id].ajaxEditOptions), p.url || t[u.p.id].useDataProxy || (n.isFunction(u.p.dataProxy) ? t[u.p.id].useDataProxy = !0 : (i[0] = !1, i[1] += " " + n.jgrid.errors.nourl)), i[0] && (t[u.p.id].useDataProxy ? (h = u.p.dataProxy.call(u, p, "set_" + u.p.id), void 0 === h && (h = [!0, ""]), !1 === h[0] ? (i[0] = !1, i[1] = h[1] || "Error deleting the selected row!") : (p.data.oper == l.addoper && t[u.p.id].closeAfterAdd && n.jgrid.hideModal("#" + n.jgrid.jqID(s.themodal), {
gb: "#gbox_" + n.jgrid.jqID(c),
jqm: r.jqModal,
onClose: t[u.p.id].onClose
}), p.data.oper == l.editoper && t[u.p.id].closeAfterEdit && n.jgrid.hideModal("#" + n.jgrid.jqID(s.themodal), {
gb: "#gbox_" + n.jgrid.jqID(c),
jqm: r.jqModal,
onClose: t[u.p.id].onClose
}))) : n.ajax(p))
} !1 === i[0] && (n("#FormError>td", o).html(i[1]), n("#FormError", o).show())
}
function vt(n, t) {
var r = !1,
i;
for (i in n)
if (n.hasOwnProperty(i) && n[i] != t[i]) {
r = !0;
break
}
return r
}
function p() {
var i = !0;
return n("#FormError", o).hide(), t[u.p.id].checkOnUpdate && (f = {}, y = {}, at(), it = n.extend({}, f, y), wt = vt(it, t[u.p.id]._savedData)) && (n("#" + e).data("disabled", !0), n(".confirm", "#" + s.themodal).show(), i = !1), i
}
function yt() {
var t;
if ("_empty" !== i && void 0 !== u.p.savedRow && 0 < u.p.savedRow.length && n.isFunction(n.fn.jqGrid.restoreRow))
for (t = 0; t < u.p.savedRow.length; t++)
if (u.p.savedRow[t].id == i) {
n(u).jqGrid("restoreRow", i);
break
}
}
function et(t, i) {
var r = i[1].length - 1;
0 === t ? n("#pData", o + "_2").addClass("ui-state-disabled") : void 0 !== i[1][t - 1] && n("#" + n.jgrid.jqID(i[1][t - 1])).hasClass("ui-state-disabled") ? n("#pData", o + "_2").addClass("ui-state-disabled") : n("#pData", o + "_2").removeClass("ui-state-disabled"), t == r ? n("#nData", o + "_2").addClass("ui-state-disabled") : void 0 !== i[1][t + 1] && n("#" + n.jgrid.jqID(i[1][t + 1])).hasClass("ui-state-disabled") ? n("#nData", o + "_2").addClass("ui-state-disabled") : n("#nData", o + "_2").removeClass("ui-state-disabled")
}
function ot() {
var t = n(u).jqGrid("getDataIDs"),
i = n("#id_g", o).val();
return [n.inArray(i, t), t]
}
var u = this,
rt, h, b, ft, lt;
if (u.grid && i) {
var c = u.p.id,
e = "FrmGrid_" + c,
l = "TblGrid_" + c,
o = "#" + n.jgrid.jqID(l),
s = {
themodal: "editmod" + c,
modalhead: "edithd" + c,
modalcontent: "editcnt" + c,
scrollelm: e
},
w = n.isFunction(t[u.p.id].beforeShowForm) ? t[u.p.id].beforeShowForm : !1,
tt = n.isFunction(t[u.p.id].afterShowForm) ? t[u.p.id].afterShowForm : !1,
v = n.isFunction(t[u.p.id].beforeInitData) ? t[u.p.id].beforeInitData : !1,
pt = n.isFunction(t[u.p.id].onInitializeForm) ? t[u.p.id].onInitializeForm : !1,
h = !0,
d = 1,
st = 0,
f, y, it, wt, a, e = n.jgrid.jqID(e);
if ("new" === i ? (i = "_empty", a = "add", r.caption = t[u.p.id].addCaption) : (r.caption = t[u.p.id].editCaption, a = "edit"), !0 === r.recreateForm && void 0 !== n("#" + n.jgrid.jqID(s.themodal))[0] && n("#" + n.jgrid.jqID(s.themodal)).remove(), rt = !0, r.checkOnUpdate && r.jqModal && !r.modal && (rt = !1), void 0 !== n("#" + n.jgrid.jqID(s.themodal))[0]) {
if (h = n(u).triggerHandler("jqGridAddEditBeforeInitData", [n("#" + n.jgrid.jqID(e)), a]), void 0 === h && (h = !0), h && v && (h = v.call(u, n("#" + e))), !1 === h) return;
yt(), n(".ui-jqdialog-title", "#" + n.jgrid.jqID(s.modalhead)).html(r.caption), n("#FormError", o).hide(), t[u.p.id].topinfo ? (n(".topinfo", o).html(t[u.p.id].topinfo), n(".tinfo", o).show()) : n(".tinfo", o).hide(), t[u.p.id].bottominfo ? (n(".bottominfo", o + "_2").html(t[u.p.id].bottominfo), n(".binfo", o + "_2").show()) : n(".binfo", o + "_2").hide(), g(i, u, e), "_empty" == i || !t[u.p.id].viewPagerButtons ? n("#pData, #nData", o + "_2").hide() : n("#pData, #nData", o + "_2").show(), !0 === t[u.p.id].processing && (t[u.p.id].processing = !1, n("#sData", o + "_2").removeClass("ui-state-active")), !0 === n("#" + e).data("disabled") && (n(".confirm", "#" + n.jgrid.jqID(s.themodal)).hide(), n("#" + e).data("disabled", !1)), n(u).triggerHandler("jqGridAddEditBeforeShowForm", [n("#" + e), a]), w && w.call(u, n("#" + e)), n("#" + n.jgrid.jqID(s.themodal)).data("onClose", t[u.p.id].onClose), n.jgrid.viewModal("#" + n.jgrid.jqID(s.themodal), {
gbox: "#gbox_" + n.jgrid.jqID(c),
jqm: r.jqModal,
jqM: !1,
overlay: r.overlay,
modal: r.modal
}), rt || n(".jqmOverlay").click(function () {
return p() ? (n.jgrid.hideModal("#" + n.jgrid.jqID(s.themodal), {
gb: "#gbox_" + n.jgrid.jqID(c),
jqm: r.jqModal,
onClose: t[u.p.id].onClose
}), !1) : !1
}), n(u).triggerHandler("jqGridAddEditAfterShowForm", [n("#" + e), a]), tt && tt.call(u, n("#" + e))
} else {
var ut = isNaN(r.dataheight) ? r.dataheight : r.dataheight + "px",
h = isNaN(r.datawidth) ? r.datawidth : r.datawidth + "px",
ut = n("<form name='FormPost' id='" + e + "' class='FormGrid' onSubmit='return false;' style='width:" + h + ";overflow:auto;position:relative;height:" + ut + ";'><\/form>").data("disabled", !1),
k = n("<table id='" + l + "' class='EditTable' cellspacing='0' cellpadding='0' border='0'><tbody><\/tbody><\/table>"),
h = n(u).triggerHandler("jqGridAddEditBeforeInitData", [n("#" + e), a]);
if (void 0 === h && (h = !0), h && v && (h = v.call(u, n("#" + e))), !1 === h) return;
yt(), n(u.p.colModel).each(function () {
var n = this.formoptions;
d = Math.max(d, n ? n.colpos || 0 : 0), st = Math.max(st, n ? n.rowpos || 0 : 0)
}), n(ut).append(k), v = n("<tr id='FormError' style='display:none'><td class='ui-state-error' colspan='" + 2 * d + "'><\/td><\/tr>"), v[0].rp = 0, n(k).append(v), v = n("<tr style='display:none' class='tinfo'><td class='topinfo' colspan='" + 2 * d + "'>" + t[u.p.id].topinfo + "<\/td><\/tr>"), v[0].rp = 0, n(k).append(v), h = (v = "rtl" == u.p.direction ? !0 : !1) ? "nData" : "pData", b = v ? "pData" : "nData", bt(i, u, k, d);
var h = "<a href='javascript:void(0)' id='" + h + "' class='fm-button ui-state-default ui-corner-left'><span class='ui-icon ui-icon-triangle-1-w'><\/span><\/a>",
b = "<a href='javascript:void(0)' id='" + b + "' class='fm-button ui-state-default ui-corner-right'><span class='ui-icon ui-icon-triangle-1-e'><\/span><\/a>",
ht = "<a href='javascript:void(0)' id='sData' class='fm-button ui-state-default ui-corner-all'>" + r.bSubmit + "<\/a>",
ct = "<a href='javascript:void(0)' id='cData' class='fm-button ui-state-default ui-corner-all'>" + r.bCancel + "<\/a>",
l = "<table border='0' cellspacing='0' cellpadding='0' class='EditTable' id='" + l + "_2'><tbody><tr><td colspan='2'><hr class='ui-widget-content' style='margin:1px'/><\/td><\/tr><tr id='Act_Buttons'><td class='navButton'>" + (v ? b + h : h + b) + "<\/td><td class='EditButton'>" + ht + ct + "<\/td><\/tr>" + ("<tr style='display:none' class='binfo'><td class='bottominfo' colspan='2'>" + t[u.p.id].bottominfo + "<\/td><\/tr>"),
l = l + "<\/tbody><\/table>";
0 < st && (ft = [], n.each(n(k)[0].rows, function (n, t) {
ft[n] = t
}), ft.sort(function (n, t) {
return n.rp > t.rp ? 1 : n.rp < t.rp ? -1 : 0
}), n.each(ft, function (t, i) {
n("tbody", k).append(i)
})), r.gbox = "#gbox_" + n.jgrid.jqID(c), lt = !1, !0 === r.closeOnEscape && (r.closeOnEscape = !1, lt = !0), l = n("<div><\/div>").append(ut).append(l), n.jgrid.createModal(s, l, r, "#gview_" + n.jgrid.jqID(u.p.id), n("#gbox_" + n.jgrid.jqID(u.p.id))[0]), v && (n("#pData, #nData", o + "_2").css("float", "right"), n(".EditButton", o + "_2").css("text-align", "left")), t[u.p.id].topinfo && n(".tinfo", o).show(), t[u.p.id].bottominfo && n(".binfo", o + "_2").show(), l = l = null, n("#" + n.jgrid.jqID(s.themodal)).keydown(function (i) {
var f = i.target;
if (n("#" + e).data("disabled") === !0) return !1;
if (t[u.p.id].savekey[0] === !0 && i.which == t[u.p.id].savekey[1] && f.tagName != "TEXTAREA") return n("#sData", o + "_2").trigger("click"), !1;
if (i.which === 27) return p() ? (lt && n.jgrid.hideModal("#" + n.jgrid.jqID(s.themodal), {
gb: r.gbox,
jqm: r.jqModal,
onClose: t[u.p.id].onClose
}), !1) : !1;
if (t[u.p.id].navkeys[0] === !0) {
if (n("#id_g", o).val() == "_empty") return !0;
if (i.which == t[u.p.id].navkeys[1]) return n("#pData", o + "_2").trigger("click"), !1;
if (i.which == t[u.p.id].navkeys[2]) return n("#nData", o + "_2").trigger("click"), !1
}
}), r.checkOnUpdate && (n("a.ui-jqdialog-titlebar-close span", "#" + n.jgrid.jqID(s.themodal)).removeClass("jqmClose"), n("a.ui-jqdialog-titlebar-close", "#" + n.jgrid.jqID(s.themodal)).unbind("click").click(function () {
return p() ? (n.jgrid.hideModal("#" + n.jgrid.jqID(s.themodal), {
gb: "#gbox_" + n.jgrid.jqID(c),
jqm: r.jqModal,
onClose: t[u.p.id].onClose
}), !1) : !1
})), r.saveicon = n.extend([!0, "left", "ui-icon-disk"], r.saveicon), r.closeicon = n.extend([!0, "left", "ui-icon-close"], r.closeicon), !0 === r.saveicon[0] && n("#sData", o + "_2").addClass("right" == r.saveicon[1] ? "fm-button-icon-right" : "fm-button-icon-left").append("<span class='ui-icon " + r.saveicon[2] + "'><\/span>"), !0 === r.closeicon[0] && n("#cData", o + "_2").addClass("right" == r.closeicon[1] ? "fm-button-icon-right" : "fm-button-icon-left").append("<span class='ui-icon " + r.closeicon[2] + "'><\/span>"), (t[u.p.id].checkOnSubmit || t[u.p.id].checkOnUpdate) && (ht = "<a href='javascript:void(0)' id='sNew' class='fm-button ui-state-default ui-corner-all' style='z-index:1002'>" + r.bYes + "<\/a>", b = "<a href='javascript:void(0)' id='nNew' class='fm-button ui-state-default ui-corner-all' style='z-index:1002'>" + r.bNo + "<\/a>", ct = "<a href='javascript:void(0)' id='cNew' class='fm-button ui-state-default ui-corner-all' style='z-index:1002'>" + r.bExit + "<\/a>", l = r.zIndex || 999, l++, n("<div class='ui-widget-overlay jqgrid-overlay confirm' style='z-index:" + l + ";display:none;'>&#160;<\/div><div class='confirm ui-widget-content ui-jqconfirm' style='z-index:" + (l + 1) + "'>" + r.saveData + "<br/><br/>" + ht + b + ct + "<\/div>").insertAfter("#" + e), n("#sNew", "#" + n.jgrid.jqID(s.themodal)).click(function () {
return nt(), n("#" + e).data("disabled", !1), n(".confirm", "#" + n.jgrid.jqID(s.themodal)).hide(), !1
}), n("#nNew", "#" + n.jgrid.jqID(s.themodal)).click(function () {
return n(".confirm", "#" + n.jgrid.jqID(s.themodal)).hide(), n("#" + e).data("disabled", !1), setTimeout(function () {
n(":input", "#" + e)[0].focus()
}, 0), !1
}), n("#cNew", "#" + n.jgrid.jqID(s.themodal)).click(function () {
return n(".confirm", "#" + n.jgrid.jqID(s.themodal)).hide(), n("#" + e).data("disabled", !1), n.jgrid.hideModal("#" + n.jgrid.jqID(s.themodal), {
gb: "#gbox_" + n.jgrid.jqID(c),
jqm: r.jqModal,
onClose: t[u.p.id].onClose
}), !1
})), n(u).triggerHandler("jqGridAddEditInitializeForm", [n("#" + e), a]), pt && pt.call(u, n("#" + e)), "_empty" == i || !t[u.p.id].viewPagerButtons ? n("#pData,#nData", o + "_2").hide() : n("#pData,#nData", o + "_2").show(), n(u).triggerHandler("jqGridAddEditBeforeShowForm", [n("#" + e), a]), w && w.call(u, n("#" + e)), n("#" + n.jgrid.jqID(s.themodal)).data("onClose", t[u.p.id].onClose), n.jgrid.viewModal("#" + n.jgrid.jqID(s.themodal), {
gbox: "#gbox_" + n.jgrid.jqID(c),
jqm: r.jqModal,
overlay: r.overlay,
modal: r.modal
}), rt || n(".jqmOverlay").click(function () {
return p() ? (n.jgrid.hideModal("#" + n.jgrid.jqID(s.themodal), {
gb: "#gbox_" + n.jgrid.jqID(c),
jqm: r.jqModal,
onClose: t[u.p.id].onClose
}), !1) : !1
}), n(u).triggerHandler("jqGridAddEditAfterShowForm", [n("#" + e), a]), tt && tt.call(u, n("#" + e)), n(".fm-button", "#" + n.jgrid.jqID(s.themodal)).hover(function () {
n(this).addClass("ui-state-hover")
}, function () {
n(this).removeClass("ui-state-hover")
}), n("#sData", o + "_2").click(function () {
return f = {}, y = {}, n("#FormError", o).hide(), at(), f[u.p.id + "_id"] == "_empty" ? nt() : r.checkOnSubmit === !0 ? (it = n.extend({}, f, y), (wt = vt(it, t[u.p.id]._savedData)) ? (n("#" + e).data("disabled", !0), n(".confirm", "#" + n.jgrid.jqID(s.themodal)).show()) : nt()) : nt(), !1
}), n("#cData", o + "_2").click(function () {
return p() ? (n.jgrid.hideModal("#" + n.jgrid.jqID(s.themodal), {
gb: "#gbox_" + n.jgrid.jqID(c),
jqm: r.jqModal,
onClose: t[u.p.id].onClose
}), !1) : !1
}), n("#nData", o + "_2").click(function () {
var t, i;
if (!p()) return !1;
if (n("#FormError", o).hide(), t = ot(), t[0] = parseInt(t[0], 10), t[0] != -1 && t[1][t[0] + 1]) {
if ((n(u).triggerHandler("jqGridAddEditClickPgButtons", ["next", n("#" + e), t[1][t[0]]]), n.isFunction(r.onclickPgButtons) && (i = r.onclickPgButtons.call(u, "next", n("#" + e), t[1][t[0]]), i !== void 0 && i === !1)) || n("#" + n.jgrid.jqID(t[1][t[0] + 1])).hasClass("ui-state-disabled")) return !1;
g(t[1][t[0] + 1], u, e), n(u).jqGrid("setSelection", t[1][t[0] + 1]), n(u).triggerHandler("jqGridAddEditAfterClickPgButtons", ["next", n("#" + e), t[1][t[0]]]), n.isFunction(r.afterclickPgButtons) && r.afterclickPgButtons.call(u, "next", n("#" + e), t[1][t[0] + 1]), et(t[0] + 1, t)
}
return !1
}), n("#pData", o + "_2").click(function () {
var t, i;
if (!p()) return !1;
if (n("#FormError", o).hide(), t = ot(), t[0] != -1 && t[1][t[0] - 1]) {
if ((n(u).triggerHandler("jqGridAddEditClickPgButtons", ["prev", n("#" + e), t[1][t[0]]]), n.isFunction(r.onclickPgButtons) && (i = r.onclickPgButtons.call(u, "prev", n("#" + e), t[1][t[0]]), i !== void 0 && i === !1)) || n("#" + n.jgrid.jqID(t[1][t[0] - 1])).hasClass("ui-state-disabled")) return !1;
g(t[1][t[0] - 1], u, e), n(u).jqGrid("setSelection", t[1][t[0] - 1]), n(u).triggerHandler("jqGridAddEditAfterClickPgButtons", ["prev", n("#" + e), t[1][t[0]]]), n.isFunction(r.afterclickPgButtons) && r.afterclickPgButtons.call(u, "prev", n("#" + e), t[1][t[0] - 1]), et(t[0] - 1, t)
}
return !1
})
}
w = ot(), et(w[0], w)
}
})
},
viewGridRow: function (i, r) {
return r = n.extend(!0, {
top: 0,
left: 0,
width: 0,
datawidth: "auto",
height: "auto",
dataheight: "auto",
modal: !1,
overlay: 30,
drag: !0,
resize: !0,
jqModal: !0,
closeOnEscape: !1,
labelswidth: "30%",
closeicon: [],
navkeys: [!1, 38, 40],
onClose: null,
beforeShowForm: null,
beforeInitData: null,
viewPagerButtons: !0
}, n.jgrid.view, r || {}), t[n(this)[0].p.id] = r, this.each(function () {
function v() {
(!0 === t[u.p.id].closeOnEscape || !0 === t[u.p.id].navkeys[0]) && setTimeout(function () {
n(".ui-jqdialog-titlebar-close", "#" + n.jgrid.jqID(c.modalhead)).focus()
}, 0)
}
function tt(t, i, u, f) {
for (var o, v, e, s = 0, w, b, k = [], h = !1, nt = "<td class='CaptionTD form-view-label ui-widget-content' width='" + r.labelswidth + "'>&#160;<\/td><td class='DataTD form-view-data ui-helper-reset ui-widget-content'>&#160;<\/td>", d = "", tt = ["integer", "number", "currency"], l = 0, a = 0, y, p, g, c = 1; c <= f; c++) d += 1 == c ? nt : "<td class='CaptionTD form-view-label ui-widget-content'>&#160;<\/td><td class='DataTD form-view-data ui-widget-content'>&#160;<\/td>";
return n(i.p.colModel).each(function () {
v = this.editrules && !0 === this.editrules.edithidden ? !1 : !0 === this.hidden ? !0 : !1, v || "right" !== this.align || (this.formatter && -1 !== n.inArray(this.formatter, tt) ? l = Math.max(l, parseInt(this.width, 10)) : a = Math.max(a, parseInt(this.width, 10)))
}), y = 0 !== l ? l : 0 !== a ? a : 0, h = n(i).jqGrid("getInd", t), n(i.p.colModel).each(function (t) {
var a;
if (o = this.name, p = !1, b = (v = this.editrules && !0 === this.editrules.edithidden ? !1 : !0 === this.hidden ? !0 : !1) ? "style='display:none'" : "", g = "boolean" != typeof this.viewable ? !0 : this.viewable, "cb" !== o && "subgrid" !== o && "rn" !== o && g) {
w = !1 === h ? "" : o == i.p.ExpandColumn && !0 === i.p.treeGrid ? n("td:eq(" + t + ")", i.rows[h]).text() : n("td:eq(" + t + ")", i.rows[h]).html(), p = "right" === this.align && 0 !== y ? !0 : !1;
var r = n.extend({}, {
rowabove: !1,
rowcontent: ""
}, this.formoptions || {}),
c = parseInt(r.rowpos, 10) || s + 1,
l = parseInt(2 * (parseInt(r.colpos, 10) || 1), 10);
r.rowabove && (a = n("<tr><td class='contentinfo' colspan='" + 2 * f + "'>" + r.rowcontent + "<\/td><\/tr>"), n(u).append(a), a[0].rp = c), e = n(u).find("tr[rowpos=" + c + "]"), 0 === e.length && (e = n("<tr " + b + " rowpos='" + c + "'><\/tr>").addClass("FormData").attr("id", "trv_" + o), n(e).append(d), n(u).append(e), e[0].rp = c), n("td:eq(" + (l - 2) + ")", e[0]).html("<b>" + (void 0 === r.label ? i.p.colNames[t] : r.label) + "<\/b>"), n("td:eq(" + (l - 1) + ")", e[0]).append("<span>" + w + "<\/span>").attr("id", "v_" + o), p && n("td:eq(" + (l - 1) + ") span", e[0]).css({
"text-align": "right",
width: y + "px"
}), k[s] = t, s++
}
}), 0 < s && (t = n("<tr class='FormData' style='display:none'><td class='CaptionTD'><\/td><td colspan='" + (2 * f - 1) + "' class='DataTD'><input class='FormElement' id='id_g' type='text' name='id' value='" + t + "'/><\/td><\/tr>"), t[0].rp = s + 99, n(u).append(t)), k
}
function w(t, i) {
var r, u, e = 0,
o, s;
(s = n(i).jqGrid("getInd", t, !0)) && (n("td", s).each(function (t) {
r = i.p.colModel[t].name, u = i.p.colModel[t].editrules && !0 === i.p.colModel[t].editrules.edithidden ? !1 : !0 === i.p.colModel[t].hidden ? !0 : !1, "cb" !== r && "subgrid" !== r && "rn" !== r && (o = r == i.p.ExpandColumn && !0 === i.p.treeGrid ? n(this).text() : n(this).html(), n.extend({}, i.p.colModel[t].editoptions || {}), r = n.jgrid.jqID("v_" + r), n("#" + r + " span", "#" + f).html(o), u && n("#" + r, "#" + f).parents("tr:first").hide(), e++)
}), 0 < e && n("#id_g", "#" + f).val(t))
}
function b(t, i) {
var r = i[1].length - 1;
0 === t ? n("#pData", "#" + f + "_2").addClass("ui-state-disabled") : void 0 !== i[1][t - 1] && n("#" + n.jgrid.jqID(i[1][t - 1])).hasClass("ui-state-disabled") ? n("#pData", f + "_2").addClass("ui-state-disabled") : n("#pData", "#" + f + "_2").removeClass("ui-state-disabled"), t == r ? n("#nData", "#" + f + "_2").addClass("ui-state-disabled") : void 0 !== i[1][t + 1] && n("#" + n.jgrid.jqID(i[1][t + 1])).hasClass("ui-state-disabled") ? n("#nData", f + "_2").addClass("ui-state-disabled") : n("#nData", "#" + f + "_2").removeClass("ui-state-disabled")
}
function k() {
var t = n(u).jqGrid("getDataIDs"),
i = n("#id_g", "#" + f).val();
return [n.inArray(i, t), t]
}
var u = this,
p;
if (u.grid && i) {
var e = u.p.id,
h = "ViewGrid_" + n.jgrid.jqID(e),
f = "ViewTbl_" + n.jgrid.jqID(e),
s = "ViewGrid_" + e,
a = "ViewTbl_" + e,
c = {
themodal: "viewmod" + e,
modalhead: "viewhd" + e,
modalcontent: "viewcnt" + e,
scrollelm: h
},
l = n.isFunction(t[u.p.id].beforeInitData) ? t[u.p.id].beforeInitData : !1,
o = !0,
d = 1,
g = 0;
if (void 0 !== n("#" + n.jgrid.jqID(c.themodal))[0]) {
if (l && (o = l.call(u, n("#" + h)), void 0 === o && (o = !0)), !1 === o) return;
n(".ui-jqdialog-title", "#" + n.jgrid.jqID(c.modalhead)).html(r.caption), n("#FormError", "#" + f).hide(), w(i, u), n.isFunction(t[u.p.id].beforeShowForm) && t[u.p.id].beforeShowForm.call(u, n("#" + h)), n.jgrid.viewModal("#" + n.jgrid.jqID(c.themodal), {
gbox: "#gbox_" + n.jgrid.jqID(e),
jqm: r.jqModal,
jqM: !1,
overlay: r.overlay,
modal: r.modal
}), v()
} else {
var nt = isNaN(r.dataheight) ? r.dataheight : r.dataheight + "px",
it = isNaN(r.datawidth) ? r.datawidth : r.datawidth + "px",
s = n("<form name='FormPost' id='" + s + "' class='FormGrid' style='width:" + it + ";overflow:auto;position:relative;height:" + nt + ";'><\/form>"),
y = n("<table id='" + a + "' class='EditTable' cellspacing='1' cellpadding='2' border='0' style='table-layout:fixed'><tbody><\/tbody><\/table>");
if (l && (o = l.call(u, n("#" + h)), void 0 === o && (o = !0)), !1 === o) return;
n(u.p.colModel).each(function () {
var n = this.formoptions;
d = Math.max(d, n ? n.colpos || 0 : 0), g = Math.max(g, n ? n.rowpos || 0 : 0)
}), n(s).append(y), tt(i, u, y, d), a = "rtl" == u.p.direction ? !0 : !1, l = "<a href='javascript:void(0)' id='" + (a ? "nData" : "pData") + "' class='fm-button ui-state-default ui-corner-left'><span class='ui-icon ui-icon-triangle-1-w'><\/span><\/a>", o = "<a href='javascript:void(0)' id='" + (a ? "pData" : "nData") + "' class='fm-button ui-state-default ui-corner-right'><span class='ui-icon ui-icon-triangle-1-e'><\/span><\/a>", nt = "<a href='javascript:void(0)' id='cData' class='fm-button ui-state-default ui-corner-all'>" + r.bClose + "<\/a>", 0 < g && (p = [], n.each(n(y)[0].rows, function (n, t) {
p[n] = t
}), p.sort(function (n, t) {
return n.rp > t.rp ? 1 : n.rp < t.rp ? -1 : 0
}), n.each(p, function (t, i) {
n("tbody", y).append(i)
})), r.gbox = "#gbox_" + n.jgrid.jqID(e), s = n("<div><\/div>").append(s).append("<table border='0' class='EditTable' id='" + f + "_2'><tbody><tr id='Act_Buttons'><td class='navButton' width='" + r.labelswidth + "'>" + (a ? o + l : l + o) + "<\/td><td class='EditButton'>" + nt + "<\/td><\/tr><\/tbody><\/table>"), n.jgrid.createModal(c, s, r, "#gview_" + n.jgrid.jqID(u.p.id), n("#gview_" + n.jgrid.jqID(u.p.id))[0]), a && (n("#pData, #nData", "#" + f + "_2").css("float", "right"), n(".EditButton", "#" + f + "_2").css("text-align", "left")), r.viewPagerButtons || n("#pData, #nData", "#" + f + "_2").hide(), s = null, n("#" + c.themodal).keydown(function (i) {
if (i.which === 27) return t[u.p.id].closeOnEscape && n.jgrid.hideModal("#" + n.jgrid.jqID(c.themodal), {
gb: r.gbox,
jqm: r.jqModal,
onClose: r.onClose
}), !1;
if (r.navkeys[0] === !0) {
if (i.which === r.navkeys[1]) return n("#pData", "#" + f + "_2").trigger("click"), !1;
if (i.which === r.navkeys[2]) return n("#nData", "#" + f + "_2").trigger("click"), !1
}
}), r.closeicon = n.extend([!0, "left", "ui-icon-close"], r.closeicon), !0 === r.closeicon[0] && n("#cData", "#" + f + "_2").addClass("right" == r.closeicon[1] ? "fm-button-icon-right" : "fm-button-icon-left").append("<span class='ui-icon " + r.closeicon[2] + "'><\/span>"), n.isFunction(r.beforeShowForm) && r.beforeShowForm.call(u, n("#" + h)), n.jgrid.viewModal("#" + n.jgrid.jqID(c.themodal), {
gbox: "#gbox_" + n.jgrid.jqID(e),
jqm: r.jqModal,
overlay: r.overlay,
modal: r.modal
}), n(".fm-button:not(.ui-state-disabled)", "#" + f + "_2").hover(function () {
n(this).addClass("ui-state-hover")
}, function () {
n(this).removeClass("ui-state-hover")
}), v(), n("#cData", "#" + f + "_2").click(function () {
return n.jgrid.hideModal("#" + n.jgrid.jqID(c.themodal), {
gb: "#gbox_" + n.jgrid.jqID(e),
jqm: r.jqModal,
onClose: r.onClose
}), !1
}), n("#nData", "#" + f + "_2").click(function () {
n("#FormError", "#" + f).hide();
var t = k();
return t[0] = parseInt(t[0], 10), t[0] != -1 && t[1][t[0] + 1] && (n.isFunction(r.onclickPgButtons) && r.onclickPgButtons.call(u, "next", n("#" + h), t[1][t[0]]), w(t[1][t[0] + 1], u), n(u).jqGrid("setSelection", t[1][t[0] + 1]), n.isFunction(r.afterclickPgButtons) && r.afterclickPgButtons.call(u, "next", n("#" + h), t[1][t[0] + 1]), b(t[0] + 1, t)), v(), !1
}), n("#pData", "#" + f + "_2").click(function () {
n("#FormError", "#" + f).hide();
var t = k();
return t[0] != -1 && t[1][t[0] - 1] && (n.isFunction(r.onclickPgButtons) && r.onclickPgButtons.call(u, "prev", n("#" + h), t[1][t[0]]), w(t[1][t[0] - 1], u), n(u).jqGrid("setSelection", t[1][t[0] - 1]), n.isFunction(r.afterclickPgButtons) && r.afterclickPgButtons.call(u, "prev", n("#" + h), t[1][t[0] - 1]), b(t[0] - 1, t)), v(), !1
})
}
s = k(), b(s[0], s)
}
})
},
delGridRow: function (i, r) {
return r = n.extend(!0, {
top: 0,
left: 0,
width: 240,
height: "auto",
dataheight: "auto",
modal: !1,
overlay: 30,
drag: !0,
resize: !0,
url: "",
mtype: "POST",
reloadAfterSubmit: !0,
beforeShowForm: null,
beforeInitData: null,
afterShowForm: null,
beforeSubmit: null,
onclickSubmit: null,
afterSubmit: null,
jqModal: !0,
closeOnEscape: !1,
delData: {},
delicon: [],
cancelicon: [],
onClose: null,
ajaxDelOptions: {},
processing: !1,
serializeDelData: null,
useDataProxy: !1
}, n.jgrid.del, r || {}), t[n(this)[0].p.id] = r, this.each(function () {
var u = this;
if (u.grid && i) {
var y = n.isFunction(t[u.p.id].beforeShowForm),
b = n.isFunction(t[u.p.id].afterShowForm),
l = n.isFunction(t[u.p.id].beforeInitData) ? t[u.p.id].beforeInitData : !1,
e = u.p.id,
v = {},
o = !0,
f = "DelTbl_" + n.jgrid.jqID(e),
c, p, a, w, h = "DelTbl_" + e,
s = {
themodal: "delmod" + e,
modalhead: "delhd" + e,
modalcontent: "delcnt" + e,
scrollelm: f
};
if (n.isArray(i) && (i = i.join()), void 0 !== n("#" + n.jgrid.jqID(s.themodal))[0]) {
if (l && (o = l.call(u, n("#" + f)), void 0 === o && (o = !0)), !1 === o) return;
n("#DelData>td", "#" + f).text(i), n("#DelError", "#" + f).hide(), !0 === t[u.p.id].processing && (t[u.p.id].processing = !1, n("#dData", "#" + f).removeClass("ui-state-active")), y && t[u.p.id].beforeShowForm.call(u, n("#" + f)), n.jgrid.viewModal("#" + n.jgrid.jqID(s.themodal), {
gbox: "#gbox_" + n.jgrid.jqID(e),
jqm: t[u.p.id].jqModal,
jqM: !1,
overlay: t[u.p.id].overlay,
modal: t[u.p.id].modal
})
} else {
var k = isNaN(t[u.p.id].dataheight) ? t[u.p.id].dataheight : t[u.p.id].dataheight + "px",
d = isNaN(r.datawidth) ? r.datawidth : r.datawidth + "px",
h = "<div id='" + h + "' class='formdata' style='width:" + d + ";overflow:auto;position:relative;height:" + k + ";'><table class='DelTable'><tbody><tr id='DelError' style='display:none'><td class='ui-state-error'><\/td><\/tr>" + ("<tr id='DelData' style='display:none'><td >" + i + "<\/td><\/tr>"),
h = h + ('<tr><td class="delmsg" style="white-space:pre;">' + t[u.p.id].msg + "<\/td><\/tr><tr><td >&#160;<\/td><\/tr>"),
h = h + "<\/tbody><\/table><\/div>" + ("<table cellspacing='0' cellpadding='0' border='0' class='EditTable' id='" + f + "_2'><tbody><tr><td><hr class='ui-widget-content' style='margin:1px'/><\/td><\/tr><tr><td class='DelButton EditButton'>" + ("<a href='javascript:void(0)' id='dData' class='fm-button ui-state-default ui-corner-all'>" + r.bSubmit + "<\/a>") + "&#160;" + ("<a href='javascript:void(0)' id='eData' class='fm-button ui-state-default ui-corner-all'>" + r.bCancel + "<\/a>") + "<\/td><\/tr><\/tbody><\/table>");
if (r.gbox = "#gbox_" + n.jgrid.jqID(e), n.jgrid.createModal(s, h, r, "#gview_" + n.jgrid.jqID(u.p.id), n("#gview_" + n.jgrid.jqID(u.p.id))[0]), l && (o = l.call(u, n("#" + f)), void 0 === o && (o = !0)), !1 === o) return;
n(".fm-button", "#" + f + "_2").hover(function () {
n(this).addClass("ui-state-hover")
}, function () {
n(this).removeClass("ui-state-hover")
}), r.delicon = n.extend([!0, "left", "ui-icon-scissors"], t[u.p.id].delicon), r.cancelicon = n.extend([!0, "left", "ui-icon-cancel"], t[u.p.id].cancelicon), !0 === r.delicon[0] && n("#dData", "#" + f + "_2").addClass("right" == r.delicon[1] ? "fm-button-icon-right" : "fm-button-icon-left").append("<span class='ui-icon " + r.delicon[2] + "'><\/span>"), !0 === r.cancelicon[0] && n("#eData", "#" + f + "_2").addClass("right" == r.cancelicon[1] ? "fm-button-icon-right" : "fm-button-icon-left").append("<span class='ui-icon " + r.cancelicon[2] + "'><\/span>"), n("#dData", "#" + f + "_2").click(function () {
var i = [!0, ""],
h, o = n("#DelData>td", "#" + f).text();
if (v = {}, n.isFunction(t[u.p.id].onclickSubmit) && (v = t[u.p.id].onclickSubmit.call(u, t[u.p.id], o) || {}), n.isFunction(t[u.p.id].beforeSubmit) && (i = t[u.p.id].beforeSubmit.call(u, o)), i[0] && !t[u.p.id].processing) {
if (t[u.p.id].processing = !0, a = u.p.prmNames, c = n.extend({}, t[u.p.id].delData, v), w = a.oper, c[w] = a.deloper, p = a.id, o = ("" + o).split(","), !o.length) return !1;
for (h in o) o.hasOwnProperty(h) && (o[h] = n.jgrid.stripPref(u.p.idPrefix, o[h]));
c[p] = o.join(), n(this).addClass("ui-state-active"), h = n.extend({
url: t[u.p.id].url || n(u).jqGrid("getGridParam", "editurl"),
type: t[u.p.id].mtype,
data: n.isFunction(t[u.p.id].serializeDelData) ? t[u.p.id].serializeDelData.call(u, c) : c,
complete: function (h, l) {
var a;
if (l != "success" ? (i[0] = !1, i[1] = n.isFunction(t[u.p.id].errorTextFormat) ? t[u.p.id].errorTextFormat.call(u, h) : l + " Status: '" + h.statusText + "'. Error code: " + h.status) : n.isFunction(t[u.p.id].afterSubmit) && (i = t[u.p.id].afterSubmit.call(u, h, c)), i[0] === !1) n("#DelError>td", "#" + f).html(i[1]), n("#DelError", "#" + f).show();
else {
if (t[u.p.id].reloadAfterSubmit && u.p.datatype != "local") n(u).trigger("reloadGrid");
else {
if (u.p.treeGrid === !0) try {
n(u).jqGrid("delTreeNode", u.p.idPrefix + o[0])
} catch (v) { } else
for (a = 0; a < o.length; a++) n(u).jqGrid("delRowData", u.p.idPrefix + o[a]);
u.p.selrow = null, u.p.selarrrow = []
}
n.isFunction(t[u.p.id].afterComplete) && setTimeout(function () {
t[u.p.id].afterComplete.call(u, h, o)
}, 500)
}
t[u.p.id].processing = !1, n("#dData", "#" + f + "_2").removeClass("ui-state-active"), i[0] && n.jgrid.hideModal("#" + n.jgrid.jqID(s.themodal), {
gb: "#gbox_" + n.jgrid.jqID(e),
jqm: r.jqModal,
onClose: t[u.p.id].onClose
})
}
}, n.jgrid.ajaxOptions, t[u.p.id].ajaxDelOptions), h.url || t[u.p.id].useDataProxy || (n.isFunction(u.p.dataProxy) ? t[u.p.id].useDataProxy = !0 : (i[0] = !1, i[1] = i[1] + (" " + n.jgrid.errors.nourl))), i[0] && (t[u.p.id].useDataProxy ? (h = u.p.dataProxy.call(u, h, "del_" + u.p.id), h === void 0 && (h = [!0, ""]), h[0] === !1 ? (i[0] = !1, i[1] = h[1] || "Error deleting the selected row!") : n.jgrid.hideModal("#" + n.jgrid.jqID(s.themodal), {
gb: "#gbox_" + n.jgrid.jqID(e),
jqm: r.jqModal,
onClose: t[u.p.id].onClose
})) : n.ajax(h))
}
return i[0] === !1 && (n("#DelError>td", "#" + f).html(i[1]), n("#DelError", "#" + f).show()), !1
}), n("#eData", "#" + f + "_2").click(function () {
return n.jgrid.hideModal("#" + n.jgrid.jqID(s.themodal), {
gb: "#gbox_" + n.jgrid.jqID(e),
jqm: t[u.p.id].jqModal,
onClose: t[u.p.id].onClose
}), !1
}), y && t[u.p.id].beforeShowForm.call(u, n("#" + f)), n.jgrid.viewModal("#" + n.jgrid.jqID(s.themodal), {
gbox: "#gbox_" + n.jgrid.jqID(e),
jqm: t[u.p.id].jqModal,
overlay: t[u.p.id].overlay,
modal: t[u.p.id].modal
})
}
b && t[u.p.id].afterShowForm.call(u, n("#" + f)), !0 === t[u.p.id].closeOnEscape && setTimeout(function () {
n(".ui-jqdialog-titlebar-close", "#" + n.jgrid.jqID(s.modalhead)).focus()
}, 0)
}
})
},
navGrid: function (t, i, r, u, f, e, o) {
return i = n.extend({
edit: !0,
editicon: "ui-icon-pencil",
add: !0,
addicon: "ui-icon-plus",
del: !0,
delicon: "ui-icon-trash",
search: !0,
searchicon: "ui-icon-search",
refresh: !0,
refreshicon: "ui-icon-refresh",
refreshstate: "firstpage",
view: !1,
viewicon: "ui-icon-document",
position: "left",
closeOnEscape: !0,
beforeRefresh: null,
afterRefresh: null,
cloneToTop: !1,
alertwidth: 200,
alertheight: "auto",
alerttop: null,
alertleft: null,
alertzIndex: null
}, n.jgrid.nav, i || {}), this.each(function () {
var v, s, h, c, a, l;
if (!this.nav && (v = {
themodal: "alertmod_" + this.p.id,
modalhead: "alerthd_" + this.p.id,
modalcontent: "alertcnt_" + this.p.id
}, s = this, s.grid && "string" == typeof t)) {
void 0 === n("#" + v.themodal)[0] && (!i.alerttop && !i.alertleft && (void 0 !== window.innerWidth ? (i.alertleft = window.innerWidth, i.alerttop = window.innerHeight) : void 0 !== document.documentElement && void 0 !== document.documentElement.clientWidth && 0 !== document.documentElement.clientWidth ? (i.alertleft = document.documentElement.clientWidth, i.alerttop = document.documentElement.clientHeight) : (i.alertleft = 1024, i.alerttop = 768), i.alertleft = i.alertleft / 2 - parseInt(i.alertwidth, 10) / 2, i.alerttop = i.alerttop / 2 - 25), n.jgrid.createModal(v, "<div>" + i.alerttext + "<\/div><span tabindex='0'><span tabindex='-1' id='jqg_alrt'><\/span><\/span>", {
gbox: "#gbox_" + n.jgrid.jqID(s.p.id),
jqModal: !0,
drag: !0,
resize: !0,
caption: i.alertcap,
top: i.alerttop,
left: i.alertleft,
width: i.alertwidth,
height: i.alertheight,
closeOnEscape: i.closeOnEscape,
zIndex: i.alertzIndex
}, "#gview_" + n.jgrid.jqID(s.p.id), n("#gbox_" + n.jgrid.jqID(s.p.id))[0], !0));
var b = 1,
w, y = function () {
n(this).hasClass("ui-state-disabled") || n(this).addClass("ui-state-hover")
},
p = function () {
n(this).removeClass("ui-state-hover")
};
for (i.cloneToTop && s.p.toppager && (b = 2), w = 0; w < b; w++) c = n("<table cellspacing='0' cellpadding='0' border='0' class='ui-pg-table navtable' style='float:left;table-layout:auto;'><tbody><tr><\/tr><\/tbody><\/table>"), 0 === w ? (a = t, l = s.p.id, a == s.p.toppager && (l += "_top", b = 1)) : (a = s.p.toppager, l = s.p.id + "_top"), "rtl" == s.p.direction && n(c).attr("dir", "rtl").css("float", "right"), i.add && (u = u || {}, h = n("<td class='ui-pg-button ui-corner-all'><\/td>"), n(h).append("<div class='ui-pg-div'><span class='ui-icon " + i.addicon + "'><\/span>" + i.addtext + "<\/div>"), n("tr", c).append(h), n(h, c).attr({
title: i.addtitle || "",
id: u.id || "add_" + l
}).click(function () {
return n(this).hasClass("ui-state-disabled") || (n.isFunction(i.addfunc) ? i.addfunc.call(s) : n(s).jqGrid("editGridRow", "new", u)), !1
}).hover(y, p), h = null), i.edit && (h = n("<td class='ui-pg-button ui-corner-all'><\/td>"), r = r || {}, n(h).append("<div class='ui-pg-div'><span class='ui-icon " + i.editicon + "'><\/span>" + i.edittext + "<\/div>"), n("tr", c).append(h), n(h, c).attr({
title: i.edittitle || "",
id: r.id || "edit_" + l
}).click(function () {
if (!n(this).hasClass("ui-state-disabled")) {
var t = s.p.selrow;
t ? n.isFunction(i.editfunc) ? i.editfunc.call(s, t) : n(s).jqGrid("editGridRow", t, r) : (n.jgrid.viewModal("#" + v.themodal, {
gbox: "#gbox_" + n.jgrid.jqID(s.p.id),
jqm: !0
}), n("#jqg_alrt").focus())
}
return !1
}).hover(y, p), h = null), i.view && (h = n("<td class='ui-pg-button ui-corner-all'><\/td>"), o = o || {}, n(h).append("<div class='ui-pg-div'><span class='ui-icon " + i.viewicon + "'><\/span>" + i.viewtext + "<\/div>"), n("tr", c).append(h), n(h, c).attr({
title: i.viewtitle || "",
id: o.id || "view_" + l
}).click(function () {
if (!n(this).hasClass("ui-state-disabled")) {
var t = s.p.selrow;
t ? n.isFunction(i.viewfunc) ? i.viewfunc.call(s, t) : n(s).jqGrid("viewGridRow", t, o) : (n.jgrid.viewModal("#" + v.themodal, {
gbox: "#gbox_" + n.jgrid.jqID(s.p.id),
jqm: !0
}), n("#jqg_alrt").focus())
}
return !1
}).hover(y, p), h = null), i.del && (h = n("<td class='ui-pg-button ui-corner-all'><\/td>"), f = f || {}, n(h).append("<div class='ui-pg-div'><span class='ui-icon " + i.delicon + "'><\/span>" + i.deltext + "<\/div>"), n("tr", c).append(h), n(h, c).attr({
title: i.deltitle || "",
id: f.id || "del_" + l
}).click(function () {
if (!n(this).hasClass("ui-state-disabled")) {
var t;
s.p.multiselect ? (t = s.p.selarrrow, t.length === 0 && (t = null)) : t = s.p.selrow, t ? n.isFunction(i.delfunc) ? i.delfunc.call(s, t) : n(s).jqGrid("delGridRow", t, f) : (n.jgrid.viewModal("#" + v.themodal, {
gbox: "#gbox_" + n.jgrid.jqID(s.p.id),
jqm: !0
}), n("#jqg_alrt").focus())
}
return !1
}).hover(y, p), h = null), (i.add || i.edit || i.del || i.view) && n("tr", c).append("<td class='ui-pg-button ui-state-disabled' style='width:4px;'><span class='ui-separator'><\/span><\/td>"), i.search && (h = n("<td class='ui-pg-button ui-corner-all'><\/td>"), e = e || {}, n(h).append("<div class='ui-pg-div'><span class='ui-icon " + i.searchicon + "'><\/span>" + i.searchtext + "<\/div>"), n("tr", c).append(h), n(h, c).attr({
title: i.searchtitle || "",
id: e.id || "search_" + l
}).click(function () {
return n(this).hasClass("ui-state-disabled") || (n.isFunction(i.searchfunc) ? i.searchfunc.call(s, e) : n(s).jqGrid("searchGrid", e)), !1
}).hover(y, p), e.showOnLoad && !0 === e.showOnLoad && n(h, c).click(), h = null), i.refresh && (h = n("<td class='ui-pg-button ui-corner-all'><\/td>"), n(h).append("<div class='ui-pg-div'><span class='ui-icon " + i.refreshicon + "'><\/span>" + i.refreshtext + "<\/div>"), n("tr", c).append(h), n(h, c).attr({
title: i.refreshtitle || "",
id: "refresh_" + l
}).click(function () {
if (!n(this).hasClass("ui-state-disabled")) {
n.isFunction(i.beforeRefresh) && i.beforeRefresh.call(s), s.p.search = !1;
try {
var t = s.p.id;
s.p.postData.filters = "", n("#fbox_" + n.jgrid.jqID(t)).jqFilter("resetFilter"), n.isFunction(s.clearToolbar) && s.clearToolbar.call(s, !1)
} catch (r) { }
switch (i.refreshstate) {
case "firstpage":
n(s).trigger("reloadGrid", [{
page: 1
}]);
break;
case "current":
n(s).trigger("reloadGrid", [{
current: !0
}])
}
n.isFunction(i.afterRefresh) && i.afterRefresh.call(s)
}
return !1
}).hover(y, p), h = null), h = n(".ui-jqgrid").css("font-size") || "11px", n("body").append("<div id='testpg2' class='ui-jqgrid ui-widget ui-widget-content' style='font-size:" + h + ";visibility:hidden;' ><\/div>"), h = n(c).clone().appendTo("#testpg2").width(), n("#testpg2").remove(), n(a + "_" + i.position, a).append(c), s.p._nvtd && (h > s.p._nvtd[0] && (n(a + "_" + i.position, a).width(h), s.p._nvtd[0] = h), s.p._nvtd[1] = h), c = h = h = null, this.nav = !0
}
})
},
navButtonAdd: function (t, i) {
return i = n.extend({
caption: "newButton",
title: "",
buttonicon: "ui-icon-newwin",
onClickButton: null,
position: "last",
cursor: "pointer"
}, i || {}), this.each(function () {
var r, f, u;
this.grid && ("string" == typeof t && 0 !== t.indexOf("#") && (t = "#" + n.jgrid.jqID(t)), r = n(".navtable", t)[0], f = this, !r || i.id && void 0 !== n("#" + n.jgrid.jqID(i.id), r)[0] || (u = n("<td><\/td>"), "NONE" == i.buttonicon.toString().toUpperCase() ? n(u).addClass("ui-pg-button ui-corner-all").append("<div class='ui-pg-div'>" + i.caption + "<\/div>") : n(u).addClass("ui-pg-button ui-corner-all").append("<div class='ui-pg-div'><span class='ui-icon " + i.buttonicon + "'><\/span>" + i.caption + "<\/div>"), i.id && n(u).attr("id", i.id), "first" == i.position ? 0 === r.rows[0].cells.length ? n("tr", r).append(u) : n("tr td:eq(0)", r).before(u) : n("tr", r).append(u), n(u, r).attr("title", i.title || "").click(function (t) {
return n(this).hasClass("ui-state-disabled") || n.isFunction(i.onClickButton) && i.onClickButton.call(f, t), !1
}).hover(function () {
n(this).hasClass("ui-state-disabled") || n(this).addClass("ui-state-hover")
}, function () {
n(this).removeClass("ui-state-hover")
})))
})
},
navSeparatorAdd: function (t, i) {
return i = n.extend({
sepclass: "ui-separator",
sepcontent: "",
position: "last"
}, i || {}), this.each(function () {
var r, u;
this.grid && ("string" == typeof t && 0 !== t.indexOf("#") && (t = "#" + n.jgrid.jqID(t)), r = n(".navtable", t)[0], r && (u = "<td class='ui-pg-button ui-state-disabled' style='width:4px;'><span class='" + i.sepclass + "'><\/span>" + i.sepcontent + "<\/td>", "first" === i.position ? 0 === r.rows[0].cells.length ? n("tr", r).append(u) : n("tr td:eq(0)", r).before(u) : n("tr", r).append(u)))
})
},
GridToForm: function (t, i) {
return this.each(function () {
var f = this,
r, u;
if (f.grid && (u = n(f).jqGrid("getRowData", t), u))
for (r in u) u.hasOwnProperty(r) && (n("[name=" + n.jgrid.jqID(r) + "]", i).is("input:radio") || n("[name=" + n.jgrid.jqID(r) + "]", i).is("input:checkbox") ? n("[name=" + n.jgrid.jqID(r) + "]", i).each(function () {
n(this).val() == u[r] ? n(this)[f.p.useProp ? "prop" : "attr"]("checked", !0) : n(this)[f.p.useProp ? "prop" : "attr"]("checked", !1)
}) : n("[name=" + n.jgrid.jqID(r) + "]", i).val(u[r]))
})
},
FormToGrid: function (t, i, r, u) {
return this.each(function () {
if (this.grid) {
r || (r = "set"), u || (u = "first");
var e = n(i).serializeArray(),
f = {};
n.each(e, function (n, t) {
f[t.name] = t.value
}), "add" == r ? n(this).jqGrid("addRowData", t, f, u) : "set" == r && n(this).jqGrid("setRowData", t, f)
}
})
}
})
}(jQuery),
function (n) {
n.fn.jqFilter = function (t) {
var r, u, i;
if ("string" == typeof t) {
if (r = n.fn.jqFilter[t], !r) throw "jqFilter - No such method: " + t;
return u = n.makeArray(arguments).slice(1), r.apply(this, u)
}
return i = n.extend(!0, {
filter: null,
columns: [],
onChange: null,
afterRedraw: null,
checkValues: null,
error: !1,
errmsg: "",
errorcheck: !0,
showQuery: !0,
sopt: null,
ops: [{
name: "eq",
description: "equal",
operator: "="
}, {
name: "ne",
description: "not equal",
operator: "<>"
}, {
name: "lt",
description: "less",
operator: "<"
}, {
name: "le",
description: "less or equal",
operator: "<="
}, {
name: "gt",
description: "greater",
operator: ">"
}, {
name: "ge",
description: "greater or equal",
operator: ">="
}, {
name: "bw",
description: "begins with",
operator: "LIKE"
}, {
name: "bn",
description: "does not begin with",
operator: "NOT LIKE"
}, {
name: "in",
description: "in",
operator: "IN"
}, {
name: "ni",
description: "not in",
operator: "NOT IN"
}, {
name: "ew",
description: "ends with",
operator: "LIKE"
}, {
name: "en",
description: "does not end with",
operator: "NOT LIKE"
}, {
name: "cn",
description: "contains",
operator: "LIKE"
}, {
name: "nc",
description: "does not contain",
operator: "NOT LIKE"
}, {
name: "nu",
description: "is null",
operator: "IS NULL"
}, {
name: "nn",
description: "is not null",
operator: "IS NOT NULL"
}],
numopts: "eq,ne,lt,le,gt,ge,nu,nn,in,ni".split(","),
stropts: "eq,ne,bw,bn,ew,en,cn,nc,nu,nn,in,ni".split(","),
strarr: ["text", "string", "blob"],
_gridsopt: [],
groupOps: [{
op: "AND",
text: "AND"
}, {
op: "OR",
text: "OR"
}],
groupButton: !0,
ruleButtons: !0,
direction: "ltr"
}, n.jgrid.filter, t || {}), this.each(function () {
var r, u, t, f, e;
if (!this.filter) {
if (this.p = i, (null === this.p.filter || void 0 === this.p.filter) && (this.p.filter = {
groupOp: this.p.groupOps[0].op,
rules: [],
groups: []
}), u = this.p.columns.length, f = /msie/i.test(navigator.userAgent) && !window.opera, this.p._gridsopt.length)
for (r = 0; r < this.p._gridsopt.length; r++) this.p.ops[r].description = this.p._gridsopt[r];
if (this.p.initFilter = n.extend(!0, {}, this.p.filter), u) {
for (r = 0; r < u; r++) (t = this.p.columns[r], t.stype ? t.inputtype = t.stype : t.inputtype || (t.inputtype = "text"), t.sorttype ? t.searchtype = t.sorttype : t.searchtype || (t.searchtype = "string"), void 0 === t.hidden && (t.hidden = !1), t.label || (t.label = t.name), t.index && (t.name = t.index), t.hasOwnProperty("searchoptions") || (t.searchoptions = {}), t.hasOwnProperty("searchrules")) || (t.searchrules = {});
this.p.showQuery && n(this).append("<table class='queryresult ui-widget ui-widget-content' style='display:block;max-width:440px;border:0px none;' dir='" + this.p.direction + "'><tbody><tr><td class='query'><\/td><\/tr><\/tbody><\/table>"), e = function (t, r) {
var u = [!0, ""];
if (n.isFunction(r.searchrules)) u = r.searchrules(t, r);
else if (n.jgrid && n.jgrid.checkValues) try {
u = n.jgrid.checkValues(t, -1, null, r.searchrules, r.label)
} catch (f) { }
u && u.length && !1 === u[0] && (i.error = !u[0], i.errmsg = u[1])
}, this.onchange = function () {
return this.p.error = !1, this.p.errmsg = "", n.isFunction(this.p.onChange) ? this.p.onChange.call(this, this.p) : !1
}, this.reDraw = function () {
n("table.group:first", this).remove();
var t = this.createTableForGroup(i.filter, null);
n(this).append(t), n.isFunction(this.p.afterRedraw) && this.p.afterRedraw.call(this, this.p)
}, this.createTableForGroup = function (t, r) {
var e = this,
u, s = n("<table class='group ui-widget ui-widget-content' style='border:0px none;'><tbody><\/tbody><\/table>"),
o = "left",
c, l, f, h;
if ("rtl" == this.p.direction && (o = "right", s.attr("dir", "rtl")), null === r && s.append("<tr class='error' style='display:none;'><th colspan='5' class='ui-state-error' align='" + o + "'><\/th><\/tr>"), f = n("<tr><\/tr>"), s.append(f), o = n("<th colspan='5' align='" + o + "'><\/th>"), f.append(o), !0 === this.p.ruleButtons) {
for (c = n("<select class='opsel'><\/select>"), o.append(c), f = "", u = 0; u < i.groupOps.length; u++) l = t.groupOp === e.p.groupOps[u].op ? " selected='selected'" : "", f += "<option value='" + e.p.groupOps[u].op + "'" + l + ">" + e.p.groupOps[u].text + "<\/option>";
c.append(f).bind("change", function () {
t.groupOp = n(c).val(), e.onchange()
})
}
if (f = "<span><\/span>", this.p.groupButton && (f = n("<input type='button' value='+ {}' title='Add subgroup' class='add-group'/>"), f.bind("click", function () {
return t.groups === void 0 && (t.groups = []), t.groups.push({
groupOp: i.groupOps[0].op,
rules: [],
groups: []
}), e.reDraw(), e.onchange(), !1
})), o.append(f), !0 === this.p.ruleButtons && (f = n("<input type='button' value='+' title='Add rule' class='add-rule ui-add'/>"), f.bind("click", function () {
for (t.rules === void 0 && (t.rules = []), u = 0; u < e.p.columns.length; u++) {
var i = e.p.columns[u].search === void 0 ? !0 : e.p.columns[u].search,
r = e.p.columns[u].hidden === !0;
if (e.p.columns[u].searchoptions.searchhidden === !0 && i || i && !r) {
h = e.p.columns[u];
break
}
}
return i = h.searchoptions.sopt ? h.searchoptions.sopt : e.p.sopt ? e.p.sopt : n.inArray(h.searchtype, e.p.strarr) !== -1 ? e.p.stropts : e.p.numopts, t.rules.push({
field: h.name,
op: i[0],
data: ""
}), e.reDraw(), !1
}), o.append(f)), null !== r && (f = n("<input type='button' value='-' title='Delete group' class='delete-group'/>"), o.append(f), f.bind("click", function () {
for (u = 0; u < r.groups.length; u++)
if (r.groups[u] === t) {
r.groups.splice(u, 1);
break
}
return e.reDraw(), e.onchange(), !1
})), void 0 !== t.groups)
for (u = 0; u < t.groups.length; u++) o = n("<tr><\/tr>"), s.append(o), f = n("<td class='first'><\/td>"), o.append(f), f = n("<td colspan='4'><\/td>"), f.append(this.createTableForGroup(t.groups[u], t)), o.append(f);
if (void 0 === t.groupOp && (t.groupOp = e.p.groupOps[0].op), void 0 !== t.rules)
for (u = 0; u < t.rules.length; u++) s.append(this.createTableRowForRule(t.rules[u], t));
return s
}, this.createTableRowForRule = function (t, r) {
var u = this,
v = n("<tr><\/tr>"),
e, y, c, o, h = "",
a, s, w, l, p, k, b;
for (v.append("<td class='first'><\/td>"), s = n("<td class='columns'><\/td>"), v.append(s), w = n("<select><\/select>"), p = [], s.append(w), w.bind("change", function () {
var i, r, s;
for (t.field = n(w).val(), c = n(this).parents("tr:first"), e = 0; e < u.p.columns.length; e++)
if (u.p.columns[e].name === t.field) {
o = u.p.columns[e];
break
}
if (o) {
for (o.searchoptions.id = n.jgrid.randId(), f && "text" === o.inputtype && !o.searchoptions.size && (o.searchoptions.size = 10), i = n.jgrid.createEl(o.inputtype, o.searchoptions, "", !0, u.p.ajaxSelectOptions, !0), n(i).addClass("input-elm"), y = o.searchoptions.sopt ? o.searchoptions.sopt : u.p.sopt ? u.p.sopt : -1 !== n.inArray(o.searchtype, u.p.strarr) ? u.p.stropts : u.p.numopts, r = "", s = 0, p = [], n.each(u.p.ops, function () {
p.push(this.name)
}), e = 0; e < y.length; e++) l = n.inArray(y[e], p), -1 !== l && (0 === s && (t.op = u.p.ops[l].name), r += "<option value='" + u.p.ops[l].name + "'>" + u.p.ops[l].description + "<\/option>", s++);
n(".selectopts", c).empty().append(r), n(".selectopts", c)[0].selectedIndex = 0, n.jgrid.msie && 9 > n.jgrid.msiever() && (r = parseInt(n("select.selectopts", c)[0].offsetWidth, 10) + 1, n(".selectopts", c).width(r), n(".selectopts", c).css("width", "auto")), n(".data", c).empty().append(i), n.jgrid.bindEv(i, o.searchoptions, u), n(".input-elm", c).bind("change", function (i) {
var r = n(this).hasClass("ui-autocomplete-input") ? 200 : 0;
setTimeout(function () {
var r = i.target;
t.data = r.nodeName.toUpperCase() === "SPAN" && o.searchoptions && n.isFunction(o.searchoptions.custom_value) ? o.searchoptions.custom_value(n(r).children(".customelement:first"), "get") : r.value, u.onchange()
}, r)
}), setTimeout(function () {
t.data = n(i).val(), u.onchange()
}, 0)
}
}), e = s = 0; e < u.p.columns.length; e++) a = void 0 === u.p.columns[e].search ? !0 : u.p.columns[e].search, k = !0 === u.p.columns[e].hidden, (!0 === u.p.columns[e].searchoptions.searchhidden && a || a && !k) && (a = "", t.field === u.p.columns[e].name && (a = " selected='selected'", s = e), h += "<option value='" + u.p.columns[e].name + "'" + a + ">" + u.p.columns[e].label + "<\/option>");
for (w.append(h), h = n("<td class='operators'><\/td>"), v.append(h), o = i.columns[s], o.searchoptions.id = n.jgrid.randId(), f && "text" === o.inputtype && !o.searchoptions.size && (o.searchoptions.size = 10), s = n.jgrid.createEl(o.inputtype, o.searchoptions, t.data, !0, u.p.ajaxSelectOptions, !0), ("nu" == t.op || "nn" == t.op) && (n(s).attr("readonly", "true"), n(s).attr("disabled", "true")), b = n("<select class='selectopts'><\/select>"), h.append(b), b.bind("change", function () {
t.op = n(b).val(), c = n(this).parents("tr:first");
var i = n(".input-elm", c)[0];
t.op === "nu" || t.op === "nn" ? (t.data = "", i.value = "", i.setAttribute("readonly", "true"), i.setAttribute("disabled", "true")) : (i.removeAttribute("readonly"), i.removeAttribute("disabled")), u.onchange()
}), y = o.searchoptions.sopt ? o.searchoptions.sopt : u.p.sopt ? u.p.sopt : -1 !== n.inArray(o.searchtype, u.p.strarr) ? u.p.stropts : u.p.numopts, h = "", n.each(u.p.ops, function () {
p.push(this.name)
}), e = 0; e < y.length; e++) l = n.inArray(y[e], p), -1 !== l && (a = t.op === u.p.ops[l].name ? " selected='selected'" : "", h += "<option value='" + u.p.ops[l].name + "'" + a + ">" + u.p.ops[l].description + "<\/option>");
return b.append(h), h = n("<td class='data'><\/td>"), v.append(h), h.append(s), n.jgrid.bindEv(s, o.searchoptions, u), n(s).addClass("input-elm").bind("change", function () {
t.data = o.inputtype === "custom" ? o.searchoptions.custom_value(n(this).children(".customelement:first"), "get") : n(this).val(), u.onchange()
}), h = n("<td><\/td>"), v.append(h), !0 === this.p.ruleButtons && (s = n("<input type='button' value='-' title='Delete rule' class='delete-rule ui-del'/>"), h.append(s), s.bind("click", function () {
for (e = 0; e < r.rules.length; e++)
if (r.rules[e] === t) {
r.rules.splice(e, 1);
break
}
return u.reDraw(), u.onchange(), !1
})), v
}, this.getStringForGroup = function (n) {
var t = "(",
i;
if (void 0 !== n.groups)
for (i = 0; i < n.groups.length; i++) {
1 < t.length && (t += " " + n.groupOp + " ");
try {
t += this.getStringForGroup(n.groups[i])
} catch (r) {
alert(r)
}
}
if (void 0 !== n.rules) try {
for (i = 0; i < n.rules.length; i++) 1 < t.length && (t += " " + n.groupOp + " "), t += this.getStringForRule(n.rules[i])
} catch (u) {
alert(u)
}
return t += ")", "()" === t ? "" : t
}, this.getStringForRule = function (t) {
for (var o = "", u = "", f, r = 0; r < this.p.ops.length; r++)
if (this.p.ops[r].name === t.op) {
o = this.p.ops[r].operator, u = this.p.ops[r].name;
break
}
for (r = 0; r < this.p.columns.length; r++)
if (this.p.columns[r].name === t.field) {
f = this.p.columns[r];
break
}
return null == f ? "" : (r = t.data, ("bw" === u || "bn" === u) && (r += "%"), ("ew" === u || "en" === u) && (r = "%" + r), ("cn" === u || "nc" === u) && (r = "%" + r + "%"), ("in" === u || "ni" === u) && (r = " (" + r + ")"), i.errorcheck && e(t.data, f), -1 !== n.inArray(f.searchtype, ["int", "integer", "float", "number", "currency"]) || "nn" === u || "nu" === u ? t.field + " " + o + " " + r : t.field + " " + o + ' "' + r + '"')
}, this.resetFilter = function () {
this.p.filter = n.extend(!0, {}, this.p.initFilter), this.reDraw(), this.onchange()
}, this.hideError = function () {
n("th.ui-state-error", this).html(""), n("tr.error", this).hide()
}, this.showError = function () {
n("th.ui-state-error", this).html(this.p.errmsg), n("tr.error", this).show()
}, this.toUserFriendlyString = function () {
return this.getStringForGroup(i.filter)
}, this.toString = function () {
function t(i) {
var r = "(",
u, f;
if (void 0 !== i.groups)
for (u = 0; u < i.groups.length; u++) 1 < r.length && (r = "OR" === i.groupOp ? r + " || " : r + " && "), r += t(i.groups[u]);
if (void 0 !== i.rules)
for (u = 0; u < i.rules.length; u++) {
if (1 < r.length && (r = "OR" === i.groupOp ? r + " || " : r + " && "), f = i.rules[u], n.p.errorcheck) {
for (var o = void 0, s = void 0, o = 0; o < n.p.columns.length; o++)
if (n.p.columns[o].name === f.field) {
s = n.p.columns[o];
break
}
s && e(f.data, s)
}
r += f.op + "(item." + f.field + ",'" + f.data + "')"
}
return r += ")", "()" === r ? "" : r
}
var n = this;
return t(this.p.filter)
}, this.reDraw(), this.p.showQuery && this.onchange(), this.filter = !0
}
}
})
}, n.extend(n.fn.jqFilter, {
toSQLString: function () {
var n = "";
return this.each(function () {
n = this.toUserFriendlyString()
}), n
},
filterData: function () {
var n;
return this.each(function () {
n = this.p.filter
}), n
},
getParameter: function (n) {
return void 0 !== n && this.p.hasOwnProperty(n) ? this.p[n] : this.p
},
resetFilter: function () {
return this.each(function () {
this.resetFilter()
})
},
addFilter: function (t) {
"string" == typeof t && (t = n.jgrid.parse(t)), this.each(function () {
this.p.filter = t, this.reDraw(), this.onchange()
})
}
})
}(jQuery),
function (n) {
n.jgrid.inlineEdit = n.jgrid.inlineEdit || {}, n.jgrid.extend({
editRow: function (t, i, r, u, f, e, o, s, h) {
var c = {},
l = n.makeArray(arguments).slice(1);
return "object" === n.type(l[0]) ? c = l[0] : (void 0 !== i && (c.keys = i), n.isFunction(r) && (c.oneditfunc = r), n.isFunction(u) && (c.successfunc = u), void 0 !== f && (c.url = f), void 0 !== e && (c.extraparam = e), n.isFunction(o) && (c.aftersavefunc = o), n.isFunction(s) && (c.errorfunc = s), n.isFunction(h)) && (c.afterrestorefunc = h), c = n.extend(!0, {
keys: !1,
oneditfunc: null,
successfunc: null,
url: null,
extraparam: {},
aftersavefunc: null,
errorfunc: null,
afterrestorefunc: null,
restoreAfterError: !0,
mtype: "POST"
}, n.jgrid.inlineEdit, c), this.each(function () {
var i = this,
f, u, h = 0,
o = null,
s = {},
e, r;
i.grid && (e = n(i).jqGrid("getInd", t, !0), !1 !== e && "0" == (n(e).attr("editable") || "0") && !n(e).hasClass("not-editable-row")) && (r = i.p.colModel, n('td[role="gridcell"]', e).each(function (e) {
var l, a, c;
if (f = r[e].name, l = !0 === i.p.treeGrid && f == i.p.ExpandColumn, l) u = n("span:first", this).html();
else try {
u = n.unformat.call(i, this, {
rowId: t,
colModel: r[e]
}, e)
} catch (v) {
u = r[e].edittype && "textarea" == r[e].edittype ? n(this).text() : n(this).html()
}
"cb" != f && "subgrid" != f && "rn" != f && (i.p.autoencode && (u = n.jgrid.htmlDecode(u)), s[f] = u, !0 === r[e].editable) && (null === o && (o = e), l ? n("span:first", this).html("") : n(this).html(""), a = n.extend({}, r[e].editoptions || {}, {
id: t + "_" + f,
name: f
}), r[e].edittype || (r[e].edittype = "text"), ("&nbsp;" == u || "&#160;" == u || 1 == u.length && 160 == u.charCodeAt(0)) && (u = ""), c = n.jgrid.createEl.call(i, r[e].edittype, a, u, !0, n.extend({}, n.jgrid.ajaxOptions, i.p.ajaxSelectOptions || {})), n(c).addClass("editable"), l ? n("span:first", this).append(c) : n(this).append(c), n.jgrid.bindEv(c, a, i), "select" == r[e].edittype && void 0 !== r[e].editoptions && !0 === r[e].editoptions.multiple && void 0 === r[e].editoptions.dataUrl && n.jgrid.msie && n(c).width(n(c).width()), h++)
}), 0 < h && (s.id = t, i.p.savedRow.push(s), n(e).attr("editable", "1"), n("td:eq(" + o + ") input", e).focus(), !0 === c.keys && n(e).bind("keydown", function (r) {
if (27 === r.keyCode) {
if (n(i).jqGrid("restoreRow", t, c.afterrestorefunc), i.p._inlinenav) try {
n(i).jqGrid("showAddEditButtons")
} catch (u) { }
return !1
}
if (13 === r.keyCode) {
if ("TEXTAREA" == r.target.tagName) return !0;
if (n(i).jqGrid("saveRow", t, c) && i.p._inlinenav) try {
n(i).jqGrid("showAddEditButtons")
} catch (f) { }
return !1
}
}), n(i).triggerHandler("jqGridInlineEditRow", [t, c]), n.isFunction(c.oneditfunc) && c.oneditfunc.call(i, t)))
})
},
saveRow: function (t, i, r, u, f, e, o) {
var a = n.makeArray(arguments).slice(1),
c = {},
y, k;
"object" === n.type(a[0]) ? c = a[0] : (n.isFunction(i) && (c.successfunc = i), void 0 !== r && (c.url = r), void 0 !== u && (c.extraparam = u), n.isFunction(f) && (c.aftersavefunc = f), n.isFunction(e) && (c.errorfunc = e), n.isFunction(o)) && (c.afterrestorefunc = o);
var c = n.extend(!0, {
successfunc: null,
url: null,
extraparam: {},
aftersavefunc: null,
errorfunc: null,
afterrestorefunc: null,
restoreAfterError: !0,
mtype: "POST"
}, n.jgrid.inlineEdit, c),
g = !1,
s = this[0],
l, h = {},
nt = {},
w = {},
d, b, p;
if (!s.grid || (p = n(s).jqGrid("getInd", t, !0), !1 === p)) return g;
if (a = n(p).attr("editable"), c.url = c.url || s.p.editurl, "1" === a) {
if (n('td[role="gridcell"]', p).each(function (t) {
var i, r;
if (y = s.p.colModel[t], l = y.name, "cb" != l && "subgrid" != l && !0 === y.editable && "rn" != l && !n(this).hasClass("not-editable-cell")) {
switch (y.edittype) {
case "checkbox":
i = ["Yes", "No"], y.editoptions && (i = y.editoptions.value.split(":")), h[l] = n("input", this).is(":checked") ? i[0] : i[1];
break;
case "text":
case "password":
case "textarea":
case "button":
h[l] = n("input, textarea", this).val();
break;
case "select":
y.editoptions.multiple ? (i = n("select", this), r = [], h[l] = n(i).val(), h[l] = h[l] ? h[l].join(",") : "", n("select option:selected", this).each(function (t, i) {
r[t] = n(i).text()
}), nt[l] = r.join(",")) : (h[l] = n("select option:selected", this).val(), nt[l] = n("select option:selected", this).text()), y.formatter && "select" == y.formatter && (nt = {});
break;
case "custom":
try {
if (y.editoptions && n.isFunction(y.editoptions.custom_value)) {
if (h[l] = y.editoptions.custom_value.call(s, n(".customelement", this), "get"), void 0 === h[l]) throw "e2";
} else throw "e1";
} catch (u) {
"e1" == u && n.jgrid.info_dialog(n.jgrid.errors.errcap, "function 'custom_value' " + n.jgrid.edit.msg.nodefined, n.jgrid.edit.bClose), "e2" == u ? n.jgrid.info_dialog(n.jgrid.errors.errcap, "function 'custom_value' " + n.jgrid.edit.msg.novalue, n.jgrid.edit.bClose) : n.jgrid.info_dialog(n.jgrid.errors.errcap, u.message, n.jgrid.edit.bClose)
}
}
if (b = n.jgrid.checkValues(h[l], t, s), !1 === b[0]) return b[1] = h[l] + " " + b[1], !1;
s.p.autoencode && (h[l] = n.jgrid.htmlEncode(h[l])), "clientArray" !== c.url && y.editoptions && !0 === y.editoptions.NullIfEmpty && "" === h[l] && (w[l] = "null")
}
}), !1 === b[0]) {
try {
k = n.jgrid.findPos(n("#" + n.jgrid.jqID(t), s.grid.bDiv)[0]), n.jgrid.info_dialog(n.jgrid.errors.errcap, b[1], n.jgrid.edit.bClose, {
left: k[0],
top: k[1]
})
} catch (tt) {
alert(b[1])
}
return g
}
var v = s.p.prmNames,
k = t,
a = !1 === s.p.keyIndex ? v.id : s.p.colModel[s.p.keyIndex + (!0 === s.p.rownumbers ? 1 : 0) + (!0 === s.p.multiselect ? 1 : 0) + (!0 === s.p.subGrid ? 1 : 0)].name;
if (h && (h[v.oper] = v.editoper, void 0 === h[a] ? h[a] = t : p.id !== s.p.idPrefix + h[a] && (v = n.jgrid.stripPref(s.p.idPrefix, t), void 0 !== s.p._index[v] && (s.p._index[h[a]] = s.p._index[v], delete s.p._index[v]), t = s.p.idPrefix + h[a], n(p).attr("id", t), s.p.selrow === k && (s.p.selrow = t), n.isArray(s.p.selarrrow) && (v = n.inArray(k, s.p.selarrrow), 0 <= v && (s.p.selarrrow[v] = t)), s.p.multiselect) && (v = "jqg_" + s.p.id + "_" + t, n("input.cbox", p).attr("id", v).attr("name", v)), void 0 === s.p.inlineData && (s.p.inlineData = {}), h = n.extend({}, h, s.p.inlineData, c.extraparam)), "clientArray" == c.url) {
for (h = n.extend({}, h, nt), s.p.autoencode && n.each(h, function (t, i) {
h[t] = n.jgrid.htmlDecode(i)
}), v = n(s).jqGrid("setRowData", t, h), n(p).attr("editable", "0"), a = 0; a < s.p.savedRow.length; a++)
if (s.p.savedRow[a].id == k) {
d = a;
break
}
0 <= d && s.p.savedRow.splice(d, 1), n(s).triggerHandler("jqGridInlineAfterSaveRow", [t, v, h, c]), n.isFunction(c.aftersavefunc) && c.aftersavefunc.call(s, t, v, c), g = !0, n(p).unbind("keydown")
} else n("#lui_" + n.jgrid.jqID(s.p.id)).show(), w = n.extend({}, h, w), w[a] = n.jgrid.stripPref(s.p.idPrefix, w[a]), n.ajax(n.extend({
url: c.url,
data: n.isFunction(s.p.serializeRowData) ? s.p.serializeRowData.call(s, w) : w,
type: c.mtype,
async: !1,
complete: function (i, r) {
if (n("#lui_" + n.jgrid.jqID(s.p.id)).hide(), "success" === r) {
var f = !0,
u;
if (u = n(s).triggerHandler("jqGridInlineSuccessSaveRow", [i, t, c]), n.isArray(u) || (u = [!0, h]), u[0] && n.isFunction(c.successfunc) && (u = c.successfunc.call(s, i)), n.isArray(u) ? (f = u[0], h = u[1] || h) : f = u, !0 === f) {
for (s.p.autoencode && n.each(h, function (t, i) {
h[t] = n.jgrid.htmlDecode(i)
}), h = n.extend({}, h, nt), n(s).jqGrid("setRowData", t, h), n(p).attr("editable", "0"), f = 0; f < s.p.savedRow.length; f++)
if (s.p.savedRow[f].id == t) {
d = f;
break
}
0 <= d && s.p.savedRow.splice(d, 1), n(s).triggerHandler("jqGridInlineAfterSaveRow", [t, i, h, c]), n.isFunction(c.aftersavefunc) && c.aftersavefunc.call(s, t, i), g = !0, n(p).unbind("keydown")
} else n(s).triggerHandler("jqGridInlineErrorSaveRow", [t, i, r, null, c]), n.isFunction(c.errorfunc) && c.errorfunc.call(s, t, i, r, null), !0 === c.restoreAfterError && n(s).jqGrid("restoreRow", t, c.afterrestorefunc)
}
},
error: function (i, r, u) {
if (n("#lui_" + n.jgrid.jqID(s.p.id)).hide(), n(s).triggerHandler("jqGridInlineErrorSaveRow", [t, i, r, u, c]), n.isFunction(c.errorfunc)) c.errorfunc.call(s, t, i, r, u);
else {
i = i.responseText || i.statusText;
try {
n.jgrid.info_dialog(n.jgrid.errors.errcap, '<div class="ui-state-error">' + i + "<\/div>", n.jgrid.edit.bClose, {
buttonalign: "right"
})
} catch (f) {
alert(i)
}
} !0 === c.restoreAfterError && n(s).jqGrid("restoreRow", t, c.afterrestorefunc)
}
}, n.jgrid.ajaxOptions, s.p.ajaxRowOptions || {}))
}
return g
},
restoreRow: function (t, i) {
var u = n.makeArray(arguments).slice(1),
r = {};
return "object" === n.type(u[0]) ? r = u[0] : n.isFunction(i) && (r.afterrestorefunc = i), r = n.extend(!0, n.jgrid.inlineEdit, r), this.each(function () {
var i = this,
u, e, o = {},
f;
if (i.grid && (e = n(i).jqGrid("getInd", t, !0), e !== !1)) {
for (f = 0; f < i.p.savedRow.length; f++)
if (i.p.savedRow[f].id == t) {
u = f;
break
}
if (u >= 0) {
if (n.isFunction(n.fn.datepicker)) try {
n("input.hasDatepicker", "#" + n.jgrid.jqID(e.id)).datepicker("hide")
} catch (s) { }
n.each(i.p.colModel, function () {
this.editable === !0 && i.p.savedRow[u].hasOwnProperty(this.name) && (o[this.name] = i.p.savedRow[u][this.name])
}), n(i).jqGrid("setRowData", t, o), n(e).attr("editable", "0").unbind("keydown"), i.p.savedRow.splice(u, 1), n("#" + n.jgrid.jqID(t), "#" + n.jgrid.jqID(i.p.id)).hasClass("jqgrid-new-row") && setTimeout(function () {
n(i).jqGrid("delRowData", t)
}, 0)
}
n(i).triggerHandler("jqGridInlineAfterRestoreRow", [t]), n.isFunction(r.afterrestorefunc) && r.afterrestorefunc.call(i, t)
}
})
},
addRow: function (t) {
return t = n.extend(!0, {
rowID: null,
initdata: {},
position: "first",
useDefValues: !0,
useFormatter: !1,
addRowParams: {
extraparam: {}
}
}, t || {}), this.each(function () {
var i, r;
this.grid && (i = this, t.rowID = n.isFunction(t.rowID) ? t.rowID.call(i, t) : null != t.rowID ? t.rowID : n.jgrid.randId(), !0 === t.useDefValues && n(i.p.colModel).each(function () {
if (this.editoptions && this.editoptions.defaultValue) {
var r = this.editoptions.defaultValue,
r = n.isFunction(r) ? r.call(i) : r;
t.initdata[this.name] = r
}
}), n(i).jqGrid("addRowData", t.rowID, t.initdata, t.position), t.rowID = i.p.idPrefix + t.rowID, n("#" + n.jgrid.jqID(t.rowID), "#" + n.jgrid.jqID(i.p.id)).addClass("jqgrid-new-row"), t.useFormatter ? n("#" + n.jgrid.jqID(t.rowID) + " .ui-inline-edit", "#" + n.jgrid.jqID(i.p.id)).click() : (r = i.p.prmNames, t.addRowParams.extraparam[r.oper] = r.addoper, n(i).jqGrid("editRow", t.rowID, t.addRowParams), n(i).jqGrid("setSelection", t.rowID)))
})
},
inlineNav: function (t, i) {
return i = n.extend({
edit: !0,
editicon: "ui-icon-pencil",
add: !0,
addicon: "ui-icon-plus",
save: !0,
saveicon: "ui-icon-disk",
cancel: !0,
cancelicon: "ui-icon-cancel",
addParams: {},
editParams: {},
restoreAfterSelect: !0
}, n.jgrid.nav, i || {}), this.each(function () {
var r, o, u, f, e;
if (this.grid) {
if (r = this, u = n.jgrid.jqID(r.p.id), r.p._inlinenav = !0, !0 === i.addParams.useFormatter)
for (f = r.p.colModel, e = 0; e < f.length; e++)
if (f[e].formatter && "actions" === f[e].formatter) {
f[e].formatoptions && (f = n.extend({
keys: !1,
onEdit: null,
onSuccess: null,
afterSave: null,
onError: null,
afterRestore: null,
extraparam: {},
url: null
}, f[e].formatoptions), i.addParams.addRowParams = {
keys: f.keys,
oneditfunc: f.onEdit,
successfunc: f.onSuccess,
url: f.url,
extraparam: f.extraparam,
aftersavefunc: f.afterSavef,
errorfunc: f.onError,
afterrestorefunc: f.afterRestore
});
break
}
i.add && n(r).jqGrid("navButtonAdd", t, {
caption: i.addtext,
title: i.addtitle,
buttonicon: i.addicon,
id: r.p.id + "_iladd",
onClickButton: function () {
n(r).jqGrid("addRow", i.addParams), i.addParams.useFormatter || (n("#" + u + "_ilsave").removeClass("ui-state-disabled"), n("#" + u + "_ilcancel").removeClass("ui-state-disabled"), n("#" + u + "_iladd").addClass("ui-state-disabled"), n("#" + u + "_iledit").addClass("ui-state-disabled"))
}
}), i.edit && n(r).jqGrid("navButtonAdd", t, {
caption: i.edittext,
title: i.edittitle,
buttonicon: i.editicon,
id: r.p.id + "_iledit",
onClickButton: function () {
var t = n(r).jqGrid("getGridParam", "selrow");
t ? (n(r).jqGrid("editRow", t, i.editParams), n("#" + u + "_ilsave").removeClass("ui-state-disabled"), n("#" + u + "_ilcancel").removeClass("ui-state-disabled"), n("#" + u + "_iladd").addClass("ui-state-disabled"), n("#" + u + "_iledit").addClass("ui-state-disabled")) : (n.jgrid.viewModal("#alertmod", {
gbox: "#gbox_" + u,
jqm: !0
}), n("#jqg_alrt").focus())
}
}), i.save && (n(r).jqGrid("navButtonAdd", t, {
caption: i.savetext || "",
title: i.savetitle || "Save row",
buttonicon: i.saveicon,
id: r.p.id + "_ilsave",
onClickButton: function () {
var f = r.p.savedRow[0].id,
t, e;
f ? (t = r.p.prmNames, e = t.oper, i.editParams.extraparam || (i.editParams.extraparam = {}), i.editParams.extraparam[e] = n("#" + n.jgrid.jqID(f), "#" + u).hasClass("jqgrid-new-row") ? t.addoper : t.editoper, n(r).jqGrid("saveRow", f, i.editParams) && n(r).jqGrid("showAddEditButtons")) : (n.jgrid.viewModal("#alertmod", {
gbox: "#gbox_" + u,
jqm: !0
}), n("#jqg_alrt").focus())
}
}), n("#" + u + "_ilsave").addClass("ui-state-disabled")), i.cancel && (n(r).jqGrid("navButtonAdd", t, {
caption: i.canceltext || "",
title: i.canceltitle || "Cancel row editing",
buttonicon: i.cancelicon,
id: r.p.id + "_ilcancel",
onClickButton: function () {
var t = r.p.savedRow[0].id;
t ? (n(r).jqGrid("restoreRow", t, i.editParams), n(r).jqGrid("showAddEditButtons")) : (n.jgrid.viewModal("#alertmod", {
gbox: "#gbox_" + u,
jqm: !0
}), n("#jqg_alrt").focus())
}
}), n("#" + u + "_ilcancel").addClass("ui-state-disabled")), !0 === i.restoreAfterSelect && (o = n.isFunction(r.p.beforeSelectRow) ? r.p.beforeSelectRow : !1, r.p.beforeSelectRow = function (t, u) {
var f = !0;
return r.p.savedRow.length > 0 && r.p._inlinenav === !0 && t !== r.p.selrow && r.p.selrow !== null && (r.p.selrow == i.addParams.rowID ? n(r).jqGrid("delRowData", r.p.selrow) : n(r).jqGrid("restoreRow", r.p.selrow, i.editParams), n(r).jqGrid("showAddEditButtons")), o && (f = o.call(r, t, u)), f
})
}
})
},
showAddEditButtons: function () {
return this.each(function () {
if (this.grid) {
var t = n.jgrid.jqID(this.p.id);
n("#" + t + "_ilsave").addClass("ui-state-disabled"), n("#" + t + "_ilcancel").addClass("ui-state-disabled"), n("#" + t + "_iladd").removeClass("ui-state-disabled"), n("#" + t + "_iledit").removeClass("ui-state-disabled")
}
})
}
})
}(jQuery),
function (n) {
n.jgrid.extend({
editCell: function (t, i, r) {
return this.each(function () {
var u = this,
e, f, o, s, h, c;
if (u.grid && !0 === u.p.cellEdit) {
if (i = parseInt(i, 10), u.p.selrow = u.rows[t].id, u.p.knv || n(u).jqGrid("GridNav"), 0 < u.p.savedRow.length) {
if (!0 === r && t == u.p.iRow && i == u.p.iCol) return;
n(u).jqGrid("saveCell", u.p.savedRow[0].id, u.p.savedRow[0].ic)
} else window.setTimeout(function () {
n("#" + n.jgrid.jqID(u.p.knv)).attr("tabindex", "-1").focus()
}, 0);
if (s = u.p.colModel[i], e = s.name, !("subgrid" == e || "cb" == e || "rn" == e)) {
if (o = n("td:eq(" + i + ")", u.rows[t]), !0 !== s.editable || !0 !== r || o.hasClass("not-editable-cell")) 0 <= parseInt(u.p.iCol, 10) && 0 <= parseInt(u.p.iRow, 10) && (n("td:eq(" + u.p.iCol + ")", u.rows[u.p.iRow]).removeClass("edit-cell ui-state-highlight"), n(u.rows[u.p.iRow]).removeClass("selected-row ui-state-hover")), o.addClass("edit-cell ui-state-highlight"), n(u.rows[t]).addClass("selected-row ui-state-hover"), f = o.html().replace(/\&#160\;/ig, ""), n(u).triggerHandler("jqGridSelectCell", [u.rows[t].id, e, f, t, i]), n.isFunction(u.p.onSelectCell) && u.p.onSelectCell.call(u, u.rows[t].id, e, f, t, i);
else {
0 <= parseInt(u.p.iCol, 10) && 0 <= parseInt(u.p.iRow, 10) && (n("td:eq(" + u.p.iCol + ")", u.rows[u.p.iRow]).removeClass("edit-cell ui-state-highlight"), n(u.rows[u.p.iRow]).removeClass("selected-row ui-state-hover")), n(o).addClass("edit-cell ui-state-highlight"), n(u.rows[t]).addClass("selected-row ui-state-hover");
try {
f = n.unformat.call(u, o, {
rowId: u.rows[t].id,
colModel: s
}, i)
} catch (l) {
f = s.edittype && "textarea" == s.edittype ? n(o).text() : n(o).html()
}
u.p.autoencode && (f = n.jgrid.htmlDecode(f)), s.edittype || (s.edittype = "text"), u.p.savedRow.push({
id: t,
ic: i,
name: e,
v: f
}), ("&nbsp;" === f || "&#160;" === f || 1 === f.length && 160 === f.charCodeAt(0)) && (f = ""), n.isFunction(u.p.formatCell) && (h = u.p.formatCell.call(u, u.rows[t].id, e, f, t, i), void 0 !== h && (f = h)), h = n.extend({}, s.editoptions || {}, {
id: t + "_" + e,
name: e
}), c = n.jgrid.createEl.call(u, s.edittype, h, f, !0, n.extend({}, n.jgrid.ajaxOptions, u.p.ajaxSelectOptions || {})), n(u).triggerHandler("jqGridBeforeEditCell", [u.rows[t].id, e, f, t, i]), n.isFunction(u.p.beforeEditCell) && u.p.beforeEditCell.call(u, u.rows[t].id, e, f, t, i), n(o).html("").append(c).attr("tabindex", "0"), n.jgrid.bindEv(c, h, u), window.setTimeout(function () {
n(c).focus()
}, 0), n("input, select, textarea", o).bind("keydown", function (r) {
if (r.keyCode === 27 && (n("input.hasDatepicker", o).length > 0 ? n(".ui-datepicker").is(":hidden") ? n(u).jqGrid("restoreCell", t, i) : n("input.hasDatepicker", o).datepicker("hide") : n(u).jqGrid("restoreCell", t, i)), r.keyCode === 13) return n(u).jqGrid("saveCell", t, i), !1;
if (r.keyCode === 9) {
if (u.grid.hDiv.loading) return !1;
r.shiftKey ? n(u).jqGrid("prevCell", t, i) : n(u).jqGrid("nextCell", t, i)
}
r.stopPropagation()
}), n(u).triggerHandler("jqGridAfterEditCell", [u.rows[t].id, e, f, t, i]), n.isFunction(u.p.afterEditCell) && u.p.afterEditCell.call(u, u.rows[t].id, e, f, t, i)
}
u.p.iCol = i, u.p.iRow = t
}
}
})
},
saveCell: function (t, i) {
return this.each(function () {
var r = this,
e, h, v, l, p, c;
if (r.grid && !0 === r.p.cellEdit) {
if (e = 1 <= r.p.savedRow.length ? 0 : null, null !== e) {
var a = n("td:eq(" + i + ")", r.rows[t]),
u, o, s = r.p.colModel[i],
f = s.name,
h = n.jgrid.jqID(f);
switch (s.edittype) {
case "select":
s.editoptions.multiple ? (h = n("#" + t + "_" + h, r.rows[t]), v = [], (u = n(h).val()) ? u.join(",") : u = "", n("option:selected", h).each(function (t, i) {
v[t] = n(i).text()
}), o = v.join(",")) : (u = n("#" + t + "_" + h + " option:selected", r.rows[t]).val(), o = n("#" + t + "_" + h + " option:selected", r.rows[t]).text()), s.formatter && (o = u);
break;
case "checkbox":
l = ["Yes", "No"], s.editoptions && (l = s.editoptions.value.split(":")), o = u = n("#" + t + "_" + h, r.rows[t]).is(":checked") ? l[0] : l[1];
break;
case "password":
case "text":
case "textarea":
case "button":
o = u = n("#" + t + "_" + h, r.rows[t]).val();
break;
case "custom":
try {
if (s.editoptions && n.isFunction(s.editoptions.custom_value)) {
if (u = s.editoptions.custom_value.call(r, n(".customelement", a), "get"), void 0 === u) throw "e2";
o = u
} else throw "e1";
} catch (y) {
"e1" == y && n.jgrid.info_dialog(n.jgrid.errors.errcap, "function 'custom_value' " + n.jgrid.edit.msg.nodefined, n.jgrid.edit.bClose), "e2" == y ? n.jgrid.info_dialog(n.jgrid.errors.errcap, "function 'custom_value' " + n.jgrid.edit.msg.novalue, n.jgrid.edit.bClose) : n.jgrid.info_dialog(n.jgrid.errors.errcap, y.message, n.jgrid.edit.bClose)
}
}
if (o !== r.p.savedRow[e].v)
if ((e = n(r).triggerHandler("jqGridBeforeSaveCell", [r.rows[t].id, f, u, t, i])) && (o = u = e), n.isFunction(r.p.beforeSaveCell) && (e = r.p.beforeSaveCell.call(r, r.rows[t].id, f, u, t, i)) && (o = u = e), p = n.jgrid.checkValues(u, i, r), !0 === p[0]) {
if (e = n(r).triggerHandler("jqGridBeforeSubmitCell", [r.rows[t].id, f, u, t, i]) || {}, n.isFunction(r.p.beforeSubmitCell) && ((e = r.p.beforeSubmitCell.call(r, r.rows[t].id, f, u, t, i)) || (e = {})), 0 < n("input.hasDatepicker", a).length && n("input.hasDatepicker", a).datepicker("hide"), "remote" == r.p.cellsubmit)
if (r.p.cellurl) c = {}, r.p.autoencode && (u = n.jgrid.htmlEncode(u)), c[f] = u, l = r.p.prmNames, s = l.id, h = l.oper, c[s] = n.jgrid.stripPref(r.p.idPrefix, r.rows[t].id), c[h] = l.editoper, c = n.extend(e, c), n("#lui_" + n.jgrid.jqID(r.p.id)).show(), r.grid.hDiv.loading = !0, n.ajax(n.extend({
url: r.p.cellurl,
data: n.isFunction(r.p.serializeCellData) ? r.p.serializeCellData.call(r, c) : c,
type: "POST",
complete: function (e, s) {
if (n("#lui_" + r.p.id).hide(), r.grid.hDiv.loading = !1, s == "success") {
var h = n(r).triggerHandler("jqGridAfterSubmitCell", [r, e, c.id, f, u, t, i]) || [!0, ""];
h[0] === !0 && n.isFunction(r.p.afterSubmitCell) && (h = r.p.afterSubmitCell.call(r, e, c.id, f, u, t, i)), h[0] === !0 ? (n(a).empty(), n(r).jqGrid("setCell", r.rows[t].id, i, o, !1, !1, !0), n(a).addClass("dirty-cell"), n(r.rows[t]).addClass("edited"), n(r).triggerHandler("jqGridAfterSaveCell", [r.rows[t].id, f, u, t, i]), n.isFunction(r.p.afterSaveCell) && r.p.afterSaveCell.call(r, r.rows[t].id, f, u, t, i), r.p.savedRow.splice(0, 1)) : (n.jgrid.info_dialog(n.jgrid.errors.errcap, h[1], n.jgrid.edit.bClose), n(r).jqGrid("restoreCell", t, i))
}
},
error: function (u, f, e) {
n("#lui_" + n.jgrid.jqID(r.p.id)).hide(), r.grid.hDiv.loading = !1, n(r).triggerHandler("jqGridErrorCell", [u, f, e]), n.isFunction(r.p.errorCell) ? r.p.errorCell.call(r, u, f, e) : n.jgrid.info_dialog(n.jgrid.errors.errcap, u.status + " : " + u.statusText + "<br/>" + f, n.jgrid.edit.bClose), n(r).jqGrid("restoreCell", t, i)
}
}, n.jgrid.ajaxOptions, r.p.ajaxCellOptions || {}));
else try {
n.jgrid.info_dialog(n.jgrid.errors.errcap, n.jgrid.errors.nourl, n.jgrid.edit.bClose), n(r).jqGrid("restoreCell", t, i)
} catch (w) { }
"clientArray" == r.p.cellsubmit && (n(a).empty(), n(r).jqGrid("setCell", r.rows[t].id, i, o, !1, !1, !0), n(a).addClass("dirty-cell"), n(r.rows[t]).addClass("edited"), n(r).triggerHandler("jqGridAfterSaveCell", [r.rows[t].id, f, u, t, i]), n.isFunction(r.p.afterSaveCell) && r.p.afterSaveCell.call(r, r.rows[t].id, f, u, t, i), r.p.savedRow.splice(0, 1))
} else try {
window.setTimeout(function () {
n.jgrid.info_dialog(n.jgrid.errors.errcap, u + " " + p[1], n.jgrid.edit.bClose)
}, 100), n(r).jqGrid("restoreCell", t, i)
} catch (b) { } else n(r).jqGrid("restoreCell", t, i)
}
window.setTimeout(function () {
n("#" + n.jgrid.jqID(r.p.knv)).attr("tabindex", "-1").focus()
}, 0)
}
})
},
restoreCell: function (t, i) {
return this.each(function () {
var r = this,
u, f;
if (r.grid && !0 === r.p.cellEdit) {
if (u = 1 <= r.p.savedRow.length ? 0 : null, null !== u) {
if (f = n("td:eq(" + i + ")", r.rows[t]), n.isFunction(n.fn.datepicker)) try {
n("input.hasDatepicker", f).datepicker("hide")
} catch (e) { }
n(f).empty().attr("tabindex", "-1"), n(r).jqGrid("setCell", r.rows[t].id, i, r.p.savedRow[u].v, !1, !1, !0), n(r).triggerHandler("jqGridAfterRestoreCell", [r.rows[t].id, r.p.savedRow[u].v, t, i]), n.isFunction(r.p.afterRestoreCell) && r.p.afterRestoreCell.call(r, r.rows[t].id, r.p.savedRow[u].v, t, i), r.p.savedRow.splice(0, 1)
}
window.setTimeout(function () {
n("#" + r.p.knv).attr("tabindex", "-1").focus()
}, 0)
}
})
},
nextCell: function (t, i) {
return this.each(function () {
var u = !1,
r;
if (this.grid && !0 === this.p.cellEdit) {
for (r = i + 1; r < this.p.colModel.length; r++)
if (!0 === this.p.colModel[r].editable) {
u = r;
break
} !1 !== u ? n(this).jqGrid("editCell", t, u, !0) : 0 < this.p.savedRow.length && n(this).jqGrid("saveCell", t, i)
}
})
},
prevCell: function (t, i) {
return this.each(function () {
var u = !1,
r;
if (this.grid && !0 === this.p.cellEdit) {
for (r = i - 1; 0 <= r; r--)
if (!0 === this.p.colModel[r].editable) {
u = r;
break
} !1 !== u ? n(this).jqGrid("editCell", t, u, !0) : 0 < this.p.savedRow.length && n(this).jqGrid("saveCell", t, i)
}
})
},
GridNav: function () {
return this.each(function () {
function u(i, r, u) {
if ("v" == u.substr(0, 1)) {
var f = n(t.grid.bDiv)[0].clientHeight,
e = n(t.grid.bDiv)[0].scrollTop,
o = t.rows[i].offsetTop + t.rows[i].clientHeight,
s = t.rows[i].offsetTop;
"vd" == u && o >= f && (n(t.grid.bDiv)[0].scrollTop = n(t.grid.bDiv)[0].scrollTop + t.rows[i].clientHeight), "vu" == u && s < e && (n(t.grid.bDiv)[0].scrollTop = n(t.grid.bDiv)[0].scrollTop - t.rows[i].clientHeight)
}
"h" == u && (u = n(t.grid.bDiv)[0].clientWidth, f = n(t.grid.bDiv)[0].scrollLeft, e = t.rows[i].cells[r].offsetLeft, t.rows[i].cells[r].offsetLeft + t.rows[i].cells[r].clientWidth >= u + parseInt(f, 10) ? n(t.grid.bDiv)[0].scrollLeft = n(t.grid.bDiv)[0].scrollLeft + t.rows[i].cells[r].clientWidth : e < f && (n(t.grid.bDiv)[0].scrollLeft = n(t.grid.bDiv)[0].scrollLeft - t.rows[i].cells[r].clientWidth))
}
function f(n, i) {
var u, r;
if ("lft" == i)
for (u = n + 1, r = n; 0 <= r; r--)
if (!0 !== t.p.colModel[r].hidden) {
u = r;
break
}
if ("rgt" == i)
for (u = n - 1, r = n; r < t.p.colModel.length; r++)
if (!0 !== t.p.colModel[r].hidden) {
u = r;
break
}
return u
}
var t = this,
e, i, r;
t.grid && !0 === t.p.cellEdit && (t.p.knv = t.p.id + "_kn", e = n("<div style='position:fixed;top:-1000000px;width:1px;height:1px;' tabindex='0'><div tabindex='-1' style='width:1px;height:1px;' id='" + t.p.knv + "'><\/div><\/div>"), n(e).insertBefore(t.grid.cDiv), n("#" + t.p.knv).focus().keydown(function (e) {
r = e.keyCode, "rtl" == t.p.direction && (37 === r ? r = 39 : 39 === r && (r = 37));
switch (r) {
case 38:
0 < t.p.iRow - 1 && (u(t.p.iRow - 1, t.p.iCol, "vu"), n(t).jqGrid("editCell", t.p.iRow - 1, t.p.iCol, !1));
break;
case 40:
t.p.iRow + 1 <= t.rows.length - 1 && (u(t.p.iRow + 1, t.p.iCol, "vd"), n(t).jqGrid("editCell", t.p.iRow + 1, t.p.iCol, !1));
break;
case 37:
0 <= t.p.iCol - 1 && (i = f(t.p.iCol - 1, "lft"), u(t.p.iRow, i, "h"), n(t).jqGrid("editCell", t.p.iRow, i, !1));
break;
case 39:
t.p.iCol + 1 <= t.p.colModel.length - 1 && (i = f(t.p.iCol + 1, "rgt"), u(t.p.iRow, i, "h"), n(t).jqGrid("editCell", t.p.iRow, i, !1));
break;
case 13:
0 <= parseInt(t.p.iCol, 10) && 0 <= parseInt(t.p.iRow, 10) && n(t).jqGrid("editCell", t.p.iRow, t.p.iCol, !0);
break;
default:
return !0
}
return !1
}))
})
},
getChangedCells: function (t) {
var i = [];
return t || (t = "all"), this.each(function () {
var r = this,
u;
r.grid && !0 === r.p.cellEdit && n(r.rows).each(function (f) {
var e = {};
n(this).hasClass("edited") && (n("td", this).each(function (i) {
if (u = r.p.colModel[i].name, "cb" !== u && "subgrid" !== u)
if ("dirty" == t) {
if (n(this).hasClass("dirty-cell")) try {
e[u] = n.unformat.call(r, this, {
rowId: r.rows[f].id,
colModel: r.p.colModel[i]
}, i)
} catch (o) {
e[u] = n.jgrid.htmlDecode(n(this).html())
}
} else try {
e[u] = n.unformat.call(r, this, {
rowId: r.rows[f].id,
colModel: r.p.colModel[i]
}, i)
} catch (s) {
e[u] = n.jgrid.htmlDecode(n(this).html())
}
}), e.id = this.id, i.push(e))
})
}), i
}
})
}(jQuery),
function (n) {
n.fn.jqm = function (r) {
var f = {
overlay: 50,
closeoverlay: !0,
overlayClass: "jqmOverlay",
closeClass: "jqmClose",
trigger: ".jqModal",
ajax: t,
ajaxText: "",
target: t,
modal: t,
toTop: t,
onShow: t,
onHide: t,
onLoad: t
};
return this.each(function () {
if (this._jqm) return i[this._jqm].c = n.extend({}, i[this._jqm].c, r);
u++, this._jqm = u, i[u] = {
c: n.extend(f, n.jqm.params, r),
a: t,
w: n(this).addClass("jqmID" + u),
s: u
}, f.trigger && n(this).jqmAddTrigger(f.trigger)
})
}, n.fn.jqmAddClose = function (n) {
return s(this, n, "jqmHide")
}, n.fn.jqmAddTrigger = function (n) {
return s(this, n, "jqmShow")
}, n.fn.jqmShow = function (t) {
return this.each(function () {
n.jqm.open(this._jqm, t)
})
}, n.fn.jqmHide = function (t) {
return this.each(function () {
n.jqm.close(this._jqm, t)
})
}, n.jqm = {
hash: {},
open: function (u, e) {
var s = i[u],
h = s.c,
a = "." + h.closeClass,
c = parseInt(s.w.css("z-index")),
c = 0 < c ? c : 3e3,
l = n("<div><\/div>").css({
height: "100%",
width: "100%",
position: "fixed",
left: 0,
top: 0,
"z-index": c - 1,
opacity: h.overlay / 100
});
return s.a ? t : (s.t = e, s.a = !0, s.w.css("z-index", c), h.modal ? (r[0] || setTimeout(function () {
o("bind")
}, 1), r.push(u)) : 0 < h.overlay ? h.closeoverlay && s.w.jqmAddClose(l) : l = t, s.o = l ? l.addClass(h.overlayClass).prependTo("body") : t, h.ajax ? (c = h.target || s.w, l = h.ajax, c = "string" == typeof c ? n(c, s.w) : n(c), l = "@" == l.substr(0, 1) ? n(e).attr(l.substring(1)) : l, c.html(h.ajaxText).load(l, function () {
h.onLoad && h.onLoad.call(this, s), a && s.w.jqmAddClose(n(a, s.w)), f(s)
})) : a && s.w.jqmAddClose(n(a, s.w)), h.toTop && s.o && s.w.before('<span id="jqmP' + s.w[0]._jqm + '"><\/span>').insertAfter(s.o), h.onShow ? h.onShow(s) : s.w.show(), f(s), t)
},
close: function (u) {
if (u = i[u], !u.a) return t;
if (u.a = t, r[0] && (r.pop(), r[0] || o("unbind")), u.c.toTop && u.o && n("#jqmP" + u.w[0]._jqm).after(u.w).remove(), u.c.onHide) u.c.onHide(u);
else u.w.hide(), u.o && u.o.remove();
return t
},
params: {}
};
var u = 0,
i = n.jqm.hash,
r = [],
t = !1,
f = function (t) {
try {
n(":input:visible", t.w)[0].focus()
} catch (i) { }
},
o = function (t) {
n(document)[t]("keypress", e)[t]("keydown", e)[t]("mousedown", e)
},
e = function (t) {
var u = i[r[r.length - 1]];
return (t = !n(t.target).parents(".jqmID" + u.s)[0]) && f(u), !t
},
s = function (r, u, f) {
return r.each(function () {
var r = this._jqm;
n(u).each(function () {
this[f] || (this[f] = [], n(this).click(function () {
var n, r;
for (n in {
jqmShow: 1,
jqmHide: 1
})
for (r in this[n]) i[this[n][r]] && i[this[n][r]].w[n](this);
return t
})), this[f].push(r)
})
})
}
}(jQuery),
function (n) {
n.fn.jqDrag = function (n) {
return s(this, n, "d")
}, n.fn.jqResize = function (n, t) {
return s(this, n, "r", t)
}, n.jqDnR = {
dnr: {},
e: 0,
drag: function (n) {
return "d" == t.k ? i.css({
left: t.X + n.pageX - t.pX,
top: t.Y + n.pageY - t.pY
}) : (i.css({
width: Math.max(n.pageX - t.pX + t.W, 0),
height: Math.max(n.pageY - t.pY + t.H, 0)
}), u && r.css({
width: Math.max(n.pageX - u.pX + u.W, 0),
height: Math.max(n.pageY - u.pY + u.H, 0)
})), !1
},
stop: function () {
n(document).unbind("mousemove", f.drag).unbind("mouseup", f.stop)
}
};
var f = n.jqDnR,
t = f.dnr,
i = f.e,
r, u, s = function (f, s, h, c) {
return f.each(function () {
s = s ? n(s, f) : f, s.bind("mousedown", {
e: f,
k: h
}, function (f) {
var h = f.data,
s = {};
if (i = h.e, r = c ? n(c) : !1, "relative" != i.css("position")) try {
i.position(s)
} catch (l) { }
if (t = {
X: s.left || e("left") || 0,
Y: s.top || e("top") || 0,
W: e("width") || i[0].scrollWidth || 0,
H: e("height") || i[0].scrollHeight || 0,
pX: f.pageX,
pY: f.pageY,
k: h.k
}, u = r && "d" != h.k ? {
X: s.left || o("left") || 0,
Y: s.top || o("top") || 0,
W: r[0].offsetWidth || o("width") || 0,
H: r[0].offsetHeight || o("height") || 0,
pX: f.pageX,
pY: f.pageY,
k: h.k
} : !1, n("input.hasDatepicker", i[0])[0]) try {
n("input.hasDatepicker", i[0]).datepicker("hide")
} catch (a) { }
return n(document).mousemove(n.jqDnR.drag).mouseup(n.jqDnR.stop), !1
})
})
},
e = function (n) {
return parseInt(i.css(n), 10) || !1
},
o = function (n) {
return parseInt(r.css(n), 10) || !1
}
}(jQuery),
function (n) {
n.jgrid.extend({
setSubGrid: function () {
return this.each(function () {
var t, i;
if (this.p.subGridOptions = n.extend({
plusicon: "ui-icon-plus",
minusicon: "ui-icon-minus",
openicon: "ui-icon-carat-1-sw",
expandOnLoad: !1,
delayOnLoad: 50,
selectOnExpand: !1,
reloadOnExpand: !0
}, this.p.subGridOptions || {}), this.p.colNames.unshift(""), this.p.colModel.unshift({
name: "subgrid",
width: n.jgrid.cell_width ? this.p.subGridWidth + this.p.cellLayout : this.p.subGridWidth,
sortable: !1,
resizable: !1,
hidedlg: !0,
search: !1,
fixed: !0
}), t = this.p.subGridModel, t[0])
for (t[0].align = n.extend([], t[0].align || []), i = 0; i < t[0].name.length; i++) t[0].align[i] = t[0].align[i] || "left"
})
},
addSubGridCell: function (n, t) {
var i = "",
r, u;
return this.each(function () {
i = this.formatCol(n, t), u = this.p.id, r = this.p.subGridOptions.plusicon
}), '<td role="gridcell" aria-describedby="' + u + '_subgrid" class="ui-sgcollapsed sgcollapsed" ' + i + "><a href='javascript:void(0);'><span class='ui-icon " + r + "'><\/span><\/a><\/td>"
},
addSubGrid: function (t, i) {
return this.each(function () {
var r = this,
c, s;
if (r.grid) {
var h = function (t, i, u) {
i = n("<td align='" + r.p.subGridModel[0].align[u] + "'><\/td>").html(i), n(t).append(i)
},
l = function (t, i) {
for (var f, o, s = n("<table cellspacing='0' cellpadding='0' border='0'><tbody><\/tbody><\/table>"), e = n("<tr><\/tr>"), u = 0; u < r.p.subGridModel[0].name.length; u++) f = n("<th class='ui-state-default ui-th-subgrid ui-th-column ui-th-" + r.p.direction + "'><\/th>"), n(f).html(r.p.subGridModel[0].name[u]), n(f).width(r.p.subGridModel[0].width[u]), n(e).append(f);
return n(s).append(e), t && (o = r.p.xmlReader.subgrid, n(o.root + " " + o.row, t).each(function () {
if (e = n("<tr class='ui-widget-content ui-subtblcell'><\/tr>"), !0 === o.repeatitems) n(o.cell, this).each(function (t) {
h(e, n(this).text() || "&#160;", t)
});
else {
var t = r.p.subGridModel[0].mapping || r.p.subGridModel[0].name;
if (t)
for (u = 0; u < t.length; u++) h(e, n(t[u], this).text() || "&#160;", u)
}
n(s).append(e)
})), f = n("table:first", r.grid.bDiv).attr("id") + "_", n("#" + n.jgrid.jqID(f + i)).append(s), r.grid.hDiv.loading = !1, n("#load_" + n.jgrid.jqID(r.p.id)).hide(), !1
},
a = function (t, i) {
for (var e, o, c, f, a = n("<table cellspacing='0' cellpadding='0' border='0'><tbody><\/tbody><\/table>"), s = n("<tr><\/tr>"), l, u = 0; u < r.p.subGridModel[0].name.length; u++) e = n("<th class='ui-state-default ui-th-subgrid ui-th-column ui-th-" + r.p.direction + "'><\/th>"), n(e).html(r.p.subGridModel[0].name[u]), n(e).width(r.p.subGridModel[0].width[u]), n(s).append(e);
if (n(a).append(s), t && (c = r.p.jsonReader.subgrid, e = n.jgrid.getAccessor(t, c.root), void 0 !== e))
for (u = 0; u < e.length; u++) {
if (o = e[u], s = n("<tr class='ui-widget-content ui-subtblcell'><\/tr>"), !0 === c.repeatitems)
for (c.cell && (o = o[c.cell]), f = 0; f < o.length; f++) h(s, o[f] || "&#160;", f);
else if (l = r.p.subGridModel[0].mapping || r.p.subGridModel[0].name, l.length)
for (f = 0; f < l.length; f++) h(s, o[l[f]] || "&#160;", f);
n(a).append(s)
}
return u = n("table:first", r.grid.bDiv).attr("id") + "_", n("#" + n.jgrid.jqID(u + i)).append(a), r.grid.hDiv.loading = !1, n("#load_" + n.jgrid.jqID(r.p.id)).hide(), !1
},
p = function (t) {
var f, i, u, e;
if (f = n(t).attr("id"), i = {
nd_: (new Date).getTime()
}, i[r.p.prmNames.subgridid] = f, !r.p.subGridModel[0]) return !1;
if (r.p.subGridModel[0].params)
for (e = 0; e < r.p.subGridModel[0].params.length; e++)
for (u = 0; u < r.p.colModel.length; u++) r.p.colModel[u].name === r.p.subGridModel[0].params[e] && (i[r.p.colModel[u].name] = n("td:eq(" + u + ")", t).text().replace(/\&#160\;/ig, ""));
if (!r.grid.hDiv.loading) switch (r.grid.hDiv.loading = !0, n("#load_" + n.jgrid.jqID(r.p.id)).show(), r.p.subgridtype || (r.p.subgridtype = r.p.datatype), n.isFunction(r.p.subgridtype) ? r.p.subgridtype.call(r, i) : r.p.subgridtype = r.p.subgridtype.toLowerCase(), r.p.subgridtype) {
case "xml":
case "json":
n.ajax(n.extend({
type: r.p.mtype,
url: r.p.subGridUrl,
dataType: r.p.subgridtype,
data: n.isFunction(r.p.serializeSubGridData) ? r.p.serializeSubGridData.call(r, i) : i,
complete: function (t) {
r.p.subgridtype === "xml" ? l(t.responseXML, f) : a(n.jgrid.parse(t.responseText), f)
}
}, n.jgrid.ajaxOptions, r.p.ajaxSubgridOptions || {}))
}
return !1
},
u, e, v, y = 0,
f, o;
for (n.each(r.p.colModel, function () {
(!0 === this.hidden || "rn" === this.name || "cb" === this.name) && y++
}), c = r.rows.length, s = 1, void 0 !== i && 0 < i && (s = i, c = i + 1) ; s < c;) n(r.rows[s]).hasClass("jqgrow") && n(r.rows[s].cells[t]).bind("click", function () {
var i = n(this).parent("tr")[0];
if (o = i.nextSibling, n(this).hasClass("sgcollapsed")) {
if (e = r.p.id, u = i.id, r.p.subGridOptions.reloadOnExpand !== !0 && (r.p.subGridOptions.reloadOnExpand !== !1 || n(o).hasClass("ui-subgrid"))) n(o).show();
else {
if (v = t >= 1 ? "<td colspan='" + t + "'>&#160;<\/td>" : "", f = n(r).triggerHandler("jqGridSubGridBeforeExpand", [e + "_" + u, u]), (f = f === !1 || f === "stop" ? !1 : !0) && n.isFunction(r.p.subGridBeforeExpand) && (f = r.p.subGridBeforeExpand.call(r, e + "_" + u, u)), f === !1) return !1;
n(i).after("<tr role='row' class='ui-subgrid'>" + v + "<td class='ui-widget-content subgrid-cell'><span class='ui-icon " + r.p.subGridOptions.openicon + "'><\/span><\/td><td colspan='" + parseInt(r.p.colNames.length - 1 - y, 10) + "' class='ui-widget-content subgrid-data'><div id=" + e + "_" + u + " class='tablediv'><\/div><\/td><\/tr>"), n(r).triggerHandler("jqGridSubGridRowExpanded", [e + "_" + u, u]), n.isFunction(r.p.subGridRowExpanded) ? r.p.subGridRowExpanded.call(r, e + "_" + u, u) : p(i)
}
n(this).html("<a href='javascript:void(0);'><span class='ui-icon " + r.p.subGridOptions.minusicon + "'><\/span><\/a>").removeClass("sgcollapsed").addClass("sgexpanded"), r.p.subGridOptions.selectOnExpand && n(r).jqGrid("setSelection", u)
} else if (n(this).hasClass("sgexpanded")) {
if (f = n(r).triggerHandler("jqGridSubGridRowColapsed", [e + "_" + u, u]), (f = f === !1 || f === "stop" ? !1 : !0) && n.isFunction(r.p.subGridRowColapsed) && (u = i.id, f = r.p.subGridRowColapsed.call(r, e + "_" + u, u)), f === !1) return !1;
r.p.subGridOptions.reloadOnExpand === !0 ? n(o).remove(".ui-subgrid") : n(o).hasClass("ui-subgrid") && n(o).hide(), n(this).html("<a href='javascript:void(0);'><span class='ui-icon " + r.p.subGridOptions.plusicon + "'><\/span><\/a>").removeClass("sgexpanded").addClass("sgcollapsed")
}
return !1
}), s++;
!0 === r.p.subGridOptions.expandOnLoad && n(r.rows).filter(".jqgrow").each(function (t, i) {
n(i.cells[0]).click()
}), r.subGridXml = function (n, t) {
l(n, t)
}, r.subGridJson = function (n, t) {
a(n, t)
}
}
})
},
expandSubGridRow: function (t) {
return this.each(function () {
if ((this.grid || t) && !0 === this.p.subGrid) {
var i = n(this).jqGrid("getInd", t, !0);
i && (i = n("td.sgcollapsed", i)[0]) && n(i).trigger("click")
}
})
},
collapseSubGridRow: function (t) {
return this.each(function () {
if ((this.grid || t) && !0 === this.p.subGrid) {
var i = n(this).jqGrid("getInd", t, !0);
i && (i = n("td.sgexpanded", i)[0]) && n(i).trigger("click")
}
})
},
toggleSubGridRow: function (t) {
return this.each(function () {
var r, i;
(this.grid || t) && !0 === this.p.subGrid && (r = n(this).jqGrid("getInd", t, !0), r && (i = n("td.sgcollapsed", r)[0], i ? n(i).trigger("click") : (i = n("td.sgexpanded", r)[0]) && n(i).trigger("click")))
})
}
})
}(jQuery),
function (n) {
n.extend(n.jgrid, {
template: function (t) {
var r = n.makeArray(arguments).slice(1),
i, u = r.length;
return null == t && (t = ""), t.replace(/\{([\w\-]+)(?:\:([\w\.]*)(?:\((.*?)?\))?)?\}/g, function (t, f) {
if (!isNaN(parseInt(f, 10))) return r[parseInt(f, 10)];
for (i = 0; i < u; i++)
if (n.isArray(r[i]))
for (var e = r[i], o = e.length; o--;)
if (f === e[o].nm) return e[o].v
})
}
}), n.jgrid.extend({
groupingSetup: function () {
return this.each(function () {
var i, u, r = this.p.colModel,
t = this.p.groupingView;
if (null !== t && ("object" == typeof t || n.isFunction(t)))
if (t.groupField.length) {
for (void 0 === t.visibiltyOnNextGrouping && (t.visibiltyOnNextGrouping = []), t.lastvalues = [], t.groups = [], t.counters = [], i = 0; i < t.groupField.length; i++) t.groupOrder[i] || (t.groupOrder[i] = "asc"), t.groupText[i] || (t.groupText[i] = "{0}"), "boolean" != typeof t.groupColumnShow[i] && (t.groupColumnShow[i] = !0), "boolean" != typeof t.groupSummary[i] && (t.groupSummary[i] = !1), !0 === t.groupColumnShow[i] ? (t.visibiltyOnNextGrouping[i] = !0, n(this).jqGrid("showCol", t.groupField[i])) : (t.visibiltyOnNextGrouping[i] = n("#" + n.jgrid.jqID(this.p.id + "_" + t.groupField[i])).is(":visible"), n(this).jqGrid("hideCol", t.groupField[i]));
for (t.summary = [], i = 0, u = r.length; i < u; i++) r[i].summaryType && t.summary.push({
nm: r[i].name,
st: r[i].summaryType,
v: "",
sr: r[i].summaryRound,
srt: r[i].summaryRoundType || "round"
})
} else this.p.grouping = !1;
else this.p.grouping = !1
})
},
groupingPrepare: function (t, i, r, u) {
return this.each(function () {
for (var f = this.p.groupingView, c = this, a = f.groupField.length, h, o, s, l = 0, e = 0; e < a; e++) h = f.groupField[e], s = f.displayField[e], o = r[h], s = null == s ? null : r[s], null == s && (s = o), void 0 !== o && (0 === u ? (f.groups.push({
idx: e,
dataIndex: h,
value: o,
displayValue: s,
startRow: u,
cnt: 1,
summary: []
}), f.lastvalues[e] = o, f.counters[e] = {
cnt: 1,
pos: f.groups.length - 1,
summary: n.extend(!0, [], f.summary)
}) : "object" != typeof o && f.lastvalues[e] !== o ? (f.groups.push({
idx: e,
dataIndex: h,
value: o,
displayValue: s,
startRow: u,
cnt: 1,
summary: []
}), f.lastvalues[e] = o, l = 1, f.counters[e] = {
cnt: 1,
pos: f.groups.length - 1,
summary: n.extend(!0, [], f.summary)
}) : 1 === l ? (f.groups.push({
idx: e,
dataIndex: h,
value: o,
displayValue: s,
startRow: u,
cnt: 1,
summary: []
}), f.lastvalues[e] = o, f.counters[e] = {
cnt: 1,
pos: f.groups.length - 1,
summary: n.extend(!0, [], f.summary)
}) : (f.counters[e].cnt += 1, f.groups[f.counters[e].pos].cnt = f.counters[e].cnt), n.each(f.counters[e].summary, function () {
this.v = n.isFunction(this.st) ? this.st.call(c, this.v, this.nm, r) : n(c).jqGrid("groupingCalculations.handler", this.st, this.v, this.nm, this.sr, this.srt, r)
}), f.groups[f.counters[e].pos].summary = f.counters[e].summary);
i.push(t)
}), i
},
groupingToggle: function (t) {
return this.each(function () {
var u = this.p.groupingView,
r = t.split("_"),
f = parseInt(r[r.length - 2], 10);
r.splice(r.length - 2, 2);
var r = r.join("_"),
e = u.minusicon,
o = u.plusicon,
i = n("#" + n.jgrid.jqID(t)),
i = i.length ? i[0].nextSibling : null,
s = n("#" + n.jgrid.jqID(t) + " span.tree-wrap-" + this.p.direction),
h = !1;
if (s.hasClass(e)) {
if (u.showSummaryOnHide) {
if (i)
for (; i && !(n(i).hasClass("jqfoot") && parseInt(n(i).attr("jqfootlevel"), 10) <= f) ;) n(i).hide(), i = i.nextSibling
} else if (i)
for (; i && !n(i).hasClass(r + "_" + ("" + f)) && !n(i).hasClass(r + "_" + ("" + (f - 1))) ;) n(i).hide(), i = i.nextSibling;
s.removeClass(e).addClass(o), h = !0
} else {
if (i)
for (; i && !n(i).hasClass(r + "_" + ("" + f)) && !n(i).hasClass(r + "_" + ("" + (f - 1))) ;) n(i).show(), (u = n(i).find("span.tree-wrap-" + this.p.direction)) && n(u).hasClass(o) && n(u).removeClass(o).addClass(e), i = i.nextSibling;
s.removeClass(o).addClass(e)
}
n(this).triggerHandler("jqGridGroupingClickGroup", [t, h]), n.isFunction(this.p.onClickGroup) && this.p.onClickGroup.call(this, t, h)
}), !1
},
groupingRender: function (t, i) {
return this.each(function () {
function p(n, t, i) {
var r = !1,
u;
if (0 === t) r = i[n];
else if (u = i[n].idx, 0 === u) r = i[n];
else
for (; 0 <= n; n--)
if (i[n].idx === u - t) {
r = i[n];
break
} return r
}
var u = this,
r = u.p.groupingView,
f = "",
a = "",
o, s, h = r.groupCollapse ? r.plusicon : r.minusicon,
c, v = [],
y = r.groupField.length,
h = h + (" tree-wrap-" + u.p.direction),
e, l;
n.each(u.p.colModel, function (n, t) {
for (var i = 0; i < y; i++)
if (r.groupField[i] === t.name) {
v[i] = n;
break
}
}), e = 0, l = n.makeArray(r.groupSummary), l.reverse(), n.each(r.groups, function (w, b) {
var k, g, d, et, nt, tt, it, rt, ut, ft;
e++, s = u.p.id + "ghead_" + b.idx, o = s + "_" + w, a = "<span style='cursor:pointer;' class='ui-icon " + h + "' onclick=\"jQuery('#" + n.jgrid.jqID(u.p.id) + "').jqGrid('groupingToggle','" + o + "');return false;\"><\/span>";
try {
c = u.formatter(o, b.displayValue, v[b.idx], b.value)
} catch (ot) {
c = b.displayValue
}
if (f += '<tr id="' + o + '" role="row" class= "ui-widget-content jqgroup ui-row-' + u.p.direction + " " + s + '"><td style="padding-left:' + 12 * b.idx + 'px;" colspan="' + i + '">' + a + n.jgrid.template(r.groupText[b.idx], c, b.cnt, b.summary) + "<\/td><\/tr>", y - 1 === b.idx) {
for (k = r.groups[w + 1], et = void 0 !== k ? r.groups[w + 1].startRow : t.length, d = b.startRow; d < et; d++) f += t[d].join("");
if (void 0 !== k) {
for (nt = 0; nt < r.groupField.length && k.dataIndex !== r.groupField[nt]; nt++);
e = r.groupField.length - nt
}
for (k = 0; k < e; k++)
if (l[k]) {
for (d = "", r.groupCollapse && !r.showSummaryOnHide && (d = ' style="display:none;"'), f += "<tr" + d + ' jqfootlevel="' + (b.idx - k) + '" role="row" class="ui-widget-content jqfoot ui-row-' + u.p.direction + '">', d = p(w, k, r.groups), tt = u.p.colModel, rt = d.cnt, g = 0; g < i; g++) ut = "<td " + u.formatCol(g, 1, "") + ">&#160;<\/td>", ft = "{0}", n.each(d.summary, function () {
if (this.nm === tt[g].name) {
tt[g].summaryTpl && (ft = tt[g].summaryTpl), "string" == typeof this.st && "avg" === this.st.toLowerCase() && this.v && 0 < rt && (this.v /= rt);
try {
it = u.formatter("", this.v, g, this)
} catch (t) {
it = this.v
}
return ut = "<td " + u.formatCol(g, 1, "") + ">" + n.jgrid.format(ft, it) + "<\/td>", !1
}
}), f += ut;
f += "<\/tr>"
}
e = nt
}
}), n("#" + n.jgrid.jqID(u.p.id) + " tbody:first").append(f), f = null
})
},
groupingGroupBy: function (t, i) {
return this.each(function () {
var u, r;
for ("string" == typeof t && (t = [t]), u = this.p.groupingView, this.p.grouping = !0, void 0 === u.visibiltyOnNextGrouping && (u.visibiltyOnNextGrouping = []), r = 0; r < u.groupField.length; r++) !u.groupColumnShow[r] && u.visibiltyOnNextGrouping[r] && n(this).jqGrid("showCol", u.groupField[r]);
for (r = 0; r < t.length; r++) u.visibiltyOnNextGrouping[r] = n("#" + n.jgrid.jqID(this.p.id) + "_" + n.jgrid.jqID(t[r])).is(":visible");
this.p.groupingView = n.extend(this.p.groupingView, i || {}), u.groupField = t, n(this).trigger("reloadGrid")
})
},
groupingRemove: function (t) {
return this.each(function () {
if (void 0 === t && (t = !0), this.p.grouping = !1, !0 === t) {
for (var r = this.p.groupingView, i = 0; i < r.groupField.length; i++) !r.groupColumnShow[i] && r.visibiltyOnNextGrouping[i] && n(this).jqGrid("showCol", r.groupField);
n("tr.jqgroup, tr.jqfoot", "#" + n.jgrid.jqID(this.p.id) + " tbody:first").remove(), n("tr.jqgrow:hidden", "#" + n.jgrid.jqID(this.p.id) + " tbody:first").show()
} else n(this).trigger("reloadGrid")
})
},
groupingCalculations: {
handler: function (n, t, i, r, u, f) {
var e = {
sum: function () {
return parseFloat(t || 0) + parseFloat(f[i] || 0)
},
min: function () {
return "" === t ? parseFloat(f[i] || 0) : Math.min(parseFloat(t), parseFloat(f[i] || 0))
},
max: function () {
return "" === t ? parseFloat(f[i] || 0) : Math.max(parseFloat(t), parseFloat(f[i] || 0))
},
count: function () {
return "" === t && (t = 0), f.hasOwnProperty(i) ? t + 1 : 0
},
avg: function () {
return e.sum()
}
};
if (!e[n]) throw "jqGrid Grouping No such method: " + n;
return n = e[n](), null != r && ("fixed" == u ? n = n.toFixed(r) : (r = Math.pow(10, r), n = Math.round(n * r) / r)), n
}
}
})
}(jQuery),
function (n) {
n.jgrid.extend({
setTreeNode: function (t, i) {
return this.each(function () {
var r = this;
if (r.grid && r.p.treeGrid)
for (var l = r.p.expColInd, o = r.p.treeReader.expanded_field, f = r.p.treeReader.leaf_field, v = r.p.treeReader.level_field, a = r.p.treeReader.icon_field, c = r.p.treeReader.loaded, s, h, e, u; t < i;) u = r.p.data[r.p._index[r.rows[t].id]], "nested" == r.p.treeGridModel && !u[f] && (s = parseInt(u[r.p.treeReader.left_field], 10), h = parseInt(u[r.p.treeReader.right_field], 10), u[f] = h === s + 1 ? "true" : "false", r.rows[t].cells[r.p._treeleafpos].innerHTML = u[f]), s = parseInt(u[v], 10), 0 === r.p.tree_root_level ? (e = s + 1, h = s) : (e = s, h = s - 1), e = "<div class='tree-wrap tree-wrap-" + r.p.direction + "' style='width:" + 18 * e + "px;'>", e += "<div style='" + ("rtl" == r.p.direction ? "right:" : "left:") + 18 * h + "px;' class='ui-icon ", void 0 !== u[c] && (u[c] = "true" == u[c] || !0 === u[c] ? !0 : !1), "true" == u[f] || !0 === u[f] ? (e += (void 0 !== u[a] && "" !== u[a] ? u[a] : r.p.treeIcons.leaf) + " tree-leaf treeclick", u[f] = !0, h = "leaf") : (u[f] = !1, h = ""), u[o] = ("true" == u[o] || !0 === u[o] ? !0 : !1) && (u[c] || void 0 === u[c]), e = !1 === u[o] ? e + (!0 === u[f] ? "'" : r.p.treeIcons.plus + " tree-plus treeclick'") : e + (!0 === u[f] ? "'" : r.p.treeIcons.minus + " tree-minus treeclick'"), e += "><\/div><\/div>", n(r.rows[t].cells[l]).wrapInner("<span class='cell-wrapper" + h + "'><\/span>").prepend(e), s !== parseInt(r.p.tree_root_level, 10) && ((u = (u = n(r).jqGrid("getNodeParent", u)) && u.hasOwnProperty(o) ? u[o] : !0) || n(r.rows[t]).css("display", "none")), n(r.rows[t].cells[l]).find("div.treeclick").bind("click", function (t) {
return t = n(t.target || t.srcElement, r.rows).closest("tr.jqgrow")[0].id, t = r.p._index[t], r.p.data[t][f] || (r.p.data[t][o] ? (n(r).jqGrid("collapseRow", r.p.data[t]), n(r).jqGrid("collapseNode", r.p.data[t])) : (n(r).jqGrid("expandRow", r.p.data[t]), n(r).jqGrid("expandNode", r.p.data[t]))), !1
}), !0 === r.p.ExpandColClick && n(r.rows[t].cells[l]).find("span.cell-wrapper").css("cursor", "pointer").bind("click", function (t) {
var t = n(t.target || t.srcElement, r.rows).closest("tr.jqgrow")[0].id,
i = r.p._index[t];
return r.p.data[i][f] || (r.p.data[i][o] ? (n(r).jqGrid("collapseRow", r.p.data[i]), n(r).jqGrid("collapseNode", r.p.data[i])) : (n(r).jqGrid("expandRow", r.p.data[i]), n(r).jqGrid("expandNode", r.p.data[i]))), n(r).jqGrid("setSelection", t), !1
}), t++
})
},
setTreeGrid: function () {
return this.each(function () {
var t = this,
i = 0,
e = !1,
r, u, f, o = [];
if (t.p.treeGrid) {
t.p.treedatatype || n.extend(t.p, {
treedatatype: t.p.datatype
}), t.p.subGrid = !1, t.p.altRows = !1, t.p.pgbuttons = !1, t.p.pginput = !1, t.p.gridview = !0, null === t.p.rowTotal && (t.p.rowNum = 1e4), t.p.multiselect = !1, t.p.rowList = [], t.p.expColInd = 0, t.p.treeIcons = n.extend({
plus: "ui-icon-triangle-1-" + ("rtl" == t.p.direction ? "w" : "e"),
minus: "ui-icon-triangle-1-s",
leaf: "ui-icon-radio-off"
}, t.p.treeIcons || {}), "nested" == t.p.treeGridModel ? t.p.treeReader = n.extend({
level_field: "level",
left_field: "lft",
right_field: "rgt",
leaf_field: "isLeaf",
expanded_field: "expanded",
loaded: "loaded",
icon_field: "icon"
}, t.p.treeReader) : "adjacency" == t.p.treeGridModel && (t.p.treeReader = n.extend({
level_field: "level",
parent_id_field: "parent",
leaf_field: "isLeaf",
expanded_field: "expanded",
loaded: "loaded",
icon_field: "icon"
}, t.p.treeReader));
for (u in t.p.colModel)
if (t.p.colModel.hasOwnProperty(u))
for (f in r = t.p.colModel[u].name, r == t.p.ExpandColumn && !e && (e = !0, t.p.expColInd = i), i++, t.p.treeReader) t.p.treeReader.hasOwnProperty(f) && t.p.treeReader[f] == r && o.push(r);
n.each(t.p.treeReader, function (r, u) {
u && n.inArray(u, o) === -1 && (r === "leaf_field" && (t.p._treeleafpos = i), i++, t.p.colNames.push(u), t.p.colModel.push({
name: u,
width: 1,
hidden: !0,
sortable: !1,
resizable: !1,
hidedlg: !0,
editable: !0,
search: !1
}))
})
}
})
},
expandRow: function (t) {
this.each(function () {
var i = this;
if (i.grid && i.p.treeGrid) {
var r = n(i).jqGrid("getNodeChildren", t),
u = i.p.treeReader.expanded_field,
f = i.rows;
n(r).each(function () {
var t = n.jgrid.getAccessor(this, i.p.localReader.id);
n(f.namedItem(t)).css("display", ""), this[u] && n(i).jqGrid("expandRow", this)
})
}
})
},
collapseRow: function (t) {
this.each(function () {
var i = this;
if (i.grid && i.p.treeGrid) {
var r = n(i).jqGrid("getNodeChildren", t),
u = i.p.treeReader.expanded_field,
f = i.rows;
n(r).each(function () {
var t = n.jgrid.getAccessor(this, i.p.localReader.id);
n(f.namedItem(t)).css("display", "none"), this[u] && n(i).jqGrid("collapseRow", this)
})
}
})
},
getRootNodes: function () {
var t = [];
return this.each(function () {
var i = this,
u, r;
if (i.grid && i.p.treeGrid) switch (i.p.treeGridModel) {
case "nested":
u = i.p.treeReader.level_field, n(i.p.data).each(function () {
parseInt(this[u], 10) === parseInt(i.p.tree_root_level, 10) && t.push(this)
});
break;
case "adjacency":
r = i.p.treeReader.parent_id_field, n(i.p.data).each(function () {
(null === this[r] || "null" == ("" + this[r]).toLowerCase()) && t.push(this)
})
}
}), t
},
getNodeDepth: function (t) {
var i = null;
return this.each(function () {
if (this.grid && this.p.treeGrid) switch (this.p.treeGridModel) {
case "nested":
i = parseInt(t[this.p.treeReader.level_field], 10) - parseInt(this.p.tree_root_level, 10);
break;
case "adjacency":
i = n(this).jqGrid("getNodeAncestors", t).length
}
}), i
},
getNodeParent: function (t) {
var i = null;
return this.each(function () {
var e, o;
if (this.grid && this.p.treeGrid) switch (this.p.treeGridModel) {
case "nested":
var r = this.p.treeReader.left_field,
u = this.p.treeReader.right_field,
f = this.p.treeReader.level_field,
s = parseInt(t[r], 10),
h = parseInt(t[u], 10),
c = parseInt(t[f], 10);
n(this.p.data).each(function () {
if (parseInt(this[f], 10) === c - 1 && parseInt(this[r], 10) < s && parseInt(this[u], 10) > h) return i = this, !1
});
break;
case "adjacency":
e = this.p.treeReader.parent_id_field, o = this.p.localReader.id, n(this.p.data).each(function () {
if (this[o] == t[e]) return i = this, !1
})
}
}), i
},
getNodeChildren: function (t) {
var i = [];
return this.each(function () {
var e, o;
if (this.grid && this.p.treeGrid) switch (this.p.treeGridModel) {
case "nested":
var r = this.p.treeReader.left_field,
u = this.p.treeReader.right_field,
f = this.p.treeReader.level_field,
s = parseInt(t[r], 10),
h = parseInt(t[u], 10),
c = parseInt(t[f], 10);
n(this.p.data).each(function () {
parseInt(this[f], 10) === c + 1 && parseInt(this[r], 10) > s && parseInt(this[u], 10) < h && i.push(this)
});
break;
case "adjacency":
e = this.p.treeReader.parent_id_field, o = this.p.localReader.id, n(this.p.data).each(function () {
this[e] == t[o] && i.push(this)
})
}
}), i
},
getFullTreeNode: function (t) {
var i = [];
return this.each(function () {
var u, e, o;
if (this.grid && this.p.treeGrid) switch (this.p.treeGridModel) {
case "nested":
var r = this.p.treeReader.left_field,
s = this.p.treeReader.right_field,
f = this.p.treeReader.level_field,
h = parseInt(t[r], 10),
c = parseInt(t[s], 10),
l = parseInt(t[f], 10);
n(this.p.data).each(function () {
parseInt(this[f], 10) >= l && parseInt(this[r], 10) >= h && parseInt(this[r], 10) <= c && i.push(this)
});
break;
case "adjacency":
t && (i.push(t), e = this.p.treeReader.parent_id_field, o = this.p.localReader.id, n(this.p.data).each(function (n) {
for (u = i.length, n = 0; n < u; n++)
if (i[n][o] == this[e]) {
i.push(this);
break
}
}))
}
}), i
},
getNodeAncestors: function (t) {
var i = [];
return this.each(function () {
if (this.grid && this.p.treeGrid)
for (var r = n(this).jqGrid("getNodeParent", t) ; r;) i.push(r), r = n(this).jqGrid("getNodeParent", r)
}), i
},
isVisibleNode: function (t) {
var i = !0;
return this.each(function () {
if (this.grid && this.p.treeGrid) {
var r = n(this).jqGrid("getNodeAncestors", t),
u = this.p.treeReader.expanded_field;
n(r).each(function () {
return i = i && this[u], i ? void 0 : !1
})
}
}), i
},
isNodeLoaded: function (t) {
var i;
return this.each(function () {
if (this.grid && this.p.treeGrid) {
var r = this.p.treeReader.leaf_field;
i = void 0 !== t ? void 0 !== t.loaded ? t.loaded : t[r] || 0 < n(this).jqGrid("getNodeChildren", t).length ? !0 : !1 : !1
}
}), i
},
expandNode: function (t) {
return this.each(function () {
if (this.grid && this.p.treeGrid) {
var r = this.p.treeReader.expanded_field,
e = this.p.treeReader.parent_id_field,
o = this.p.treeReader.loaded,
f = this.p.treeReader.level_field,
s = this.p.treeReader.left_field,
h = this.p.treeReader.right_field;
if (!t[r]) {
var i = n.jgrid.getAccessor(t, this.p.localReader.id),
u = n("#" + n.jgrid.jqID(i), this.grid.bDiv)[0],
c = this.p._index[i];
n(this).jqGrid("isNodeLoaded", this.p.data[c]) ? (t[r] = !0, n("div.treeclick", u).removeClass(this.p.treeIcons.plus + " tree-plus").addClass(this.p.treeIcons.minus + " tree-minus")) : this.grid.hDiv.loading || (t[r] = !0, n("div.treeclick", u).removeClass(this.p.treeIcons.plus + " tree-plus").addClass(this.p.treeIcons.minus + " tree-minus"), this.p.treeANode = u.rowIndex, this.p.datatype = this.p.treedatatype, "nested" == this.p.treeGridModel ? n(this).jqGrid("setGridParam", {
postData: {
nodeid: i,
n_left: t[s],
n_right: t[h],
n_level: t[f]
}
}) : n(this).jqGrid("setGridParam", {
postData: {
nodeid: i,
parentid: t[e],
n_level: t[f]
}
}), n(this).trigger("reloadGrid"), t[o] = !0, "nested" == this.p.treeGridModel ? n(this).jqGrid("setGridParam", {
postData: {
nodeid: "",
n_left: "",
n_right: "",
n_level: ""
}
}) : n(this).jqGrid("setGridParam", {
postData: {
nodeid: "",
parentid: "",
n_level: ""
}
}))
}
}
})
},
collapseNode: function (t) {
return this.each(function () {
if (this.grid && this.p.treeGrid) {
var i = this.p.treeReader.expanded_field;
t[i] && (t[i] = !1, i = n.jgrid.getAccessor(t, this.p.localReader.id), i = n("#" + n.jgrid.jqID(i), this.grid.bDiv)[0], n("div.treeclick", i).removeClass(this.p.treeIcons.minus + " tree-minus").addClass(this.p.treeIcons.plus + " tree-plus"))
}
})
},
SortTree: function (t, i, r, u) {
return this.each(function () {
if (this.grid && this.p.treeGrid) {
var f, c, s, e = [],
h = this,
o;
for (f = n(this).jqGrid("getRootNodes"), f = n.jgrid.from(f), f.orderBy(t, i, r, u), o = f.select(), f = 0, c = o.length; f < c; f++) s = o[f], e.push(s), n(this).jqGrid("collectChildrenSortTree", e, s, t, i, r, u);
n.each(e, function (t) {
var i = n.jgrid.getAccessor(this, h.p.localReader.id);
n("#" + n.jgrid.jqID(h.p.id) + " tbody tr:eq(" + t + ")").after(n("tr#" + n.jgrid.jqID(i), h.grid.bDiv))
}), e = o = f = null
}
})
},
collectChildrenSortTree: function (t, i, r, u, f, e) {
return this.each(function () {
if (this.grid && this.p.treeGrid) {
var o, c, s, h;
for (o = n(this).jqGrid("getNodeChildren", i), o = n.jgrid.from(o), o.orderBy(r, u, f, e), h = o.select(), o = 0, c = h.length; o < c; o++) s = h[o], t.push(s), n(this).jqGrid("collectChildrenSortTree", t, s, r, u, f, e)
}
})
},
setTreeRow: function (t, i) {
var r = !1;
return this.each(function () {
this.grid && this.p.treeGrid && (r = n(this).jqGrid("setRowData", t, i))
}), r
},
delTreeNode: function (t) {
return this.each(function () {
var i = this.p.localReader.id,
r, f = this.p.treeReader.left_field,
e = this.p.treeReader.right_field,
o, h, u, s;
if (this.grid && this.p.treeGrid && (r = this.p._index[t], void 0 !== r)) {
if (o = parseInt(this.p.data[r][e], 10), h = o - parseInt(this.p.data[r][f], 10) + 1, s = n(this).jqGrid("getFullTreeNode", this.p.data[r]), 0 < s.length)
for (r = 0; r < s.length; r++) n(this).jqGrid("delRowData", s[r][i]);
if ("nested" === this.p.treeGridModel) {
if (i = n.jgrid.from(this.p.data).greater(f, o, {
stype: "integer"
}).select(), i.length)
for (u in i) i.hasOwnProperty(u) && (i[u][f] = parseInt(i[u][f], 10) - h);
if (i = n.jgrid.from(this.p.data).greater(e, o, {
stype: "integer"
}).select(), i.length)
for (u in i) i.hasOwnProperty(u) && (i[u][e] = parseInt(i[u][e], 10) - h)
}
}
})
},
addChildNode: function (t, i, r, u) {
var f = this[0],
p, d, g, o;
if (r) {
var w = f.p.treeReader.expanded_field,
s = f.p.treeReader.leaf_field,
e = f.p.treeReader.level_field,
nt = f.p.treeReader.parent_id_field,
a = f.p.treeReader.left_field,
c = f.p.treeReader.right_field,
b = f.p.treeReader.loaded,
v, y, l, k, h;
if (v = 0, p = i, void 0 === u && (u = !1), void 0 === t || null === t) {
if (h = f.p.data.length - 1, 0 <= h)
for (; 0 <= h;) v = Math.max(v, parseInt(f.p.data[h][f.p.localReader.id], 10)), h--;
t = v + 1
}
if (g = n(f).jqGrid("getInd", i), d = !1, void 0 === i || null === i || "" === i ? (p = i = null, v = "last", k = f.p.tree_root_level, h = f.p.data.length + 1) : (v = "after", y = f.p._index[i], l = f.p.data[y], i = l[f.p.localReader.id], k = parseInt(l[e], 10) + 1, h = n(f).jqGrid("getFullTreeNode", l), h.length ? (p = h = h[h.length - 1][f.p.localReader.id], h = n(f).jqGrid("getInd", p) + 1) : h = n(f).jqGrid("getInd", i) + 1, l[s]) && (d = !0, l[w] = !0, n(f.rows[g]).find("span.cell-wrapperleaf").removeClass("cell-wrapperleaf").addClass("cell-wrapper").end().find("div.tree-leaf").removeClass(f.p.treeIcons.leaf + " tree-leaf").addClass(f.p.treeIcons.minus + " tree-minus"), f.p.data[y][s] = !1, l[b] = !0), y = h + 1, void 0 === r[w] && (r[w] = !1), void 0 === r[b] && (r[b] = !1), r[e] = k, void 0 === r[s] && (r[s] = !0), "adjacency" === f.p.treeGridModel && (r[nt] = i), "nested" === f.p.treeGridModel)
if (null !== i) {
if (s = parseInt(l[c], 10), e = n.jgrid.from(f.p.data), e = e.greaterOrEquals(c, s, {
stype: "integer"
}), e = e.select(), e.length)
for (o in e) e.hasOwnProperty(o) && (e[o][a] = e[o][a] > s ? parseInt(e[o][a], 10) + 2 : e[o][a], e[o][c] = e[o][c] >= s ? parseInt(e[o][c], 10) + 2 : e[o][c]);
r[a] = s, r[c] = s + 1
} else {
if (s = parseInt(n(f).jqGrid("getCol", c, !1, "max"), 10), e = n.jgrid.from(f.p.data).greater(a, s, {
stype: "integer"
}).select(), e.length)
for (o in e) e.hasOwnProperty(o) && (e[o][a] = parseInt(e[o][a], 10) + 2);
if (e = n.jgrid.from(f.p.data).greater(c, s, {
stype: "integer"
}).select(), e.length)
for (o in e) e.hasOwnProperty(o) && (e[o][c] = parseInt(e[o][c], 10) + 2);
r[a] = s + 1, r[c] = s + 2
} (null === i || n(f).jqGrid("isNodeLoaded", l) || d) && (n(f).jqGrid("addRowData", t, r, v, p), n(f).jqGrid("setTreeNode", h, y)), l && !l[w] && u && n(f.rows[g]).find("div.treeclick").click()
}
}
})
}(jQuery),
function (n) {
n.jgrid.extend({
jqGridImport: function (t) {
return t = n.extend({
imptype: "xml",
impstring: "",
impurl: "",
mtype: "GET",
impData: {},
xmlGrid: {
config: "roots>grid",
data: "roots>rows"
},
jsonGrid: {
config: "grid",
data: "data"
},
ajaxOptions: {}
}, t || {}), this.each(function () {
var i = this,
u = function (t, r) {
var u = n(r.xmlGrid.config, t)[0],
f = n(r.xmlGrid.data, t)[0],
e, o;
if (xmlJsonClass.xml2json && n.jgrid.parse) {
u = xmlJsonClass.xml2json(u, " "), u = n.jgrid.parse(u);
for (o in u) u.hasOwnProperty(o) && (e = u[o]);
f ? (f = u.grid.datatype, u.grid.datatype = "xmlstring", u.grid.datastr = t, n(i).jqGrid(e).jqGrid("setGridParam", {
datatype: f
})) : n(i).jqGrid(e)
} else alert("xml2json or parse are not present")
},
f = function (t, r) {
var u, f, e;
t && "string" == typeof t && (u = !1, n.jgrid.useJSON && (n.jgrid.useJSON = !1, u = !0), f = n.jgrid.parse(t), u && (n.jgrid.useJSON = !0), u = f[r.jsonGrid.config], (f = f[r.jsonGrid.data]) ? (e = u.datatype, u.datatype = "jsonstring", u.datastr = f, n(i).jqGrid(u).jqGrid("setGridParam", {
datatype: e
})) : n(i).jqGrid(u))
},
r;
switch (t.imptype) {
case "xml":
n.ajax(n.extend({
url: t.impurl,
type: t.mtype,
data: t.impData,
dataType: "xml",
complete: function (r, f) {
"success" == f && (u(r.responseXML, t), n(i).triggerHandler("jqGridImportComplete", [r, t]), n.isFunction(t.importComplete) && t.importComplete(r))
}
}, t.ajaxOptions));
break;
case "xmlstring":
t.impstring && "string" == typeof t.impstring && (r = n.jgrid.stringToDoc(t.impstring), r && (u(r, t), n(i).triggerHandler("jqGridImportComplete", [r, t]), n.isFunction(t.importComplete) && t.importComplete(r), t.impstring = null), r = null);
break;
case "json":
n.ajax(n.extend({
url: t.impurl,
type: t.mtype,
data: t.impData,
dataType: "json",
complete: function (r) {
try {
f(r.responseText, t), n(i).triggerHandler("jqGridImportComplete", [r, t]), n.isFunction(t.importComplete) && t.importComplete(r)
} catch (u) { }
}
}, t.ajaxOptions));
break;
case "jsonstring":
t.impstring && "string" == typeof t.impstring && (f(t.impstring, t), n(i).triggerHandler("jqGridImportComplete", [t.impstring, t]), n.isFunction(t.importComplete) && t.importComplete(t.impstring), t.impstring = null)
}
})
},
jqGridExport: function (t) {
var t = n.extend({
exptype: "xmlstring",
root: "grid",
ident: "\t"
}, t || {}),
i = null;
return this.each(function () {
if (this.grid) {
var u, r = n.extend(!0, {}, n(this).jqGrid("getGridParam"));
if (r.rownumbers && (r.colNames.splice(0, 1), r.colModel.splice(0, 1)), r.multiselect && (r.colNames.splice(0, 1), r.colModel.splice(0, 1)), r.subGrid && (r.colNames.splice(0, 1), r.colModel.splice(0, 1)), r.knv = null, r.treeGrid)
for (u in r.treeReader) r.treeReader.hasOwnProperty(u) && (r.colNames.splice(r.colNames.length - 1), r.colModel.splice(r.colModel.length - 1));
switch (t.exptype) {
case "xmlstring":
i = "<" + t.root + ">" + xmlJsonClass.json2xml(r, t.ident) + "<\/" + t.root + ">";
break;
case "jsonstring":
i = "{" + xmlJsonClass.toJson(r, t.root, t.ident, !1) + "}", void 0 !== r.postData.filters && (i = i.replace(/filters":"/, 'filters":'), i = i.replace(/}]}"/, "}]}"))
}
}
}), i
},
excelExport: function (t) {
return t = n.extend({
exptype: "remote",
url: null,
oper: "oper",
tag: "excel",
exportOptions: {}
}, t || {}), this.each(function () {
if (this.grid) {
var i;
"remote" == t.exptype && (i = n.extend({}, this.p.postData), i[t.oper] = t.tag, i = jQuery.param(i), i = -1 != t.url.indexOf("?") ? t.url + "&" + i : t.url + "?" + i, window.location = i)
}
})
}
})
}(jQuery);
var xmlJsonClass = {
xml2json: function (n, t) {
9 === n.nodeType && (n = n.documentElement);
var i = this.toJson(this.toObj(this.removeWhite(n)), n.nodeName, "\t");
return "{\n" + t + (t ? i.replace(/\t/g, t) : i.replace(/\t|\n/g, "")) + "\n}"
},
json2xml: function (n, t) {
var r = function (n, t, i) {
var u = "",
e, f, o;
if (n instanceof Array)
if (0 === n.length) u += i + "<" + t + ">__EMPTY_ARRAY_<\/" + t + ">\n";
else
for (e = 0, f = n.length; e < f; e += 1) o = i + r(n[e], t, i + "\t") + "\n", u = u + o;
else if ("object" == typeof n) {
e = !1, u += i + "<" + t;
for (f in n) n.hasOwnProperty(f) && ("@" === f.charAt(0) ? u += " " + f.substr(1) + '="' + n[f].toString() + '"' : e = !0);
if (u += e ? ">" : "/>", e) {
for (f in n) n.hasOwnProperty(f) && ("#text" === f ? u += n[f] : "#cdata" === f ? u += "<![CDATA[" + n[f] + "]\]>" : "@" !== f.charAt(0) && (u += r(n[f], f, i + "\t")));
u += ("\n" === u.charAt(u.length - 1) ? i : "") + "<\/" + t + ">"
}
} else "function" == typeof n ? u += i + "<" + t + "><![CDATA[" + n + "]\]><\/" + t + ">" : (void 0 === n && (n = ""), u = '""' === n.toString() || 0 === n.toString().length ? u + (i + "<" + t + ">__EMPTY_STRING_<\/" + t + ">") : u + (i + "<" + t + ">" + n.toString() + "<\/" + t + ">"));
return u
},
u = "",
i;
for (i in n) n.hasOwnProperty(i) && (u += r(n[i], i, ""));
return t ? u.replace(/\t/g, t) : u.replace(/\t|\n/g, "")
},
toObj: function (n) {
var i = {},
e = /function/i,
r, u, f, t;
if (1 === n.nodeType) {
if (n.attributes.length)
for (r = 0; r < n.attributes.length; r += 1) i["@" + n.attributes[r].nodeName] = (n.attributes[r].nodeValue || "").toString();
if (n.firstChild) {
for (u = r = 0, f = !1, t = n.firstChild; t; t = t.nextSibling) 1 === t.nodeType ? f = !0 : 3 === t.nodeType && t.nodeValue.match(/[^ \f\n\r\t\v]/) ? r += 1 : 4 === t.nodeType && (u += 1);
if (f)
if (2 > r && 2 > u)
for (this.removeWhite(n), t = n.firstChild; t; t = t.nextSibling) 3 === t.nodeType ? i["#text"] = this.escape(t.nodeValue) : 4 === t.nodeType ? e.test(t.nodeValue) ? i[t.nodeName] = [i[t.nodeName], t.nodeValue] : i["#cdata"] = this.escape(t.nodeValue) : i[t.nodeName] ? i[t.nodeName] instanceof Array ? i[t.nodeName][i[t.nodeName].length] = this.toObj(t) : i[t.nodeName] = [i[t.nodeName], this.toObj(t)] : i[t.nodeName] = this.toObj(t);
else n.attributes.length ? i["#text"] = this.escape(this.innerXml(n)) : i = this.escape(this.innerXml(n));
else if (r) n.attributes.length ? i["#text"] = this.escape(this.innerXml(n)) : (i = this.escape(this.innerXml(n)), "__EMPTY_ARRAY_" === i ? i = "[]" : "__EMPTY_STRING_" === i && (i = ""));
else if (u)
if (1 < u) i = this.escape(this.innerXml(n));
else
for (t = n.firstChild; t; t = t.nextSibling)
if (e.test(n.firstChild.nodeValue)) {
i = n.firstChild.nodeValue;
break
} else i["#cdata"] = this.escape(t.nodeValue)
}
n.attributes.length || n.firstChild || (i = null)
} else 9 === n.nodeType ? i = this.toObj(n.documentElement) : alert("unhandled node type: " + n.nodeType);
return i
},
toJson: function (n, t, i, r) {
var e, u, h;
void 0 === r && (r = !0);
var f = t ? '"' + t + '"' : "",
o = "\t",
s = "\n";
if (r || (s = o = ""), "[]" === n) f += t ? ":[]" : "[]";
else if (n instanceof Array) {
for (h = [], u = 0, e = n.length; u < e; u += 1) h[u] = this.toJson(n[u], "", i + o, r);
f += (t ? ":[" : "[") + (1 < h.length ? s + i + o + h.join("," + s + i + o) + s + i : h.join("")) + "]"
} else if (null === n) f += (t && ":") + "null";
else if ("object" == typeof n) {
e = [];
for (u in n) n.hasOwnProperty(u) && (e[e.length] = this.toJson(n[u], u, i + o, r));
f += (t ? ":{" : "{") + (1 < e.length ? s + i + o + e.join("," + s + i + o) + s + i : e.join("")) + "}"
} else f = "string" == typeof n ? f + ((t && ":") + '"' + n.replace(/\\/g, "\\\\").replace(/\"/g, '\\"') + '"') : f + ((t && ":") + n.toString());
return f
},
innerXml: function (n) {
var t = "",
i, n;
if ("innerHTML" in n) t = n.innerHTML;
else
for (i = function (n) {
var r = "",
t;
if (1 === n.nodeType) {
for (r += "<" + n.nodeName, t = 0; t < n.attributes.length; t += 1) r += " " + n.attributes[t].nodeName + '="' + (n.attributes[t].nodeValue || "").toString() + '"';
if (n.firstChild) {
for (r += ">", t = n.firstChild; t; t = t.nextSibling) r += i(t);
r += "<\/" + n.nodeName + ">"
} else r += "/>"
} else 3 === n.nodeType ? r += n.nodeValue : 4 === n.nodeType && (r += "<![CDATA[" + n.nodeValue + "]\]>");
return r
}, n = n.firstChild; n; n = n.nextSibling) t += i(n);
return t
},
escape: function (n) {
return n.replace(/[\\]/g, "\\\\").replace(/[\"]/g, '\\"').replace(/[\n]/g, "\\n").replace(/[\r]/g, "\\r")
},
removeWhite: function (n) {
var t, i;
for (n.normalize(), t = n.firstChild; t;) 3 === t.nodeType ? t.nodeValue.match(/[^ \f\n\r\t\v]/) ? t = t.nextSibling : (i = t.nextSibling, n.removeChild(t), t = i) : (1 === t.nodeType && this.removeWhite(t), t = t.nextSibling);
return n
}
};
(function (n) {
if (n.jgrid.msie && 8 == n.jgrid.msiever() && (n.expr[":"].hidden = function (n) {
return 0 === n.offsetWidth || 0 === n.offsetHeight || "none" == n.style.display
}), n.jgrid._multiselect = !1, n.ui && n.ui.multiselect) {
if (n.ui.multiselect.prototype._setSelected) {
var t = n.ui.multiselect.prototype._setSelected;
n.ui.multiselect.prototype._setSelected = function (i, r) {
var f = t.call(this, i, r),
u;
return r && this.selectedList && (u = this.element, this.selectedList.find("li").each(function () {
n(this).data("optionLink") && n(this).data("optionLink").remove().appendTo(u)
})), f
}
}
n.ui.multiselect.prototype.destroy && (n.ui.multiselect.prototype.destroy = function () {
this.element.show(), this.container.remove(), n.Widget === void 0 ? n.widget.prototype.destroy.apply(this, arguments) : n.Widget.prototype.destroy.apply(this, arguments)
}), n.jgrid._multiselect = !0
}
n.jgrid.extend({
sortableColumns: function (t) {
return this.each(function () {
function u() {
i.p.disableClick = !0
}
var i = this,
r = n.jgrid.jqID(i.p.id),
r = {
tolerance: "pointer",
axis: "x",
scrollSensitivity: "1",
items: ">th:not(:has(#jqgh_" + r + "_cb,#jqgh_" + r + "_rn,#jqgh_" + r + "_subgrid),:hidden)",
placeholder: {
element: function (t) {
return n(document.createElement(t[0].nodeName)).addClass(t[0].className + " ui-sortable-placeholder ui-state-highlight").removeClass("ui-sortable-helper")[0]
},
update: function (n, t) {
t.height(n.currentItem.innerHeight() - parseInt(n.currentItem.css("paddingTop") || 0, 10) - parseInt(n.currentItem.css("paddingBottom") || 0, 10)), t.width(n.currentItem.innerWidth() - parseInt(n.currentItem.css("paddingLeft") || 0, 10) - parseInt(n.currentItem.css("paddingRight") || 0, 10))
}
},
update: function (t, r) {
var f = n(r.item).parent(),
f = n(">th", f),
e = {},
o = i.p.id + "_",
u;
n.each(i.p.colModel, function (n) {
e[this.name] = n
}), u = [], f.each(function () {
var t = n(">div", this).get(0).id.replace(/^jqgh_/, "").replace(o, "");
e.hasOwnProperty(t) && u.push(e[t])
}), n(i).jqGrid("remapColumns", u, !0, !0), n.isFunction(i.p.sortable.update) && i.p.sortable.update(u), setTimeout(function () {
i.p.disableClick = !1
}, 50)
}
},
f;
i.p.sortable.options ? n.extend(r, i.p.sortable.options) : n.isFunction(i.p.sortable) && (i.p.sortable = {
update: i.p.sortable
}), r.start ? (f = r.start, r.start = function (n, t) {
u(), f.call(this, n, t)
}) : r.start = u, i.p.sortable.exclude && (r.items = r.items + (":not(" + i.p.sortable.exclude + ")")), t.sortable(r).data("sortable").floating = !0
})
},
columnChooser: function (t) {
function f(t, i) {
t && (typeof t == "string" ? n.fn[t] && n.fn[t].apply(i, n.makeArray(arguments).slice(2)) : n.isFunction(t) && t.apply(i, n.makeArray(arguments).slice(2)))
}
var i = this,
o;
if (!n("#colchooser_" + n.jgrid.jqID(i[0].p.id)).length) {
var u = n('<div id="colchooser_' + i[0].p.id + '" style="position:relative;overflow:hidden"><div><select multiple="multiple"><\/select><\/div><\/div>'),
r = n("select", u),
t = n.extend({
width: 420,
height: 240,
classname: null,
done: function (n) {
n && i.jqGrid("remapColumns", n, !0)
},
msel: "multiselect",
dlog: "dialog",
dialog_opts: {
minWidth: 470
},
dlog_opts: function (t) {
var i = {};
return i[t.bSubmit] = function () {
t.apply_perm(), t.cleanup(!1)
}, i[t.bCancel] = function () {
t.cleanup(!0)
}, n.extend(!0, {
buttons: i,
close: function () {
t.cleanup(!0)
},
modal: t.modal || !1,
resizable: t.resizable || !0,
width: t.width + 20
}, t.dialog_opts || {})
},
apply_perm: function () {
n("option", r).each(function () {
this.selected ? i.jqGrid("showCol", e[this.value].name) : i.jqGrid("hideCol", e[this.value].name)
});
var u = [];
n("option:selected", r).each(function () {
u.push(parseInt(this.value, 10))
}), n.each(u, function () {
delete s[e[parseInt(this, 10)].name]
}), n.each(s, function () {
var r = parseInt(this, 10),
t = u,
n = r,
i, f;
n >= 0 ? (i = t.slice(), f = i.splice(n, Math.max(t.length - n, n)), n > t.length && (n = t.length), i[n] = r, u = i.concat(f)) : u = void 0
}), t.done && t.done.call(i, u)
},
cleanup: function (n) {
f(t.dlog, u, "destroy"), f(t.msel, r, "destroy"), u.remove(), n && t.done && t.done.call(i)
},
msel_opts: {}
}, n.jgrid.col, t || {});
if (n.ui && n.ui.multiselect && t.msel == "multiselect") {
if (!n.jgrid._multiselect) {
alert("Multiselect plugin loaded after jqGrid. Please load the plugin before the jqGrid!");
return
}
t.msel_opts = n.extend(n.ui.multiselect.defaults, t.msel_opts)
}
t.caption && u.attr("title", t.caption), t.classname && (u.addClass(t.classname), r.addClass(t.classname)), t.width && (n(">div", u).css({
width: t.width,
margin: "0 auto"
}), r.css("width", t.width)), t.height && (n(">div", u).css("height", t.height), r.css("height", t.height - 10));
var e = i.jqGrid("getGridParam", "colModel"),
h = i.jqGrid("getGridParam", "colNames"),
s = {},
c = [];
r.empty(), n.each(e, function (t) {
s[this.name] = t, this.hidedlg ? this.hidden || c.push(t) : r.append("<option value='" + t + "' " + (this.hidden ? "" : "selected='selected'") + ">" + n.jgrid.stripHtml(h[t]) + "<\/option>")
}), o = n.isFunction(t.dlog_opts) ? t.dlog_opts.call(i, t) : t.dlog_opts, f(t.dlog, u, o), o = n.isFunction(t.msel_opts) ? t.msel_opts.call(i, t) : t.msel_opts, f(t.msel, r, o)
}
},
sortableRows: function (t) {
return this.each(function () {
var i = this;
i.grid && !i.p.treeGrid && n.fn.sortable && (t = n.extend({
cursor: "move",
axis: "y",
items: ".jqgrow"
}, t || {}), t.start && n.isFunction(t.start) ? (t._start_ = t.start, delete t.start) : t._start_ = !1, t.update && n.isFunction(t.update) ? (t._update_ = t.update, delete t.update) : t._update_ = !1, t.start = function (r, u) {
if (n(u.item).css("border-width", "0px"), n("td", u.item).each(function (n) {
this.style.width = i.grid.cols[n].style.width
}), i.p.subGrid) {
var f = n(u.item).attr("id");
try {
n(i).jqGrid("collapseSubGridRow", f)
} catch (e) { }
}
t._start_ && t._start_.apply(this, [r, u])
}, t.update = function (r, u) {
n(u.item).css("border-width", ""), i.p.rownumbers === !0 && n("td.jqgrid-rownum", i.rows).each(function (t) {
n(this).html(t + 1 + (parseInt(i.p.page, 10) - 1) * parseInt(i.p.rowNum, 10))
}), t._update_ && t._update_.apply(this, [r, u])
}, n("tbody:first", i).sortable(t), n("tbody:first", i).disableSelection())
})
},
gridDnD: function (t) {
return this.each(function () {
function u() {
var t = n.data(i, "dnd");
n("tr.jqgrow:not(.ui-draggable)", i).draggable(n.isFunction(t.drag) ? t.drag.call(n(i), t) : t.drag)
}
var i = this,
r, f;
if (i.grid && !i.p.treeGrid && n.fn.draggable && n.fn.droppable)
if (n("#jqgrid_dnd")[0] === void 0 && n("body").append("<table id='jqgrid_dnd' class='ui-jqgrid-dnd'><\/table>"), typeof t == "string" && t == "updateDnD" && i.p.jqgdnd === !0) u();
else if (t = n.extend({
drag: function (t) {
return n.extend({
start: function (r, u) {
var f;
if (i.p.subGrid) {
f = n(u.helper).attr("id");
try {
n(i).jqGrid("collapseSubGridRow", f)
} catch (e) { }
}
for (f = 0; f < n.data(i, "dnd").connectWith.length; f++) n(n.data(i, "dnd").connectWith[f]).jqGrid("getGridParam", "reccount") == "0" && n(n.data(i, "dnd").connectWith[f]).jqGrid("addRowData", "jqg_empty_row", {});
u.helper.addClass("ui-state-highlight"), n("td", u.helper).each(function (n) {
this.style.width = i.grid.headers[n].width + "px"
}), t.onstart && n.isFunction(t.onstart) && t.onstart.call(n(i), r, u)
},
stop: function (r, u) {
var f;
for (u.helper.dropped && !t.dragcopy && (f = n(u.helper).attr("id"), f === void 0 && (f = n(this).attr("id")), n(i).jqGrid("delRowData", f)), f = 0; f < n.data(i, "dnd").connectWith.length; f++) n(n.data(i, "dnd").connectWith[f]).jqGrid("delRowData", "jqg_empty_row");
t.onstop && n.isFunction(t.onstop) && t.onstop.call(n(i), r, u)
}
}, t.drag_opts || {})
},
drop: function (t) {
return n.extend({
accept: function (t) {
return n(t).hasClass("jqgrow") ? (t = n(t).closest("table.ui-jqgrid-btable"), t.length > 0 && n.data(t[0], "dnd") !== void 0) ? (t = n.data(t[0], "dnd").connectWith, n.inArray("#" + n.jgrid.jqID(this.id), t) != -1 ? !0 : !1) : !1 : t
},
drop: function (r, u) {
var f, o;
if (n(u.draggable).hasClass("jqgrow")) {
if (f = n(u.draggable).attr("id"), f = u.draggable.parent().parent().jqGrid("getRowData", f), !t.dropbyname) {
var h = 0,
c = {},
e, s, l = n("#" + n.jgrid.jqID(this.id)).jqGrid("getGridParam", "colModel");
try {
for (s in f) f.hasOwnProperty(s) && (e = l[h].name, e == "cb" || e == "rn" || e == "subgrid" || f.hasOwnProperty(s) && l[h] && (c[e] = f[s]), h++);
f = c
} catch (a) { }
}
u.helper.dropped = !0, t.beforedrop && n.isFunction(t.beforedrop) && (e = t.beforedrop.call(this, r, u, f, n("#" + n.jgrid.jqID(i.p.id)), n(this)), e !== void 0 && e !== null && typeof e == "object" && (f = e)), u.helper.dropped && (t.autoid && (n.isFunction(t.autoid) ? o = t.autoid.call(this, f) : (o = Math.ceil(Math.random() * 1e3), o = t.autoidprefix + o)), n("#" + n.jgrid.jqID(this.id)).jqGrid("addRowData", o, f, t.droppos)), t.ondrop && n.isFunction(t.ondrop) && t.ondrop.call(this, r, u, f)
}
}
}, t.drop_opts || {})
},
onstart: null,
onstop: null,
beforedrop: null,
ondrop: null,
drop_opts: {
activeClass: "ui-state-active",
hoverClass: "ui-state-hover"
},
drag_opts: {
revert: "invalid",
helper: "clone",
cursor: "move",
appendTo: "#jqgrid_dnd",
zIndex: 5e3
},
dragcopy: !1,
dropbyname: !1,
droppos: "first",
autoid: !0,
autoidprefix: "dnd_"
}, t || {}), t.connectWith)
for (t.connectWith = t.connectWith.split(","), t.connectWith = n.map(t.connectWith, function (t) {
return n.trim(t)
}), n.data(i, "dnd", t), i.p.reccount == "0" || i.p.jqgdnd || u(), i.p.jqgdnd = !0, r = 0; r < t.connectWith.length; r++) f = t.connectWith[r], n(f).droppable(n.isFunction(t.drop) ? t.drop.call(n(i), t) : t.drop)
})
},
gridResize: function (t) {
return this.each(function () {
var i = this,
r = n.jgrid.jqID(i.p.id);
i.grid && n.fn.resizable && (t = n.extend({}, t || {}), t.alsoResize ? (t._alsoResize_ = t.alsoResize, delete t.alsoResize) : t._alsoResize_ = !1, t.stop && n.isFunction(t.stop) ? (t._stop_ = t.stop, delete t.stop) : t._stop_ = !1, t.stop = function (u, f) {
n(i).jqGrid("setGridParam", {
height: n("#gview_" + r + " .ui-jqgrid-bdiv").height()
}), n(i).jqGrid("setGridWidth", f.size.width, t.shrinkToFit), t._stop_ && t._stop_.call(i, u, f)
}, t.alsoResize = t._alsoResize_ ? eval("(" + ("{'#gview_" + r + " .ui-jqgrid-bdiv':true,'" + t._alsoResize_ + "':true}") + ")") : n(".ui-jqgrid-bdiv", "#gview_" + r), delete t._alsoResize_, n("#gbox_" + r).resizable(t))
})
}
})
})(jQuery)
