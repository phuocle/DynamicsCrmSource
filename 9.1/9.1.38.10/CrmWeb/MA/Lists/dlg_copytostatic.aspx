<%@ Page language="c#" Inherits="Microsoft.Crm.Dialogs.CopyDynamicListToStaticDialogPage" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="System.Globalization" %>
<%@ Import Namespace="System.Web" %>

<style type="text/css">
.myclass
{
border:0;
}
</style>
<script language="JavaScript">




var title =  "<%=CurrentResourceManager.GetString("Dialog_Title_CopyList")%>";
document.title = title;
$addHandler(window, 'load', PageLoad);
function PageLoad()
{
$get("butBegin").focus();
}

function confirmMode(b)
{
Mscrm.Utilities.setReturnValue(b);
closeWindow();
}

function applychanges()
{


<%=DialogActionOk%>


}

<%





if (DialogActionCancel != String.Empty)
{
%>
function cancel()
{
<%=DialogActionCancel%>
}
<%
}
%>

</script>
<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(BodyDescription) %>