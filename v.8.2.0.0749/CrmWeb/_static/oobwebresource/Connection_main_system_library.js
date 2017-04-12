Type.registerNamespace("Mscrm");
Mscrm.record1id_onclick = function() {
    Mscrm.Connection.preSelectObjectType("record1id", "record1roleid", "record2roleid")
};
Mscrm.record2id_onclick = function() {
    Mscrm.Connection.preSelectObjectType("record2id", "record2roleid", "record1roleid")
};
Mscrm.record1roleid_setadditionalparams = function(context) {
    Mscrm.Connection.applyFilter("record1roleid", "record1id", "record2roleid")
};
Mscrm.record2roleid_setadditionalparams = function(context) {
    Mscrm.Connection.applyFilter("record2roleid", "record2id", "record1roleid")
};
Mscrm.record1roleid_onchange = function(context) {
    Mscrm.Connection.setType(context.getEventSource().getName(), "record2roleid", "record2id")
};
Mscrm.record2roleid_onchange = function(context) {
    Mscrm.Connection.setType(context.getEventSource().getName(), "record1roleid", "record1id")
}