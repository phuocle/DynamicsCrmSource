<%@ Page Language="c#" Inherits="Microsoft.Crm.Dialogs.TestExchangeServerConnection" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>

<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<!DOCTYPE html>
<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <title>
        <loc:Text resourceid="Ribbon.emailserverprofile.TestExchangeServerProfile.Title" runat="server"/>
    </title>
    <script type="text/javascript">

        function applychanges(objA) {
            var selectedrecordId = LOCID_EMAILSERVERPROFILEID;
            var rc = new RemoteCommand("MailboxService", "RetrieveServiceAccountMailboxId", null);
            rc.SetParameter("emailServerProfileId", selectedrecordId);
            var result = rc.Execute();
            if (result && result.ReturnValue) {
                var rcUpdate = new RemoteCommand("MailboxService", "UpdateServiceAccountMailbox", null);
                rcUpdate.SetParameter("mailboxId", result.ReturnValue);
                var mailboxId = result.ReturnValue;
                result = rcUpdate.Execute();
                if (result && result.ReturnValue) {
                    objA.target = "_self";
                    objA.href = '/_grid/cmds/dlg_testexchangeserver_status.aspx?mailboxid=' +
                        mailboxId +
                        '&emailserverprofileid=' +
                        selectedrecordId;
                }
            }
        }

        function cancel() {
            closeWindow();
        }
    </script>
    <style type="text/css">
        .ms-crm-TestExchangeServerProfile-title {
            font-family: Segoe UI Light, Segoe UI, Tahoma, Arial;
            font-weight: lighter;
            font-size: 1.5em;
            color: #000000;
            width: 90%;
            margin-top: 0.5em;
            padding-left: 15px;
        }

        .ms-crm-TestExchangeServerProfile-text {
            font-family: Segoe UI, Tahoma, Arial;
            font-size: 11px;
            color: #000000;
        }

        .ms-crm-Input {
            border: 0px;
            margin: 0px;
            padding-top: 0px;
            padding-left: 0px;
            padding-bottom: 0px;
            padding-right: 0px;
            width: 100%;
            height: 100%;
        }

        .ms-crm-Text { }

        .ms-crm-RefreshDialog-Button {
            height: 24px;
            font-family: Segoe UI, Tahoma, Arial;
            border: 1px solid #C6C6C6;
            background-image: none;
            margin-top: 10px;
            width: auto !important;
            min-width: 80px;
            white-space: nowrap;
            color: #444444;
            background-color: #FFFFFF;
            line-height: 16px;
            text-align: center;
            cursor: pointer;
            border-width: 1px;
            border-style: solid;
            background-repeat: repeat-x;
            padding-left: 5px;
            padding-right: 5px;
            padding: 4px 6px;
        }

        span.ms-crm-RefreshDialog-Button:hover { background-color: #d7ebf9; }

        .ms-crm-Input-Container {
            padding: 1px;
            background-color: #ffffff;
            border-width: 1px;
            border-style: solid;
        }

        .ms-crm-TestExchangeServerProfile-bodyTable {
            width: 100%;
            padding-left: 15px;
            padding-right: 15px
        }
    </style>
</head>
<body>
<div class="ms-crm-TestExchangeServerProfile-title">
    <loc:Text resourceid="Ribbon.emailserverprofile.TestExchangeServerProfile.HeaderTitle" runat="server"/>
</div>
<br/>
<div id="tableDiv" style='width: 100%'>
    <table id="bodyTable" class="ms-crm-TestExchangeServerProfile-bodyTable">
        <tr height="25">
            <td style="width: 40%">
                <span class="ms-crm-TestExchangeServerProfile-text">
                    <loc:Text resourceid="Ribbon.emailserverprofile.TestExchangeServerProfile.AutoDiscoverServerLocation" runat="server"/>
                </span>
            </td>
            <td style="width: 100%">
                <div>
                <table class='ms-crm-TestExchangeServerProfile-text'>
                <tr>
                <td>
                <input class="" type="radio" id="autoDiscoverLocationY" name="autodiscoverlocation" runat="server" disabled/>
                <td>
                    <label for="autodiscoverlocationY">Yes</label>
                </td>
            </td>
            <td>
                <input class="" type="radio" id="autoDiscoverLocationN" name="autodiscoverlocation" runat="server" disabled/>
                <td>
                    <label for="autodiscoverlocationN">No</label>
                </td>
            </td>
        </tr>
    </table>
</div>
</td>
</tr>
<tr id="incomingServerLocation_Container" runat="server">
    <td>
        <span class="ms-crm-TestExchangeServerProfile-text">
            <loc:Text resourceid="Ribbon.emailserverprofile.TestExchangeServerProfile.IncomingServerLocation" runat="server"/>
        </span>
    </td>
    <td>
        <div class='ms-crm-Input-Container'>
            <input class="ms-crm-Input ms-crm-Text" type="text" id="incomingServerLocation" name="incomingServerLocation" runat="server" value="" disabled/>
        </div>
    </td>
</tr>
<tr height="25" id="outgoingServerLocation_container" runat="server">
    <td>
        <span class="ms-crm-TestExchangeServerProfile-text">
            <loc:Text resourceid="Ribbon.emailserverprofile.TestExchangeServerProfile.OutgoingServerLocation" runat="server"/>
        </span>
    </td>
    <td>
        <div class='ms-crm-Input-Container'>
            <input class="ms-crm-Input ms-crm-Text" type="text" id="outgoingServerLocation" name="outgoingServerLocation" runat="server" value="" disabled/>
        </div>
    </td>
</tr>
<tr height="25">
    <td>
        <span class="ms-crm-TestExchangeServerProfile-text">
            <loc:Text resourceid="Ribbon.emailserverprofile.TestExchangeServerProfile.UserName" runat="server"/>

        </span>
    </td>
    <td>
        <div class='ms-crm-Input-Container'>
            <input class="ms-crm-Input ms-crm-Text" type="text" id="userName" name="userName" runat="server" value="" disabled/>
        </div>
    </td>
</tr>
<tr height="25">
    <td>
        <span class="ms-crm-TestExchangeServerProfile-text">
            <loc:Text resourceid="Ribbon.emailserverprofile.TestExchangeServerProfile.Password" runat="server"/>
        </span>
    </td>
    <td>
        <div class='ms-crm-Input-Container'>
            <input class="ms-crm-Input ms-crm-Text" type="text" id="password" name="password" runat="server" value="" disabled/>
        </div>
    </td>
</tr>
<tr height="25">
    <td>
        <span class="ms-crm-TestExchangeServerProfile-text">
            <loc:Text resourceid="Ribbon.emailserverprofile.TestExchangeServerProfile.EmailAddress" runat="server"/>
        </span>
    </td>
    <td>
        <div class='ms-crm-Input-Container'>
            <input class="ms-crm-Input ms-crm-Text" type="text" id="emailAddress" name="emailAddress" runat="server" value="" disabled/>
        </div>
    </td>
</tr>
<tr height="25">
    <td>
        <span class="ms-crm-TestExchangeServerProfile-text">
            <loc:Text resourceid="Ribbon.emailserverprofile.TestExchangeServerProfile.AuthenticationProtocol" runat="server"/>
        </span>
    </td>
    <td>
        <div class='ms-crm-Input-Container'>
            <select id="userAuthentication" disabled class="ms-crm-Input ms-crm-TestExchangeServerProfile-text" runat="server">
                <option value="0">Auto Detect</option>
                <option value="1">Negotiate</option>
                <option value="2">NTLM</option>
                <option value="3" selected>Basic</option>
            </select>
        </div>
    </td>
</tr>
<tr height="25">
    <td/>
    <td/>
</tr>
<tr height="25">
    <td align='right' colspan='2'>
        <span class='ms-crm-RefreshDialog-Button ms-crm-TestExchangeServerProfile-runtestbutton-hover'>
            <a target="_self" id="runTheTest" name="runTheTest" onclick="applychanges(this)" id="">
                <loc:Text resourceid="Ribbon.emailserverprofile.TestExchangeServerProfile.RunTheTest" runat="server"/>
            </a>
        </span>
    </td>
</tr>
</table>
</div>
</body>
</html>