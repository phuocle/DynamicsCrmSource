<!DOCTYPE html >


<%@ Page Language="c#" Inherits="Microsoft.Crm.Application.Pages.Dialogs.BulkEdit" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<script type="text/javascript">


    var _sAction = "bulkedit";
    var _iObjType = <%= EntityTypeCode %>;

    var FORM_TYPE = "BulkEdit";

    Sys.Application.add_load(PageOnLoad);

    function PageOnLoad() {


        var crmForm = $get("crmForm");
        var formChildnodes = crmForm.getElementsByTagName("*");
        var o;

        for (i = 0; i < formChildnodes.length; i++) {
            o = formChildnodes[i];


            if ((o.tagName == "DIV" && o.className == "ms-crm-RadioButton") || o.tagName == "SELECT") {
                var behavior = Mscrm.FormControlInputBehavior.GetElementBehavior(o);
                behavior.set_dataValue(null);
                if (o.tagName == "SELECT") {
                    behavior.set_defaultValue("");
                }
            }


            if (o.attributes["req"] != null) {
                if ((o.attributes["req"].value == "3") || (o.attributes["req"].value == "1")) {
                    o.style.backgroundColor = "#FFFFFF";
                }
            }
        }

        $find("crmForm").add_onSave(Save);
    }

    function applychanges() {
        var crmForm = $find("crmForm");
        var ret = crmForm.BuildXml(true, true);
        if (ret == 1) {
            crmForm.set_saving(true);
            __dialogXml = $get('crmFormSubmit').crmFormSubmitXml.value;
            go();
        } else if (ret == 2) {
            return;
        } else {
            closeWindow();
        }
    }

    function Save(sender, args) {
        applychanges();

        args.preventDefault();
    }

</script>


<style type="text/css">

    TD.ms-crm-Field-Recommended, TD.ms-crm-Field-Required { color: #000000; }

    DIV.ms-crm-Field-Recommended, DIV.ms-crm-Field-Required { background-color: #ffffff; }

    table.ms-crm-Form-Area { filter: ""; }

    DIV.ms-crm-Dialog-Main { padding: 0px; }

    DIV.ms-crm-Form-Area {
        height: 100%;
        width: auto;
        position: relative;
    }

</style>

<frm:BulkEditForm id="crmForm" runat="server"/>