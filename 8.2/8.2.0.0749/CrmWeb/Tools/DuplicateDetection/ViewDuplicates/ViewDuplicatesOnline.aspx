<!DOCTYPE html>

<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.DuplicateDetection.ViewDuplicatesPage" %>

<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>

<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="System.Globalization" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm" %>


<html lang='<% = Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TwoLetterISOLanguageName %>'>
<head>
<title>
    <loc:Text ResourceId='Window_Title_ViewDuplicates_aspx' runat='server'/>
</title>
<cnt:AppHeader id="crmHeader" runat="server"/>
<% if (isFromOutlook)
   { %>
    <style type="text/css">
        body {
            <% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
               { %>
            dir: rtl;
            <% } %>
            background-color: threedface;
        }

        table.header { background-color: AppWorkspace; }

        body.stage {
            <% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
               { %>
            dir: rtl;
            <% } %>
            background-color: threedface;
        }

        TD.ms-crm-Dialog-Footer { background-color: threedface; }

        TD.ms-crm-Form-StatusBar {
            background-color: threedface;
            color: threedface;
        }

        TABLE.ms-crm-Form-StatusBar { color: threedface; }

        table.stdTable {
            width: 100%;
            height: 100%;
            table-layout: fixed;
            background-color: threedface;
        }

        INPUT.radio {
            width: 16px;
            border: 0px;
            cursor: pointer;
        }
    </style>
<% }
   else if (duplicatesSource == Microsoft.Crm.Application.Utility.Util.DuplicatesSource.SystemWide)
   { %>
    <style>
        .ms-crm-RefreshDialog-Main { top: 0px; }

        .ms-crm-RefreshDialog-Warning {
            left: 4px;
            right: 4px;
        }

        .ViewDuplicates_td_MyRecRsrcStr {
            padding-top: 11px;
            padding-bottom: 15px;
        }

        .ms-crm-List-DataBody { height: 120px !important; }

        .ms-crm-RefreshDialog-Footer { background-color: #FFFFFF; }

        #baseRecordsIframe { height: 191px !important; }

        . ViewDuplicates_td_IframeCont { height: 191px !important; }
    </style>
<% } %>
<script language="javascript">

    var dataXml = "";


    var duplicatesListIframeStatus = -1;
    var baseRecordsIframeStatus = -1;
    var duplicateRecordsIframeStatus = -1;

    function fetchDuplicateRecords(matchingEntityName, oid, baseEntityName) {
        document.getElementById("duplicateIframeData").value = dataXml;
        var submitForm = document.getElementById("duplicaterecordsform");
        var url = Mscrm.CrmUri.create("/Tools/DuplicateDetection/ViewDuplicates/DuplicateRecordsGrid.aspx?source=" +
            <% = Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(Microsoft.Crm.CrmEncodeDecode.CrmUrlEncode(source)) %> +
            "&dType=" +
            <% = Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(Microsoft.Crm.CrmEncodeDecode.CrmUrlEncode(dialogType.ToString(CultureInfo.InvariantCulture))) %> +
            "&matchingentityname=" +
            matchingEntityName).toString();

        <% if (duplicatesSource == Microsoft.Crm.Application.Utility.Util.DuplicatesSource.SystemWide)
           { %>
        url = url +
            "&jobid=<% = Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncodeNoQuotes(Microsoft.Crm.CrmEncodeDecode.CrmUrlEncode(asyncJobId)) %>" +
            "&oid=" +
            oid +
            "&baseentityname=" +
            baseEntityName;
        <% } %>
        <%
           else if (!string.IsNullOrEmpty(Request.QueryString["oid"]))
           { %>
        url = url +
            "&oid=<% = Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncodeNoQuotes(Microsoft.Crm.CrmEncodeDecode.CrmUrlEncode(Request.QueryString["oid"])) %>";
        <% } %>

        submitForm.action = url;
        submitForm.submit();
        document.getElementById("duplicateRecordsIframe").style.display = "inline";
        duplicateRecordsIframeStatus = 0;
        showPage();
    }

    function showPage() {
        document.getElementById("progress").style.display = "none";
        document.getElementById("duplicatespage").style.display = "inline";
    }

    function getDeDupeDialogArguments(pos) {
        var oArgs = getDialogArguments();
        if (isArray(oArgs) && oArgs.length > pos) {
            return oArgs[pos];
        } else
            return oArgs;
    }

    Sys.Application.add_load(windowOnLoad);

    function windowOnLoad() {
        var navProgressBar = IsNull(window.parent.document.getElementById("progress"));
        <% if (duplicatesSource != Microsoft.Crm.Application.Utility.Util.DuplicatesSource.OnlineCreateUpdate)
           { %>
        if (navProgressBar)
            navProgressBar.style.display = "none";
        <% } %>


        <% if (duplicatesSource == Microsoft.Crm.Application.Utility.Util.DuplicatesSource.OnlineCreateUpdate)
           { %>
        var dataXmlObj = getDeDupeDialogArguments(0);
        dataXml = dataXmlObj["xml"];
        <% }
           else
           { %>
        dataXml = <% = Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(formData) %>;
        <% } %>



        loadBaseRecordsGrid();

        <% if (duplicatesSource == Microsoft.Crm.Application.Utility.Util.DuplicatesSource.OutlookGoOnline || duplicatesSource == Microsoft.Crm.Application.Utility.Util.DuplicatesSource.OutlookGoOnlineXrm)
           { %>
        $get('createInOnline').accessKey = accKeyCreateInOnline;
        $get('ignoreOffline').accessKey = accKeyIgnoreOffline;
        <% } %>

        setTimeout("checkFrameStatus()", 15000);
    }

    function checkFrameStatus() {
        var duplicatesListIframe = document.getElementById("duplicatesListIframe");
        var baseRecordsIframe = document.getElementById("baseRecordsIframe");
        var duplicateRecordsIframe = document.getElementById("duplicateRecordsIframe");
        if (duplicatesListIframeStatus == 0 || baseRecordsIframeStatus == 0 || duplicateRecordsIframeStatus == 0) {
            if (duplicatesListIframe.contentWindow.document.readyState == "loading" ||
                baseRecordsIframe.contentWindow.document.readyState == "loading" ||
                duplicateRecordsIframe.contentWindow.document.readyState == "loading") {
                setTimeout("checkFrameStatus()", 5000);
                return;
            } else {
                document.getElementById("progress").style.display = "none";
                document.getElementById("duplicatespage").style.display = "none";
                var frameContentDocument;
                if (duplicatesListIframeStatus == 0) {
                    frameContentDocument = duplicatesListIframe.contentWindow.document;
                }
                if (baseRecordsIframeStatus == 0) {
                    frameContentDocument = baseRecordsIframe.contentWindow.document;
                }
                if (duplicateRecordsIframeStatus == 0) {
                    frameContentDocument = duplicateRecordsIframe.contentWindow.document;
                }

                var errorCode = frameContentDocument.body.innerHTML;

                openErrorDlg(errorCode);
                closeWindow(true);
            }
        }
        if (duplicatesListIframeStatus == 1 || baseRecordsIframeStatus == 1 || duplicateRecordsIframeStatus == 1) {
            return;
        }
        setTimeout("checkFrameStatus", 5000);
    }

    function loadBaseRecordsGrid() {
        document.getElementById("baseIframeData").value = dataXml;
        var submitForm = document.getElementById("baserecordsform");
        var url = Mscrm.CrmUri
            .create("/Tools/DuplicateDetection/ViewDuplicates/BaseRecordsGrid.aspx?source=<% = Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncodeNoQuotes(Microsoft.Crm.CrmEncodeDecode.CrmUrlEncode(source)) %>&dType=<% = Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncodeNoQuotes(Microsoft.Crm.CrmEncodeDecode.CrmUrlEncode(dialogType.ToString(CultureInfo.InvariantCulture))) %>").toString();
        <% if (duplicatesSource == Microsoft.Crm.Application.Utility.Util.DuplicatesSource.SystemWide)
           { %>
        url = url +
            "&jobid=<% = Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncodeNoQuotes(Microsoft.Crm.CrmEncodeDecode.CrmUrlEncode(asyncJobId)) %>";
        <% } %>

        submitForm.action = url;
        submitForm.submit();
        baseRecordsIframeStatus = 0;
    }

    function loadDuplicatesList(oid, baseEntityName) {

        document.getElementById("duplicatesListIframeData").value = dataXml;
        var submitForm = document.getElementById("duplicatesListForm");
        var url = Mscrm.CrmUri
            .create("/Tools/DuplicateDetection/ViewDuplicates/DuplicatesList.aspx?source=<% = Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncodeNoQuotes(Microsoft.Crm.CrmEncodeDecode.CrmUrlEncode(source)) %>").toString();

        <% if (duplicatesSource == Microsoft.Crm.Application.Utility.Util.DuplicatesSource.SystemWide)
           { %>
        url = url +
            "&jobid=<% = Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncodeNoQuotes(Microsoft.Crm.CrmEncodeDecode.CrmUrlEncode(asyncJobId)) %>" +
            "&oid=" +
            oid +
            "&entityname=" +
            baseEntityName;
        <% } %>
        <%
           else if (!string.IsNullOrEmpty(Request.QueryString["oid"]))
           { %>
        url = url +
            "&oid=<% = Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncodeNoQuotes(Microsoft.Crm.CrmEncodeDecode.CrmUrlEncode(Request.QueryString["oid"])) %>";
        <% } %>

        submitForm.action = url;
        submitForm.submit();
        document.getElementById("duplicatesListIframe").style.display = "inline";
        duplicatesListIframeStatus = 0;
    }

    <% if (isFromOutlook)
       { %>

    function applychanges() {
    }

    function cancel() {
    }
    <% } %>

    <% if (duplicatesSource == Microsoft.Crm.Application.Utility.Util.DuplicatesSource.OnlineCreateUpdate)
       { %>

    function applychanges() {
        btnOk();
    }

    function btnOk() {
        var _xmlhttp = new XMLHttpRequest();
        var _submitUrl = Mscrm.CrmUri.create("/tools/duplicatedetection/viewduplicates/viewduplicatesonline.aspx");
        _submitUrl.get_query()["source"] = <% = Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(source) %>;
        _submitUrl.get_query()["dType"] = dialogType;
        var objectId = "<%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncodeNoQuotes(Request.QueryString["oid"]) %>";
        if (objectId != "") {
            _submitUrl.get_query()["oid"] = objectId;
        }
        _xmlhttp.open("POST", _submitUrl.toString(), false);
        SetTokenInHeader(_xmlhttp, _submitUrl);


        var changedDataXmlObj = getDeDupeDialogArguments(1);


        var oArgs = getDialogArguments();
        if (oArgs.length > 2) {
            var dupeActionName = getDeDupeDialogArguments(2);
            if (!IsNull(dupeActionName) && dupeActionName == "QualifyLead") {


                Mscrm.Utilities.setReturnValue(dupeActionName);
                closeWindow();
                return;
            }
        }

        _xmlhttp.send(changedDataXmlObj.xml);
        Mscrm.Utilities.setReturnValue(_xmlhttp.responseText);
        window.setTimeout("closeWindow(true)", 0);
    }

    function cancel() {
        btnCancel();
    }

    function btnCancel() {
        if (!IsNull(dialogType) &&
            (dialogType == 1 || dialogType == 2)) {
            Mscrm.Utilities.setReturnValue("Cancel");
        }

        closeWindow();
    }


    function btnOpenExisting() {
        var grid = GetDuplicateGrid();
        if (IsNull(grid)) {
            return;
        }
        var selectedRecords = grid.get_selectedRecords();
        if (selectedRecords.length != 1) {
            return;
        }
        var returnValue = "<OpenRecord><id>" +
            selectedRecords[0].Id +
            "</id><type>" +
            selectedRecords[0].TypeName +
            "</type></OpenRecord>";
        Mscrm.Utilities.setReturnValue(returnValue);
        closeWindow();
    }


    function DuplicateGridSelectionChanged() {
        var grid = GetDuplicateGrid();
        if (IsNull(grid)) {
            return;
        }
        var selectedRecords = grid.get_selectedRecords().length;
        var openButton = document.getElementById("OpenExisting");
        if (selectedRecords != 1) {
            openButton.setAttribute("disabled", "disabled")
            return;
        }
        openButton.removeAttribute("disabled");
    }


    function GetDuplicateGrid() {
        if (IsNull(duplicateGrid)) {
            var duplicateListIFrame = document.getElementById("duplicateRecordsIframe");
            if (IsNull(duplicateListIFrame) || IsNull(duplicateListIFrame.contentWindow)) {
                return null;
            }
            duplicateGrid = duplicateListIFrame.contentWindow.$find("duplicateRecordsGrid");
        }
        return duplicateGrid;
    }

    var duplicateGrid = null;

    <% } %>
</script>
</head>

<body scroll="no">
<frm:DialogForm id="crmForm" runat="server">
    <span id="progress" style="display: inline">
        <table height='100%' width='100%' cellspacing="0" cellpadding="0" style='cursor: wait'>
            <tr>
                <td valign='middle' align='center'>
                    <img alt='' src='/_imgs/AdvFind/progress.gif'/>
                </td>
            </tr>
        </table>
    </span>
    <span id="duplicatespage" style="display: none">
        <% if (duplicatesSource != Microsoft.Crm.Application.Utility.Util.DuplicatesSource.SystemWide
               && duplicatesSource != Microsoft.Crm.Application.Utility.Util.DuplicatesSource.OnlineCreateUpdate)
           { %>
        <table cellspacing="0" cellpadding="0" border="0" width="100%">
        <tr>
            <td valign="top">
                <cnt:AppNotifications id="Notifications" runat="server"/>
            </td>
        </tr>
        <tr height="40" valign="top">
            <td>
                <table cellpadding="0" cellspacing="5" class="header" width="100%" style="table-layout: fixed;">
                    <tr valign="top" style="width: 100%">
                        <td class="ViewDuplicates_td_container" style="width: 100%">
                            <table width="100%" cellpadding="2" cellspacing="0">
                                <tr>
                                    <td>
                                        <table width="100%">
                                            <tr>
                                                <td width="100%" class="ms-crm-Dialog-Title-Reversed">
                                                    <%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(dialogTitle) %>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td width="100%" class="ms-crm-Dialog-Description-Reversed">
                                                    <%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(dialogDescription) %>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <% }
           else
           { %>
            <% if (duplicatesSource != Microsoft.Crm.Application.Utility.Util.DuplicatesSource.OnlineCreateUpdate)
               { %>
        <table cellspacing="0" cellpadding="0" border="0" width="100%" height="100%">
        <% }
               else
               { %>
        <table cellspacing="0" cellpadding="0" border="0" bordercolor="blue" width="100%" height="100%">
            <% } %>
            <% } %>
            <tr height="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(myRecordTextHeight) %>" valign="middle">
                <td class="ViewDuplicates_td_MyRecRsrcStr"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(myRecordResourceString) %></td>
            </tr>
            <tr height="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(baseRecordsFrameHeight) %>">
                <td class="ViewDuplicates_td_IframeCont">
                    <iframe name="baseRecordsIframe" id="baseRecordsIframe" src="" width="100%" class="ViewDuplicatesGrid" style="height: <%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(baseRecordsFrameHeight) %>px" scrolling="auto" frameborder="0"></iframe>
                    <form id="baserecordsform" method="post" target="baseRecordsIframe">
                        <input type="hidden" id="baseIframeData" name="baseIframeData"/>
                    </form>
                </td>
            </tr>


            <% if (duplicatesSource == Microsoft.Crm.Application.Utility.Util.DuplicatesSource.OnlineCreateUpdate)
               { %>
            <tr height="17">
            <% }
               else if (duplicatesSource == Microsoft.Crm.Application.Utility.Util.DuplicatesSource.SystemWide)
               { %>
                <tr height="32">
                <% }
               else
               { %>
                <tr height="40">
                    <% } %>
                    <td>&nbsp;</td>
                </tr>
                <tr height="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(duplicatesListFrameHeight) %>">
                    <td class="ViewDuplicates_td_DupListIFrame">
                        <iframe name="duplicatesListIframe" id="duplicatesListIframe" src="" width="100%" class="ViewDuplicatesGrid" style="display: none; height: <%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(duplicatesListFrameHeight) %>px;" frameborder="0"></iframe>
                        <form id="duplicatesListForm" method="post" target="duplicatesListIframe">

                            <input type="hidden" id="duplicatesListIframeData" name="duplicatesListIframeData"/>
                        </form>
                    </td>
                </tr>
                <% if (duplicatesSource != Microsoft.Crm.Application.Utility.Util.DuplicatesSource.SystemWide)
                   { %>
            <tr height="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(duplicateRecordsFrameHeight) %>">
            <td class="ViewDuplicates_td_DupSrcSysWide">
            <% }
                   else
                   { %>
                    <tr height="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(duplicateRecordsFrameHeight) %>">
                        <td class="ViewDuplicates_td_NotDupSrcSysWide">
                            <% } %>

                            <iframe name="duplicateRecordsIframe" id="duplicateRecordsIframe" src="" class="ViewDuplicatesGrid" width="100%" scrolling="auto" style="display: none; height: <%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(duplicateRecordsFrameHeight) %>px;" frameborder="0"></iframe>
                            <form id="duplicaterecordsform" method="post" target="duplicateRecordsIframe">
                                <input type="hidden" id="duplicateIframeData" name="duplicateIframeData"/>
                            </form>
                        </td>
                    </tr>
                </table>
            <% if (duplicatesSource == Microsoft.Crm.Application.Utility.Util.DuplicatesSource.OutlookGoOnline || duplicatesSource == Microsoft.Crm.Application.Utility.Util.DuplicatesSource.OutlookGoOnlineXrm)
               { %>
                <br/>
                <br/>
                <hr>
                <table cellpadding="0" cellspacing="5" width="100%" height="100%" style="table-layout: fixed;">
                    <tr height="2" class="ViewDuplicates_tr_OlkGoOnline">
                        <td>
                            <b>
                                <loc:Text ResourceId='Outlook_SelectAction_ViewDuplicates_aspx' runat='server'/>
                            </b>
                        </td>
                    </tr>
                    <tr height="2" class="ViewDuplicates_tr_CreateOnline">
                        <td>
                            <input type="radio" class="radio" id="createInOnline" name="userSelection" value="0" checked="checked"/>
                            <label for="createInOnline" class="radioLabel"><%= createInOnlineText %></label>
                        </td>
                    </tr>
                    <tr height="2" class="ViewDuplicates_tr_IgnoreOffline">
                        <td>
                            <input type="radio" class="radio" id="ignoreOffline" name="userSelection" value="1"/>
                            <label for="ignoreOffline" class="radioLabel"><%= ignoreOfflineText %></label>
                        </td>
                    </tr>
                    <tr height="47">
                        <td>&nbsp;</td>
                    </tr>
                </table>
        <% } %>
        </span>
</frm:DialogForm>
</body>
</html>