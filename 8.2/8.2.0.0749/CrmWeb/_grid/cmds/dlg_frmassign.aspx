<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Dialogs.AssignFormDialogForm" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="System.Globalization" %>
<html>
<head>
    <title>
        <loc:Text ResourceId="Web._grid.cmds.dlg_assign.aspx_37" runat="server"/>
    </title>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script type="text/javascript">


        var _sAction = "assign";

        function radioClick(eventObj) {
            var rdoMeChecked = (eventObj.target.id == "rdoMe");
            var ownerLookupComponent = Mscrm.FormControlInputBehavior.GetBehavior('crmOwnerLookup');
            ownerLookupComponent.set_disabled(rdoMeChecked);
            toggleWorkflowNotifications();


            if (!rdoMeChecked) {
                ownerLookupComponent.Focus();
            }
        }

        function toggleWorkflowNotifications() {
            if (Number(_iObjType) == Workflow ||
                Number(_iObjType) == SLA ||
                Number(_iObjType) == RoutingRule ||
                Number(_iObjType) == ConvertRule) {
                var notification = $find("Notifications");
                var newNotification;
                if ($get("rdoMe").checked) {
                    notification.SetVisible(false);

                } else {
                    newNotification = notification.CreateNotification("NotifyUser", 2, "Server", LOCID_NOTIFY_USER);
                    var oaNot = new Array(newNotification);
                    notification.SetNotifications(oaNot, "Server");
                    notification.SetVisible(true);
                }
            }
        }

        function applychanges() {
            var oReturn = new Object();

            if ($get("rdoMe").checked) {
                oReturn.OwnerId = USER_GUID;
                oReturn.OwnerType = SystemUser;
                oReturn.OwnerName = _sCurrentUserName;
            } else {
                var ownerLookupControl = Mscrm.FormControlInputBehavior.GetBehavior('crmOwnerLookup');
                var dataValue = ownerLookupControl.get_dataValue();
                if ($get("rdoOther").checked && IsNull(dataValue)) {
                    alert(LOCID_FRM_ASSIGN_NO_TARGET);
                    return;
                }
                var firstItem = dataValue[0];
                oReturn.OwnerId = firstItem.id;
                oReturn.OwnerType = firstItem.type;
                oReturn.OwnerName = firstItem.name;
            }

            Mscrm.Utilities.setReturnValue(oReturn);
            closeWindow(true);
        }

        function cancel() {
            closeWindow(true);
        }

        Sys.Application.add_load(toggleWorkflowNotifications);
    </script>
</head>

<body>

<frm:DialogForm id="crmForm" runat="server">
    <table width="100%" height="100%" cellspacing="0" cellpadding="0">
        <colgroup>
            <col width="26">
            <col>
        </colgroup>
        <tr>
            <td colspan="2" valign="top">
                <cnt:AppNotifications id="Notifications" runat="server"/>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <input class="radio" type="radio" name="type" id="rdoMe" <% if (!AssignToNewUser) Response.Write("checked"); %> onclick="radioClick(new Sys.UI.DomEvent(event))">
            </td>
            <td valign="top">
                <label class="ms-crm-Bold-Header" for="rdoMe">
                    <loc:Text ResourceId="Web._grid.cmds.dlg_assign.aspx_104" runat="server"/>
                </label>
                <br>

                <%
                    if (Util.UseTouchSkin())
                    {
                %>
                <div style="color: #444444;">
                <%
                    }
                    else
                    {
                %>
                <div style="padding-top: 5px; color: #444444;">
                    <%
                    }
                    %>
                    <loc:Text ResourceId="Web._grid.cmds.dlg_assign.aspx_106" runat="server">
                        <loc:Argument runat="server"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(ObjName) %></loc:Argument>
                    </loc:Text>
                </div>
                </td>
        </tr>

        <% if (!Util.UseTouchSkin())
           { %> <tr>
            <td colspan="2">&nbsp;</td>
        </tr> <% } %>
        <tr>
            <td valign="top">
                <input class="radio" type="radio" name="type" id="rdoOther" <% if (AssignToNewUser) Response.Write("checked"); %> onclick="radioClick(new Sys.UI.DomEvent(event))">
            </td>
            <td valign="top">
                <label class="ms-crm-Bold-Header" for="rdoOther">
                    <loc:Text id="assignLabel" runat="server"/>
                </label>
                <br>

                <%
                    if (Util.UseTouchSkin())
                    {
                %>
                <div style="color: #444444;">
                <%
                    }
                    else
                    {
                %>
                <div style="padding-top: 5px; padding-bottom: 10px; color: #444444;">
                    <%
                    }
                    %>
                    <label id="OwnerLookupLabel" for="crmOwnerLookup" runat="server"></label>
                </div>


                    <%
                        if (!Util.UseTouchSkin())
                        {
                    %>
                <table cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;">
                    <tr>
                        <td>
                            <%
                        }
                            %>
                            <sdk:LookupControl id="crmOwnerLookup" Lookupbrowse="false" LookupStyle="single" runat="server"/>

                            <%
                                if (!Util.UseTouchSkin())
                                {
                            %>
                            </td>
                    </tr>
                </table>
                        <%
                                }
                        %>
                </td>
        </tr>
    </table>
</frm:DialogForm>

</body>
</html>