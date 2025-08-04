/*!
This file is based on or incorporates material from the projects listed below (Third Party IP).
The original copyright notice and the license under which Microsoft received such Third Party IP, are set forth below.
Such licenses and notices are provided for informational purposes only. Microsoft licenses the Third Party IP to you under the licensing terms for the Microsoft product.
Microsoft reserves all other rights not expressly granted under this agreement, whether by implication, estoppel or otherwise.
Bootstrap-daterangepicker 1.3.12
Copyright (c) 2012-2014 Dan Grossman. All rights reserved.
Provided for Informational Purposes Only 
Apache 2.0 License 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABLITY OR NON-INFRINGEMENT. 
See the Apache Version 2.0 License for specific language governing permissions and limitations under the License.
*/

(function (root, factory) {

	if (typeof define === 'function' && define.amd) {
		define(['moment', 'jquery', 'exports'], function (momentjs, $, exports) {
			root.daterangepicker = factory(root, exports, momentjs, $);
		});

	} else if (typeof exports !== 'undefined') {
		var momentjs = require('moment');
		var jQuery;
		try {
			jQuery = require('jquery');
		} catch (err) {
			jQuery = window.jQuery;
			if (!jQuery) throw new Error('jQuery dependency not found');
		}

		factory(root, exports, momentjs, jQuery);

		// Finally, as a browser global.
	} else {
		root.daterangepicker = factory(root, {}, root.moment, (root.jQuery || root.Zepto || root.ender || root.$));
	}

}(this, function (root, daterangepicker, moment, $) {

	var DateRangePicker = function (element, options, cb) {

		// by default, the daterangepicker element is placed at the bottom of HTML body
		this.parentEl = 'body';

		// element that triggered the date range picker
		this.element = $(element);

		// tracks visible state
		this.isShowing = false;

		// create the picker HTML object
		var DRPTemplate = '<div class="daterangepicker dropdown-menu">' +
				'<div class="go-back"><div class="leftA">' + options.locale.customRangeLabel + '</div><div class="rightA"><button class="interactionCentricDateRangeApply"></button>&nbsp;<button class="interactionCentricDateRangeCancel"></button></div></div>' +
				'<div class="daterangecalendarcontainer"><div class="calendar left" data-before=' + options.locale.startDateLabel + '></div>' +
				'<div class="calendar right" data-before=' + options.locale.endDateLabel + '></div></div>' +
				'<div class="ranges"></div>' +
			  '</div>';

		// custom options
		if (typeof options !== 'object' || options === null)
			options = {};

		this.parentEl = (typeof options === 'object' && options.parentEl && $(options.parentEl).length) ? $(options.parentEl) : $(this.parentEl);
		this.container = $(DRPTemplate).appendTo(this.parentEl);

		this.setOptions(options, cb);

		// apply CSS classes and labels to buttons
		var c = this.container;
		$.each(this.buttonClasses, function (idx, val) {
			c.find('button').addClass(val);
		});
		this.container.find('.daterangepicker_start_input label').html(this.locale.fromLabel);
		this.container.find('.daterangepicker_end_input label').html(this.locale.toLabel);
		this.container.find('.interactionCentricDateRangeApply').html(this.locale.applyLabel);
		this.container.find('.interactionCentricDateRangeCancel').html(this.locale.cancelLabel);

		// event listeners
		this.container.find('.calendar')
			.on('click.daterangepicker', '.prev', $.proxy(this.clickPrev, this))
			.on('click.daterangepicker', '.next', $.proxy(this.clickNext, this))
			.on('click.daterangepicker', 'td.available', $.proxy(this.clickDate, this))
			.on('mouseenter.daterangepicker', 'td.available', $.proxy(this.hoverDate, this))
			.on('mouseleave.daterangepicker', 'td.available', $.proxy(this.updateFormInputs, this))
			.on('change.daterangepicker', 'select.yearselect', $.proxy(this.updateMonthYear, this))
			.on('change.daterangepicker', 'select.monthselect', $.proxy(this.updateMonthYear, this))
			.on('change.daterangepicker', 'select.hourselect,select.minuteselect,select.ampmselect', $.proxy(this.updateTime, this));

		this.container.find('.go-back')
			.on('click.daterangepicker', 'button.interactionCentricDateRangeApply', $.proxy(this.clickApply, this))
			.on('click.daterangepicker', 'button.interactionCentricDateRangeCancel', $.proxy(this.clickCancel, this))

		this.container.find('.ranges')
			.on('click.daterangepicker', 'li', $.proxy(this.clickRange, this))
			.on('mouseenter.daterangepicker', 'li', $.proxy(this.enterRange, this))
			.on('mouseleave.daterangepicker', 'li', $.proxy(this.updateFormInputs, this));

		if (this.element.is('input')) {
			this.element.on({
				'click.daterangepicker': $.proxy(this.show, this),
				'focus.daterangepicker': $.proxy(this.show, this),
				'keyup.daterangepicker': $.proxy(this.updateFromControl, this)
			});
		} else {
			this.element.on('click.daterangepicker', $.proxy(this.toggle, this));
		}

	};

	DateRangePicker.prototype = {

		constructor: DateRangePicker,

		setOptions: function (options, callback) {

			// Following variables update the date variables which are received from the options parameter
			// in order for the control to display the currently selected start and end date
			this.startDate = options.startDate;
			this.endDate = options.endDate;
			this.minDate = options.minDate;
			this.maxDate = options.minDate;
			this.dateLimit = false;
			this.startDateString = options.startDateString;
			this.endDateString = options.endDateString;
			this.minDateString = options.minDateString;
			this.maxDateString = options.maxDateString;

			this.showDropdowns = false;
			this.showWeekNumbers = false;
			this.timePicker = false;
			this.timePickerIncrement = 30;
			this.timePicker12Hour = true;
			this.singleDatePicker = false;
			this.ranges = {};
			this.rangeCount = 0;

			this.showNoRange = options.showNoRange;

			this.weekLabelForSunday = options.localizedLabels.WeekLabels.weekLabelForSunday;
			this.weekLabelForMonday = options.localizedLabels.WeekLabels.weekLabelForMonday;
			this.weekLabelForTuesday = options.localizedLabels.WeekLabels.weekLabelForTuesday;
			this.weekLabelForWednesday = options.localizedLabels.WeekLabels.weekLabelForWednesday;
			this.weekLabelForThursday = options.localizedLabels.WeekLabels.weekLabelForThursday;
			this.weekLabelForFriday = options.localizedLabels.WeekLabels.weekLabelForFriday;
			this.weekLabelForSaturday = options.localizedLabels.WeekLabels.weekLabelForSaturday;

			this.monthlabelForJanuary = options.localizedLabels.MonthLabels.monthLabelForJanuary,
			this.monthlabelForFebruary = options.localizedLabels.MonthLabels.monthLabelForFebruary,
			this.monthlabelForMarch = options.localizedLabels.MonthLabels.monthLabelForMarch,
			this.monthlabelForApril = options.localizedLabels.MonthLabels.monthLabelForApril,
			this.monthlabelForMay = options.localizedLabels.MonthLabels.monthLabelForMay,
			this.monthlabelForJune = options.localizedLabels.MonthLabels.monthLabelForJune,
			this.monthlabelForJuly = options.localizedLabels.MonthLabels.monthLabelForJuly,
			this.monthlabelForAugust = options.localizedLabels.MonthLabels.monthLabelForAugust,
			this.monthlabelForSeptember = options.localizedLabels.MonthLabels.monthLabelForSeptember,
			this.monthlabelForOctober = options.localizedLabels.MonthLabels.monthLabelForOctober,
			this.monthlabelForNovember = options.localizedLabels.MonthLabels.monthLabelForNovember,
			this.monthlabelForDecember = options.localizedLabels.MonthLabels.monthLabelForDecember

			this.opens = 'right';
			if (this.element.hasClass('pull-right'))
				this.opens = 'left';

			this.buttonClasses = ['btn', 'btn-small btn-sm'];
			this.applyClass = 'btn-success';
			this.cancelClass = 'btn-default';

			this.separator = ' - ';

			this.locale = {
				applyLabel: options.locale.applyLabel,
				cancelLabel: options.locale.cancelLabel,
				fromLabel: 'From',
				toLabel: 'To',
				weekLabel: 'W',
				customRangeLabel: options.locale.customRangeLabel,
				noRangeLabel: options.locale.noRangeLabel,
				daysOfWeek: moment.weekdaysMin(),
				monthNames: moment.months(),
				firstDay: moment.localeData()._week.dow
			};

			this.cb = function () { };

			if (typeof options.format === 'string')
				this.format = options.format;

			if (typeof options.separator === 'string')
				this.separator = options.separator;

			if (typeof options.startDateString === 'string')
				this.startDateString = options.startDateString;

			if (typeof options.endDateString === 'string')
				this.endDateString = options.endDateString;

			if (typeof options.minDate === 'string')
				this.minDate = moment(options.minDate, this.format);

			if (typeof options.maxDate === 'string')
				this.maxDate = moment(options.maxDate, this.format);

			if (typeof options.startDate === 'object' && options.startDate != null)
				this.startDate = moment(options.startDate);

			if (typeof options.endDate === 'object' && options.endDate != null)
				this.endDate = moment(options.endDate);

			if (typeof options.minDate === 'object')
				this.minDate = moment(options.minDate);

			if (typeof options.maxDate === 'object')
				this.maxDate = moment(options.maxDate);

			if (typeof options.applyClass === 'string')
				this.applyClass = options.applyClass;

			if (typeof options.cancelClass === 'string')
				this.cancelClass = options.cancelClass;

			if (typeof options.dateLimit === 'object')
				this.dateLimit = options.dateLimit;

			if (typeof options.locale === 'object') {

				if (typeof options.locale.daysOfWeek === 'object') {
					// Create a copy of daysOfWeek to avoid modification of original
					// options object for reusability in multiple daterangepicker instances
					this.locale.daysOfWeek = options.locale.daysOfWeek.slice();
				}

				if (typeof options.locale.monthNames === 'object') {
					this.locale.monthNames = options.locale.monthNames.slice();
				}

				if (typeof options.locale.firstDay === 'number') {
					this.locale.firstDay = options.locale.firstDay;
				}

				if (typeof options.locale.applyLabel === 'string') {
					this.locale.applyLabel = options.locale.applyLabel;
				}

				if (typeof options.locale.cancelLabel === 'string') {
					this.locale.cancelLabel = options.locale.cancelLabel;
				}

				if (typeof options.locale.fromLabel === 'string') {
					this.locale.fromLabel = options.locale.fromLabel;
				}

				if (typeof options.locale.toLabel === 'string') {
					this.locale.toLabel = options.locale.toLabel;
				}

				if (typeof options.locale.weekLabel === 'string') {
					this.locale.weekLabel = options.locale.weekLabel;
				}

				if (typeof options.locale.customRangeLabel === 'string') {
					this.locale.customRangeLabel = options.locale.customRangeLabel;
				}

				if (typeof options.locale.noRangeLabel === 'string') {
					this.locale.noRangeLabel = options.locale.noRangeLabel;
				}
			}

			if (typeof options.opens === 'string')
				this.opens = options.opens;

			if (typeof options.showNoRange === 'boolean') {
				this.showNoRange = options.showNoRange;
			}

			if (typeof options.showWeekNumbers === 'boolean') {
				this.showWeekNumbers = options.showWeekNumbers;
			}

			if (typeof options.buttonClasses === 'string') {
				this.buttonClasses = [options.buttonClasses];
			}

			if (typeof options.buttonClasses === 'object') {
				this.buttonClasses = options.buttonClasses;
			}

			if (typeof options.showDropdowns === 'boolean') {
				this.showDropdowns = options.showDropdowns;
			}

			if (typeof options.singleDatePicker === 'boolean') {
				this.singleDatePicker = options.singleDatePicker;
			}

			if (typeof options.timePicker === 'boolean') {
				this.timePicker = options.timePicker;
			}

			if (typeof options.timePickerIncrement === 'number') {
				this.timePickerIncrement = options.timePickerIncrement;
			}

			if (typeof options.timePicker12Hour === 'boolean') {
				this.timePicker12Hour = options.timePicker12Hour;
			}

			// update day names order to firstDay
			if (this.locale.firstDay != 0) {
				var iterator = this.locale.firstDay;
				while (iterator > 0) {
					this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift());
					iterator--;
				}
			}

			var start, end, range;

			//if no start/end dates set, check if an input element contains initial values
			if (typeof options.startDate === 'undefined' && typeof options.endDate === 'undefined') {
				if ($(this.element).is('input[type=text]')) {
					var val = $(this.element).val();
					var split = val.split(this.separator);
					start = end = null;
					if (split.length == 2) {
						start = moment(split[0], this.format);
						end = moment(split[1], this.format);
					} else if (this.singleDatePicker) {
						start = moment(val, this.format);
						end = moment(val, this.format);
					}
					if (start !== null && end !== null) {
						this.startDate = start;
						this.endDate = end;
					}
				}
			}

			if (typeof options.ranges === 'object') {
				// Test hooks for accessing these ranges
				var dataIds = {};

				for (range in options.ranges) {

					start = moment(options.ranges[range].range[0]);
					end = moment(options.ranges[range].range[1]);

					// If we have a min/max date set, bound this range
					// to it, but only if it would otherwise fall
					// outside of the min/max.
					if (this.minDate && start.isBefore(this.minDate))
						start = moment(this.minDate);

					if (this.maxDate && end.isAfter(this.maxDate))
						end = moment(this.maxDate);

					// If the end of the range is before the minimum (if min is set) OR
					// the start of the range is after the max (also if set) don't display this
					// range option.
					if ((this.minDate && end.isBefore(this.minDate)) || (this.maxDate && start.isAfter(this.maxDate))) {
						continue;
					}

					dataIds[options.ranges[range].Label] = range;
					this.ranges[options.ranges[range].Label] = [start, end];
				}

				var list = '<ul>';
				if (this.showNoRange)
				{
					list += '<li>' + this.locale.noRangeLabel + '</li>';
					this.rangeCount++;
				}
				for (range in this.ranges) {
					list += '<li ' + 'data-id=\'' + options.dataid + '_' + dataIds[range] + '\'>' + range + '</li>';
					this.rangeCount++;
				}
				list += '<li>' + this.locale.customRangeLabel + '</li>';
				this.rangeCount++;
				list += '</ul>';
				this.container.find('.ranges ul').remove();
				this.container.find('.ranges').prepend(list);
			}

			if (typeof callback === 'function') {
				this.cb = callback;
			}

			if (!this.timePicker) {
				if (this.startDate != null && this.endDate != null) {
					this.startDate = this.startDate.startOf('day');
					this.endDate = this.endDate.endOf('day');
				}
			}

			if (this.singleDatePicker) {
				this.opens = 'right';
				this.container.find('.calendar.right').show();
				this.container.find('.calendar.left').hide();
				this.container.find('.ranges').hide();
				if (!this.container.find('.calendar.right').hasClass('single'))
					this.container.find('.calendar.right').addClass('single');
			} else {
				this.container.find('.calendar.right').removeClass('single');
				this.container.find('.ranges').show();
			}

			this.oldStartDate = (this.startDate == null) ? null : this.startDate.clone();
			this.oldEndDate = (this.endDate == null) ? null : this.endDate.clone();
			this.oldChosenLabel = this.chosenLabel;

			if (this.startDate != null) {
				this.leftCalendar = {
					month: moment([this.startDate.year(), this.startDate.month(), 1, this.startDate.hour(), this.startDate.minute()]),
					calendar: []
				};
			}
			else {
				this.leftCalendar = {
					month: moment([moment().year(), moment().month(), 1, moment().hour(), moment().minute()]),
					calendar: []
				};
			}

			if (this.endDate != null) {
				this.rightCalendar = {
					month: moment([this.endDate.year(), this.endDate.month(), 1, this.endDate.hour(), this.endDate.minute()]),
					calendar: []
				};
			}
			else {
				this.rightCalendar = {
					month: moment([moment().year(), moment().month() + 1, 1, moment().hour(), moment().minute()]),
					calendar: []
				};
			}

			if (this.opens == 'right') {
				// swap calendar positions
				var left = this.container.find('.calendar.left');
				var right = this.container.find('.calendar.right');

				if (right.hasClass('single')) {
					right.removeClass('single');
					left.addClass('single');
				}

				left.removeClass('left').addClass('right');
				right.removeClass('right').addClass('left');

				if (this.singleDatePicker) {
					left.show();
					right.hide();
				}
			}

			if (typeof options.ranges === 'undefined' && !this.singleDatePicker) {
				this.container.addClass('show-calendar');
			}

			this.container.addClass('opens' + this.opens);

			this.updateView();
			this.updateCalendars();
			this.hideCalendars();
			this.notify();
		},

		setStartDate: function (startDate) {
			if (typeof startDate === 'string')
				this.startDateString = startDate;

			if (typeof startDate === 'object')
				this.startDate = moment(startDate);

			if (!this.timePicker)
				this.startDate = this.startDate.startOf('day');

			this.oldStartDate = (this.startDate == null) ? null : this.startDate.clone();

			this.updateView();
			this.updateCalendars();
			this.updateInputText();
		},

		setEndDate: function (endDate) {
			if (typeof endDate === 'string')
				this.endDateString = endDate;

			if (typeof endDate === 'object')
				this.endDate = moment(endDate);

			if (!this.timePicker)
				this.endDate = this.endDate.endOf('day');

			this.oldEndDate = (this.endDate == null) ? null : this.endDate.clone();

			this.updateView();
			this.updateCalendars();
			this.updateInputText();
		},

		updateView: function () {
			if (this.startDate == null || this.endDate == null)
				return;
			this.leftCalendar.month.month(this.startDate.month()).year(this.startDate.year()).hour(this.startDate.hour()).minute(this.startDate.minute());
			this.rightCalendar.month.month(this.endDate.month()).year(this.endDate.year()).hour(this.endDate.hour()).minute(this.endDate.minute());
			this.updateFormInputs();
		},

		updateFormInputs: function () {
			this.container.find('input[name=daterangepicker_start]').val(this.startDateString);
			this.container.find('input[name=daterangepicker_end]').val(this.endDateString);
			if (this.startDate == null || this.endDate == null)
				return;

			if (this.startDate.isSame(this.endDate) || this.startDate.isBefore(this.endDate)) {
				this.container.find('button.interactionCentricDateRangeApply').removeAttr('disabled');
			} else {
				this.container.find('button.interactionCentricDateRangeApply').attr('disabled', 'disabled');
			}
		},

		updateFromControl: function () {
			if (!this.element.is('input')) return;
			if (!this.element.val().length) return;

			var dateString = this.element.val().split(this.separator),
				start = null,
				end = null;

			if (dateString.length === 2) {
				start = moment(dateString[0], this.format);
				end = moment(dateString[1], this.format);
			}

			if (this.singleDatePicker || start === null || end === null) {
				start = moment(this.element.val(), this.format);
				end = start;
			}

			if (end.isBefore(start)) return;

			this.oldStartDate = (this.startDate == null) ? null : this.startDate.clone();
			this.oldEndDate = this.endDate.clone();

			this.startDate = start;
			this.endDate = end;

			if (this.hasBoundingDatesChanged())
				this.notify();

			this.updateCalendars();
		},

		notify: function () {
			this.updateView();
			this.cb(this.startDate, this.endDate, this.chosenLabel);
		},

		move: function () {
			var parentOffset = { top: 0, left: 0 };
			var parentRightEdge = $(window).width();
			var parentBottomEdge = $(window).height();
			if (!this.parentEl.is('body')) {
				parentOffset = {
					top: this.parentEl.offset().top - this.parentEl.scrollTop(),
					left: this.parentEl.offset().left - this.parentEl.scrollLeft()
				};
				parentRightEdge = this.parentEl[0].clientWidth + this.parentEl.offset().left;
			}

			if (this.opens == 'left') {
				if (this.element.offset().top + this.element.outerHeight() + this.getMaxHeight() <= parentBottomEdge) {
					this.container.css({
						top: this.element.offset().top + this.element.outerHeight() - parentOffset.top,
						right: parentRightEdge - this.element.offset().left - this.element.outerWidth(),
						left: 'auto'
					});
				} else {
					this.container.css({
						bottom: $(window).height() - this.element.offset().top - this.element.outerHeight(),
						right: parentRightEdge - this.element.offset().left - this.element.outerWidth(),
						top: 'auto',
						left: 'auto'
					});
				}
				if (this.container.offset().left < 0) {
					this.container.css({
						right: 'auto',
						left: 9
					});
				}
			} else {
				this.container.css({
					top: this.element.offset().top + this.element.outerHeight() - parentOffset.top,
					left: this.element.offset().left - parentOffset.left,
					right: 'auto'
				});
				if (this.container.offset().left + this.container.outerWidth() > $(window).width()) {
					this.container.css({
						left: 'auto',
						right: 0
					});
				}
			}

			this.calculateMaxHeight();
		},

		getMaxHeight: function () {
			var maxHeight;
			if (this.container.hasClass("show-calendar")) {
				maxHeight = 355;
			} else {
				maxHeight = (this.rangeCount * 30) + 2;
			}
			return maxHeight;
		},

		calculateMaxHeight: function () {
			var maxHeight;
			if (this.container.hasClass("show-calendar")) {
				maxHeight = 355;
			} else {
				maxHeight = (this.rangeCount * 30) + 2;
			}

			this.container.css({
				"max-height": maxHeight + "px"
			});
		},

		toggle: function (e) {
			if (this.element.hasClass('active')) {
				this.hide();
			} else {
				this.show();
			}
		},

		show: function (e) {
			if (this.isShowing) return;

			this.element.addClass('active');
			this.container.show();
			this.move();

			// Create a click proxy that is private to this instance of datepicker, for unbinding
			this._outsideClickProxy = $.proxy(function (e) { this.outsideClick(e); }, this);
			// Bind global datepicker mousedown for hiding and
			$(document)
			  .on('mousedown.daterangepicker', this._outsideClickProxy)
			  // also explicitly play nice with Bootstrap dropdowns, which stopPropagation when clicking them
			  .on('click.daterangepicker', '[data-toggle=dropdown]', this._outsideClickProxy)
			  // and also close when focus changes to outside the picker (eg. tabbing between controls)
			  .on('focusin.daterangepicker', this._outsideClickProxy);

			this.isShowing = true;
			this.element.trigger('show.daterangepicker', this);
		},

		outsideClick: function (e) {
			var target = $(e.target);
			// if the page is clicked anywhere except within the daterangerpicker/button
			// itself then call this.hide()
			if (
				target.closest(this.element).length ||
				target.closest(this.container).length ||
				target.closest('.calendar-date').length
				) return;
			this.container.removeClass('show-calendar');
			this.clickCancel(null);
			this.hide();
		},

		hide: function (e) {
			if (!this.isShowing) return;

			$(document)
			  .off('mousedown.daterangepicker')
			  .off('click.daterangepicker', '[data-toggle=dropdown]')
			  .off('focusin.daterangepicker');

			this.element.removeClass('active');
			this.container.hide();
			this.isShowing = false;
			this.element.trigger('hide.daterangepicker', this);
		},

		enterRange: function (e) {
			// mouse pointer has entered a range label
			var label = e.target.innerHTML;
			if (label == this.locale.customRangeLabel || label == this.locale.noRangeLabel) {
				this.updateView();
			} else {
				var dates = this.ranges[label];
				this.container.find('input[name=daterangepicker_start]').val(dates[0].format(this.format));
				this.container.find('input[name=daterangepicker_end]').val(dates[1].format(this.format));
			}
		},

		showCalendars: function () {
			this.container.addClass('show-calendar');
			this.move();
			this.calculateMaxHeight();
			this.element.trigger('showCalendar.daterangepicker', this);
		},

		hideCalendars: function () {
			this.container.removeClass('show-calendar');
			this.element.trigger('hideCalendar.daterangepicker', this);
		},

		// when a date is typed into the start to end date textboxes
		inputsChanged: function (e) {
			var el = $(e.target);
			var date = moment(el.val());
			if (!date.isValid()) return;

			var startDate, endDate;
			if (el.attr('name') === 'daterangepicker_start') {
				startDate = date;
				endDate = this.endDate;
			} else {
				startDate = this.startDate;
				endDate = date;
			}
			this.setCustomDates(startDate, endDate);
		},

		inputsKeydown: function (e) {
			if (e.keyCode === 13) {
				this.inputsChanged(e);
				this.notify();
			}
		},

		updateInputText: function () {
			if (this.element.is('input') && !this.singleDatePicker) {
				this.element.val(this.startDateString + this.separator + this.endDateString);
			} else if (this.element.is('input')) {
				this.element.val(this.startDateString);
			}
		},

		clickRange: function (e) {
			var label = e.target.innerHTML;
			this.chosenLabel = label;
			if (label == this.locale.customRangeLabel) {
				this.showCalendars();
			} else if (label == this.locale.noRangeLabel) {
				this.startDate = null;
				this.endDate = null;

				this.updateCalendars();

				this.hideCalendars();
				this.hide();

				if (this.hasBoundingDatesChanged())
					this.notify();

				this.oldStartDate = null;
				this.oldEndDate = null;

				this.element.trigger('apply.daterangepicker', this);
			} else {
				var dates = this.ranges[label];

				this.startDate = dates[0];
				this.endDate = dates[1];
				this.startDateString = this.startDate.toISOString();
				this.endDateString = this.endDate.toISOString();

				if (!this.timePicker) {
					this.startDate.startOf('day');
					this.endDate.endOf('day');
				}

				this.leftCalendar.month.month(this.startDate.month()).year(this.startDate.year()).hour(this.startDate.hour()).minute(this.startDate.minute());
				this.rightCalendar.month.month(this.endDate.month()).year(this.endDate.year()).hour(this.endDate.hour()).minute(this.endDate.minute());
				this.updateCalendars();

				this.updateInputText();

				this.hideCalendars();
				this.hide();

				if (this.hasBoundingDatesChanged())
					this.notify();

				this.oldStartDate = (this.startDate == null) ? null : this.startDate.clone();
				this.oldEndDate = (this.endDate == null) ? null : this.endDate.clone();

				this.element.trigger('apply.daterangepicker', this);
			}
		},

		clickPrev: function (e) {
			var cal = $(e.target).parents('.calendar');
			if (cal.hasClass('left')) {
				this.leftCalendar.month.subtract(1, 'month');
			} else {
				this.rightCalendar.month.subtract(1, 'month');
			}
			this.updateCalendars();
		},

		clickNext: function (e) {
			var cal = $(e.target).parents('.calendar');
			if (cal.hasClass('left')) {
				this.leftCalendar.month.add(1, 'month');
			} else {
				this.rightCalendar.month.add(1, 'month');
			}
			this.updateCalendars();
		},

		hoverDate: function (e) {
			var title = $(e.target).attr('data-title');
			var row = title.substr(1, 1);
			var col = title.substr(3, 1);
			var cal = $(e.target).parents('.calendar');

			if (cal.hasClass('left')) {
				this.container.find('input[name=daterangepicker_start]').val(this.leftCalendar.calendar[row][col].format(this.format));
			} else {
				this.container.find('input[name=daterangepicker_end]').val(this.rightCalendar.calendar[row][col].format(this.format));
			}
		},

		setCustomDates: function (startDate, endDate) {
			this.chosenLabel = this.locale.customRangeLabel;
			if (startDate.isAfter(endDate)) {
				var difference = this.endDate.diff(this.startDate);
				endDate = moment(startDate).add(difference, 'ms');
			}
			this.startDate = startDate;
			this.endDate = endDate;

			this.updateView();
			this.updateCalendars();
		},

		clickDate: function (e) {
			var title = $(e.target).attr('data-title');
			var row = title.substr(1, 1);
			var col = title.substr(3, 1);
			var cal = $(e.target).parents('.calendar');

			var startDate, endDate;
			if (cal.hasClass('left')) {
				startDate = this.leftCalendar.calendar[row][col];
				endDate = (this.endDate == null) ? startDate.clone().add(1, 'month') : this.endDate;
				if (typeof this.dateLimit === 'object') {
					var maxDate = moment(startDate).add(this.dateLimit).startOf('day');
					if (endDate.isAfter(maxDate)) {
						endDate = maxDate;
					}
				}
			} else {
				endDate = this.rightCalendar.calendar[row][col];
				startDate = (this.startDate == null) ? endDate.clone().subtract(1, 'month') : this.startDate;
				if (typeof this.dateLimit === 'object') {
					var minDate = moment(endDate).subtract(this.dateLimit).startOf('day');
					if (startDate.isBefore(minDate)) {
						startDate = minDate;
					}
				}
			}

			if (this.singleDatePicker && cal.hasClass('left')) {
				endDate = startDate.clone();
			} else if (this.singleDatePicker && cal.hasClass('right')) {
				startDate = endDate.clone();
			}

			cal.find('td').removeClass('active');

			$(e.target).addClass('active');

			this.setCustomDates(startDate, endDate);

			if (!this.timePicker)
				endDate.endOf('day');

			if (this.singleDatePicker)
				this.clickApply();
		},

		hasBoundingDatesChanged: function () {
			if ((this.startDate == null && this.oldStartDate == null)
				&& (this.endDate == null && this.oldEndDate == null))
				return false;

			return (this.startDate == null && this.oldStartDate != null)
				||(this.startDate != null && this.oldStartDate == null)
				||(this.endDate == null && this.oldEndDate != null)
				||(this.endDate != null && this.oldEndDate == null)
				||!this.startDate.isSame(this.oldStartDate)
				|| !this.endDate.isSame(this.oldEndDate);
		},

		clickApply: function (e) {
			if (this.hasBoundingDatesChanged())
				this.notify();

			this.oldStartDate = (this.startDate == null) ? null : this.startDate.clone();
			this.oldEndDate = (this.endDate == null) ? null : this.endDate.clone();
			this.hide();
			this.hideCalendars();
			this.updateCalendars();
			this.element.trigger('apply.daterangepicker', this);
		},

		clickCancel: function (e) {
			this.startDate = this.oldStartDate;
			this.endDate = this.oldEndDate;
			this.chosenLabel = this.oldChosenLabel;
			this.updateView();
			this.updateCalendars();
			this.hideCalendars();

			this.calculateMaxHeight();

			this.element.trigger('cancel.daterangepicker', this);
		},

		updateMonthYear: function (e) {
			var isLeft = $(e.target).closest('.calendar').hasClass('left'),
				leftOrRight = isLeft ? 'left' : 'right',
				cal = this.container.find('.calendar.' + leftOrRight);

			// Month must be Number for new moment versions
			var month = parseInt(cal.find('.monthselect').val(), 10);
			var year = cal.find('.yearselect').val();

			this[leftOrRight + 'Calendar'].month.month(month).year(year);
			this.updateCalendars();
		},

		updateTime: function (e) {

			var cal = $(e.target).closest('.calendar'),
				isLeft = cal.hasClass('left');

			var hour = parseInt(cal.find('.hourselect').val(), 10);
			var minute = parseInt(cal.find('.minuteselect').val(), 10);

			if (this.timePicker12Hour) {
				var ampm = cal.find('.ampmselect').val();
				if (ampm === 'PM' && hour < 12)
					hour += 12;
				if (ampm === 'AM' && hour === 12)
					hour = 0;
			}

			if (isLeft) {
				var start = this.startDate.clone();
				start.hour(hour);
				start.minute(minute);
				this.startDate = start;
				this.leftCalendar.month.hour(hour).minute(minute);
			} else {
				var end = this.endDate.clone();
				end.hour(hour);
				end.minute(minute);
				this.endDate = end;
				this.rightCalendar.month.hour(hour).minute(minute);
			}

			this.updateCalendars();
		},

		updateCalendars: function () {
			if ((this.startDate == null) || (this.endDate == null)) {
				this.container.find('.ranges li').removeClass('active');

				this.leftCalendar.calendar = this.buildCalendar(this.leftCalendar.month.month(), this.leftCalendar.month.year(), this.leftCalendar.month.hour(), this.leftCalendar.month.minute(), 'left');
				this.rightCalendar.calendar = this.buildCalendar(this.rightCalendar.month.month(), this.rightCalendar.month.year(), this.rightCalendar.month.hour(), this.rightCalendar.month.minute(), 'right');
				this.container.find('.calendar.left').empty().html(this.renderCalendar(this.leftCalendar.calendar, null, this.minDate, this.maxDate));
				this.container.find('.calendar.right').empty().html(this.renderCalendar(this.rightCalendar.calendar, null, minDate, this.maxDate));
				this.chosenLabel = this.container.find('.ranges li:eq(0)')
							.addClass('active').html();

				return;
			}

			this.leftCalendar.calendar = this.buildCalendar(this.leftCalendar.month.month(), this.leftCalendar.month.year(), this.leftCalendar.month.hour(), this.leftCalendar.month.minute(), 'left');
			this.rightCalendar.calendar = this.buildCalendar(this.rightCalendar.month.month(), this.rightCalendar.month.year(), this.rightCalendar.month.hour(), this.rightCalendar.month.minute(), 'right');
			this.container.find('.calendar.left').empty().html(this.renderCalendar(this.leftCalendar.calendar, this.startDate, this.minDate, this.maxDate));

			var minDate = this.minDate;
			if (!this.singleDatePicker)
				minDate = this.startDate;
			this.container.find('.calendar.right').empty().html(this.renderCalendar(this.rightCalendar.calendar, this.endDate, minDate, this.maxDate));

			this.container.find('.ranges li').removeClass('active');
			var customRange = true;
			var i = 0;
			for (var range in this.ranges) {
				if (this.timePicker) {
					if (this.startDate.isSame(this.ranges[range][0]) && this.endDate.isSame(this.ranges[range][1])) {
						customRange = false;
						this.chosenLabel = this.container.find('.ranges li:eq(' + i + ')')
							.addClass('active').html();
					}
				} else {
					//ignore times when comparing dates if time picker is not enabled
					if (this.startDate.format('YYYY-MM-DD') == this.ranges[range][0].format('YYYY-MM-DD') && this.endDate.format('YYYY-MM-DD') == this.ranges[range][1].format('YYYY-MM-DD')) {
						customRange = false;
						var labelIndex = this.showNoRange ? (i + 1) : i;
						this.chosenLabel = this.container.find('.ranges li:eq(' + labelIndex + ')')
							.addClass('active').html();
					}
				}
				i++;
			}
			if (customRange) {
				this.chosenLabel = this.container.find('.ranges li:last').addClass('active').html();
				this.showCalendars();
			}
		},

		buildCalendar: function (month, year, hour, minute, side) {
			var daysInMonth = moment([year, month]).daysInMonth();
			var firstDay = moment([year, month, 1]);
			var lastDay = moment([year, month, daysInMonth]);
			var lastMonth = moment(firstDay).subtract(1, 'month').month();
			var lastYear = moment(firstDay).subtract(1, 'month').year();

			var daysInLastMonth = moment([lastYear, lastMonth]).daysInMonth();

			var dayOfWeek = firstDay.day();

			var i;

			//initialize a 6 rows x 7 columns array for the calendar
			var calendar = [];
			calendar.firstDay = firstDay;
			calendar.lastDay = lastDay;

			for (i = 0; i < 6; i++) {
				calendar[i] = [];
			}

			//populate the calendar with date objects
			var startDay = daysInLastMonth - dayOfWeek + this.locale.firstDay + 1;
			if (startDay > daysInLastMonth)
				startDay -= 7;

			if (dayOfWeek == this.locale.firstDay)
				startDay = daysInLastMonth - 6;

			var curDate = moment([lastYear, lastMonth, startDay, 12, minute]);
			var col, row;
			for (i = 0, col = 0, row = 0; i < 42; i++, col++, curDate = moment(curDate).add(24, 'hour')) {
				if (i > 0 && col % 7 === 0) {
					col = 0;
					row++;
				}
				calendar[row][col] = curDate.clone().hour(hour);
				curDate.hour(12);
			}

			return calendar;
		},

		renderDropdowns: function (selected, minDate, maxDate) {
			var currentMonth = selected.month();
			var monthHtml = '<select class="monthselect">';
			var inMinYear = false;
			var inMaxYear = false;
			var monthNames = [];
			monthNames[0] = this.monthlabelForJanuary;
			monthNames[1] = this.monthlabelForFebruary;
			monthNames[2] = this.monthlabelForMarch;
			monthNames[3] = this.monthlabelForApril;
			monthNames[4] = this.monthlabelForMay;
			monthNames[5] = this.monthlabelForJune;
			monthNames[6] = this.monthlabelForJuly;
			monthNames[7] = this.monthlabelForAugust;
			monthNames[8] = this.monthlabelForSeptember;
			monthNames[9] = this.monthlabelForOctober;
			monthNames[10] = this.monthlabelForNovember;
			monthNames[11] = this.monthlabelForDecember;

			if (minDate != null && maxDate != null)
			{
				for (var m = 0; m < 12; m++) {
					if ((!inMinYear || m >= minDate.month()) && (!inMaxYear || m <= maxDate.month())) {
						monthHtml += "<option value='" + m + "'" + (m === currentMonth ? " selected='selected'" : "") + ">" + monthNames[m] + "</option>";
					}
				}
			}
			else
			{
				for (var m = 0; m < 12; m++) {
					monthHtml += "<option value='" + m + "'" + (m === currentMonth ? " selected='selected'" : "") + ">" + monthNames[m] + "</option>";
				}
			}

			monthHtml += "</select>";

			var currentYear = selected.year();
			var maxYear = (maxDate && maxDate.year()) || (currentYear + 5);
			var minYear = (minDate && minDate.year()) || (currentYear - 50);
			var yearHtml = '<select class="yearselect">';

			for (var y = minYear; y <= maxYear; y++) {
				yearHtml += '<option value="' + y + '"' +
					(y === currentYear ? ' selected="selected"' : '') +
					'>' + y + '</option>';
			}

			yearHtml += '</select>';

			return monthHtml + yearHtml;
		},

		renderCalendar: function (calendar, selected, minDate, maxDate) {

			var html = '<div class="calendar-date">';
			html += '<table class="table-condensed">';
			html += '<thead>';
			html += '<tr>';

			// add empty cell for week number
			if (this.showWeekNumbers)
				html += '<th></th>';

			if (!minDate || minDate.isBefore(calendar.firstDay)) {
				html += '<th class="prev available"><span class="symbolFont LeftArrowHead-symbol"></span></th>';
			} else {
				html += '<th></th>';
			}

			var dateHtml = this.locale.monthNames[calendar[1][1].month()] + calendar[1][1].format(" YYYY");

			if (this.showDropdowns) {
				dateHtml = this.renderDropdowns(calendar[1][1], minDate, maxDate);
			}

			html += '<th colspan="5" class="month">' + dateHtml + '</th>';
			if (!maxDate || maxDate.isAfter(calendar.lastDay)) {
				html += '<th class="next available"><span class="symbolFont Collapsed-symbol"></i></th>';
			} else {
				html += '<th></th>';
			}

			html += '</tr>';
			html += '<tr>';

			// add week number label
			if (this.showWeekNumbers)
				html += '<th class="week">' + this.locale.weekLabel + '</th>';

			html += '<th>' + this.weekLabelForSunday + '</th>';
			html += '<th>' + this.weekLabelForMonday + '</th>';
			html += '<th>' + this.weekLabelForTuesday + '</th>';
			html += '<th>' + this.weekLabelForWednesday + '</th>';
			html += '<th>' + this.weekLabelForThursday + '</th>';
			html += '<th>' + this.weekLabelForFriday + '</th>';
			html += '<th>' + this.weekLabelForSaturday + '</th>';

			html += '</tr>';
			html += '</thead>';
			html += '<tbody>';

			for (var row = 0; row < 6; row++) {
				html += '<tr>';

				// add week number
				if (this.showWeekNumbers)
					html += '<td class="week">' + calendar[row][0].week() + '</td>';

				for (var col = 0; col < 7; col++) {
					var cname = 'available ';
					cname += (calendar[row][col].month() == calendar[1][1].month()) ? '' : 'off';

					if ((minDate && calendar[row][col].isBefore(minDate, 'day')) || (maxDate && calendar[row][col].isAfter(maxDate, 'day'))) {
						cname = ' off disabled ';
					} else if (selected != null && calendar[row][col].format('YYYY-MM-DD') == selected.format('YYYY-MM-DD')) {
						cname += ' active ';
						if (calendar[row][col].format('YYYY-MM-DD') == this.startDate.format('YYYY-MM-DD')) {
							cname += ' start-date ';
						}
						if (calendar[row][col].format('YYYY-MM-DD') == this.endDate.format('YYYY-MM-DD')) {
							cname += ' end-date ';
						}
					} else if (this.startDate != null && this.endDate != null)
					{
						if (calendar[row][col] >= this.startDate && calendar[row][col] <= this.endDate) {
							cname += ' in-range ';
							if (calendar[row][col].isSame(this.startDate)) { cname += ' start-date '; }
							if (calendar[row][col].isSame(this.endDate)) { cname += ' end-date '; }
						}
					}
					else if (this.startDate == null || this.endDate == null)
					{
						cname += ' in-range ';
					}

					var _today = moment().startOf('day');
					if (calendar[row][col].startOf('day').isSame(_today))
					{
						cname += ' today';
					}

					var title = 'r' + row + 'c' + col;
					html += '<td class="' + cname.replace(/\s+/g, ' ').replace(/^\s?(.*?)\s?$/, '$1') + '" data-title="' + title + '">' + calendar[row][col].date() + '</td>';
				}
				html += '</tr>';
			}

			html += '</tbody>';
			html += '</table>';
			html += '</div>';

			var i;
			if (this.timePicker) {

				html += '<div class="calendar-time">';
				html += '<select class="hourselect">';
				var start = 0;
				var end = 23;
				var selected_hour = selected.hour();
				if (this.timePicker12Hour) {
					start = 1;
					end = 12;
					if (selected_hour >= 12)
						selected_hour -= 12;
					if (selected_hour === 0)
						selected_hour = 12;
				}

				for (i = start; i <= end; i++) {
					if (i == selected_hour) {
						html += '<option value="' + i + '" selected="selected">' + i + '</option>';
					} else {
						html += '<option value="' + i + '">' + i + '</option>';
					}
				}

				html += '</select> : ';

				html += '<select class="minuteselect">';

				for (i = 0; i < 60; i += this.timePickerIncrement) {
					var num = i;
					if (num < 10)
						num = '0' + num;
					if (i == selected.minute()) {
						html += '<option value="' + i + '" selected="selected">' + num + '</option>';
					} else {
						html += '<option value="' + i + '">' + num + '</option>';
					}
				}

				html += '</select> ';

				if (this.timePicker12Hour) {
					html += '<select class="ampmselect">';
					if (selected.hour() >= 12) {
						html += '<option value="AM">AM</option><option value="PM" selected="selected">PM</option>';
					} else {
						html += '<option value="AM" selected="selected">AM</option><option value="PM">PM</option>';
					}
					html += '</select>';
				}

				html += '</div>';

			}

			return html;

		},

		remove: function () {

			this.container.remove();
			this.element.off('.daterangepicker');
			this.element.removeData('daterangepicker');

		}

	};

	$.fn.daterangepicker = function (options, cb) {
		this.each(function () {
			var el = $(this);
			if (el.data('daterangepicker'))
				el.data('daterangepicker').remove();
			el.data('daterangepicker', new DateRangePicker(el, options, cb));
		});
		return this;
	};

}));
