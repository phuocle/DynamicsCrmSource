<%@ page language="c#" inherits="Microsoft.Crm.Web.Reporting.AdHocWizard.FilterDialog" %>
<%@ register tagprefix="cnt" namespace="Microsoft.Crm.Application.Controls" assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ register tagprefix="frm" namespace="Microsoft.Crm.Application.Forms" assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ register tagprefix="crm" namespace="Microsoft.Crm.Application.Components.UI" assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ register tagprefix="sdk" namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ register tagprefix="loc" namespace="Microsoft.Crm.Application.Controls.Localization" assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>

<!DOCTYPE html>
<html>
<head>
    <cnt:appheader id="crmHeader" runat="server"/>
    <script language="javascript" type="text/javascript">
        var _filterValue;


        function applychanges() {


            var sFilterOperator = filterOpCtrl.get_dataValue();
            var sFilterColumn = (IsNull(sFilterOperator)) ? null : filterColumnCtrl.get_dataValue();
            var sFilterValue = (IsNull(sFilterOperator)) ? null : _filterValue.get_dataValue();


            if (!IsNull(sFilterOperator) && IsNull(sFilterValue)) {
                alert(formatString(LOCID_MISSING_FILTER_VALUE, XUI.Html.GetText($get('filterValueLabel'))));
                return;
            }


            Mscrm.Utilities.setReturnValue(new Array(sFilterColumn, sFilterOperator, sFilterValue));
            closeWindow();
        }


        function cancel() {
            closeWindow();
        }


        function clearFilter() {

            _filterValue.set_dataValue(null);
            filterOpCtrl.set_dataValue(null);


            updateFilterUI();
        }


        var filterColumnCtrl = null;
        var filterOpCtrl = null;

        function filterDialog_onload() {
            _filterValue = Mscrm.FormControlInputBehavior.GetBehavior('filterValue');


            var oaFilterColumns, iObjectType, sScopeDisplayName, sFilterColumn, sFilterOperator, sFilterValue;
            var oArgs = getDialogArguments();
            filterOpCtrl = Mscrm.FormControlInputBehavior.GetBehavior('filterOperator');
            with (oArgs) {
                oaFilterColumns = FilterColumns;
                iObjectType = ObjectType;
                sFilterColumn = FilterColumn;
                sFilterOperator = FilterOperator;
                sFilterValue = FilterValue;


                sScopeDisplayName = IsNull(ScopeDisplayName) ? LOCID_PRIMARY_ENTITY : ScopeDisplayName;
            }


            XUI.Html.SetText($get('descriptionCell'),
                (iObjectType == PROPERTY_PAGE_TYPE_GROUP)
                ? LOCID_DIALOG_INTRO
                : formatString(LOCID_DIALOG_INTRO, sScopeDisplayName));
            XUI.Html.SetText($get('filterValueLabel'), LOCID_N_LABEL);


            var oFilterColumnSelect = new Select();
            oFilterColumnSelect.ID = "filterColumn";
            oFilterColumnSelect.Disabled = true;
            oFilterColumnSelect.Selected = sFilterColumn;
            for (var i = 0; i < oaFilterColumns.length; i++) {
                var oFilterColumn = oaFilterColumns[i];
                oFilterColumnSelect.AddOption(oFilterColumn.DisplayName, oFilterColumn.ColumnId);
            }
            oFilterColumnSelect.AddToControl($get('filterColumnCell'));
            filterColumnCtrl = Mscrm.FormControlInputBehavior.GetBehavior('filterColumn');

            filterOpCtrl.set_dataValue(sFilterOperator);
            _filterValue.set_dataValue(IsNull(sFilterValue) ? null : parseInt(sFilterValue, 10));
            updateFilterUI();
        }


        function updateFilterUI() {

            var bNoLimit = IsNull(filterOpCtrl.get_dataValue());
            _filterValue.set_disabled(bNoLimit);
            filterColumnCtrl.set_disabled(bNoLimit);

            _filterValue._element.contentEditable = !bNoLimit;
        }


        Sys.Application.add_load(filterDialog_onload)
    </script>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server">
    <table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
        <col/><col width="80"/><col width="95"/>
        <tr style="padding-bottom: 10px;">
            <td colspan="3" id="descriptionCell"></td>
        </tr>
        <tr>
            <td>
                <label for="filterColumn">
                    <loc:Text ResourceId="CustomReporting.AdHocWizard.FilterDialog.SummaryValueLabel" runat="server"/>
                </label>
            </td>
            <td>
                <label for="filterOperator">
                    <loc:Text ResourceId="CustomReporting.AdHocWizard.FilterDialog.TopBottomLabel" runat="server"/>
                </label>
            </td>
            <td>
                <label for="filterValue" id="filterValueLabel"/>
            </td>
        </tr>
        <tr>
            <td id="filterColumnCell"/>
            <td>
                <ui:Select id="filterOperator" runat="server" OnChange="updateFilterUI();"/>
            </td>
            <td>
                <ui:Number id="filterValue" Precision="0" MinValue="1" MaxValue="100" runat="server"/>
            </td>
        </tr>
    </table>
</frm:DialogForm>
</body>
</html>