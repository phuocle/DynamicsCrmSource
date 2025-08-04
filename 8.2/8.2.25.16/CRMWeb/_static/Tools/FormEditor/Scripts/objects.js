
function FormObj(oFormXml,oDepends,bFaExpanded,bLeftNavShown,sName,sDescription,bEnableFa,sMaxWidth,showImage)
{
    this.FormXml = oFormXml;
    this.Dependencies = oDepends;
    this.FormAssistantExpanded = bFaExpanded;
    this.FormLeftNavBar = bLeftNavShown;
    this.Name = sName;
    this.Description = sDescription;
    this.EnableFormAssistant = bEnableFa;
    this.MaxWidth = sMaxWidth;
    this.ShowImage = showImage
}
function TabObj(sTabId,oLabels,bLockTab,bExpByDefault,iColumns,iColWidths,bShowLabel,oFormXml,bVisible,bAvailableForPhone,sTabName)
{
    this.TabId = sTabId;
    this.Labels = oLabels;
    this.LockTab = bLockTab;
    this.ExpandByDefault = bExpByDefault;
    this.Columns = iColumns;
    this.ColWidths = iColWidths;
    this.ShowLabel = bShowLabel;
    this.FormXml = oFormXml;
    this.Visible = bVisible;
    this.AvailableForPhone = bAvailableForPhone;
    this.TabName = sTabName
}
function SectionObj(sTabName,sSectionId,bShowLabel,bShowBar,bLockSection,oLabels,sLayout,sColumns,iLabelWidth,sJustification,sAlignment,iTabColumn,bVisible,bAvailableForPhone,sSectionName,isReferencePanelSection,iRowHeight,bAutoExpand)
{
    this.TabName = sTabName;
    this.SectionId = sSectionId;
    this.ShowLabel = bShowLabel;
    this.ShowBar = bShowBar;
    this.LockSection = bLockSection;
    this.Labels = oLabels;
    this.Layout = sLayout;
    this.Columns = sColumns;
    this.LabelWidth = iLabelWidth;
    this.FieldJustification = sJustification;
    this.FieldAlignment = sAlignment;
    this.TabColumn = iTabColumn;
    this.Visible = bVisible;
    this.AvailableForPhone = bAvailableForPhone;
    this.SectionName = sSectionName;
    isReferencePanelSection = typeof isReferencePanelSection !== "undefined" ? isReferencePanelSection : false;
    if(isReferencePanelSection == null)
        isReferencePanelSection = false;
    this.IsReferencePanelSection = isReferencePanelSection;
    iRowHeight = typeof iRowHeight !== "undefined" ? iRowHeight : 25;
    if(iRowHeight == null)
        iRowHeight = 25;
    this.RowHeight = iRowHeight;
    bAutoExpand = typeof bAutoExpand !== "undefined" ? bAutoExpand : false;
    if(bAutoExpand == null)
        bAutoExpand = false;
    this.AutoExpand = bAutoExpand
}
function FieldObj(sLabel,bShowLabel,bDisabled,sTabName,sSectionName,bLocked,iColSpan,iRowSpan,bAutoExpanding,sControlClassId,sDataType,sDataTypeFormat,sAttributeDisplayName,sAttributeSchemaName,sAttributeDescription,oParameters,bSchemaPropsEdited,oPropsXml,oFieldsXml,oFormXml,bVisible,bAvailableForPhone,sCustomControlUniqueId)
{
    this.sLabel = sLabel;
    this.bShowLabel = bShowLabel;
    this.bDisabled = bDisabled;
    this.sTabName = sTabName;
    this.sSectionName = sSectionName;
    this.bLocked = bLocked;
    this.iColSpan = iColSpan;
    this.iRowSpan = iRowSpan;
    this.bAutoExpanding = bAutoExpanding;
    this.sControlClassId = sControlClassId;
    this.oParameters = oParameters;
    this.bSchemaPropsEdited = bSchemaPropsEdited;
    this.oPropsXml = oPropsXml;
    this.oFieldsXml = oFieldsXml;
    this.sDataType = sDataType;
    this.sDataTypeFormat = sDataTypeFormat;
    this.sAttributeDisplayName = sAttributeDisplayName;
    this.sAttributeSchemaName = sAttributeSchemaName;
    this.sAttributeDescription = sAttributeDescription;
    this.FormXml = oFormXml;
    this.Visible = bVisible;
    this.AvailableForPhone = bAvailableForPhone;
    this.sCustomControlUniqueId = sCustomControlUniqueId
}
function LocalizedObj(sDescription,sLanguageCode)
{
    this.Description = sDescription;
    this.LanguageCode = sLanguageCode
}
function EventObj(sName,bActive,bApplication,sScript,oDependencies)
{
    this.Name = sName;
    this.Active = bActive;
    this.Application = bApplication;
    this.Script = sScript;
    this.Dependencies = oDependencies
}
function DependencyObj(sFieldName,sType,sName,bSystem)
{
    this.FieldName = sFieldName;
    this.Type = sType;
    this.Name = sName;
    this.System = bSystem
}
function IframeObj(sId,sUrl,bPassParams,iRowSpan,iColSpan,bAuto,bSecure,sTabName,sSectionName,oLabels,bShowLabel,oDepends,sScrolling,bBoder,oFormXml,bVisible,bShowOnMobileClient)
{
    this.Id = sId;
    this.Url = sUrl;
    this.PassParams = bPassParams;
    this.RowSpan = iRowSpan;
    this.ColSpan = iColSpan;
    if(bAuto == null)
        bAuto = false;
    this.Auto = bAuto;
    this.Secure = bSecure;
    this.TabName = sTabName;
    this.SectionName = sSectionName;
    this.Labels = oLabels;
    this.ShowLabel = bShowLabel;
    this.Dependencies = oDepends;
    this.Scrolling = sScrolling;
    this.Border = bBoder;
    this.FormXml = oFormXml;
    this.Visible = bVisible;
    this.ShowOnMobileClient = bShowOnMobileClient
}
function PowerBITileObj(sId,iRowSpan,iColSpan,bAuto,sTabName,sSectionName,oLabels,bShowLabel,sDashboardId,sTileId,sTileUrl,iType,bEnableInMobile,bVisible)
{
    this.Id = sId;
    this.RowSpan = iRowSpan;
    this.ColSpan = iColSpan;
    this.Auto = bAuto == null ? false : bAuto;
    this.TabName = sTabName;
    this.SectionName = sSectionName;
    this.Labels = oLabels;
    this.ShowLabel = bShowLabel;
    this.DashboardId = sDashboardId;
    this.TileId = sTileId;
    this.TileUrl = sTileUrl;
    this.Type = iType;
    this.EnableInMobile = bEnableInMobile;
    this.Visible = bVisible
}
function SocialInsightObj(sId,sUrl,bPassParams,iRowSpan,iColSpan,bAuto,sTabName,sSectionName,oLabels,bShowLabel,oDepends,sScrolling,bBoder,oFormXml,bVisible)
{
    this.Id = sId;
    this.Url = sUrl;
    this.PassParams = bPassParams;
    this.RowSpan = iRowSpan;
    this.ColSpan = iColSpan;
    if(bAuto == null)
        bAuto = false;
    this.Auto = bAuto;
    this.TabName = sTabName;
    this.SectionName = sSectionName;
    this.Labels = oLabels;
    this.ShowLabel = bShowLabel;
    this.Dependencies = oDepends;
    this.Scrolling = sScrolling;
    this.Border = bBoder;
    this.FormXml = oFormXml;
    this.Visible = bVisible
}
function OrgInsightsObj(sId,iRowSpan,iColSpan,bAuto,sTabName,sSectionName,oLabels,bShowLabel,oDepends,sScrolling,bBorder,oFormXml,bVisible,sVisualizationId,bIsUserChart)
{
    this.Id = sId;
    this.RowSpan = iRowSpan;
    this.ColSpan = iColSpan;
    if(bAuto == null)
        bAuto = false;
    this.Auto = bAuto;
    this.TabName = sTabName;
    this.SectionName = sSectionName;
    this.Labels = oLabels;
    this.ShowLabel = bShowLabel;
    this.Dependencies = oDepends;
    this.Scrolling = sScrolling;
    this.Border = bBorder;
    this.FormXml = oFormXml;
    this.Visible = bVisible;
    if(sVisualizationId == null)
        sVisualizationId = "";
    this.VisualizationId = sVisualizationId;
    this.IsUserChart = bIsUserChart
}
function TimerControlObj(sId,sSuccessConditionName,sSuccessConditionValues,sFailureConditionName,sFailureConditionValue,sWarningConditionName,sWarningConditionValue,sCancelConditionName,sCancelConditionValue,sPauseConditionName,sPauseConditionValue,sFailureTimeField,iRowSpan,iColSpan,sTabName,sSectionName,oLabels,bShowLabel,oFormXml,bVisible)
{
    this.Id = sId;
    this.SuccessConditionName = sSuccessConditionName;
    this.SuccessConditionValue = sSuccessConditionValues;
    this.FailureConditionName = sFailureConditionName;
    this.FailureConditionValue = sFailureConditionValue;
    this.WarningConditionName = sWarningConditionName;
    this.WarningConditionValue = sWarningConditionValue;
    this.CancelConditionName = sCancelConditionName;
    this.CancelConditionValue = sCancelConditionValue;
    this.PauseConditionName = sPauseConditionName;
    this.PauseConditionValue = sPauseConditionValue;
    this.FailureTimeField = sFailureTimeField;
    this.RowSpan = iRowSpan;
    this.ColSpan = iColSpan;
    this.TabName = sTabName;
    this.SectionName = sSectionName;
    this.Labels = oLabels;
    this.ShowLabel = bShowLabel;
    this.FormXml = oFormXml;
    this.Visible = bVisible
}
function BingMapObj(sId,sAddressField,iRowSpan,iColSpan,bAuto,sTabName,sSectionName,oLabels,bShowLabel,oFormXml,bVisible)
{
    this.Id = sId;
    this.AddressField = sAddressField;
    this.RowSpan = iRowSpan;
    this.ColSpan = iColSpan;
    this.Auto = bAuto == null ? false : bAuto;
    this.TabName = sTabName;
    this.SectionName = sSectionName;
    this.Labels = oLabels;
    this.ShowLabel = bShowLabel;
    this.FormXml = oFormXml;
    this.Visible = bVisible
}
function WebResourceObj(sId,sUrl,bPassParams,iRowSpan,iColSpan,bAuto,bSecure,sTabName,sSectionName,oLabels,bShowLabel,oDepends,sScrolling,bBoder,iTypeCode,iHeight,iWidth,sSizeType,sAltText,sCustomParameter,sHorizontalAlignment,sVerticalAlignment,bVisible,bShowOnMobileClient,sWebResourceId)
{
    this.Id = sId;
    this.Url = sUrl;
    this.PassParams = bPassParams;
    this.RowSpan = iRowSpan;
    this.ColSpan = iColSpan;
    if(bAuto == null)
        bAuto = false;
    this.Auto = bAuto;
    this.Secure = bSecure;
    this.TabName = sTabName;
    this.SectionName = sSectionName;
    this.Labels = oLabels;
    this.ShowLabel = bShowLabel;
    this.Dependencies = oDepends;
    this.Scrolling = sScrolling;
    this.Border = bBoder;
    this.TypeCode = iTypeCode;
    this.Height = iHeight;
    this.Width = iWidth;
    this.SizeType = sSizeType;
    this.AltText = sAltText;
    this.CustomParameter = sCustomParameter;
    this.HorizontalAlignment = sHorizontalAlignment;
    this.VerticalAlignment = sVerticalAlignment;
    this.Visible = bVisible;
    this.ShowOnMobileClient = bShowOnMobileClient;
    this.WebResourceId = sWebResourceId
}
function SubGridObj(sId,sRelationshipName,sTargetEntity,iRowSpan,iRowsPerPage,iColSpan,bAuto,bShowLabel,sDefaultView,bEnableViewPicker,sViews,bEnableSearchBox,bEnableIndex,bChartGridMode,sVisualizationId,bEnableChartPicker,oLabels,sAssociationRoleOrdinal,isUserView,isUserChart,bAvailableForPhone,sGridUIMode,oCustomControlSnippet,isReferencePanelSubGrid,sIconUrl,sCustomControlUniqueId,oFormXml)
{
    this.Id = sId;
    this.RelationshipName = sRelationshipName;
    this.TargetEntity = sTargetEntity;
    this.RowSpan = iRowSpan;
    this.RowsPerPage = iRowsPerPage;
    this.ColSpan = iColSpan;
    if(bAuto == null)
        bAuto = false;
    this.Auto = bAuto;
    if(bShowLabel == null)
        bShowLabel = false;
    this.ShowLabel = bShowLabel;
    this.DefaultView = sDefaultView;
    if(bEnableViewPicker == null)
        bEnableViewPicker = false;
    this.EnableViewPicker = bEnableViewPicker;
    this.Views = sViews;
    if(bEnableSearchBox == null)
        bEnableSearchBox = false;
    this.EnableSearchBox = bEnableSearchBox;
    if(bEnableIndex == null)
        bEnableIndex = false;
    this.EnableIndex = bEnableIndex;
    if(bChartGridMode == null)
        bChartGridMode = "All";
    this.ChartGridMode = bChartGridMode;
    if(sVisualizationId == null)
        sVisualizationId = "";
    this.VisualizationId = sVisualizationId;
    if(bEnableChartPicker == null)
        bEnableChartPicker = "";
    this.EnableChartPicker = bEnableChartPicker;
    this.Labels = oLabels;
    this.AssociationRoleOrdinal = sAssociationRoleOrdinal;
    this.IsUserView = isUserView;
    this.IsUserChart = isUserChart;
    this.AvailableForPhone = bAvailableForPhone;
    if(sGridUIMode != null)
        this.GridUIMode = sGridUIMode;
    if(Mscrm.FeatureControl.get_Current().isFeatureEnabled(Mscrm.FeatureNames.CustomControlMobile) && oCustomControlSnippet != null)
        this.CustomControlSnippet = oCustomControlSnippet;
    isReferencePanelSubGrid = typeof isReferencePanelSubGrid !== "undefined" ? isReferencePanelSubGrid : false;
    if(isReferencePanelSubGrid == null)
        isReferencePanelSubGrid = false;
    this.IsReferencePanelSubGrid = isReferencePanelSubGrid;
    sIconUrl = typeof sIconUrl !== "undefined" ? sIconUrl : null;
    this.IconUrl = sIconUrl;
    this.CustomControlUniqueId = sCustomControlUniqueId;
    this.FormXml = oFormXml
}
function QuickFormObj(sId,bShowLabel,oLabels,bAuto,sDataFieldName,oQuickFormCollectionInfo,isReferencePanelQuickFormCollection,sIconUrl,isDisplayAsCustomer360)
{
    this.Id = sId;
    if(bShowLabel == null)
        bShowLabel = false;
    this.ShowLabel = bShowLabel;
    this.Labels = oLabels;
    if(bAuto == null)
        bAuto = true;
    this.Auto = bAuto;
    this.DataFieldName = sDataFieldName;
    this.QuickFormCollectionInfo = oQuickFormCollectionInfo;
    isReferencePanelQuickFormCollection = typeof isReferencePanelQuickFormCollection !== "undefined" ? isReferencePanelQuickFormCollection : false;
    if(isReferencePanelQuickFormCollection == null)
        isReferencePanelQuickFormCollection = false;
    this.IsReferencePanelQuickFormCollection = isReferencePanelQuickFormCollection;
    sIconUrl = typeof sIconUrl !== "undefined" ? sIconUrl : null;
    this.IconUrl = sIconUrl;
    isDisplayAsCustomer360 = typeof isDisplayAsCustomer360 !== "undefined" ? isDisplayAsCustomer360 : false;
    if(isDisplayAsCustomer360 == null)
        isDisplayAsCustomer360 = false;
    this.DisplayAsCustomer360Tile = isDisplayAsCustomer360
}
function InteractionWallObj(sId,oLabels)
{
    this.Id = sId;
    this.Labels = oLabels
}
function LocationObj(iRow,iColumn)
{
    this.Row = iRow;
    this.Column = iColumn
}
function RelatedQuickFormInfo(entity,formId)
{
    this.entity = entity;
    this.formId = formId
}
function SearchWidgetObj(sId,sFilterResults,bAllowChangingFiltersOnUI,bShowLanguageFilter,bShowDepartmentFilter,bEnableAutoSuggestions,sSearchForAutoSuggestionsUsing,sAutoSuggestionSource,iNumberOfResults,bShowContextualActions,sActionList,sSelectPrimaryCustomer,iRowSpan,iColSpan,sTabName,sSectionName,oLabels,bShowLabel,oFormXml,bVisible,sSelectDefaultLanguage,isReferencePanelSearchWidget,sIconUrl,bEnableRating,sShowRatingUsing)
{
    this.Id = sId;
    this.FilterResults = sFilterResults;
    this.AllowChangingFiltersOnUI = bAllowChangingFiltersOnUI;
    this.ShowLanguageFilter = bShowLanguageFilter;
    this.ShowDepartmentFilter = bShowDepartmentFilter;
    this.EnableAutoSuggestions = bEnableAutoSuggestions;
    this.SearchForAutoSuggestionsUsing = sSearchForAutoSuggestionsUsing;
    this.EnableRating = bEnableRating;
    this.ShowRatingUsing = sShowRatingUsing;
    this.AutoSuggestionSource = sAutoSuggestionSource;
    this.NumberOfResults = iNumberOfResults;
    this.ShowContextualActions = bShowContextualActions;
    this.ActionList = sActionList;
    this.SelectPrimaryCustomer = sSelectPrimaryCustomer;
    this.RowSpan = iRowSpan;
    this.ColSpan = iColSpan;
    this.TabName = sTabName;
    this.SectionName = sSectionName;
    this.Labels = oLabels;
    this.ShowLabel = bShowLabel;
    this.FormXml = oFormXml;
    this.Visible = bVisible;
    isReferencePanelSearchWidget = typeof isReferencePanelSearchWidget !== "undefined" ? isReferencePanelSearchWidget : false;
    if(isReferencePanelSearchWidget == null)
        isReferencePanelSearchWidget = false;
    this.IsReferencePanelSearchWidget = isReferencePanelSearchWidget;
    sIconUrl = typeof sIconUrl !== "undefined" ? sIconUrl : null;
    this.IconUrl = sIconUrl;
    this.SelectDefaultLanguage = sSelectDefaultLanguage
}
function QueueObj(sId,queueId,queueViewId,entityId,savedQueryId,queueViewSelected,entityViewSelected,showAsTiles,isFilter,isQueueCollection,queueName,queueItemViewName,queueEntity,entityName,entityViewName,queueEntityTypeCode,sEditStreamObjectId)
{
    this.Id = sId;
    this.queueId = queueId;
    this.queueViewId = queueViewId;
    this.entityId = entityId;
    this.savedQueryId = savedQueryId;
    this.queueViewSelected = queueViewSelected;
    this.entityViewSelected = entityViewSelected;
    this.showAsTiles = showAsTiles;
    this.isVisualFilter = isFilter;
    this.isQueueCollection = isQueueCollection;
    this.queueName = queueName;
    this.queueItemViewName = queueItemViewName;
    this.queueEntity = queueEntity;
    this.entityName = entityName;
    this.entityViewName = entityViewName;
    this.queueEntityTypeCode = queueEntityTypeCode;
    this.EditStreamObjectId = sEditStreamObjectId
}
function ACIWidgetObj(sId,sViewName,bPassParams,iRowSpan,iColSpan,bAuto,bSecure,sTabName,sSectionName,oLabels,bShowLabel,oDepends,sScrolling,bBoder,oFormXml,bVisible,bShowOnMobileClient)
{
    this.Id = sId;
    this.ViewName = sViewName;
    this.PassParams = bPassParams;
    this.RowSpan = iRowSpan;
    this.ColSpan = iColSpan;
    if(bAuto == null)
        bAuto = false;
    this.Auto = bAuto;
    this.Secure = bSecure;
    this.TabName = sTabName;
    this.SectionName = sSectionName;
    this.Labels = oLabels;
    this.ShowLabel = bShowLabel;
    this.Dependencies = oDepends;
    this.Scrolling = sScrolling;
    this.Border = bBoder;
    this.FormXml = oFormXml;
    this.Visible = bVisible;
    this.ShowOnMobileClient = bShowOnMobileClient
}
