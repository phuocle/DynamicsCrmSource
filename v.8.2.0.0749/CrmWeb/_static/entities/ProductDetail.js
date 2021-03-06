Type.registerNamespace("Mscrm");
Mscrm.ProductDetail = function() {};
Mscrm.ProductDetail.createProduct = function(products, succeedCallback, errorCallback) {
    if (products.length <= 0) return;
    for (var $v_0 = new Array(0), $v_4 = 0; $v_4 < products.length; $v_4++) {
        var $v_5 = products[$v_4],
            $v_6 = new Xrm.Objects.EntityReference(Mscrm.ProductDetail.$0(),
                Microsoft.Crm.Client.Core.Framework.Guid.get_empty()),
            $v_7 = {},
            $v_8 = {},
            $v_9 = new Array(0),
            $v_A = "";
        $v_A = "productid";
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_5[$v_A])) {
            $v_7[$v_A] = new Xrm.Objects.EntityReference("productpricelevel",
                new Microsoft.Crm.Client.Core.Framework.Guid($v_5[$v_A].toString()));
            $v_8[$v_A] = 6;
            $v_9[$v_9.length] = $v_A
        }
        $v_A = "priceperunit";
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_5[$v_A])) {
            $v_7[$v_A] = $v_5[$v_A];
            $v_8[$v_A] = 3;
            $v_9[$v_9.length] = $v_A
        }
        $v_A = "manualdiscountamount";
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_5[$v_A])) {
            $v_7[$v_A] = $v_5[$v_A];
            $v_8[$v_A] = 3;
            $v_9[$v_9.length] = $v_A
        }
        $v_A = "quantity";
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_5[$v_A])) {
            $v_7[$v_A] = $v_5[$v_A];
            $v_8[$v_A] = 5;
            $v_9[$v_9.length] = $v_A
        }
        var $v_B = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
            .EntityRecord($v_6,
                $v_7,
                $v_8,
                {},
                {},
                new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0)));
        $v_B.get_changedFieldNames().addRange($v_9);
        $v_0[$v_0.length] = $v_B
    }
    var $v_1 = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection.createFromEntities($v_0),
        $v_2 = new Xrm.Objects.EntityReference(Xrm.Page.data.entity.getEntityName(),
            new Microsoft.Crm.Client.Core.Framework.Guid(Xrm.Page.data.entity.getId()),
            Xrm.Page.data.entity.getPrimaryAttributeValue()),
        $v_3 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
            .EntityRecord($v_2,
                {},
                {},
                {},
                {},
                new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0)));
    Xrm.Internal.messages.createProducts($v_1, $v_3).then(function($p1_0) {
            for (var $v_C = Mscrm.ProductDetail.$1(), $v_D = $p1_0, $v_E = $v_D.entityCollection, $v_F = [], $v_G = 0;
                $v_G < $v_E.get_count();
                $v_G++) {
                var $v_H = new Microsoft.Crm.Client.Core.Framework
                    .Guid($v_E.get_entities()[$v_G].getValue($v_C).toString());
                $v_F[$v_F.length] = $v_H.toString()
            }
            succeedCallback($v_F)
        },
        function($p1_0) { errorCallback($p1_0) })
};
Mscrm.ProductDetail.$0 = function() {
    switch (Xrm.Page.data.entity.getEntityName()) {
    case "opportunity":
        return "opportunityproduct";
    case "quote":
        return "quotedetail";
    case "salesorder":
        return "salesorderdetail";
    case "invoice":
        return "invoicedetail";
    default:
        return ""
    }
};
Mscrm.ProductDetail.$1 = function() {
    switch (Xrm.Page.data.entity.getEntityName()) {
    case "opportunity":
        return "opportunityproductid";
    case "quote":
        return "quotedetailid";
    case "salesorder":
        return "salesorderdetailid";
    case "invoice":
        return "invoicedetailid";
    default:
        return ""
    }
};
Mscrm.ProductDetail.registerClass("Mscrm.ProductDetail")