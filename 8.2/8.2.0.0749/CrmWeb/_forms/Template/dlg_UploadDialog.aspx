<!DOCTYPE html>

<%@ Page Language="C#" Inherits="Microsoft.Crm.Application.Pages.Common.UploadTemplateDialog" %>
<%@ Import Namespace="Microsoft.Crm" %>

<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>

<html lang='<% = Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TwoLetterISOLanguageName %>'>
<head>
    <cnt:appheader id="crmHeader" runat="server"/>
    <script type="text/javascript">
        function exportExcel() {
            createDialogControl = Mscrm.DocumentTemplate.UploadDialogControl
                .create(document.getElementsByTagName("body")[0],
                    <%= TemplateType %>,
                    <%= LocatorService.Instance.GetSiteSetting("ImportMaxAllowedFileSizeInMB") %>);
            checkDivWarnigCSS();
        }

        function checkDivWarnigCSS() {
            if ($P_CRM('div#divWarning').hasClass("ms-crm-RefreshDialog-Warning")) {
                $P_CRM('div#divWarning').removeClass("ms-crm-RefreshDialog-Warning");
            }
            $P_CRM('div#divWarning').addClass("uploadTemplateDivWarning");
        }
    </script>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server">
    <div id="uploadTemplatePage" class="uploadTemplatePage">
        <div class="uploadTemplateClose">
            <a class="uploadTemplateCloseButton" href="javascript:closeWindow();" id="buttonClose" title="<loc:Text ResourceId='Button_Label_Close' runat='server'/>">
                <div>
                    <img alt="<loc:Text ResourceId='Button_Label_Close' runat='server'/>" src="/_imgs/Office/close-icon_12x12.png" unselectable="on"/>
                </div>
            </a>
        </div>
        <div id="uploadTemplateHeader" class="uploadTemplateHeader">
            <div>
                <span class="uploadTemplateWindowTitle">
                    <loc:Text ResourceId="Web.UploadTemplate.Window_Title_Ara" runat="server"/>
                </span>
            </div>
        </div>
        <div id="uploadTemplateMainContent" class="uploadTemplateMainContent">
            <form id="uploadFormDragAndDrop" name='uploadFileDragAndDrop' enctype='multipart/form-data' method='post'>
                <div id="drop_zone" class="drop_zone">
                    <img src="/_imgs/Office/upload_cloud_graphic_102x60.png" id="whiteCloudImg" alt="<loc:Text ID="locDropFile" ResourceId="Web.UploadDocumentTemplatePage.DropFileHere" runat="server"/>" class="uploadTemplateDropFileImage whiteCloud" />
                    <img src="/_imgs/Office/upload_cloud_graphic_HOVER_102x60.png"id="blueCloudImg" alt="<loc:Text ResourceId="Web.UploadDocumentTemplatePage.DropFileHere" runat="server"/>" class="uploadTemplateDropFileImage blueCloud" />
                    <br/>
                    <p class="drop_zone_para" id="drop_zone_para"><%= uploadTemplateUploadText %></p>
                    <p class="drop_zone_para dropText" id="drop_zone_para_shortText">
                        <loc:Text ResourceId="Web.UploadDocumentTemplatePage.DropFileHere" runat="server"/>
                    </p>
                    <div id="errorDescription" class="errorDescription">
                        <p class="drop_zone_para specificError"></p>
                        <p class="drop_zone_para genericError">
                            <loc:Text ID="locGenericError" ResourceId="Web.VerifyDocumentTemplatePage.FailureMessage" runat="server"/>
                        </p>
                    </div>
                    <input id="fileUpload" class="fileUpload" type="file" tabindex="-1"/>
                    <div id="displayFileName" class="displayFileName"></div>
                    <div class="uploadIndicator" id="uploadIndicator">
                        <img src="/_imgs/processing_loader.gif" alt='<loc:text resourceid="InlineEditForm_Processing" runat="server" />'/>
                        <br/>
                        <p class="uploadIndicatorText">
                            <loc:Text ID="uploadIndicatorText" ResourceId="Web.UploadTemplate.UploadIndicator_Text" runat="server"/>
                        </p>
                    </div>
                    <span class="uploadTemplateFilePageText" id="uploadTemplateFilePageText">
                        <loc:Text ID="locUploadFileTypeText" ResourceId="Web.UploadTemplate.FileType_Text" runat="server"/>
                    </span>
                </div>
            </form>
        </div>
        <div id="uploadTemplateFooter" class="uploadTemplateFooter">
            <div id="uploadTemplateFooterText" class="uploadTemplateFooterSmallText">
            </div>
        </div>
    </div>
</frm:DialogForm>
</body>
</html>