<!DOCTYPE html >
<%@ Page Language="c#" Inherits="Microsoft.Crm.Core.Application.Pages.Dialogs.HierarchyRelationshipDialogForm" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Globalization" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Controls" Assembly="Microsoft.Crm.Application.Components.UI" %>
<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script>
        var relationshipName = null;
        var btnDone = null;
        var _oRelUtlConst =
        {
            relationshipIdParam: "entityRelationshipId",
            sCustomizationCommandObject: "SystemCustomization",
            sUpdatingEntityRelation: "SetRelationshipAsHierarchical"
        };
        var hierarchyRelationshipsGrid = $find("gridHierarchyRelationships");

        var readyStateCheck = function() {
            if (document.readyState === "complete") {
                hierarchyRelationshipsGrid = $find("gridHierarchyRelationships");


                btnDone = document.getElementById('butBegin');
                btnDone.disabled = true;

                if (IsNull(hierarchyRelationshipsGrid)) {
                    throw Error.argumentNull("gridControl is null");
                }
                clearInterval(readyStateCheckInterval);
            }
        }
        var readyStateCheckInterval = setInterval(readyStateCheck, 1e3);


        function applychanges() {
            if (relationshipName != null) {
                var relationshipControlName = window.top.opener.document.getElementById('txtRelationship');
                relationshipControlName.value = relationshipName;
            }
            window.close();
        }


        function markHierarchial() {
            var selectedRecord = hierarchyRelationshipsGrid.get_selectedRecords();
            if (selectedRecord.length > 0) {
                var ishierarchial = (hierarchyRelationshipsGrid
                    .getCellValue("ishierarchial", hierarchyRelationshipsGrid.get_selectedIds()[0]) ==
                    "True")
                if ((!ishierarchial && window.confirm(window.LOCID_ACTION_MARKHIERARCHIAL)) || ishierarchial) {
                    var relationshipIdString = selectedRecord[0].Id.toString().split("{");
                    var entityRelationshipId = relationshipIdString[1].replace("}", "");

                    var oCommand = new RemoteCommand(_oRelUtlConst.sCustomizationCommandObject,
                        _oRelUtlConst.sUpdatingEntityRelation);
                    oCommand.SetParameter(_oRelUtlConst.relationshipIdParam, entityRelationshipId);
                    var result = oCommand.Execute();
                    if (result.Success) {
                        relationshipName = XUI.DomUtilities
                            .GetFirstChild(XUI.DomUtilities
                                .GetFirstChild(hierarchyRelationshipsGrid.get_innerGrid().get_selectedRecords()[0][3]
                                    .cells[2])).nodeValue;
                        var fieldName = XUI.DomUtilities
                            .GetFirstChild(XUI.DomUtilities
                                .GetFirstChild(hierarchyRelationshipsGrid.get_innerGrid().get_selectedRecords()[0][3]
                                    .cells[6])).nodeValue;
                        relationshipName = fieldName + ' (' + relationshipName + ')';
                        hierarchyRelationshipsGrid.refresh();
                        btnDone.disabled = false;
                    }
                }
            } else {
                alert(window.LOCID_ACTION_SELECTONEHIERARCHYRULE);
            }
        }


        window.onbeforeunload = function() {
            applychanges();
        }
    </script>
</head>
<body style="background-color: #fafafd;">
<frm:DialogForm id="crmForm" runat="server">

    <crm:MenuBar id="menuBar" runat="server"/>
    <div class="ms-crm-home-staticgridcontainer" style="top: 26px">
        <div class="ms-crm-IE7-Height-Fix-Dummy-Container">
            <cnt:AppGrid id="gridHierarchyRelationships" runat="server"/>
        </div>
    </div>
</frm:DialogForm>
<script>
    var tdDialogHeader = window.document.getElementById("tdDialogHeader");
    tdDialogHeader.style.display = 'none';

    var tdDlgHdBodyContainer = window.document.getElementById("DlgHdBodyContainer");
    tdDlgHdBodyContainer.style.top = '10px';
</script>
</body>
</html>