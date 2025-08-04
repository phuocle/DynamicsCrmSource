<!DOCTYPE html >
<%@ Page Language="c#" Inherits="Microsoft.Crm.Dialogs.DeleteDialogPage" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Globalization"%>
<%@ Import Namespace="Microsoft.Crm"%>

<html>
<head>

    <cnt:AppHeader id="crmHeader" runat="server"/>
    <style type="text/css">
        div.ms-crm-RefreshDialog-Header { padding-bottom: 10px; }
    </style>
    <script language="JavaScript">

        var _sAction = "delete";
        var _iObjType = <%= ObjType.ToString(CultureInfo.InvariantCulture) %>;

        if (_iObjType == <%= Util.ListMember %>) {
            document.title = LOCID_REMOVE_FROM_LIST;
        } else {
            document.title = LOCID_CONFIRM_DELECTION;
        }


        _custParams =
            "&sSubTypes=<%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncodeNoQuotes(Microsoft.Crm.CrmEncodeDecode.CrmUrlEncode(Subtypes)) %>" +
            "&sSrcQueueId=<%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncodeNoQuotes(Microsoft.Crm.CrmEncodeDecode.CrmUrlEncode(SourceQueueId)) %>" +
            "&sParentId=<%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncodeNoQuotes(Microsoft.Crm.CrmEncodeDecode.CrmUrlEncode(ParentId)) %>" +
            "&sCalendarId=<%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncodeNoQuotes(Microsoft.Crm.CrmEncodeDecode.CrmUrlEncode(SourceCalendarId)) %>" +
            "&iAuditEndDate=<%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncodeNoQuotes(Microsoft.Crm.CrmEncodeDecode.CrmUrlEncode(AuditEndDate)) %>" +
            "&cType=<%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncodeNoQuotes(Microsoft.Crm.CrmEncodeDecode.CrmUrlEncode(calendarType)) %>" +
            "&holidayCalendarId=<%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncodeNoQuotes(Microsoft.Crm.CrmEncodeDecode.CrmUrlEncode(holidayCalendarId)) %>" +
            "&iParentType=<%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncodeNoQuotes(Microsoft.Crm.CrmEncodeDecode.CrmUrlEncode(ParentType)) %>";


        function applychanges() {
            go();
        }

        Sys.Application.add_load(function() {
            Mscrm.Utilities.setDialogHeaderHeight("tdDialogHeader", "DlgHdBodyContainer", "DlgHdTitle", "DlgHdDesc");
            if (Mscrm.InlineDialogUtility.isMobileClient() || window.top.UseTabletExperience) {
                document.body.addEventListener("touchmove",
                    function(event) {
                        event.preventDefault();
                        event.stopPropagation()
                    },
                    false);
            }


            if (_iObjType == <%= Util.DynamicProperty %>) {
                var bodyContainer = document.getElementById('DlgHdBodyContainer');
                if (!IsNull(bodyContainer)) {

                    bodyContainer.style.top = 'auto';
                }
            }
        });

    </script>
</head>

<body>
<frm:DialogForm id="crmForm" runat="server">
    <div style="height: auto">
        <cnt:AppNotifications id="Notifications" runat="server"/>
    </div>
    <div style="height: auto; padding-top: 2%">
        <%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(BodyDescription) %>
        <%= DependentComponentsMessage %>
    </div>
</frm:DialogForm>
</body>
</html>