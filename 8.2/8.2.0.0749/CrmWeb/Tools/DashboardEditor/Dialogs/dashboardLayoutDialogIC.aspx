<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.DashboardLayoutDialogIC" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<!Doctype html>
<html>
<head>
<title><% = Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(_sTitle) %></title>
<cnt:AppHeader id="crmHeader" runat="server"/>
<script language="Javascript" type="text/javascript">
    var selectedLayout = -1;
    var _dashboardHover = "ms-crm-FixedMenuHover liFloat";
    var _dashboardSelect = "ms-crm-FixedMenuSelect liFloat";
    var _itemClassName = "ms-crm-RV-MenuItemL ms-crm-RV-MenuItem-Rest liFloat";
    var _itemHoverClassName = "ms-crm-RV-MenuItemL ms-crm-RV-MenuItem-Hover";
    var _itemSelectedClassName = "ms-crm-RV-MenuItemL ms-crmRV-MenuItem-Selected";

    var _anchorClassName = "ms-crm-RV-MenuItem-Anchor ms-crm-RV-MenuItem-Anchor-Rest";
    var _anchorHoverClassName = "ms-crm-RV-MenuItem-Anchor ms-crm-MenuItem-Hover";
    var _anchorSelectedClassName = "ms-crm-RV-MenuItem-Anchor ms-crm-RV-MenuItem-Anchor-Selected";

    var _iconClassName = "ms-crm-RV-MenuItem-IconL ms-crm-RV-MenuItem-Icon-Rest";
    var _iconHoverClassName = "ms-crm-RV-MenuItem-IconL ms-crm-RV-MenuItem-Icon-Hover";
    var _iconSelectedClassName = "ms-crm-RV-MenuItem-IconL ms-crm-RV-MenuItem-Icon-Selected";

    var interactionCentricStartLayout = 7;
    var interactionCentricEndLayout = 14;
    var selectedTabId = "type1Tab";


    $addHandler(window, "load", OnLoad);

    function OnLoad(domEvent) {
        var anchor1 = document.getElementById("7");
        SetSelected(domEvent, anchor1);


        var tabElement = document.getElementById("type1Tab");
        tabElement.addEventListener('click', function(event) { SetTabFocus(1, event); });

        if (typeof window.IS_ENTITY_DASHBOARD === 'undefined') {
            tabElement = document.getElementById("type2Tab");
            tabElement.addEventListener('click', function(event) { SetTabFocus(2, event); });
        }


        document.getElementById("type1").style.height = "270px";

        if (typeof window.IS_ENTITY_DASHBOARD === 'undefined') {
            document.getElementById("type2").style.height = "270px";
        }
        document.getElementById("dummyDivforIE7").removeAttribute("class");
        SetTabFocus(1, domEvent);
    }


    function SetTabFocus(tabId, event) {
        var anchor1;
        switch (tabId) {
        case 1:
            anchor1 = document.getElementById("7");
            SetSelected(Mscrm.Utilities.eventToDomEvent(event), anchor1);
            selectedTabId = "type1Tab";
            break;
        case 2:
            anchor1 = document.getElementById("11");
            SetSelected(Mscrm.Utilities.eventToDomEvent(event), anchor1);
            selectedTabId = "type2Tab";
            break;
        }
        setTabClass();
    }

    function setTabClass() {
        if (typeof window.IS_ENTITY_DASHBOARD === 'undefined') {
            if (selectedTabId == "type1Tab") {
                document.getElementById("type1Tab").className = "ms-crm-Tab ms-crm-Tab-Selected";
                document.getElementById("type2Tab").className = "ms-crm-Tab";
            } else if (selectedTabId == "type2Tab") {
                document.getElementById("type1Tab").className = "ms-crm-Tab";
                document.getElementById("type2Tab").className = "ms-crm-Tab ms-crm-Tab-Selected";
            }
        } else {
            if (selectedTabId == "type1Tab") {
                document.getElementById("type1Tab").className = "ms-crm-Tab ms-crm-Tab-Selected";
            }
        }
    }

    function cancel() {
        closeWindow();
    }

    function SetSelected(domEvent, anchor) {
        selectedLayout = anchor.id;

        if (IsNull(XUI.Html.DomUtils.HasChildElements(anchor))) {
            return;
        }

        DisplayHoverSelected(anchor);
        var liID = anchor.parentNode.id + "1";


        var liID = "li0" + selectedLayout;
        for (i = interactionCentricStartLayout; i <= interactionCentricEndLayout; i++) {
            document.getElementById("li0" + i).style.display = "none";
        }
        document.getElementById(liID).style.display = "block";

        if ((domEvent != null) && (Mscrm.Utilities.getDomEventKeyCode(domEvent) == "13")) {
            applychanges();
        }
    }

    function DisplayHoverSelected(anchor) {


        if (Sys.Browser.agent == Sys.Browser.InternetExplorer && Sys.Browser.version < 9) {
            if (!IsNull(window.frameElement) &&
                !IsNull(window.frameElement.parentNode) &&
                window.frameElement.parentNode.style.display == "none") {
                return;
            }
        }

        if (!IsNull(anchor) && !IsNull(XUI.Html.DomUtils.HasChildElements(anchor))) {
            anchor.parentNode.className = _dashboardSelect;
            XUI.Html.DomUtils.GetFirstChild(anchor).className = _iconHoverClassName;
            var childNodes = document.getElementsByTagName("a");
            for (i = 0; i < childNodes.length; i++) {
                if (childNodes[i].id != selectedLayout) {
                    DisplayHoverOff(childNodes[i]);
                } else {
                    childNodes[i].focus();
                }
            }
        }
    }

    function DisplayHover(anchor) {
        if (!IsNull(anchor) && selectedLayout != anchor.id && !IsNull(XUI.Html.DomUtils.HasChildElements(anchor))) {
            anchor.parentNode.className = _dashboardHover;
            XUI.Html.DomUtils.GetFirstChild(anchor).className = _iconHoverClassName;
        }
    }

    function DisplayHoverOff(anchor) {
        if (selectedLayout != anchor.id &&
            anchor.parentNode.id != "tdDialogHeader" &&
            !IsNull(XUI.Html.DomUtils.HasChildElements(anchor))) {
            anchor.parentNode.className = _itemClassName;
            XUI.Html.DomUtils.GetFirstChild(anchor).className = _iconClassName;
        }
        setTabClass();
    }

    function applychanges() {
        window.returnValue = selectedLayout;
        Mscrm.Utilities.setReturnValue(window.returnValue);
        closeWindow();
    }

    function OK(domEvent, anchor) {
        SetSelected(domEvent, anchor);
        applychanges();
    }

    function CreateTemplate(domEvent, anchor, itemID) {
        var keyCode = Mscrm.Utilities.getDomEventKeyCode(domEvent);
        if (keyCode == "13") {
            SetSelected(domEvent, anchor);
            domEvent.preventDefault();
        } else {
            var liID;
            var nextliID;
            var selectionID;
            var tValues;
            var tNextID;


            var keyDownEntries = new Array("0:0",
                "1:1",
                "2:2",
                "3:3",
                "4:4",
                "5:5",
                "6:6",
                "7:9",
                "8:10",
                "9:9",
                "10:10",
                "11:13",
                "12:14",
                "13:13",
                "14:14");
            var keyUpEntries = new Array("0:0",
                "1:1",
                "2:2",
                "3:3",
                "4:4",
                "5:5",
                "6:6",
                "7:7",
                "8:8",
                "9:7",
                "10:8",
                "11:11",
                "12:12",
                "13:11",
                "14:12");
            var keyRightEntries = new Array("0:0",
                "1:1",
                "2:2",
                "3:3",
                "4:4",
                "5:5",
                "6:6",
                "7:8",
                "8:9",
                "9:10",
                "10:10",
                "11:12",
                "12:13",
                "13:14",
                "14:14");
            var keyLeftEntries = new Array("0:0",
                "1:1",
                "2:2",
                "3:3",
                "4:4",
                "5:5",
                "6:6",
                "7:7",
                "8:7",
                "9:8",
                "10:9",
                "11:11",
                "12:11",
                "13:12",
                "14:13");

            selectionID = keyCode;
            liID = anchor.parentNode.id;

            switch (selectionID) {
            case 37:
                tValues = keyLeftEntries[itemID].split(":");
                break;
            case 38:
                tValues = keyUpEntries[itemID].split(":");
                break;
            case 39:
                tValues = keyRightEntries[itemID].split(":");
                break;
            case 40:
                tValues = keyDownEntries[itemID].split(":");
                break;
            default:
                return;
            }


            if (tNextID != itemID) {
                tNextID = tValues[1];
                document.getElementById(tNextID).focus();
            }
        }
    }
</script>
<style>
    .container {
        position: relative;
        height: 100%;
    }

    .selectcontainer {
        position: absolute;
        <% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
           { %>
        right: 0px;
        left: 50%;
        <% }
           else
           { %>
        left: 0px;
        right: 50%;
        <% } %>
    }

    .previewcontainer {
        position: absolute;

        <% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
           { %>
        right: 50%;
        left: 0px;
        margin-right: 5px;
        <% }
           else
           { %>
        left: 50%;
        right: 0px;
        margin-left: 5px;
        <% } %>
    }

    .selectcontainer,
    .previewcontainer {
        top: 0px;
        bottom: 0px;
        height: 100%;
    }

    .ms-crm-RV-MenuItem-Anchor {
        width: auto;
        text-align: center;
    }

    .liFloat {
        width: 131px;
        <% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
           { %>
        float: right;
        <% }
           else
           { %>
        float: left;
        <% } %>
    }

    .ms-crm-div-dashboard-type {
        text-overflow: ellipsis;
        color: #3b3b3b;
        overflow: hidden;
        white-space: nowrap;
    }
</style>
</head>
<body>
<frm:dialogform id="crmForm" runat="server">
<div class="crmTabBar" style="height: 20px;">
    <cnt:AppTabBar id="crmTabBar" runat="server"/>
</div>

<div id="type1" class="ms-crm-Tab">
    <div class="container">
        <div class="selectcontainer">
            <div style="overflow: auto; width: auto" class="ms-crm-RV-Menu">
                <ul class="ms-crm-RV-Menu">
                    <li class="ms-crm-RV-MenuItemL ms-crm-RV-MenuItem-Rest" itemindex="0">

                        <ul class="ms-crm-in-RV-Menu">
                            <li id="li7" class="ms-crm-RV-MenuItemL ms-crm-RV-MenuItem-Rest liFloat" itemIndex="0" title="<loc:Text Encoding='HtmlAttribute' ResourceId='CSR1_Layout1_Tooltip' runat='server' />">
                                <A id="7" tabindex="1" style="cursor: pointer; width: auto; padding: 10px" class="ms-crm-RV-MenuItem-Anchor ms-crm-RV-MenuItem-Anchor-Rest" onfocus="SetSelected(Mscrm.Utilities.eventToDomEvent(event), this)" onclick="SetSelected(Mscrm.Utilities.eventToDomEvent(event), this)" ondblclick="OK(Mscrm.Utilities.eventToDomEvent(event), this);" onmouseover="DisplayHover(this)" onmouseout="DisplayHoverOff(this)" href="#" onkeydown="CreateTemplate(Mscrm.Utilities.eventToDomEvent(event), this, 7);">
                                    <span>
                                        <span>
                                            <IMG class="ms-crm-RV-MenuItem-IconL ms-crm-RV-MenuItem-Icon-Rest" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='CSR1_Layout1_Title' runat='server' />" src="/_imgs/dashboard/L7.png">
                                        </span>
                                        <br/>
                                        <center style="padding-top: 5px">
                                            <div class="ms-crm-div-dashboard-type">
                                                <loc:Text ResourceId="CSR1_Layout1_Title" runat="server"/>
                                            </div>
                                        </center>
                                    </span>
                                </A>
                            </li>
                            <li id="li8" class="ms-crm-RV-MenuItemL ms-crm-RV-MenuItem-Rest liFloat" itemindex="1" title="<loc:Text Encoding='HtmlAttribute' ResourceId='CSR1_Layout2_Tooltip' runat='server' />">
                                <A id="8" tabindex="2" style="cursor: pointer; width: auto; padding: 10px" class="ms-crm-RV-MenuItem-Anchor ms-crm-RV-MenuItem-Anchor-Rest" onfocus="SetSelected(Mscrm.Utilities.eventToDomEvent(event), this)" onclick="SetSelected(Mscrm.Utilities.eventToDomEvent(event), this)" ondblclick="OK(Mscrm.Utilities.eventToDomEvent(event), this);" onmouseover="DisplayHover(this)" onmouseout="DisplayHoverOff(this)" href="#" onkeydown="CreateTemplate(Mscrm.Utilities.eventToDomEvent(event), this, 8);">
                                    <span>
                                        <span>
                                            <IMG class="ms-crm-RV-MenuItem-IconL ms-crm-RV-MenuItem-Icon-Rest" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='CSR1_Layout2_Title' runat='server' />" src="/_imgs/dashboard/L8.png">
                                        </span>
                                        <br/>
                                        <center style="padding-top: 5px">
                                            <div class="ms-crm-div-dashboard-type">
                                                <loc:Text ResourceId="CSR1_Layout2_Title" runat="server"/>
                                            </div>
                                        </center>
                                    </span>
                                </A>
                            </li>
                        </ul>
                    </li>
                    <li class="ms-crm-RV-MenuItemL ms-crm-RV-MenuItem-Rest" itemindex="1">
                        <ul class="ms-crm-in-RV-Menu">
                            <li id="li9" class="ms-crm-RV-MenuItemL ms-crm-RV-MenuItem-Rest liFloat" itemindex="0" title="<loc:Text Encoding='HtmlAttribute' ResourceId='CSR1_Layout3_Tooltip' runat='server' />">
                                <A id="9" tabindex="3" style="cursor: pointer; width: auto; padding: 10px" class="ms-crm-RV-MenuItem-Anchor ms-crm-RV-MenuItem-Anchor-Rest" onfocus="SetSelected(Mscrm.Utilities.eventToDomEvent(event), this)" onclick="SetSelected(Mscrm.Utilities.eventToDomEvent(event), this)" ondblclick="OK(Mscrm.Utilities.eventToDomEvent(event), this);" onmouseover="DisplayHover(this)" onmouseout="DisplayHoverOff(this)" href="#" onkeydown="CreateTemplate(Mscrm.Utilities.eventToDomEvent(event), this, 9);">
                                    <span>
                                        <span>
                                            <IMG class="ms-crm-RV-MenuItem-IconL ms-crm-RV-MenuItem-Icon-Rest" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='CSR1_Layout3_Title' runat='server' />" src="/_imgs/dashboard/L9.png">
                                        </span>
                                        <br/>
                                        <center style="padding-top: 5px">
                                            <div class="ms-crm-div-dashboard-type">
                                                <loc:Text ResourceId="CSR1_Layout3_Title" runat="server"/>
                                            </div>
                                        </center>
                                    </span>
                                </A>
                            </li>
                            <li id="li10" class="ms-crm-RV-MenuItemL ms-crm-RV-MenuItem-Rest liFloat" itemindex="1" title="<loc:Text Encoding='HtmlAttribute' ResourceId='CSR1_Layout4_Tooltip' runat='server' />">
                                <A id="10" tabindex="4" style="cursor: pointer; width: auto; padding: 10px" class="ms-crm-RV-MenuItem-Anchor ms-crm-RV-MenuItem-Anchor-Rest" onfocus="SetSelected(Mscrm.Utilities.eventToDomEvent(event), this)" onclick="SetSelected(Mscrm.Utilities.eventToDomEvent(event), this)" ondblclick="OK(Mscrm.Utilities.eventToDomEvent(event), this);" onmouseover="DisplayHover(this)" onmouseout="DisplayHoverOff(this)" href="#" onkeydown="CreateTemplate(Mscrm.Utilities.eventToDomEvent(event), this, 10);">
                                    <span>
                                        <span>
                                            <IMG class="ms-crm-RV-MenuItem-IconL ms-crm-RV-MenuItem-Icon-Rest" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='CSR1_Layout4_Title' runat='server' />" src="/_imgs/dashboard/L10.png">
                                        </span>
                                        <br/>
                                        <center style="padding-top: 5px">
                                            <div class="ms-crm-div-dashboard-type">
                                                <loc:Text ResourceId="CSR1_Layout4_Title" runat="server"/>
                                            </div>
                                        </center>
                                    </span>
                                </A>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <div class="previewcontainer">
            <div style="overflow: auto" class="ms-crm-RV-Menu">
                <ul class="ms-crm-in-RV-Menu" style="padding: 10px">
                    <li style="FLOAT: none; display: block;" id="li07" class="ms-crm-RV-view-item-MenuItemL ms-crm-RV-view-item-MenuItem-Rest" itemIndex="0">
                        <div style="text-align: center">
                            <img id="preview" class="ms-crm-RV-MenuItem-IconL ms-crm-RV-MenuItem-Icon-Rest" src="/_imgs/dashboard/L7_large.png"/>
                        </div>
                        <div class="ms-crm-db-padding">
                            <br/>
                            <span style="text-overflow: ellipsis; font-weight: bold; font-size: 12px">
                                <loc:Text ResourceId="CSR1_Layout1_Title" runat="server"/>
                            </span><br/><br/>
                            <span style="text-overflow: ellipsis; color: #3b3b3b;">
                                <loc:Text ResourceId="CSR1_Layout1_Sub_Title" runat="server"/>
                            </span>
                        </div>
                    </li>
                    <li style="FLOAT: none; display: none;" id="li08" class="ms-crm-RV-view-item-MenuItemL ms-crm-RV-view-item-MenuItem-Rest" itemIndex="0">
                        <div style="text-align: center">
                            <img id="Img1" class="ms-crm-RV-MenuItem-IconL ms-crm-RV-MenuItem-Icon-Rest" src="/_imgs/dashboard/L8_large.png"/>
                        </div>
                        <div class="ms-crm-db-padding">
                            <br/>
                            <span style="text-overflow: ellipsis; font-weight: bold; font-size: 12px">
                                <loc:Text ResourceId="CSR1_Layout2_Title" runat="server"/>
                            </span><br/><br/>
                            <span class="ms-crm-RV-MenuItem-Title-Rest" style="text-overflow: ellipsis; color: #3b3b3b;">
                                <loc:Text ResourceId="CSR1_Layout2_Sub_Title" runat="server"/>
                            </span>
                        </div>
                    </li>
                    <li style="FLOAT: none; display: none;" id="li09" class="ms-crm-RV-view-item-MenuItemL ms-crm-RV-view-item-MenuItem-Rest" itemIndex="0">
                        <div style="text-align: center">
                            <img id="Img3" class="ms-crm-RV-MenuItem-IconL ms-crm-RV-MenuItem-Icon-Rest" src="/_imgs/dashboard/L9_large.png"/>
                        </div>
                        <div class="ms-crm-db-padding">
                            <br/>
                            <span style="text-overflow: ellipsis; font-weight: bold; font-size: 12px">
                                <loc:Text ResourceId="CSR1_Layout3_Title" runat="server"/>
                            </span><br/><br/>
                            <span class="ms-crm-RV-MenuItem-Title-Rest" style="text-overflow: ellipsis; color: #3b3b3b;">
                                <loc:Text ResourceId="CSR1_Layout3_Sub_Title" runat="server"/>
                            </span>
                        </div>
                    </li>
                    <li style="FLOAT: none; display: none;" id="li010" class="ms-crm-RV-view-item-MenuItemL ms-crm-RV-view-item-MenuItem-Rest" itemIndex="0">
                        <div style="text-align: center">
                            <img id="Img4" class="ms-crm-RV-MenuItem-IconL ms-crm-RV-MenuItem-Icon-Rest" src="/_imgs/dashboard/L10_large.png"/>
                        </div>
                        <div class="ms-crm-db-padding">
                            <span>
                            <br/>
                            <span style="text-overflow: ellipsis; font-weight: bold; font-size: 12px">
                                <loc:Text ResourceId="CSR1_Layout4_Title" runat="server"/>
                            </span><br/><br/>
                            <span class="ms-crm-RV-MenuItem-Title-Rest" style="text-overflow: ellipsis; color: #3b3b3b;">
                                <loc:Text ResourceId="CSR1_Layout4_Sub_Title" runat="server"/>
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>

<div id="type2" class="ms-crm-Tab">
    <div class="container">
        <div class="selectcontainer">
            <div style="overflow: auto; width: auto" class="ms-crm-RV-Menu">
                <ul class="ms-crm-RV-Menu">
                    <li class="ms-crm-RV-MenuItemL ms-crm-RV-MenuItem-Rest" itemindex="0">
                        <ul class="ms-crm-in-RV-Menu">
                            <li id="li11" class="ms-crm-RV-MenuItemL ms-crm-RV-MenuItem-Rest liFloat" itemIndex="0" title="<loc:Text Encoding='HtmlAttribute' ResourceId='CSR2_Layout1_Tooltip' runat='server' />">
                                <A id="11" tabindex="1" style="cursor: pointer; width: auto; padding: 10px" class="ms-crm-RV-MenuItem-Anchor ms-crm-RV-MenuItem-Anchor-Rest" onfocus="SetSelected(Mscrm.Utilities.eventToDomEvent(event), this)" onclick="SetSelected(Mscrm.Utilities.eventToDomEvent(event), this)" ondblclick="OK(Mscrm.Utilities.eventToDomEvent(event), this);" onmouseover="DisplayHover(this)" onmouseout="DisplayHoverOff(this)" href="#" onkeydown="CreateTemplate(Mscrm.Utilities.eventToDomEvent(event), this, 11);">
                                    <span>
                                        <span>
                                            <IMG class="ms-crm-RV-MenuItem-IconL ms-crm-RV-MenuItem-Icon-Rest" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='CSR2_Layout1_Title' runat='server' />" src="/_imgs/dashboard/L11.png">
                                        </span>
                                        <br/>
                                        <center style="padding-top: 5px">
                                            <div class="ms-crm-div-dashboard-type">
                                                <loc:Text ResourceId="CSR2_Layout1_Title" runat="server"/>
                                            </div>
                                        </center>
                                    </span>
                                </A>
                            </li>
                            <li id="li12" class="ms-crm-RV-MenuItemL ms-crm-RV-MenuItem-Rest liFloat" itemindex="1" title="<loc:Text Encoding='HtmlAttribute' ResourceId='CSR2_Layout2_Tooltip' runat='server' />">
                                <A id="12" tabindex="2" style="cursor: pointer; width: auto; padding: 10px" class="ms-crm-RV-MenuItem-Anchor ms-crm-RV-MenuItem-Anchor-Rest" onfocus="SetSelected(Mscrm.Utilities.eventToDomEvent(event), this)" onclick="SetSelected(Mscrm.Utilities.eventToDomEvent(event), this)" ondblclick="OK(Mscrm.Utilities.eventToDomEvent(event), this);" onmouseover="DisplayHover(this)" onmouseout="DisplayHoverOff(this)" href="#" onkeydown="CreateTemplate(Mscrm.Utilities.eventToDomEvent(event), this, 12);">
                                    <span>
                                        <span>
                                            <IMG class="ms-crm-RV-MenuItem-IconL ms-crm-RV-MenuItem-Icon-Rest" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='CSR2_Layout2_Title' runat='server' />" src="/_imgs/dashboard/L12.png">
                                        </span>
                                        <br/>
                                        <center style="padding-top: 5px">
                                            <div class="ms-crm-div-dashboard-type">
                                                <loc:Text ResourceId="CSR2_Layout2_Title" runat="server"/>
                                            </div>
                                        </center>
                                    </span>
                                </A>
                            </li>
                        </ul>
                    </li>
                    <li class="ms-crm-RV-MenuItemL ms-crm-RV-MenuItem-Rest" itemindex="1">
                        <ul class="ms-crm-in-RV-Menu">
                            <li id="li13" class="ms-crm-RV-MenuItemL ms-crm-RV-MenuItem-Rest liFloat" itemindex="0" title="<loc:Text Encoding='HtmlAttribute' ResourceId='CSR2_Layout3_Tooltip' runat='server' />">
                                <A id="13" tabindex="3" style="cursor: pointer; width: auto; padding: 10px" class="ms-crm-RV-MenuItem-Anchor ms-crm-RV-MenuItem-Anchor-Rest" onfocus="SetSelected(Mscrm.Utilities.eventToDomEvent(event), this)" onclick="SetSelected(Mscrm.Utilities.eventToDomEvent(event), this)" ondblclick="OK(Mscrm.Utilities.eventToDomEvent(event), this);" onmouseover="DisplayHover(this)" onmouseout="DisplayHoverOff(this)" href="#" onkeydown="CreateTemplate(Mscrm.Utilities.eventToDomEvent(event), this, 13);">
                                    <span>
                                        <span>
                                            <IMG class="ms-crm-RV-MenuItem-IconL ms-crm-RV-MenuItem-Icon-Rest" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='CSR2_Layout3_Title' runat='server' />" src="/_imgs/dashboard/L13.png">
                                        </span>
                                        <br/>
                                        <center style="padding-top: 5px">
                                            <div class="ms-crm-div-dashboard-type">
                                                <loc:Text ResourceId="CSR2_Layout3_Title" runat="server"/>
                                            </div>
                                        </center>
                                    </span>
                                </A>
                            </li>
                            <li id="li14" class="ms-crm-RV-MenuItemL ms-crm-RV-MenuItem-Rest liFloat" itemindex="1" title="<loc:Text Encoding='HtmlAttribute' ResourceId='CSR2_Layout4_Tooltip' runat='server' />">
                                <A id="14" tabindex="4" style="cursor: pointer; width: auto; padding: 10px" class="ms-crm-RV-MenuItem-Anchor ms-crm-RV-MenuItem-Anchor-Rest" onfocus="SetSelected(Mscrm.Utilities.eventToDomEvent(event), this)" onclick="SetSelected(Mscrm.Utilities.eventToDomEvent(event), this)" ondblclick="OK(Mscrm.Utilities.eventToDomEvent(event), this);" onmouseover="DisplayHover(this)" onmouseout="DisplayHoverOff(this)" href="#" onkeydown="CreateTemplate(Mscrm.Utilities.eventToDomEvent(event), this, 14);">
                                    <span>
                                        <span>
                                            <IMG class="ms-crm-RV-MenuItem-IconL ms-crm-RV-MenuItem-Icon-Rest" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='CSR2_Layout4_Title' runat='server' />" src="/_imgs/dashboard/L14.png">
                                        </span>
                                        <br/>
                                        <center style="padding-top: 5px">
                                            <div class="ms-crm-div-dashboard-type">
                                                <loc:Text ResourceId="CSR2_Layout4_Title" runat="server"/>
                                            </div>
                                        </center>
                                    </span>
                                </A>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <div class="previewcontainer">
            <div style="overflow: auto" class="ms-crm-RV-Menu">
                <ul class="ms-crm-in-RV-Menu" style="padding: 10px">
                    <li style="FLOAT: none; display: block;" id="li011" class="ms-crm-RV-view-item-MenuItemL ms-crm-RV-view-item-MenuItem-Rest" itemIndex="0">
                        <div style="text-align: center">
                            <img id="preview" class="ms-crm-RV-MenuItem-IconL ms-crm-RV-MenuItem-Icon-Rest" src="/_imgs/dashboard/L11_large.png"/>
                        </div>
                        <div class="ms-crm-db-padding">
                            <br/>
                            <span style="text-overflow: ellipsis; font-weight: bold; font-size: 12px">
                                <loc:Text ResourceId="CSR2_Layout1_Title" runat="server"/>
                            </span><br/><br/>
                            <span style="text-overflow: ellipsis; color: #3b3b3b;">
                                <loc:Text ResourceId="CSR2_Layout1_Sub_Title" runat="server"/>
                            </span>
                        </div>
                    </li>
                    <li style="FLOAT: none; display: none;" id="li012" class="ms-crm-RV-view-item-MenuItemL ms-crm-RV-view-item-MenuItem-Rest" itemIndex="0">
                        <div style="text-align: center">
                            <img id="Img1" class="ms-crm-RV-MenuItem-IconL ms-crm-RV-MenuItem-Icon-Rest" src="/_imgs/dashboard/L12_large.png"/>
                        </div>
                        <div class="ms-crm-db-padding">
                            <br/>
                            <span style="text-overflow: ellipsis; font-weight: bold; font-size: 12px">
                                <loc:Text ResourceId="CSR2_Layout2_Title" runat="server"/>
                            </span><br/><br/>
                            <span class="ms-crm-RV-MenuItem-Title-Rest" style="text-overflow: ellipsis; color: #3b3b3b;">
                                <loc:Text ResourceId="CSR2_Layout2_Sub_Title" runat="server"/>
                            </span>
                        </div>
                    </li>
                    <li style="FLOAT: none; display: none;" id="li013" class="ms-crm-RV-view-item-MenuItemL ms-crm-RV-view-item-MenuItem-Rest" itemIndex="0">
                        <div style="text-align: center">
                            <img id="Img3" class="ms-crm-RV-MenuItem-IconL ms-crm-RV-MenuItem-Icon-Rest" src="/_imgs/dashboard/L13_large.png"/>
                        </div>
                        <div class="ms-crm-db-padding">
                            <br/>
                            <span style="text-overflow: ellipsis; font-weight: bold; font-size: 12px">
                                <loc:Text ResourceId="CSR2_Layout3_Title" runat="server"/>
                            </span><br/><br/>
                            <span class="ms-crm-RV-MenuItem-Title-Rest" style="text-overflow: ellipsis; color: #3b3b3b;">
                                <loc:Text ResourceId="CSR2_Layout3_Sub_Title" runat="server"/>
                            </span>
                        </div>
                    </li>
                    <li style="FLOAT: none; display: none;" id="li014" class="ms-crm-RV-view-item-MenuItemL ms-crm-RV-view-item-MenuItem-Rest" itemIndex="0">
                        <div style="text-align: center">
                            <img id="Img4" class="ms-crm-RV-MenuItem-IconL ms-crm-RV-MenuItem-Icon-Rest" src="/_imgs/dashboard/L14_large.png"/>
                        </div>
                        <div class="ms-crm-db-padding">
                            <span>
                            <br/>
                            <span style="text-overflow: ellipsis; font-weight: bold; font-size: 12px">
                                <loc:Text ResourceId="CSR2_Layout4_Title" runat="server"/>
                            </span><br/><br/>
                            <span class="ms-crm-RV-MenuItem-Title-Rest" style="text-overflow: ellipsis; color: #3b3b3b;">
                                <loc:Text ResourceId="CSR2_Layout4_Sub_Title" runat="server"/>
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
</frm:dialogform>
</body>
</html>