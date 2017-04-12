<%@ Page language="c#" Inherits="Microsoft.Crm.Common.Web.Activities.Dialogs.ConvertToCase" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm" %>
<script language="javascript">


    Sys.Application.add_load(function() {
        onSubjectInit();
    });

    function onSubjectInit() {
        var subjectControl = Mscrm.FormControlInputBehavior.GetBehavior("Subject");
        var _cbOpenNew = $get("cbOpenNew");

        if (IsNull(subjectControl.get_dataValue()) || subjectControl.get_dataValue() == "") {
            if (
                "<%= Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadIncident, Microsoft.Crm.Application.Security.UserInformation.Current) %>" == "True") {
                _cbOpenNew.checked = true;
            }
            _cbOpenNew.disabled = true;
        }

    }


    function cancel() {
        closeWindow(true);
    }


    function applychanges() {
        var customerLoookupControl = Mscrm.FormControlInputBehavior.GetBehavior('CustomerLookup');

        if (IsNull(customerLoookupControl.get_dataValue())) {

            alert(LOCID_CONV_ACT_CUST_MUST);
            return;
        }

        var ret = new Object();

        var subjectControl = Mscrm.FormControlInputBehavior.GetBehavior("Subject");


        ret.CustomerId = "<%= Guid.Empty %>";
        ret.CustomerType = 0;
        ret.SubjectId = "<%= Guid.Empty %>";
        ret.SubjectType = 0;
        ret.SaveActivity = false;
        ret.Subject = subjectControl.get_dataValue();
        var _cbSaveActivity = $get("cbSaveActivity");
        if (!IsNull(_cbSaveActivity)) {
            ret.SaveActivity = _cbSaveActivity.checked;
        }

        ret.OpenNewRecord = $get("cbOpenNew").checked;


        var customerLookupDataValue = customerLoookupControl.get_dataValue();
        if (!IsNull(customerLookupDataValue)) {
            ret.CustomerId = customerLookupDataValue[0].id;
            ret.CustomerType = customerLookupDataValue[0].type;
        }
        var subjectIdControl = Mscrm.FormControlInputBehavior.GetBehavior('subjectid');
        subjectDataValue = subjectIdControl.get_dataValue();
        if (!IsNull(subjectDataValue)) {
            ret.SubjectId = subjectDataValue[0].id;
            ret.SubjectType = subjectDataValue[0].type;
        }


        Mscrm.Utilities.setReturnValue(ret);


        closeWindow(true);
    }
</script>
<style>
    table { border-collapse: collapse; }
</style>
<table width="100%">
    <tr class="main">
        <td>

            <table width="100%" style="table-layout: fixed">
                <tr>
                    <td>
                        <table width="100%" style="table-layout: fixed">
                            <tr>
                                <td class="ms-crm-Field-Required">
                                    <label for="CustomerLookup">
                                        <loc:text resourceid="ConvertActivity_Opportunity_Label" runat="server"/>
                                        <img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
                                    </label>
                                </td>
                                <td>
                                    <sdk:lookupcontrol id="CustomerLookup" accessibilitylabelresourceid="ConvertActivity_Opportunity_Label"
                                                       runat="server"/>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td>
                        <table width="100%" style="table-layout: fixed">
                            <tr>
                                <td>
                                    <label for="subjectid">
                                        <loc:text resourceid="ConvertActivity_Subject_Label" runat="server"/>
                                    </label>
                                </td>
                                <td id="subjectid_d">
                                    <sdk:lookupcontrol id="subjectid" accessibilitylabelresourceid="ConvertActivity_Subject_Label"
                                                       runat="server"/>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td valign="top">
                        <table width="100%" style="table-layout: fixed">
                            <tr>
                                <td>
                                    <table width="100%" cellpadding="4" style="table-layout: fixed">
                                        <col width="26">
                                        <col>
                                        <tr>
                                            <td>
                                                <input class="checkbox" type="checkbox" id="cbOpenNew" <%= (Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadIncident, Microsoft.Crm.Application.Security.UserInformation.Current) ? "editable checked" : "disabled") %>>
                                            </td>
                                            <td>
                                                <label for="cbOpenNew">
                                                <loc:text resourceid="ConvertActivity_Action_OpenNewCase" runat="server"/>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <table width="100%" cellpadding="4" style="table-layout: fixed">
                                        <col width="26">
                                        <col>
                                        <tr>
                                            <td>
                                                <input class="checkbox" type="checkbox" id="cbSaveActivity" <%= (Microsoft.Crm.Security.User.GetPrivilege(Privileges.WriteActivity, Microsoft.Crm.Application.Security.UserInformation.Current) ? "editable checked" : "disabled") %>>
                                            </td>
                                            <td>
                                                <label for="cbSaveActivity">
                                                <asp:label id="closeActivity" runat="server"/>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>
<sdk:HiddenInputControl id="Subject" runat="server"/>