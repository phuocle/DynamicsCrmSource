<%@ Page Language="c#" Inherits="Microsoft.Crm.Dialogs.ApplyMailboxSettingsDialogPage" %>

<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="System.Globalization" %>
<!DOCTYPE html>
<html>
<head>
    <title>
        <loc:text ID="dialogTitle" runat="server"/>
    </title>
    <cnt:appheader id="crmHeader" runat="server"/>
    <script type="text/javascript" language="JavaScript">

        var job = null;
        var adminEmail;


        window.onload = function() {
            if ($get("showrecordselection").value == "True" &&
                $get("dialogMode").value == 1 &&
                IS_LIVEOSDP &&
                (typeof IS_SSSRELIABILITY_FEATUREENABLED != "undefined" && IS_SSSRELIABILITY_FEATUREENABLED)) {
                var obutBegin = document.getElementById("btnCloseAndViewUnapprovedMailboxes");
                document.getElementById("btnCloseAndViewUnapprovedMailboxes").disabled = true;
            }
        }


        function refreshMailboxGrid() {
            job.refreshMailboxGrid();
            closeWindow();
        }

        function applychanges() {
            if ($get("showrecordselection").value == "false") {
                var obutBegin = document.getElementById("butBegin");
                obutBegin.disabled = true;
                PrepareFillBar();
            }

            var oArgs = getDialogArguments();
            if (IS_LIVEOSDP &&
                (typeof IS_SSSRELIABILITY_FEATUREENABLED != "undefined" && IS_SSSRELIABILITY_FEATUREENABLED)) {

                adminEmail = oArgs.tenantemailaddress;
            }
            var setCrmOrgAsExchangeMailboxOrg = 0;
            if ($get("primaryexchangesyncorg") != null) {
                if ($get("primaryexchangesyncorg").checked) {
                    setCrmOrgAsExchangeMailboxOrg = 1;
                }
            }
            var applySettingsMode = 0;
            if ($get("setselected") != null) {
                if ($get("setselected").checked) {
                    applySettingsMode = 0;
                }
            } else if ($get("setcurrentpage") != null) {
                if ($get("setcurrentpage").checked) {
                    applySettingsMode = 1;
                }
            } else if ($get("showrecordselection").value == "True" && $get("dialogMode").value == 1) {
                applySettingsMode = 0;
            } else
                applySettingsMode = 2;


            var selectedrecords = oArgs.selectedrecords;

            job = new Mscrm.EmailConnector
                .ApplyMailboxSettings(applySettingsMode,
                    oArgs.gridcontrol,
                    oArgs.selectedrecords,
                    oArgs.allrecords,
                    $get("dialogMode").value,
                    $get("runtestaccesscheckbox").checked,
                    selectedrecords[0].TypeCode,
                    setCrmOrgAsExchangeMailboxOrg);

            window.setTimeout(Function.createDelegate(this,
                    function() {
                        job.processBatch(1, onBatchTaskComplete);
                    }),
                0);
        }

        function onBatchTaskComplete(page, processedRecords, totalRecords) {
            if ($get("showrecordselection").value == "True" &&
                $get("dialogMode").value == 1 &&
                IS_LIVEOSDP &&
                (typeof IS_SSSRELIABILITY_FEATUREENABLED != "undefined" && IS_SSSRELIABILITY_FEATUREENABLED)) {
                var mailboxCount = job.getMailboxStatusCount();
                var total = document.getElementById("total");
                var inprogress = document.getElementById("inprogress");
                var unapproved = document.getElementById("unapproved");
                document.getElementById("statusHeading").style.display = "block";
                document.getElementById("status").style.display = "block";
                inprogress.innerText = mailboxCount[0];
                unapproved.innerText = mailboxCount[1];
                total.innerText = totalRecords;
                if (parseInt(mailboxCount[1]) > 0) {
                    document.getElementById("btnCloseAndViewUnapprovedMailboxes").disabled = false;
                    job.getUnapprovedMailboxEmailAddress(adminEmail);
                } else {
                    document.getElementById("lnkTenantAdminSendMail").setAttribute("hidden", true);
                }
            } else {
                var oFill = document.getElementById("divFill");
                if (page == -1) {
                    oFill.style.width = _nFillBarWidth + "px";
                    window.setTimeout(closeWindow, 0);
                } else {
                    _iStep = _nFillBarWidth / totalRecords;
                    oFill.style.width = _iStep * processedRecords + "px";

                    window.setTimeout(Function.createDelegate(this,
                            function() {
                                job.processBatch(page + 1, onBatchTaskComplete);
                            }),
                        0);
                }
            }
        }

        function cancel() {
            closeWindow();
        }

    </script>
    <style>
        div.ms-crm-setmessage {
            padding-left: 20px;
            padding-right: 20px;
            margin-top: 20px;
        }

        .ms-crm-RefreshDialog-Main { top: 60px; }

        .rTable {
            display: inline-block;
            width: 100%;
            background-color: #F8F8FF;
        }

        .rTableRow { display: table-row; }

        .rTableCell, .rTableHead {
            display: table-cell;
            width: 35%;
            border: none;
        }

        .button {
            width: inherit;
            margin-left: 195px;
        }

        .divider {
            width: 1px;
            height: auto;
            display: inline-block;
        }
    </style>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server">
    <input id="dialogMode" name="runonlytestaccess" type="hidden" runat="server"/>
    <input id="showrecordselection" name="FromGrid" type="hidden" runat="server"/>
    <input id="emailAdddress" name="unApprovedEmail" type="hidden" runat="server"/>
    <div id="selectRecordControl" runat="server" style="display: none">
        <table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
            <col width="20">
            <col width="100%">
            <tr>
                <td colspan="2">
                    <b>
                        <loc:Text ID="dialogOptionHeading" runat="server"/>
                    </b>
                </td>
            </tr>
            <tr valign="middle">
                <td>
                    <input type="radio" name="recordOptions" id="setselected" style="border: 0px; width: 20px; cursor: hand;"
                           checked="checked" value="0"/>
                </td>
                <td>
                    <label for="setselected" style="cursor: hand;">
                        <loc:Text ResourceId="EmailConnector.ApplyMailboxSettings.Dialog.Option.SelectedRecord"
                                  runat="server"/>
                    </label>
                </td>
            </tr>
            <tr valign="middle">
                <td>
                    <input type="radio" name="recordOptions" id="setcurrentpage" style="border: 0px; width: 20px; cursor: hand;"
                           value="1"/>
                </td>
                <td>
                    <label for="setcurrentpage" style="cursor: hand;">
                        <loc:Text ResourceId="EmailConnector.ApplyMailboxSettings.Dialog.Option.CurrentPage"
                                  runat="server"/>
                    </label>
                </td>
            </tr>
            <tr valign="middle">
                <td>
                    <input type="radio" name="recordOptions" id="setallrecords" style="border: 0px; width: 20px; cursor: hand;"
                           value="2"/>
                </td>
                <td>
                    <label for="setallrecords" style="cursor: hand;">
                        <loc:Text ResourceId="EmailConnector.ApplyMailboxSettings.Dialog.Option.CurrentView"
                                  runat="server"/>
                    </label>
                </td>
            </tr>
        </table>
    </div>
    <div id="dialogDescriptionControl" runat="server">
        <loc:Text ID="dialogDescription" runat="server"/>
    </div>
    <div id="runTestAccessControl" runat="server">
        <table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
            <col width="20">
            <col width="100%">


            <tr>
                <td colspan="2">
                    <b>
                        <loc:Text ResourceId="EmailConnector.ApplyMailboxDefaults.Dialog.CheckBox.Heading" runat="server"/>
                    </b>
                </td>
            </tr>

            <tr valign="middle">
                <td>
                    <input type="checkbox" name="runtestaccess" id="runtestaccesscheckbox" style="border: 0px; width: 20px; cursor: hand;" checked="checked"/>
                </td>
                <td>
                    <label for="runtestaccesscheckbox" style="cursor: hand;">
                        <loc:Text Id="dialogTestAccessCheckBoxText" runat="server"/>
                    </label>
                </td>
            </tr>
        </table>
    </div>
    <div id="checkCrmOrgAsExchangeMailboxOrgControl" runat="server">
        <table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
            <col width="20">
            <col width="100%">


            <tr>
                <td colspan="2"></td>
            </tr>

            <tr valign="middle">
                <td>
                    <input type="checkbox" name="primaryexchangesyncorg" id="primaryexchangesyncorg" style="border: 0px; width: 20px; cursor: hand;"/>
                </td>
                <td>
                    <label for="primaryexchangesyncorgcheckbox" style="cursor: hand;">
                        <loc:Text Id="primaryExchangeSyncOrgCheckBoxText" runat="server"/>
                        <a href="http://go.microsoft.com/fwlink/?LinkID=391868" target="_blank" style="color: #0645AD; text-decoration: underline">
                            <loc:Text Id="primaryExchangeSyncOrgCheckBoxWhatIsThis" runat="server"/>
                        </a>
                    </label>
                </td>
            </tr>
        </table>
    </div>
    <div id="mailboxStatusCountControl" runat="server" style="display: none">
        <div>
            <table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
                <tr>
                    <td>
                        <ui:Button id="btnRuntheTest" CssClass="ms-crm-RefreshDialog-button" style="width: auto" ResourceId="EmailConnector.ApplyMailboxSettings.Dialog.Option.RuntheTest" onclick="if (!Mscrm.Utilities.resetValidationFailedElement()) { applychanges(); }" runat="server"></ui:Button>
                    </td>
                </tr>
            </table>
        </div>
        <div id="statusHeading" style="display: none">
            <table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
                <tr>
                    <td colspan="2">
                        <b>
                            <label for="testResults" style="cursor: hand;">
                                <loc:Text ResourceId="EmailConnector.ApplyMailboxSettings.Dialog.Option.TestResult" runat="server"/>
                            </label>
                        </b>
                    </td>
                    <td colspan="2" align="right">
                        <b>
                            <asp:HyperLink runat="server" ID="lnkTenantAdminSendMail" Style="color: #0645AD; text-decoration: underline">
                                <loc:Text ResourceId="EmailConnector.ApplyMailboxSettings.Dialog.Option.EmailAdminForApproval" runat="server"/>
                            </asp:HyperLink>
                        </b>
                    </td>
                </tr>
            </table>
        </div>
        <div id="status" class="rTable" style="display: none">
            <table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
                <tr>
                    <td align="center">
                        <b>
                            <label for="total" style="cursor: hand;">
                                <loc:Text ResourceId="EmailConnector.ApplyMailboxSettings.Dialog.Option.Total" runat="server"/>
                            </label>

                        </b>
                    </td>
                    <td align="center">
                        <b>
                            <label for="in-progress" style="cursor: hand;">
                                <loc:Text ResourceId="EmailConnector.ApplyMailboxSettings.Dialog.Option.Inprogress" runat="server"/>
                            </label>
                        </b>
                    </td>
                    <td align="center">
                        <b>
                            <label for="Unapproved" style="cursor: hand;">
                                <loc:Text ResourceId="EmailConnector.ApplyMailboxSettings.Dialog.Option.Unapproved" runat="server"/>
                            </label>
                        </b>
                    </td>
                </tr>
                <tr>
                    <td align="center">
                        <b>
                            <label id="total" style="vertical-align: top"></label>
                        </b>
                    </td>
                    <td align="center">
                        <img src="/_imgs/CircularPreloader_Grey_16x16.gif" alt="inp"/>
                        <b>
                            <label id="inprogress" style="vertical-align: top"></label>
                        </b>
                    </td>
                    <td align="center">
                        <img src="/_imgs/Alert_16.png" alt="inp"/>
                        <b>
                            <label id="unapproved" style="vertical-align: top"></label>
                        </b>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</frm:DialogForm>
</body>
</html>