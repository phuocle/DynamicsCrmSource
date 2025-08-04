Type.registerNamespace("Mscrm");

function send() {
    var $v_0 = Xrm.Page.data.entity.attributes.get("from").getValue(), $v_1 = $v_0.toString().length;
    $v_1 <= 0 && Xrm.Utility.alertDialog(Xrm.Internal.getResourceString("LOCID_FAX_SENDER_REQUIRED"), null);
    var $v_2 = Xrm.Page.data.entity.attributes.get("to").getValue(), $v_3 = $v_2.toString().length;
    $v_3 <= 0 && Xrm.Utility.alertDialog(Xrm.Internal.getResourceString("LOCID_FAX_RECIPIENT_REQUIRED"), null);
    $v_3 > 1 && Xrm.Utility.alertDialog(Xrm.Internal.getResourceString("LOCID_FAX_TOO_MANY_RECIPIENTS"), null);
    var $v_4 = Xrm.Page.data.entity.getId().toString();
    Xrm.Internal.messages.sendFax(Microsoft.Crm.Client.Core.Framework.Guid.tryCreate($v_4), true)
}

function updateFaxNumber() {
    if (null != event.result) {
        var oItems = event.result.items;
        if (0 < oItems.length) {
            var oItem = oItems[0], oItemValue = oItem.keyValues["fax"];
            if (null == oItemValue) oItemValue = oItem.keyValues["address1_fax"];
            if (null != oItemValue) oItemValue = oItemValue.value;
            else oItemValue = "";
            var faxNumberControl = Xrm.Page.ui.controls.get("faxnumber");
            if (null != faxNumberControl && oItemValue != "") faxNumberControl.DataValue = oItemValue
        }
    }
}