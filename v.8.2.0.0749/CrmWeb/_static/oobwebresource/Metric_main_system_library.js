Type.registerNamespace("Mscrm");
Mscrm.Form_onload = function() { Mscrm.Metric.defaultAmountDataType() };
Mscrm.metrictype_onchange = function() { Mscrm.Metric.enableDisableGoalType() }