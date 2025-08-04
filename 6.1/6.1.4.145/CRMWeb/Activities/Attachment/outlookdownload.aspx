<%@ Page language="c#" Inherits="Microsoft.Crm.Common.Web.Activities.OutlookActivityAttachmentDownload" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<!DOCTYPE html >
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server"/>
<script type="text/javascript">
openFrmObject(<%=Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(inspectorUrlQueryString)%>, <%=Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(inspectorUrl)%>, <%=attachmentType%>, null, 0, null);
</script>
</head>
<body>
</body>
</html>
