Type.registerNamespace("Mscrm");
Mscrm.Connection = function() {};
Mscrm.Connection.preSelectObjectType = function(sourceElementId, roleLookupElementId, peerRoleLookupElementId) {
    var $v_0 = Mscrm.FormControlInputBehavior.GetBehavior(roleLookupElementId),
        $v_1 = Mscrm.FormControlInputBehavior.GetBehavior(peerRoleLookupElementId),
        $v_2 = Mscrm.FormControlInputBehavior.GetBehavior(sourceElementId),
        $v_3 = "2";
    if (!$v_2.get_dataValue()) {
        if ($v_0.get_dataValue()) {
            var $v_4 = new RemoteCommand("Connection", "GetDefaultTypeForRole", null);
            $v_4.SetParameter("roleId", $v_0.get_typedDataValue()[0].id);
            var $v_5 = $v_4.Execute(null);
            $v_3 = $v_5.ReturnValue.toString()
        } else if ($v_1.get_dataValue()) {
            var $v_6 = new RemoteCommand("Connection", "GetDefaultTypeForReciprocalRole", null);
            $v_6.SetParameter("roleId", $v_1.get_typedDataValue()[0].id);
            var $v_7 = $v_6.Execute(null);
            $v_3 = $v_7.ReturnValue.toString()
        }
    } else $v_3 = $v_2.get_typedDataValue()[0].type;
    $v_2.set_defaultType($v_3);
    $v_2.set_defaultViewId("");
    $v_2.onLookup(null)
};
Mscrm.Connection.setType = function(sourceElementId, peerRoleLookupElementId, peerRecordLookupElementId) {
    var $v_0 = Mscrm.FormControlInputBehavior.GetBehavior(peerRecordLookupElementId),
        $v_1 = Mscrm.FormControlInputBehavior.GetBehavior(peerRoleLookupElementId),
        $v_2 = Mscrm.FormControlInputBehavior.GetBehavior(sourceElementId);
    if ($v_2.get_dataValue()) {
        var $v_3 = new RemoteCommand("Connection", "GetPossibleRole", null);
        $v_3.SetParameter("roleId", $v_2.get_typedDataValue()[0].id);
        $v_1.get_dataValue() && $v_3.SetParameter("peerRoleId", $v_1.get_typedDataValue()[0].id);
        $v_3.SetParameter("associatedRecordOtc", $v_0.get_dataValue() ? $v_0.get_typedDataValue()[0].type : -1);
        var $v_4 = $v_3.Execute(null), $v_5 = $v_4.ReturnValue.string;
        if ($v_5) {
            if (!$v_1.get_dataValue() ||
                $v_1.get_dataValue() && $v_5[0].toLowerCase() !== $v_1.get_typedDataValue()[0].id.toLowerCase()) {
                var $v_6 = new LookupControlItem;
                $v_6.id = $v_5[0];
                $v_6.type = "3231";
                $v_6.name = $v_5[1];
                var $v_7 = [$v_6];
                $v_1.set_dataValue($v_7)
            }
        } else $v_1.Clear(false)
    }
};
Mscrm.Connection.applyFilter = function(sourceElementId, masterLookupElementId, peerLookupElementId) {
    var $v_0 = Mscrm.FormControlInputBehavior.GetBehavior(sourceElementId),
        $v_1 = Mscrm.FormControlInputBehavior.GetBehavior(masterLookupElementId),
        $v_2 = Mscrm.FormControlInputBehavior.GetBehavior(peerLookupElementId);
    if ($v_0
        .get_customViews() &&
        $v_0.get_customViews().length > 0)
        for (var $v_8 = $v_0.get_customViews()
                .length -
                1;
            $v_8 >= 0;
            $v_8--)
            $v_0.get_customViews()[$v_8].id === "{1DEC1FD6-8E84-4342-BA12-5DF9A981D7D2}" &&
                $v_0.get_customViews().splice($v_8, 1);
    var $v_3 = null, $v_4 = null, $v_5 = null, $v_6 = window.CONNECTION_FETCHXML;
    if ($v_1.get_dataValue() || $v_2.get_dataValue()) {
        $v_3 = XUI.Xml.LoadXml($v_6);
        $v_4 = XUI.Xml.SelectSingleNode($v_3, "fetch/entity", null)
    }
    if ($v_1.get_dataValue()) {
        var $v_9 = $v_1.get_typedDataValue()[0].type, $v_A = $v_3.createElement("link-entity");
        $v_5 = $v_3.createAttribute("name");
        $v_5.value = "connectionroleobjecttypecode";
        $v_A.attributes.setNamedItem($v_5);
        $v_5 = $v_3.createAttribute("from");
        $v_5.value = "connectionroleid";
        $v_A.attributes.setNamedItem($v_5);
        $v_5 = $v_3.createAttribute("to");
        $v_5.value = "connectionroleid";
        $v_A.attributes.setNamedItem($v_5);
        $v_5 = $v_3.createAttribute("link-type");
        $v_5.value = "inner";
        $v_A.attributes.setNamedItem($v_5);
        $v_4.appendChild($v_A);
        var $v_B = $v_3.createElement("filter");
        $v_5 = $v_3.createAttribute("type");
        $v_5.value = "or";
        $v_B.attributes.setNamedItem($v_5);
        $v_A.appendChild($v_B);
        var $v_C = $v_3.createElement("condition");
        $v_5 = $v_3.createAttribute("attribute");
        $v_5.value = "associatedobjecttypecode";
        $v_C.attributes.setNamedItem($v_5);
        $v_5 = $v_3.createAttribute("operator");
        $v_5.value = "eq";
        $v_C.attributes.setNamedItem($v_5);
        $v_5 = $v_3.createAttribute("value");
        $v_5.value = $v_9;
        $v_C.attributes.setNamedItem($v_5);
        $v_B.appendChild($v_C);
        $v_C = $v_3.createElement("condition");
        $v_5 = $v_3.createAttribute("attribute");
        $v_5.value = "associatedobjecttypecode";
        $v_C.attributes.setNamedItem($v_5);
        $v_5 = $v_3.createAttribute("operator");
        $v_5.value = "eq";
        $v_C.attributes.setNamedItem($v_5);
        $v_5 = $v_3.createAttribute("value");
        $v_5.value = "0";
        $v_C.attributes.setNamedItem($v_5);
        $v_B.appendChild($v_C)
    }
    if ($v_2.get_dataValue()) {
        var $v_D = $v_3.createElement("link-entity");
        $v_5 = $v_3.createAttribute("name");
        $v_5.value = "connectionroleassociation";
        $v_D.attributes.setNamedItem($v_5);
        $v_5 = $v_3.createAttribute("from");
        $v_5.value = "connectionroleid";
        $v_D.attributes.setNamedItem($v_5);
        $v_5 = $v_3.createAttribute("to");
        $v_5.value = "connectionroleid";
        $v_D.attributes.setNamedItem($v_5);
        $v_5 = $v_3.createAttribute("link-type");
        $v_5.value = "inner";
        $v_D.attributes.setNamedItem($v_5);
        $v_4.appendChild($v_D);
        var $v_E = $v_3.createElement("filter");
        $v_5 = $v_3.createAttribute("type");
        $v_5.value = "and";
        $v_E.attributes.setNamedItem($v_5);
        $v_D.appendChild($v_E);
        var $v_F = $v_3.createElement("condition");
        $v_5 = $v_3.createAttribute("attribute");
        $v_5.value = "associatedconnectionroleid";
        $v_F.attributes.setNamedItem($v_5);
        $v_5 = $v_3.createAttribute("operator");
        $v_5.value = "eq";
        $v_F.attributes.setNamedItem($v_5);
        $v_5 = $v_3.createAttribute("value");
        $v_5.value = $v_2.get_typedDataValue()[0].id;
        $v_F.attributes.setNamedItem($v_5);
        $v_E.appendChild($v_F)
    }
    var $v_7 = $v_3 ? XUI.Xml.XMLSerializer.serializeToString($v_3) : $v_6;
    $v_0.AddCustomView("{1DEC1FD6-8E84-4342-BA12-5DF9A981D7D2}",
        "connectionrole",
        window.LOCID_CONNECTION_ROLE_VIEW_NAME,
        $v_7,
        window.CONNECTION_LAYOUTXML,
        true)
};
Mscrm.Connection.registerClass("Mscrm.Connection")