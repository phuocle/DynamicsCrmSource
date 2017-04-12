
$(window).load(function() {
    loadAccessibility();
    var keyCodesCombination = [];
    $("body").keydown(function(e) {
        if (e.which === 78 && e.altKey) {
            $(".tiles-createNewApp-button").click();
            e.preventDefault();
            e.stopPropagation()
        } else
            keyCodesCombination.push(e.which)
    }).keyup(function(e) {
        keyCodesCombination = jQuery.unique(keyCodesCombination);
        keyCodesCombination[0] == 17 &&
            keyCodesCombination[1] == 16 &&
            keyCodesCombination[2] == 51 &&
            $(window.parent.document).find("#TabnavTabLogoTextId").find(".navTabButtonLink").focus();
        keyCodesCombination = []
    });
    $(".tile-filters-draftApps , .tile-filters-publishedApps").click(function() {
        loadAccessibility()
    });
    var contentIframe = $("iframe[id=contentIFrame0]", parent.document);
    if (window.UseTabletExperience) {
        $("div[id=crmTopBar]", parent.document).css("height", "0px");
        contentIframe.height() == 0 &&
            contentIframe.parent().css("height", $(parent.document.body).height() + "px")
    }
    contentIframe.css("height", "calc(100% - 40px)")
});

function loadAccessibility() {
    $(document).ready(function() {
        $(".tile-filters-draftApps , .tile-filters-publishedApps").off("keydown").on("keydown",
            function(e) {
                if (e.which === 13) {
                    this.click();
                    loadAccessibility()
                }
            });
        $("body", parent.document).find(":tabbable").first().off("keydown").on("keydown",
            function(e) {
                if (e.which === 9 && e.shiftKey) {
                    $("body").find(":tabbable").last().focus();
                    e.preventDefault();
                    e.stopPropagation()
                }
            });
        $("#appModuleContainerPanel").find(":tabbable").last().on("keydown",
            function(e) {
                if (!(e.which === 9 && e.shiftKey))
                    if (e.which === 9)
                        if (!$("#tileAdminOptionsFlyoutContainerId").is(":visible")) {
                            $("body", parent.document).find(":tabbable").first().focus();
                            e.preventDefault();
                            e.stopPropagation()
                        }
            });
        $(".tile-button").off("keydown").on("keydown",
            function(e) {
                if (e.which === 13) {
                    this.click();
                    e.preventDefault();
                    e.stopPropagation()
                } else if (e.which === 37) {
                    $(this).parent().prev().find(".tile-button").focus();
                    e.preventDefault();
                    e.stopPropagation()
                } else if (e.which === 39) {
                    if ($(this).parent().next().find(".tile-button").length > 0)
                        $(this).parent().next().find(".tile-button").focus();
                    else
                        $(".tile-button").first().focus();
                    e.preventDefault();
                    e.stopPropagation()
                } else if (e.which === 77 && e.altKey) {
                    $(this).children().find(".tile-ellipsis").click();
                    $(".tiles-moreInfoFlyout-row").first().focus();
                    loadFlyOutAccessibility();
                    e.preventDefault();
                    e.stopPropagation()
                }
            });
        $(".tile-ellipsis").keydown(function(e) {
            if (e.which === 13 || e.which === 40) {
                this.click();
                $(".tiles-moreInfoFlyout-row").first().focus();
                loadFlyOutAccessibility();
                e.preventDefault();
                e.stopPropagation()
            } else if (e.which === 27) {
                $("#tileAdminOptionsFlyoutContainerId").hide();
                this.focus();
                e.preventDefault();
                e.stopPropagation()
            } else if (e.which === 37) {
                e.preventDefault();
                e.stopPropagation()
            } else if (e.which === 39) {
                e.preventDefault();
                e.stopPropagation()
            }
        });
        $(".tile-ellipsis").click(function(e) {
            loadFlyOutAccessibility();
            var flyoutHeight = $("#tileAdminOptionsFlyoutContainerId").height(),
                windowHeight = $(window).height(),
                elementOffset = $(e.target).offset().top,
                effectiveOffset = elementOffset - $(window).scrollTop();
            flyoutHeight + 25 > windowHeight - effectiveOffset &&
                $("#tileAdminOptionsFlyoutContainerId").css("top", "0")
        });
        $(".tiles-createNewApp-button").off("keydown").on("keydown",
            function(e) {
                if (e.which === 13) {
                    this.click();
                    e.preventDefault();
                    e.stopPropagation()
                }
            });
        $(".tile-button-icon-img").on("error",
            function() {
                $(this).css("min-height", "100%")
            });
        handleTilePanelWidth()
    })
}

function loadFlyOutAccessibility() {
    $(".tiles-moreInfoFlyout-row").off("keydown").on("keydown",
        function(e) {
            if (e.which === 13) {
                $(".tiles-moreInfoFlyout-row").parent().parent().focus();
                $(this).click();
                $("#tileAdminOptionsFlyoutContainerId").hide();
                e.preventDefault();
                e.stopPropagation()
            } else if (e.which === 40) {
                if ($(this).next(":tabbable").length <= 0)
                    $(".tiles-moreInfoFlyout-row").first().focus();
                else
                    $(this).next(":tabbable").focus();
                e.preventDefault();
                e.stopPropagation()
            } else if (e.which === 38) {
                if ($(this).prev(":tabbable").length > 0)
                    $(this).prev(":tabbable").focus();
                else {
                    $(".tiles-moreInfoFlyout-row").parent().parent().focus();
                    $("#tileAdminOptionsFlyoutContainerId").hide()
                }
                e.preventDefault();
                e.stopPropagation()
            } else if (e.which === 27) {
                $(this).parent().parent().focus();
                $("#tileAdminOptionsFlyoutContainerId").hide();
                e.preventDefault();
                e.stopPropagation()
            }
        });
    $(".tiles-moreInfoFlyout-row").last().keydown(function(e) {
        if (!(e.which === 9 && e.shiftKey))
            if (e.which === 9) {
                $(".tiles-moreInfoFlyout-row").first().focus();
                e.preventDefault();
                e.stopPropagation()
            }
    });
    $(".tiles-moreInfoFlyout-row").first().keydown(function(e) {
        if (e.which === 9 && e.shiftKey) {
            $(this).parent().parent().focus();
            $("#tileAdminOptionsFlyoutContainerId").hide();
            e.preventDefault();
            e.stopPropagation()
        }
    })
}

function handleTilePanelWidth() {
    if ($(document).height() > $(window).height())
        $("#tileContainer").css("width", "calc(100% + 16px)");
    else
        $("#tileContainer").css("width", "100%")
}