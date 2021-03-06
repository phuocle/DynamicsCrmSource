Type.registerNamespace("Mscrm");
Mscrm.ManagedPropertyUtil = function() {};
Mscrm.ManagedPropertyUtil.onPageLoad = function() {};
Mscrm.ManagedPropertyUtil.launchManagedPropertyDlg = function(objectTypeCode, oid) {
    if (objectTypeCode === 1033 || objectTypeCode === 1032) objectTypeCode = 1030;
    var $v_0 = Mscrm.ManagedPropertyUtil.$0(objectTypeCode);
    if ($v_0 < 1) {
        alert(window.LOCID_NO_MANAGEDPROPERTIES);
        return
    }
    var $v_1 = Mscrm.WindowInformation.getWindowInformation(9209),
        $v_2 = Mscrm.CrmUri.create("/tools/solution/managedproperty/managedpropertyeditor.aspx");
    $v_2.get_query()["objectid"] = oid;
    $v_2.get_query()["objecttypecode"] = objectTypeCode;
    var $v_3 = $v_1.Height;
    if ($v_0 === 1) $v_3 = $v_3 - 180;
    var $v_4 = Mscrm.ManagedPropertyUtil.performActionManagedProperty, $v_5 = new Xrm.DialogOptions;
    $v_5.height = $v_3;
    $v_5.width = $v_1.Width;
    Xrm.Internal.openDialog($v_2.toString(), $v_5, null, null, $v_4)
};
Mscrm.ManagedPropertyUtil.performActionManagedProperty = function(result) {
    if (result) {
        var $v_0 = Mscrm.Utilities.getCrmGrid();
        !IsNull($v_0) && $v_0.refresh()
    }
};
Mscrm.ManagedPropertyUtil.$0 = function($p0) {
    var $v_0 = new RemoteCommand("SystemCustomization", "NumberOfManagedProperties", null);
    $v_0.SetParameter("objectTypeCode", $p0.toString());
    var $v_1 = $v_0.Execute(null);
    return $v_1.ReturnValue
};
Mscrm.ManagedPropertyUtil.updateManagedProperties = function(xmlData) {
    var $v_0 = new RemoteCommand("SystemCustomization", "UpdateManagedProperties", null);
    $v_0.SetParameter("xmlData", xmlData);
    var $v_1 = $v_0.Execute(null);
    return $v_1.Success && $v_1.ReturnValue
};
Mscrm.ManagedPropertyUtil.registerClass("Mscrm.ManagedPropertyUtil")