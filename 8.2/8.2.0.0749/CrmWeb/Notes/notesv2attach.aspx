<%@ Page language="c#" Inherits="Microsoft.Crm.Web.NotesV2Attach" %>

<%@ Import Namespace="Microsoft.Crm" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>

<!DOCTYPE html>
<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <style>
        body { overflow: hidden; }

        body td.AppAttachment_Render_td { display: none; }

        body #tblUpload td {
            display: block;
            width: 100%;
        }

        body #tblUpload td.ms-crm-Field-Normal,
        body #tblUpload td.AppAttachment_Render_td5 { display: none; }

        body #tblUpload #userFile { width: 100% \9 !important; }

        body #tblUpload col { width: 100% !important; }

        body table.contentUploadFileTable { height: 26px !important; }

        body table tr.uploadFileHeaderRow { display: none !important; }
    </style>
</head>

<body>
<cnt:AppAttachment id="crmAttachment" IsNotesV2Attachment="true" runat="server"/>
<frm:HardcodedForm id="crmForm" runat="server"/>
<span id="currentUserNameSpan" style="display: none"><%= CrmEncodeDecode.CrmHtmlEncode(Microsoft.Crm.Security.User.Current.UserName) %></span>
</body>
</html>