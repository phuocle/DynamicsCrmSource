<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Application.Pages.Common.NavigateConfirm" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>

<html>

<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
</head>

<script>

    $addHandler(window, "load", init);

    function init() {
        if (Mscrm.NavigationMode.DefaultNavigationMode == Mscrm.NavigationMode.NavigationModeInline) {
            $get("shouldNavigate2").style.display = "inline";
        }

        var windowClosing = false;
        var params = getDialogArguments();
        if (!IsNull(params)) {
            if (!IsNull(params["windowClosing"])) {
                windowClosing = params["windowClosing"];
            }
        }

        if (windowClosing) {
            document.getElementById("rdShouldNavigate2").style.display = "none";
            document.getElementById("lblShouldNavigate2").style.display = "none";
        }
    }

    function applychanges() {
        window.returnValue = -1;

        var len = 0;
        while (len < 3) {
            var radioElement = $get("rdShouldNavigate" + len.toString());
            if (radioElement.checked == true) {
                window.returnValue = parseInt(radioElement.value, 10);
                break;
            }

            ++len;
        }

        window.setTimeout("closeWindow(true)", 5);
        Mscrm.Utilities.setReturnValue(window.returnValue);
    }

    function cancel() {
        Mscrm.Utilities.setReturnValue(-1);;
        closeWindow();
    }

</script>

<body>
<frm:DialogForm id="crmForm" runat="server">
    <div>
        <table>
            <tr>
                <td>
                    <input class="ms-crm-RadioButton" type="radio" id="rdShouldNavigate0" name="rdShouldNavigate" value="0" checked/>
                    <label for="rdShouldNavigate0">
                        <loc:Text ResourceId="Web.Record.NavigateConfirm.OptionSave" runat="server"/>
                    </label>
                </td>
            </tr>

            <tr>
                <td>
                    <input class="ms-crm-RadioButton" type="radio" id="rdShouldNavigate1" name="rdShouldNavigate" value="1"/>
                    <label for="rdShouldNavigate1">
                        <loc:Text ResourceId="Web.Record.NavigateConfirm.OptionDiscard" runat="server"/>
                    </label>
                </td>
            </tr>

            <tr style="display: none;" id="shouldNavigate2">
                <td>
                    <input class="ms-crm-RadioButton" type="radio" id="rdShouldNavigate2" name="rdShouldNavigate" value="2"/>
                    <label for="rdShouldNavigate2" id="lblShouldNavigate2">
                        <loc:Text ResourceId="Web.Record.NavigateConfirm.OptionNewWindow" runat="server"/>
                    </label>
                </td>
            </tr>
            <tr>
                <td>
                    <br/>
                    <loc:Text ResourceId="Web.Record.NavigateConfirm.Message.CancelNavigation" runat="server"/>
                </td>
            </tr>
        </table>
    </div>
</frm:DialogForm>
</body>
</html>