(function() {
if (window.PointerEvent || window.MSPointerEvent) {
	// Add IE specific touch events to chart
	Highcharts.wrap(Highcharts.Pointer.prototype, 'setDOMEvents', function (proceed) {
		var pointer = this,
			eventmap;

		proceed.apply(this);

		eventmap = [
			[this.chart.container, "PointerDown"],
			[this.chart.container, "PointerMove"],
			[document, "PointerUp"]
		];

		// Add the events based on the eventmap configuration
		Highcharts.each(eventmap, function (eventConfig) {
			var eventName = window.PointerEvent ? eventConfig[1].toLowerCase() : "MS" + eventConfig[1];

			// Register for removing in destroy (#2691)
			pointer._events.push([eventConfig[0], eventName, eventName]);
		});
	});
}})();