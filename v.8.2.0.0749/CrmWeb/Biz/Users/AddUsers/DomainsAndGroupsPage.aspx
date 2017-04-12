<%@ Page Language="c#" Inherits="Microsoft.Crm.Application.Pages.Business.Users.AddUsers.DomainsAndGroupsPage" EnableViewState="true" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ register tagprefix="frm" namespace="Microsoft.Crm.Application.Forms" assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<!DOCTYPE html>
<html>
<head runat="server">
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script language="javascript" type="text/javascript">
        var _loadTreeValue = null;
        var _searchModeAll = null;
        var _searchModeSpecific = null;
        var _selectedNodeValue = null;


        function domainsAndGroupsPage_onload() {


            _loadTreeValue = $get("loadTreeValue");
            _searchModeAll = $get("searchModeAll");
            _searchModeSpecific = $get("searchModeSpecific");
            _selectedNodeValue = Mscrm.FormControlInputBehavior.GetBehavior(_loadTreeValue.selectedNodeValue.id);
            if (isNullOrEmptyString(_selectedNodeValue.get_dataValue())) {
                var sUserContainer = WizardGetProperty("UserContainer");

                if (!IsNull(sUserContainer) && sUserContainer != _sSearchRoot) {
                    _selectedNodeValue.set_dataValue(WizardGetProperty("UserContainer"));
                    _loadTreeValue.submit();
                } else {
                    _searchModeAll.checked = true;
                    WizardSetButtonEnabled(true, _WizardButtonsEnum.NEXTBUTTON);
                }
            } else {
                _searchModeSpecific.checked = true;
            }


            toggleSearchRoot();
        }


        function GetNextPageDefinition() {
            var oUrl = Mscrm.CrmUri.create("/Biz/Users/AddUsers/SelectUsersPage.aspx");
            var sPostData = WizardGetProperty("UserContainer");

            return new NextPageDefinition(oUrl, sPostData);
        }


        function moveNext() {


            var sUserContainer = WizardGetProperty("UserContainer");
            var sNewUserContainer = (_searchModeAll.checked) ? _sSearchRoot : _selectedNodeValue.get_dataValue();
            if (!IsNull(sUserContainer) && sUserContainer != sNewUserContainer) {
                WizardSetProperty("UserXml", null);
            }


            WizardSetProperty("UserContainer", sNewUserContainer);

            WizardNavigate(_WizardNavigateEnum.NEXT);
        }


        function toggleSearchRoot() {
            var bSearchAll = _searchModeAll.checked;


            $get('treeCover').style.display = (bSearchAll) ? "block" : "none";
            $get("activeDirectoryTree").style.display = (bSearchAll) ? "none" : "block";


            WizardSetButtonEnabled(bSearchAll || !isNullOrEmptyString(_selectedNodeValue.get_dataValue()),
                _WizardButtonsEnum.NEXTBUTTON);
        }

        Sys.Application.add_load(domainsAndGroupsPage_onload);
    </script>
</head>
<body>
<frm:WizardForm id="crmForm" runat="server">
    <form id="loadTreeValue" method="post" action="">
        <ui:Hidden ID="selectedNodeValue" runat="server"/>
    </form>

    <table class="stdTable" style="height: 98%;">
        <colgroup>
            <col width="3%"/>
            <col width="97%"/>
        </colgroup>
        <tr>
            <td>
                <input type="radio" class="ms-crm-AddUsers-RadioButton" name="searchMode" id="searchModeAll" onclick="toggleSearchRoot();" checked="checked"/>
            </td>
            <td class="ms-crm-AddUsers-DomainsAndGroups-Option">
                <label for="searchModeAll">
                    <loc:Text ResourceId="AddUsersWizard.DomainsAndGroupsPage.AllDomains" runat="server"/>
                </label>
            </td>
        </tr>
        <tr>
            <td>
                <input type="radio" class="ms-crm-AddUsers-RadioButton" name="searchMode" id="searchModeSpecific" onclick="toggleSearchRoot();"/>
            </td>
            <td class="ms-crm-AddUsers-DomainsAndGroups-Option">
                <label for="searchModeSpecific">
                    <loc:Text ResourceId="AddUsersWizard.DomainsAndGroupsPage.SpecificContainer" runat="server"/>
                </label>
            </td>
        </tr>
        <tr>
            <td/>
            <td valign="top" style="height: 80%">
                <form runat="server" class="ms-crm-AddUsers-DomainsAndGroups">
                    <div id="treeCover" class="ms-crm-AddUsers-Tree"></div>
                    <asp:TreeView
                        ID="activeDirectoryTree"
                        CssClass="ms-crm-AddUsers-Tree"
                        EnableClientScript="true"
                        HoverNodeStyle-CssClass="ms-crm-AddUsers-HoverNode"
                        NodeStyle-CssClass="ms-crm-AddUsers-Node"
                        OnSelectedNodeChanged="TreeSelectedNodeChanged"
                        OnTreeNodePopulate="PopulateActiveDirectoryTreeNode"
                        PopulateNodesFromClient="true"
                        SelectedNodeStyle-CssClass="ms-crm-AddUsers-SelectedNode"
                        runat="server"/>
                </form>
            </td>
        </tr>
    </table>

</frm:WizardForm>
</body>
</html>