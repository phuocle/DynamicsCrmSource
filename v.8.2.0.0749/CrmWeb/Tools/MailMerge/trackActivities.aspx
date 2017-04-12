<%@ Page Language="c#" Inherits="Microsoft.Crm.Application.Pages.Tools.MailMerge.TrackActivities" %>

<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>

<script type="text/javascript">


    var entityXml;
    var _blockedExtensions;

    Sys.Application.add_load(PageOnLoad);

    function PageOnLoad() {
        $get("cbQuickCampaign").checked = false;


        updateUIState();
    }


    function cancel() {
        Mscrm.Utilities.setReturnValue(new MailMergeInfo());
        closeWindow();
    }


    function applychanges() {
        var mmInfo = new MailMergeInfo();

        if ($get("radNoTrack").checked) {
            mmInfo.track = false;
            <% if (activityTypeCode == Util.Email)
               { %>
            mmInfo.attachmentInfo1 = $get("attachment1").value;
            mmInfo.attachmentInfo2 = $get("attachment2").value;
            mmInfo.attachmentInfo3 = $get("attachment3").value;
            mmInfo.attachmentInfo4 = $get("attachment4").value;
            mmInfo.attachmentInfo5 = $get("attachment5").value;
            <% } %>
        } else {

            mmInfo.track = true;


            if ($get("radOwner").checked) {
                mmInfo.assign = "owner";
            }


            mmInfo.closeStatus = $get("cbCloseActivities").checked;


            if ($get("cbQuickCampaign").checked) {
                var quickCampaingText = Mscrm.FormControlInputBehavior.GetBehavior("QuickCampaignInputTextBox")
                    .get_dataValue();
                if (IsNull(quickCampaingText) || quickCampaingText == "") {

                    alert(LOCID_NOQC_NAME_PROVIDED);
                    return;
                }
                mmInfo.quickCampaignName = quickCampaingText;
            }

            <% if (activityTypeCode == Util.Email)
               { %>

            if ($get("cbUnsubscribeLink").checked) {
                var unsubscribeLink = Mscrm.FormControlInputBehavior.GetBehavior("UnsubscribeLinkInputTextBox")
                    .get_dataValue();
                if (IsNull(unsubscribeLink) || unsubscribeLink == "") {

                    alert(LOCID_NOUNSUBLINK_PROVIDED);
                    return;
                }
                mmInfo.unsubscribeLink = unsubscribeLink;
            }
            if (!ValidateAllAttachments())
                return;
            if ($get("attachChkBox1").checked) {
                mmInfo.attachmentInfo1 = $get("attachment1").value;
            }
            if ($get("attachChkBox2").checked) {
                mmInfo.attachmentInfo2 = $get("attachment2").value;
            }
            if ($get("attachChkBox3").checked) {
                mmInfo.attachmentInfo3 = $get("attachment3").value;
            }
            if ($get("attachChkBox4").checked) {
                mmInfo.attachmentInfo4 = $get("attachment4").value;
            }
            if ($get("attachChkBox5").checked) {
                mmInfo.attachmentInfo5 = $get("attachment5").value;
            }
            <% } %>


            if (!IsNull(entityXml)) {
                mmInfo.entityXml = entityXml;
            }
        }

        Mscrm.Utilities.setReturnValue(mmInfo);

        closeWindow();
    }


    function updateUIState() {
        <% if (disableTracking)
           { %>
        $get("radTrack").disabled = true;
        $get("radNoTrack").checked = true;
        <% } %>


        if ($get("radNoTrack").checked || $get("radTrack").disabled) {

            $get("ActivityFormButton").disabled = true;
            Mscrm.FormControlInputBehavior.GetBehavior("QuickCampaignInputTextBox").set_disabled(true);
            Mscrm.FormControlInputBehavior.GetBehavior("UnsubscribeLinkInputTextBox").set_disabled(true);


            $get("radMe").disabled = true;
            $get("radOwner").disabled = true;
            $get("cbCloseActivities").disabled = true;
            $get("cbQuickCampaign").disabled = true;
            $get("cbUnsubscribeLink").disabled = true;


            $get("butBegin").disabled = false;
        } else if ($get("radTrack").checked) {

            $get("ActivityFormButton").disabled = false;
            Mscrm.FormControlInputBehavior.GetBehavior("QuickCampaignInputTextBox")
                .set_disabled(!$get("cbQuickCampaign").checked);
            Mscrm.FormControlInputBehavior.GetBehavior("UnsubscribeLinkInputTextBox")
                .set_disabled(!$get("cbUnsubscribeLink").checked);


            $get("radMe").disabled = false;
            $get("radOwner").disabled = false;
            $get("cbCloseActivities").disabled = false;
            $get("cbQuickCampaign").disabled = false;
            $get("cbUnsubscribeLink").disabled = false;


            $get("butBegin").disabled = false;
        }

        <% if (activityTypeCode != Util.Email)
           { %>

        $get("cbUnsubscribeLink").checked = false;
        var ele = $get("UnsubscribeLinkSpan");
        ele.style.display = "none";
        <% } %>

        <% if (activityTypeCode == Util.Email)
           { %>

        var ele = $get("AssignActivitiesSpan");
        ele.style.display = "none";
        $get("cbCloseActivities").checked = true;
        var ele = $get("AutomaticCloseSpan");
        ele.style.display = "none";
        $get("ActivityFormButton").disabled = true;

        <% Version version = Microsoft.Crm.Application.Utility.ClientContext.Current.ClientCrmVersion;
           if (version.Major > 4)
           {
        %>
        $get("attachmentDiv").style.display = "inline";
        <% } %>

        XUI.Html.SetText(sizeLimitMessageCell, MAX_LIMIT_MESSAGE);
        <% } %>

        <% if (noEmailAddress)
           { %>

        $get("cbUnsubscribeLink").checked = false;
        $get("cbUnsubscribeLink").disabled = true;
        Mscrm.FormControlInputBehavior.GetBehavior("UnsubscribeLinkInputTextBox").set_disabled(true);
        <% } %>

        <% if (!Util.IsOnline() || !showQuickCampaign)
           { %>

        $get("cbQuickCampaign").checked = false;
        var ele = $get("QuickCampaignSpan");
        ele.style.display = "none";
        <% } %>

        <% if (!showAssignActivity)
           { %>

        var ele = $get("AssignActivitiesSpan");
        ele.style.display = "none";
        <% } %>
    }

    function ActivityFormButtonClick() {
        var oURL = Mscrm.CrmUri.create("/Tools/MailMerge/activitiesdetail.aspx");
        oURL.get_query()["objectTypeCode"] = ACTIVITY_TYPE_CODE;
        var sEntityXml = openStdDlg(oURL, IsNull(entityXml) ? null : entityXml, 820, 560);
        if (sEntityXml) {
            entityXml = sEntityXml;
        }
    }


    function MailMergeInfo() {

        this.track = false;
        this.entityXml = "";
        this.assign = "me";
        this.assignId = "";
        this.assignType = 0;
        this.closeStatus = true;
        this.quickCampaignName = "";
        this.unsubscribeLink = "";


        this.attachmentInfo1 = "";
        this.attachmentInfo2 = "";
        this.attachmentInfo3 = "";
        this.attachmentInfo4 = "";
        this.attachmentInfo5 = "";
    }

    function ValidateAllAttachments() {
        GetBlockedExtensions();

        return ValidateAttachment($get("attachment1").value, $get("attachChkBox1").checked) &&
            ValidateAttachment($get("attachment2").value, $get("attachChkBox2").checked) &&
            ValidateAttachment($get("attachment3").value, $get("attachChkBox3").checked) &&
            ValidateAttachment($get("attachment4").value, $get("attachChkBox4").checked) &&
            ValidateAttachment($get("attachment5").value, $get("attachChkBox5").checked);
    }

    function ValidateAttachment(sattachmentPath, isAttachChkBoxChecked) {
        if (isAttachChkBoxChecked) {
            var isBlocked = IsBlockedAttachment(sattachmentPath);
            if (isBlocked) {
                alert(String.format(LOCID_INVALID_EXTENSION, sattachmentPath));
                return false;
            }
        }
        return true;
    }

    function IsBlockedAttachment(sattachmentPath) {
        var isBlockedExtn = true;
        if (BLOCKED_ATTACHMENTS == "") {
            return false;
        }
        var sExtn = GetFileExtn(sattachmentPath);
        if (sExtn == "") {
            return false;
        }

        for (var i = 0; i < _blockedExtensions.length; i++) {
            if (_blockedExtensions[i] == sExtn) {
                return true;
            }
        }
        return false;
    }

    function GetFileExtn(spath) {
        var extn = "";
        var lastIndexOfDot = spath.lastIndexOf('.');

        if (spath.length > lastIndexOfDot) {
            extn = spath.substring(spath.lastIndexOf('.') + 1);
        }
        return extn;
    }

    function GetBlockedExtensions() {
        var blockedExtnFromCrm = BLOCKED_ATTACHMENTS;
        _blockedExtensions = blockedExtnFromCrm.split(";");
    }

    function attachmentChange(oInputControl) {
        var oCheckboxControl = XUI.Html.DomUtils
            .GetFirstChild(XUI.Html.DomUtils.GetPrevSibling(oInputControl.parentNode));

        if (!IsNull(oCheckboxControl)) {
            if (oInputControl.value == "") {
                oCheckboxControl.checked = false;
            } else {
                if (oInputControl.value.length > 260) {
                    alert(LOCID_INVALID_FILENAME_LENGTH);
                    oCheckboxControl.checked = false;
                    oInputControl.value = "";
                } else {
                    oCheckboxControl.checked = true;
                }
            }
        }
    }


</script>

<table width="100%" cellpadding="8">

<tr>
    <td>
        <table width="100%" style="table-layout: fixed">
            <tr class="main">
                <td>

                    <label class="ms-crm-Bold-Header">
                        <loc:Text ResourceId="Web.Tools.MailMerge.Dialogs.dlg_trackactivities.aspx_TrackActivities" runat="server"/>
                    </label>
                </td>
            </tr>
            <tr>
                <td>
                    <table width="100%" style="table-layout: fixed">
                        <col width="26"/>
                        <col/>

                        <tr>
                            <td>
                                <input class="radio" type="radio" id="radNoTrack" name="rad1Group" onclick="updateUIState()"
                                       <%= (CanMailMerge) ? "editable checked" : "disabled" %>>
                            </td>
                            <td>
                                <label for="radNoTrack">
                                    <loc:Text ResourceId="Web.Tools.MailMerge.Dialogs.dlg_trackactivities.aspx_NoTrack" runat="server"/>
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                &nbsp;
                            </td>
                            <td>
                                <label>
                                    <loc:Text ResourceId="Web.Tools.MailMerge.Dialogs.dlg_trackactivities.aspx_NoTrack_description" runat="server"/>
                                </label>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <input class="radio" type="radio" id="radTrack" name="rad1Group" onclick="updateUIState()"
                                       <%= (CanMailMerge) ? "editable" : "disabled" %>>
                            </td>
                            <td>
                                <table width="100%" style="table-layout: fixed">
                                    <tr>
                                        <td>
                                            <label for="radTrack">
                                                <loc:Text ResourceId="Web.Tools.MailMerge.Dialogs.dlg_trackactivities.aspx_Track" runat="server"/>
                                            </label>
                                        </td>
                                        <td class="HtmlBar_AddTextButton_td">
                                            <ui:Button ID="ActivityFormButton" OnClick="ActivityFormButtonClick();" runat="server">
                                            </ui:Button>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                &nbsp;
                            </td>
                            <td>
                                <label>
                                    <loc:Text ResourceId="Web.Tools.MailMerge.Dialogs.dlg_trackactivities.aspx_Track_description" runat="server"/>
                                </label>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </td>
</tr>
<tr>
    <td style="padding: 0px;">
        <hr/>
    </td>
</tr>

<tr>
    <td>
        <span id="AssignActivitiesSpan">
            <table width="100%" style="table-layout: fixed">
                <tr class="main">
                    <td>

                        <label class="ms-crm-Bold-Header">
                            <loc:Text ResourceId="Web.Tools.MailMerge.Dialogs.dlg_trackactivities.aspx_AssignActivities" runat="server"/>
                        </label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <table width="100%" style="table-layout: fixed">
                            <col width="26"/>
                            <col/>

                            <tr>
                                <td>
                                    <input class="radio" type="radio" id="radMe" name="rad2Group" onclick="updateUIState()"
                                           <%= (CanMailMerge) ? "editable checked" : "disabled" %>>
                                </td>
                                <td>
                                    <label for="radMe">
                                        <loc:Text ResourceId="Web.Tools.MailMerge.Dialogs.dlg_trackactivities.aspx_AssignMe" runat="server"/>
                                    </label>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <input class="radio" type="radio" id="radOwner" name="rad2Group" onclick="updateUIState()"
                                           <%= (CanMailMerge) ? "editable" : "disabled" %>>
                                </td>
                                <td>
                                    <label for="radOwner">
                                        <loc:Text ResourceId="Web.Tools.MailMerge.Dialogs.dlg_trackactivities.aspx_AssignOwner" runat="server"/>
                                    </label>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </span>
    </td>
</tr>

<tr>
    <td>
        <span id="AutomaticCloseSpan">
            <table width="100%" style="table-layout: fixed">
                <tr>
                    <td>
                        <table width="100%" style="table-layout: fixed">
                            <col width="26"/>
                            <col/>

                            <tr>
                                <td>
                                    <input class="noborder" type="checkbox" id="cbCloseActivities" checked="checked">
                                </td>
                                <td>
                                    <label for="cbCloseActivities">
                                        <loc:Text ResourceId="Web.Tools.MailMerge.Dialogs.dlg_trackactivities.aspx_AutomaticClose_description" runat="server"/>
                                    </label>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </span>
    </td>
</tr>

<tr>
    <td>
        <span id="QuickCampaignSpan">
            <table width="100%" style="table-layout: fixed">
                <tr>
                    <td>
                        <table width="100%" style="table-layout: fixed">
                            <col width="26"/>
                            <col/>

                            <tr>
                                <td>
                                    <input class="noborder" type="checkbox" id="cbQuickCampaign" onclick="updateUIState()" checked="checked">
                                </td>
                                <td>
                                    <label for="cbQuickCampaign">
                                        <loc:Text ResourceId="Web.Tools.MailMerge.Dialogs.dlg_trackactivities.aspx_QuickCampaign_description" runat="server"/>
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    &nbsp;
                                </td>
                                <td>
                                    <table>
                                        <col width="10%"/>
                                        <col/>
                                        <tr>
                                            <td>
                                                <label for="QuickCampaignInputTextBox">
                                                    <loc:Text ResourceId="Web.Tools.MailMerge.Dialogs.dlg_trackactivities.aspx_QuickCampaign_description_info" runat="server"/>
                                                </label>
                                            </td>
                                            <td style="width: 500px">
                                                <ui:TextBox ID="QuickCampaignInputTextBox" runat="server">
                                                </ui:TextBox>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </span>
    </td>
</tr>

<tr>
    <td>
        <span id="UnsubscribeLinkSpan">
            <table width="100%" style="table-layout: fixed">
                <tr>
                    <td>
                        <table width="100%" style="table-layout: fixed">
                            <col width="26"/>
                            <col/>

                            <tr>
                                <td>
                                    <input class="noborder" type="checkbox" id="cbUnsubscribeLink" onclick="updateUIState()" checked="checked">
                                </td>
                                <td>
                                    <label for="cbUnsubscribeLink">
                                        <loc:Text ResourceId="Web.Tools.MailMerge.Dialogs.dlg_trackactivities.aspx_UnsubscribeLink_description" runat="server"/>
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    &nbsp;
                                </td>
                                <td>
                                    <table>
                                        <col width="10%"/>
                                        <col/>
                                        <tr>
                                            <td>
                                                <label for="UnsubscribeLinkInputTextBox">
                                                    <loc:Text ResourceId="Web.Tools.MailMerge.Dialogs.dlg_trackactivities.aspx_QuickCampaign_description_info" runat="server"/>
                                                </label>
                                            </td>
                                            <td style="width: 500px">
                                                <ui:TextBox ID="UnsubscribeLinkInputTextBox" runat="server">
                                                </ui:TextBox>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </span>
    </td>
</tr>
</table>

<div id="attachmentDiv" style="display: none">
    <table width="100%" cellpadding="8">
        <tr>
            <td class="ms-crm-Form-Section ms-crm-Form-SectionBar">
                <h4 class="ms-crm-Form">
                    <loc:text resourceid="Web.Attachments.SectionHeader" runat="server"/>
                </h4>
            </td>
        </tr>
        <tr height="5">
            <td>
            </td>
        </tr>
        <tr>
            <td id="sizeLimitMessageCell">
            </td>
        </tr>
        <tr>
            <td>
                <table width="100%" style="table-layout: fixed">
                    <col width="26px"/>
                    <col/>
                    <col/>
                    <tr>
                        <td>
                            <input class="noborder" type="checkbox" id="attachChkBox1"/>
                        </td>
                        <td>
                            <input type="file" name="attachment1" id="attachment1" onchange="attachmentChange(this);"/>
                        </td>
                        <td>
                            &nbsp;
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input class="noborder" type="checkbox" id="attachChkBox2"/>
                        </td>
                        <td>
                            <input type="file" name="attachment2" id="attachment2" onchange="attachmentChange(this);"/>
                        </td>
                        <td>
                            &nbsp;
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input class="noborder" type="checkbox" id="attachChkBox3"/>
                        </td>
                        <td>
                            <input type="file" name="attachment3" id="attachment3" onchange="attachmentChange(this);"/>
                        </td>
                        <td>
                            &nbsp;
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input class="noborder" type="checkbox" id="attachChkBox4"/>
                        </td>
                        <td>
                            <input type="file" name="attachment4" id="attachment4" onchange="attachmentChange(this);"/>
                        </td>
                        <td>
                            &nbsp;
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input class="noborder" type="checkbox" id="attachChkBox5"/>
                        </td>
                        <td>
                            <input type="file" name="attachment5" id="attachment5" onchange="attachmentChange(this);"/>
                        </td>
                        <td>
                            &nbsp;
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</div>