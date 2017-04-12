<%@ Page language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.MA.ManageMembersPage" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<script language="JavaScript">

    $addHandler(window, 'load', PageLoad);

    function PageLoad() {

        $get("butBegin").disabled = true;
    }

    function updateUIState() {

        $get("butBegin").disabled = false;
    }


    function cancel() {
        Mscrm.Utilities.setReturnValue("0");
        closeWindow();
    }


    function applychanges() {
        var ret = "0";
        switch (true) {
        case $get("radAddByLookup").checked:
            ret = "1";
            break;
        case $get("radAddByAdvFind").checked:
            ret = "2";
            break;
        case $get("radRemoveByAdvFind").checked:
            ret = "3";
            break;
        case $get("radKeepByAdvFind").checked:
            ret = "4";
            break;
        }


        Mscrm.Utilities.setReturnValue(ret);


        closeWindow(true);
    }

</script>

<table width="100%" cellpadding="8">
    <tr class="main">
        <table width="100%" style="table-layout: fixed">
            <col>
            <tr>
                <td>
                    <label style="FONT-WEIGHT: <%= WebUtility.GetFontResourceAttribute("General.Bold.font_weight") %>">
                        <loc:Text ResourceId="MA.List.Dialogs.ManageMembers.Question" runat="server"/>
                    </label>
                </td>
            </tr>
            <tr height="5">
                <td></td>
            </tr>
            <tr>
                <td>
                    <table width="100%" style="table-layout: fixed">
                        <col width="22"><col>


                        <tr>
                            <td>
                                <input class="radio" type="radio" id="radAddByLookup" name="radLevel1Group" onclick="updateUIState()" editable>
                            </td>
                            <td>
                                <label for="radAddByLookup" style="FONT-WEIGHT: <%= WebUtility.GetFontResourceAttribute("General.Bold.font_weight") %>; COLOR: #333333">
                                    <loc:Text ResourceId="MA.List.Dialogs.ManageMembers.Opt.Add.Lookup.Title" runat="server"/>
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>
                                <label style="COLOR: #666666">
                                    <loc:Text ResourceId="MA.List.Dialogs.ManageMembers.Opt.Add.Lookup.Desc" runat="server"/>
                                </label>
                            </td>
                        </tr>
                        <tr height="5">
                            <td></td><td></td>
                        </tr>


                        <tr>
                            <td>
                                <input class="radio" type="radio" id="radAddByAdvFind" name="radLevel1Group" onclick="updateUIState()" editable>
                            </td>
                            <td>
                                <label for="radAddByAdvFind" style="FONT-WEIGHT: <%= WebUtility.GetFontResourceAttribute("General.Bold.font_weight") %>; COLOR: #333333">
                                    <loc:Text ResourceId="MA.List.Dialogs.ManageMembers.Opt.Add.AdvFind.Title" runat="server"/>
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>
                                <label style="COLOR: #666666">
                                    <loc:Text ResourceId="MA.List.Dialogs.ManageMembers.Opt.Add.AdvFind.Desc" runat="server"/>
                                </label>
                            </td>
                        </tr>
                        <tr height="5">
                            <td></td><td></td>
                        </tr>


                        <tr>
                            <td>
                                <input class="radio" type="radio" id="radRemoveByAdvFind" name="radLevel1Group" onclick="updateUIState()" editable>
                            </td>
                            <td>
                                <label for="radRemoveByAdvFind" style="FONT-WEIGHT: <%= WebUtility.GetFontResourceAttribute("General.Bold.font_weight") %>; COLOR: #333333">
                                    <loc:Text ResourceId="MA.List.Dialogs.ManageMembers.Opt.Remove.AdvFind.Title" runat="server"/>
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>
                                <label style="COLOR: #666666">
                                    <loc:Text ResourceId="MA.List.Dialogs.ManageMembers.Opt.Remove.AdvFind.Desc" runat="server"/>
                                </label>
                            </td>
                        </tr>
                        <tr height="5">
                            <td></td><td></td>
                        </tr>


                        <tr>
                            <td>
                                <input class="radio" type="radio" id="radKeepByAdvFind" name="radLevel1Group" onclick="updateUIState()" editable>
                            </td>
                            <td>
                                <label for="radKeepByAdvFind" style="FONT-WEIGHT: <%= WebUtility.GetFontResourceAttribute("General.Bold.font_weight") %>; COLOR: #333333">
                                    <loc:Text ResourceId="MA.List.Dialogs.ManageMembers.Opt.Keep.AdvFind.Title" runat="server"/>
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>
                                <label style="COLOR: #666666">
                                    <loc:Text ResourceId="MA.List.Dialogs.ManageMembers.Opt.Keep.AdvFind.Desc" runat="server"/>
                                </label>
                            </td>
                        </tr>

                    </table>
                </td>
            </tr>
        </table>
    </tr>
</table>