Type.registerNamespace("Mscrm");
Mscrm.EntitySelect = function(element) { Mscrm.EntitySelect.initializeBase(this, [element]) };
Mscrm.EntitySelect.$3 = function($p0, $p1) {
    if (IsNull($p0)) return null;
    var $v_0 = new Mscrm.XslTemplate;
    $v_0.stylesheet = XUI.Xml.LoadXml($p1);
    var $v_1 = $v_0.createProcessor();
    $v_1.input = $p0;
    $v_1.transform();
    return isNullOrEmptyString(XUI.Xml.GetParserError($p0)) ? $v_1.output : null
};
Mscrm.EntitySelect.prototype = {
    $0_3: null,
    get_cacheManager: function() { return this.$0_3 },
    set_cacheManager: function(value) {
        this.$0_3 = value;
        return value
    },
    getLinkedEntityOptions: function() {
        var $v_0 = this.$0_3.GetLinkedEntityList(this.get_element().value,
                this.get_element().attributes.getNamedItem("LCID").value),
            $v_1 = Mscrm.EntitySelect.$3($v_0, Mscrm.EntitySelect.$2);
        if (IsNull($v_1)) return null;
        return "<option value='' selected />" + $v_1
    },
    getEntityFieldOptions: function() {
        var $v_0 = Mscrm.FormControlInputBehavior.GetBehavior(this.get_element().id),
            $v_1 = this.$0_3.GetEntityFieldList($v_0.get_selectedOption().attributes.getNamedItem("entity").value,
                this.get_element().attributes.getNamedItem("LCID").value);
        return Mscrm.EntitySelect.$3($v_1, Mscrm.EntitySelect.$1)
    }
};
Mscrm.EntitySelect.registerClass("Mscrm.EntitySelect", Mscrm.CrmUIBehavior);
Mscrm.EntitySelect
    .$2 =
    "<xsl:stylesheet xmlns:xsl='http://www.w3.org/1999/XSL/Transform' version='2.0'><xsl:output method='html' omit-xml-declaration='yes'/><xsl:template match='related'><xsl:apply-templates select='result'><xsl:sort select='.' lang='" + window.XML_LANGUAGE_NAME + "' /></xsl:apply-templates></xsl:template><xsl:template match='result'><option><xsl:apply-templates select='@*'/><xsl:value-of select='.' /></option></xsl:template><xsl:template match='@*'><xsl:attribute name='{name()}'><xsl:value-of select='.' /></xsl:attribute></xsl:template></xsl:stylesheet>";
Mscrm.EntitySelect
    .$1 =
    "<xsl:stylesheet xmlns:xsl='http://www.w3.org/1999/XSL/Transform' version='2.0'><xsl:output method='html' omit-xml-declaration='yes'/><xsl:template match='/fields'><xsl:apply-templates select='result'><xsl:sort select='.' lang='" + window.XML_LANGUAGE_NAME + "' /></xsl:apply-templates></xsl:template><xsl:template match='result'><xsl:if test=\"not(@datatype = 'bit' or @datatype = 'customer' or @datatype = 'lookup' or @datatype = 'owner' or @datatype = 'picklist' or @datatype = 'state' or @datatype = 'status') or @nameattr\"><option><xsl:apply-templates select='@*'/><xsl:value-of select='.'/></option></xsl:if></xsl:template><xsl:template match='@*'><xsl:attribute name='{name()}'><xsl:value-of select='.' /></xsl:attribute></xsl:template></xsl:stylesheet>"