<!DOCTYPE html>
<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.AutoNumbering.AutoNumberingPage" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm.Security" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<html>
<head>
<cnt:AppHeader runat="server" id="crmHeader"/>
<script language="javascript" type="text/javascript">
    var crmForm = null;
    Sys.Application.add_load(function() {
        crmForm = $get("crmFormPage");
        AdjustTabAndContentWidth();
        $addHandler(window, 'resize', AdjustTabAndContentWidth);
        attachWindowOnUnload(OnPageUnload);
    });

    function AdjustTabAndContentWidth() {
        var tabWidth = $get("crmTabBar").offsetWidth;
        var tabBlockWidth = $get("divTabBlock").offsetWidth;
        var curWidth = (((tabWidth > tabBlockWidth) ? tabWidth : tabBlockWidth) - 3);

        curWidth = curWidth - 10;
        $get("divContentArea").style.width = curWidth + "px"
        $get("divTab").style.width = curWidth + "px"
    }

    function cancel() {
        closeWindow();
    }

    function OnPageUnload() {
        $removeHandler(window, 'resize', AdjustTabAndContentWidth);
    }

    function applychanges() {
        trimPrefixes();

        if (!validateRequiredInput(crmForm.ContractsPrefix, LOCID_AUTONUM_CNTPFXLBL)) {
            return;
        }
        if (!validateRequiredInput(crmForm.CasesPrefix, LOCID_AUTONUM_CSPFXLBL)) {
            return;
        }
        if (!validateRequiredInput(crmForm.KBArticlesPrefix, LOCID_AUTONUM_KBAPFXLBL)) {
            return;
        }
        if (!validateRequiredInput(crmForm.KAArticlesPrefix, LOCID_AUTONUM_KAPFXLBL)) {
            return;
        }
        if (!validateRequiredInput(crmForm.QuotesPrefix, LOCID_AUTONUM_QTPFXLBL)) {
            return;
        }
        if (!validateRequiredInput(crmForm.OrdersPrefix, LOCID_AUTONUM_ORDPFXLBL)) {
            return;
        }
        if (!validateRequiredInput(crmForm.InvoicesPrefix, LOCID_AUTONUM_INVPFXLBL)) {
            return;
        }
        if (!validateRequiredInput(crmForm.CampaignsPrefix, LOCID_AUTONUM_CMPPFXLBL)) {
            return;
        }
        if (!validateRequiredInput(crmForm.CategoryPrefix, LOCID_AUTONUM_CAFXLBL)) {
            return;
        }
        var xml = XUI.Xml.CreateDocument();

        var organizationElement = xml.createElement("organization");
        xml.appendChild(organizationElement);

        var element = xml.createElement("campaignprefix");
        XUI.Xml.SetText(element, crmForm.CampaignsPrefix.value);
        organizationElement.appendChild(element);

        element = xml.createElement("contractprefix");
        XUI.Xml.SetText(element, crmForm.ContractsPrefix.value);
        organizationElement.appendChild(element);

        element = xml.createElement("caseprefix");
        XUI.Xml.SetText(element, crmForm.CasesPrefix.value);
        organizationElement.appendChild(element);

        element = xml.createElement("kbprefix");
        XUI.Xml.SetText(element, crmForm.KBArticlesPrefix.value);
        organizationElement.appendChild(element);

        element = xml.createElement("kaprefix");
        XUI.Xml.SetText(element, crmForm.KAArticlesPrefix.value);
        organizationElement.appendChild(element);

        element = xml.createElement("quoteprefix");
        XUI.Xml.SetText(element, crmForm.QuotesPrefix.value);
        organizationElement.appendChild(element);

        element = xml.createElement("orderprefix");
        XUI.Xml.SetText(element, crmForm.OrdersPrefix.value);
        organizationElement.appendChild(element);

        element = xml.createElement("invoiceprefix");
        XUI.Xml.SetText(element, crmForm.InvoicesPrefix.value);
        organizationElement.appendChild(element);

        element = xml.createElement("uniquespecifierlength");
        XUI.Xml.SetText(element, crmForm.SuffixLen.value);
        organizationElement.appendChild(element);

        element = xml.createElement("categoryprefix");
        XUI.Xml.SetText(element, crmForm.CategoryPrefix.value);
        organizationElement.appendChild(element);

        var boSuccess = true;
        var xmlhttp = new XMLHttpRequest();
        var oUrl = Mscrm.CrmUri.create("/Tools/AutoNumbering/cmds/cmd_update.aspx");
        xmlhttp.open("POST", oUrl.toString(), false);
        Mscrm.Utilities.setResponseTypeToMSXml(xmlhttp);
        SetTokenInHeader(xmlhttp, oUrl);

        boSuccess = Mscrm.Utilities.safeHttpSend(xmlhttp, xml);
        if (boSuccess) {
            handleXMLErr(xmlhttp.responseXML);


        }
        if (boSuccess) {
            closeWindow();
        }

    }

    function trimPrefixes() {
        trimPrefix(crmForm.ContractsPrefix);
        trimPrefix(crmForm.CasesPrefix);
        trimPrefix(crmForm.KBArticlesPrefix);
        trimPrefix(crmForm.KAArticlesPrefix);
        trimPrefix(crmForm.QuotesPrefix);
        trimPrefix(crmForm.OrdersPrefix);
        trimPrefix(crmForm.InvoicesPrefix);
        trimPrefix(crmForm.CampaignsPrefix);
        trimPrefix(crmForm.CategoryPrefix);
    }

    function trimPrefix(oCntrol) {
        oCntrol.value = Trim(oCntrol.value);
    }

    function validate(eventObj, sName, bUsedSuffix, bDropSuffix) {
        var oSrc = eventObj.target;

        if (oSrc.name.indexOf("Number") > 0) {
            oSrc.value = oSrc.value.replace(/[^0-9]/, "");
        }

        updateUI(sName, bUsedSuffix, bDropSuffix);
    }


    function PadString(s, c, iLen, sWhere) {
        var i = s.length;
        while (i < iLen) {
            s = (sWhere == "left" ? c + s : s + c);
            i++;
        }

        return s;
    }

    function updateUI(sName, bUsedSuffix, bDropSuffix) {
        var bConfirm = true;
        var iLenSuffix = 0;


        var o = $get(sName + "Example");

        if (bDropSuffix) {
            if (confirm(LOCID_AUTONUM_CNFRMDROPSFX)) {


                if (bUsedSuffix) {
                    var oLen = crmForm[sName + "LengthSuffix"];

                    if (oLen) {
                        iLenSuffix = oLen.value;

                        crmForm.ContractsLengthSuffix.value = iLenSuffix;
                        crmForm.CasesLengthSuffix.value = iLenSuffix;
                        crmForm.QuotesLengthSuffix.value = iLenSuffix;
                        crmForm.OrdersLengthSuffix.value = iLenSuffix;
                        crmForm.InvoicesLengthSuffix.value = iLenSuffix;
                        crmForm.CampaignsLengthSuffix.value = iLenSuffix;
                        crmForm.CategoryLengthSuffix.value = iLenSuffix;
                        crmForm.SuffixLen.value = iLenSuffix;

                    }


                    var newSuffix = (crmForm.DefaultSuffix.value).substr(0, iLenSuffix);

                    XUI.Html.SetText($get("ContractsExample"),
                        formatString(_autoNumberTemplateSuffix,
                            crmForm.ContractsPrefix.value,
                            PadString(crmForm.ContractsNumber.value, "0", 5, "left"),
                            newSuffix));
                    XUI.Html.SetText($get("CasesExample"),
                        formatString(_autoNumberTemplateSuffix,
                            crmForm.CasesPrefix.value,
                            PadString(crmForm.CasesNumber.value, "0", 5, "left"),
                            newSuffix));
                    XUI.Html.SetText($get("QuotesExample"),
                        formatString(_autoNumberTemplateSuffix,
                            crmForm.QuotesPrefix.value,
                            PadString(crmForm.QuotesNumber.value, "0", 5, "left"),
                            newSuffix));
                    XUI.Html.SetText($get("OrdersExample"),
                        formatString(_autoNumberTemplateSuffix,
                            crmForm.OrdersPrefix.value,
                            PadString(crmForm.OrdersNumber.value, "0", 5, "left"),
                            newSuffix));
                    XUI.Html.SetText($get("InvoicesExample"),
                        formatString(_autoNumberTemplateSuffix,
                            crmForm.InvoicesPrefix.value,
                            PadString(crmForm.InvoicesNumber.value, "0", 5, "left"),
                            newSuffix));
                    XUI.Html.SetText($get("CampaignsExample"),
                        formatString(_autoNumberTemplateSuffix,
                            crmForm.CampaignsPrefix.value,
                            PadString(crmForm.CampaignsNumber.value, "0", 5, "left"),
                            newSuffix));
                    XUI.Html.SetText($get("CategoryExample"),
                        formatString(_autoNumberTemplateSuffix,
                            crmForm.CategoryPrefix.value,
                            PadString(crmForm.CategoryNumber.value, "0", 5, "left"),
                            newSuffix));
                } else {
                    XUI.Html.SetText(o,
                        formatString(_autoNumberTemplate,
                            crmForm[sName + "Prefix"].value,
                            PadString(crmForm[sName + "Number"].value, "0", 5, "left")));
                }
            } else {
                crmForm[sName + "LengthSuffix"].value = crmForm.SuffixLen.value;
            }
        } else if (bUsedSuffix) {

            crmForm[sName + "LengthSuffix"].value = crmForm.SuffixLen.value;


            XUI.Html.SetText(o,
                formatString(_autoNumberTemplateSuffix,
                    crmForm[sName + "Prefix"].value,
                    PadString(crmForm[sName + "Number"].value, "0", 5, "left"),
                    (crmForm.DefaultSuffix.value).substr(0, crmForm.SuffixLen.value)));
        }


        if (!bUsedSuffix) {
            try {
                XUI.Html.SetText(o,
                    formatString(_autoNumberTemplate,
                        crmForm[sName + "Prefix"].value,
                        PadString(crmForm[sName + "Number"].value, "0", 5, "left")));
            } catch (err) {
                alert("error");
            }
        }

        var iBase = 8;
        var iTotal = iBase + 1 + Number(crmForm.SuffixLen.value);
    }
</script>

<style type"text/css">
Div.TabContent
{
height:95%;
width:auto;
position:absolute;
overflow-y:hidden;
overflow-x:hidden;
vertical-align:top;
top:0px;
bottom:-20px;
left:0px;
right:0px;
border:0px;
}

Div.ContentArea
{
vertical-align:top;
position:absolute;
top:19px;
bottom:0px;
left:0px;
right:0px;
display:block;
border:1px solid #a5acb5;
overflow-y:hidden;
overflow-x:hidden;
}

Div.Tab
{
position:absolute;
height:20px;
top:0px;
left:0px;
right:0px;
border:0px;
}

Div.MainDiv
{
width:93%;
height:92%;
padding-top:10px;
padding-bottom:10px;
margin-left:30px;
margin-right: 30px;
border:0px solid black;
overflow:hidden;
display:block;
}
</style>
</head>
<body>
<form name="crmForm" id="crmFormPage" style="height: 100%; width: 100%">
<frm:DialogForm id="crmForm" runat="server" DialogTab="true">
<input type="hidden" id="DefaultSuffix" name="DefaultSuffix" value="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(_defaultSuffix) %>"/>
<input type="hidden" id="SuffixLen" name="SuffixLen" value="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(_suffixLength) %>"/>

<div id="stdTable" class="MainDiv">
<div id="divTabBlock" class="ms-crm-Form-Area" style="position: relative; overflow-x: auto; overflow-y: hidden;">
<div id="divTab" class="ms-crm-TabBar-Cell Tab">
    <cnt:AppTabBar id="crmTabBar" runat="server"/>
</div>
<div id="divContentArea" class="ContentArea">
<div id="tab0" class="ms-crm-TabS TabContent">
    <table cellpadding="0" cellspacing="3" width="100%" style="table-layout: fixed;">
        <col width=100><col width=110><col>
        <tr>
            <td class="ms-crm-Field-Required" id="contractsprefix_c">
                <label for="ContractsPrefix">
                    <loc:Text ResourceId="Web.Tools.AutoNumbering.Dialogs.autonumbering.aspx_163" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
                </label>
            </td>
            <td>
                <input id="ContractsPrefix" name="ContractsPrefix" type="text" onkeyup="validate(new Sys.UI.DomEvent(event), 'Contracts', true);" onchange="validate(new Sys.UI.DomEvent(event), 'Contracts', true);" maxlength="3" size="10" value="<% = Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(_Contracts.Prefix) %>" style="background-color: <%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("Required_Fields_Background_Color")) %>"/>
            </td>
            <td></td>
        </tr>
        <tr>
            <td>
                <label for="ContractsNumber">
                    <loc:Text ResourceId="Web.Tools.AutoNumbering.Dialogs.autonumbering.aspx_168" runat="server"/>
                </label>
            </td>
            <td>
                <input id="ContractsNumber" name="ContractsNumber" type="text" onkeyup="validate(new Sys.UI.DomEvent(event), 'Contracts', true);" onchange="validate(new Sys.UI.DomEvent(event), 'Contracts', true);" maxlength="5" size="10" value="<%= _Contracts.Number %>"
                       <% if (_Contracts.DefaultNumber != _Contracts.Number)
                          {
                              Response.Write(" disabled");
                          } %>/>
            </td>
            <td></td>
        </tr>
        <tr>
            <td>
                <label for="ContractsLengthSuffix">
                    <loc:Text ResourceId="Web.Tools.AutoNumbering.Dialogs.autonumbering.aspx_259" runat="server"/>
                </label>
            </td>
            <td>
                <ui:Select id="ContractsLengthSuffix" runat="server" onchange="updateUI('Contracts', true, true);"/>
            </td>
            <td></td>
        </tr>
        <tr height="22">
            <td></td>
        </tr>
        <tr>
            <td>
                <loc:Text ResourceId="Web.Tools.AutoNumbering.Dialogs.autonumbering.aspx_175" runat="server"/>
            </td>
            <td colspan="2">
                <div id="ContractsExample" runat="Server"></div>
            </td>
        </tr>
    </table>
</div>
<div id="tab1" class="ms-crm-TabS TabContent">
    <table cellpadding="0" cellspacing="3" width="100%" style="table-layout: fixed;">
        <col width=100><col width=110><col>
        <tr>
            <td class="ms-crm-Field-Required" id="casesprefix_c">
                <label for="CasesPrefix">
                    <loc:Text ResourceId="Web.Tools.AutoNumbering.Dialogs.autonumbering.aspx_186" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
                </label>
            </td>
            <td>
                <input id="CasesPrefix" name="CasesPrefix" type="text" onkeyup="validate(new Sys.UI.DomEvent(event), 'Cases', true);" onchange="validate(new Sys.UI.DomEvent(event), 'Cases', true);" maxlength="3" size="10" value="<% = Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(_Cases.Prefix) %>" style="background-color: <%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("Required_Fields_Background_Color")) %>"/>
            </td>
            <td></td>
        </tr>
        <tr>
            <td>
                <label for="CasesNumber">
                    <loc:Text ResourceId="Web.Tools.AutoNumbering.Dialogs.autonumbering.aspx_191" runat="server"/>
                </label>
            </td>
            <td>
                <input id="CasesNumber" name="CasesNumber" type="text" onkeyup="validate(new Sys.UI.DomEvent(event), 'Cases', true);" onchange="validate(new Sys.UI.DomEvent(event), 'Cases', true);" maxlength="5" size="10" value="<%= _Cases.Number %>"
                       <% if (_Cases.DefaultNumber != _Cases.Number)
                          {
                              Response.Write(" disabled");
                          } %>/>
            </td>
            <td></td>
        </tr>
        <tr>
            <td>
                <label for="CasesLengthSuffix">
                    <loc:Text ResourceId="Web.Tools.AutoNumbering.Dialogs.autonumbering.aspx_259" runat="server"/>
                </label>
            </td>
            <td>
                <ui:Select id="CasesLengthSuffix" runat="server" onchange="updateUI('Cases', true, true);"/>
            </td>
            <td></td>
        </tr>
        <tr height="22">
            <td></td>
        </tr>
        <tr>
            <td>
                <loc:Text ResourceId="Web.Tools.AutoNumbering.Dialogs.autonumbering.aspx_211" runat="server"/>
            </td>
            <td colspan="2">
                <div id="CasesExample" runat="Server"></div>
            </td>
        </tr>
    </table>
</div>
<div id="tab2" class="ms-crm-TabS TabContent">
    <table cellpadding="0" cellspacing="3" width="100%" style="table-layout: fixed;">
        <col width=100><col width=110><col>
        <tr>
            <td class="ms-crm-Field-Required" id="kbaarticlesprefix_c">
                <label for="KBArticlesPrefix">
                    <loc:Text ResourceId="Web.Tools.AutoNumbering.Dialogs.autonumbering.aspx_222" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
                </label>
            </td>
            <td>
                <input id="KBArticlesPrefix" name="KBArticlesPrefix" type="text" onkeyup="validate(new Sys.UI.DomEvent(event), 'KBArticles', false);" onchange="validate(new Sys.UI.DomEvent(event), 'KBArticles', false);" maxlength="3" size="10" value="<% = Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(_KBArticles.Prefix) %>" style="background-color: <%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("Required_Fields_Background_Color")) %>"/>
            </td>
            <td></td>
        </tr>
        <tr>
            <td>
                <label for="KBArticlesNumber">
                    <loc:Text ResourceId="Web.Tools.AutoNumbering.Dialogs.autonumbering.aspx_227" runat="server"/>
                </label>
            </td>
            <td>
                <input id="KBArticlesNumber" name="KBArticlesNumber" type="text" onkeyup="validate(new Sys.UI.DomEvent(event), 'KBArticles', false);" onchange="validate(new Sys.UI.DomEvent(event), 'KBArticles', false);" maxlength="5" size="10" value="<%= _KBArticles.Number %>"
                       <% if (_KBArticles.DefaultNumber != _KBArticles.Number)
                          {
                              Response.Write(" disabled");
                          } %>/>
            </td>
            <td></td>
        </tr>
        <tr height="22">
            <td></td>
        </tr>
        <tr>
            <td>
                <loc:Text ResourceId="Web.Tools.AutoNumbering.Dialogs.autonumbering.aspx_235" runat="server"/>
            </td>
            <td>
                <div id="KBArticlesExample" runat="Server"></div>
            </td>
        </tr>
    </table>
</div>
<div id="tab3" class="ms-crm-TabS TabContent">
    <table cellpadding="0" cellspacing="3" width="100%" style="table-layout: fixed;">
        <col width=100><col width=110><col>
        <tr>
            <td class="ms-crm-Field-Required" id="quotesprefix_c">
                <label for="QuotesPrefix">
                    <loc:Text ResourceId="Web.Tools.AutoNumbering.Dialogs.autonumbering.aspx_246" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
                </label>
            </td>
            <td>
                <input id="QuotesPrefix" name="QuotesPrefix" type="text" onkeyup="validate(new Sys.UI.DomEvent(event), 'Quotes', true);" onchange="validate(new Sys.UI.DomEvent(event), 'Quotes', true);" maxlength="3" size="10" value="<% = Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(_Quotes.Prefix) %>" style="background-color: <%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("Required_Fields_Background_Color")) %>"/>
            </td>
            <td></td>
        </tr>
        <tr>
            <td>
                <label for="QuotesNumber">
                    <loc:Text ResourceId="Web.Tools.AutoNumbering.Dialogs.autonumbering.aspx_251" runat="server"/>
                </label>
            </td>
            <td>
                <input id="QuotesNumber" name="QuotesNumber" type="text" onkeyup="validate(new Sys.UI.DomEvent(event), 'Quotes', true);" onchange="validate(new Sys.UI.DomEvent(event), 'Quotes', true);" maxlength="5" size="10" value="<%= _Quotes.Number %>"
                       <% if (_Quotes.DefaultNumber != _Quotes.Number)
                          {
                              Response.Write(" disabled");
                          } %>/>
            </td>
            <td></td>
        </tr>
        <tr>
            <td>
                <label for="QuotesLengthSuffix">
                    <loc:Text ResourceId="Web.Tools.AutoNumbering.Dialogs.autonumbering.aspx_259" runat="server"/>
                </label>
            </td>
            <td>
                <ui:Select id="QuotesLengthSuffix" runat="server" onchange="updateUI('Quotes', true, true);"/>
            </td>
            <td></td>
        </tr>
        <tr height="22">
            <td></td>
        </tr>
        <tr>
            <td>
                <loc:Text ResourceId="Web.Tools.AutoNumbering.Dialogs.autonumbering.aspx_271" runat="server"/>
            </td>
            <td colspan="2">
                <div id="QuotesExample" runat="Server"></div>
            </td>
        </tr>
    </table>
</div>
<div id="tab4" class="ms-crm-TabS TabContent">
    <table cellpadding="0" cellspacing="3" width="100%" style="table-layout: fixed;">
        <col width=100><col width=110><col>
        <tr>
            <td class="ms-crm-Field-Required" id="ordersprefix_c">
                <label for="OrdersPrefix">
                    <loc:Text ResourceId="Web.Tools.AutoNumbering.Dialogs.autonumbering.aspx_282" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
                </label>
            </td>
            <td>
                <input id="OrdersPrefix" name="OrdersPrefix" type="text" onkeyup="validate(new Sys.UI.DomEvent(event), 'Orders', true);" onchange="validate(new Sys.UI.DomEvent(event), 'Orders', true);" maxlength="3" size="10" value="<% = Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(_Orders.Prefix) %>" style="background-color: <%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("Required_Fields_Background_Color")) %>"/>
            </td>
            <td></td>
        </tr>
        <tr>
            <td>
                <label for="OrdersNumber">
                    <loc:Text ResourceId="Web.Tools.AutoNumbering.Dialogs.autonumbering.aspx_287" runat="server"/>
                </label>
            </td>
            <td>
                <input id="OrdersNumber" name="OrdersNumber" type="text" onkeyup="validate(new Sys.UI.DomEvent(event), 'Orders', true);" onchange="validate(new Sys.UI.DomEvent(event), 'Orders', true);" maxlength="5" size="10" value="<%= _Orders.Number %>"
                       <% if (_Orders.DefaultNumber != _Orders.Number)
                          {
                              Response.Write(" disabled");
                          } %>/>
            </td>
            <td></td>
        </tr>
        <tr>
            <td>
                <label for="OrdersLengthSuffix">
                    <loc:Text ResourceId="Web.Tools.AutoNumbering.Dialogs.autonumbering.aspx_259" runat="server"/>
                </label>
            </td>
            <td>
                <ui:Select id="OrdersLengthSuffix" runat="server" onchange="updateUI('Orders', true, true);"/>
            </td>
            <td></td>
        </tr>
        <tr height="22">
            <td></td>
        </tr>
        <tr>
            <td>
                <loc:Text ResourceId="Web.Tools.AutoNumbering.Dialogs.autonumbering.aspx_307" runat="server"/>
            </td>
            <td colspan="2">
                <div id="OrdersExample" runat="Server"></div>
            </td>
        </tr>
    </table>
</div>
<div id="tab5" class="ms-crm-TabS TabContent">
    <table cellpadding="0" cellspacing="3" width="100%" style="table-layout: fixed;">
        <col width=100><col width=110><col>
        <tr>
            <td class="ms-crm-Field-Required" id="invoicesprefix_c">
                <label for="InvoicesPrefix">
                    <loc:Text ResourceId="Web.Tools.AutoNumbering.Dialogs.autonumbering.aspx_318" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
                </label>
            </td>
            <td>
                <input id="InvoicesPrefix" name="InvoicesPrefix" type="text" onkeyup="validate(new Sys.UI.DomEvent(event), 'Invoices', true);" onchange="validate(new Sys.UI.DomEvent(event), 'Invoices', true);" maxlength="3" size="10" value="<% = Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(_Invoices.Prefix) %>" style="background-color: <%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("Required_Fields_Background_Color")) %>"/>
            </td>
            <td></td>
        </tr>
        <tr>
            <td>
                <label for="InvoicesNumber">
                    <loc:Text ResourceId="Web.Tools.AutoNumbering.Dialogs.autonumbering.aspx_323" runat="server"/>
                </label>
            </td>
            <td>
                <input id="InvoicesNumber" name="InvoicesNumber" type="text" onkeyup="validate(new Sys.UI.DomEvent(event), 'Invoices', true);" onchange="validate(new Sys.UI.DomEvent(event), 'Invoices', true);" maxlength="5" size="10" value="<%= _Invoices.Number %>"
                       <% if (_Invoices.DefaultNumber != _Invoices.Number)
                          {
                              Response.Write(" disabled");
                          } %>/>
            </td>
            <td></td>
        </tr>
        <tr>
            <td>
                <label for="InvoicesLengthSuffix">
                    <loc:Text ResourceId="Web.Tools.AutoNumbering.Dialogs.autonumbering.aspx_259" runat="server"/>
                </label>
            </td>
            <td>
                <ui:Select id="InvoicesLengthSuffix" runat="server" onchange="updateUI('Invoices', true, true);"/>
            </td>
            <td></td>
        </tr>
        <tr height="22">
            <td></td>
        </tr>
        <tr>
            <td>
                <loc:Text ResourceId="Web.Tools.AutoNumbering.Dialogs.autonumbering.aspx_343" runat="server"/>
            </td>
            <td colspan="2">
                <div id="InvoicesExample" runat="Server"></div>
            </td>
        </tr>
    </table>
</div>
<div id="tab6" class="ms-crm-TabS TabContent">
    <table cellpadding="0" cellspacing="3" width="100%" style="table-layout: fixed;">
        <col width=100><col width=110><col>
        <tr>
            <td class="ms-crm-Field-Required" id="campaignsprefix_c">
                <label for="CampaignsPrefix">
                    <loc:Text ResourceId="Web.Tools.AutoNumbering.Dialogs.autonumbering.aspx_163" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
                </label>
            </td>
            <td>
                <input id="CampaignsPrefix" name="CampaignsPrefix" type="text" onkeyup="validate(new Sys.UI.DomEvent(event), 'Campaigns', false);" onchange="validate(new Sys.UI.DomEvent(event), 'Campaigns', false);" maxlength="3" size="10" value="<% = Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(_Campaigns.Prefix) %>" style="background-color: <%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("Required_Fields_Background_Color")) %>"/>
            </td>
            <td></td>
        </tr>
        <tr>
            <td>
                <label for="CampaignsNumber">
                    <loc:Text ResourceId="Web.Tools.AutoNumbering.Dialogs.autonumbering.aspx_168" runat="server"/>
                </label>
            </td>
            <td>
                <input id="CampaignsNumber" name="CampaignsNumber" type="text" onkeyup="validate(new Sys.UI.DomEvent(event), 'Campaigns', false);" onchange="validate(new Sys.UI.DomEvent(event), 'Campaigns', false);" maxlength="5" size="10" value="<%= _Campaigns.Number %>"
                       <% if (_Campaigns.DefaultNumber != _Campaigns.Number)
                          {
                              Response.Write(" disabled");
                          } %>/>
            </td>
            <td></td>
        </tr>
        <tr>
            <td>
                <label for="CampaignsLengthSuffix">
                    <loc:Text ResourceId="Web.Tools.AutoNumbering.Dialogs.autonumbering.aspx_259" runat="server"/>
                </label>
            </td>
            <td>
                <ui:Select id="CampaignsLengthSuffix" runat="server" onchange="updateUI('Campaigns', true, true);"/>
            </td>
            <td></td>
        </tr>
        <tr height="22">
            <td></td>
        </tr>
        <tr>
            <td>
                <loc:Text ResourceId="Web.Tools.AutoNumbering.Dialogs.autonumbering.aspx_175" runat="server"/>
            </td>
            <td>
                <div id="CampaignsExample" runat="Server"></div>
            </td>
        </tr>

    </table>
</div>
<div id="tab8" class="ms-crm-TabS TabContent">
    <table cellpadding="0" cellspacing="3" width="100%" style="table-layout: fixed;">
        <col width=100><col width=110><col>
        <tr>
            <td class="ms-crm-Field-Required" id="kaarticlesprefix_c">
                <label for="KAArticlesPrefix">
                    <loc:Text ResourceId="Web.Tools.AutoNumbering.Dialogs.autonumbering.aspx_345" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
                </label>
            </td>
            <td>
                <input id="KAArticlesPrefix" name="KAArticlesPrefix" type="text" onkeyup="validate(new Sys.UI.DomEvent(event), 'KAArticles', false);" onchange="validate(new Sys.UI.DomEvent(event), 'KAArticles', false);" maxlength="3" size="10" value="<% = Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(_KAArticles.Prefix) %>" style="background-color: <%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("Required_Fields_Background_Color")) %>"/>
            </td>
            <td></td>
        </tr>
        <tr>
            <td>
                <label for="KAArticlesNumber">
                    <loc:Text ResourceId="Web.Tools.AutoNumbering.Dialogs.autonumbering.aspx_347" runat="server"/>
                </label>
            </td>
            <td>
                <input id="KAArticlesNumber" name="KAArticlesNumber" type="text" onkeyup="validate(new Sys.UI.DomEvent(event), 'KAArticles', false);" onchange="validate(new Sys.UI.DomEvent(event), 'KAArticles', false);" maxlength="5" size="10" value="<%= _KAArticles.Number %>"
                       <% if (_KAArticles.DefaultNumber != _KAArticles.Number)
                          {
                              Response.Write(" disabled");
                          } %>/>
            </td>
            <td></td>
        </tr>
        <tr height="22">
            <td></td>
        </tr>
        <tr>
            <td>
                <loc:Text ResourceId="Web.Tools.AutoNumbering.Dialogs.autonumbering.aspx_346" runat="server"/>
            </td>
            <td>
                <div id="KAArticlesExample" runat="Server"></div>
            </td>
        </tr>
    </table>
</div>
<div id="tab7" class="ms-crm-TabS TabContent">
    <table cellpadding="0" cellspacing="3" width="100%" style="table-layout: fixed;">
        <col width=100><col width=110><col>
        <tr>
            <td class="ms-crm-Field-Required" id="categoryprefix_c">
                <label for="CategoryPrefix">
                    <loc:Text ResourceId="Web.Tools.AutoNumbering.Dialogs.autonumbering.aspx_420" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
                </label>
            </td>
            <td>
                <input id="CategoryPrefix" name="CategoryPrefix" type="text" onkeyup="validate(new Sys.UI.DomEvent(event), 'Category', false);" onchange="validate(new Sys.UI.DomEvent(event), 'Category', false);" maxlength="3" size="10" value="<% = Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(_Category.Prefix) %>" style="background-color: <%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("Required_Fields_Background_Color")) %>"/>
            </td>
            <td></td>
        </tr>
        <tr>
            <td>
                <label for="CategoryNumber">
                    <loc:Text ResourceId="Web.Tools.AutoNumbering.Dialogs.autonumbering.aspx_428" runat="server"/>
                </label>
            </td>
            <td>
                <input id="CategoryNumber" name="CategoryNumber" type="text" onkeyup="validate(new Sys.UI.DomEvent(event), 'Category', false);" onchange="validate(new Sys.UI.DomEvent(event), 'Category', false);" maxlength="5" size="10" value="<%= _Category.Number %>"
                       <% if (_Category.DefaultNumber != _Category.Number)
                          {
                              Response.Write(" disabled");
                          } %>/>
            </td>
            <td></td>
        </tr>
        <tr>
            <td>
                <label for="CategoryLengthSuffix">
                    <loc:Text ResourceId="Web.Tools.AutoNumbering.Dialogs.autonumbering.aspx_259" runat="server"/>
                </label>
            </td>
            <td>
                <ui:Select id="CategoryLengthSuffix" runat="server" onchange="updateUI('Category', true, true);"/>
            </td>
            <td></td>
        </tr>
        <tr height="22">
            <td></td>
        </tr>
        <tr>
            <td>
                <loc:Text ResourceId="Web.Tools.AutoNumbering.Dialogs.autonumbering.aspx_429" runat="server"/>
            </td>
            <td>
                <div id="CategoryExample" runat="Server"></div>
            </td>
        </tr>

    </table>
</div>
</div>
</div>
</div>
</frm:DialogForm>
</form>
</body>
</html>