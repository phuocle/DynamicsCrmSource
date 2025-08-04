<!DOCTYPE html>
<%@ Page language="c#" Inherits="Microsoft.Crm.Web.GridFilters.CustomFiltersDialogue" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>

<html>
<head>
    <title><% = Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(_sTitle) %></title>
    <cnt:AppHeader id="crmHeader" runat="server"/>

    <script language="Javascript">

        function cancel() {
            closeWindow();
        }

        function applychanges() {
            var customFilter = $find('customFilter');
            var oRet;

            if (customFilter) {
                oRet = customFilter.GetCustomConditionGroup();
            }

            if (IsMissingInput(oRet.primary) || IsMissingInput(oRet.secondary)) {
                alert(formatString(LOCID_AF_VALUEMISSINGFOR_MSG, customFilter.displayName));
                return;
            }

            Mscrm.Utilities.setReturnValue(oRet);
            closeWindow();
        }

        function IsMissingInput(filterCondition) {
            if (filterCondition != null) {
                if (filterCondition["OperatorType"] == 2) {
                    if ((filterCondition["Operand"] == null) || (filterCondition["Operand"] == "")) {
                        return true;
                    }
                }
            }
            return false;
        }

        function setUIAndCondition() {
            var and = document.getElementById("And");
            var customFilter = $find('customFilter');
            if (and.checked) {
                customFilter.SetOperatorValue(1);
            }
        }

        function setUIOrCondition() {
            var or = document.getElementById("Or");
            var customFilter = $find('customFilter');
            if (or.checked) {
                customFilter.SetOperatorValue(2);
            }
        }

    </script>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server">
    <table cellpadding="0" cellspacing="5" width="100%" height="100%" style="table-layout: fixed">
        <tr>
            <td width="40%">
                <label for="primaryOperator" style="display: none">
                    <loc:Text ResourceId="Web.Dialogues.CustomFiltersDlg.aspx_primary_operator" runat="server"/>
                </label><ui:Select id="primaryOperator" runat="server"/>
            </td>
            <td>
                <div id="primaryValue">
                </div>
            </td>
        </tr>
        <tr>
            <td width="40%">
                <table cellpadding="5" cellspacing="5">
                    <tr>
                        <td>
                            <input type="radio" class="ms-crm-RadioButton" name="booleanOp" id="And" value="1" title="And" onclick="setUIAndCondition()" checked="checked"/>
                            <loc:Text ResourceId="Web.Dialogues.CustomFiltersDlg.aspx_1" runat="server"/>
                        </td>
                        <td>
                            <input type="radio" class="ms-crm-RadioButton" name="booleanOp" id="Or" value="2" title="Or" onclick="setUIOrCondition()"/>
                            <loc:Text ResourceId="Web.Dialogues.CustomFiltersDlg.aspx_2" runat="server"/>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td width="40%">
                <label for="secondaryOperator" style="display: none">
                    <loc:Text ResourceId="Web.Dialogues.CustomFiltersDlg.aspx_secondary_operator" runat="server"/>
                </label><ui:Select id="secondaryOperator" runat="server"/>
            </td>
            <td>
                <div id="secondaryValue">
                </div>
            </td>
        </tr>
    </table>
</frm:DialogForm>
<cnt:GridFilterCustomControl runat="server"/>
</body>
</html>