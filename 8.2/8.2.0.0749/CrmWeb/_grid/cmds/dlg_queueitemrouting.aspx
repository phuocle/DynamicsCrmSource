<!DOCTYPE html >

<%@ Page Language="c#" Inherits="Microsoft.Crm.Dialogs.QueueItemRoutingDialogForm" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm" %>
<html>
<head>
    <cnt:appheader id="crmHeader" runat="server"/>
    <style type="text/css">
        div.Desc {
            padding-top: 5px;
            color: #444444;
        }
    </style>
    <script type="text/javascript">

        Type.registerNamespace('Mscrm');
        var _sAction = "queueitemrouting";
        var _crmQueueLookup = null;
        var _crmUserLookup = null;
        var _queueId = '<%= queueId %>';
        var _queueViewType = '<%= queueViewType %>';


        function DisableOkButton() {
            if (!IsNull(_crmUserLookup)) {
                if (!_crmUserLookup.get_disabled()) {
                    $get("butBegin").disabled = IsNull(_crmUserLookup.get_dataValue());
                } else if (!_crmQueueLookup.get_disabled()) {
                    $get("butBegin").disabled = IsNull(_crmQueueLookup.get_dataValue());
                }
            } else if (!IsNull(_crmQueueLookup)) {
                if (!_crmUserLookup.get_disabled()) {
                    $get("butBegin").disabled = IsNull(_crmUserLookup.get_dataValue());
                } else if (!_crmQueueLookup.get_disabled()) {
                    $get("butBegin").disabled = IsNull(_crmQueueLookup.get_dataValue());
                }
            }
        }

        function applychanges() {
            if (rdUserbutton.checked) {


                if (!IsNull(_crmUserLookup.get_dataValue())) {
                    var userLookupDataValue = _crmUserLookup.get_dataValue();
                    _custParams = _custParams + "&workerid=" + CrmEncodeDecode.CrmUrlEncode(userLookupDataValue[0].id);
                    if ("8" == userLookupDataValue[0].type) {
                        _custParams += "&workertype=8";
                    } else {
                        _custParams += "&workertype=9";
                    }
                } else {
                    $get("butBegin").disabled = true;
                    alert(LOCID_NONE_USER_SELECTED);
                    return;
                }
                if ($get("chkBoxRemove").checked) {
                    _custParams += "&isQueueItemRemove=1";
                } else {
                    _custParams += "&isQueueItemRemove=0";
                }
            } else if (rdQueuebutton.checked) {


                if (!IsNull(_crmQueueLookup.get_dataValue())) {
                    var queueLookupDataValue = _crmQueueLookup.get_dataValue();
                    _custParams = "&dstQueueId=" + CrmEncodeDecode.CrmUrlEncode(queueLookupDataValue[0].id);
                } else {
                    $get("butBegin").disabled = true;
                    alert(LOCID_NOONE_SELECTED);
                    return;
                }
            }
            go();
        }

        Sys.Application.add_load(function() {

            if (_queueId == undefined || _queueId == '') {
                document.getElementById('userLookUpRadioButton').style.display = "none";
                document.getElementById('userLookUpRadioButtonLabel').style.display = "none";
            }
            document.getElementById('crmUserLookupControl').style.display = "none";

            _crmQueueLookup = Mscrm.FormControlInputBehavior.GetBehavior('crmQueueLookup');
            _crmUserLookup = Mscrm.FormControlInputBehavior.GetBehavior('crmUserLookup');
            _crmUserLookup.set_disabled(true);
            _crmQueueLookup.add_afterSelect(DisableOkButton);
            _crmUserLookup.add_afterSelect(DisableOkButton);
            rdQueuebutton.checked = true;
            _crmQueueLookup.set_disabled(false);
            document.getElementById('crmchkBoxRemove').style.display = "none";
            document.getElementById('routeToUserText').style.display = "none";


            if ((_queueId != null) && (_queueViewType == 1)) {
                var viewGuid = "{abc5d973-aac3-428e-9e1d-e43478f9ee56}";
                var viewName = "Private Queue User Lookup View";
                var fetchXml = '<fetch version="1.0" mapping="logical"> ' +
                    '<entity name="systemuser"> ' +
                    '<order attribute="fullname" descending="false" />' +
                    '<attribute name="systemuserid" />' +
                    '<attribute name="fullname" />' +
                    '<link-entity name="queuemembership" from="systemuserid" to="systemuserid" alias="QueueMembers"> ' +
                    '<filter type="and">' +
                    '<condition attribute="queueid" operator="eq" value="' +
                    _queueId +
                    '" /> ' +
                    '</filter>' +
                    '</link-entity>' +
                    ' </entity>' +
                    '</fetch>';
                var layoutXml = '<grid name="systemuser" object="8" jump="name" select="1" icon="1" preview="0">' +
                    '<row name="systemuser" id="systemuserid">' +
                    '<cell name="fullname" width="300" />' +
                    '<cell name="systemuserid" width="0" ishidden="1"/>' +
                    '</row>' +
                    '</grid>';
                if (!Mscrm.InlineDialogUtility.isMobileClient()) {
                    _crmUserLookup.AddCustomView(viewGuid, "systemuser", viewName, fetchXml, layoutXml, true);
                } else {
                    _crmUserLookup.addCustomFilter(fetchXml, "systemuser");
                }
            }
        });
        $addHandler(document,
            'keydown',
            function(eventObject) {
                if (eventObject.target.id != "cmdDialogCancel" && eventObject.keyCode == KEY_ENTER) {
                    eventObject.preventDefault();
                    applychanges();
                }
            });


        function userOptionRadioClick(eventObj) {
            $get("butBegin").disabled = true;
            if (eventObj.target.id == "rdQueuebutton") {
                document.getElementById('crmchkBoxRemove').style.display = "none";
                document.getElementById('crmUserLookupControl').style.visibility = "hidden";
                document.getElementById('routeToQueueText').style.display = "table-row";
                document.getElementById('crmQueueLookupControl').style.display = "table-row";
                document.getElementById('crmQueueLookupControl').style.visibility = "visible";
                document.getElementById('routeToUserText').style.display = "none";
                rdUserbutton.checked = false;
                _crmUserLookup.set_dataValue('');
                _crmUserLookup.set_disabled(true);
                _crmQueueLookup.set_disabled(false);
            } else {
                document.getElementById('crmchkBoxRemove').style.display = "table-row";
                document.getElementById('crmQueueLookupControl').style.visibility = "hidden";
                document.getElementById('routeToQueueText').style.display = "none";
                document.getElementById('crmUserLookupControl').style.display = "table-row";
                document.getElementById('crmUserLookupControl').style.visibility = "visible";
                document.getElementById('routeToUserText').style.display = "table-row";
                rdQueuebutton.checked = false;
                _crmQueueLookup.set_dataValue('');
                _crmUserLookup.set_disabled(false);
                _crmQueueLookup.set_disabled(true);
            }
        }


        function cancel() {
            closeWindow(true);
        }
    </script>
</head>
<body>
<frm:dialogform id="crmForm" runat="server">
    <table width="100%" cellspacing="0" cellpadding="0" style="padding-top: 8px;">
        <colgroup>
            <col width='20%'/>
            <col width='30%'/>
            <col width='30%'/>
            <col width='20%'/>
        </colgroup>
        <tbody>
        <tr >
            <td style="padding-bottom: 8px;">
                <label for="rdQueuebutton">
                    <loc:Text ResourceId="Dialog_QueueItemRoute_RouteTo_Label" runat="server"/>
                </label>
            </td>
            <td style="padding-bottom: 8px;">
                <table cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                        <td style="width: 20%;">
                            <input type="radio" class="radio" id="rdQueuebutton" tabindex="1" name="rdUserOptions" value="0" runat="server" onclick="userOptionRadioClick(new Sys.UI.DomEvent(event))"/>
                        </td>
                        <td style="width: 80%;">
                            <div class="Desc" style="padding-bottom: 8px;">
                                <label for="rdQueuebutton" id="lblQueuebutton" runat="server">
                                    <loc:Text ResourceId="Dialog_AddToQueue_LabelDetails" runat="server"/>
                                </label>
                            </div>
                        </td>
                    </tr>
                </table>
            </td>
            <td style="padding-bottom: 8px;">
                <table cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                        <td id="userLookUpRadioButton" style="width: 20%;">
                            <input type="radio" class="radio" id="rdUserbutton" name="rdUserOptions" tabindex="1" value="1" runat="server" onclick="userOptionRadioClick(new Sys.UI.DomEvent(event))"/>
                        </td>
                        <td id="userLookUpRadioButtonLabel" style="width: 80%;">
                            <div class="Desc" style="padding-bottom: 8px;">
                                <label for="rdUserbutton" id="lblUserbutton" runat="server">
                                    <loc:Text ResourceId="Dialog_QueueItemRoute_User_Label" runat="server"/>
                                </label>
                            </div>
                        </td>
                    </tr>
                </table>
            </td>
            <td></td>
        </tr>
        <tr id="routeToQueueText">
            <td></td>
            <td colspan="2">
                <div class="Desc" style="padding-bottom: 8px;">
                    <label id="routeToQueueLabel" runat="server">
                        <loc:Text ResourceId="RouteToQueue_Text" runat="server"/>
                    </label>
                </div>
            </td>
            <td></td>
        </tr>
        <tr id="routeToUserText">
            <td></td>
            <td colspan="3">
                <div class="Desc" style="padding-bottom: 8px;">
                    <label id="routeToUserLabel" runat="server">
                        <loc:Text ResourceId="RouteToUser_Text" runat="server"/>
                    </label>
                </div>
            </td>
            <td></td>
        </tr>
        <tr id="crmchkBoxRemove">
            <td></td>
            <td colspan="2" style="padding-bottom: 8px;">
                <input tabindex="1" class="checkbox" type="checkbox" name="type" id="chkBoxRemove"><label for="chkBoxRemove">
                    <loc:Text ResourceId="Dialog_QueueItemWorkOn_Remove_Check_Label" runat="server"/>
                </label>
            </td>
        </tr>
        <tr id="crmUserLookupControl">
            <td></td>
            <td colspan="2">
                <table cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                        <td>
                            <sdk:LookupControl id="crmUserLookup" LookupStyle="single" runat="server" onclick="Mscrm.crmuserLookup_onclick(new Sys.UI.DomEvent(event))" lookupbrowse="False" runat="server"/>
                        </td>
                    </tr>
                </table>
            </td>
            <td></td>
        </tr>
        <tr id="crmQueueLookupControl">
            <td></td>
            <td colspan="2">
                <table cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                        <td>
                            <sdk:LookupControl id="crmQueueLookup" AccessibilityLabelResourceId="Dialog_AddToQueue_LabelDetails" Lookupbrowse="false" LookupStyle="single" runat="server"/>
                        </td>
                    </tr>
                </table>
            </td>
            <td></td>
        </tr>
        </tbody>
    </table>
</frm:dialogform>
</body>
</html>