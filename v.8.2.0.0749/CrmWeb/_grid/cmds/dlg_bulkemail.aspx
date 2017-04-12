<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Dialogs.BulkEmailPage" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="System.Globalization" %>
<%@ Import Namespace="System.Web" %>
<%@ Import Namespace="System.Xml.Xsl" %>
<%@ Import Namespace="System.Xml.XPath" %>
<%@ Import Namespace="System.Xml" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>

<html>
<head>
<META name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
<script type="text/javascript">

    function AutoSelectFirstTemplate() {
        if (($get("TemplateTable").tagName == "UL") && (!IsNull($get("TemplateTable").childNodes[1]))) {
            if ($get("TemplateTable").childNodes[1].click)
                Mscrm.Utilities.click($get("TemplateTable").childNodes[1]);
            else {
                var evt = document.createEvent("MouseEvents");
                evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                var allowDefault = $get("TemplateTable").childNodes[1].dispatchEvent(evt);
            }
            $get("butBegin").disabled = false;

        } else {
            $get("butBegin").disabled = true;
        }
    }

    $addHandler(window, "load", BulkEmailWindowOnLoad);

    $removeHandler(document, "keydown", documentOnKeyDownHandler);
    $addHandler(document, "keydown", templatesOnKeyDownHandler);

    function templatesOnKeyDownHandler(eventObject) {
        try {
            switch (eventObject.keyCode) {
            case KEY_UP:
                var parent = _selectedItem.parentNode;
                var _selectedItemPrevSibling = XUI.Html.DomUtils.GetPrevSibling(_selectedItem);
                var type = typeof (_selectedItemPrevSibling.getAttribute("item"));
                if (parent.getAttribute("id") != null && parent.getAttribute("id") == "TemplateTable") {
                    if (type != "undefined" &&
                        _selectedItemPrevSibling.className == "ms-crm-Dialog-ListHeader ms-crm-Bold-Header") {
                        SelectItem(XUI.Html.DomUtils.GetPrevSibling(_selectedItemPrevSibling));
                        SelectTemplate(XUI.Html.DomUtils.GetPrevSibling(_selectedItemPrevSibling), false);
                    } else {
                        if (type != "undefined") {
                            SelectItem(_selectedItemPrevSibling);
                            SelectTemplate(_selectedItemPrevSibling, false);
                        }
                    }
                }
                break;
            case KEY_DOWN:
                var parent = _selectedItem.parentNode;
                var _selectedItemNextSibling = XUI.Html.DomUtils.GetNextSibling(_selectedItem);
                var type = typeof (_selectedItemNextSibling.getAttribute("item"));
                if (parent.getAttribute("id") != null && parent.getAttribute("id") == "TemplateTable") {
                    if (type != "undefined" &&
                        _selectedItemNextSibling.className == "ms-crm-Dialog-ListHeader ms-crm-Bold-Header") {
                        SelectItem(XUI.Html.DomUtils.GetNextSibling(_selectedItemNextSibling));
                        SelectTemplate(XUI.Html.DomUtils.GetNextSibling(_selectedItemNextSibling), false);
                    } else {
                        if (type != "undefined") {
                            SelectItem(_selectedItemNextSibling);
                            SelectTemplate(_selectedItemNextSibling, false);
                        }
                    }
                }
                break;
            case KEY_HOME:
                if (typeof (XUI.Html.DomUtils.GetFirstChild(_selectedItem.parentNode).getAttribute("item")) !=
                    "undefined") {
                    if (XUI.Html.DomUtils.GetFirstChild(_selectedItem.parentNode).className ==
                        "ms-crm-Dialog-ListHeader ms-crm-Bold-Header") {
                        var firstChild = XUI.Html.DomUtils.GetFirstChild(_selectedItem.parentNode);
                        SelectItem(XUI.Html.DomUtils.GetNextSibling(firstChild));
                        SelectTemplate(XUI.Html.DomUtils.GetNextSibling(_selectedItemNextSibling), false);
                    } else {
                        SelectItem(XUI.Html.DomUtils.GetFirstChild(_selectedItem.parentNode));
                        SelectTemplate(XUI.Html.DomUtils.GetFirstChild(_selectedItem.parentNode), false);
                    }
                }
                break;
            case KEY_END:
                if (typeof (XUI.Html.DomUtils.GetLastChild(_selectedItem.parentNode).getAttribute("item")) !=
                    "undefined") {
                    SelectItem(XUI.Html.DomUtils.GetLastChild(_selectedItem.parentNode));
                    SelectTemplate(XUI.Html.DomUtils.GetLastChild(_selectedItem.parentNode), false);
                }
                break;
            }
        } catch (e) {
        }
    }

    function BulkEmailWindowOnLoad() {

        var oArgs = getDialogArguments();
    }

    <%
        if (_isBulkMail)
        {
    %>
    var _sQueryString = <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(Request.QueryString.ToString()) %>;

    var _iTotalRecords;
    var _iSelectedRecords;
    var _aIds;
    var _oTemplate;
    var _oGridXml;

    Sys.Application.add_load(function() {
        var oArgs = getDialogArguments();
        with (oArgs) {
            _iTotalRecords = TotalRecords;
            _iSelectedRecords = SelectedRecords;
            _aIds = Ids;
            _oGridXml = GridXml;
        }

        $get("radSelected").checked = true;
        if (_iSelectedRecords == 0) {
            $get("radSelected").disabled = true;
            $get("labelSelected").disabled = true;
            $get("radCurrent").checked = true;
        } else if (IsNull(_oGridXml)) {
            $get("radCurrent").disabled = true;
            $get("radAll").disabled = true;
        }
        AutoSelectFirstTemplate();
    });

    function Ok() {
        var sId, sType;
        var dataValue = Mscrm.FormControlInputBehavior.GetBehavior('crmLookup').get_dataValue();
        if (IsNull(dataValue)) {
            alert(LOCID_NOONE_SELECTED);

            return;
        } else {
            with (dataValue[0]) {
                sId = id;
                sType = type;
            }
        }

        if ($get("radSelected").checked) {
            SendFromIds(sId, sType);
        } else if ($get("radCurrent").checked) {
            SendFromView(sId, sType, true);
        } else {
            SendFromView(sId, sType, false);
        }
    }

    function SendFromIds(fromId, fromType) {
        var iLen = _aIds.length;

        var sXml = "<ids>";

        sXml += _aIds[0];

        for (i = 1; i < iLen; i++) {
            sXml += "," + _aIds[i];
        }

        sXml += "</ids>";

        var oXmlDoc = XUI.Xml.LoadXml(sXml);
        var oXmlHTTP = new XMLHttpRequest();

        oXmlHTTP.open("POST",
            Mscrm.CrmUri.create("/_grid/cmds/cmd_bulkemailfromids.aspx?fromId=" +
                CrmEncodeDecode.CrmUrlEncode(fromId) +
                "&fromType=" +
                CrmEncodeDecode.CrmUrlEncode(fromType) +
                "&template=" +
                CrmEncodeDecode.CrmUrlEncode(_oTemplate.getAttribute("tmplId")) +
                "&objectTypeCode=" +
                <%= Util.GetInt(Request.QueryString["objectTypeCode"]) %>).toString(),
            false);
        Mscrm.Utilities.setResponseTypeToMSXml(oXmlHTTP);
        SetTokenInHeader(oXmlHTTP, Mscrm.CrmUri.create("/_grid/cmds/cmd_bulkemailfromids.aspx"));
        oXmlHTTP.send(oXmlDoc);

        checkResponseXml(oXmlHTTP.responseXML);
    }


    function SendFromView(fromId, fromType, bThisPageOnly) {
        var boSuccess = true;
        var oXmlHTTP = new XMLHttpRequest();

        oXmlHTTP.open("POST",
            Mscrm.CrmUri.create("/_grid/cmds/cmd_bulkemailfromview.aspx?fromId=" +
                CrmEncodeDecode.CrmUrlEncode(fromId) +
                "&fromType=" +
                CrmEncodeDecode.CrmUrlEncode(fromType) +
                "&template=" +
                CrmEncodeDecode.CrmUrlEncode(_oTemplate.getAttribute("tmplId")) +
                "&" +
                ((bThisPageOnly) ? _sQueryString.toString() : _sQueryString.replace("multiPage=false", "multiPage=true")
                ).toString()),
            false);
        SetTokenInHeader(oXmlHTTP, Mscrm.CrmUri.create("/_grid/cmds/cmd_bulkemailfromview.aspx"));

        var oXmlDoc = XUI.Xml.LoadXml(_oGridXml);
        boSuccess = Mscrm.Utilities.safeHttpSend(oXmlHTTP, oXmlDoc);


        if (boSuccess) {
            checkResponseXml(XUI.Xml.LoadXml(oXmlHTTP.responseText));
        }
    }

    function checkResponseXml(responseXML) {
        var bComplete = true;


        var oErrorCodeNode = XUI.Xml.SelectSingleNode(responseXML, "error/code", null);

        if (oErrorCodeNode && XUI.Xml.GetText(oErrorCodeNode).toLowerCase() == "0x80040b02") {
            alert(LOCID_NO_EMAIL);
            bComplete = false;
        }

        if (bComplete) {
            Mscrm.Utilities.setReturnValue(handleXMLErr(responseXML));
            if (window.returnValue != Mscrm.XmlError.ERROR_STOP) {
                closeWindow();
            }
        }
    }
    <%
        }
        else
        {
    %>
    var _oTemplate;

    Sys.Application.add_load(function() {
        AutoSelectFirstTemplate();
    });

    function Ok() {
        if (_oTemplate != null) {

            var o = new Object();

            var qsUrl = Mscrm.CrmUri.create(window.location.search);
            var richClient = qsUrl.get_query()["richClient"]


            if (null != richClient && richClient == "1") {
                o.tmplId = _oTemplate.getAttribute("tmplId");
                window.returnValue = o;
            } else {

                var targetType = qsUrl.get_query()["targetType"];
                var targetId = qsUrl.get_query()["targetId"];

                if (null != targetType && (targetType == "4406" || targetType == "4402")) {
                    o.tmplId = _oTemplate.getAttribute("tmplId");
                    o.tmplTitle = _oTemplate.getAttribute("tmplTitle");
                    o.innerHTML = '<img style="MARGIN-RIGHT: 4px" alt="" align=absMiddle src="/_imgs/ico_16_2010.gif">';

                    window.returnValue = o;
                } else {
                    var command = new RemoteCommand("EmailTemplateService", "GetInstantiatedEmailTemplate");
                    command.SetParameter("templateId", _oTemplate.getAttribute("tmplId"));
                    command.SetParameter("objectId",
                        "<%= Microsoft.Crm.Util.GetGuid(Request.QueryString["objectid"]) %>");
                    command.SetParameter("objectTypeCode",
                        <%= int.Parse(Request.QueryString["objectTypeCode"], NumberStyles.Integer, CultureInfo.InvariantCulture) %>);

                    var result = command.Execute();


                    if (null != targetType && null != targetId) {
                        var createAttachment = new RemoteCommand("EmailTemplateService", "CreateAttachments");
                        createAttachment.SetParameter("templateId", _oTemplate.getAttribute("tmplId"));
                        createAttachment.SetParameter("targetId", targetId);
                        createAttachment.SetParameter("targetType", targetType);
                        var response = createAttachment.Execute();
                        if (! response.Success) {
                            window.returnValue = null;
                        }
                    } else {
                        var templateHasAttachment = new RemoteCommand("EmailTemplateService", "TemplateHasAttachments");
                        templateHasAttachment.SetParameter("templateId", _oTemplate.getAttribute("tmplId"));
                        var templateHasAttachmentResponse = templateHasAttachment.Execute();
                        if (templateHasAttachmentResponse.ReturnValue == true) {
                            if (!confirm(LOCID_ADD_WITHOUT_ATTACHMENT)) {
                                return;
                            }
                        }
                    }

                    if (result.Success) {

                        o.EmailBody = "";
                        o.EmailSubject = "";
                        o.EmailTemplateId = "";
                        if (typeof(result.ReturnValue) == "string") {
                            oXml = XUI.Xml.LoadXml(result.ReturnValue);
                            o.EmailBody = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oXml, "template/body", null));
                            o.EmailSubject = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oXml, "template/subject", null));
                            o.EmailTemplateId = XUI.Xml
                                .GetText(XUI.Xml.SelectSingleNode(oXml, "template/templateid", null));
                        }

                        window.returnValue = o;

                    } else {
                        window.returnValue = null;
                    }
                }
            }
        } else {
            window.returnValue = null;
        }
        Mscrm.Utilities.setReturnValue(window.returnValue);
        closeWindow();
    }
    <%
        }
    %>

    function SelectTemplate(o, bWasDblClick) {
        if (o != _oTemplate) {
            SelectItem(o);

            _oTemplate = o;

            XUI.Html.SetText($get("TmplType"), _oTemplate.getAttribute("tmplType"));
            $get("TmplType").title = XUI.Html.GetText($get("TmplType"));

            XUI.Html.SetText($get("TmplCreatedBy"), _oTemplate.getAttribute("tmplCreatedBy"));
            $get("TmplCreatedBy").title = XUI.Html.GetText($get("TmplCreatedBy"));

            XUI.Html.SetText($get("TmplCreatedOn"),
                Mscrm.DateTimeUtility.formatDate(ParseUtcDate(_oTemplate.getAttribute("tmplCreatedOn"))));
            $get("TmplCreatedOn").title = XUI.Html.GetText($get("TmplCreatedOn"));

            XUI.Html.SetText($get("TmplDesc"), _oTemplate.getAttribute("tmplDesc"));
            $get("TmplDesc").title = XUI.Html.GetText($get("TmplDesc"));
            <%
        if (Util.IsEmailEngagementFeatureEnabled(Microsoft.Crm.Application.Security.UserInformation.Current))
        {
            %>
            XUI.Html.SetText($get("TmplReplyRate"), _oTemplate.getAttribute("tmplReplyRate"));
            $get("TmplReplyRate").title = XUI.Html.GetText($get("TmplReplyRate"));

            XUI.Html.SetText($get("TmplOpenRate"), _oTemplate.getAttribute("tmplOpenRate"));
            $get("TmplOpenRate").title = XUI.Html.GetText($get("TmplOpenRate"));

            XUI.Html.SetText($get("TmplSentCount"), _oTemplate.getAttribute("tmplSentCount"));
            $get("TmplSentCount").title = XUI.Html.GetText($get("TmplSentCount"));
            <% } %>
        }
        <%
        if (!_isBulkMail)
        {
        %>
        $get("butBegin").disabled = false;

        if (bWasDblClick) {
            Ok();
        }
        <%
        }
        %>
    }


    function ChangeLanguage() {
        var languageCode = $get("LanguageCode").value;

        var oCommand = new RemoteCommand("DialogList", "RetrieveEmailTemplateListHtml");
        oCommand.SetParameter("languageCode", languageCode);
        oCommand.SetParameter("templateTypeCode", _templateTypeCode);

        var oResult = oCommand.Execute();
        if (typeof(oResult.ReturnValue) == "string") {
            $get("ItemList").innerHTML = oResult.ReturnValue;
            AutoSelectFirstTemplate();
        } else {
            $get("ItemList").innerHTML = "";
            $get("butBegin").disabled = true;
        }
    }

    function applychanges() {
        Ok();
    }


    function cancel() {
        closeWindow();
    }

</script>
<style>
    .ms-crm-email {
        position: absolute;
        top: 15px;
        left: 15px;
        right: 15px;
        display: inline-block;
        overflow: hidden;
        <%
            if (_isBulkMail)
            {
        %>
        height: 195px;
        <% }
            else
            { %>
        bottom: 15px;
        <% } %>
    }

    .ms-crm-bulkMail {
        position: absolute;
        display: inline-block;
        top: 230px;
        left: 15px;
        right: 15px;
        bottom: 0px;
        height: 50%;
    }

    .blockLeft {
        position: absolute;
        top: 0px;
        bottom: 0px;
        width: 50%;
        bottom: 0px;
        display: inline-block;
        <% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
           { %>
        right: 0px;
        <% }
           else
           { %>
        left: 0px;
        <% } %>
    }

    .blockRight {
        position: absolute;
        width: 50%;
        display: inline-block;
        vertical-align: top;
        top: 0px;
        bottom: 0px;
        overflow: auto;
        <% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
           { %>
        left: 0px;
        <% }
           else
           { %>
        right: 0px;
        <% } %>
    }

</style>
</head>
<body>
<form name="crmForm" id="crmForm" action="" style="padding: 0px; margin: 0px; height: 100%;">
    <div class="ms-crm-absolutePosition">
        <div class="ms-crm-email">
            <div style="display: inline-block; height: 25px; padding-bottom: 10px; width: 50%;">
                <table cellpadding="0" cellspacing="0" width="100%" style="position: relative;">
                    <col width="100"/><col/>
                    <tr>
                        <td id="languagecode_c">
                            <label for="LanguageCode">
                                <loc:MetadataText ID="MetadataText1" EntityType="template" AttributeName="languagecode" runat="server"/>
                            </label>
                        </td>
                        <td nowrap="nowrap">&nbsp;<sdk:LanguagePicker id="LanguageCode" runat="server" IncludeAllOption="true" OnChange="ChangeLanguage();"/></td>
                    </tr>
                </table>
            </div>
            <div style="position: absolute; top: 35px; bottom: 0px; left: 0px; right: 0px; width: 100%;">
                <div class="blockLeft">


                    <div id="ItemList" class="ms-crm-Dialog-List ms-crm-Dialog-List-Layered ms-crm-TextAlign-LeadingEdge  ms-crm-absolutePosition" style="padding-top: 0px; padding-bottom: 0px; height: auto;">
                        <ui:XmlRenderer id="xmlRenderer" runat="server"/>
                    </div>


                </div>
                <div class="blockRight">
                    <div class="dlg_bulkemail_td_TemplateListStart" style="width: 100%;">


                        <div class="dlgLabel ms-crm-Bold-Header crm-divLeft">
                            <loc:text id="Text1" resourceid="Web._grid.cmds.dlg_bulkemail.aspx_150" runat="server"/>
                        </div>
                        <div class="crm-divRight">
                            <nobr id="TmplType">&nbsp;</nobr>
                        </div>
                        <div class="dlgLabel ms-crm-Bold-Header crm-divLeft">
                            <loc:text id="Text2" resourceid="Web._grid.cmds.dlg_bulkemail.aspx_151" runat="server"/>
                        </div>
                        <div class="crm-divRight">
                            <nobr id="TmplCreatedBy">&nbsp;</nobr>
                        </div>
                        <div class="dlgLabel ms-crm-Bold-Header crm-divLeft">
                            <loc:text id="Text3" resourceid="Web._grid.cmds.dlg_bulkemail.aspx_152" runat="server"/>
                        </div>
                        <div class="crm-divRight">
                            <nobr id="TmplCreatedOn">&nbsp;</nobr>
                        </div>
                        <%
                            if (Util.IsEmailEngagementFeatureEnabled(Microsoft.Crm.Application.Security.UserInformation.Current))
                            {
                        %>
                            <div class="dlgLabel ms-crm-Bold-Header crm-divLeft">
                                <loc:text id="Text14" resourceid="Web._grid.cmds.dlg_bulkemail.aspx_154" runat="server"/>
                            </div>
                            <div class="crm-divRight">
                                <nobr id="TmplReplyRate">&nbsp;</nobr>
                            </div>
                            <div class="dlgLabel ms-crm-Bold-Header crm-divLeft">
                                <loc:text id="Text15" resourceid="Web._grid.cmds.dlg_bulkemail.aspx_155" runat="server"/>
                            </div>
                            <div class="crm-divRight">
                                <nobr id="TmplOpenRate">&nbsp;</nobr>
                            </div>
                            <div class="dlgLabel ms-crm-Bold-Header crm-divLeft">
                                <loc:text id="Text16" resourceid="Web._grid.cmds.dlg_bulkemail.aspx_156" runat="server"/>
                            </div>
                            <div class="crm-divRight">
                                <nobr id="TmplSentCount">&nbsp;</nobr>
                            </div>
                        <% } %>
                        <div class="dlgLabel ms-crm-Bold-Header crm-divLeft">
                            <loc:text id="Text4" resourceid="Web._grid.cmds.dlg_bulkemail.aspx_153" runat="server"/>
                        </div>
                        <div id="TmplDesc" class="crm-divRight">
                        </div>


                    </div>
                </div>
            </div>
        </div>
        <%
            if (_isBulkMail)
            {
        %>
            <div class="ms-crm-bulkMail">
                <table style="table-layout: fixed;" cellspacing="0" cellpadding="0">
                    <col width="26"><col width="26"><col>
                    <tr>
                        <td colspan="3">
                            <b class="ms-crm-float-LeadingEdge"><loc:Text ID="Text5" ResourceId="Web._grid.cmds.dlg_bulkemail.aspx_346" runat="server"/>:</b>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3">&nbsp;</td>
                    </tr>
                    <tr>
                        <td width="2%"></td>
                        <td valign="top" width="3%">
                            <input class="radio" type="radio" name="to" id="radSelected"/>
                        </td>
                        <td valign="top">
                            <div class="ms-crm-TextAlign-LeadingEdge">
                                <label class="ms-crm-Bold-Header" for="radSelected" id="labelSelected">
                                    <loc:Text ID="Text6" ResourceId="Web._grid.cmds.dlg_bulkemail.aspx_214" runat="server"/>
                                </label>
                            </div>
                            <div class="ms-crm-TextAlign-LeadingEdge" style="padding-top: 5px; color: #444444;">
                                <loc:Text ID="Text7" ResourceId="Web._grid.cmds.dlg_bulkemail.aspx_216" runat="server"/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3">&nbsp;</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td valign="top">
                            <input class="radio" type="radio" name="to" id="radCurrent"/>
                        </td>
                        <td valign="top">
                            <div class="ms-crm-TextAlign-LeadingEdge">
                                <label class="ms-crm-Bold-Header" for="radCurrent" id="labelCurrent">
                                    <loc:Text ID="Text8" ResourceId="Web._grid.cmds.dlg_bulkemail.aspx_225" runat="server"/>
                                </label>
                            </div>
                            <div class="ms-crm-TextAlign-LeadingEdge" style="padding-top: 5px; color: #444444;">
                                <loc:Text ID="Text9" ResourceId="Web._grid.cmds.dlg_bulkemail.aspx_227" runat="server"/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3">&nbsp;</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td valign="top">
                            <input class="radio" type="radio" name="to" id="radAll">
                        </td>
                        <td valign="top">
                            <div class="ms-crm-TextAlign-LeadingEdge">
                                <label class="ms-crm-Bold-Header" for="radAll" id="labelAll">
                                    <loc:Text ID="Text10" ResourceId="Web._grid.cmds.dlg_bulkemail.aspx_236" runat="server"/>
                                </label>
                            </div>
                            <div class="ms-crm-TextAlign-LeadingEdge" style="padding-top: 5px; color: #444444;">
                                <loc:Text ID="Text11" ResourceId="Web._grid.cmds.dlg_bulkemail.aspx_238" runat="server"/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3">&nbsp;</td>
                    </tr>
                    <tr>
                        <td colspan="3">
                            <b class="ms-crm-float-LeadingEdge"><loc:Text ID="Text12" ResourceId="Web._grid.cmds.dlg_bulkemail.aspx_386" runat="server"/>:</b>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3">&nbsp;</td>
                    </tr>
                    <tr>
                        <td colspan="3">
                            <table style="width: 100%">
                                <tr>
                                    <td nowrap="nowrap" class="ms-crm-Field-Required dlg_bulkemail_td_ActivitySender" style="width: 10%">
                                        <label for="crmLookup">
                                            <loc:Text ID="Text13" ResourceId="Web._grid.cmds.dlg_bulkemail.aspx_390" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
                                        </label>
                                    </td>
                                    <asp:TableCell id="crmLookupCell" runat="server"/>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </div>
        <%
            }
        %>
    </div>
</form>
<%
    if (Util.IsEmailEngagementFeatureEnabled(Microsoft.Crm.Application.Security.UserInformation.Current))
    {
%>
    <div class="dlgLabel ms-crm-Bold-Header crm-divLeft" style="position: fixed; padding-top: 0px;">
        <img alt="" src="/_imgs/recommended_16.png" aria-label="<loc:text resourceid="RecommendedTemplateIconTitle" runat="server"/>" Title="<loc:text resourceid="RecommendedTemplateIconTitle" runat="server"/>" />
        <loc:Text ID="Text17" ResourceId="Forms.Recommended.AltTag" runat="server"/>
    </div>
<% } %>
</body>
</html>