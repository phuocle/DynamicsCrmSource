
var workflowTemplate = function()
    {
        function UpdateProcessFlowElements()
        {
            var workflowMigrationMessage = $get("workflowMigrationMessage");
            if(IsBusinessProcessFlow())
            {
                if(IsTaskFlowEnabled())
                    UseBusinessFlowEntitySelector();
                else
                {
                    $get("PrimaryProcessEntity").style.display = "";
                    $get("PrimaryEntity").style.display = "none";
                    Mscrm.Utilities.enableDisableDomElement($get("blankWorkflow"),true);
                    Mscrm.Utilities.enableDisableDomElement($get("templateWorkflow"),true);
                    $get("blankWorkflow").checked = true;
                    EnableDisableTemplatesGrid(true)
                }
                HideWorkflowMode();
                !IsNull(workflowMigrationMessage) && 
                    workflowMigrationMessage.setAttribute("class","workflowTemplatePage_migrationMsg hide");
                IsTaskFlowEnabled() && 
                    SetTaskBasedFlowUI()
            }
            else
            {
                if(IsTaskFlowEnabled())
                    UseGeneralWorkflowEntitySelector();
                else
                {
                    $get("PrimaryProcessEntity").style.display = "none";
                    $get("PrimaryEntity").style.display = ""
                }
                Mscrm.Utilities.enableDisableDomElement($get("blankWorkflow"),false);
                Mscrm.Utilities.enableDisableDomElement($get("templateWorkflow"),false);
                IsTaskFlowEnabled() && 
                    RevertTaskBasedFlowUI();
                if(!IsWorkflow())
                {
                    HideWorkflowMode();
                    !IsNull(workflowMigrationMessage) && 
                        workflowMigrationMessage.setAttribute("class","workflowTemplatePage_migrationMsg hide")
                }
                else
                {
                    ShowWorkflowMode();
                    !IsNull(workflowMigrationMessage) && 
                        toggleMigrationMsg()
                }
                if(!$get("templateWorkflow").checked)
                {
                    $get("blankWorkflow").checked = true;
                    EnableDisableTemplatesGrid(true)
                }
            }
        }
        function ShowWorkflowMode()
        {
            $get("selectModeRow").setAttribute("class","workflowTemplatePage_selectMode show");
            $get("workflowTemplatePage_templateGrid").setAttribute("class","workflowTemplatePage_templateGrid showMode");
            $get("templatePageSpacer").setAttribute("class","workflowTemplatePageSpacer showMode border")
        }
        function HideWorkflowMode()
        {
            $get("selectModeRow").setAttribute("class","workflowTemplatePage_selectMode hide");
            $get("workflowTemplatePage_templateGrid").setAttribute("class","workflowTemplatePage_templateGrid");
            $get("templatePageSpacer").setAttribute("class","workflowTemplatePageSpacer border")
        }
        function toggleMigrationMsg()
        {
            if($get("workflowMode").checked)
            {
                $get("workflowMigrationMessage").setAttribute("class","workflowTemplatePage_migrationMsg show");
                $get("workflowTemplatePage_templateGrid").setAttribute("class","workflowTemplatePage_templateGrid checkedMode");
                $get("templatePageSpacer").setAttribute("class","workflowTemplatePageSpacer checkedMode border")
            }
            else
            {
                $get("workflowMigrationMessage").setAttribute("class","workflowTemplatePage_migrationMsg hide");
                $get("workflowTemplatePage_templateGrid").setAttribute("class","workflowTemplatePage_templateGrid showMode");
                $get("templatePageSpacer").setAttribute("class","workflowTemplatePageSpacer showMode border")
            }
        }
        function SetTaskBasedFlowUI()
        {
            $get("workflowTemplatePage_templateGrid").setAttribute("class","workflowTemplatePage_templateGrid hide");
            $get("templatePageSpacer").setAttribute("class","workflowTemplatePageSpacer tbxMode border");
            $get("workflowTypeContainer").setAttribute("class","workflowTemplatePage_tbx hide");
            $get("workflowBpfTypeContainer").setAttribute("class","workflowTemplatePage_tbx show");
            $get("blankWorkflow").checked = true;
            $get("classicBpf").checked = true;
            DisplayUniqueNameField(true);
            AutoPopulateUniqueName()
        }
        function RevertTaskBasedFlowUI()
        {
            $get("workflowTemplatePage_templateGrid").setAttribute("class","workflowTemplatePage_templateGrid show");
            $get("templatePageSpacer").setAttribute("class","workflowTemplatePageSpacer border");
            $get("workflowTypeContainer").setAttribute("class","workflowTemplatePage_tbx show");
            $get("workflowBpfTypeContainer").setAttribute("class","workflowTemplatePage_tbx hide");
            $get("classicBpf").checked = true;
            DisplayUniqueNameField(false)
        }
        function IsTaskFlowEnabled()
        {
            return !!document.getElementById("workflowBpfTypeContainer")
        }
        function IsRequestFromAppDesigner()
        {
            if(Mscrm.FeatureControl.get_Current().isFeatureEnabled(Mscrm.FeatureNames.AppDesigner))
                return !IsNull(window.parent) && !IsNull(window.parent.AppDesignerOpenNewEditorCallback);
            return false
        }
        function EnableDisableTemplatesGrid(disable)
        {
            Mscrm.Utilities.enableDisableDomElement($get("crmGrid"),disable);
            $get("_MBProperties").disabled = disable
        }
        function DisplayUniqueNameField(show)
        {
            if(show)
                $get("tbfUniqueNameRow").setAttribute("class","taskBasedFlow_tbx show");
            else
                $get("tbfUniqueNameRow").setAttribute("class","taskBasedFlow_tbx hide")
        }
        function UseGeneralWorkflowEntitySelector()
        {
            var lastEntity = GetPrimaryEntityNameFromCurrentSelector();
            $get("PrimaryEntity").style.display = "";
            $get("PrimaryProcessEntity").style.display = "none";
            $get("PrimaryTbfEntity").style.display = "none";
            TrySetEntitySelector("PrimaryEntity",lastEntity)
        }
        function UseBusinessFlowEntitySelector()
        {
            var lastEntity = GetPrimaryEntityNameFromCurrentSelector();
            $get("PrimaryEntity").style.display = "none";
            $get("PrimaryProcessEntity").style.display = "";
            $get("PrimaryTbfEntity").style.display = "none";
            TrySetEntitySelector("PrimaryProcessEntity",lastEntity)
        }
        function UseTaskFlowEntitySelector()
        {
            var lastEntity = GetPrimaryEntityNameFromCurrentSelector();
            $get("PrimaryEntity").style.display = "none";
            $get("PrimaryProcessEntity").style.display = "none";
            $get("PrimaryTbfEntity").style.display = "";
            TrySetEntitySelector("PrimaryTbfEntity",lastEntity)
        }
        function AutoPopulateUniqueName()
        {
            var oSchemaName = Mscrm.FormControlInputBehavior.GetBehavior("txtWorkflowUniqueName"),
                processName = $get("txtWorkflowName").value;
            if(processName != null && processName.length > 0 && (oSchemaName.get_dataValue() == null || oSchemaName.get_dataValue().length == 0))
            {
                var regExp = new RegExp;
                oSchemaName.set_dataValue(processName.replace(/[^a-zA-Z0-9_-]/g,"").substr(0,oSchemaName.get_element().maxLength));
                oSchemaName.get_dataValue() != null && oSchemaName.get_dataValue().length > 0 && 
                    oSchemaName.set_dataValue(oSchemaName.get_dataValue().toLowerCase())
            }
        }
        function TrySetEntitySelector(entitySelector,dataValue)
        {
            if(CheckEntitySelectorContainsDataValue(entitySelector,dataValue))
                Mscrm.FormControlInputBehavior.GetBehavior(entitySelector).set_dataValue(dataValue);
            else
                $get(entitySelector).selectedIndex = 0
        }
        function RefreshTemplatesGrid()
        {
            var crmGrid = $find("crmGrid"),
                setEmptyView = false;
            if(categoryControl.get_dataValue() == LOCID_ASYNC_WORKFLOW)
                crmGrid.SetParameter("ViewId",LOCID_AWORKFLOW_VIEW_ID);
            else
                if(categoryControl.get_dataValue() == LOCID_CUSTOM_OPERATION_WORKFLOW)
                    crmGrid.SetParameter("ViewId",LOCID_CUSTOMOPSWORKFLOW_VIEW_ID);
                else
                    if(IsBusinessProcessFlow())
                        setEmptyView = true;
                    else
                        crmGrid.SetParameter("ViewId",LOCID_IWORKFLOW_VIEW_ID);
            RefreshGrid(setEmptyView)
        }
        function RefreshGrid(showEmptyGrid)
        {
            var crmGrid = $find("crmGrid"),
                entityName = GetPrimaryEntityName();
            if(showEmptyGrid == false && (IsNull(entityName) || entityName == ""))
                return;
            else
                if(showEmptyGrid)
                {
                    entityName = "account";
                    crmGrid.SetParameter("ViewId",LOCID_CUSTOMPROCESSFLOW_VIEW_ID)
                }
            crmGrid.SetParameter("primaryentityvalue",entityName);
            crmGrid.SetParameter("isapiquery","true");
            if($get("blankWorkflow").checked)
                crmGrid.SetParameter("disableDblClick","1");
            else
                crmGrid.SetParameter("disableDblClick","0");
            crmGrid.SetParameter("suppressfetch","false");
            crmGrid.Reset()
        }
        function AddEventHandlers()
        {
            $addHandler(document,"keydown",workflowTemplate.HandleKeyDown);
            $find("crmGrid").add_onSelectionChange(workflowTemplate.SelectionChanged);
            $addHandler($get("PrimaryEntity"),"change",workflowTemplate.PrimaryEntityNameChanged);
            $addHandler($get("PrimaryProcessEntity"),"change",workflowTemplate.PrimaryEntityNameChanged);
            IsTaskFlowEnabled() && 
                $addHandler($get("PrimaryTbfEntity"),"change",workflowTemplate.PrimaryEntityNameChanged);
            $addHandler($get("WorkflowCategory"),"change",workflowTemplate.CategoryChanged);
            $addHandler($get("workflowMode"),"click",workflowTemplate.CheckboxChanged);
            $addHandler($get("blankWorkflow"),"click",workflowTemplate.ProcessTemplateChanged);
            $addHandler($get("templateWorkflow"),"click",workflowTemplate.ProcessTemplateChanged);
            if(IsTaskFlowEnabled())
            {
                $addHandler($get("classicBpf"),"click",workflowTemplate.BpTypeChanged);
                $addHandler($get("tbxFlow"),"click",workflowTemplate.BpTypeChanged)
            }
            $addHandler($get("_MBProperties"),"click",workflowTemplate.ShowProperties);
            $addHandler($get("_MBCreate"),"click",workflowTemplate.BtnOk);
            $addHandler($get("_MBCancel"),"click",closeWindowCallback);
            IsTaskFlowEnabled() && 
                $addHandler($get("txtWorkflowName"),"change",workflowTemplate.OnProcessNameChange)
        }
        function OnPageUnload()
        {
            $removeHandler(document,"keydown",workflowTemplate.HandleKeyDown);
            IsTaskFlowEnabled() && 
                $removeHandler($get("PrimaryTbfEntity"),"change",workflowTemplate.PrimaryEntityNameChanged);
            $removeHandler($get("PrimaryProcessEntity"),"change",workflowTemplate.PrimaryEntityNameChanged);
            $removeHandler($get("PrimaryEntity"),"change",workflowTemplate.PrimaryEntityNameChanged);
            $removeHandler($get("WorkflowCategory"),"change",workflowTemplate.CategoryChanged);
            $removeHandler($get("workflowMode"),"click",workflowTemplate.CheckboxChanged);
            $removeHandler($get("blankWorkflow"),"click",workflowTemplate.ProcessTemplateChanged);
            $removeHandler($get("templateWorkflow"),"click",workflowTemplate.ProcessTemplateChanged);
            if(IsTaskFlowEnabled())
            {
                $removeHandler($get("classicBpf"),"click",workflowTemplate.BpTypeChanged);
                $removeHandler($get("tbxFlow"),"click",workflowTemplate.BpTypeChanged)
            }
            $removeHandler($get("_MBProperties"),"click",workflowTemplate.ShowProperties);
            $removeHandler($get("_MBCreate"),"click",workflowTemplate.BtnOk);
            $removeHandler($get("_MBCancel"),"click",closeWindowCallback);
            IsTaskFlowEnabled() && 
                $removeHandler($get("txtWorkflowName"),"change",workflowTemplate.OnProcessNameChange)
        }
        function IsBusinessProcessFlow()
        {
            var categoryControl = Mscrm.FormControlInputBehavior.GetBehavior("WorkflowCategory");
            if(categoryControl.get_dataValue() == LOCID_CUSTOM_PROCESS_FLOW)
                return true
        }
        function IsWorkflow()
        {
            var categoryControl = Mscrm.FormControlInputBehavior.GetBehavior("WorkflowCategory");
            if(categoryControl.get_dataValue() == LOCID_ASYNC_WORKFLOW)
                return true
        }
        function closeWindowCallback()
        {
            if(IsRequestFromAppDesigner())
                window.parent.AppDesignerOpenNewEditorCallback(null);
            else
                closeWindow()
        }
        function GetPrimaryEntityNameFromCurrentSelector()
        {
            if($get("PrimaryEntity").style.display != "none")
                return Mscrm.FormControlInputBehavior.GetBehavior("PrimaryEntity").get_dataValue();
            else
                if($get("PrimaryProcessEntity").style.display != "none")
                    return Mscrm.FormControlInputBehavior.GetBehavior("PrimaryProcessEntity").get_dataValue();
                else
                    if($get("PrimaryTbfEntity").style.display != "none")
                        return Mscrm.FormControlInputBehavior.GetBehavior("PrimaryTbfEntity").get_dataValue();
            return ""
        }
        function CheckEntitySelectorContainsDataValue(entitySelectorName,dataValue)
        {
            var options = Mscrm.FormControlInputBehavior.GetBehavior(entitySelectorName).get_options();
            for(var option in options)
                if(options[option].DataValue == dataValue)
                    return true;
            return false
        }
        function GetPrimaryEntityName()
        {
            if(IsBusinessProcessFlow())
                if(IsTaskFlowEnabled() && $get("tbxFlow").checked)
                    return Mscrm.FormControlInputBehavior.GetBehavior("PrimaryTbfEntity").get_dataValue();
                else
                    return Mscrm.FormControlInputBehavior.GetBehavior("PrimaryProcessEntity").get_dataValue();
            else
                return Mscrm.FormControlInputBehavior.GetBehavior("PrimaryEntity").get_dataValue()
        }
        function SetTabIndex()
        {
            var tabIndex = 1,
                element = document.getElementById("txtWorkflowName");
            element.tabIndex = tabIndex++;
            $get("WorkflowCategory").tabIndex = tabIndex++;
            if(IsTaskFlowEnabled())
            {
                element = document.getElementById("classicBpf");
                element.tabIndex = tabIndex++;
                element = document.getElementById("tbxFlow");
                element.tabIndex = tabIndex++
            }
            element = document.getElementById("PrimaryEntity");
            element.tabIndex = tabIndex++;
            element = document.getElementById("PrimaryProcessEntity");
            element.tabIndex = tabIndex++;
            if(IsTaskFlowEnabled())
            {
                element = document.getElementById("PrimaryTbfEntity");
                element.tabIndex = tabIndex++
            }
            element = document.getElementById("workflowMode");
            element.tabIndex = tabIndex++;
            element = document.getElementById("blankWorkflow");
            element.tabIndex = tabIndex++;
            element = document.getElementById("templateWorkflow");
            element.tabIndex = tabIndex++;
            if(IsTaskFlowEnabled())
            {
                element = document.getElementById("txtWorkflowUniqueName");
                element.tabIndex = tabIndex++
            }
            $find("crmGrid").get_element().tabIndex = tabIndex++;
            element = document.getElementById("_MBProperties");
            element.tabIndex = tabIndex++;
            element = document.getElementById("_MBCreate");
            element.tabIndex = tabIndex++;
            element = document.getElementById("_MBCancel");
            element.tabIndex = tabIndex++
        }
        function RunRemoteCommand(oid)
        {
            var txtWorkflowName = document.getElementById("txtWorkflowName"),
                workflowName = txtWorkflowName.value.trim(),
                workflowUniqueName = "",
                command = new RemoteCommand("Workflow","CreateWorkflow");
            if(IsBusinessProcessFlow())
            {
                var txtWorkflowUniqueName = document.getElementById("txtWorkflowUniqueName"),
                    txtSlnPrefix = document.getElementById("txtPublisherPrefix").innerHTML;
                workflowUniqueName = (txtSlnPrefix + txtWorkflowUniqueName.value.trim()).toLowerCase();
                command.SetParameter("uniqueName",workflowUniqueName)
            }
            command.SetParameter("workflowName",workflowName);
            command.SetParameter("primaryEntity",GetPrimaryEntityName());
            if($get("templateWorkflow").checked)
                command.SetParameter("templateId",oid);
            else
                command.SetParameter("templateId","");
            var categoryControl = Mscrm.FormControlInputBehavior.GetBehavior("WorkflowCategory"),
                businessProcessType = IsTaskFlowEnabled() && $get("tbxFlow").checked ? 1 : 0;
            command.SetParameter("businessProcessType",businessProcessType);
            command.SetParameter("workflowCategory",categoryControl.get_dataValue());
            if($get("workflowMode").checked)
                command.SetParameter("isSyncWorkflow",false);
            else
                command.SetParameter("isSyncWorkflow",true);
            var result = command.Execute();
            if(result.Success)
            {
                var ret = {};
                ret.Success = true;
                ret.Id = result.ReturnValue;
                ret.Type = 4703;
                ret.Name = txtWorkflowName.value;
                ret.Category = categoryControl.get_dataValue();
                ret.BusinessProcessType = businessProcessType;
                if(IsTaskFlowEnabled())
                    ret.UniqueName = workflowUniqueName;
                return ret
            }
            return null
        }
        function ValidateForm()
        {
            var txtWorkflowName = document.getElementById("txtWorkflowName");
            if(txtWorkflowName.value.trim().length == 0)
            {
                alert(LOCID_NAME_EMPTY);
                return false
            }
            if(IsNull(categoryControl.get_dataValue()) || categoryControl.get_dataValue() == "")
            {
                alert(LOCID_CATEGORY_EMPTY);
                return false
            }
            var entityName = GetPrimaryEntityName();
            if(IsNull(entityName) || entityName == "")
            {
                alert(LOCID_ENTITY_EMPTY);
                return false
            }
            if($get("templateWorkflow").checked)
            {
                var selectedRow = $find("crmGrid").get_innerGrid().get_selectedRecords();
                if(selectedRow.length == 0)
                {
                    alert(LOCID_NO_TEMPLATE_SELECTED);
                    return false
                }
                if(selectedRow.length > 1)
                {
                    alert(LOCID_MORE_TEMPLATES_SELECTED);
                    return false
                }
            }
            if(IsBusinessProcessFlow())
                return ValidateWorkflowUniqueName();
            return true
        }
        function ValidateWorkflowUniqueName()
        {
            var txtWorkflowUniqueName = document.getElementById("txtWorkflowUniqueName");
            if(txtWorkflowUniqueName.value.trim().length == 0)
            {
                alert(LOCID_SCHEMA_NAME_EMPTY);
                return false
            }
            if(/[^a-zA-Z0-9\_]/.test(txtWorkflowUniqueName.value.trim()))
            {
                alert(LOCID_UNIQUENAME_ERRORMESSAGE);
                return false
            }
            return true
        }
        function AdjustLabelsForIE8()
        {
            if(Mscrm.Utilities.get_ieBrowserVersion() == 8)
            {
                $get("selectWorkflowCategoryLabel").setAttribute("style","vertical-align: middle");
                $get("selectWorkflowEntityNameLabel").setAttribute("style","vertical-align: middle")
            }
        }
        function AdjustRadiosForIE()
        {
            if(Mscrm.Utilities.isIE())
            {
                $get("blankWorkflowGroup").setAttribute("class","workflowTemplatePage_TypeGroupIE");
                $get("templateWorkflowGroup").setAttribute("class","workflowTemplatePage_TypeGroupIE")
            }
            else
                if(Mscrm.Utilities.isFirefox())
                {
                    $get("blankWorkflowGroup").setAttribute("class","workflowTemplatePage_TypeGroupFF");
                    $get("templateWorkflowGroup").setAttribute("class","workflowTemplatePage_TypeGroupFF")
                }
        }
        function FilterBPFForAppDesigner(categoryControl)
        {
            if(!IsNull(categoryControl))
            {
                var bpfOption,
                    options = categoryControl.get_options();
                for(var option in options)
                    if(options[option].DataValue == "4")
                    {
                        bpfOption = new Mscrm.FormInputControl.PicklistOption(options[option].Text,options[option].DataValue);
                        break
                    }
                categoryControl.clearOptions();
                categoryControl.AddOption(bpfOption.Text,bpfOption.DataValue)
            }
        }
        return {OnProcessNameChange:function()
        {
            if(!IsBusinessProcessFlow())
                return;
            else
                AutoPopulateUniqueName()
        },ProcessTemplateChanged:function()
        {
            if($get("blankWorkflow").checked)
                EnableDisableTemplatesGrid(true);
            else
                EnableDisableTemplatesGrid(false)
        },BpTypeChanged:function()
        {
            if($get("tbxFlow").checked)
            {
                AutoPopulateUniqueName();
                UseTaskFlowEntitySelector()
            }
            else
                UseBusinessFlowEntitySelector()
        },CategoryChanged:function()
        {
            var entityElement = $get("PrimaryEntity");
            if(!IsTaskFlowEnabled())
            {
                entityElement.selectedIndex = 0;
                $get("PrimaryProcessEntity").selectedIndex = 0
            }
            !IsNull(entityElement.options[1]) && entityElement.options[1].value == GENERIC_ENTITY_OPTIONVALUE && 
                entityElement.remove(1);
            if(categoryControl.get_dataValue() == LOCID_CUSTOM_OPERATION_WORKFLOW)
            {
                var newOption = document.createElement("option");
                newOption.value = GENERIC_ENTITY_OPTIONVALUE;
                newOption.text = LOCID_GENERIC_ENTITY_DISPLAYNAME;
                entityElement.add(newOption,entityElement.options[1])
            }
            UpdateProcessFlowElements();
            RefreshGrid(true)
        },CheckboxChanged:function()
        {
            var workflowMigrationMessage = $get("workflowMigrationMessage");
            !IsNull(workflowMigrationMessage) && 
                toggleMigrationMsg()
        },PrimaryEntityNameChanged:function()
        {
            RefreshTemplatesGrid()
        },PageLoad:function()
        {
            AddEventHandlers();
            categoryControl = Mscrm.FormControlInputBehavior.GetBehavior("WorkflowCategory");
            var processEntityElement = $get("PrimaryProcessEntity");
            processEntityElement.style.display = "none";
            if(IsTaskFlowEnabled())
            {
                var tbfEntityElement = $get("PrimaryTbfEntity");
                tbfEntityElement.style.display = "none"
            }
            if(IsRequestFromAppDesigner())
            {
                FilterBPFForAppDesigner(categoryControl);
                UpdateProcessFlowElements();
                var tbxFlowGroup = $get("tbxFlowGroup");
                tbxFlowGroup.style.display = "none"
            }
            RefreshGrid(false);
            SetTabIndex();
            $find("crmForm").set_allowFormFocus(false);
            document.getElementById("txtWorkflowName").focus();
            $get("_MBProperties").disabled = true;
            Mscrm.Utilities.enableDisableDomElement($get("crmGrid"),true);
            AdjustLabelsForIE8();
            AdjustRadiosForIE()
        },SelectionChanged:function()
        {
            if($get("blankWorkflow").checked)
            {
                var crmGrid = $find("crmGrid"),
                    items = crmGrid.get_innerGrid().get_selectedRecords();
                items.length > 0 && 
                    crmGrid.get_innerGrid().UnselectRecords()
            }
        },HandleKeyDown:function(eventObject)
        {
            if(eventObject.keyCode == KEY_ENTER)
            {
                var el = eventObject.target;
                if(el.tagName != "BUTTON")
                {
                    if(el.id == "PrimaryEntity" || el.id == "PrimaryProcessEntity" || IsTaskFlowEnabled() && el.id == "PrimaryTbfEntity")
                    {
                        el.blur();
                        XUI.Html.DispatchDomEvent(el,XUI.Html.CreateDomEvent("change"));
                        window.setTimeout("workflowTemplate.BtnOk()",1);
                        return true
                    }
                    else
                        if(el.id == "workflowMode")
                        {
                            if($get("workflowMode").checked)
                                $get("workflowMode").checked = false;
                            else
                                $get("workflowMode").checked = true;
                            return true
                        }
                    workflowTemplate.BtnOk()
                }
            }
        },BtnOk:function()
        {
            if(!ValidateForm())
                return;
            var oid = "";
            if($get("templateWorkflow").checked)
                oid = $find("crmGrid").get_innerGrid().get_selectedRecords()[0][0];
            var retValue = RunRemoteCommand(oid);
            if(IsNull(retValue))
            {
                var greyDiv = document.getElementById("crmGrid_greyDiv");
                if(!IsNull(greyDiv))
                    greyDiv.style.display = "none"
            }
            if(!IsNull(retValue))
            {
                Mscrm.Utilities.setReturnValue(retValue);
                Mscrm.FormUtility.detachCloseAlert();
                OnPageUnload();
                if(IsRequestFromAppDesigner())
                {
                    var returnObj = {id:retValue.Id,displayName:retValue.Name},
                        editorModel = {retObj:returnObj,componentType:29};
                    window.parent.AppDesignerOpenNewEditorCallback(editorModel)
                }
                else
                    closeWindow()
            }
        },ShowProperties:function()
        {
            if($get("blankWorkflow").checked)
                return;
            var items = $find("crmGrid").get_innerGrid().get_selectedRecords();
            if(items.length == 0)
                alert(LOCID_NO_TEMPLATE_SELECTED);
            else
                if(items.length > 1)
                    alert(LOCID_MORE_TEMPLATES_SELECTED);
                else
                {
                    var sParams = getParentEntityIdParams();
                    openObj(items[0][3].getAttribute("otype"),items[0][3].getAttribute("oid"),sParams)
                }
        }}
    }();
if(typeof workflowTemplate == "undefined")
    workflowTemplate = {};
Sys.Application.add_load(workflowTemplate.PageLoad)
