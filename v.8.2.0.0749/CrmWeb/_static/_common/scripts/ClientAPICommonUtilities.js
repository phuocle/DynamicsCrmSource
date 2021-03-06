Type.registerNamespace("Mscrm.InternalUtilities");
Mscrm.InternalUtilities._Script = function() {};
Mscrm.InternalUtilities._Script.isNullOrUndefined = function(value) { return null === value || value === undefined };
Mscrm.InternalUtilities._Script.alert = function(message) { alert(message) };
Mscrm.InternalUtilities._Script.confirm = function(message) { return confirm(message) };
Mscrm.InternalUtilities._Script.eval = function(value) { return eval(value) };
Mscrm.InternalUtilities._Script.prompt = function(message, defaultValue) { return prompt(message, defaultValue) };
Mscrm.InternalUtilities._String = function() {};
Mscrm.InternalUtilities._String.isNullOrEmpty = function(value) {
    return null === value || Mscrm.InternalUtilities._String.isUndefined(value) || value === ""
};
Mscrm.InternalUtilities._String.isNullOrWhiteSpace = function(value) {
    return Mscrm.InternalUtilities._String.isNullOrEmpty(value) || value.trim() === ""
};
Mscrm.InternalUtilities._String.hashCode = function(value) {
    for (var $v_0 = 0, $v_1 = 0; $v_1 < value.length; ++$v_1) {
        var $v_2 = value.charCodeAt($v_1);
        $v_0 = ($v_0 << 5) - $v_0 + $v_2;
        $v_0 = $v_0 & $v_0
    }
    return $v_0
};
Mscrm.InternalUtilities._String.join = function(separator, values) { return values.join(separator) };
Mscrm.InternalUtilities._String.isUndefined = function(value) { return value === undefined };
Mscrm.InternalUtilities._String.format = function(value, arg0, arg1, arg2, arg3, arg4, arg5) {
    if (Mscrm.InternalUtilities._String.isUndefined(arg0) &&
        Mscrm.InternalUtilities._String.isUndefined(arg1) &&
        Mscrm.InternalUtilities._String.isUndefined(arg2) &&
        Mscrm.InternalUtilities._String.isUndefined(arg3) &&
        Mscrm.InternalUtilities._String.isUndefined(arg4) &&
        Mscrm.InternalUtilities._String.isUndefined(arg5)) return value;
    return String.format(value, arg0, arg1, arg2, arg3, arg4, arg5)
};
Mscrm.InternalUtilities._String.replaceNewLineWithEnding = function(text, ending) {
    if (Mscrm.InternalUtilities._String.isNullOrEmpty(text)) return "";
    for (var $v_0 = new Sys.StringBuilder, $v_1 = text.split(Mscrm.InternalUtilities._String.$1), $v_2 = 0;
        $v_2 < $v_1.length;
        $v_2++)
        if (!Mscrm.InternalUtilities._String.isNullOrWhiteSpace($v_1[$v_2])) {
            $v_0.append($v_1[$v_2]);
            $v_0.append(ending)
        }
    return $v_0.toString()
};
Mscrm.InternalUtilities._String.replaceAll = function(text, patternText, replaceText) {
    var $v_0 = text;
    while ($v_0.indexOf(patternText) >= 0) $v_0 = $v_0.replace(patternText, replaceText);
    return $v_0
};
Mscrm.InternalUtilities._String.replaceFirst = function(text, patternText, replaceText) {
    var $v_0 = text, $v_1 = text.indexOf(patternText);
    if ($v_1 >= 0) {
        $v_0 = Mscrm.InternalUtilities._String.remove($v_0, $v_1, patternText.length);
        $v_0 = Mscrm.InternalUtilities._String.insert($v_0, $v_1, replaceText)
    }
    return $v_0
};
Mscrm.InternalUtilities._String.remove = function(text, index, count) {
    if (Mscrm.InternalUtilities._String.isNullOrEmpty(text)) return "";
    if (Mscrm.InternalUtilities.JSTypes.isNull(count) || index + count > text.length) return text.substr(0, index);
    return text.substr(0, index) + text.substr(index + count)
};
Mscrm.InternalUtilities._String.indexOfAny = function(text, values, startIndex, count) {
    if (Mscrm.InternalUtilities.JSTypes.isNull(text)) return -1;
    if (Mscrm.InternalUtilities.JSTypes.isNull(values)) return -1;
    var $v_0 = text.length;
    if ($v_0 <= 0) return -1;
    startIndex = Mscrm.InternalUtilities.JSTypes.isNull(startIndex) ? 0 : startIndex;
    count = Mscrm.InternalUtilities.JSTypes.isNull(count) ? 0 : count;
    var $v_1 = startIndex + count - 1;
    if ($v_1 >= $v_0) $v_1 = $v_0 - 1;
    for (var $v_2 = startIndex; $v_2 <= $v_1; $v_2++) if (values.indexOf(text.charAt($v_2)) >= 0) return $v_2;
    return -1
};
Mscrm.InternalUtilities._String.insert = function(text, index, value) {
    if (Mscrm.InternalUtilities._String.isNullOrEmpty(value)) return text;
    if (Mscrm.InternalUtilities.JSTypes.isNull(index)) return value + text;
    var $v_0 = text.substr(0, index), $v_1 = text.substr(index);
    return $v_0 + value + $v_1
};
Mscrm.InternalUtilities.EntityNames = function() {};
Mscrm.InternalUtilities.EntityTypeCode = function() {};
Mscrm.InternalUtilities.FullNameGenerator = function() {};
Mscrm.InternalUtilities.FullNameGenerator
    .generateFullName = function(fullNameConventionCode, firstName, middleName, lastName) {
        firstName = Mscrm.InternalUtilities.FullNameGenerator.$0(firstName).trim();
        middleName = Mscrm.InternalUtilities.FullNameGenerator.$0(middleName).trim();
        lastName = Mscrm.InternalUtilities.FullNameGenerator.$0(lastName).trim();
        var $v_0 = "";
        if (middleName.length > 0) $v_0 = middleName.substring(0, 1);
        var $v_1 = "";
        switch (fullNameConventionCode) {
        case 0:
            if (lastName.length > 0 && firstName.length > 0) $v_1 = lastName + ", " + firstName;
            else $v_1 = lastName + " " + firstName;
            break;
        case 1:
            $v_1 = firstName + " " + lastName;
            break;
        case 2:
            $v_1 = Mscrm.InternalUtilities.FullNameGenerator.$2(firstName, lastName, $v_0);
            break;
        case 3:
            $v_1 = firstName;
            if (middleName.length > 0) $v_1 = $v_1 + " " + $v_0 + ".";
            $v_1 = $v_1 + " " + lastName;
            break;
        case 4:
            if (lastName.length > 0) $v_1 = lastName;
            if (lastName.length > 0 && (firstName.length > 0 || middleName.length > 0)) $v_1 += ",";
            if (firstName.length > 0) $v_1 = $v_1 + " " + firstName;
            if (middleName.length > 0) $v_1 = $v_1 + " " + middleName;
            break;
        case 5:
            $v_1 = firstName;
            if (middleName.length > 0) $v_1 = $v_1 + " " + middleName;
            $v_1 = $v_1 + " " + lastName;
            break;
        case 6:
            $v_1 = lastName + " " + firstName;
            break;
        case 7:
            $v_1 = lastName + firstName;
            break;
        default:
            $v_1 = lastName;
            break
        }
        return $v_1.toString().trim()
    };
Mscrm.InternalUtilities.FullNameGenerator.$2 = function($p0, $p1, $p2) {
    var $v_0 = "";
    if ($p1.length > 0) $v_0 = $p1;
    if ($p1.length > 0 && ($p0.length > 0 || $p2.length > 0)) $v_0 += ",";
    if ($p0.length > 0) $v_0 = $v_0 + " " + $p0;
    if ($p2.length > 0) $v_0 = $v_0 + " " + $p2 + ".";
    return $v_0.toString().trim()
};
Mscrm.InternalUtilities.FullNameGenerator.$0 = function($p0) { return _Script.isNullOrUndefined($p0) ? "" : $p0 };
Mscrm.InternalUtilities.JSTypes = function() {};
Mscrm.InternalUtilities.JSTypes.isNull = function(value) {
    return typeof value === "undefined" || typeof value === "unknown" || value == null
};
Mscrm.InternalUtilities.JSTypes.isArray = function(item) {
    return !!item && (Array.isInstanceOfType(item) || typeof item.splice === "function")
};
Mscrm.InternalUtilities.JSTypes.isInstanceOfTypeAcrossFrames = function(item, type) {
    try {
        return Mscrm.InternalUtilities.JSTypes.isNull(item) || Mscrm.InternalUtilities.JSTypes.isNull(type)
            ? false
            : Object.getType(item).getName() === type.getName()
    } catch ($$e_2) {
        return false
    }
};
Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString = function(value) {
    return Mscrm.InternalUtilities.JSTypes.isNull(value) || typeof value === "string" && !value.length
};
Mscrm.InternalUtilities.JSTypes
    .getClass = function(value) { return Object.prototype.toString.call(value).slice(8, -1) };
Mscrm.InternalUtilities.JSTypes.isOfClass = function(value, soughtClass) {
    return Mscrm.InternalUtilities.JSTypes.getClass(value) === soughtClass
};
Mscrm.InternalUtilities.TypeNames = function() {};
Mscrm.InternalUtilities.Utilities = function() {};
Mscrm.InternalUtilities.Utilities.createAndFilterXmlString = function(attributeName, fetchOperator, attributeValue) {
    if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(attributeName) &&
        !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(fetchOperator) &&
        !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(attributeValue)) {
        var $v_0 = '<filter type="and"><condition attribute="{0}" operator="{1}" value="{2}" /></filter>';
        return String.format($v_0,
            CrmEncodeDecode.CrmXmlAttributeEncode(attributeName),
            CrmEncodeDecode.CrmXmlAttributeEncode(fetchOperator),
            CrmEncodeDecode.CrmXmlAttributeEncode(attributeValue))
    }
    return ""
};
Mscrm.InternalUtilities.Utilities
    .isUserDefinedEntityObjectTypeCode = function(objectTypeCode) { return objectTypeCode >= 1e4 };
Mscrm.InternalUtilities.Utilities.getCookie = function(cookieName) {
    var $v_0;
    try {
        $v_0 = document.cookie
    } catch ($v_4) {
        $v_0 = ""
    }
    var $v_1 = null, $v_2 = $v_0.indexOf(cookieName + "="), $v_3 = -1;
    if ($v_2 !== -1) {
        $v_2 += cookieName.length + 1;
        $v_3 = $v_0.indexOf(";", $v_2);
        if ($v_3 === -1) $v_3 = $v_0.length;
        $v_1 = $v_0.substring($v_2, $v_3)
    }
    return CrmEncodeDecode.CrmNameValueDecode($v_1)
};
Mscrm.InternalUtilities.Utilities.isIosDevice = function() { return Xrm.Internal.isIosDevice() };
Mscrm.InternalUtilities.Utilities.isRefreshForm = function() {
    var $v_0 = window.self._IsRefreshForm;
    return !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_0) && "1" === $v_0
};
Mscrm.InternalUtilities.Utilities.isTurboForm = function() {
    var $v_0 = window.self.IsTurboForm;
    return Mscrm.InternalUtilities.JSTypes.isNull($v_0) ? false : $v_0
};
Mscrm.InternalUtilities.Utilities.isHighContrastEnabled = function() {
    var $v_0 = window.self._highContrastEnabled;
    return Mscrm.InternalUtilities.JSTypes.isNull($v_0) ? false : $v_0
};
Mscrm.InternalUtilities.Utilities.enforceStateTransitions = function(entityName) {
    var $v_0 = Xrm.Page.context.client.getClient() == Xrm.ClientName.mobile, $v_1 = false;
    if ($v_0) $v_1 = Xrm.Utility.areStateTransitionsEnforced(entityName);
    else {
        var $v_2 = window.self._EnforceStateTransitions;
        $v_1 = !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_2) && $v_2 === "1"
    }
    return $v_1
};
Mscrm.InternalUtilities.Utilities.isIE10OrLower = function() {
    return Sys.Browser.agent === Sys.Browser.InternetExplorer && Sys.Browser.version <= 10
};
Mscrm.InternalUtilities.Utilities.isCurrentKMParature = function() {
    var $v_0 = window.self.IsCurrentKMParature;
    return Mscrm.InternalUtilities.JSTypes.isNull($v_0) ? true : $v_0
};
Mscrm.InternalUtilities.Utilities.isParatureKnowledgebaseVisable = function() {
    var $v_0 = window.self.IsParatureKnowledgebaseVisable;
    return Mscrm.InternalUtilities.JSTypes.isNull($v_0) ? true : $v_0
};
Mscrm.InternalUtilities.ProductStructureType = function() {};
Mscrm.InternalUtilities.ProductStatusCode = function() {};
Mscrm.InternalUtilities.ProductStateCode = function() {};
Mscrm.InternalUtilities.ProductStateCodeDescription = function() {};
Mscrm.InternalUtilities.Enums = function() {};
Mscrm.InternalUtilities.Enums.SyncErrorState = function() {};
Mscrm.InternalUtilities.Enums.SyncErrorState.prototype = { active: 0, resolved: 1 };
Mscrm.InternalUtilities.Enums.SyncErrorState.registerEnum("Mscrm.InternalUtilities.Enums.SyncErrorState", false);
Mscrm.InternalUtilities.GridControlType = function() {};
Mscrm.InternalUtilities.OfficeDocumentType = function() {};
Mscrm.InternalUtilities.ProgressBar = function() {};
Type.registerNamespace("Mscrm.GlobalImported");
Mscrm.GlobalImported.CrmUri = function() {};
Mscrm.GlobalImported.CrmUri.create = function(uri) { return Mscrm.CrmUri.create(uri) };
Mscrm.GlobalImported.CrmUri.prototype = {
    get_includeContextInPath: function() { return false },
    set_includeContextInPath: function(value) { return value }
};
Mscrm.InternalUtilities._Script.registerClass("Mscrm.InternalUtilities._Script");
Mscrm.InternalUtilities._String.registerClass("Mscrm.InternalUtilities._String");
Mscrm.InternalUtilities.EntityNames.registerClass("Mscrm.InternalUtilities.EntityNames");
Mscrm.InternalUtilities.EntityTypeCode.registerClass("Mscrm.InternalUtilities.EntityTypeCode");
Mscrm.InternalUtilities.FullNameGenerator.registerClass("Mscrm.InternalUtilities.FullNameGenerator");
Mscrm.InternalUtilities.JSTypes.registerClass("Mscrm.InternalUtilities.JSTypes");
Mscrm.InternalUtilities.TypeNames.registerClass("Mscrm.InternalUtilities.TypeNames");
Mscrm.InternalUtilities.Utilities.registerClass("Mscrm.InternalUtilities.Utilities");
Mscrm.InternalUtilities.ProductStructureType.registerClass("Mscrm.InternalUtilities.ProductStructureType");
Mscrm.InternalUtilities.ProductStatusCode.registerClass("Mscrm.InternalUtilities.ProductStatusCode");
Mscrm.InternalUtilities.ProductStateCode.registerClass("Mscrm.InternalUtilities.ProductStateCode");
Mscrm.InternalUtilities.ProductStateCodeDescription
    .registerClass("Mscrm.InternalUtilities.ProductStateCodeDescription");
Mscrm.InternalUtilities.Enums.registerClass("Mscrm.InternalUtilities.Enums");
Mscrm.InternalUtilities.GridControlType.registerClass("Mscrm.InternalUtilities.GridControlType");
Mscrm.InternalUtilities.OfficeDocumentType.registerClass("Mscrm.InternalUtilities.OfficeDocumentType");
Mscrm.InternalUtilities.ProgressBar.registerClass("Mscrm.InternalUtilities.ProgressBar");
Mscrm.GlobalImported.CrmUri.registerClass("Mscrm.GlobalImported.CrmUri");
Mscrm.InternalUtilities._String.Empty = "";
Mscrm.InternalUtilities._String.$1 = new RegExp("[\x0a\x0d]+");
Mscrm.InternalUtilities.EntityNames.None = "none";
Mscrm.InternalUtilities.EntityNames.Account = "account";
Mscrm.InternalUtilities.EntityNames.ActionCard = "actioncard";
Mscrm.InternalUtilities.EntityNames.SyncError = "syncerror";
Mscrm.InternalUtilities.EntityNames.AccountLeads = "accountleads";
Mscrm.InternalUtilities.EntityNames.ActivityMimeAttachment = "activitymimeattachment";
Mscrm.InternalUtilities.EntityNames.ActivityParty = "activityparty";
Mscrm.InternalUtilities.EntityNames.ActivityPointer = "activitypointer";
Mscrm.InternalUtilities.EntityNames.AdvancedSimilarityRule = "advancedsimilarityrule";
Mscrm.InternalUtilities.EntityNames.Annotation = "annotation";
Mscrm.InternalUtilities.EntityNames.AnnualFiscalCalendar = "annualfiscalcalendar";
Mscrm.InternalUtilities.EntityNames.ApplicationFile = "applicationfile";
Mscrm.InternalUtilities.EntityNames.Appointment = "appointment";
Mscrm.InternalUtilities.EntityNames.AsyncOperation = "asyncoperation";
Mscrm.InternalUtilities.EntityNames.Attachment = "attachment";
Mscrm.InternalUtilities.EntityNames.AttributeMap = "attributemap";
Mscrm.InternalUtilities.EntityNames.Audit = "audit";
Mscrm.InternalUtilities.EntityNames.AzureServiceConnection = "azureserviceconnection";
Mscrm.InternalUtilities.EntityNames.BulkDeleteFailure = "bulkdeletefailure";
Mscrm.InternalUtilities.EntityNames.BulkDeleteOperation = "bulkdeleteoperation";
Mscrm.InternalUtilities.EntityNames.BulkOperation = "bulkoperation";
Mscrm.InternalUtilities.EntityNames.BulkOperationLog = "bulkoperationlog";
Mscrm.InternalUtilities.EntityNames.BusinessDataLocalizedLabel = "businessdatalocalizedlabel";
Mscrm.InternalUtilities.EntityNames.BusinessUnit = "businessunit";
Mscrm.InternalUtilities.EntityNames.BusinessUnitMap = "businessunitmap";
Mscrm.InternalUtilities.EntityNames.BusinessUnitNewsArticle = "businessunitnewsarticle";
Mscrm.InternalUtilities.EntityNames.Calendar = "calendar";
Mscrm.InternalUtilities.EntityNames.CalendarRule = "calendarrule";
Mscrm.InternalUtilities.EntityNames.Campaign = "campaign";
Mscrm.InternalUtilities.EntityNames.CampaignActivity = "campaignactivity";
Mscrm.InternalUtilities.EntityNames.CampaignActivityItem = "campaignactivityitem";
Mscrm.InternalUtilities.EntityNames.CampaignItem = "campaignitem";
Mscrm.InternalUtilities.EntityNames.CampaignResponse = "campaignresponse";
Mscrm.InternalUtilities.EntityNames.ChannelProperty = "channelproperty";
Mscrm.InternalUtilities.EntityNames.ChannelPropertyGroup = "channelpropertygroup";
Mscrm.InternalUtilities.EntityNames.ClientUpdate = "clientupdate";
Mscrm.InternalUtilities.EntityNames.ColumnMapping = "columnmapping";
Mscrm.InternalUtilities.EntityNames.Commitment = "commitment";
Mscrm.InternalUtilities.EntityNames.Competitor = "competitor";
Mscrm.InternalUtilities.EntityNames.CompetitorAddress = "competitoraddress";
Mscrm.InternalUtilities.EntityNames.CompetitorProduct = "competitorproduct";
Mscrm.InternalUtilities.EntityNames.CompetitorSalesLiterature = "competitorsalesliterature";
Mscrm.InternalUtilities.EntityNames.ComplexControl = "complexcontrol";
Mscrm.InternalUtilities.EntityNames.Connection = "connection";
Mscrm.InternalUtilities.EntityNames.ConnectionRole = "connectionrole";
Mscrm.InternalUtilities.EntityNames.ConnectionRoleAssociation = "connectionroleassociation";
Mscrm.InternalUtilities.EntityNames.ConnectionRoleObjectTypeCode = "connectionroleobjecttypecode";
Mscrm.InternalUtilities.EntityNames.ConvertRule = "convertrule";
Mscrm.InternalUtilities.EntityNames.ConvertRuleItem = "convertruleitem";
Mscrm.InternalUtilities.EntityNames.ConstraintBasedGroup = "constraintbasedgroup";
Mscrm.InternalUtilities.EntityNames.Contact = "contact";
Mscrm.InternalUtilities.EntityNames.ContactInvoices = "contactinvoices";
Mscrm.InternalUtilities.EntityNames.ContactLeads = "contactleads";
Mscrm.InternalUtilities.EntityNames.ContactOrders = "contactorders";
Mscrm.InternalUtilities.EntityNames.ContactQuotes = "contactquotes";
Mscrm.InternalUtilities.EntityNames.Contract = "contract";
Mscrm.InternalUtilities.EntityNames.ContractDetail = "contractdetail";
Mscrm.InternalUtilities.EntityNames.ContractTemplate = "contracttemplate";
Mscrm.InternalUtilities.EntityNames.CustomerAddress = "customeraddress";
Mscrm.InternalUtilities.EntityNames.CustomerOpportunityRole = "customeropportunityrole";
Mscrm.InternalUtilities.EntityNames.CustomerRelationship = "customerrelationship";
Mscrm.InternalUtilities.EntityNames.Dependency = "dependency";
Mscrm.InternalUtilities.EntityNames.DependencyNode = "dependencynode";
Mscrm.InternalUtilities.EntityNames.Discount = "discount";
Mscrm.InternalUtilities.EntityNames.DiscountType = "discounttype";
Mscrm.InternalUtilities.EntityNames.DisplayString = "displaystring";
Mscrm.InternalUtilities.EntityNames.DisplayStringMap = "displaystringmap";
Mscrm.InternalUtilities.EntityNames.DocumentIndex = "documentindex";
Mscrm.InternalUtilities.EntityNames.DocumentTemplate = "documenttemplate";
Mscrm.InternalUtilities.EntityNames.DuplicateRecord = "duplicaterecord";
Mscrm.InternalUtilities.EntityNames.DuplicateRule = "duplicaterule";
Mscrm.InternalUtilities.EntityNames.DuplicateRuleCondition = "duplicaterulecondition";
Mscrm.InternalUtilities.EntityNames.DynamicProperty = "dynamicproperty";
Mscrm.InternalUtilities.EntityNames.DelveActionHub = "delveactionhub";
Mscrm.InternalUtilities.EntityNames.DynamicPropertyOptionSetItem = "dynamicpropertyoptionsetitem";
Mscrm.InternalUtilities.EntityNames.Email = "email";
Mscrm.InternalUtilities.EntityNames.EmailHash = "emailhash";
Mscrm.InternalUtilities.EntityNames.EmailSearch = "emailsearch";
Mscrm.InternalUtilities.EntityNames.EmailServerProfile = "emailserverprofile";
Mscrm.InternalUtilities.EntityNames.EmailSignature = "emailsignature";
Mscrm.InternalUtilities.EntityNames.Entitlement = "entitlement";
Mscrm.InternalUtilities.EntityNames.EntityMap = "entitymap";
Mscrm.InternalUtilities.EntityNames.Equipment = "equipment";
Mscrm.InternalUtilities.EntityNames.EntitlementChannel = "entitlementchannel";
Mscrm.InternalUtilities.EntityNames.EntitlementTemplateChannel = "entitlementtemplatechannel";
Mscrm.InternalUtilities.EntityNames.Fax = "fax";
Mscrm.InternalUtilities.EntityNames.FieldPermission = "fieldpermission";
Mscrm.InternalUtilities.EntityNames.FieldSecurityProfile = "fieldsecurityprofile";
Mscrm.InternalUtilities.EntityNames.FilterTemplate = "filtertemplate";
Mscrm.InternalUtilities.EntityNames.FixedMonthlyFiscalCalendar = "fixedmonthlyfiscalcalendar";
Mscrm.InternalUtilities.EntityNames.Goal = "goal";
Mscrm.InternalUtilities.EntityNames.GoalRollupQuery = "goalrollupquery";
Mscrm.InternalUtilities.EntityNames.Import = "import";
Mscrm.InternalUtilities.EntityNames.ImportData = "importdata";
Mscrm.InternalUtilities.EntityNames.ImportEntityMapping = "importentitymapping";
Mscrm.InternalUtilities.EntityNames.ImportFile = "importfile";
Mscrm.InternalUtilities.EntityNames.ImportJob = "importjob";
Mscrm.InternalUtilities.EntityNames.ImportLog = "importlog";
Mscrm.InternalUtilities.EntityNames.ImportMap = "importmap";
Mscrm.InternalUtilities.EntityNames.Incident = "incident";
Mscrm.InternalUtilities.EntityNames.IncidentResolution = "incidentresolution";
Mscrm.InternalUtilities.EntityNames.IntegrationStatus = "integrationstatus";
Mscrm.InternalUtilities.EntityNames.InternalAddress = "internaladdress";
Mscrm.InternalUtilities.EntityNames.InterProcessLock = "interprocesslock";
Mscrm.InternalUtilities.EntityNames.InvalidDependency = "invaliddependency";
Mscrm.InternalUtilities.EntityNames.Invoice = "invoice";
Mscrm.InternalUtilities.EntityNames.InvoiceDetail = "invoicedetail";
Mscrm.InternalUtilities.EntityNames.IsvConfig = "isvconfig";
Mscrm.InternalUtilities.EntityNames.KbArticle = "kbarticle";
Mscrm.InternalUtilities.EntityNames.KbArticleComment = "kbarticlecomment";
Mscrm.InternalUtilities.EntityNames.KbArticleTemplate = "kbarticletemplate";
Mscrm.InternalUtilities.EntityNames.NewKbArticle = "newkbarticle";
Mscrm.InternalUtilities.EntityNames.KnowledgeArticle = "knowledgearticle";
Mscrm.InternalUtilities.EntityNames.KnowledgeArticlesCategories = "knowledgearticlescategories";
Mscrm.InternalUtilities.EntityNames.KnowledgeArticleIncident = "knowledgearticleincident";
Mscrm.InternalUtilities.EntityNames.KnowledgeArticleViews = "knowledgearticleviews";
Mscrm.InternalUtilities.EntityNames.KnowledgeSearchModel = "knowledgesearchmodel";
Mscrm.InternalUtilities.EntityNames.LanguageLocale = "languagelocale";
Mscrm.InternalUtilities.EntityNames.Lead = "lead";
Mscrm.InternalUtilities.EntityNames.LeadAddress = "leadaddress";
Mscrm.InternalUtilities.EntityNames.LeadCompetitors = "leadcompetitors";
Mscrm.InternalUtilities.EntityNames.LeadProduct = "leadproduct";
Mscrm.InternalUtilities.EntityNames.Letter = "letter";
Mscrm.InternalUtilities.EntityNames.License = "license";
Mscrm.InternalUtilities.EntityNames.List = "list";
Mscrm.InternalUtilities.EntityNames.ListMember = "listmember";
Mscrm.InternalUtilities.EntityNames.LookUpMapping = "lookupmapping";
Mscrm.InternalUtilities.EntityNames.Mailbox = "mailbox";
Mscrm.InternalUtilities.EntityNames.MailMergeTemplate = "mailmergetemplate";
Mscrm.InternalUtilities.EntityNames.Metric = "metric";
Mscrm.InternalUtilities.EntityNames.MobileOfflineProfile = "mobileofflineprofile";
Mscrm.InternalUtilities.EntityNames.MobileOfflineProfileItem = "mobileofflineprofileitem";
Mscrm.InternalUtilities.EntityNames.MonthlyFiscalCalendar = "monthlyfiscalcalendar";
Mscrm.InternalUtilities.EntityNames.Notification = "notification";
Mscrm.InternalUtilities.EntityNames.Notes = "annotation";
Mscrm.InternalUtilities.EntityNames.OfficeDocument = "officedocument";
Mscrm.InternalUtilities.EntityNames.Opportunity = "opportunity";
Mscrm.InternalUtilities.EntityNames.OpportunityClose = "opportunityclose";
Mscrm.InternalUtilities.EntityNames.OpportunityCompetitors = "opportunitycompetitors";
Mscrm.InternalUtilities.EntityNames.OpportunityProduct = "opportunityproduct";
Mscrm.InternalUtilities.EntityNames.OrderClose = "orderclose";
Mscrm.InternalUtilities.EntityNames.Organization = "organization";
Mscrm.InternalUtilities.EntityNames.OrganizationStatistic = "organizationstatistic";
Mscrm.InternalUtilities.EntityNames.OrganizationUI = "organizationui";
Mscrm.InternalUtilities.EntityNames.Owner = "owner";
Mscrm.InternalUtilities.EntityNames.OwnerMapping = "ownermapping";
Mscrm.InternalUtilities.EntityNames.PersonalDocumentTemplate = "personaldocumenttemplate";
Mscrm.InternalUtilities.EntityNames.PhoneCall = "phonecall";
Mscrm.InternalUtilities.EntityNames.PickListMapping = "picklistmapping";
Mscrm.InternalUtilities.EntityNames.PluginAssembly = "pluginassembly";
Mscrm.InternalUtilities.EntityNames.PluginType = "plugintype";
Mscrm.InternalUtilities.EntityNames.PluginTypeStatistic = "plugintypestatistic";
Mscrm.InternalUtilities.EntityNames.PluginTraceLog = "plugintracelog";
Mscrm.InternalUtilities.EntityNames.Post = "post";
Mscrm.InternalUtilities.EntityNames.PostComment = "postcomment";
Mscrm.InternalUtilities.EntityNames.PostFollow = "postfollow";
Mscrm.InternalUtilities.EntityNames.PostLike = "postlike";
Mscrm.InternalUtilities.EntityNames.PostRegarding = "postregarding";
Mscrm.InternalUtilities.EntityNames.PostRole = "postrole";
Mscrm.InternalUtilities.EntityNames.PriceLevel = "pricelevel";
Mscrm.InternalUtilities.EntityNames.PrincipalAttributeAccessMap = "principalattributeaccessmap";
Mscrm.InternalUtilities.EntityNames.PrincipalEntityMap = "principalentitymap";
Mscrm.InternalUtilities.EntityNames.PrincipalObjectAccess = "principalobjectaccess";
Mscrm.InternalUtilities.EntityNames.PrincipalObjectAccessReadSnapshot = "principalobjectaccessreadsnapshot";
Mscrm.InternalUtilities.EntityNames.PrincipalObjectAttributeAccess = "principalobjectattributeaccess";
Mscrm.InternalUtilities.EntityNames.Privilege = "privilege";
Mscrm.InternalUtilities.EntityNames.PrivilegeObjectTypeCodes = "privilegeobjecttypecodes";
Mscrm.InternalUtilities.EntityNames.ChannelAccessProfileEntityAccessLevel = "channelaccessprofileentityaccesslevel";
Mscrm.InternalUtilities.EntityNames.ProcessSession = "processsession";
Mscrm.InternalUtilities.EntityNames.Product = "product";
Mscrm.InternalUtilities.EntityNames.ProductAssociation = "productassociation";
Mscrm.InternalUtilities.EntityNames.ProductPriceLevel = "productpricelevel";
Mscrm.InternalUtilities.EntityNames.ProductSalesLiterature = "productsalesliterature";
Mscrm.InternalUtilities.EntityNames.ProductSubstitute = "productsubstitute";
Mscrm.InternalUtilities.EntityNames.Publisher = "publisher";
Mscrm.InternalUtilities.EntityNames.PublisherAddress = "publisheraddress";
Mscrm.InternalUtilities.EntityNames.QuarterlyFiscalCalendar = "quarterlyfiscalcalendar";
Mscrm.InternalUtilities.EntityNames.Queue = "queue";
Mscrm.InternalUtilities.EntityNames.QueueItem = "queueitem";
Mscrm.InternalUtilities.EntityNames.Quote = "quote";
Mscrm.InternalUtilities.EntityNames.QuoteClose = "quoteclose";
Mscrm.InternalUtilities.EntityNames.QuoteDetail = "quotedetail";
Mscrm.InternalUtilities.EntityNames.RecommendationModel = "recommendationmodel";
Mscrm.InternalUtilities.EntityNames.RecommendationModelVersion = "recommendationmodelversion";
Mscrm.InternalUtilities.EntityNames.RecordCountSnapshot = "recordcountsnapshot";
Mscrm.InternalUtilities.EntityNames.RecurrenceRule = "recurrencerule";
Mscrm.InternalUtilities.EntityNames.RecurringAppointmentMaster = "recurringappointmentmaster";
Mscrm.InternalUtilities.EntityNames.RelationshipRole = "relationshiprole";
Mscrm.InternalUtilities.EntityNames.RelationshipRoleMap = "relationshiprolemap";
Mscrm.InternalUtilities.EntityNames.ReplicationBacklog = "replicationbacklog";
Mscrm.InternalUtilities.EntityNames.Report = "report";
Mscrm.InternalUtilities.EntityNames.ReportCategory = "reportcategory";
Mscrm.InternalUtilities.EntityNames.ReportEntity = "reportentity";
Mscrm.InternalUtilities.EntityNames.ReportLink = "reportlink";
Mscrm.InternalUtilities.EntityNames.ReportVisibility = "reportvisibility";
Mscrm.InternalUtilities.EntityNames.Resource = "resource";
Mscrm.InternalUtilities.EntityNames.ResourceGroup = "resourcegroup";
Mscrm.InternalUtilities.EntityNames.ResourceGroupExpansion = "resourcegroupexpansion";
Mscrm.InternalUtilities.EntityNames.ResourceSpec = "resourcespec";
Mscrm.InternalUtilities.EntityNames.RibbonCommand = "ribboncommand";
Mscrm.InternalUtilities.EntityNames.RibbonContextGroup = "ribboncontextgroup";
Mscrm.InternalUtilities.EntityNames.RibbonCustomization = "ribboncustomization";
Mscrm.InternalUtilities.EntityNames.RibbonDiff = "ribbondiff";
Mscrm.InternalUtilities.EntityNames.RibbonRule = "ribbonrule";
Mscrm.InternalUtilities.EntityNames.RibbonTabToCommandMap = "ribbontabtocommandmap";
Mscrm.InternalUtilities.EntityNames.Role = "role";
Mscrm.InternalUtilities.EntityNames.RolePrivileges = "roleprivileges";
Mscrm.InternalUtilities.EntityNames.RoleTemplate = "roletemplate";
Mscrm.InternalUtilities.EntityNames.RoleTemplatePrivileges = "roletemplateprivileges";
Mscrm.InternalUtilities.EntityNames.RollupField = "rollupfield";
Mscrm.InternalUtilities.EntityNames.SalesLiterature = "salesliterature";
Mscrm.InternalUtilities.EntityNames.SalesLiteratureItem = "salesliteratureitem";
Mscrm.InternalUtilities.EntityNames.SalesOrder = "salesorder";
Mscrm.InternalUtilities.EntityNames.SalesOrderDetail = "salesorderdetail";
Mscrm.InternalUtilities.EntityNames.SalesProcessInstance = "salesprocessinstance";
Mscrm.InternalUtilities.EntityNames.SavedQuery = "savedquery";
Mscrm.InternalUtilities.EntityNames.SavedQueryVisualization = "savedqueryvisualization";
Mscrm.InternalUtilities.EntityNames.SdkMessage = "sdkmessage";
Mscrm.InternalUtilities.EntityNames.SdkMessageFilter = "sdkmessagefilter";
Mscrm.InternalUtilities.EntityNames.SdkMessagePair = "sdkmessagepair";
Mscrm.InternalUtilities.EntityNames.SdkMessageProcessingStep = "sdkmessageprocessingstep";
Mscrm.InternalUtilities.EntityNames.SdkMessageProcessingStepImage = "sdkmessageprocessingstepimage";
Mscrm.InternalUtilities.EntityNames.SdkMessageProcessingStepSecureConfig = "sdkmessageprocessingstepsecureconfig";
Mscrm.InternalUtilities.EntityNames.SdkMessageRequest = "sdkmessagerequest";
Mscrm.InternalUtilities.EntityNames.SdkMessageRequestField = "sdkmessagerequestfield";
Mscrm.InternalUtilities.EntityNames.SdkMessageResponse = "sdkmessageresponse";
Mscrm.InternalUtilities.EntityNames.SdkMessageResponseField = "sdkmessageresponsefield";
Mscrm.InternalUtilities.EntityNames.SemiAnnualFiscalCalendar = "semiannualfiscalcalendar";
Mscrm.InternalUtilities.EntityNames.Service = "service";
Mscrm.InternalUtilities.EntityNames.ServiceAppointment = "serviceappointment";
Mscrm.InternalUtilities.EntityNames.ServiceContractContacts = "servicecontractcontacts";
Mscrm.InternalUtilities.EntityNames.ServiceEndpoint = "serviceendpoint";
Mscrm.InternalUtilities.EntityNames.SharePointDocumentLocation = "sharepointdocumentlocation";
Mscrm.InternalUtilities.EntityNames.SharePointData = "sharepointdata";
Mscrm.InternalUtilities.EntityNames.SharePointDocument = "sharepointdocument";
Mscrm.InternalUtilities.EntityNames.SharePointSite = "sharepointsite";
Mscrm.InternalUtilities.EntityNames.Site = "site";
Mscrm.InternalUtilities.EntityNames.SiteMap = "sitemap";
Mscrm.InternalUtilities.EntityNames.Solution = "solution";
Mscrm.InternalUtilities.EntityNames.SocialActivity = "socialactivity";
Mscrm.InternalUtilities.EntityNames.SocialProfile = "socialprofile";
Mscrm.InternalUtilities.EntityNames.SolutionComponent = "solutioncomponent";
Mscrm.InternalUtilities.EntityNames.StatusMap = "statusmap";
Mscrm.InternalUtilities.EntityNames.StringMap = "stringmap";
Mscrm.InternalUtilities.EntityNames.Subject = "subject";
Mscrm.InternalUtilities.EntityNames.Subscription = "subscription";
Mscrm.InternalUtilities.EntityNames.SubscriptionClients = "subscriptionclients";
Mscrm.InternalUtilities.EntityNames.SubscriptionManuallyTrackedObject = "subscriptionmanuallytrackedobject";
Mscrm.InternalUtilities.EntityNames.SubscriptionSyncInfo = "subscriptionsyncinfo";
Mscrm.InternalUtilities.EntityNames.SubscriptionTrackingDeletedObject = "subscriptiontrackingdeletedobject";
Mscrm.InternalUtilities.EntityNames.SystemForm = "systemform";
Mscrm.InternalUtilities.EntityNames.SystemUser = "systemuser";
Mscrm.InternalUtilities.EntityNames.Position = "position";
Mscrm.InternalUtilities.EntityNames.SystemUserBusinessUnitEntityMap = "systemuserbusinessunitentitymap";
Mscrm.InternalUtilities.EntityNames.SystemUserLicenses = "systemuserlicenses";
Mscrm.InternalUtilities.EntityNames.SystemUserPrincipals = "systemuserprincipals";
Mscrm.InternalUtilities.EntityNames.SystemUserProfiles = "systemuserprofiles";
Mscrm.InternalUtilities.EntityNames.SystemUserRoles = "systemuserroles";
Mscrm.InternalUtilities.EntityNames.Task = "task";
Mscrm.InternalUtilities.EntityNames.Team = "team";
Mscrm.InternalUtilities.EntityNames.TeamMembership = "teammembership";
Mscrm.InternalUtilities.EntityNames.TeamProfiles = "teamprofiles";
Mscrm.InternalUtilities.EntityNames.TeamRoles = "teamroles";
Mscrm.InternalUtilities.EntityNames.TeamTemplate = "teamtemplate";
Mscrm.InternalUtilities.EntityNames.Template = "template";
Mscrm.InternalUtilities.EntityNames.Territory = "territory";
Mscrm.InternalUtilities.EntityNames.Theme = "theme";
Mscrm.InternalUtilities.EntityNames.TimeZoneDefinition = "timezonedefinition";
Mscrm.InternalUtilities.EntityNames.TimeZoneLocalizedName = "timezonelocalizedname";
Mscrm.InternalUtilities.EntityNames.TimeZoneRule = "timezonerule";
Mscrm.InternalUtilities.EntityNames.TopicModel = "topicmodel";
Mscrm.InternalUtilities.EntityNames.TransactionCurrency = "transactioncurrency";
Mscrm.InternalUtilities.EntityNames.TransformationMapping = "transformationmapping";
Mscrm.InternalUtilities.EntityNames.TransformationParameterMapping = "transformationparametermapping";
Mscrm.InternalUtilities.EntityNames.UnresolvedAddress = "unresolvedaddress";
Mscrm.InternalUtilities.EntityNames.UoM = "uom";
Mscrm.InternalUtilities.EntityNames.UoMSchedule = "uomschedule";
Mscrm.InternalUtilities.EntityNames.UserEntityInstanceData = "userentityinstancedata";
Mscrm.InternalUtilities.EntityNames.UserEntityUISettings = "userentityuisettings";
Mscrm.InternalUtilities.EntityNames.UserFiscalCalendar = "userfiscalcalendar";
Mscrm.InternalUtilities.EntityNames.UserForm = "userform";
Mscrm.InternalUtilities.EntityNames.UserQuery = "userquery";
Mscrm.InternalUtilities.EntityNames.UserQueryVisualization = "userqueryvisualization";
Mscrm.InternalUtilities.EntityNames.UserSettings = "usersettings";
Mscrm.InternalUtilities.EntityNames.WebResource = "webresource";
Mscrm.InternalUtilities.EntityNames.WebWizard = "webwizard";
Mscrm.InternalUtilities.EntityNames.WizardAccessPrivilege = "wizardaccessprivilege";
Mscrm.InternalUtilities.EntityNames.WizardPage = "wizardpage";
Mscrm.InternalUtilities.EntityNames.Workflow = "workflow";
Mscrm.InternalUtilities.EntityNames.WorkflowDependency = "workflowdependency";
Mscrm.InternalUtilities.EntityNames.WorkflowLog = "workflowlog";
Mscrm.InternalUtilities.EntityNames.WorkflowWaitSubscription = "workflowwaitsubscription";
Mscrm.InternalUtilities.EntityNames.RoutingRule = "routingrule";
Mscrm.InternalUtilities.EntityNames.RoutingRuleItem = "routingruleitem";
Mscrm.InternalUtilities.EntityNames.HierarchyRule = "hierarchyrule";
Mscrm.InternalUtilities.EntityNames.SLA = "sla";
Mscrm.InternalUtilities.EntityNames.SLAItem = "slaitem";
Mscrm.InternalUtilities.EntityNames.SLAKPIInstance = "slakpiinstance";
Mscrm.InternalUtilities.EntityNames.DataPerformance = "dataperformance";
Mscrm.InternalUtilities.EntityNames.ChannelAccessProfileRule = "channelaccessprofilerule";
Mscrm.InternalUtilities.EntityNames.ChannelAccessProfileRuleItem = "channelaccessprofileruleitem";
Mscrm.InternalUtilities.EntityNames.ExternalParty = "externalparty";
Mscrm.InternalUtilities.EntityNames.ExternalPartyItem = "externalpartyitem";
Mscrm.InternalUtilities.EntityNames.Category = "category";
Mscrm.InternalUtilities.EntityTypeCode.None = 0;
Mscrm.InternalUtilities.EntityTypeCode.Account = 1;
Mscrm.InternalUtilities.EntityTypeCode.AccountLeads = 16;
Mscrm.InternalUtilities.EntityTypeCode.ActionCard = 9962;
Mscrm.InternalUtilities.EntityTypeCode.ActivityMimeAttachment = 1001;
Mscrm.InternalUtilities.EntityTypeCode.ActivityParty = 135;
Mscrm.InternalUtilities.EntityTypeCode.ActivityPointer = 4200;
Mscrm.InternalUtilities.EntityTypeCode.AdvancedSimilarityRule = 9949;
Mscrm.InternalUtilities.EntityTypeCode.Annotation = 5;
Mscrm.InternalUtilities.EntityTypeCode.AnnualFiscalCalendar = 2e3;
Mscrm.InternalUtilities.EntityTypeCode.ApplicationFile = 4707;
Mscrm.InternalUtilities.EntityTypeCode.Appointment = 4201;
Mscrm.InternalUtilities.EntityTypeCode.AppWorkflowInstance = 9005;
Mscrm.InternalUtilities.EntityTypeCode.AsyncOperation = 4700;
Mscrm.InternalUtilities.EntityTypeCode.Attachment = 1002;
Mscrm.InternalUtilities.EntityTypeCode.AttributeMap = 4601;
Mscrm.InternalUtilities.EntityTypeCode.Audit = 4567;
Mscrm.InternalUtilities.EntityTypeCode.BulkDeleteFailure = 4425;
Mscrm.InternalUtilities.EntityTypeCode.BulkDeleteOperation = 4424;
Mscrm.InternalUtilities.EntityTypeCode.BulkOperation = 4406;
Mscrm.InternalUtilities.EntityTypeCode.BulkOperationLog = 4405;
Mscrm.InternalUtilities.EntityTypeCode.BusinessUnit = 10;
Mscrm.InternalUtilities.EntityTypeCode.BusinessUnitMap = 6;
Mscrm.InternalUtilities.EntityTypeCode.BusinessUnitNewsArticle = 132;
Mscrm.InternalUtilities.EntityTypeCode.Calendar = 4003;
Mscrm.InternalUtilities.EntityTypeCode.CalendarRule = 4004;
Mscrm.InternalUtilities.EntityTypeCode.Campaign = 4400;
Mscrm.InternalUtilities.EntityTypeCode.CampaignActivity = 4402;
Mscrm.InternalUtilities.EntityTypeCode.CampaignActivityItem = 4404;
Mscrm.InternalUtilities.EntityTypeCode.CampaignItem = 4403;
Mscrm.InternalUtilities.EntityTypeCode.CampaignResponse = 4401;
Mscrm.InternalUtilities.EntityTypeCode.ChannelAccessProfile = 3005;
Mscrm.InternalUtilities.EntityTypeCode.ChannelAccessProfileEntityAccessLevel = 9404;
Mscrm.InternalUtilities.EntityTypeCode.ClientUpdate = 36;
Mscrm.InternalUtilities.EntityTypeCode.ColumnMapping = 4417;
Mscrm.InternalUtilities.EntityTypeCode.Commitment = 4215;
Mscrm.InternalUtilities.EntityTypeCode.Competitor = 123;
Mscrm.InternalUtilities.EntityTypeCode.CompetitorAddress = 1004;
Mscrm.InternalUtilities.EntityTypeCode.CompetitorProduct = 1006;
Mscrm.InternalUtilities.EntityTypeCode.CompetitorSalesLiterature = 26;
Mscrm.InternalUtilities.EntityTypeCode.ComplexControl = 9650;
Mscrm.InternalUtilities.EntityTypeCode.Connection = 3234;
Mscrm.InternalUtilities.EntityTypeCode.ConnectionRole = 3231;
Mscrm.InternalUtilities.EntityTypeCode.ConnectionRoleAssociation = 3232;
Mscrm.InternalUtilities.EntityTypeCode.ConnectionRoleObjectTypeCode = 3233;
Mscrm.InternalUtilities.EntityTypeCode.ConstraintBasedGroup = 4007;
Mscrm.InternalUtilities.EntityTypeCode.Contact = 2;
Mscrm.InternalUtilities.EntityTypeCode.ContactInvoices = 17;
Mscrm.InternalUtilities.EntityTypeCode.ContactLeads = 22;
Mscrm.InternalUtilities.EntityTypeCode.ContactOrders = 19;
Mscrm.InternalUtilities.EntityTypeCode.ContactQuotes = 18;
Mscrm.InternalUtilities.EntityTypeCode.Contract = 1010;
Mscrm.InternalUtilities.EntityTypeCode.ContractDetail = 1011;
Mscrm.InternalUtilities.EntityTypeCode.ContractTemplate = 2011;
Mscrm.InternalUtilities.EntityTypeCode.ConvertRule = 9300;
Mscrm.InternalUtilities.EntityTypeCode.ConvertRuleItem = 9301;
Mscrm.InternalUtilities.EntityTypeCode.CustomerAddress = 1071;
Mscrm.InternalUtilities.EntityTypeCode.CustomerOpportunityRole = 4503;
Mscrm.InternalUtilities.EntityTypeCode.CustomerRelationship = 4502;
Mscrm.InternalUtilities.EntityTypeCode.Dependency = 7105;
Mscrm.InternalUtilities.EntityTypeCode.DependencyNode = 7106;
Mscrm.InternalUtilities.EntityTypeCode.DelveActionHub = 9961;
Mscrm.InternalUtilities.EntityTypeCode.Discount = 1013;
Mscrm.InternalUtilities.EntityTypeCode.DiscountType = 1080;
Mscrm.InternalUtilities.EntityTypeCode.DisplayString = 4102;
Mscrm.InternalUtilities.EntityTypeCode.DisplayStringMap = 4101;
Mscrm.InternalUtilities.EntityTypeCode.DocumentIndex = 126;
Mscrm.InternalUtilities.EntityTypeCode.DocumentTemplate = 9940;
Mscrm.InternalUtilities.EntityTypeCode.DuplicateRecord = 4415;
Mscrm.InternalUtilities.EntityTypeCode.DuplicateRule = 4414;
Mscrm.InternalUtilities.EntityTypeCode.DuplicateRuleCondition = 4416;
Mscrm.InternalUtilities.EntityTypeCode.DynamicProperty = 1048;
Mscrm.InternalUtilities.EntityTypeCode.DynamicPropertyAssociation = 1235;
Mscrm.InternalUtilities.EntityTypeCode.DynamicPropertyInstance = 1333;
Mscrm.InternalUtilities.EntityTypeCode.Email = 4202;
Mscrm.InternalUtilities.EntityTypeCode.SocialActivity = 4216;
Mscrm.InternalUtilities.EntityTypeCode.EmailHash = 4023;
Mscrm.InternalUtilities.EntityTypeCode.EmailSearch = 4299;
Mscrm.InternalUtilities.EntityTypeCode.Entitlement = 9700;
Mscrm.InternalUtilities.EntityTypeCode.EntitlementChannel = 9701;
Mscrm.InternalUtilities.EntityTypeCode.Entity = 9801;
Mscrm.InternalUtilities.EntityTypeCode.RoutingRule = 8181;
Mscrm.InternalUtilities.EntityTypeCode.RoutingRuleItem = 8199;
Mscrm.InternalUtilities.EntityTypeCode.ChannelAccessProfileRule = 9400;
Mscrm.InternalUtilities.EntityTypeCode.ChannelAccessProfileRuleItem = 9401;
Mscrm.InternalUtilities.EntityTypeCode.SLA = 9750;
Mscrm.InternalUtilities.EntityTypeCode.SLAItem = 9751;
Mscrm.InternalUtilities.EntityTypeCode.SLAKPIInstance = 9752;
Mscrm.InternalUtilities.EntityTypeCode.EntitlementTemplate = 9702;
Mscrm.InternalUtilities.EntityTypeCode.EntitlementTemplateChannel = 9703;
Mscrm.InternalUtilities.EntityTypeCode.EntityMap = 4600;
Mscrm.InternalUtilities.EntityTypeCode.Equipment = 4e3;
Mscrm.InternalUtilities.EntityTypeCode.Fax = 4204;
Mscrm.InternalUtilities.EntityTypeCode.FieldPermission = 1201;
Mscrm.InternalUtilities.EntityTypeCode.FieldSecurityProfile = 1200;
Mscrm.InternalUtilities.EntityTypeCode.FilterTemplate = 30;
Mscrm.InternalUtilities.EntityTypeCode.FixedMonthlyFiscalCalendar = 2004;
Mscrm.InternalUtilities.EntityTypeCode.Goal = 9600;
Mscrm.InternalUtilities.EntityTypeCode.GoalRollupQuery = 9602;
Mscrm.InternalUtilities.EntityTypeCode.Import = 4410;
Mscrm.InternalUtilities.EntityTypeCode.ImportData = 4413;
Mscrm.InternalUtilities.EntityTypeCode.ImportEntityMapping = 4428;
Mscrm.InternalUtilities.EntityTypeCode.ImportFile = 4412;
Mscrm.InternalUtilities.EntityTypeCode.ImportJob = 9107;
Mscrm.InternalUtilities.EntityTypeCode.ImportLog = 4423;
Mscrm.InternalUtilities.EntityTypeCode.ImportMap = 4411;
Mscrm.InternalUtilities.EntityTypeCode.Incident = 112;
Mscrm.InternalUtilities.EntityTypeCode.IncidentKnowledgeBaseRecord = 9931;
Mscrm.InternalUtilities.EntityTypeCode.IncidentResolution = 4206;
Mscrm.InternalUtilities.EntityTypeCode.IntegrationStatus = 3e3;
Mscrm.InternalUtilities.EntityTypeCode.InternalAddress = 1003;
Mscrm.InternalUtilities.EntityTypeCode.InterProcessLock = 4011;
Mscrm.InternalUtilities.EntityTypeCode.InvalidDependency = 7107;
Mscrm.InternalUtilities.EntityTypeCode.Invoice = 1090;
Mscrm.InternalUtilities.EntityTypeCode.InvoiceDetail = 1091;
Mscrm.InternalUtilities.EntityTypeCode.IsvConfig = 4705;
Mscrm.InternalUtilities.EntityTypeCode.KbArticle = 127;
Mscrm.InternalUtilities.EntityTypeCode.KbArticleComment = 1082;
Mscrm.InternalUtilities.EntityTypeCode.KbArticleTemplate = 1016;
Mscrm.InternalUtilities.EntityTypeCode.NewKbArticle = 9202;
Mscrm.InternalUtilities.EntityTypeCode.KnowledgeBaseRecord = 9930;
Mscrm.InternalUtilities.EntityTypeCode.KnowledgeArticle = 9953;
Mscrm.InternalUtilities.EntityTypeCode.KnowledgeArticleIncident = 9954;
Mscrm.InternalUtilities.EntityTypeCode.KnowledgeArticleViews = 9955;
Mscrm.InternalUtilities.EntityTypeCode.KnowledgeArticlesCategories = 9960;
Mscrm.InternalUtilities.EntityTypeCode.KnowledgeSearchModel = 9947;
Mscrm.InternalUtilities.EntityTypeCode.UnresolvedEmailParty = 9206;
Mscrm.InternalUtilities.EntityTypeCode.LanguageLocale = 9957;
Mscrm.InternalUtilities.EntityTypeCode.Lead = 4;
Mscrm.InternalUtilities.EntityTypeCode.LeadAddress = 1017;
Mscrm.InternalUtilities.EntityTypeCode.LeadCompetitors = 24;
Mscrm.InternalUtilities.EntityTypeCode.LeadProduct = 27;
Mscrm.InternalUtilities.EntityTypeCode.Letter = 4207;
Mscrm.InternalUtilities.EntityTypeCode.License = 2027;
Mscrm.InternalUtilities.EntityTypeCode.List = 4300;
Mscrm.InternalUtilities.EntityTypeCode.ListMember = 4301;
Mscrm.InternalUtilities.EntityTypeCode.LookUpMapping = 4419;
Mscrm.InternalUtilities.EntityTypeCode.MailMergeTemplate = 9106;
Mscrm.InternalUtilities.EntityTypeCode.Metric = 9603;
Mscrm.InternalUtilities.EntityTypeCode.MonthlyFiscalCalendar = 2003;
Mscrm.InternalUtilities.EntityTypeCode.MobileOfflineProfileItem = 9867;
Mscrm.InternalUtilities.EntityTypeCode.Notification = 4110;
Mscrm.InternalUtilities.EntityTypeCode.Opportunity = 3;
Mscrm.InternalUtilities.EntityTypeCode.OpportunityClose = 4208;
Mscrm.InternalUtilities.EntityTypeCode.OpportunityCompetitors = 25;
Mscrm.InternalUtilities.EntityTypeCode.OpportunityProduct = 1083;
Mscrm.InternalUtilities.EntityTypeCode.OrderClose = 4209;
Mscrm.InternalUtilities.EntityTypeCode.Organization = 1019;
Mscrm.InternalUtilities.EntityTypeCode.OrganizationStatistic = 4708;
Mscrm.InternalUtilities.EntityTypeCode.OrganizationUI = 1021;
Mscrm.InternalUtilities.EntityTypeCode.Owner = 7;
Mscrm.InternalUtilities.EntityTypeCode.OwnerMapping = 4420;
Mscrm.InternalUtilities.EntityTypeCode.PersonalDocumentTemplate = 9941;
Mscrm.InternalUtilities.EntityTypeCode.PhoneCall = 4210;
Mscrm.InternalUtilities.EntityTypeCode.PickListMapping = 4418;
Mscrm.InternalUtilities.EntityTypeCode.PluginAssembly = 4605;
Mscrm.InternalUtilities.EntityTypeCode.PluginTraceLog = 4619;
Mscrm.InternalUtilities.EntityTypeCode.PluginType = 4602;
Mscrm.InternalUtilities.EntityTypeCode.PluginTypeStatistic = 4603;
Mscrm.InternalUtilities.EntityTypeCode.Position = 50;
Mscrm.InternalUtilities.EntityTypeCode.Post = 8e3;
Mscrm.InternalUtilities.EntityTypeCode.PostComment = 8005;
Mscrm.InternalUtilities.EntityTypeCode.PostFollow = 8003;
Mscrm.InternalUtilities.EntityTypeCode.PostLike = 8006;
Mscrm.InternalUtilities.EntityTypeCode.PostRegarding = 8002;
Mscrm.InternalUtilities.EntityTypeCode.PostRole = 8001;
Mscrm.InternalUtilities.EntityTypeCode.PriceLevel = 1022;
Mscrm.InternalUtilities.EntityTypeCode.PrincipalAttributeAccessMap = 43;
Mscrm.InternalUtilities.EntityTypeCode.PrincipalEntityMap = 41;
Mscrm.InternalUtilities.EntityTypeCode.PrincipalObjectAccess = 11;
Mscrm.InternalUtilities.EntityTypeCode.PrincipalObjectAccessReadSnapshot = 90;
Mscrm.InternalUtilities.EntityTypeCode.PrincipalObjectAttributeAccess = 44;
Mscrm.InternalUtilities.EntityTypeCode.Privilege = 1023;
Mscrm.InternalUtilities.EntityTypeCode.PrivilegeObjectTypeCodes = 31;
Mscrm.InternalUtilities.EntityTypeCode.ProcessSession = 4710;
Mscrm.InternalUtilities.EntityTypeCode.Product = 1024;
Mscrm.InternalUtilities.EntityTypeCode.ProductAssociation = 1025;
Mscrm.InternalUtilities.EntityTypeCode.ProductPriceLevel = 1026;
Mscrm.InternalUtilities.EntityTypeCode.ProductLineItem = 1027;
Mscrm.InternalUtilities.EntityTypeCode.ProductSalesLiterature = 21;
Mscrm.InternalUtilities.EntityTypeCode.ProductSubstitute = 1028;
Mscrm.InternalUtilities.EntityTypeCode.Publisher = 7101;
Mscrm.InternalUtilities.EntityTypeCode.PublisherAddress = 7102;
Mscrm.InternalUtilities.EntityTypeCode.QuarterlyFiscalCalendar = 2002;
Mscrm.InternalUtilities.EntityTypeCode.Queue = 2020;
Mscrm.InternalUtilities.EntityTypeCode.QueueItem = 2029;
Mscrm.InternalUtilities.EntityTypeCode.QueueMembership = 1213;
Mscrm.InternalUtilities.EntityTypeCode.Quote = 1084;
Mscrm.InternalUtilities.EntityTypeCode.QuoteClose = 4211;
Mscrm.InternalUtilities.EntityTypeCode.QuoteDetail = 1085;
Mscrm.InternalUtilities.EntityTypeCode.RecordCountSnapshot = 91;
Mscrm.InternalUtilities.EntityTypeCode.RecurrenceRule = 4250;
Mscrm.InternalUtilities.EntityTypeCode.RecurringAppointmentMaster = 4251;
Mscrm.InternalUtilities.EntityTypeCode.RelationshipRole = 4500;
Mscrm.InternalUtilities.EntityTypeCode.RelationshipRoleMap = 4501;
Mscrm.InternalUtilities.EntityTypeCode.ReplicationBacklog = 1140;
Mscrm.InternalUtilities.EntityTypeCode.Report = 9100;
Mscrm.InternalUtilities.EntityTypeCode.ReportCategory = 9102;
Mscrm.InternalUtilities.EntityTypeCode.ReportEntity = 9101;
Mscrm.InternalUtilities.EntityTypeCode.ReportLink = 9104;
Mscrm.InternalUtilities.EntityTypeCode.ReportVisibility = 9103;
Mscrm.InternalUtilities.EntityTypeCode.Resource = 4002;
Mscrm.InternalUtilities.EntityTypeCode.ResourceGroup = 4005;
Mscrm.InternalUtilities.EntityTypeCode.ResourceGroupExpansion = 4010;
Mscrm.InternalUtilities.EntityTypeCode.ResourceSpec = 4006;
Mscrm.InternalUtilities.EntityTypeCode.RibbonCommand = 1116;
Mscrm.InternalUtilities.EntityTypeCode.RibbonContextGroup = 1115;
Mscrm.InternalUtilities.EntityTypeCode.RibbonCustomization = 1120;
Mscrm.InternalUtilities.EntityTypeCode.RibbonDiff = 1130;
Mscrm.InternalUtilities.EntityTypeCode.RibbonRule = 1117;
Mscrm.InternalUtilities.EntityTypeCode.RibbonTabToCommandMap = 1113;
Mscrm.InternalUtilities.EntityTypeCode.Role = 1036;
Mscrm.InternalUtilities.EntityTypeCode.RolePrivileges = 12;
Mscrm.InternalUtilities.EntityTypeCode.RoleTemplate = 1037;
Mscrm.InternalUtilities.EntityTypeCode.RoleTemplatePrivileges = 28;
Mscrm.InternalUtilities.EntityTypeCode.RollupField = 9604;
Mscrm.InternalUtilities.EntityTypeCode.SalesLiterature = 1038;
Mscrm.InternalUtilities.EntityTypeCode.SalesLiteratureItem = 1070;
Mscrm.InternalUtilities.EntityTypeCode.SalesOrder = 1088;
Mscrm.InternalUtilities.EntityTypeCode.SalesOrderDetail = 1089;
Mscrm.InternalUtilities.EntityTypeCode.SalesProcessInstance = 32;
Mscrm.InternalUtilities.EntityTypeCode.SavedQuery = 1039;
Mscrm.InternalUtilities.EntityTypeCode.SavedQueryVisualization = 1111;
Mscrm.InternalUtilities.EntityTypeCode.SdkMessage = 4606;
Mscrm.InternalUtilities.EntityTypeCode.SdkMessageFilter = 4607;
Mscrm.InternalUtilities.EntityTypeCode.SdkMessagePair = 4613;
Mscrm.InternalUtilities.EntityTypeCode.SdkMessageProcessingStep = 4608;
Mscrm.InternalUtilities.EntityTypeCode.SdkMessageProcessingStepImage = 4615;
Mscrm.InternalUtilities.EntityTypeCode.SdkMessageProcessingStepSecureConfig = 4616;
Mscrm.InternalUtilities.EntityTypeCode.SdkMessageRequest = 4609;
Mscrm.InternalUtilities.EntityTypeCode.SdkMessageRequestField = 4614;
Mscrm.InternalUtilities.EntityTypeCode.SdkMessageResponse = 4610;
Mscrm.InternalUtilities.EntityTypeCode.SdkMessageResponseField = 4611;
Mscrm.InternalUtilities.EntityTypeCode.SemiAnnualFiscalCalendar = 2001;
Mscrm.InternalUtilities.EntityTypeCode.Service = 4001;
Mscrm.InternalUtilities.EntityTypeCode.ServiceAppointment = 4214;
Mscrm.InternalUtilities.EntityTypeCode.ServiceContractContacts = 20;
Mscrm.InternalUtilities.EntityTypeCode.ServiceEndpoint = 4618;
Mscrm.InternalUtilities.EntityTypeCode.SharePointDocumentLocation = 9508;
Mscrm.InternalUtilities.EntityTypeCode.SharePointDocument = 9507;
Mscrm.InternalUtilities.EntityTypeCode.SharePointData = 9509;
Mscrm.InternalUtilities.EntityTypeCode.SharePointSite = 9502;
Mscrm.InternalUtilities.EntityTypeCode.Site = 4009;
Mscrm.InternalUtilities.EntityTypeCode.SiteMap = 4709;
Mscrm.InternalUtilities.EntityTypeCode.Solution = 7100;
Mscrm.InternalUtilities.EntityTypeCode.SolutionComponent = 7103;
Mscrm.InternalUtilities.EntityTypeCode.StatusMap = 1075;
Mscrm.InternalUtilities.EntityTypeCode.StringMap = 1043;
Mscrm.InternalUtilities.EntityTypeCode.Subject = 129;
Mscrm.InternalUtilities.EntityTypeCode.Subscription = 29;
Mscrm.InternalUtilities.EntityTypeCode.SubscriptionClients = 1072;
Mscrm.InternalUtilities.EntityTypeCode.SubscriptionManuallyTrackedObject = 37;
Mscrm.InternalUtilities.EntityTypeCode.SubscriptionSyncInfo = 33;
Mscrm.InternalUtilities.EntityTypeCode.SubscriptionTrackingDeletedObject = 35;
Mscrm.InternalUtilities.EntityTypeCode.SyncError = 9869;
Mscrm.InternalUtilities.EntityTypeCode.SystemForm = 1030;
Mscrm.InternalUtilities.EntityTypeCode.InteractionCentricSystemForm = 1032;
Mscrm.InternalUtilities.EntityTypeCode.InteractionCentricEntitySystemForm = 1033;
Mscrm.InternalUtilities.EntityTypeCode.SystemUser = 8;
Mscrm.InternalUtilities.EntityTypeCode.SystemUserBusinessUnitEntityMap = 42;
Mscrm.InternalUtilities.EntityTypeCode.SystemUserLicenses = 13;
Mscrm.InternalUtilities.EntityTypeCode.SystemUserPrincipals = 14;
Mscrm.InternalUtilities.EntityTypeCode.SystemUserProfiles = 1202;
Mscrm.InternalUtilities.EntityTypeCode.SystemUserRoles = 15;
Mscrm.InternalUtilities.EntityTypeCode.Task = 4212;
Mscrm.InternalUtilities.EntityTypeCode.Team = 9;
Mscrm.InternalUtilities.EntityTypeCode.TeamMembership = 23;
Mscrm.InternalUtilities.EntityTypeCode.TeamProfiles = 1203;
Mscrm.InternalUtilities.EntityTypeCode.TeamRoles = 40;
Mscrm.InternalUtilities.EntityTypeCode.Template = 2010;
Mscrm.InternalUtilities.EntityTypeCode.Territory = 2013;
Mscrm.InternalUtilities.EntityTypeCode.TextAnalyticsEntityMapping = 9945;
Mscrm.InternalUtilities.EntityTypeCode.Theme = 2015;
Mscrm.InternalUtilities.EntityTypeCode.TimeZoneDefinition = 4810;
Mscrm.InternalUtilities.EntityTypeCode.TimeZoneLocalizedName = 4812;
Mscrm.InternalUtilities.EntityTypeCode.TimeZoneRule = 4811;
Mscrm.InternalUtilities.EntityTypeCode.TransactionCurrency = 9105;
Mscrm.InternalUtilities.EntityTypeCode.TransformationMapping = 4426;
Mscrm.InternalUtilities.EntityTypeCode.TransformationParameterMapping = 4427;
Mscrm.InternalUtilities.EntityTypeCode.UnresolvedAddress = 2012;
Mscrm.InternalUtilities.EntityTypeCode.UoM = 1055;
Mscrm.InternalUtilities.EntityTypeCode.UoMSchedule = 1056;
Mscrm.InternalUtilities.EntityTypeCode.UserEntityInstanceData = 2501;
Mscrm.InternalUtilities.EntityTypeCode.UserEntityUISettings = 2500;
Mscrm.InternalUtilities.EntityTypeCode.UserFiscalCalendar = 1086;
Mscrm.InternalUtilities.EntityTypeCode.UserForm = 1031;
Mscrm.InternalUtilities.EntityTypeCode.UserQuery = 4230;
Mscrm.InternalUtilities.EntityTypeCode.UserQueryVisualization = 1112;
Mscrm.InternalUtilities.EntityTypeCode.UserSettings = 150;
Mscrm.InternalUtilities.EntityTypeCode.WebResource = 9333;
Mscrm.InternalUtilities.EntityTypeCode.WebWizard = 4800;
Mscrm.InternalUtilities.EntityTypeCode.WizardAccessPrivilege = 4803;
Mscrm.InternalUtilities.EntityTypeCode.WizardPage = 4802;
Mscrm.InternalUtilities.EntityTypeCode.Workflow = 4703;
Mscrm.InternalUtilities.EntityTypeCode.WorkflowDependency = 4704;
Mscrm.InternalUtilities.EntityTypeCode.WorkflowLog = 4706;
Mscrm.InternalUtilities.EntityTypeCode.WorkflowWaitSubscription = 4702;
Mscrm.InternalUtilities.EntityTypeCode.HierarchyRule = 8840;
Mscrm.InternalUtilities.EntityTypeCode.DataPerformance = 4450;
Mscrm.InternalUtilities.EntityTypeCode.EntityDashboard = 9988;
Mscrm.InternalUtilities.EntityTypeCode.RecommendedDocument = 1189;
Mscrm.InternalUtilities.TypeNames.NumberType = "number";
Mscrm.InternalUtilities.TypeNames.StringType = "string";
Mscrm.InternalUtilities.TypeNames.BooleanType = "boolean";
Mscrm.InternalUtilities.TypeNames.ObjectType = "object";
Mscrm.InternalUtilities.TypeNames.FunctionType = "function";
Mscrm.InternalUtilities.TypeNames.UndefinedType = "undefined";
Mscrm.InternalUtilities.TypeNames.UnknownType = "unknown";
Mscrm.InternalUtilities.ProductStructureType.Product = 1;
Mscrm.InternalUtilities.ProductStructureType.ProductFamily = 2;
Mscrm.InternalUtilities.ProductStructureType.ProductBundle = 3;
Mscrm.InternalUtilities.ProductStatusCode.Draft = 0;
Mscrm.InternalUtilities.ProductStatusCode.Active = 1;
Mscrm.InternalUtilities.ProductStatusCode.Retired = 2;
Mscrm.InternalUtilities.ProductStatusCode.DraftActive = 3;
Mscrm.InternalUtilities.ProductStateCode.Active = 0;
Mscrm.InternalUtilities.ProductStateCode.Retired = 1;
Mscrm.InternalUtilities.ProductStateCode.Draft = 2;
Mscrm.InternalUtilities.ProductStateCode.DraftActive = 3;
Mscrm.InternalUtilities.ProductStateCodeDescription.Active = "Active";
Mscrm.InternalUtilities.ProductStateCodeDescription.Inactive = "Inactive";
Mscrm.InternalUtilities.ProductStateCodeDescription.Draft = "Draft";
Mscrm.InternalUtilities.ProductStateCodeDescription.UnderRevision = "Under Revision";
Mscrm.InternalUtilities.GridControlType.None = 0;
Mscrm.InternalUtilities.GridControlType.Homepage = 1;
Mscrm.InternalUtilities.GridControlType.Associated = 2;
Mscrm.InternalUtilities.GridControlType.InlineSubGrid = 3;
Mscrm.InternalUtilities.OfficeDocumentType.Excel = 1;
Mscrm.InternalUtilities.OfficeDocumentType.Word = 2;
Mscrm.InternalUtilities.OfficeDocumentType.PowerPoint = 3;
Mscrm.InternalUtilities.OfficeDocumentType.OneNote = 4;
Mscrm.InternalUtilities.OfficeDocumentType.PDF = 5;
Mscrm.InternalUtilities.ProgressBar.ProgressValue = 40;
Mscrm.InternalUtilities.ProgressBar.ProgressMaxValue = 100;
Mscrm.InternalUtilities.ProgressBar.ProgressMinValue = 0