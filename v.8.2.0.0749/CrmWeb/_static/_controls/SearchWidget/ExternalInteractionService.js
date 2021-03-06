Type.registerNamespace("Mscrm");
Mscrm.IArticlePost = function() {};
Mscrm.IArticlePost.registerInterface("Mscrm.IArticlePost");
Mscrm.IExternalInteractionProvider = function() {};
Mscrm.IExternalInteractionProvider.registerInterface("Mscrm.IExternalInteractionProvider");
Mscrm.IRetrieveArticlePostRequest = function() {};
Mscrm.IRetrieveArticlePostRequest.registerInterface("Mscrm.IRetrieveArticlePostRequest");
Mscrm.IRetrieveArticlePostResponse = function() {};
Mscrm.IRetrieveArticlePostResponse.registerInterface("Mscrm.IRetrieveArticlePostResponse");
Mscrm.ArticlePost = function() {};
Mscrm.ArticlePost.prototype = {
    timesViewed: 0,
    attachmentCount: 0,
    question: null,
    description: null,
    answer: null,
    publicUrl: null,
    published: false,
    stateCode: 0,
    rating: 0,
    articleId: null,
    articleUId: null,
    href: null,
    serviceDeskUri: null,
    lastModifiedOn: null,
    createdOn: null,
    expiredDate: null,
    folderHref: null,
    searchBlurb: "",
    sanitized: false,
    isParature: false,
    $E_0: false,
    get_isAssociated: function() { return this.$E_0 },
    set_isAssociated: function(value) {
        this.$E_0 = value;
        return value
    },
    get_timesViewed: function() { return this.timesViewed },
    set_timesViewed: function(value) {
        this.timesViewed = value;
        return value
    },
    get_attachmentCount: function() { return this.attachmentCount },
    set_attachmentCount: function(value) {
        this.attachmentCount = value;
        return value
    },
    get_question: function() { return this.question },
    set_question: function(value) {
        this.question = value;
        return value
    },
    get_description: function() { return this.description },
    set_description: function(value) {
        this.description = value;
        return value
    },
    get_answer: function() { return this.answer },
    set_answer: function(value) {
        this.answer = value;
        this.searchBlurb = value;
        return value
    },
    get_publicUrl: function() { return this.publicUrl },
    set_publicUrl: function(value) {
        this.publicUrl = value;
        return value
    },
    get_published: function() { return this.published },
    set_published: function(value) {
        this.published = value;
        return value
    },
    get_stateCode: function() { return this.stateCode },
    set_stateCode: function(value) {
        this.stateCode = value;
        return value
    },
    get_rating: function() { return this.rating },
    set_rating: function(value) {
        this.rating = value;
        return value
    },
    get_articleId: function() { return this.articleId },
    set_articleId: function(value) {
        this.articleId = value;
        return value
    },
    get_articleUId: function() { return this.articleUId },
    set_articleUId: function(value) {
        this.articleUId = value;
        return value
    },
    get_href: function() { return this.href },
    set_href: function(value) {
        this.href = value;
        return value
    },
    get_serviceDeskUri: function() { return this.serviceDeskUri },
    set_serviceDeskUri: function(value) {
        this.serviceDeskUri = value;
        return value
    },
    get_lastModifiedOn: function() { return this.lastModifiedOn },
    set_lastModifiedOn: function(value) {
        this.lastModifiedOn = value;
        return value
    },
    get_expiredDate: function() { return this.expiredDate },
    set_expiredDate: function(value) {
        this.expiredDate = value;
        return value
    },
    get_folderHref: function() { return this.folderHref },
    set_folderHref: function(value) {
        this.folderHref = value;
        return value
    },
    get_createdOn: function() { return this.createdOn },
    set_createdOn: function(value) {
        this.createdOn = value;
        return value
    },
    get_searchBlurb: function() { return this.searchBlurb },
    set_searchBlurb: function(value) {
        this.searchBlurb = value;
        return value
    },
    get_sanitized: function() { return this.sanitized },
    set_sanitized: function(value) {
        this.sanitized = value;
        return value
    },
    get_isParature: function() { return this.isParature },
    set_isParature: function(value) {
        this.isParature = value;
        return value
    },
    get_comments: function() { throw Error.notImplemented("The method or operation is not implemented.") },
    set_comments: function(value) {
        throw Error.notImplemented("The method or operation is not implemented.");
        return value
    },
    get_createdBy: function() { throw Error.notImplemented("The method or operation is not implemented.") },
    set_createdBy: function(value) {
        throw Error.notImplemented("The method or operation is not implemented.");
        return value
    },
    get_likeCounter: function() { throw Error.notImplemented("The method or operation is not implemented.") },
    set_likeCounter: function(value) {
        throw Error.notImplemented("The method or operation is not implemented.");
        return value
    },
    get_likeId: function() { throw Error.notImplemented("The method or operation is not implemented.") },
    set_likeId: function(value) {
        throw Error.notImplemented("The method or operation is not implemented.");
        return value
    },
    get_postId: function() { throw Error.notImplemented("The method or operation is not implemented.") },
    set_postId: function(value) {
        throw Error.notImplemented("The method or operation is not implemented.");
        return value
    },
    get_text: function() { throw Error.notImplemented("The method or operation is not implemented.") },
    set_text: function(value) {
        throw Error.notImplemented("The method or operation is not implemented.");
        return value
    }
};
Mscrm.ExternalProviderFactory = function() {};
Mscrm.ExternalProviderFactory.getClient = function(clientType) {
    switch (clientType.toLowerCase()) {
    case "parature":
        return new Mscrm.ParatureInteraction;
    case "crm":
        return new Mscrm.CrmNativeSearchInteraction;
    default:
        return null
    }
};
Mscrm.ParatureConverter = function() {};
Mscrm.ParatureConverter.$e = function($p0) {
    var $v_0 = new Mscrm.RetrieveArticlePostResponse,
        $v_1 = {},
        $v_2 = null,
        $v_3 = null,
        $$t_A,
        $$t_B,
        $v_4 = ($$t_B = Mscrm.JsonUtilities.tryGetParsedJson($p0, $$t_A = { val: $v_1 }), $v_1 = $$t_A.val, $$t_B);
    if (!IsNull($v_4)) {
        $v_0.isSucceded = false;
        $v_0.errorCode = $v_4.ErrorCode;
        $v_0.errorMessage = $v_4.DisplayText;
        return $v_0
    }
    if ($v_1 && $v_1["Entities"]) {
        $v_2 = $v_1["Entities"];
        $v_0.total = !isNullOrEmptyString(Mscrm.ParatureConverter.$1($v_2, "@total"))
            ? Number.parseInvariant(Mscrm.ParatureConverter.$1($v_2, "@total"))
            : 0;
        $v_0.results = !isNullOrEmptyString(Mscrm.ParatureConverter.$1($v_2, "@results"))
            ? Number.parseInvariant(Mscrm.ParatureConverter.$1($v_2, "@results"))
            : 0;
        $v_0.pageSize = !isNullOrEmptyString(Mscrm.ParatureConverter.$1($v_2, "@page-size"))
            ? Number.parseInvariant(Mscrm.ParatureConverter.$1($v_2, "@page-size"))
            : 0;
        $v_0.morePosts = $v_0.total > $v_0.pageSize ? true : false;
        var $v_5 = $v_2["Article"];
        if ($v_5 && $v_5.length > 0) {
            $v_3 = new Array($v_5.length);
            var $v_6 = 0;
            while ($v_6 < $v_5.length) {
                var $v_7 = $v_5[$v_6], $v_8 = new Mscrm.ArticlePost;
                $v_8.isParature = true;
                $v_8.set_answer(Mscrm.ParatureConverter.$4($v_7, "Answer"));
                $v_8.href = Mscrm.ParatureConverter.$1($v_7, "@href");
                $v_8.articleId = !isNullOrEmptyString(Mscrm.ParatureConverter.$1($v_7, "@id"))
                    ? Mscrm.ParatureConverter.$1($v_7, "@id")
                    : "0";
                $v_8.timesViewed = !isNullOrEmptyString(Mscrm.ParatureConverter.$4($v_7, "Times_Viewed"))
                    ? Number.parseInvariant(Mscrm.ParatureConverter.$4($v_7, "Times_Viewed"))
                    : 0;
                $v_8.attachmentCount = 0;
                $v_8.question = Mscrm.ParatureConverter.$4($v_7, "Question");
                $v_8.published = !isNullOrEmptyString(Mscrm.ParatureConverter.$4($v_7, "Published"))
                    ? Boolean.parse(Mscrm.ParatureConverter.$4($v_7, "Published"))
                    : false;
                $v_8.rating = !isNullOrEmptyString(Mscrm.ParatureConverter.$4($v_7, "Rating"))
                    ? Number.parseInvariant(Mscrm.ParatureConverter.$4($v_7, "Rating"))
                    : 0;
                $v_8.serviceDeskUri = !isNullOrEmptyString(Mscrm.ParatureConverter.$1($v_7, "@service-desk-uri"))
                    ? CrmEncodeDecode.CrmUrlEncode(Mscrm.ParatureConverter.$1($v_7, "@service-desk-uri"))
                    : "";
                $v_8.articleUId = Mscrm.ParatureConverter.$1($v_7, "@uid");
                $v_8.folderHref = !isNullOrEmptyString(Mscrm.ParatureConverter.$1($v_7, "@href"))
                    ? CrmEncodeDecode.CrmUrlEncode(Mscrm.ParatureConverter.$1($v_7, "@href"))
                    : "";
                $v_8.lastModifiedOn = Mscrm.ParatureConverter.$D(Mscrm.ParatureConverter.$4($v_7, "Date_Updated"));
                $v_8.createdOn = Mscrm.ParatureConverter.$D(Mscrm.ParatureConverter.$4($v_7, "Date_Created"));
                $v_8.expiredDate = Mscrm.ParatureConverter.$D(Mscrm.ParatureConverter.$4($v_7, "Expiration_Date"));
                $v_3[$v_6] = $v_8;
                $v_6++
            }
        }
    }
    $v_0.posts = $v_3;
    $v_0.isSucceded = true;
    return $v_0
};
Mscrm.ParatureConverter.$D = function($p0) {
    if (isNullOrEmptyString($p0)) return null;
    var $v_0 = ParseUtcDate($p0);
    $v_0.setMinutes($v_0.getMinutes() + window.ORG_TIMEZONE_OFFSET);
    return $v_0
};
Mscrm.ParatureConverter.$4 = function($p0, $p1) {
    if ($p0 && $p0[$p1]) return $p0[$p1]["#text"].toString();
    return ""
};
Mscrm.ParatureConverter.$1 = function($p0, $p1) {
    if ($p0 && $p0[$p1]) return $p0[$p1].toString();
    return ""
};
Mscrm.ParatureJsonData = function() {};
Mscrm.ParatureJsonData.prototype = { Entities: null };
Mscrm.ParatureEntityData = function() {};
Mscrm.ParatureEntityData.prototype = { total: 0, results: 0, page: null, pagesize: 0, href: null, Article: null };
Mscrm.ParatureArticleData = function() {};
Mscrm.ParatureArticleData.prototype = {
    id: 0,
    uid: null,
    href: null,
    servicedeskuri: null,
    Question: null,
    Answer: null,
    Published: null,
    Times_Viewed: null,
    Date_Created: null,
    Date_Updated: null,
    Expiration_Date: null,
    Created_By: null,
    Rating: null,
    Folders: null
};
Mscrm.ParatureArticle = function() {};
Mscrm.ParatureArticle.prototype = { ArticleFolder: null };
Mscrm.ParatureArticleFolder = function() {};
Mscrm.ParatureArticleFolder.prototype = { id: 0, uid: 0, href: null, Name: null };
Mscrm.ParatureAttributeData = function() {};
Mscrm.ParatureAttributeData.prototype = { text: null };
Mscrm.ParatureInteraction = function() {
    this.$0_0 = {};
    this.$0_0["answer"] = "Answer";
    this.$0_0["answerlike"] = "Answer_like_";
    this.$0_0["folderid"] = "Folder_id_";
    this.$0_0["published"] = "Published";
    this.$0_0["question"] = "Question";
    this.$0_0["questionlike"] = "Question_like_";
    this.$0_0["searchString"] = "_keywords_";
    this.$0_0["order"] = "_order_";
    this.$0_0["output"] = "_output_";
    this.$0_0["searchsubfolders"] = "_search_subfolders_";
    this.$0_0["status"] = "_status_new";
    this.$0_0["total"] = "_total_";
    this.$0_0["pagesize"] = "_PageSize_";
    this.$0_0["startpage"] = "_startPage_";
    this.$0_0["isprivate"] = "Is_Private";
    this.$0_0["namelike"] = "Name_like_";
    this.$0_0["name"] = "Name";
    this.$0_0["parentfolderid"] = "Parent_Folder_id_"
};
Mscrm.ParatureInteraction.prototype = {
    get_$9_0: function() {
        if (window._bIsOsdpOrg) return true;
        else return window.IsCorsEnabledForKmControl
    },
    getArticleResponse: function(request, retrievePostsCallback) {
        var $v_0 = Mscrm.CrmUri.create(request.get_parameters()["url"]), $$t_5;
        this.$Y_0(request.get_parameters(), $$t_5 = { val: $v_0 }), $v_0 = $$t_5.val;
        if (IsNull($v_0.get_query()["_total_"])) {
            if (!IsNull(request.get_parameters()["startpage"])) {
                request.set_pageNumber(request.get_parameters()["startpage"]);
                $v_0.get_query()[this.$0_0["startpage"].toString()] = request.get_pageNumber()
            }
            if (!IsNull(request.get_parameters()["pagesize"])) {
                request.set_pageSize(request.get_parameters()["pagesize"]);
                $v_0.get_query()[this.$0_0["pagesize"].toString()] = request.get_pageSize()
            }
        }
        var $$t_6 = this, $$t_7 = this;
        this.$Q_0($v_0,
            function($p1_0) { $$t_6.$T_0($p1_0, retrievePostsCallback) },
            function($p1_0) { $$t_7.$V_0($p1_0, retrievePostsCallback) })
    },
    validateConnection: function(urlToValidate, successCallback, failureCallback) {
        if (this.get_$9_0()) {
            urlToValidate.get_query()["_output_"] = "json";
            urlToValidate.get_query()["_outputerror_"] = "json"
        } else urlToValidate.get_query()["_output_"] = "javascript";
        var $$t_B = this, $$t_C = this;
        this.$Q_0(urlToValidate,
            function($p1_0) {
                if (IsNull(successCallback)) return;
                successCallback()
            },
            function($p1_0) {
                if (IsNull(failureCallback)) return;
                var $v_0, $$t_9, $$t_A;
                $$t_A = Mscrm.JsonUtilities.tryGetParsedJson($p1_0, $$t_9 = { val: $v_0 }), $v_0 = $$t_9.val, $$t_A;
                var $v_1 = IsNull($v_0) ? {} : $v_0["Error"],
                    $v_2 = !IsNull($v_1["@code"]) ? $v_1["@code"] : "0",
                    $v_3 = !IsNull($v_1["@suberrorcode"]) ? $v_1["@suberrorcode"].toString() : "";
                if ($p1_0 === "timeout") $v_2 = "408";
                failureCallback($v_2, $v_3)
            })
    },
    $Y_0: function($p0, $p1) {
        if (this.get_$9_0()) {
            $p1.val.get_query()["_output_"] = "json";
            $p1.val.get_query()["_outputerror_"] = "json"
        } else $p1.val.get_query()["_output_"] = "javascript";
        if (!IsNull($p0)) {
            var $$dict_3 = $p0;
            for (var $$key_4 in $$dict_3) {
                var $v_0 = { key: $$key_4, value: $$dict_3[$$key_4] };
                if (!IsNull($v_0
                        .value) &&
                    !isNullOrEmptyString($v_0.value
                        .toString()))
                    if (this.$0_0[$v_0.key]) $p1.val.get_query()[this.$0_0[$v_0.key].toString()] = $v_0.value
            }
        }
    },
    $T_0: function($p0, $p1) {
        var $v_0;
        if (this.get_$9_0()) $v_0 = $p0;
        else $v_0 = JSON.stringify($p0);
        var $v_1 = Mscrm.ParatureConverter.$e($v_0);
        $p1($v_1)
    },
    $V_0: function($p0, $p1) {
        var $v_0 = new Mscrm.RetrieveArticlePostResponse, $v_1, $$t_5, $$t_6;
        $$t_6 = Mscrm.JsonUtilities.tryGetParsedJson($p0, $$t_5 = { val: $v_1 }), $v_1 = $$t_5.val, $$t_6;
        var $v_2 = IsNull($v_1) ? {} : $v_1["Error"];
        $v_0.errorCode = !IsNull($v_2["@code"]) ? Number.parseInvariant($v_2["@code"].toString()) : 0;
        $v_0.errorMessage = !IsNull($v_2["@message"]) ? $v_2["@message"].toString() : "";
        $v_0.errorDescription = !IsNull($v_2["@description"]) ? $v_2["@description"].toString() : "";
        $v_0.subErrorCode = !IsNull($v_2["@suberrorcode"]) ? $v_2["@suberrorcode"].toString() : "";
        $v_0.subErrorDescription = !IsNull($v_2["@suberrormessage"]) ? $v_2["@suberrormessage"].toString() : "";
        if ($p0 === "timeout") $v_0.errorCode = 408;
        $v_0.isSucceded = false;
        $p1($v_0)
    },
    $Q_0: function($p0, $p1, $p2) {
        if (!this.get_$9_0()) {
            var $v_0 = new jQueryAjaxOptions;
            $v_0.cache = false;
            $v_0.type = "GET";
            $v_0.dataType = "jsonp";
            $v_0.url = $p0.toString();
            $v_0.jsonp = "_callback_";
            $v_0.timeout = 3e4;
            var $$t_F = this, $$t_G = this;
            $P_CRM.ajax($v_0).success(function($p1_0) { $p1($p1_0) })
                .error(function($p1_0, $p1_1, $p1_2) { $p2($p1_2) })
        } else {
            $P_CRM.support.cors = true;
            var $v_1 = new jQueryAjaxOptions;
            $v_1.cache = false;
            $v_1.type = "GET";
            $v_1.contentType = "text/plain";
            $v_1.url = $p0.toString();
            $v_1.timeout = 3e4;
            var $v_2 = {};
            $v_2["withCredentials"] = "true";
            $v_1.xhrFields = $v_2;
            var $v_3 = $P_CRM.ajax($v_1), $$t_H = this, $$t_I = this;
            $v_3.success(function($p1_0) { $p1($v_3.responseText) }).error(function($p1_0, $p1_1, $p1_2) {
                if (!IsNull($p1_2) && $p1_2.toString() === "timeout") $p2($p1_2);
                else $p2($p1_0.responseText)
            })
        }
    }
};
Mscrm.CrmNativeSearchInteraction = function() {};
Mscrm.CrmNativeSearchInteraction.$C = function($p0) {
    $p0.setMinutes($p0.getMinutes() + $p0.getTimezoneOffset() + window.ORG_TIMEZONE_OFFSET);
    return $p0
};
Mscrm.CrmNativeSearchInteraction.prototype = {
    getArticleResponse: function(request, retrievePostsCallback) { this.$X_0(request, retrievePostsCallback) },
    validateConnection: function(urlToValidate, successCallback, failureCallback) {
        throw Error.notImplemented("The method or operation is not implemented.")
    },
    $X_0: function($p0, $p1) {
        !IsNull($p0.get_parameters()["startpage"]) && $p0.set_pageNumber($p0.get_parameters()["startpage"]);
        !IsNull($p0.get_parameters()["pagesize"]) && $p0.set_pageSize($p0.get_parameters()["pagesize"]);
        var $v_0 = $p0.get_parameters()["searchString"].toString(),
            $v_1 = String
                .format("<fetch mapping='logical' returntotalrecordcount='true' page='{0}' count='{1}'><entity name='knowledgearticle'><attribute name='knowledgearticleid' /><attribute name='articlepublicnumber' /><attribute name='title' /><attribute name='description' /><attribute name='content' /><attribute name='knowledgearticleviews' /><attribute name='createdon' /><attribute name='modifiedon' /><attribute name='statecode' /><attribute name='statuscode' /><attribute name='expirationdate' /><attribute name='languagelocaleid' /><attribute name='majorversionnumber' /><attribute name='minorversionnumber' /><attribute name='islatestversion' />{2}{3}</entity></fetch>", $p0.get_pageNumber(), $p0.get_pageSize(), this.$Z_0($p0), this.$a_0($p0)),
            $v_2 = this.$b_0($p0),
            $$t_C = this,
            $$t_D = this;
        Xrm.Internal.messages.fullTextSearchKnowledgeArticle($v_0, true, true, $v_2, $v_1).then(function($p1_0) {
                var $v_3 = $p1_0;
                if (!IsNull($v_3) && !IsNull($v_3.entityCollection)) {
                    var $v_4 = $v_3.entityCollection, $v_5 = new Mscrm.RetrieveArticlePostResponse;
                    $v_5.total = $v_4.get_TotalRecordCount();
                    $v_5.results = $v_4.get_count();
                    $v_5.pageSize = $p0.get_pageSize();
                    $v_5.morePosts = $v_4.get_moreRecords();
                    $v_5.isSucceded = true;
                    $v_5.posts = $$t_C.$S_0($p0, $v_4);
                    $p1 && $p1($v_5)
                }
            },
            function($p1_0) {
                if ($p1_0.get_organizationServiceFault()) {
                    var $v_6 = new Mscrm.RetrieveArticlePostResponse;
                    $v_6.isSucceded = false;
                    var $v_7 = $p1_0.get_organizationServiceFault().get_errorCode();
                    Xrm.Internal.openErrorDialog($v_7,
                        $p1_0.get_message(),
                        $p1_0.get_organizationServiceFault().get_responseOuterXml());
                    $p1 && $p1($v_6)
                }
            })
    },
    $Z_0: function($p0) {
        var $v_0 = !$p0.get_parameters()["language"] ? "" : $p0.get_parameters()["language"].toString();
        if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_0)) return "";
        return String.format("<filter><condition attribute='languagelocaleid' operator='eq' value='{0}'/></filter>",
            CrmEncodeDecode.CrmHtmlAttributeEncode($v_0.toString()))
    },
    $a_0: function($p0) {
        if (Mscrm.InternalUtilities.JSTypes.isNull($p0.get_parameters()["order"])) return "";
        var $v_0 = "<order attribute='{0}' descending='{1}' />",
            $v_1 = Mscrm.InternalUtilities.JSTypes.isNull($p0.get_parameters()["isDescending"]) ||
                $p0.get_parameters()["isDescending"]
                ? "true"
                : "false";
        return String.format($v_0, $p0.get_parameters()["order"], $v_1)
    },
    $b_0: function($p0) {
        var $v_0 = 3;
        if (Mscrm.InternalUtilities.JSTypes.isNull($p0.get_parameters()["articleFilter"])) return $v_0;
        $v_0 = Number.parseInvariant($p0.get_parameters()["articleFilter"].toString());
        return $v_0
    },
    $S_0: function($p0, $p1) {
        var $v_0 = null;
        $v_0 = new Array($p1.get_count());
        for (var $v_1 = 0; $p1.get_count() > $v_1; $v_1++) {
            var $v_2 = $p1.get_item($v_1), $v_3 = new Mscrm.ArticlePost;
            $v_3.articleId = $v_2.getValue("articlepublicnumber").toString() +
                "_" +
                $v_2.getValue("knowledgearticleid").toString();
            $v_3.articleUId = $v_2.getValue("knowledgearticleid").toString();
            $v_3.question = $v_2.getValue("title").toString();
            $v_3.description = IsNull($v_2.getValue("description")) ? "" : $v_2.getValue("description").toString();
            $v_3.set_answer(IsNull($v_2.getValue("content")) ? "" : $v_2.getValue("content").toString());
            $v_3.lastModifiedOn = Mscrm.CrmNativeSearchInteraction.$C($v_2.getValue("modifiedon"));
            $v_3.createdOn = Mscrm.CrmNativeSearchInteraction.$C($v_2.getValue("createdon"));
            var $v_4 = $v_2.getFieldObjectData("statecode")["value"];
            $v_3.stateCode = $v_4;
            $v_3.published = $v_4 === 3;
            $v_3.sanitized = true;
            $v_3.timesViewed = IsNull($v_2.getValue("knowledgearticleviews"))
                ? 0
                : $v_2.getValue("knowledgearticleviews");
            if (!IsNull($v_2.getValue("expirationdate")))
                $v_3.expiredDate = Mscrm.CrmNativeSearchInteraction.$C($v_2.getValue("expirationdate"));
            $v_0[$v_1] = $v_3
        }
        return $v_0
    }
};
Mscrm.RetrieveArticlePostRequest = function() { this.$I_0 = {} };
Mscrm.RetrieveArticlePostRequest.prototype = {
    $F_0: 0,
    $G_0: 0,
    $H_0: null,
    $L_0: null,
    $K_0: null,
    get_pageNumber: function() { return this.$F_0 },
    set_pageNumber: function(value) {
        this.$F_0 = value;
        return value
    },
    get_pageSize: function() { return this.$G_0 },
    set_pageSize: function(value) {
        this.$G_0 = value;
        return value
    },
    get_pagingCookie: function() { return this.$H_0 },
    set_pagingCookie: function(value) {
        this.$H_0 = value;
        return value
    },
    get_sortModifier: function() { return this.$L_0 },
    set_sortModifier: function(value) {
        this.$L_0 = value;
        return value
    },
    get_requestType: function() { return this.$K_0 },
    set_requestType: function(value) {
        this.$K_0 = value;
        return value
    },
    get_startDate: function() { throw Error.notImplemented("The method or operation is not implemented.") },
    set_startDate: function(value) {
        throw Error.notImplemented("The method or operation is not implemented.");
        return value
    },
    get_endDate: function() { throw Error.notImplemented("The method or operation is not implemented.") },
    set_endDate: function(value) {
        throw Error.notImplemented("The method or operation is not implemented.");
        return value
    },
    get_parameters: function() { return this.$I_0 },
    set_parameters: function(value) {
        this.$I_0 = value;
        return value
    }
};
Mscrm.RetrieveArticlePostResponse = function() {};
Mscrm.RetrieveArticlePostResponse.prototype = {
    morePosts: false,
    posts: null,
    total: 0,
    results: 0,
    pageSize: 0,
    errorMessage: null,
    isSucceded: false,
    errorCode: 0,
    errorDescription: null,
    subErrorCode: null,
    subErrorDescription: null,
    get_morePosts: function() { return this.morePosts },
    set_morePosts: function(value) {
        this.morePosts = value;
        return value
    },
    get_posts: function() { return this.posts },
    set_posts: function(value) {
        this.posts = value;
        return value
    },
    get_total: function() { return this.total },
    set_total: function(value) {
        this.total = value;
        return value
    },
    get_results: function() { return this.results },
    set_results: function(value) {
        this.results = value;
        return value
    },
    get_pageSize: function() { return this.pageSize },
    set_pageSize: function(value) {
        this.pageSize = value;
        return value
    },
    get_errorMessage: function() { return this.errorMessage },
    set_errorMessage: function(value) {
        this.errorMessage = value;
        return value
    },
    get_isSucceeded: function() { return this.isSucceded },
    set_isSucceeded: function(value) {
        this.isSucceded = value;
        return value
    },
    get_errorCode: function() { return this.errorCode },
    set_errorCode: function(value) {
        this.errorCode = value;
        return value
    },
    get_errorDescription: function() { return this.errorDescription },
    set_errorDescription: function(value) {
        this.errorDescription = value;
        return value
    },
    get_subErrorCode: function() { return this.subErrorCode },
    set_subErrorCode: function(value) {
        this.subErrorCode = value;
        return value
    },
    get_subErrorDescription: function() { return this.subErrorDescription },
    set_subErrorDescription: function(value) {
        this.subErrorDescription = value;
        return value
    },
    get_pagingCookie: function() { throw Error.notImplemented("The method or operation is not implemented.") }
};
Type.registerNamespace("Mscrm.SearchWidgetControl.Runtime");
Mscrm.SearchWidgetControl.Runtime.AuthenticationService = function() {};
Mscrm.SearchWidgetControl.Runtime.AuthenticationService
    .$$cctor = function() { $P_CRM(window).unload(Mscrm.SearchWidgetControl.Runtime.AuthenticationService.dispose) };
Mscrm.SearchWidgetControl.Runtime.AuthenticationService.dispose = function(unloadEvent) {
    Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$2 = null;
    Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$U()
};
Mscrm.SearchWidgetControl.Runtime.AuthenticationService.ping = function() {
    var $v_0 = Mscrm.ExternalProviderFactory.getClient("parature");
    !IsNull($v_0) &&
        $v_0.validateConnection(Mscrm.SearchWidgetControl.Runtime.UrlUtility.get_validationUri(), null, null)
};
Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$c = function() {
    Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$3 = $P_CRM("<iframe style='display:none;' />");
    $P_CRM("body").append(Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$3);
    Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$3
        .on("load", function() { Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$f() });
    Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$5 = Mscrm.SearchWidgetControl.Runtime.UrlUtility
        .get_baseUri();
    Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$3
        .attr("src", Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$5)
};
Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$f = function() {
    Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$7 = window.setTimeout(function() {
            if (!IsNull(Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$2)) {
                Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$2
                    .reject(Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$R);
                Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$2 = null
            }
            window.clearTimeout(Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$7)
        },
        Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$J);
    Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$h()
};
Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$g = function() {
    Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$3.removeAttr("src");
    Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$3
        .attr("src", Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$5)
};
Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$h = function() {
    var $v_0 = Mscrm.ExternalProviderFactory.getClient("parature");
    !IsNull($v_0) &&
        $v_0.validateConnection(Mscrm.SearchWidgetControl.Runtime.UrlUtility.get_validationUri(),
            function() { Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$B(true, null) },
            function($p1_0, $p1_1) { Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$W($p1_0, $p1_1) })
};
Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$W = function($p0, $p1) {
    if (!Mscrm.SearchWidgetControl.Runtime.AuthenticationService
        .$A) Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$B(false, null);
    else if (Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$d($p0, $p1)) {
        var $v_0 = isNullOrEmptyString($p1) ? $p0 : $p1;
        Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$B(false, $v_0)
    } else
        window.setTimeout(function() {
                var $v_1 = isNullOrEmptyString($p1) ? $p0 : $p1;
                Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$B(false, $v_1)
            },
            Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$J)
};
Mscrm.SearchWidgetControl.Runtime.AuthenticationService
    .$d = function($p0, $p1) {
        return $p0 === "500" ||
            $p0 === "501" ||
            $p1 === Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$M ||
            $p1 === Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$N ||
            $p1 === Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$O ||
            $p1 === Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$P
    };
Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$B = function($p0, $p1) {
    if (IsNull(Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$2)) return;
    window.clearTimeout(Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$7);
    if (!Mscrm.SearchWidgetControl.Runtime.AuthenticationService
        .$A ||
        isNullOrEmptyString($p1)) Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$2.resolve($p0);
    else Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$2.reject($p1)
};
Mscrm.SearchWidgetControl.Runtime.AuthenticationService.get_checkSignedIn = function() {
    if (Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$5 !==
        Mscrm.SearchWidgetControl.Runtime.UrlUtility.get_baseUri()) {
        Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$2 = null;
        Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$5 = Mscrm.SearchWidgetControl.Runtime.UrlUtility
            .get_baseUri()
    }
    if (IsNull(Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$2)) {
        Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$2 = jQueryApi.jQueryDeferredFactory
            .Deferred(Boolean, String);
        if (IsNull(Mscrm.SearchWidgetControl.Runtime.AuthenticationService
            .$3)) Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$c();
        else Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$g();
        Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$2
            .always(function($p1_0) { Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$2 = null })
    }
    return Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$2.promise()
};
Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$U = function() {
    if (!IsNull(Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$3)) {
        Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$3.unbind("load");
        Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$3.remove();
        Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$3 = null;
        Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$5 = ""
    }
};
Mscrm.SearchWidgetControl.Runtime.UrlUtility = function() {};
Mscrm.SearchWidgetControl.Runtime.UrlUtility
    .get_externalServiceUri = function() { return Mscrm.SearchWidgetControl.Runtime.UrlUtility.$6 };
Mscrm.SearchWidgetControl.Runtime.UrlUtility.set_externalServiceUri = function(value) {
    Mscrm.SearchWidgetControl.Runtime.UrlUtility.$6 = value;
    return value
};
Mscrm.SearchWidgetControl.Runtime.UrlUtility.get_baseUri = function() {
    return Mscrm.SearchWidgetControl.Runtime.UrlUtility.$6.get_scheme() +
        "://" +
        Mscrm.SearchWidgetControl.Runtime.UrlUtility.$6.get_host()
};
Mscrm.SearchWidgetControl.Runtime.UrlUtility
    .get_validationUri = function() {
        return Mscrm.CrmUri.create(Mscrm.SearchWidgetControl.Runtime.UrlUtility.$6 + "/schema")
    };
Mscrm.ArticlePost.registerClass("Mscrm.ArticlePost", null, Mscrm.IArticlePost, Wall.Interfaces.IPost);
Mscrm.ExternalProviderFactory.registerClass("Mscrm.ExternalProviderFactory");
Mscrm.ParatureConverter.registerClass("Mscrm.ParatureConverter");
Mscrm.ParatureJsonData.registerClass("Mscrm.ParatureJsonData");
Mscrm.ParatureEntityData.registerClass("Mscrm.ParatureEntityData");
Mscrm.ParatureArticleData.registerClass("Mscrm.ParatureArticleData");
Mscrm.ParatureArticle.registerClass("Mscrm.ParatureArticle");
Mscrm.ParatureArticleFolder.registerClass("Mscrm.ParatureArticleFolder");
Mscrm.ParatureAttributeData.registerClass("Mscrm.ParatureAttributeData");
Mscrm.ParatureInteraction.registerClass("Mscrm.ParatureInteraction", null, Mscrm.IExternalInteractionProvider);
Mscrm.CrmNativeSearchInteraction.registerClass("Mscrm.CrmNativeSearchInteraction",
    null,
    Mscrm.IExternalInteractionProvider);
Mscrm.RetrieveArticlePostRequest.registerClass("Mscrm.RetrieveArticlePostRequest",
    null,
    Mscrm.IRetrieveArticlePostRequest,
    Wall.Interfaces.IRetrievePostsRequest);
Mscrm.RetrieveArticlePostResponse.registerClass("Mscrm.RetrieveArticlePostResponse",
    null,
    Mscrm.IRetrieveArticlePostResponse,
    Wall.Interfaces.IRetrievePostsResponse);
Mscrm.SearchWidgetControl.Runtime.AuthenticationService
    .registerClass("Mscrm.SearchWidgetControl.Runtime.AuthenticationService");
Mscrm.SearchWidgetControl.Runtime.UrlUtility.registerClass("Mscrm.SearchWidgetControl.Runtime.UrlUtility");
Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$2 = null;
Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$3 = null;
Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$5 = "";
Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$7 = 0;
Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$A = window._bIsOsdpOrg || window.IsCorsEnabledForKmControl;
Mscrm.SearchWidgetControl.Runtime.AuthenticationService
    .$J = Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$A ? 6e4 : 3e4;
Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$R = "408";
Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$O = "C6002";
Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$M = "C6003";
Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$N = "C6004";
Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$P = "C6009";
Mscrm.SearchWidgetControl.Runtime.AuthenticationService.$$cctor();
Mscrm.SearchWidgetControl.Runtime.UrlUtility.$6 = null