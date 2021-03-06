Type.registerNamespace("Mscrm");
Mscrm.SharePointValidation = function() {};
Mscrm.SharePointValidation.sharePointValidationText = function(errorlogNode, helpURL, isSharepointOnline) {
    var $v_0 = null;
    if (isSharepointOnline && Xrm.Page.context.isCrmOnline()) $v_0 = Mscrm.SharePointValidation.$0;
    else if (isSharepointOnline && !Xrm.Page.context.isCrmOnline()) $v_0 = Mscrm.SharePointValidation.$2;
    else if (!isSharepointOnline && Xrm.Page.context.isCrmOnline()) $v_0 = Mscrm.SharePointValidation.$1;
    else $v_0 = Mscrm.SharePointValidation.$3;
    var $v_1 = window.LOCID_SP_VALIDATION_URL_FAIL, $v_2;
    if (errorlogNode) {
        $v_2 = XUI.Xml.GetText(errorlogNode);
        var $v_3 = 0;
        try {
            $v_3 = Number.parseInvariant($v_2)
        } catch ($$e_7) {
            $v_3 = 0
        } finally {
            switch ($v_3) {
            case -2147088204:
                $v_1 = window.LOCID_SP_ERROR_AUTHORIZATION;
                helpURL.val = "http://go.microsoft.com/fwlink/?LinkID=" + $v_0[2];
                break;
            case -2147088203:
                $v_1 = window.LOCID_SP_ERROR_CONNECTION;
                helpURL.val = "http://go.microsoft.com/fwlink/?LinkID=" + $v_0[0];
                break;
            case -2147088205:
            case -2147088206:
            case -2147088207:
                $v_1 = window.LOCID_SP_ERROR_AUTHENTICATION;
                helpURL.val = "http://go.microsoft.com/fwlink/?LinkID=" + $v_0[1];
                break;
            case -2147088202:
                $v_1 = window.LOCID_SP_ERROR_UNSUPPORTED;
                helpURL.val = "http://go.microsoft.com/fwlink/?LinkID=" + $v_0[3];
                break;
            default:
                $v_1 = window.LOCID_SP_VALIDATION_URL_FAIL;
                break
            }
        }
    }
    return $v_1
};
Mscrm.SharePointValidation.registerClass("Mscrm.SharePointValidation");
Mscrm.SharePointValidation.$0 = [529450, 529451, 529452, 529453];
Mscrm.SharePointValidation.$1 = [519291, 519293, 519294, 529206];
Mscrm.SharePointValidation.$2 = [529200, 529202, 529204, 529208];
Mscrm.SharePointValidation.$3 = [529201, 529203, 529205, 529207]