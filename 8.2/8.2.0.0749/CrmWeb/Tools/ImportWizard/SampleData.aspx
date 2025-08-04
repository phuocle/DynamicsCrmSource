<!DOCTYPE html >
<%@ Page Language="c#" Inherits="Microsoft.Crm.Application.Pages.Import.SampleData" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>

<script type="text/javascript" language="javascript">
    function install() {
        document.getElementById("butInstall").disabled = true;

        var command = new RemoteCommand("ImportWebService", "InstallSampleData");
        var result = command.Execute();

        XUI.Html.SetText(document.getElementById("statusTD"),
            (result.Success) ? SAMPLE_DATA_INSTALLING : SAMPLE_DATA_FAILED);
    }

    function uninstall() {
        document.getElementById("butUninstall").disabled = true;

        var command = new RemoteCommand("ImportWebService", "UninstallSampleData");
        var result = command.Execute();

        XUI.Html.SetText(document.getElementById("statusTD"),
            (result.Success) ? SAMPLE_DATA_UNINSTALLING : SAMPLE_DATA_FAILED);
    }

    function installsamplesolutions() {
        document.getElementById("buttonAdd").disabled = true;
        XUI.Html.SetText(document.getElementById("statusTD"), BUSINESS_PROCESS_IS_BEING_INSTALLED);

        var command = new RemoteCommand("ImportWebService", "InstallSampleBusinessProcesses");
        var result = command.Execute(updateststatus);
    }

    function updateststatus(result) {
        XUI.Html.SetText(document.getElementById("statusTD"),
            (result.Success) ? BUSINESS_PROCESS_INSTALLED : BUSINESS_PROCESS_NOT_INSTALLED);
    }
</script>
<table cellspacing="0" cellpadding="0" style="width: 100%">
    <tr>
        <td valign="middle" style="padding: 10px;" id="statusTD">
            <loc:Text runat="server" id="status" ResourceId="DataManagement.SampleData.Title"/>
        </td>
    </tr>
</table>