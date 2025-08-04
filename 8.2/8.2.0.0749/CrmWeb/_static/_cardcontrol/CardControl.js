Type.registerNamespace("Mscrm");
Mscrm.CardOffset = function() {};
Mscrm.CardOffset.prototype = {
    $5_0: 0,
    get_leftOffset: function() { return this.$5_0 },
    set_leftOffset: function(value) {
        this.$5_0 = value;
        return value
    },
    $6_0: 0,
    get_topOffset: function() { return this.$6_0 },
    set_topOffset: function(value) {
        this.$6_0 = value;
        return value
    }
};
Mscrm.CardControl = function(element) {
    this.$$d_$I_3 = Function.createDelegate(this, this.$I_3);
    this
        .$C_3 =
        "<span id='loadingSpan'><table id='loadingContent' style='text-align:center;height:100%;width:100%;'><tbody><tr><td><div><img src='" + window.CDNURL + "/_imgs/advfind/progress.gif' alt='{0}'></div><div><label id='loadingLabel'>{0}</label></div></td></tr></tbody></table></span>";
    Mscrm.CardControl.initializeBase(this, [element]);
    this.$4_3 = $get(this.get_id());
    this.$1_3 = false;
    this.$0_3 = false;
    this.$D_3()
};
Mscrm.CardControl.loadCardView = function(componentId) {
    var $v_0 = "function " +
            componentId +
            "_Init() { if (IsNull($find('crmEventManager'))) window.setTimeout('" +
            componentId +
            "_Init()', 10); else { crmCreate(Mscrm.CardControl, {'subscribedEvents':[53]}, null, {'eventManager':'crmEventManager'}, $get('" +
            componentId +
            "')); } } " +
            componentId +
            "_Init();",
        $v_1 = new Function($v_0);
    $v_1.apply(window)
};
Mscrm.CardControl.loadDefaultPreviewImage = function(previewImageTagId) {
    var $v_0 = previewImageTagId.substring(previewImageTagId.indexOf("_") + 1, previewImageTagId.length),
        $v_1 = $get("DelveCard_" + $v_0),
        $v_2 = $P_CRM("#fileType", $v_1).text(),
        $v_3 = $get(previewImageTagId);
    if (!IsNull($v_3))
        switch ($v_2.toLowerCase()) {
        case "excel":
            $v_3.setAttribute("src", window.CDNURL + "/_imgs/formeditorribbon/placeholderexcel.jpg");
            break;
        case "onenote":
            $v_3.setAttribute("src", window.CDNURL + "/_imgs/formeditorribbon/placeholderonenote.jpg");
            break;
        case "powerpoint":
            $v_3.setAttribute("src", window.CDNURL + "/_imgs/formeditorribbon/placeholderpowerpoint.jpg");
            break;
        case "word":
            $v_3.setAttribute("src", window.CDNURL + "/_imgs/formeditorribbon/placeholderword.jpg");
            break;
        case "pdf":
            $v_3.setAttribute("src", window.CDNURL + "/_imgs/formeditorribbon/placeholderpdf.jpg");
            break;
        default:
            $v_3.setAttribute("src", window.CDNURL + "/_imgs/formeditorribbon/placeholderother.jpg");
            break
        }
};
Mscrm.CardControl.prototype = {
    $1_3: false,
    $4_3: null,
    $9_3: 0,
    $2_3: null,
    $8_3: 0,
    $7_3: null,
    $0_3: false,
    $3_3: null,
    initialize: function() { Mscrm.CrmUIControl.prototype.initialize.call(this) },
    dispose: function() { this.$B_3() },
    handleEvent: function(eventCode, parameters, sourceComponent) {
        var $v_0 = false;
        if (!IsNull(parameters) && !IsNull(parameters["isRefreshAllClicked"])) $v_0 = parameters["isRefreshAllClicked"];
        var $v_1 = Mscrm.CrmUIControl.prototype.handleEvent.call(this, eventCode, parameters, sourceComponent);
        if (eventCode === 53 && this.$1_3 && $v_0) this.$D_3();
        else if (this.$1_3) {
            this.$1_3 = false;
            this.$A_3()
        }
        return $v_1
    },
    $D_3: function() {
        this.$M_3();
        this.$1_3 = false;
        this.$0_3 = false;
        this.$K_3()
    },
    $B_3: function() {
        var $v_0 = $P_CRM(this.$4_3);
        $v_0.children().length && $v_0.empty()
    },
    $M_3: function() {
        var $v_0 = this.$H_3();
        this.$4_3.innerHTML = String.format(this.$C_3, CrmEncodeDecode.CrmHtmlEncode($v_0))
    },
    $H_3: function() { return window.LOCID_PAGELOADING_MSG },
    $K_3: function() {
        var $v_0 = new Mscrm.RemoteCommandXml("AppGridWebService", "Refresh"),
            $$t_2 = this,
            $v_1 = function() { $v_0.setContent($$t_2.$E_3()) };
        this.$F_3($v_0, $v_1)
    },
    $F_3: function($p0, $p1) {
        $p1 && $p1();
        $p0.execute(this.$$d_$I_3)
    },
    $I_3: function($p0, $p1) {
        var $$t_2 = this;
        window.setTimeout(function() { $$t_2.$J_3($p0, $p1) }, 1)
    },
    $J_3: function($p0, $p1) {
        if ($p0.get_success() && !isNullOrEmptyString($p0.get_returnValue())) {
            var $v_0 = XUI.Xml.LoadXml($p0.get_returnValue());
            this.$L_3(XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_0, "gridXml/gridHtml", null)));
            this.$A_3()
        }
        return true
    },
    $L_3: function($p0) {
        this.$B_3();
        this.$4_3.innerHTML = $p0
    },
    $A_3: function() {
        var $v_0 = $P_CRM("#" + this.get_id() + "_span"),
            $v_1 = $P_CRM("div.cardsContainer", this.$4_3),
            $v_2 = $P_CRM("div.cardsUIContainer", this.$4_3);
        if (!this.$0_3) this.$2_3 = $P_CRM("div.card", $v_1);
        if (!this.$2_3.length) {
            $v_1.removeClass("cardsHiddenContainer");
            $v_0.addClass("delveCss delveMessageCss");
            if ($P_CRM("div.cardsContainerHeader", this.$4_3).length) {
                var $v_7 = $P_CRM("#" + this.get_id() + "_CardControl");
                $v_7.addClass("delveWithBackGroundColor")
            }
            this.$1_3 = true;
            return
        }
        var $v_3 = $v_2.innerWidth();
        if (!this.$0_3) this.$8_3 = $P_CRM(this.$2_3[0]).outerWidth(true);
        var $v_4 = parseInt($v_3 / this.$8_3);
        $v_4 = !$v_4 ? 1 : $v_4;
        if (this.$0_3 && $v_4 === this.$9_3) {
            this.$1_3 = true;
            return
        }
        this.$9_3 = $v_4;
        var $v_5 = document.createElement("div");
        $v_5.setAttribute("style", "position:relative;");
        $v_5.setAttribute("class", "cardsContainer");
        this.$3_3 = new Array($v_4);
        for (var $v_8 = 0; $v_8 < $v_4; $v_8++) this.$3_3[$v_8] = 0;
        if (!this.$0_3) this.$7_3 = new Array(this.$2_3.length);
        for (var $v_6 = null, $v_9 = 0; $v_9 < this.$2_3.length; $v_9++) {
            if (!this.$0_3) this.$7_3[$v_9] = $P_CRM(this.$2_3[$v_9]).outerHeight(true);
            var $v_A = this.$2_3[$v_9].cloneNode(true);
            $v_6 = this.$G_3();
            $v_A.setAttribute("style", "left:" + $v_6.$5_0 * this.$8_3 + "px; top:" + $v_6.$6_0 + "px;");
            $v_5.appendChild($v_A);
            this.$3_3[$v_6.$5_0] = $v_6.$6_0 + Number.parseInvariant(this.$7_3[$v_9].toString())
        }
        $v_1.remove();
        $v_0.addClass("delveWithBackGroundColor");
        $v_2.append($P_CRM($v_5));
        this.$1_3 = true;
        this.$0_3 = true
    },
    $G_3: function() {
        for (var $v_0 = 0, $v_1 = Number.parseInvariant(this.$3_3[0].toString()), $v_3 = 1;
            $v_3 < this.$3_3.length;
            $v_3++)
            if (Number.parseInvariant(this.$3_3[$v_3].toString()) < $v_1) {
                $v_0 = $v_3;
                $v_1 = Number.parseInvariant(this.$3_3[$v_3].toString())
            }
        var $v_2 = new Mscrm.CardOffset;
        $v_2.$5_0 = $v_0;
        $v_2.$6_0 = $v_1;
        return $v_2
    },
    $E_3: function() {
        var $v_0 = "<grid>";
        $v_0 += "<sortColumns/>";
        $v_0 += "<pageNum>1</pageNum>";
        $v_0 += "<recsPerPage>50</recsPerPage>";
        $v_0 += "<dataProvider>Microsoft.Crm.Application.Platform.Grid.GridDataProviderQueryBuilder</dataProvider>";
        $v_0 += "<uiProvider>Microsoft.Crm.Application.Controls.GridUIProvider</uiProvider>";
        $v_0 += "<cols/>";
        $v_0 += "<max>1</max>";
        $v_0 += "<refreshAsync>True</refreshAsync>";
        $v_0 += "<pagingCookie/>";
        $v_0 += "<enableMultiSort>true</enableMultiSort>";
        $v_0 += "<enablePagingWhenOnePage>true</enablePagingWhenOnePage>";
        $v_0 += "<refreshCalledFromRefreshButton>1</refreshCalledFromRefreshButton>";
        $v_0 += "<returntotalrecordcount>true</returntotalrecordcount>";
        $v_0 += "<getParameters>getFetchXmlForFilters</getParameters>";
        $v_0 += "<parameters>";
        $v_0 += "<viewid>D175CD98-E31E-4D68-8B02-14D756746567</viewid>";
        $v_0 += "<RenderAsync>0</RenderAsync>";
        $v_0 += "<LoadOnDemand>0</LoadOnDemand>";
        $v_0 += "<deleteAction></deleteAction>";
        $v_0 += "<autorefresh>1</autorefresh>";
        $v_0 += "<LayoutStyle>CardUI</LayoutStyle>";
        $v_0 += "<maxselectableitems>1</maxselectableitems>";
        $v_0 += "<isGridFilteringEnabled>1</isGridFilteringEnabled>";
        $v_0 += "<viewtype>1039</viewtype>";
        $v_0 += "<viewts>427219</viewts>";
        $v_0 += "<RecordsPerPage>8</RecordsPerPage>";
        $v_0 += "<viewTitle>Trending Documents</viewTitle>";
        $v_0 += "<layoutXml></layoutXml>";
        $v_0 += "<otc>9950</otc>";
        $v_0 += "<otn>officegraphdocument</otn>";
        $v_0 += "<entitydisplayname>OfficeGraphDocument</entitydisplayname>";
        $v_0 += "<titleformat></titleformat>";
        $v_0 += "<entitypluraldisplayname>OfficeGraphDocuments</entitypluraldisplayname>";
        $v_0 += "<expandable>1</expandable>";
        $v_0 += "<showjumpbar>0</showjumpbar>";
        $v_0 += "<maxrowsbeforescroll>12</maxrowsbeforescroll>";
        $v_0 += "<tabindex>0</tabindex>";
        $v_0 += "<refreshasynchronous>1</refreshasynchronous>";
        $v_0 += "<subgridAutoExpand>0</subgridAutoExpand>";
        $v_0 += "<relName></relName>";
        $v_0 += "<roleOrd>-1</roleOrd>";
        $v_0 += "<relationshipType>0</relationshipType>";
        $v_0 += "<ribbonContext>SubGridStandard</ribbonContext>";
        $v_0 += "<GridType>SubGrid</GridType>";
        $v_0 += "<enableContextualActions>True</enableContextualActions>";
        $v_0 += "<teamTemplateId></teamTemplateId>";
        $v_0 += "<isWorkflowSupported>false</isWorkflowSupported>";
        $v_0 += "<enableFilters></enableFilters>";
        $v_0 += "<isTurboForm>0</isTurboForm>";
        $v_0 += "</parameters>";
        $v_0 += "<columns>";
        $v_0 +=
            "<column width='300' isHidden='false' isMetadataBound='true' isSortable='true' label='Title' fieldname='title' entityname='officegraphdocument' renderertype='Crm.PrimaryField'>title</column>";
        $v_0 +=
            "<column width='150' isHidden='false' isMetadataBound='true' isSortable='true' label='WebLocationUrl' fieldname='weblocationurl' entityname='officegraphdocument'>weblocationurl</column>";
        $v_0 +=
            "<column width='100' isHidden='false' isMetadataBound='true' isSortable='true' label='CreatedTime' fieldname='createdtime' entityname='officegraphdocument'>createdtime</column>";
        $v_0 +=
            "<column width='100' isHidden='false' isMetadataBound='true' isSortable='true' label='ModifiedTime' fieldname='modifiedtime' entityname='officegraphdocument'>modifiedtime</column>";
        $v_0 +=
            "<column width='0' isHidden='true' isMetadataBound='true' isSortable='false' label='DocumentId' fieldname='documentid' entityname='officegraphdocument'>documentid</column>";
        $v_0 +=
            "<column width='0' isHidden='true' isMetadataBound='true' isSortable='false' label='DocumentPreviewMetadata' fieldname='documentpreviewmetadata' entityname='officegraphdocument'>documentpreviewmetadata</column>";
        $v_0 +=
            "<column width='150' isHidden='false' isMetadataBound='true' isSortable='true' label='PreviewImageUrl' fieldname='previewimageurl' entityname='officegraphdocument'>previewimageurl</column>";
        $v_0 +=
            "<column width='100' isHidden='false' isMetadataBound='true' isSortable='true' label='FileType' fieldname='filetype' entityname='officegraphdocument'>filetype</column>";
        $v_0 +=
            "<column width='100' isHidden='false' isMetadataBound='true' isSortable='true' label='SiteUrl' fieldname='siteurl' entityname='officegraphdocument'>siteurl</column>";
        $v_0 +=
            "<column width='0' isHidden='true' isMetadataBound='true' isSortable='false' label='SiteTitle' fieldname='sitetitle' entityname='officegraphdocument'>sitetitle</column>";
        $v_0 +=
            "<column width='0' isHidden='true' isMetadataBound='true' isSortable='false' label='ViewCount' fieldname='viewcount' entityname='officegraphdocument'>viewcount</column>";
        $v_0 +=
            "<column width='0' isHidden='true' isMetadataBound='true' isSortable='false' label='ReadUrl' fieldname='readurl' entityname='officegraphdocument'>readurl</column>";
        $v_0 +=
            "<column width='0' isHidden='true' isMetadataBound='true' isSortable='false' label='FileExtension' fieldname='fileextension' entityname='officegraphdocument'>fileextension</column>";
        $v_0 +=
            "<column width='0' isHidden='true' isMetadataBound='true' isSortable='false' label='SecondaryFileExtension' fieldname='secondaryfileextension' entityname='officegraphdocument'>secondaryfileextension</column>";
        $v_0 += "</columns>";
        $v_0 += "</grid>";
        return $v_0
    }
};
Mscrm.CardOffset.registerClass("Mscrm.CardOffset");
Mscrm.CardControl.registerClass("Mscrm.CardControl", Mscrm.CrmUIControl)