<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.Views.ICDashboardEditorPage" %>

<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Controls" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>

<%@ Import Namespace="System.Web" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<!Doctype html>
<html lang='<% = Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TwoLetterISOLanguageName %>'>
<head>

<cnt:AppHeader id="crmHeader" runat="server"/>
<style type="text/css">
    .stream-div {
        -webkit-box-sizing: content-box;
        -moz-box-sizing: content-box;
        box-sizing: content-box;
        width: 230px;
        float: left;
        height: 117px;
        padding: 20px;
        overflow: hidden;
        border: 1px solid #CCCCCC;
        font: 18px "Segoe UI Semibold";
        color: #666666;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        background: #f2f2f2;
        text-align: left;
        margin: 0px;
        margin-right: 15px;
        margin-bottom: 15px;
    }

    .stream-divtier2 {
        -webkit-box-sizing: content-box;
        -moz-box-sizing: content-box;
        box-sizing: content-box;
        width: 100%;
        float: left;
        height: 683px;
        overflow: hidden;
        border: 1px solid #CCCCCC;
        font: 18px "Segoe UI Semibold";
        color: #666666;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        background: #f2f2f2;
        text-align: left;
    }

    .stream-queue { color: #000000; }

    .stream-queuetier2 {
        color: #000000;
        display: inline-block;
        padding: 0px;
        padding-top: 20px;
        padding-left: 20px;
    }

    .stream-queuetier2text { padding-left: 20px; }

    .stream-selected { border: 1px solid #0072c6; }

    .textEllipsis {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .removeLeftPadding { padding-left: 0px !important; }

    .alignStreamsTop {
        vertical-align: top !important;
        padding-top: 15px;
        padding-left: 15px !important;
    }

    .tile-div {
        -webkit-box-sizing: content-box;
        -moz-box-sizing: content-box;
        box-sizing: content-box;
        width: auto;
        height: 177px;
        padding: 20px;
        overflow: hidden;
        border: none;
        font: normal 14pt/20pt "Times New Roman", Times, serif;
        color: #cccccc;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        background: #002050;
        text-align: left;
    }

    .tile-queue {
        font: normal 12pt/20pt "Times New Roman", Times, serif;
        color: #ffffff;
    }
</style>
<script language="javascript">
    var _bSaving = false;
    var _oActive;
    var _iTabs = <%= totalTabs.ToString("D", System.Globalization.CultureInfo.InvariantCulture) %>;
    var _formXmlId = <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(formXmlId.ToString()) %>;
    var _iNextTabId = <%= totalTabs.ToString("D", System.Globalization.CultureInfo.InvariantCulture) %>;
    var _objectTypeCode = 0;
    var _iMaxTabs = 100;
    var _sMode = <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(_mode.ToString()) %>;
    var _bPreviewMode = <%= _mode == Mode.Preview ? "true" : "false" %>;
    var _draggedItem = null;
    var _dropItem = null;
    var ROW_HEIGHT = "25";
    var _dashboardUpdated = false;
    var _refreshDashboard = false;
    var oFieldsXml;
    var oPropertiesXml;
    var previewerForm
    var dashName;
    var dashDesc;

    var originalOpener;
    var primaryEntityChanged = false;
    var isDirty = false;
    var numCount = 0;
    var tileCount = 0;
    var tileImageHtml = new Array();
    var streamImageHtml = new Array();

    Mscrm.FormEditorVariables.supportNotes = '<%= supportNotes.ToString() %>';
    Mscrm.FormEditorVariables
        .FormType = <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(formTypeName.ToString()) %>;
    Mscrm.FormEditorVariables.supportInteractionCentric = "True";
    Mscrm.FormEditorVariables.selectedView = "";
    Mscrm.FormEditorVariables.selectedFilter = "";
    Mscrm.FormEditorVariables.selectedTimeFrame = "";
    Mscrm.FormEditorVariables.dashboardCategory = "";
    Mscrm.FormEditorVariables.streamsIsQueueSelected = false;
    Mscrm.FormEditorVariables.streamsQueueName = "";
    Mscrm.FormEditorVariables.streamsQueueItemViewName = "";
    Mscrm.FormEditorVariables.QueueItemOTC = 2029;
    Mscrm.FormEditorVariables.streamsCount = 0;
    Mscrm.FormEditorVariables.tilesCount = 0;
    Mscrm.FormEditorVariables.selectedStreamDiv = null;
    Mscrm.FormEditorVariables.setActiveStreamCalled = false;

    var InteractionCentricDashboardCategory = {
        CSR1: "1_0",
        CSR2: "2_0",
        ENTITYDASHBOARD: "1_1"
    };

    var StreamOrTileCategory = {
        Queue: 'Q',
        View: 'V'
    };


    var Stream = {
        Queue: '0',
        View: '1',
        SavedQuery: '2'
    };


    var Delimeter = {
        Names: ';',
        Subnames: ':',
        Streams: '|'
    };

    function InitializeDefaults() {
        previewerForm.formXml.defaultValue = previewerForm.formXml.value;
        Mscrm.FormEditorVariables.initialFormXmlText = XUI.Xml.XMLSerializer
            .serializeToString(Mscrm.FormEditorVariables.formXml);
        dashName.get_element().defaultValue = dashName.get_element().value;
        dashDesc.get_element().defaultValue = dashDesc.get_element().value;
        Mscrm.FormEditorVariables.initialIsTabletEnabled = Mscrm.FormEditorVariables.isTabletEnabled;
        Mscrm.FormEditorVariables.PAGE_TYPE = window.PAGE_TYPE;
        if (typeof window.ENTITY_TYPE_CODE != 'undefined') {
            Mscrm.FormEditorVariables.IS_ENTITY_DASHBOARD = 1;
        }
    }

    $addHandler(window, "load", OnLoad);

    function OnLoad() {

        if (!IsNull(window.top) && !IsNull(window.top.document)) window.top.document.title = window.document.title;

        previewerForm = $get('Previewer');
        dashName = Mscrm.FormControlInputBehavior.GetBehavior("dashboardNameInput");
        dashDesc = Mscrm.FormControlInputBehavior.GetBehavior('dashboardDescriptionInput');

        Mscrm.FormEditorVariables.editorType = Mscrm.EditorType.dashboardEditor;
        Mscrm.FormEditorVariables.formXml = XUI.Xml.LoadXml(XUI.Html.GetText($get('preFormXml')));
        Mscrm.FormEditorVariables.formId = <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(formId.ToString()) %>;
        Mscrm.FormEditorVariables
            .formAccessType =
            parseInt(<%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(((int) dashboardType).ToString()) %>, 10);
        Mscrm.FormEditorVariables.supportSocialInsights = '<%= supportSocialInsights.ToString() %>';
        Mscrm.FormEditorVariables.isTabletEnabled = '<%= isTabletEnabled.ToString() %>';
        _langCode = GetLanguageCode();

        RefreshFormEditor(Mscrm.Render.wholeCanvas);
        Mscrm.TabUtils.clickFirstTab();
        Mscrm.FormUtils.makeFormXmlDirty();
        Mscrm.TabUtils.enableDisableFormParts();
        focus();
        Mscrm.FormEditorVariables.addColumnsMessage = ADD_COL_MESSAGE;
        Mscrm.FormUndoRedo.initialize();
        SetPreviewXml();
        InitializeDefaults();
        $addHandler(document, "mouseup", OnDocumentMouseUp);
        dashName.setFocus();


        if (IsNull(window.top.opener)) {
            originalOpener = window.top;
        } else {
            originalOpener = window.top.opener;

            attachWindowOnBeforeUnload(window_onbeforeunload);
        }


        _objectTypeCode = GetObjectTypeCode();
        Mscrm.FormEditorVariables.dashboardCategory = XUI.Xml
            .SelectSingleNode(Mscrm.FormEditorVariables.formXml, "//entity/form/tabs", null)
            .getAttribute("dashboardCategory");
        if (typeof window.ENTITY_TYPE_CODE != 'undefined') {
            if (Mscrm.FormEditorVariables.dashboardCategory != InteractionCentricDashboardCategory.ENTITYDASHBOARD)
                Mscrm.FormEditorVariables.dashboardCategory = Mscrm.FormEditorVariables.dashboardCategory + "_1";
        } else {
            if (Mscrm.FormEditorVariables.dashboardCategory != InteractionCentricDashboardCategory.ENTITYDASHBOARD) {
                if (Mscrm.FormEditorVariables.dashboardCategory != InteractionCentricDashboardCategory.CSR1 &&
                    Mscrm.FormEditorVariables.dashboardCategory != InteractionCentricDashboardCategory.CSR2)
                    Mscrm.FormEditorVariables.dashboardCategory = Mscrm.FormEditorVariables.dashboardCategory + "_0";
            }
        }


        Mscrm.FormEditorVariables.selectedView = document.getElementById("dashboardViewInput").value;
        Mscrm.FormEditorVariables.selectedFilter = document.getElementById("dashboardFilterByInput").value;
        Mscrm.FormEditorVariables.selectedTimeFrame = document.getElementById("dashboardTimeframeInput").value;

        if (Mscrm.FormEditorVariables.dashboardCategory === InteractionCentricDashboardCategory.CSR2) {

            document.getElementById("selectorLabel5").style.display = "none";
        }


        SetStreamImagePattern();
        if (Mscrm.FormEditorVariables.streamsCount > 0) {

            if (Mscrm.FormEditorVariables.dashboardCategory === InteractionCentricDashboardCategory.CSR2) {
                var streamObject = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml,
                    "//entity/form/tabs/tab[@name = 'StreamsContainer']/columns/column/sections/section[@name = 'Streams']/rows/row/cell/control/parameters/StreamObjects/StreamObject",
                    null);
                if (streamObject.getAttribute('type') == Stream.Queue) {
                    Mscrm.FormEditorVariables.streamsIsQueueSelected = true;
                } else if (streamObject.getAttribute('type') == Stream.SavedQuery) {
                    Mscrm.FormEditorVariables.streamsIsQueueSelected = true;
                } else if (streamObject.getAttribute('type') == Stream.View) {
                    Mscrm.FormEditorVariables.streamsIsQueueSelected = false;
                    Mscrm.FormEditorVariables.selectedView = XUI.Xml
                        .GetText(XUI.Xml.SelectSingleNode(streamObject, "EntityViewId", null));
                }
            }
        }

        SetTileImagePattern();


        if (typeof _previousPrimaryEntityValue != 'undefined' &&
            document.getElementById("dashboardPrimaryEntityInput").disabled == false) {
            isDirty = true;
        }
    }


    function SetStreamImagePattern() {
        var streamCellID = streamsCell().getAttribute("id");
        var streamCellElement = document.getElementById(streamCellID);
        var parentElement = streamCellElement.querySelector("td");
        setPreviewFieldClassForStreams(parentElement);

        var streamObjectsNodeXml = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml,
            "//entity/form/tabs/tab[@name = 'StreamsContainer']/columns/column/sections/section[@name = 'Streams']/rows/row/cell/control/parameters/StreamObjects",
            null);

        if (IsNull(streamObjectsNodeXml) || typeof (streamObjectsNodeXml) == "undefined") {
            return;
        }

        var streamObjectNodesXml = XUI.Xml.SelectNodes(streamObjectsNodeXml, "StreamObject", null);
        Mscrm.FormEditorVariables.streamsCount = streamObjectNodesXml.length;
        var imageHtml = "";
        for (var i = 0; i < streamObjectNodesXml.length; i++) {
            var streamObjectNode = streamObjectNodesXml[i];
            getStreamOrTileNamesFromNode(streamObjectNode, i, true);
        }
    }


    function getStreamOrTileNamesFromNode(node, parentElement, isStream) {
        var type = node.getAttribute("type");
        var streamObjectId = node.getAttribute("id");

        switch (type) {

        case "0":
            var queueid = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(node, "QueueId", null)),
                queueViewID = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(node, "QueueViewId", null)),
                entityCode = getEntityCodeFromLogicalNameForStream(node);
            getNames(streamObjectId, queueid, queueViewID, entityCode, 0, isStream, parentElement);
            break;

        case "1":
            var ViewID = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(node, "EntityViewId", null)),
                entityCode = getEntityCodeFromLogicalNameForStream(node);
            getNames(streamObjectId, String.Empty, ViewID, entityCode, 1, isStream, parentElement);
            break;

        case "2":
            var queueid = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(node, "SavedQueryID", null)),
                queueViewID = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(node, "QueueViewIdForSavedQuery", null)),
                entityCode = getEntityCodeFromLogicalNameForStream(node);
            getNames(streamObjectId, queueid, queueViewID, entityCode, 2, isStream, parentElement);
            break;
        }
    }

    function getEntityCodeFromLogicalNameForStream(node) {
        var etc = 0;
        if (!isNullOrEmptyString(XUI.Xml.GetText(XUI.Xml.SelectSingleNode(node, "LogicalEntityName", null)))) {
            etc = Xrm.Internal.getEntityCode(XUI.Xml
                    .GetText(XUI.Xml.SelectSingleNode(node, "LogicalEntityName", null))) ==
                -1
                ? 0
                : Xrm.Internal.getEntityCode(XUI.Xml
                    .GetText(XUI.Xml.SelectSingleNode(node, "LogicalEntityName", null)));
        }

        return etc.toString();
    }

    function getNames(streamObjectId, queueid, viewid, objecttypecode, type, isStream, parentElement) {
        var guid = deParenthesizeGuid(viewid);
        var columns = ["name", "returnedtypecode"];
        Xrm.Internal.messages.retrieve(Mscrm.InternalUtilities.EntityNames.SavedQuery, guid, columns)
            .then(function(retrieveResponse) {
                    var viewName = "";
                    var queueName = "";
                    var entityName = "";
                    if (!Mscrm.InternalUtilities.JSTypes.isNull(retrieveResponse)) {
                        var responseEntity = retrieveResponse.entity;
                        if (!Mscrm.InternalUtilities.JSTypes.isNull(responseEntity)) {
                            viewName = responseEntity.getValue("name");
                        }
                    }

                    var otc = objecttypecode;
                    if (objecttypecode == 0) {
                        objecttypecode = responseEntity.getValue("returnedtypecode");
                        otc = Xrm.Internal.getEntityCode(objecttypecode);
                        entityName = Xrm.Internal.getEntityDisplayName(objecttypecode);
                    } else {
                        entityName = getEntityName(objecttypecode);
                    }

                    renderStreamorTiles(streamObjectId,
                        otc,
                        queueid,
                        viewid,
                        objecttypecode,
                        type,
                        isStream,
                        parentElement,
                        viewName,
                        queueName,
                        entityName);
                },
                function(error) {
                    var viewName = LOCID_INCONSISTENT_STREAM;
                    var queueName = LOCID_INCONSISTENT_STREAM;
                    var entityName = "";

                    if (objecttypecode != 0) {
                        entityName = getEntityName(objecttypecode);
                    }

                    renderStreamorTiles(streamObjectId,
                        objecttypecode,
                        queueid,
                        viewid,
                        objecttypecode,
                        type,
                        isStream,
                        parentElement,
                        viewName,
                        queueName,
                        entityName);
                });
    }

    function renderStreamorTiles(streamObjectId,
        entityObjectTypeCode,
        queueid,
        viewid,
        objecttypecode,
        type,
        isStream,
        parentElement,
        viewName,
        queueName,
        entityName) {
        var monikers = new Array();
        if (type == Stream.Queue) {
            var cols = ["name"];
            Xrm.Internal.messages.retrieve(Mscrm.InternalUtilities.EntityNames.Queue, queueid, cols)
                .then(function(result) {
                        if (!Mscrm.InternalUtilities.JSTypes.isNull(result)) {
                            var resEntity = result.entity;
                            if (!Mscrm.InternalUtilities.JSTypes.isNull(resEntity)) {
                                queueName = resEntity.getValue("name");
                            }
                            monikers.push(queueName);
                            monikers.push(viewName);
                            monikers.push(entityName);
                            setQueueNameAndViewNameForTier2(queueName, viewName, isStream);
                        }
                        renderCallback(streamObjectId, entityObjectTypeCode, isStream, monikers, parentElement);
                    },
                    function(error) {
                        monikers.push(LOCID_INCONSISTENT_STREAM);
                        renderCallback(streamObjectId, entityObjectTypeCode, isStream, monikers, parentElement);
                    });
        } else {
            if (type == Stream.SavedQuery) {
                monikers.push(getSavedQueryName(queueid));
                monikers.push(viewName);
                monikers.push(entityName);
                setQueueNameAndViewNameForTier2(getSavedQueryName(queueid), viewName, isStream);
            } else if (type == Stream.View) {
                monikers.push(entityName);
                monikers.push(viewName);
            }
            renderCallback(streamObjectId, entityObjectTypeCode, isStream, monikers, parentElement);
        }
    }

    function setQueueNameAndViewNameForTier2(queueName, viewName, isStream) {
        if (isStream && Mscrm.FormEditorVariables.dashboardCategory === InteractionCentricDashboardCategory.CSR2) {
            Mscrm.FormEditorVariables.streamsIsQueueSelected = true;
            Mscrm.FormEditorVariables.streamsQueueName = queueName;
            Mscrm.FormEditorVariables.streamsQueueItemViewName = viewName;
        }
    }

    function renderCallback(streamObjectId, entityObjectTypeCode, isStream, monikers, parentElement) {
        if (isStream) {
            setImageHtml(streamObjectId, entityObjectTypeCode, monikers, parentElement);
            numCount++;
        } else {
            setTileImageHtml(monikers);
            tileCount++;
        }
        if (numCount == Mscrm.FormEditorVariables.streamsCount && isStream)
            renderStreams();
        if (!isStream && tileCount >= 1)
            renderTiles(parentElement, tileImageHtml[tileCount - 1]);
    }

    function getSavedQueryName(savedQueryId) {
        if (savedQueryId == window.Public_Queues) {
            return window.Public_Queues_Name;
        } else if (savedQueryId == window.Private_Queues) {
            return window.Private_Queues_Name;
        } else if (savedQueryId == window.All_Queues) {
            return window.All_Queues_Name;
        }
    }

    function setPreviewFieldClassForStreams(parentElement) {

        if (Mscrm.FormEditorVariables.dashboardCategory !== InteractionCentricDashboardCategory.CSR2) {

            if (Mscrm.FormEditorVariables.streamsCount !== 0) {
                parentElement.setAttribute("class", "previewField alignStreamsTop");
            } else {
                parentElement.setAttribute("class", "previewField");
            }
        } else {
            parentElement.setAttribute("class", "previewField removeLeftPadding");
        }
    }

    function renderStreams() {

        var newAnchor = getAnchorElement("queues");
        var streamCellID = streamsCell().getAttribute("id");
        var streamCellElement = document.getElementById(streamCellID);
        streamCellElement.setAttribute("class", "cell");
        newAnchor.innerHTML = '';
        for (var i = 0; i < streamImageHtml.length; i++) {
            newAnchor.appendChild(streamImageHtml[i]);
        }

        var parentElement = streamCellElement.querySelector("td");
        setPreviewFieldClassForStreams(parentElement);

        parentElement.innerHTML = '';
        parentElement.appendChild(newAnchor);
    }


    function SetTileImagePattern() {
        var tileCells = XUI.Xml.SelectNodes(Mscrm.FormEditorVariables.formXml,
            "//entity/form/tabs/tab[@name = 'StreamsContainer']/columns/column/sections/section[@name = 'Tiles']/rows/row/cell[@istilecell = 'true']",
            null);
        Mscrm.FormEditorVariables.tilesCount = tileCells;
        for (var i = 0; i < tileCells.length; i++) {
            var tileCellElement = document.getElementById(tileCells[i].getAttribute("id"));
            tileCellElement.setAttribute("class", "cell");
            var parentElement = tileCellElement.querySelector("td");
            var tileParamsNode = XUI.Xml.SelectSingleNode(tileCells[i],
                "control/parameters/StreamObjects/StreamObject",
                null);

            if (tileParamsNode == null) {
                continue;
            }

            getStreamOrTileNamesFromNode(tileParamsNode, parentElement, 0);
        }
    }

    function renderTiles(parentElement, imageHtmltile) {

        var newAnchor = getAnchorElement("tiles");
        newAnchor.innerHTML = '';
        newAnchor.appendChild(imageHtmltile);
        parentElement.setAttribute("class", "previewField");
        parentElement.innerHTML = '';
        parentElement.appendChild(newAnchor);
    }

    function setImageHtml(streamObjectId, entityObjectTypeCode, queuename, index) {
        var imageHtml = document.createElement("div");
        imageHtml.setAttribute("id", streamObjectId);
        imageHtml.setAttribute("objecttypecode", entityObjectTypeCode);
        AssignEventHandleForStream(imageHtml, "dblclick", editStream);
        AssignEventHandleForStream(imageHtml, "mousedown", setActiveStream);
        AssignEventHandleForStream(imageHtml, "click", stopEventPropagationForStream);
        for (var j = 0; j < queuename.length; j++) {
            if (j == 0) {
                if (Mscrm.FormEditorVariables.dashboardCategory === InteractionCentricDashboardCategory.CSR2) {
                    imageHtml.setAttribute("class", "stream-divtier2");
                    imageHtml.appendChild(getDivElement(queuename[j], "stream-queuetier2 textEllipsis"));
                } else {
                    imageHtml.setAttribute("class", "stream-div");
                    imageHtml.appendChild(getDivElement(queuename[j], "stream-queue textEllipsis"));
                }
            } else {
                if (Mscrm.FormEditorVariables.dashboardCategory === InteractionCentricDashboardCategory.CSR2) {
                    imageHtml.appendChild(getDivElement(queuename[j], "stream-queuetier2text textEllipsis"));
                } else {
                    imageHtml.appendChild(getDivElement(queuename[j], "textEllipsis"));
                }
            }
        }

        streamImageHtml[index] = imageHtml;
    }

    function AssignEventHandleForStream(element, event, handler) {
        if (element.addEventListener) {
            element.addEventListener(event, handler, false);
        } else if (element.attachEvent) {

            element.attachEvent("on" + event, handler);
        }
    }

    function getDivElement(name, cssClass) {
        var element = document.createElement("div");
        if (cssClass != "") {
            element.setAttribute("class", cssClass);
        }
        element.setAttribute("title", name);
        element.innerHTML = CrmEncodeDecode.CrmHtmlEncode(name);
        return element;
    }

    function setTileImageHtml(names) {
        var imageHtml = document.createElement("div");
        for (var j = 0; j < names.length; j++) {
            if (j == 0) {
                imageHtml.setAttribute("class", "tile-div");
                imageHtml.appendChild(getDivElement(names[j], "tile-queue textEllipsis"));
            } else {
                imageHtml.appendChild(getDivElement(names[j], "textEllipsis"));
            }
        }
        tileImageHtml.push(imageHtml);
    }

    function getEntityName(objectTypeCode) {
        var entityName = Xrm.Internal.getEntityName(parseInt(objectTypeCode));
        var entityDisplayName = "";
        if (entityName != null)
            entityDisplayName = Xrm.Internal.getEntityDisplayName(entityName);
        return entityDisplayName;
    }

    function parenthesize(str) {
        return '{' + str + '}';
    }

    function deParenthesizeGuid(guid) {
        return guid.substring(1, guid.length - 1);
    }

    function getEmptyIfNull(arg) {
        if (IsNull(arg)) {
            return "";
        }
        return arg;
    }

    function streamsTab() {
        var result = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml,
            "//entity/form/tabs/tab[@name = 'StreamsContainer']",
            null);
        return getEmptyIfNull(result);
    }

    function streamsSection() {
        var result = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml,
            "//entity/form/tabs/tab[@name = 'StreamsContainer']/columns/column/sections/section[@name = 'Streams']",
            null);
        return getEmptyIfNull(result);
    }

    function streamsCell() {
        var result = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml,
            "//entity/form/tabs/tab[@name = 'StreamsContainer']/columns/column/sections/section[@name = 'Streams']/rows/row/cell",
            null);
        return getEmptyIfNull(result);
    }

    function tilesSection() {
        var result = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml,
            "//entity/form/tabs/tab/columns/column/sections/section[@name = 'Tiles']",
            null);
        return getEmptyIfNull(result);
    }

    function chartsSection() {
        var result = "";
        if (Mscrm.FormEditorVariables.dashboardCategory === InteractionCentricDashboardCategory.CSR2) {
            result = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml,
                "//entity/form/tabs/tab/columns/column/sections/section[@name = 'VisualFilters']",
                null);
        } else {
            result = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml,
                "//entity/form/tabs/tab/columns/column/sections/section",
                null);
        }
        return getEmptyIfNull(result);
    }

    function window_onbeforeunload(oEvent) {
        oEvent = oEvent.rawEvent;

        if (!_bSaving) {
            if (Mscrm.FormUtils.isFormDirty() || AreInputFieldsDirty() && !primaryEntityChanged) {
                oEvent.returnValue = LOCID_FORMED_SAVECHANGES;
                return LOCID_FORMED_SAVECHANGES;
            } else if ((oEvent.keyCode && oEvent.keyCode != 0) || _refreshDashboard) {
                CloseForm();
            }
        }
    }


    function SetParameters() {
        var filterByElement = document.getElementById("dashboardFilterByInput");
        var timeFrameElement = document.getElementById("dashboardTimeframeInput");
        var timeFrameValue = timeFrameElement.options[timeFrameElement.selectedIndex].value;
        var filterByValue = filterByElement.options[filterByElement.selectedIndex];

        if (filterByValue) {
            filterByValue = filterByValue.value;
        } else {
            alert(LOCID_FILTERBY_NOT_SELECTED);
            return false;
        }

        var entitySelected = document.getElementById("dashboardPrimaryEntityInput");
        var viewSelected = document.getElementById("dashboardViewInput");
        XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml, "//entity/form/tabs", null)
            .setAttribute("filterby", "" + filterByValue);
        XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml, "//entity/form/tabs", null)
            .setAttribute("timeframe", "" + timeFrameValue);
        XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml, "//entity/form/tabs", null)
            .setAttribute("primaryentitylogicalname", Xrm.Internal.getEntityName(parseInt(entitySelected.value)));
        XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml, "//entity/form/tabs", null)
            .setAttribute("entityview", "" + viewSelected.value);
        return true;
    }

    function Save(bClose) {

        if (Mscrm.FormEditorVariables.streamsCount == 0) {
            alert(LOCID_IC_STREAM_BEFORE_SAVE);
            return;
        }

        if (IsNull(dashName.get_dataValue())) {
            alert(LOCID_UI_DIR == 'LTR' ? LOCID_MISSING_NAME : '\u200f\u200f' + LOCID_MISSING_NAME);
            return;
        }

        if (Mscrm.FormUtils.isFormDirty() || AreInputFieldsDirty()) {
            if (!_bSaving) {
                _bSaving = true;


                var parametersSet = SetParameters();
                if (!parametersSet) {
                    _bSaving = false;
                    return;
                }

                var success = false;


                if (typeof window.ENTITY_TYPE_CODE === 'undefined') {
                    XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml, "//entity/form/tabs", null)
                        .setAttribute("dashboardCategory", "" + Mscrm.FormEditorVariables.dashboardCategory);
                    success = Mscrm.FormUtils.saveForm(parseInt(<%= systemFormType.ToString() %>, 10),
                        0,
                        dashName.get_dataValue(),
                        dashDesc.get_dataValue(),
                        Mscrm.FormEditorVariables.isTabletEnabled);
                } else {
                    XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml, "//entity/form/tabs", null)
                        .setAttribute("dashboardCategory", "" + Mscrm.FormEditorVariables.dashboardCategory);
                    success = Mscrm.FormUtils.saveForm(parseInt(<%= systemFormType.ToString() %>, 10),
                        window.ENTITY_TYPE_CODE,
                        dashName.get_dataValue(),
                        dashDesc.get_dataValue(),
                        Mscrm.FormEditorVariables.isTabletEnabled);
                }

                if (success) {
                    _dashboardUpdated = true;
                    isDirty = false;
                    InitializeDefaults();
                    Mscrm.TabUtils.setTabStatesCookie();
                }
                _bSaving = false;
            }
            if (!bClose) {
                _refreshDashboard = true;
            }
        }

        if (bClose) {

            Mscrm.FormUndoRedo.dispose();
            CloseForm();
        }
    }

    function CloseForm() {
        if (!_bSaving) {
            if (Mscrm.FormUtils.isFormDirty() || AreInputFieldsDirty()) {
                if (!window.confirm(LOCID_FORMED_SAVECHANGES)) {
                    return;
                }
            }
        }

        detachWindowOnBeforeUnload(window_onbeforeunload);
        if (_dashboardUpdated) {
            _refreshDashboard = false;
            try {
                if (!IsNull(originalOpener)) {
                    switch (Mscrm.FormEditorVariables.formAccessType) {
                    case Mscrm.EntityTypeCode.UserForm:
                        var selector = originalOpener.Mscrm.DashboardRibbonActions.getDashboardSelector();
                        if (selector) {
                            selector.set_reloadNeeded(true);
                        }
                        originalOpener.Mscrm.DashboardRibbonActions
                            .refreshDashboardSelector(Mscrm.FormEditorVariables.formId);
                        if (!IS_OUTLOOK_CLIENT) {
                            return;
                        }
                        break;
                    case Mscrm.EntityTypeCode.SystemForm:
                        originalOpener.auto(Mscrm.EntityTypeCode.SystemForm);
                        break;
                    case Mscrm.EntityTypeCode.InteractionCentricSystemForm:
                        originalOpener.auto(Mscrm.EntityTypeCode.InteractionCentricSystemForm);
                        break;
                    }
                }
            } catch (e) {
            };
        }
        Mscrm.Utilities.closeCurrentWindow();
    }

    function AreInputFieldsDirty() {
        return dashName.get_isDirty() || dashDesc.get_isDirty() || Mscrm.FormUtils.isTabletDirty() || isDirty;
    }


    function GetObjectTypeCode() {
        var primaryEntityDropDown = document.getElementById("dashboardPrimaryEntityInput");
        return primaryEntityDropDown.options[primaryEntityDropDown.selectedIndex].value;
    }

    function OnViewChange() {

        Mscrm.FormEditorVariables.selectedView = document.getElementById("dashboardViewInput").value;
        UpdateViewinCharts(Mscrm.FormEditorVariables.selectedView);
        isDirty = true;
    }

    function UpdateViewinCharts(view) {
        var chartsection = chartsSection();
        if (chartsection != String.Empty) {
            var chartCells = XUI.Xml.SelectNodes(chartsection, "rows/row/cell", null);
            if (chartCells != null) {
                for (var i = 0; i < chartCells.length; i++) {
                    var chartcell = chartCells[i];
                    var chartViewNode = XUI.Xml.SelectSingleNode(chartcell, "control/parameters/ViewId", null);
                    if (chartViewNode != null) {
                        XUI.Xml.SetText(chartViewNode, view);
                    }
                }
            }
        }
    }


    function OnPrimaryEntityChange() {
        var url = Mscrm.CrmUri.create(window.location.href);
        var dashboardName = document.getElementById("dashboardNameInput").value;
        var primaryEntityDropDown = document.getElementById("dashboardPrimaryEntityInput");
        var selectedPrimaryEntity = primaryEntityDropDown.options[primaryEntityDropDown.selectedIndex].value;
        var timeFrameDropDown = document.getElementById("dashboardTimeframeInput");
        var selectedTimeFrame = timeFrameDropDown.options[timeFrameDropDown.selectedIndex].value;


        if (editorHasControls()) {
            if (!window.confirm(LOCID_IC_CLEAR_SECTIONS)) {
                primaryEntityDropDown.value = _previousPrimaryEntityValue;
                return;
            }
        }

        url.get_query()["objectTypeCode"] = GetObjectTypeCode();
        url.get_query()["givenDashboardName"] = dashboardName;
        url.get_query()["selectedPrimaryEntity"] = selectedPrimaryEntity;
        url.get_query()["selectedTimeFrame"] = selectedTimeFrame;

        primaryEntityChanged = true;
        isDirty = true;
        window.location.href = url.toString();
    }

    function OnFilterChange() {

        Mscrm.FormEditorVariables.selectedFilter = document.getElementById("dashboardFilterByInput").value;
        isDirty = true;
    }

    function OnTimeFrameChange() {

        Mscrm.FormEditorVariables.selectedTimeFrame = document.getElementById("dashboardTimeframeInput").value;
        isDirty = true;
    }

    function editorHasControls() {
        var tabsHtml = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml, "//entity/form/tabs", null)
            .outerHTML;
        if (tabsHtml != null) {
            return tabsHtml.indexOf("parameters") > -1 ? true : false;
        }
        var tabsXml = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml, "//entity/form/tabs", null).xml;
        if (tabsXml != null) {
            return tabsXml.indexOf("parameters") > -1 ? true : false;
        }
    }

    function hideAddTilesButton() {
        var tilespresent = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml, "//entity/form/tabs", null)
            .getAttribute("tilespresent");
        if (tilespresent === "false") {
            var addTilesButton = window.top.document
                .getElementById("Mscrm.InteractionCentricDashboardEditorTab.InsertButtons.Tiles");
            if (addTilesButton != null) {
                addTilesButton.style.display = "none";
            }
        }
    }


    var readyStateCheckInterval = setInterval(function() {
            if (window.top.document.readyState === "complete") {
                hideAddTilesButton(readyStateCheckInterval);
                clearInterval(readyStateCheckInterval);
            }
        },
        1500);

</script>
<style type="text/css">
    td.actions {
        background-color: #ffffff;
        border: 1px solid #889dc2;
        padding: 10px;
        vertical-align: top;
        filter: progid:DXImageTransform.Microsoft.Gradient(GradientType=1, StartColorStr=#EAF1FF, EndColorStr=#ffffff);
        background: -webkit-linear-gradient(left, #EAF1FF, #ffffff);
        background: -moz-linear-gradient(left, #EAF1FF, #ffffff);
    }

    .ms-crm-Bold-Header-Ic {
        text-overflow: ellipsis;
        max-width: 100px;
        overflow-x: hidden;
        white-space: nowrap;
        display: inline-block;
    }

    .editorcontainer {
        background-color: rgb(255, 255, 255);
        overflow: auto;
        bottom: 25px !important;
    }

    #dashboardNameContainer, #dashboardPrimaryEntityContainer, #dashboardFilterByContainer, #dashboardTimeFrameContainer, #dashboardViewContainer {
        display: inline-block;
        width: 20%;
    }

    #dashboardPrimaryEntityInput, #dashboardFilterByInput, #dashboardTimeframeInput, #dashboardViewInput {
        display: inline-block;
        width: 75%;
    }

    #dashboardNameInput, #dashboardPrimaryEntityInput, #dashboardFilterByInput, #dashboardTimeframeInput, #dashboardNameInput_container, #dashboardPrimaryEntityInput_container, #dashboardFilterByInput_container, #dashboardTimeframeInput_container, #dashboardViewInput {
        <% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
           { %>
        float: left;
        <% }
           else
           { %>
        float: right;
        <% } %>
    }

    .PlaceholderAnchor {
        display: inline-block;
        width: inherit;
        margin: 0px;
    }

    #dashboardNameInput_container { width: 74.5%; }
</style>
</head>
<body class="stage" style="overflow: hidden">
<ui:EventManager runat="server" id="crmEventManager"></ui:EventManager>
<pre id="preFormXml" style="display: none;"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(_formXml.OuterXml) %></pre>
<form name="Previewer" action="preview.aspx" id="Previewer" method="post">
    <input name="title" type="hidden">
    <input name="previewType" type="hidden">
    <input name="formXml" type="hidden">
</form>
<div style="width: 100%; height: 100%; position: relative;">
<div id="menuHeader" style="width: 100%; height: 56px">
    <asp:placeholder id="phCrmMenuBar" runat="server"/>
</div>
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
   { %>
<div style="height: 80px; width: 45%; float: right" class="ViewDuplicates_tr_MyRecRsrcStr">
<% }
   else
   { %>
<div style="height: 80px; width: 45%; float: left" class="ViewDuplicates_tr_MyRecRsrcStr">
    <% } %>
    <div class="ms-crm-Emphasis-Strong" id="selectorLabel1" style="width: 100%">
        <div id="dashboardNameContainer" class="ms-crm-DE-NoUserSelect">
            <label for="dashboardNameInput" id="dashboardNameHintText" class="ms-crm-Bold-Header-Ic">
                <loc:Text ResourceId="Web.Visualization.Designer.SaveAs.Name" runat="server"/>
            </label>
            <img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
        </div>
        <ui:TextBox id="dashboardNameInput" CssClass="DashboardName" tabindex="1" runat="server"/>
        <ui:TextArea id="dashboardDescriptionInput" ClassName="ms-crm-DisplayNone" Height="0" maxlength="2000" runat="server"/>
    </div>
    <div class="ms-crm-Emphasis-Strong" id="selectorLabel2" style="width: 100%; padding-top: 10px;">
        <div id="dashboardPrimaryEntityContainer" class="ms-crm-DE-NoUserSelect">
            <label for="dashboardPrimaryEntityInput" id="dashboardPrimaryEntityHintText" class="ms-crm-Bold-Header-Ic">
                <loc:Text ResourceId="Web.Visualization.Designer.SaveAs.VisualFilterEntity" runat="server"/>
            </label>
            <img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
        </div>
        <ui:Select id="dashboardPrimaryEntityInput" CssClass="DashboardName" tabindex="1" runat="server"/>
    </div>
    <div class="ms-crm-Emphasis-Strong" id="selectorLabel5" style="width: 100%; padding-top: 10px;">
        <div id="dashboardViewContainer" class="ms-crm-DE-NoUserSelect">
            <label for="dashboardViewInput" id="dashboardViewHintText" class="ms-crm-Bold-Header-Ic">
                <loc:Text ResourceId="Web.Visualization.Designer.SaveAs.EntityView" runat="server"/>
            </label>
            <img id="dashboardViewRequired" src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
        </div>
        <ui:Select id="dashboardViewInput" CssClass="DashboardName" tabindex="1" runat="server"/>
    </div>
</div>
    <% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
       { %>
<div style="height: 80px; width: 45%; float: left" class="ViewDuplicates_tr_MyRecRsrcStr">
    <% }
       else
       { %>
    <div style="height: 80px; width: 45%; float: right" class="ViewDuplicates_tr_MyRecRsrcStr">
        <% } %>
        <div class="ms-crm-Emphasis-Strong" id="selectorLabel3" style="width: 100%">
            <div id="dashboardFilterByContainer" class="ms-crm-DE-NoUserSelect">
                <label for="dashboardFilterByInput" id="dashboardFilterByHintText" class="ms-crm-Bold-Header-Ic">
                    <loc:Text ResourceId="Web.Visualization.Designer.SaveAs.FilterBy" runat="server"/>
                </label>
                <img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
            </div>
            <ui:Select id="dashboardFilterByInput" CssClass="DashboardName" tabindex="1" runat="server"/>
        </div>
        <div class="ms-crm-Emphasis-Strong" id="selectorLabel4" style="width: 100%; padding-top: 10px;">
            <div id="dashboardTimeFrameContainer" class="ms-crm-DE-NoUserSelect">
                <label for="dashboardTimeframeInput" id="dashboardTimeFrameHintText" class="ms-crm-Bold-Header-Ic">
                    <loc:Text ResourceId="Web.Visualization.Designer.SaveAs.TimeFrame" runat="server"/>
                </label>
                <img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
            </div>
            <ui:Select id="dashboardTimeframeInput" CssClass="DashboardName" tabindex="1" runat="server"/>
        </div>
    </div>
        <div class="ms-crm-absolutePosition editorcontainer ms-crm-DE-NoUserSelect" style="top: 140px;" id="editorcontainer">
            <div id="formDesigner" class="ms-crm-absolutePosition"></div>
        </div>
        <div class="ms-crm-absolutePosition" style="top: auto; height: 25px">
            <div class="ms-crm-Form-StatusBar">&nbsp;</div>
        </div>
    </div>
</body>
</html>