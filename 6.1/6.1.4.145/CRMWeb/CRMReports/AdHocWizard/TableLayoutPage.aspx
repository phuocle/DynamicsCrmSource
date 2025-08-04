<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Reporting.AdHocWizard.TableLayoutPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Controls" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<!DOCTYPE html>
<html>
<head>
	<cnt:AppHeader id="crmHeader" runat="server" />
	<script type="text/javascript">
		// Global constants
		var COLUMN_DEFAULT_SUMMARY_VALUE = "";
		var GROUPING_DEFAULT_SORT_ORDER = "Ascending";
		var GROUPING_DEFAULT_SUMMARY_VALUE = "";
		var GROUPING_DEFAULT_TIME_INTERVAL = GROUP_INTERVAL_MONTH;
		var PAGE_WIDTH_PIXELS = 960;
		// Global variables
		var _iLocaleId = null;
		var _oCacheManager = null; // The property page needs to use a cache and we keep track of it between property page sessions
		var _oFetchBuilder = null; // A FetchBuilder will help build/read Fetch Xml
		var _saGroupingIntervalFormats = null; // Array of grouping interval resource format strings
		var _oSelectedColumnOrGrouping = null; // Keep track of the selected column/grouping
		var _saSummaryValueFormats = null; // Array of summary value resource format strings
		var _oWizardXmlBuilder = null; // A WizardXmlBuilder will help build wizard xml
		// --------------------------------------------------------------------
		// Returns information about the next page in the wizard for the
		// framework
		// --------------------------------------------------------------------
		Sys.Application.add_load(tableLayoutPage_onload);
		function GetNextPageDefinition()
		{
			return new NextPageDefinition(Mscrm.CrmUri.create("/CRMReports/AdHocWizard/ReportFormatPage.aspx"));
		}
		
		// --------------------------------------------------------------------
		// Window onload event
		// --------------------------------------------------------------------
		function tableLayoutPage_onload()
		{
			initializePage();
		}
    // set height of the "ColumnsContainerCell".
		window.setTimeout("UpdateColumnContainerHeight()", 100);
		function UpdateColumnContainerHeight()
		{
			var groupContainerCell = $get("groupContainer");
			var height = groupContainerCell.offsetHeight;
			if(height != 0)
			{
				$get("columnsWrapper").style.top = height.toString() + "px";
				return;
			}
		}
	</script>
</head>
<body>
<frm:WizardForm id="crmForm" runat="server">
	<div style="width:100%;height:100%;position:relative;min-height:330px">
		<div class="ms-crm-absolutePosition" style="<%= Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ? "left:170px" : "right:170px" %>">
			<div id="dummyDiv" class="ms-crm-IE7-Height-Fix-Dummy-Container">
				<div style="height:100%;width:100%">
						<div id="groupContainer">
                            <%--Didn't find how the notification can be displayed, so keeping the height as 80px--%>
                            <cnt:AppNotifications id="notifications" runat="server" /> 
							<ul class="Groupings" id="Groupings">
								<li class="Grouping">
									<div class="EmptyGhostHeader"></div>
									<ul class="Groupings">
										<li class="Grouping">
											<div class="EmptyGhostHeader"></div>
											<ul class="Groupings">
												<li class="Grouping">
													<div class="EmptyGhostHeader"></div>
												</li>
											</ul>
										</li>
									</ul>
								</li>
							</ul>
                        </div>
						<div class="ms-crm-absolutePosition" style="top:80px;bottom:10px" id="columnsWrapper">
                            <div id="dummyDiv3" class="ms-crm-IE7-Height-Fix-Dummy-Container">
							    <div id="ColumnsContainerCell" class="ColumnsContainerCell">
								    <div class="ColumnsContainer">
									    <table>
										    <tr id="Columns">
											    <td id="GhostColumn" class="GhostHeader">
												    <div class="ColumnGhost">
													    <a href="javascript:addColumnOrGrouping(PROPERTY_PAGE_TYPE_COLUMN)" title="<loc:Text Encoding='HtmlAttribute' ResourceId='CustomReporting.AdHocWizard.TableLayoutPage.GhostColumn' runat='server' />"><loc:Text ResourceId="CustomReporting.AdHocWizard.TableLayoutPage.GhostColumn" runat="server" /></a>
												    </div>
											    </td>
										    </tr>
									    </table>
								    </div>
							    </div>
                            </div>
						</div>
				</div>
			</div>
		</div>
		<div class="ms-crm-absolutePosition" style="<%= Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ? "width:143px;right:auto" : "width:170px;left:auto" %>">
			<div id="dummyDiv2" class="ms-crm-IE7-Height-Fix-Dummy-Container">
				<div style="height:100%;margin-left:20px">
					<crm:TaskBox runat="server" id="taskBox"/>
				</div>
			</div>
		</div>
	</div>
</frm:WizardForm>
</body>
</html>
