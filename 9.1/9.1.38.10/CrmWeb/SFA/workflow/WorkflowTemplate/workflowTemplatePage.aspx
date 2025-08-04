<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Sfa.WorkflowTemplatePage" %>

<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Controls" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="cui" Namespace="Microsoft.Crm.Application.Components.UI"
Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web"
Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Application.Types" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<!DOCTYPE html>
<html>
<head>
<cnt:appheader id="crmHeader" runat="server" />
<script type="text/javascript" language="javascript" src="/_static/SFA/workflow/workflowtemplate.js">

</script>
</head>
<body class="ms-crm-workflow-template-page">
<div style="height: 100%; width: 100%; position: absolute; overflow: auto;">
<div class="ms-crm-absolutePosition" style="min-height: 400px; min-width: 450px;">
<frm:hardcodedform id="crmForm" supportsdefaultdata="true" runat="server"></frm:hardcodedform>
<div class="workflowTemplatePage_header">
<div class="ms-crm-Dialog-Header" style="width: 98%;">
<div class="ms-crm-WorkflowTemplate-Header-Title ms-crm-Dialog-Header-Title">
<loc:text resourceid="Web.SFA.Workflow.WorkflowTemplate.Headline1" runat="server" />
</div>
<div class="ms-crm-WorkflowTemplate-Header-Desc">
<loc:text resourceid="Web.SFA.Workflow.WorkflowTemplate.HeadlineDescription" runat="server" />
</div>
</div>
</div>
<div class="workflowTemplatePage_top">
<span id="Page1" style="display: inline">
<table cellpadding="0" cellspacing="0" class="stdTable-workflowTemplate">
<col width="10px"/>
<col width="18%" />
<col width="28%" />
<col width="24%" />
<col width="29%" />
<col />
<tr class="workflowTemplatePage_tr_param">
<td></td>
<td class="ms-crm-Field-Required" id="name_c">
<label for="txtWorkflowName">
<loc:text resourceid="Web.SFA.Workflow.WorkflowTemplate.WorkflowName" runat="server" />
<img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>" />
</label>
<label for="txtWorkflowName" class="ms-crm-Hidden-NoBehavior">
<loc:text resourceid="Forms.Required.AltTag" runat="server" />
</label>
</td>
<td class="workflowTemplatePage_td_processName" colspan="3">
<sdk:textboxcontrol id="txtWorkflowName" name="txtWorkflowName" maxlength="100" runat="server" />
</td>
</tr>
<tr class="workflowTemplatePage_tr_param">
<td></td>
<td id="selectWorkflowCategoryLabel" title="<loc:Text Encoding='HtmlAttribute' ResourceId='Web.SFA.Workflow.WorkflowTemplate.WorkflowCategory' runat='server'/>">
<label for="WorkflowCategory">
<nobr style="width: 90%; text-overflow: ellipsis;">
<loc:Text ResourceId="Web.SFA.Workflow.WorkflowTemplate.WorkflowCategory" runat="server" />
<img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>" />
</nobr>
</label>
</td>
<td class="workflowTemplatePage_td_selectCategory">
<ui:select id="WorkflowCategory" name="WorkflowCategory" runat="server" />
</td>
<td id="selectWorkflowEntityNameLabel" class="workflowTemplatePage_td_primaryEntity"
title="<loc:Text Encoding='HtmlAttribute' ResourceId='Web.SFA.Workflow.WorkflowTemplate.WorkflowEntity' runat='server'/>">
<label for="PrimaryEntity">
<nobr style="width: 90%; text-overflow: ellipsis;">
<loc:Text ResourceId="Web.SFA.Workflow.WorkflowTemplate.WorkflowEntity" runat="server" />
<img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>" />
</nobr>
</label>
</td>
<td class="workflowTemplatePage_td_selectPrimeEntity">
<ui:select id="PrimaryEntity" name="PrimaryEntity" runat="server" />
<ui:select id="PrimaryProcessEntity" name="PrimaryProcessEntity" runat="server" />
<% if (taskBasedFlowFCBEnabled) { %>
<ui:select id="PrimaryTbfEntity" name="PrimaryTbfEntity" runat="server" />
<% } %>
</td>
</tr>
</table>
</span>
<div>
<div id="selectModeRow" class="workflowTemplatePage_selectMode hide" title="<loc:text resourceid="WorkflowSynchronousModeTooltip" runat="server" />">
<div class="workflowTemplatePage_td_left">
<input class="ms-crm-CheckBox" type="checkbox" id="workflowMode" name="checkWorkflowMode"
checked />
<label for="workflowMode">
<loc:text resourceid="WorkflowSynchronousMode" runat="server" />
</label>
</div>
</div>
<% if (isLiveSystem)
{ %>
<div id="workflowMigrationMessage" class="workflowTemplatePage_migrationMsg hide" >
<%=flowMessage%>
</div>
<% } %>
</div>

<div id="workflowTypeContainer" class="workflowTemplatePage_tbx show">
<div id="workflowTemplateTypeLabel" class="workflowTemplatePage_wfType">
<loc:text resourceid="Web.SFA.Workflow.WorkflowTemplate.Type" runat="server" />
</div>
<div class="workflowTemplatePage_TypeContainer">
<div id="blankWorkflowGroup" class="workflowTemplatePage_TypeGroup">
<div class="workflowTemplatePage_wfType_selector">
<input class="ms-crm-RadioButton" type="radio" id="blankWorkflow" name="radWorkflowGroup"
checked />
</div>
<div>
<label for="blankWorkflow" class="workflowTemplatePage_TypeGroup-Label">
<loc:text resourceid="Web.SFA.Workflow.NewBlankworkflow" runat="server" />
</label>
</div>
</div>
<div id="templateWorkflowGroup" class="workflowTemplatePage_TypeGroup">
<div class="workflowTemplatePage_wfType_selector">
<input class="ms-crm-RadioButton" type="radio" id="templateWorkflow" name="radWorkflowGroup" />
</div>
<div>
<label for="templateWorkflow" class="workflowTemplatePage_TypeGroup-Label">
<loc:text resourceid="Web.SFA.Workflow.NewWorkflowFromTemplate" runat="server" />
</label>
</div>
</div>
</div>
</div>
<% if (taskBasedFlowFCBEnabled) { %>
<div id="workflowBpfTypeContainer" class="workflowTemplatePage_tbx hide">
<div id="workflowTemplateBpfTypeLabel" class="workflowTemplatePage_wfType">
<loc:text resourceid="Web.SFA.Workflow.WorkflowTemplate.WorkflowBpfVisualization" runat="server" />
</div>
<div class="workflowTemplatePage_BpfType">
<div id="classicBpfGroup" class="workflowTemplatePage_TypeGroup">
<div class="workflowTemplatePage_wfType_selector">
<input class="ms-crm-RadioButton" type="radio" id="classicBpf" name="radWorkflowGroup" checked />
</div>
<div>
<label for="classicBpf" class="workflowTemplatePage_TypeGroup-Label">
<loc:text resourceid="Web.SFA.Workflow.NewClassicBpf" runat="server" />
</label>
</div>
</div>
<div id="tbxFlowGroup" class="workflowTemplatePage_TypeGroup">
<div class="workflowTemplatePage_wfType_selector">
<input class="ms-crm-RadioButton" type="radio" id="tbxFlow" name="radWorkflowGroup" />
</div>
<div>
<label for="tbxFlow" class="workflowTemplatePage_TypeGroup-Label">
<loc:text resourceid="Web.SFA.Workflow.NewTbxFlow" runat="server" />
</label>
</div>
</div>
</div>
</div>
<span id="uniqueNameSpan" style="display: inline">
<table cellpadding="0" cellspacing="0" class="tbfUniqueNameTable">
<col width="121px"/>
<col width="20%" />
<col width="0px" />
<col width="155px" />
<tr id="tbfUniqueNameRow" class="workflowTemplatePage_tr_param taskBasedFlow_tbx hide">
<td></td>
<td class="ms-crm-Field-Required" id="name_d" style="padding-bottom: 4px;">
<label for="txtWorkflowUniqueName">
<loc:text resourceid="Web.SFA.Workflow.TbfUniqueNameLabel" runat="server" />
<img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>" />
</label>
<label for="txtWorkflowUniqueName" class="ms-crm-Hidden-NoBehavior">
<loc:text resourceid="Forms.Required.AltTag" runat="server" />
</label>
</td>
<td>
<div id="txtPublisherPrefix" class="manageAttribute_div_SchemaName" runat="server"></div>
</td>
<td class="workflowTemplatePage_td_selectUniqueName">
<sdk:textboxcontrol id="txtWorkflowUniqueName" name="txtWorkflowUniqueName" maxlength="60" runat="server" />
</td>
</tr>
</table>
</span>
<% } %>
</div>
<div id="templatePageSpacer" class="workflowTemplatePageSpacer border"></div>
<div id="workflowTemplatePage_templateGrid" class="workflowTemplatePage_templateGrid show">
<div id="templateGrid" style="height: 100%; width: 100%">
<span id="Page2" style="display: inline; height: 100%">
<div class="stdTable">
<div class="ms-crm-absolutePosition" style="bottom: 40px">
<div class="ms-crm-IE7-Height-Fix-Dummy-Container">
<cnt:appgrid runat="server" id="crmGrid" name="crmGrid" />
</div>
</div>
<div class="workflowTemplatePage_button grid_properties">
<div class="workflowTemplatePage_buttonsleft">
<cui:button id="_MBProperties" name="_MBProperties" resourceid="Button_Label_Properties"
runat="server">
</cui:button>
</div>
</div>
</div>
</span>
</div>
</div>

<div class="workflowTemplatePage_button bottombutton border">
<cui:button id="_MBCreate" name="_MBCreate" CssClass="ms-crm-RefreshDialog-Button" resourceid="Button_Label_OK" runat="server">
</cui:button>
&nbsp;
<cui:button id="_MBCancel" name="_MBCancel" CssClass="ms-crm-RefreshDialog-Button"  resourceid="Button_Label_Cancel" runat="server">
</cui:button>
</div>
<div style="display: none">
<cnt:appquickfind id="crmQuickFind" runat="server" />
</div>
</div>
</div>
</body>
</html>