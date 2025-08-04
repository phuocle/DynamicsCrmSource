<!DOCTYPE html >
<%@ Page Language="c#" Inherits="Microsoft.Crm.Dialogs.AddNotesDialogPage" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>

<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<script language="JavaScript">
_custParams = "&sSubTypes=" + CrmEncodeDecode.CrmUrlEncode(_subTypes);
Sys.Application.add_load(PageLoad);
function applychanges()
{
var notes = Mscrm.FormControlInputBehavior.GetBehavior('notes');
var dataXml = notes.get_dataXml();
if (!IsNull(dataXml))
{
__dialogXml = dataXml;
go();
}
else
{
closeWindow();
}
}
function activateButton()
{
document.getElementById("butBegin").removeAttribute('disabled');
}

function PageLoad()
{
document.getElementById("butBegin").setAttribute('disabled', true);
$addHandler(document.getElementById("notes"), "load", activateButton);
}


</script>
<style type="text/css">
.ms-crm-RefreshDialog-Header
{
height: 65px !important;
}
.ms-crm-RefreshDialog-Main
{
top: 70px !important;
}
.ms-crm-RefreshDialog-Warning
{
top: 1px !important;
}
</style>

</head>
<body>
<frm:DialogForm id="crmForm" runat="server">
<div style="width: 100%; height: 5%; ">
<cnt:AppNotifications id="Notifications" runat="server" />
</div>
<div style="width: 100%; height: 4%; ">
</div>
<div class="crm-note-padding" style="width: 98%; height: 7%;">
<loc:Text ResourceId="Dialog_AddNotes_EnterNoteLabel" runat="server" />
</div>
<div class="crm-note-padding" style="width: 98%; height: 84%;" >
<div title="<loc:Text Encoding='HtmlAttribute' ResourceId='Dialog_AddNotes_NoteLabel' runat='server'/>"
class="crm-note-floatLeft" style="width: 22%;">
<label for="notes">
<loc:Text ResourceId="Dialog_AddNotes_NoteLabel" runat="server" />
</label>
</div>
<div class="crm-note-floatRight" style="width: 78%;height: 100%;">
<cnt:NotesControl id="notes" runat="server" />
</div>
</div>
</frm:DialogForm>
</body>
</html>