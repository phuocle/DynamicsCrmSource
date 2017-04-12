<!DOCTYPE html>

<%@ Page Language="C#" Inherits="Microsoft.Crm.Application.Pages.Common.SelectEntitiesDialog" %>

<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>

<html lang='<% = Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TwoLetterISOLanguageName %>'>
<head>
    <cnt:appheader id="crmHeader" runat="server"/>
    <script>
        var selectDialogControl = null;

        function exportWord() {
            selectDialogControl = Mscrm.DocumentTemplate.SelectDialogControl
                .create(document.getElementsByTagName("body")[0], <%= entityTypeCode %>);
        }

        function close() {
            selectDialogControl.dispose();
            closeWindow();
        }
    </script>
</head>
<body class="selectEntitiesDialog">
<frm:DialogForm id="crmForm" runat="server">
    <div class="selectEntitiesClose">
        <a class="selectEntitiesCloseButton" href="javascript:close();" id="buttonClose" title="<loc:Text ResourceId='Button_Label_Close' runat='server'/>">
            <div class="navTourButtonImage">
                <img alt="<loc:Text ResourceId='Button_Label_Close' runat='server'/>" src="/_imgs/Office/close-icon_12x12.png" unselectable="on"/>
            </div>
        </a>
    </div>
    <div id="selectEntitiespage">
        <div id="selectEntitiesHeader">
            <div class="selectEntitiesEntityListText" tabindex="0">
                <loc:Text ResourceId="Web.SelectEntities.Window_Title_Ara" runat="server"/>
                <div class="selectEntitiesDropdown">
                    <ui:Select id="EntityList" runat="server"/>
                </div>

            </div>
        </div>
        <div id="selectEntitiesWarningMessage">
            <%= selectEntitiesWarningMessageText %>
        </div>
        <div class="relationshipGrids">
            <div class="selectEntitiesGridArea">
                <div class="gridOneToN">
                    <div class="relationshipTitleText">
                        <loc:Text ResourceId="Web.SelectEntities.One_To_N_Relationship" runat="server"/>
                        <a href="#" class="helpContainer" title="<loc:Text ResourceId='Button_Label_Help' runat='server'/>">
                            <img src="/_imgs/Office/question_mark_icon_black_20x20.png" alt="<loc:Text ResourceId='Button_Label_Help' runat='server'/>"/>
                        </a>
                    </div>
                    <div class="selectEntitiesGrid">
                        <cnt:AppGrid runat="server" id="crmGridOneToN"/>
                    </div>
                </div>
            </div>
            <div class="selectEntitiesGridArea">
                <div class="gridNToOne">
                    <div class="relationshipTitleText">
                        <loc:Text ResourceId="Web.SelectEntities.N_To_One_Relationship" runat="server"/>
                        <a href="#" class="helpContainer" title="<loc:Text ResourceId='Button_Label_Help' runat='server'/>">
                            <img src="/_imgs/Office/question_mark_icon_black_20x20.png" alt="<loc:Text ResourceId='Button_Label_Help' runat='server'/>"/>
                        </a>
                    </div>
                    <div class="selectEntitiesGrid">
                        <cnt:AppGrid runat="server" id="crmGridNToOne"/>
                    </div>
                </div>
            </div>
            <div class="selectEntitiesGridArea">
                <div class="gridNToN">
                    <div class="relationshipTitleText">
                        <loc:Text ResourceId="Web.SelectEntities.N_To_N_Relationship" runat="server"/>
                        <a href="#" class="helpContainer" title="<loc:Text ResourceId='Button_Label_Help' runat='server'/>">
                            <img src="/_imgs/Office/question_mark_icon_black_20x20.png" alt="<loc:Text ResourceId='Button_Label_Help' runat='server'/>"/>
                        </a>
                    </div>
                    <div class="selectEntitiesGrid">
                        <cnt:AppGrid runat="server" id="crmGridNToN"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</frm:DialogForm>
<div style="display: none">
    <iframe name="exportIFrame" title="" class="exportIframe"></iframe>
</div>
<div id='loadingContainer' class="indicatorOff">
    <img id="progressImage" class="progressImage" alt='<loc:text resourceid="InlineEditForm_Processing" runat="server" />' src="/_imgs/processing_loader.gif">
</div>
<div class="downloadedTitle" id="downloadedTitle">
    <loc:text resourceid="ExportToExcelDownloadStarted" runat="server"/>
</div>
</body>
</html>