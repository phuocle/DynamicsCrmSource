<%@ Page language="c#" Inherits="Microsoft.Crm.Application.Pages.Tools.FormEditor.Dialogs.SelectCustomControl" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<!DOCTYPE html>
<html>
<head>
    <script lang="javascript" type="text/javascript">
        window.onload = function() { Mscrm.CustomControls.CandidateControlsDialogManager.get_instance().initiate(); }
    </script>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <title>
        <loc:Text ResourceId="CustomControls_Configuration_SelectControl" runat="server"/>
    </title>
</head>
<body>
<div id="dialogMainContainer" class="selectcustomcontrol-dialogcontainer" rtl="<%= rtlValue %>">
    <div id="DlgHdContainer" overridedefaultfocus="True" style="height: 75px;">
        <span class="selectcustomcontrol-btncross">
            <a href="#" class="ms-crm-RefreshDialog-FirstTopButton selectcustomcontrol-CrossButtonAnchorTag" id="btnCross" title="<loc:Text ResourceId='Button_Label_Cancel' runat='server'/>" tabindex="2">
                <img alt="" src="/_imgs/CloseDialog.png?ver=1915502822" style="height: 16px; width: 16px;" onclick="javascript:closeWindow();">
            </a>
        </span>
        <br/>
        <div class="ms-crm-RefreshDialog-Header-Title ms-crm-TextAutoEllipsis" id="DlgHdTitle" title="<loc:Text ResourceId='CustomControls_Configuration_AddControlTitle' runat='server'/>" style="width: 85%;">
            <loc:Text ResourceId="CustomControls_Configuration_AddControlTitle" runat="server"/>
        </div>
        <div id="DlgContentDiv">
            <div id="DlgHdDesc" class="ms-crm-RefreshDialog-Header-Desc" title="<loc:Text ResourceId='CustomControls_Configuration_SubTitle1' runat='server'/>" style="margin-bottom: 20px">
                <loc:Text ResourceId="CustomControls_Configuration_SubTitle1" runat="server"/>
            </div>


            <div id="dialogContentGrid" style="vertical-align: top; height: 110px; overflow-y: auto">
                <table width="100%" id="tblCustomControlDialog" border="0" style="table-layout: fixed; border-collapse: collapse"></table>
            </div>

            <div id="dialogContentDetails" style="padding-top: 10px">
                <table id="tblContentDetails" class="customcontrol-text-align"></table>
                <div id="dialogContentDescription" class="selectcustomcontrol-dialogdescription">
                    <span>
                        <loc:Text ResourceId="CustomControls_Configuration_PlaceHolderText2" runat="server"/>
                    </span>
                </div>
            </div>
        </div>
        <div id="selectedIdDiv" style="display: none"></div>
    </div>
    <div id="ZeroRecordsDiv" style="display: none; border: 1px solid #808080; padding-top: 40px; padding-bottom: 40px; height: 200px; text-align: center; word-wrap: break-word"></div>
</div>

<div class="customcontrol-dialogfooter" rtl="<%= rtlValue %>">
    <button id="btnOK" type="button" class="ms-crm-RefreshDialog-Button customcontrol-dialogfooter-btnok">
        <loc:Text ResourceId="CustomControl_Add" runat="server"/>
    </button>
</div>
</body>
</html>