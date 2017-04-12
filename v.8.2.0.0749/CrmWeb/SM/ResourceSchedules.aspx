<%@ Page language="c#" Inherits="Microsoft.Crm.Service.Application.Pages.SM.ResourceSchedule" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<!DOCTYPE html>
<html>
<head>
    <cnt:AppHeader runat="server" id="crmHeader"/>
    <script type="text/javascript" language="javascript">

        Sys.Application.add_load(function() {
            RefreshGantt();
        });


        function RefreshGantt() {
            if (IsNull(window.frames['frmGanttFrame']))
                return;

            var oParentGanttFrame = GetMainPane().frames['frmGanttFrame'];
            var selectedBlockID = oParentGanttFrame.SelectedBlockID();
            var selectedRowID = oParentGanttFrame.SelectedRowID();

            window.frames['frmGanttFrame'].location.href =
                "GanttControlFrame.aspx?viewID=" +
                _viewId +
                "&subareatype=" +
                _subareaType +
                "&zoomLevel=" +
                ZoomLevel() +
                "&startDate=" +
                StartDate() +
                "&endDate=" +
                EndDate() +
                "&appointmentID=" +
                _entityIdString +
                "&hideControls=true";
        }

        function GanttSelectionChanged() {

        }


        function StartDate() {
            return GetMainPane().StartDate();
        }

        function EndDate() {
            return GetMainPane().EndDate();
        }

        function ZoomLevel() {
            return GetMainPane().ZoomLevel();
        }

        function GetPersistedState(stateName, defaultValue) {
            return GetMainPane().GetPersistedState(stateName, defaultValue);
        }

        function SubAreaType() {

            return "appforsched";
        }

        function GetMainPane() {
            return window.parent.parent;
        }

    </script>

</head>

<body class="ResourceSchedules_body">
<frm:ActivityForm id="crmForm" runat="server">
    <div id="ganttPageBodyTable">
        <iframe id="frmGanttFrame" name="frmGanttFrame" style="width: 100%; height: 100%; border: 0px" src="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Microsoft.Crm.Application.Utility.CrmUri.Create("/_static/blank.htm", Microsoft.Crm.Application.Security.UserInformation.Current).ToString()) %>"></iframe>
    </div>

</frm:ActivityForm>


</body>
</html>