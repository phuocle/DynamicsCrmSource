Type.registerNamespace("Mscrm");
Mscrm.RelationCheckBoxBehavior = function(element) {
    this.$$d_onClick = Function.createDelegate(this, this.onClick);
    Mscrm.RelationCheckBoxBehavior.initializeBase(this, [element])
};
Mscrm.RelationCheckBoxBehavior.prototype = {
    $0_4: 0,
    initialize: function() {
        Mscrm.FormControlInputBehavior.prototype.initialize.call(this);
        $addHandler(this.get_element(), "click", this.$$d_onClick);
        this.$0_4 = parseInt(this.get_elementValue(), 10)
    },
    get_primaryObjectTypeCode: function() { return parseInt(this.get_element().getAttribute("PrimaryOTC"), 10) },
    set_primaryObjectTypeCode: function(value) {
        this.get_element().setAttribute("PrimaryOTC", value);
        return value
    },
    get_associatedObjectTypeCode: function() { return parseInt(this.get_element().getAttribute("AssociatedOTC"), 10) },
    set_associatedObjectTypeCode: function(value) {
        this.get_element().setAttribute("AssociatedOTC", value);
        return value
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        $removeHandler(this.get_element(), "click", this.$$d_onClick);
        Mscrm.CrmUIBehavior.prototype.dispose.call(this)
    },
    get_disabled: function() { return this.get_element().disabled },
    set_disabled: function(value) {
        this.get_element().disabled = value;
        return value
    },
    get_dataValue: function() { return this.get_elementValue() },
    set_dataValue: function(value) {
        this.set_elementValue(value.toString());
        return value
    },
    get_isDirty: function() { return this.$0_4 !== parseInt(this.get_dataValue().toString(), 10) },
    get_requiredLevel: function() { return 0 },
    set_requiredLevel: function(value) {
        throw Error.notImplemented("Not Implemented");
        return value
    },
    get_dataXml: function() {
        var $v_0 = new Sys.StringBuilder;
        $v_0.append("<item ");
        if (this.get_elementValue() === "1") {
            $v_0.append('action="Create" ><dataxml><relationshiprolemap><primaryobjecttypecode>');
            $v_0.append(String
                .format("{0}</primaryobjecttypecode><associateobjecttypecode>{1}</associateobjecttypecode></relationshiprolemap></dataxml>", this.get_primaryObjectTypeCode(), this.get_associatedObjectTypeCode()))
        } else
            $v_0.append(String.format('id="{0}" action="Delete" >',
                CrmEncodeDecode.CrmXmlAttributeEncode(this.get_element().id)));
        $v_0.append("</item>");
        return $v_0.toString()
    },
    onClick: function(eventObject) { this.toggle() },
    toggle: function() {
        !this.get_disabled() && this.set_elementValue(parseInt(this.get_elementValue(), 10) === 1 ? "0" : "1")
    }
};
Mscrm.RelationCheckBoxBehavior.registerClass("Mscrm.RelationCheckBoxBehavior", Mscrm.FormControlInputBehavior)