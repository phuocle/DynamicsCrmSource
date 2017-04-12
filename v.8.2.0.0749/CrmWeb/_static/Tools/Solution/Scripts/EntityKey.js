Type.registerNamespace("Mscrm");
Mscrm.SelectAlternateKey = function() {};
Mscrm.SelectAlternateKey.createKeysAvailableFieldsXml = function(attributesXml, sourceAttributesValue) {
    var $v_0 = createXmlDoc("select");
    addXmlAttribute($v_0, "disablesorting", "false");
    for (var $v_1 = XUI.Xml.SelectNodes(attributesXml, "entityattributes/attributes", null), $v_2 = 0;
        $v_2 < $v_1.length;
        $v_2++)
        for (var $v_3 = XUI.Xml.GetText($v_1[$v_2].attributes.getNamedItem("value")),
            $v_4 = XUI.Xml.SelectNodes($v_1[$v_2], "values/value", null),
            $v_5 = 0;
            $v_5 < $v_4.length;
            $v_5++)
            if (sourceAttributesValue !== XUI.Xml.GetText($v_4[$v_5].attributes.getNamedItem("value"))) {
                var $v_6 = addXmlNode($v_0, "option");
                addXmlAttribute($v_6, "value", XUI.Xml.GetText($v_4[$v_5].attributes.getNamedItem("value")));
                addXmlAttribute($v_6, "attributes", $v_3);
                XUI.Xml.SetText($v_6, XUI.Xml.GetText($v_4[$v_5].attributes.getNamedItem("label")))
            }
    return $v_0
};
Mscrm.SelectAlternateKey.createKeysSelectedFieldsXml = function(attributesXml, sourceAttributesValue) {
    var $v_0 = createXmlDoc("select");
    addXmlAttribute($v_0, "disablesorting", "false");
    for (var $v_1 = XUI.Xml.SelectNodes(attributesXml, "keyattributes/keyattribute", null), $v_2 = 0;
        $v_2 < $v_1.length;
        $v_2++)
        for (var $v_3 = XUI.Xml.GetText($v_1[$v_2].attributes.getNamedItem("value")),
            $v_4 = XUI.Xml.SelectNodes($v_1[$v_2], "values/value", null),
            $v_5 = 0;
            $v_5 < $v_4.length;
            $v_5++)
            if (sourceAttributesValue !== XUI.Xml.GetText($v_4[$v_5].attributes.getNamedItem("value"))) {
                var $v_6 = addXmlNode($v_0, "option");
                addXmlAttribute($v_6, "value", XUI.Xml.GetText($v_4[$v_5].attributes.getNamedItem("value")));
                addXmlAttribute($v_6, "keyattribute", $v_3);
                XUI.Xml.SetText($v_6,
                    CrmEncodeDecode.CrmHtmlEncode(XUI.Xml.GetText($v_4[$v_5].attributes.getNamedItem("label"))))
            }
    return $v_0
};
Mscrm.SelectAlternateKey.registerClass("Mscrm.SelectAlternateKey")