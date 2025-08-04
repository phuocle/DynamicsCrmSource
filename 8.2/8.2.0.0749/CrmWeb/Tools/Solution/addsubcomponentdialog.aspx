<!DOCTYPE html >

<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.Solution.AddSubcomponentDialog" %>

<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Mscrm" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="cui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<html lang='<% = Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TwoLetterISOLanguageName %>'>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <style type="text/css">
        .ms-crm-disableDiaglogGrid {
            position: absolute;
            width: 100%;
            height: 325px;
            background-color: rgba(0, 0, 0, 0.1);
            top: 36px;
            z-index: 100;
        }

        .ms-crm-dialogTitle {
            top: 35px;
            position: fixed;
            left: 0px;
            right: 0px;
            margin-left: 30px;
            margin-right: 30px;
            color: #000000;
            font-size: 36px;
        }

        .ms-crm-Table {
            top: 72px;
            position: fixed;
            width: 100%;
        }

        .ms-crm-TableTd {

            <% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
               { %>
            padding-left: 55px;
            <% }
               else
               { %>
            padding-right: 55px;
            <% } %>
        }
    </style>
    <script type="text/javascript" language="JavaScript">

        Sys.Application.add_load(PageLoad);

        function PageLoad() {
            var dialogHeaderDiv = window.document.getElementById("dialogHeaderTitle");
            dialogHeaderDiv.style.display = 'none';
            dialogHeaderDiv = window.document.getElementById("dialogHeaderDesc");
            dialogHeaderDiv.style.display = 'none';
            var dlgHeader = window.document.getElementById("dlgHeader");
            dlgHeader.innerHTML = LOCID_TITLE_DIALOG;
            var tdDlgHdBodyContainer = window.document.getElementById("DlgHdBodyContainer");
            tdDlgHdBodyContainer.style.top = '90px';
            if (disableSelectionInGrid) {
                document.getElementById("chkSelectAllAssets").checked = true;
                Mscrm.SolutionComponentList.selectAllComponent();
            }
        }

        var readyStateCheck = function() {
            if (document.readyState === "complete") {
                Mscrm.SolutionComponentList.preSelectSolutionSubComponents();
                clearInterval(readyStateCheckInterval);
            }
        }
        var readyStateCheckInterval = setInterval(readyStateCheck, 1e3);

        function cancel() {
            Mscrm.SolutionComponentList.resetSelectedSolutionSubcomponents();
            closeWindow();
        }

        function applychanges(backButtonClicked) {
            Mscrm.SolutionComponentList.applyChanges(backButtonClicked);
        }

        function selectAllComponent() {
            Mscrm.SolutionComponentList.selectAllComponent();
        }

        function onFilterChange(componentType, relationshipRole) {
            Mscrm.SolutionComponentList.onFilterChange(componentType, relationshipRole);
        }
    </script>

</head>
<body>
<frm:DialogForm id="crmForm" supportsdefaultdata="true" runat="server">
<div style="overflow: hidden;">
<div>
    <div id="dialogHeaderTitle" class="ms-crm-TextAutoEllipsis ms-crm-dialogTitle">
        <label id="dlgHeader"></label>
    </div>
    <table class="ms-crm-Table">
        <tr>
            <td width="40%">
                <div id="dialogHeaderDesc">
                    <label id="dlgDescription"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(CurrentResourceManager.GetString("SolutionSegmentation.EntityAssets")) %></label>
                </div>
            </td>
            <td align="right" class="ms-crm-TableTd">
                <table>
                    <tr>
                        <td>
                            <ui:CheckBox class='checkbox' id="chkSelectEntityMetadata" runat="server"/>
                            <label for="chkSelectEntityMetadata"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(CurrentResourceManager.GetString("SolutionSegmentation.CheckBox.Text.EntityMetadata")) %></label>
                        </td>
                        <td>
                            <ui:CheckBox class='checkbox' onclick='selectAllComponent()' id="chkSelectAllAssets" runat="server"/>
                            <label for="chkSelectAllAssets"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(CurrentResourceManager.GetString("SolutionSegmentation.CheckBox.Text.Assets")) %></label>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</div>
<div>
    <hr/>
</div>
<div id="tabs">
    <div style="position: absolute; top: 16px; left: 0px; right: 0px; height: 29px; width: 100%;">
        <cnt:AppTabBar id="crmTabBar" runat="server"/>
    </div>
    <% if (gridForm != null)
       { %>
        <div id="tab1" class="ms-crm-Tab TabContent">
            <div style="position: absolute; top: 45px; left: 0px; height: 29px; width: 100%;">
                <table style="width: 100%" cellpadding="0" cellspacing="0">
                    <tr>
                        <td style="width: 100%">
                            <cnt:AppViewSelector id="crmViewSelector" runat="server"/>
                        </td>
                    </tr>
                </table>
            </div>
            <div style="bottom: 0px; right: 0px; top: 74px; left: 0px; position: absolute; width: 100%;">
                <cnt:AppGrid runat="server" id="gridForm"/>
            </div>
        </div>
    <% } %>
    <% if (gridUIElements != null)
       { %>
        <div id="tab2" class="ms-crm-Tab TabContent">
            <div style="position: absolute; top: 45px; left: 0px; height: 29px; width: 100%;">
                <table style="width: 100%" cellpadding="0" cellspacing="0">
                    <tr>
                        <td class="uiElements_td_FilterLabel" style="white-space: nowrap">
                            <label for="selFilterViews">
                                <span class="ms-crm-Bold-Header">
                                    <loc:Text ResourceId="SystemCustomization.EntityListPage.Labels.Filter" runat="server"/>
                                </span>
                            </label>
                        </td>
                        <td style="width: 100%">
                            <ui:Select id="selFilterViews" OnChange="onFilterChange('1039');" runat="server"/>
                        </td>
                    </tr>
                </table>
            </div>
            <div style="bottom: 0px; right: 0px; top: 74px; left: 0px; position: absolute; width: 100%;">
                <cnt:AppGrid runat="server" id="gridUIElements" name="gridUIElements"/>
            </div>
        </div>
    <% } %>
    <% if (gridVisualizations != null)
       { %>
        <div id="tab3" class="ms-crm-Tab TabContent">
            <div style="position: absolute; top: 45px; left: 0px; height: 29px; width: 100%;">
                <table style="width: 100%" cellpadding="0" cellspacing="0">
                    <tr>
                        <td class="uiElements_td_FilterLabel" style="white-space: nowrap">
                            <label for="selFilterCharts">
                                <span class="ms-crm-Bold-Header">
                                    <loc:Text ResourceId="SystemCustomization.EntityListPage.Labels.Filter" runat="server"/>
                                </span>
                            </label>
                        </td>
                        <td style="width: 100%">
                            <ui:Select id="selFilterCharts" OnChange="onFilterChange('1111');" runat="server"/>
                        </td>
                    </tr>
                </table>
            </div>
            <div style="bottom: 0px; right: 0px; top: 74px; left: 0px; position: absolute; width: 100%;">
                <cnt:AppGrid runat="server" id="gridVisualizations" name="gridVisualizations"/>
            </div>
        </div>
    <% } %>
    <% if (gridAttributes != null)
       { %>
        <div id="tab4" class="ms-crm-Tab TabContent">
            <div style="position: absolute; top: 45px; left: 0px; height: 29px; width: 100%;">
                <table style="width: 100%" cellpadding="0" cellspacing="0">
                    <tr>
                        <td class="attributeList_td_Filter" style="white-space: nowrap">
                            <label for="selFilterAttributes">
                                <span class="ms-crm-Bold-Header">
                                    <loc:Text ResourceId="SystemCustomization.EntityListPage.Labels.Filter" runat="server"/>
                                </span>
                            </label>
                        </td>
                        <td style="width: 100%">
                            <ui:Select id="selFilterAttributes" OnChange="onFilterChange('9802');" runat="server"/>
                        </td>
                    </tr>
                </table>
            </div>
            <div style="bottom: 0px; right: 0px; top: 74px; left: 0px; position: absolute; width: 100%;">
                <cnt:AppGrid runat="server" id="gridAttributes" name="gridAttributes"/>
            </div>
        </div>
    <% } %>
    <% if (gridAlternateKeys != null)
       { %>
        <div id="tab5" class="ms-crm-Tab TabContent">
            <div style="bottom: 0px; right: 0px; top: 45px; left: 0px; position: absolute; width: 100%;">
                <cnt:AppGrid runat="server" id="gridAlternateKeys" name="gridAlternateKeys"/>
            </div>
        </div>
    <% } %>
    <% if (gridOneToManyRelationships != null)
       { %>
        <div id="tab6" class="ms-crm-Tab TabContent">
            <div style="position: absolute; top: 45px; left: 0px; height: 29px; width: 100%;">
                <table style="width: 100%" cellpadding="0" cellspacing="0">
                    <tr>
                        <td class="relationshipList_td_FilterType" style="white-space: nowrap">
                            <label for="selFilterRelationships">
                                <span class="ms-crm-Bold-Header">
                                    <loc:Text ResourceId="SystemCustomization.RelationshipListPage.Labels.TypeFilter" runat="server"/>
                                </span>
                            </label>
                        </td>
                        <td style="width: 100%">
                            <ui:Select id="selFilterRelationships" OnChange="onFilterChange('9803',Mscrm.SolutionComponentList.oneToManyRelationshipRole);" runat="server"/>
                        </td>
                    </tr>
                </table>
            </div>
            <div style="bottom: 0px; right: 0px; top: 74px; left: 0px; position: absolute; width: 100%;">
                <cnt:AppGrid runat="server" id="gridOneToManyRelationships" name="gridOneToManyRelationships"/>
            </div>
        </div>
    <% } %>
    <% if (gridManyToOneRelationships != null)
       { %>
        <div id="tab7" class="ms-crm-Tab TabContent">
            <div style="position: absolute; top: 45px; left: 0px; height: 29px; width: 100%;">
                <table style="width: 100%" cellpadding="0" cellspacing="0">
                    <tr>
                        <td class="relationshipList_td_FilterType" style="white-space: nowrap">
                            <label for="selFilterMRelationships">
                                <span class="ms-crm-Bold-Header">
                                    <loc:Text ResourceId="SystemCustomization.RelationshipListPage.Labels.TypeFilter" runat="server"/>
                                </span>
                            </label>
                        </td>
                        <td style="width: 100%">
                            <ui:Select id="selFilterMRelationships" OnChange="onFilterChange('9803',Mscrm.SolutionComponentList.manyToOneRelationshipRole);" runat="server"/>
                        </td>
                    </tr>
                </table>
            </div>
            <div style="bottom: 0px; right: 0px; top: 74px; left: 0px; position: absolute; width: 100%;">
                <cnt:AppGrid runat="server" id="gridManyToOneRelationships" name="gridManyToOneRelationships"/>
            </div>
        </div>
    <% } %>
    <% if (gridManyToManyRelationships != null)
       { %>
        <div id="tab8" class="ms-crm-Tab TabContent">
            <div style="position: absolute; top: 45px; left: 0px; height: 29px; width: 100%;">
                <table style="width: 100%" cellpadding="0" cellspacing="0">
                    <tr>
                        <td class="relationshipList_td_FilterType" style="white-space: nowrap">
                            <label for="selFilterNToNRelationships">
                                <span class="ms-crm-Bold-Header">
                                    <loc:Text ResourceId="SystemCustomization.RelationshipListPage.Labels.TypeFilter" runat="server"/>
                                </span>
                            </label>
                        </td>
                        <td style="width: 100%">
                            <ui:Select id="selFilterNToNRelationships" OnChange="onFilterChange('9803',Mscrm.SolutionComponentList.manyToManyRelationshipRole);" runat="server"/>
                        </td>
                    </tr>
                </table>
            </div>
            <div style="bottom: 0px; right: 0px; top: 74px; left: 0px; position: absolute; width: 100%;">
                <cnt:AppGrid runat="server" id="gridManyToManyRelationships" name="gridManyToManyRelationships"/>
            </div>
        </div>
    <% } %>
    <% if (gridDisplayStrings != null)
       { %>
        <div id="tab9" class="ms-crm-Tab TabContent">
            <div style="bottom: 0px; right: 0px; top: 45px; left: 0px; position: absolute; width: 100%;">
                <cnt:AppGrid runat="server" id="gridDisplayStrings" name="gridDisplayStrings"/>
            </div>
        </div>
    <% } %>
    <% if (gridBpf != null)
       { %>
        <div id="tab10" class="ms-crm-Tab TabContent">
            <div style="bottom: 0px; right: 0px; top: 45px; left: 0px; position: absolute; width: 100%;">
                <cnt:AppGrid runat="server" id="gridBpf" name="grid"/>
            </div>
        </div>
    <% } %>
    <% if (gridHierarchyRules != null)
       { %>
        <div id="tab11" class="ms-crm-Tab TabContent">
            <div style="bottom: 0px; right: 0px; top: 45px; left: 0px; position: absolute; width: 100%;">
                <cnt:AppGrid runat="server" id="gridHierarchyRules" name="gridHierarchyRules"/>
            </div>
        </div>
    <% } %>
    <% if (crmGridControl != null)
       { %>
        <div id="tab12" class="ms-crm-Tab TabContent">
            <div style="bottom: 0px; right: 0px; top: 45px; left: 0px; position: absolute; width: 100%;">
                <cnt:AppGrid runat="server" id="crmGridControl" name="crmGridControl"/>
            </div>
        </div>
    <% } %>
    <div id="disableGrid"></div>
</div>
</div>
</frm:DialogForm>
</body>
</html>