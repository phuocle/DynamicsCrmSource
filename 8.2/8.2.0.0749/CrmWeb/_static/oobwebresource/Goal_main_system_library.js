Type.registerNamespace("Mscrm");
Mscrm.Form_onload = function() { Mscrm.GoalForm.goalFormOnLoad() };
Mscrm.parentgoalid_setadditionalparams = function(context) {
    Mscrm.GoalForm.parentgoalsetadditionalparams("parentgoalid")
};
Mscrm.metricid_setadditionalparams = function(context) { Mscrm.GoalForm.metricsetadditionalparams("metricid") };
Mscrm.rollupqueryactualmoneyid_setadditionalparams = function(context) {
    Mscrm.GoalForm.queryLookupsetadditionalparams("rollupqueryactualmoneyid")
};
Mscrm.rollupqueryinprogressmoneyid_setadditionalparams = function(context) {
    Mscrm.GoalForm.queryLookupsetadditionalparams("rollupqueryinprogressmoneyid")
};
Mscrm.rollupqueryestimatedmoneyid_setadditionalparams = function(context) {
    Mscrm.GoalForm.queryLookupsetadditionalparams("rollupquerycustommoneyid")
};
Mscrm.rollupqueryactualintegerid_setadditionalparams = function(context) {
    Mscrm.GoalForm.queryLookupsetadditionalparams("rollupqueryactualintegerid")
};
Mscrm.rollupqueryinprogressintegerid_setadditionalparams = function(context) {
    Mscrm.GoalForm.queryLookupsetadditionalparams("rollupqueryinprogressintegerid")
};
Mscrm.rollupqueryestimatedintegerid_setadditionalparams = function(context) {
    Mscrm.GoalForm.queryLookupsetadditionalparams("rollupquerycustomintegerid")
};
Mscrm.rollupqueryactualdecimalid_setadditionalparams = function(context) {
    Mscrm.GoalForm.queryLookupsetadditionalparams("rollupqueryactualdecimalid")
};
Mscrm.rollupqueryinprogressdecimalid_setadditionalparams = function(context) {
    Mscrm.GoalForm.queryLookupsetadditionalparams("rollupqueryinprogressdecimalid")
};
Mscrm.rollupqueryestimateddecimalid_setadditionalparams = function(context) {
    Mscrm.GoalForm.queryLookupsetadditionalparams("rollupquerycustomdecimalid")
};
Mscrm.parentgoalid_onchange = function() { Mscrm.GoalForm.onParentGoalChange() };
Mscrm.metricid_onchange = function(context) { Mscrm.GoalForm.onMetricChange(context.getEventSource().getName()) };
Mscrm.goalperiodtype_onchange = function() { Mscrm.GoalForm.onChangePeriodFields() };
Mscrm.rolluponlyfromchildgoals_onchange = function() { Mscrm.GoalForm.onChangeRollupOnlyFromChildGoals() };
Mscrm.rollupqueryactualmoneyid_onchange = function() { Mscrm.GoalForm.onQueryLookupChange() };
Mscrm.rollupqueryinprogressmoneyid_onchange = function() { Mscrm.GoalForm.onQueryLookupChange() };
Mscrm.rollupqueryestimatedmoneyid_onchange = function() { Mscrm.GoalForm.onQueryLookupChange() };
Mscrm.rollupqueryactualintegerid_onchange = function() { Mscrm.GoalForm.onQueryLookupChange() };
Mscrm.rollupqueryinprogressintegerid_onchange = function() { Mscrm.GoalForm.onQueryLookupChange() };
Mscrm.rollupqueryestimatedintegerid_onchange = function() { Mscrm.GoalForm.onQueryLookupChange() };
Mscrm.rollupqueryactualdecimalid_onchange = function() { Mscrm.GoalForm.onQueryLookupChange() };
Mscrm.rollupqueryinprogressdecimalid_onchange = function() { Mscrm.GoalForm.onQueryLookupChange() };
Mscrm.rollupqueryestimateddecimalid_onchange = function() { Mscrm.GoalForm.onQueryLookupChange() };
Mscrm.fiscalFields_onchange = function() { Mscrm.GoalForm.onChangeFiscalFields() };
Mscrm.dates_onchange = function() { Mscrm.GoalForm.onChangeGoalDate() }