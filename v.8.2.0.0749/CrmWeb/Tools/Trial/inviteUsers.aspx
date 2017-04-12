<!DOCTYPE html >

<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.Trial.TrialInviteUsersPage" %>

<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>

<html>
<head>
    <cnt:appheader id="crmHeader" runat="server"/>
</head>
<style>
    #buttonCloseContainer {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 32px;
    }

    #buttonClose {
        float: right;
        padding: 5px 5px 0 0;
    }

    #inviteUsersFrameContainer {
        position: fixed;
        top: 32px;
        left: 0;
        bottom: 0;
        right: 0;
    }

    #inviteUsersFrame {
        display: block;
        width: 100%;
        height: 100%;
        border: 0px;
    }
</style>
<body>
<frm:DialogForm id="crmForm" runat="server">
    <div id="buttonCloseContainer">
        <a id="buttonClose" href="javascript:closeWindow();">
            <img alt="<loc:Text ResourceId='Button_Label_Close' runat='server'/>" src="/_imgs/CloseDialog.png" unselectable="on"/>
        </a>
    </div>
    <div id="inviteUsersFrameContainer">
        <iframe id="inviteUsersFrame" src="<%= GladosUserInviteUri.AbsoluteUri %>">
        </iframe>
    </div>
</frm:DialogForm>
</body>
</html>