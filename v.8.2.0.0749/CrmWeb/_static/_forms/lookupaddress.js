
function LookupAddress() {
    var aoItems = Xrm.Page.data.entity.attributes.get("customerid").getValue();
    if (aoItems == null) {
        var sArg = Xrm.Page.ui.controls.get("customerid").getLabel();
        alert(String.format(Xrm.Internal.getResourceString("LOCID_PROVIDE_VALUE_ADDRESS"), sArg));
        return
    }
    var dialogOptions = new Xrm.DialogOptions;
    dialogOptions.height = 350;
    dialogOptions.width = 500;
    var oUrl = Mscrm.CrmUri.create("/sfa/quotes/dlg_lookupaddress.aspx?headerForm=1&parentType=" +
        CrmEncodeDecode.CrmUrlEncode(aoItems[0].type) +
        "&parentId=" +
        CrmEncodeDecode.CrmUrlEncode(aoItems[0].id) +
        "&willCall=" +
        (Xrm.Page.data.entity.attributes.get("willcall").getValue() ? "1" : "0"));
    Xrm.Internal.openDialog(oUrl.toString(), dialogOptions, "LookupAddress", null, performActionAfterLookupAddress)
}

function performActionAfterLookupAddress(o) {
    if (o) {
        SetBillTo(o);
        var typeName = Xrm.Page.data.entity.getEntityName();
        SetShipTo(o, false, typeName)
    }
}

function LookupDetailAddress() {
    var oCrmFormElement = $get("crmForm");
    if (!Xrm.Page.data.entity.attributes.get("willcall").getValue()) {
        var iHeaderType,
            sHeaderId,
            typeName = Xrm.Page.data.entity.getEntityName();
        switch (typeName) {
        case "quotedetail":
            iHeaderType = Quote;
            sHeaderId = Xrm.Page.data.entity.attributes.get("quoteid").getValue();
            break;
        case "salesorderdetail":
            iHeaderType = SalesOrder;
            sHeaderId = Xrm.Page.data.entity.attributes.get("salesorderid").getValue();
            break;
        case "invoicedetail":
            iHeaderType = Invoice;
            sHeaderId = Xrm.Page.data.entity.attributes.get("invoiceid").getValue();
            break
        }
        var dialogOptions = new Xrm.DialogOptions;
        dialogOptions.height = 330;
        dialogOptions.width = 500;
        var oUrl = Mscrm.CrmUri.create("/sfa/quotes/dlg_lookupaddress.aspx?headerForm=0&headerType=" +
            CrmEncodeDecode.CrmUrlEncode(iHeaderType) +
            "&headerId=" +
            CrmEncodeDecode.CrmUrlEncode(sHeaderId));
        Xrm.Internal.openDialog(oUrl.toString(),
            dialogOptions,
            "LookupAddress",
            null,
            performActionAfterLookupDetailAddress)
    }
}

function performActionAfterLookupDetailAddress(o) {
    if (o) {
        var typeName = Xrm.Page.data.entity.getEntityName();
        SetShipTo(o, true, typeName)
    }
}

function SetBillTo(o) {
    shipto_addressidctrl = Xrm.Page.ui.controls.get("billto_addressid");
    shipto_contactnamectrl = Xrm.Page.ui.controls.get("billto_contactname");
    shipto_line2ctrl = Xrm.Page.ui.controls.get("billto_line2");
    shipto_line3ctrl = Xrm.Page.ui.controls.get("billto_line3");
    if (o.BillTo) {
        if (!IsNull(Xrm.Page.ui.controls.get("billto_composite"))) {
            Xrm.Page.data.entity.attributes.get("billto_line1").setValue(o.Address.Line1);
            Xrm.Page.data.entity.attributes.get("billto_line2").setValue(o.Address.Line2);
            Xrm.Page.data.entity.attributes.get("billto_line3").setValue(o.Address.Line3);
            Xrm.Page.data.entity.attributes.get("billto_city").setValue(o.Address.City);
            Xrm.Page.data.entity.attributes.get("billto_stateorprovince").setValue(o.Address.StateOrProvince);
            Xrm.Page.data.entity.attributes.get("billto_postalcode").setValue(o.Address.PostalCode);
            Xrm.Page.data.entity.attributes.get("billto_country").setValue(o.Address.Country);
            Xrm.Internal.setComposeAddress("billto_",
                o.Address.Line1,
                o.Address.Line2,
                o.Address.Line3,
                o.Address.City,
                o.Address.StateOrProvince,
                o.Address.PostalCode,
                o.Address.Country)
        }
        !IsNull(Xrm.Page.ui.controls.get("billto_name")) &&
            Xrm.Page.data.entity.attributes.get("billto_name").setValue(o.Address.Name);
        !IsNull(Xrm.Page.ui.controls.get("billto_line1")) &&
            Xrm.Page.data.entity.attributes.get("billto_line1").setValue(o.Address.Line1);
        !IsNull(Xrm.Page.ui.controls.get("billto_city")) &&
            Xrm.Page.data.entity.attributes.get("billto_city").setValue(o.Address.City);
        !IsNull(Xrm.Page.ui.controls.get("billto_stateorprovince")) &&
            Xrm.Page.data.entity.attributes.get("billto_stateorprovince").setValue(o.Address.StateOrProvince);
        !IsNull(Xrm.Page.ui.controls.get("billto_postalcode")) &&
            Xrm.Page.data.entity.attributes.get("billto_postalcode").setValue(o.Address.PostalCode);
        !IsNull(Xrm.Page.ui.controls.get("billto_country")) &&
            Xrm.Page.data.entity.attributes.get("billto_country").setValue(o.Address.Country);
        !IsNull(Xrm.Page.ui.controls.get("billto_telephone")) &&
            Xrm.Page.data.entity.attributes.get("billto_telephone").setValue(o.Address.Telephone);
        !IsNull(Xrm.Page.ui.controls.get("billto_fax")) &&
            Xrm.Page.data.entity.attributes.get("billto_fax").setValue(o.Address.Fax);
        !IsNull(shipto_addressidctrl) &&
            Xrm.Page.data.entity.attributes.get("billto_addressid").setValue(o.Address.AddressId);
        !IsNull(shipto_contactnamectrl) &&
            Xrm.Page.data.entity.attributes.get("billto_contactname").setValue(o.Address.ContactName);
        !IsNull(shipto_line2ctrl) &&
            Xrm.Page.data.entity.attributes.get("billto_line2").setValue(o.Address.Line2);
        !IsNull(shipto_line3ctrl) &&
            Xrm.Page.data.entity.attributes.get("billto_line3").setValue(o.Address.Line3)
    }
}

function SetShipTo(o, isDetail, iObjectType) {
    shipto_addressidctrl = Xrm.Page.ui.controls.get("shipto_addressid");
    shipto_contactnamectrl = Xrm.Page.ui.controls.get("shipto_contactname");
    shipto_line2ctrl = Xrm.Page.ui.controls.get("shipto_line2");
    shipto_line3ctrl = Xrm.Page.ui.controls.get("shipto_line3");
    if (o.ShipTo) {
        if (!IsNull(Xrm.Page.ui.controls.get("shipto_composite"))) {
            Xrm.Page.data.entity.attributes.get("shipto_line1").setValue(o.Address.Line1);
            Xrm.Page.data.entity.attributes.get("shipto_line2").setValue(o.Address.Line2);
            Xrm.Page.data.entity.attributes.get("shipto_line3").setValue(o.Address.Line3);
            Xrm.Page.data.entity.attributes.get("shipto_city").setValue(o.Address.City);
            Xrm.Page.data.entity.attributes.get("shipto_stateorprovince").setValue(o.Address.StateOrProvince);
            Xrm.Page.data.entity.attributes.get("shipto_postalcode").setValue(o.Address.PostalCode);
            Xrm.Page.data.entity.attributes.get("shipto_country").setValue(o.Address.Country);
            Xrm.Internal.setComposeAddress("shipto_",
                o.Address.Line1,
                o.Address.Line2,
                o.Address.Line3,
                o.Address.City,
                o.Address.StateOrProvince,
                o.Address.PostalCode,
                o.Address.Country)
        }
        !IsNull(Xrm.Page.ui.controls.get("shipto_name")) &&
            Xrm.Page.data.entity.attributes.get("shipto_name").setValue(o.Address.Name);
        !IsNull(Xrm.Page.ui.controls.get("shipto_line1")) &&
            Xrm.Page.data.entity.attributes.get("shipto_line1").setValue(o.Address.Line1);
        !IsNull(Xrm.Page.ui.controls.get("shipto_city")) &&
            Xrm.Page.data.entity.attributes.get("shipto_city").setValue(o.Address.City);
        !IsNull(Xrm.Page.ui.controls.get("shipto_stateorprovince")) &&
            Xrm.Page.data.entity.attributes.get("shipto_stateorprovince").setValue(o.Address.StateOrProvince);
        !IsNull(Xrm.Page.ui.controls.get("shipto_postalcode")) &&
            Xrm.Page.data.entity.attributes.get("shipto_postalcode").setValue(o.Address.PostalCode);
        !IsNull(Xrm.Page.ui.controls.get("shipto_country")) &&
            Xrm.Page.data.entity.attributes.get("shipto_country").setValue(o.Address.Country);
        !IsNull(Xrm.Page.ui.controls.get("shipto_telephone")) &&
            Xrm.Page.data.entity.attributes.get("shipto_telephone").setValue(o.Address.Telephone);
        !IsNull(Xrm.Page.ui.controls.get("shipto_fax")) &&
            Xrm.Page.data.entity.attributes.get("shipto_fax").setValue(o.Address.Fax);
        !IsNull(shipto_addressidctrl) &&
            Xrm.Page.data.entity.attributes.get("shipto_addressid").setValue(o.Address.AddressId);
        !IsNull(shipto_contactnamectrl) &&
            Xrm.Page.data.entity.attributes.get("shipto_contactname").setValue(o.Address.ContactName);
        !IsNull(shipto_line2ctrl) &&
            Xrm.Page.data.entity.attributes.get("shipto_line2").setValue(o.Address.Line2);
        !IsNull(shipto_line3ctrl) &&
            Xrm.Page.data.entity.attributes.get("shipto_line3").setValue(o.Address.Line3);
        if (isDetail)
            Xrm.Page.data.entity.attributes.get("shipto_freighttermscode").setValue(o.Address.FreightTerms);
        else {
            iObjectType != "invoice" &&
                !IsNull(Xrm.Page.data.entity.attributes.get("freighttermscode")) &&
                Xrm.Page.data.entity.attributes.get("freighttermscode").setValue(o.Address.FreightTerms);
            !IsNull(Xrm.Page.ui.controls.get("shippingmethodcode")) &&
                Xrm.Page.data.entity.attributes.get("shippingmethodcode").setValue(o.Address.ShippingMethod)
        }
    }
}