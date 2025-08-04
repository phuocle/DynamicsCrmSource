<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.DuplicateDetection.BaseRecordsGridPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="System.Globalization" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm" %>

<html lang='<% = Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TwoLetterISOLanguageName %>'>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <% if (Microsoft.Crm.Application.Utility.Util.DuplicatesSource.OutlookGoOnline == source
           || Microsoft.Crm.Application.Utility.Util.DuplicatesSource.OutlookTrackInCrm == source
           || Microsoft.Crm.Application.Utility.Util.DuplicatesSource.OutlookGoOnlineXrm == source
           || Microsoft.Crm.Application.Utility.Util.DuplicatesSource.OutlookTrackInCrmXrm == source)
       { %>
        <style type="text/css">
            body {
                <% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
                   { %>
                dir: rtl;
                <% } %>
                background-color: threedface;
            }
        </style>
    <% }
       else
       { %>
        <style type="text/css">
            body {
                <% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
                   { %>
                dir: rtl;
                <% } %>
                <% if (source != Microsoft.Crm.Application.Utility.Util.DuplicatesSource.OnlineCreateUpdate)
                   { %>
                background-color: #eef0f6;
                <% } %>
            }
        </style>
    <% } %>
    <script language=javascript>
        Sys.Application.add_load(BaseRecordGridOnLoad);

        function BaseRecordGridOnLoad() {
            parent.baseRecordsIframeStatus = 1;
            <% if (source == Microsoft.Crm.Application.Utility.Util.DuplicatesSource.SystemWide)
               { %>
            $find("baseRecordsGrid").add_onSelectionChange(loadDuplicatesList);
            <% } %>

            <% if (Microsoft.Crm.Application.Utility.Util.DuplicatesSource.OutlookGoOnline == source
                   || Microsoft.Crm.Application.Utility.Util.DuplicatesSource.OutlookTrackInCrm == source
                   || Microsoft.Crm.Application.Utility.Util.DuplicatesSource.OutlookGoOnlineXrm == source
                   || Microsoft.Crm.Application.Utility.Util.DuplicatesSource.OutlookTrackInCrmXrm == source)
               { %>
            $find("baseRecordsGrid").add_onBeforeFormLoad(handleDblClick);
            $find("baseRecordsGrid").SetParameter("disableDblClick", "0");
            <% } %>

            loadDuplicatesList();
        }

        <% if (Microsoft.Crm.Application.Utility.Util.DuplicatesSource.OutlookGoOnline == source
               || Microsoft.Crm.Application.Utility.Util.DuplicatesSource.OutlookTrackInCrm == source
               || Microsoft.Crm.Application.Utility.Util.DuplicatesSource.OutlookGoOnlineXrm == source
               || Microsoft.Crm.Application.Utility.Util.DuplicatesSource.OutlookTrackInCrmXrm == source)
           { %>
        function handleDblClick(sender, args) {
            args.breakEvent = true;
        }
        <% } %>

        function loadDuplicatesList() {
            var oid = "";
            var baseEntityName = "";
            <% if (source == Microsoft.Crm.Application.Utility.Util.DuplicatesSource.SystemWide)
               { %>


            var baseGridObj = $find("baseRecordsGrid").get_innerGrid();


            if (baseGridObj.get_numberOfRecords() > 0) {

                var selectedRecords = baseGridObj.get_selectedRecords();


                if (!selectedRecords || selectedRecords.length <= 0) {
                    baseGridObj.SelectRecords(0, 0, true);
                    selectedRecords = baseGridObj.get_selectedRecords();
                }


                oid = selectedRecords[0][0];
                baseEntityName = <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(entityName) %>;


                parent.loadDuplicatesList(oid, baseEntityName);
            } else {

                parent.showPage();
                baseGridObj.get_element().disabled = true;
            }
            <% }
               else
               { %>

            parent.loadDuplicatesList(oid, baseEntityName);
            <% } %>
        }


    </script>
</head>
<body scroll="no">
<tr>
    <td>
        <cnt:AppGrid runat="server" id="baseRecordsGrid"/>
    </td>
</tr>
</body>
</html>