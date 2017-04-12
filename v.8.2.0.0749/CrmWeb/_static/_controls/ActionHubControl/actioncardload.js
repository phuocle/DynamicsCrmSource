
var cardTypeDictionary = window.top.cardTypeDictionary;
Array.prototype.unique = function() {
    return this.reduce(function(uniqueArray, current) {
            uniqueArray.indexOf(current) < 0 &&
                uniqueArray.push(current);
            return uniqueArray
        },
        [])
};

function populateCardTypeDictionary() {
    var resourcesArray = [
        "ActionCard.LetsGetStarted.ActivatedTitle", "ActionCard.LetsGetStarted.ActivatedBody",
        "Ribbon.Tooltip.actioncard.Dismiss", "Ribbon.Tooltip.actioncard.Snooze.Minutes",
        "Ribbon.Tooltip.actioncard.Snooze.Hours", "CardType_ToolTip_LetsGetStarted",
        "ActionCard.LetsGetStarted.CardsPreview"
    ];
    if (_Script.isNullOrUndefined(cardTypeDictionary)) {
        cardTypeDictionary = {};
        for (cardTypeIndex = 0; cardTypeIndex < Mscrm.CardTypeData.length; cardTypeIndex++) {
            var cardTypeData = Mscrm.CardTypeData[cardTypeIndex];
            cardTypeDictionary[cardTypeData.cardtypeid.split("{").pop().split("}")[0]] = cardTypeData;
            resourcesArray = pushResourceStringsFromCardType(cardTypeData, resourcesArray)
        }
        Xrm.Internal.getStringKeyList(resourcesArray.unique(), window.top);
        window.top.cardTypeDictionary = cardTypeDictionary
    }
}

function pushResourceStringsFromCardType(cardTypeData, resourcesArray) {
    if (cardTypeData.actions) {
        var actionObject = JSON.parse(cardTypeData.actions),
            webClientActions = actionObject["WebClient"],
            actions = webClientActions["Actions"];
        resourcesArray = resourcesArray.concat(Object.keys(actions))
    }
    cardTypeData.softtitle &&
        resourcesArray.push(cardTypeData.softtitle);
    var cardName = cardTypeData.cardname;
    if (cardName) {
        if (cardName.indexOf(":") >= 0)
            cardName = cardName.replace(":", "_");
        resourcesArray.push("CardType_ToolTip_" + cardName)
    }
    return resourcesArray
}

function loadCards(isCarouselView) {
    populateCardTypeDictionary();
    if (Mscrm.ActionCardData.length > 0) {
        $("#smileyCard").hide();
        window.top.SHOWCAROUSEL = true;
        var resourcesArray = [];
        for (actionCardIndex = 0; actionCardIndex < Mscrm.ActionCardData.length; actionCardIndex++) {
            var actionCardData = Mscrm.ActionCardData[actionCardIndex];
            resourcesArray = pushResourceStringsFromActionCard(actionCardData, resourcesArray)
        }
        Xrm.Internal.getStringKeyList(resourcesArray.unique(), window.top);
        if (isLetsGetStartCard())
            loadLetsGetStartedCard(false);
        else
            loadActionCards(isCarouselView);
        isCarouselView &&
            $(parent.$("#containerID")).show()
    } else if (isCarouselView)
        $(parent.$("#containerID")).hide();
    else {
        window.top.SHOWCAROUSEL = false;
        var emptyCardMessageHeader = Xrm.Internal.getResourceString("ActionCard.CFC.Common.NoCardsTitle", window.top),
            emptyCardMessage = Xrm.Internal.getResourceString("DelveActionHub.NoRecordsMessage", window.top);
        $("#emptyCardMessageHeaderDiv").html(emptyCardMessageHeader);
        $("#emptyCardMessageDiv").html(emptyCardMessage);
        $("#smileyCard").show(500)
    }
}

function pushResourceStringsFromActionCard(actionCardData, resourcesArray) {
    if (actionCardData.referencetokens) {
        var referenceTokenObject = JSON.parse(actionCardData.referencetokens)["Tokens"];
        referenceTokenObject["title"] &&
            resourcesArray.push(referenceTokenObject["title"]["ResourceId"]);
        referenceTokenObject["body"] &&
            resourcesArray.push(referenceTokenObject["body"]["ResourceId"])
    }
    return resourcesArray
}

function loadLetsGetStartedCard(areActionCardsActive) {
    var varAreActionCardsActive = areActionCardsActive,
        varCardTypeData = cardTypeDictionary[Mscrm.ActionCardData[0].cardtypeid.Id.toString().toUpperCase()],
        letsGetStartedCardData = Mscrm.ActionCardData[0],
        cardElement = document.getElementsByClassName("actionhubcontrol");
    $(cardElement).addClass("LetGetStartedParent");
    letsGetStartedCardData.cardTypeData = varCardTypeData;
    var objCardData = {
            mode: "medium",
            cardId: letsGetStartedCardData.actioncardid,
            cardName: typeof varCardTypeData.cardname == "object"
                ? varCardTypeData.cardname.get_value()
                : varCardTypeData.cardname,
            cardTypeIcon: typeof varCardTypeData.cardtypeicon == "object"
                ? varCardTypeData.cardtypeicon.get_value()
                : varCardTypeData.cardtypeicon,
            description: letsGetStartedCardData.description,
            data: letsGetStartedCardData
        },
        letsGetStartedCard = MscrmControls.ActionCard
            .LetsGetStartedCardControl({ cardData: objCardData, areActionCardsActive: varAreActionCardsActive });
    ReactDOM.render(letsGetStartedCard, document.getElementById("card1"))
}

function loadActionCards(isCarouselView) {
    for (var actionCardIndex = 1; actionCardIndex <= Mscrm.ActionCardData.length; actionCardIndex++) {
        var varCardTypeData = cardTypeDictionary[Mscrm.ActionCardData[actionCardIndex - 1].cardtypeid.Id.toString()
                .toUpperCase()],
            varActionCardData = Mscrm.ActionCardData[actionCardIndex - 1];
        varActionCardData.cardTypeData = varCardTypeData;
        var objCardData = {
                mode: "medium",
                cardId: varActionCardData.actioncardid,
                cardName: typeof varCardTypeData.cardname == "object"
                    ? varCardTypeData.cardname.get_value()
                    : varCardTypeData.cardname,
                cardTypeIcon: typeof varCardTypeData.cardtypeicon == "object"
                    ? varCardTypeData.cardtypeicon.get_value()
                    : varCardTypeData.cardtypeicon,
                softTitle: typeof varCardTypeData.softtitle == "object"
                    ? varCardTypeData.softtitle.get_value()
                    : varCardTypeData.softtitle,
                title: varActionCardData.title,
                description: varActionCardData.description,
                data: varActionCardData
            },
            ActionCardControl = MscrmControls.ActionCard
                .varActionCardControl({ cardData: objCardData, isCarouselView: isCarouselView });
        ReactDOM.render(ActionCardControl, document.getElementById("card" + actionCardIndex))
    }
}

function applyCarouselCss() {
    if (Mscrm.ActionCardData.length > 0)
        for (var actioncards = document.getElementsByClassName("actionhubcontrol"),
            i = 0;
            i < actioncards.length;
            i++)
            actioncards[i].setAttribute("style", "display:inline-block");
    else
        $(parent.$("#containerID")).hide()
}

function isLetsGetStartCard() {
    if (Mscrm.ActionCardData.length == 1 &&
        Mscrm.ActionCardData[0].cardtypeid.Id.toString().toUpperCase() == "0734FEA3-46B9-4E9C-9001-53E957EC2DD4")
        return true;
    return false
}

function openRIConfiguUiPopUp() {
    var src = Mscrm.CrmUri.create("/_static/tools/RelationshipIntelligenceConfig/UnifiedConfig.html?ispersonal=true")
        .toString();
    window.open(src, "_blank", "toolbar=0,location=0,menubar=0,resizable=1,width=966,height=628")
}

function openRIFeedback() {
    window.open("https://go.microsoft.com/fwlink/p/?LinkId=825778",
        "_blank",
        "toolbar=0,location=0,menubar=0,resizable=1,width=966,height=628,scrollbars=1")
}

window.onload = function() {
    var _window = window,
        feedbackImageUrl = _window.getAttributeInWindow("CDNURL") +
            "/_static/_controls/actionhubcontrol/feedback_16.png";
    $("#feedbackImage").attr("src", feedbackImageUrl);
    var customizationImageUrl = _window.getAttributeInWindow("CDNURL") +
        "/_static/_controls/actionhubcontrol/card_customization_16.png";
    $("#customizationImage").attr("src", customizationImageUrl);
    $("#feedbackImage").hover(function() {
            var feedbackImageUrlOnHover = _window.getAttributeInWindow("CDNURL") +
                "/_static/_controls/actionhubcontrol/feedback_hover_16.png";
            $("#feedbackImage").attr("src", feedbackImageUrlOnHover)
        },
        function() {
            $("#feedbackImage").attr("src", feedbackImageUrl)
        });
    $("#customizationImage").hover(function() {
            var customizationImageUrlOnhover = _window.getAttributeInWindow("CDNURL") +
                "/_static/_controls/actionhubcontrol/card_customization_hover_16.png";
            $("#customizationImage").attr("src", customizationImageUrlOnhover)
        },
        function() {
            $("#customizationImage").attr("src", customizationImageUrl)
        });
    $("#feedbackAnchor").on("keydown click",
        function(e) {
            if (e.which === 13 || e.which === 32 || e.type === "click") {
                e.preventDefault();
                openRIFeedback()
            }
        });
    $("#customizeAnchor").on("keydown click",
        function(e) {
            if (e.which === 13 || e.which === 32 || e.type === "click") {
                e.preventDefault();
                openRIConfiguUiPopUp()
            }
        })
}