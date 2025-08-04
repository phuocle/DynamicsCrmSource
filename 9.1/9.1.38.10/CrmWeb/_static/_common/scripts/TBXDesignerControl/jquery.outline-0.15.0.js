//var _define = define;
//define = null;
/* jQuery.fracs 0.15.0 - http://larsjung.de/jquery-fracs/ */
(function () {
    'use strict';

    // Some often used references.
    var $ = jQuery;
    var $window = $(window);
    var extend = $.extend;
    var fracs = $.fracs;
    var Rect = fracs.Rect;
    var Viewport = fracs.Viewport;


    // Outline
    // -------

    var defaults = {
        crop: false,
        duration: 0,
        focusWidth: 0.5,
        focusHeight: 0.5,
        autoFocus: true,
        styles: [{
            selector: 'header,footer,section,article',
            fillStyle: 'rgb(230,230,230)'
        }, {
            selector: 'h1,h2,h3,h4',
            fillStyle: 'rgb(255,144,55)'
        }],
        viewportStyle: {
            fillStyle: 'rgba(255,144,55,0.3)'
        },
        viewportDragStyle: {
            fillStyle: 'rgba(255,144,55,0.5)'
        },
        zoomOutDiv: Object,
        closeMiniMapSymbol: String,
        showMiniMapSymbol: String,
        processComponents: String,
        rerenderMinimapThroughDragDropFlag: Boolean,
        miniMapTileWidthRatio: Number,
        miniMapTileHeightRatio: Number,
        miniMapViewPortLeftPadding: Number,
        invertViewport: false
    };

    // Quick and dirty.
    function Outline(canvas, options, viewport) {

        if (!canvas || !$.isFunction(canvas.getContext)) {
            return null;
        }

        var context = canvas.getContext('2d');
        if (!context) {
            return null;
        }

        viewport = viewport || window;

        var settings = extend({}, defaults, options);

        var $canvas = $(canvas);
        var width = $canvas.attr('width');
        var height = $canvas.attr('height');

        var $viewport = $(viewport);
        var $zoomport = $(settings.zoomOutDiv);
        var viewportObj = new Viewport(viewport);
        var find = settings.zoomOutDiv === window ? function (selector) { return $(selector); } : function (selector) { return $zoomport.find(selector); };

        var drag = false;

        var currentContentRect;
        var currentViewportRect;
        var zoomOutContentRect;
        var zoomOutViewportRect;
        var currentScale;
        var zoomOutcurrentScale;
        var focusWidth;
        var focusHeight;
        var drawViewportFlag = false;
        var zoomTransformRatio;
        var firstLineInConnectorPair = true;
        var processComponentsArray = settings.processComponents.split(",");

        if ($("#canvas").css("transform").search('matrix3d') == -1) {
            zoomTransformRatio = $("#canvas").css("transform").split("matrix(")[1].split(",")[0]
        }
        else {
            zoomTransformRatio = $("#canvas").css("transform").split("matrix3d(")[1].split(",")[0]
        }

        function drawRect(rect, strokeWidth, strokeStyle, fillStyle, invert) {

            if (!rect || !(strokeStyle || fillStyle)) {
                return;
            }

            /* ViewPort Co-ordinates */
            var viewPortLeft = ((rect.left * settings.miniMapTileWidthRatio) / zoomTransformRatio) + settings.miniMapViewPortLeftPadding;
            var viewPortTop = ((rect.top) / zoomTransformRatio) * settings.miniMapTileHeightRatio;
            var viewPortWidth = (rect.width * settings.miniMapTileWidthRatio) / zoomTransformRatio;
            var viewPortHeight = (rect.height * settings.miniMapTileHeightRatio) / zoomTransformRatio;

            if (fillStyle) {
                context.beginPath();
                if (invert) {
                    context.rect(0, 0, currentContentRect.width, rect.top);
                    context.rect(0, rect.top, rect.left, rect.height);
                    context.rect(rect.right, rect.top, currentContentRect.width - rect.right, rect.height);
                    context.rect(0, rect.bottom, currentContentRect.width, currentContentRect.height - rect.bottom);
                } else {
                    if (drawViewportFlag) {
                        /* Draw Viewport */
                        context.rect(viewPortLeft, viewPortTop, viewPortWidth, viewPortHeight);
                    }
                    else if (settings.rerenderMinimapThroughDragDropFlag && zoomTransformRatio != 1) {
                        context.rect(rect.left / zoomTransformRatio, rect.top / zoomTransformRatio, rect.width, rect.height);
                    }
                    else {
                        context.rect(rect.left, rect.top, rect.width, rect.height);
                    }
                }
                context.fillStyle = fillStyle;
                context.fill();
            }
            if (strokeStyle) {
                context.beginPath();
                if (drawViewportFlag) {
                    /* Draw Border around Viewport */
                    context.rect(viewPortLeft, viewPortTop, viewPortWidth, viewPortHeight);
                }
                else if (zoomTransformRatio != 1) {
                    context.rect(rect.left / zoomTransformRatio, rect.top / zoomTransformRatio, rect.width, rect.height);
                }
                else {
                    context.rect(rect.left, rect.top, rect.width, rect.height);
                }
                context.lineWidth = zoomOutcurrentScale ? Math.max(strokeWidth, 0.2 / zoomOutcurrentScale) : strokeWidth;
                context.strokeStyle = strokeStyle;
                context.stroke();
            }
        }

        function drawElement(element, strokeWidth, strokeStyle, fillStyle) {

            var $element = $(element);
            var rect = Rect.ofElement(element);

            /* Return if the rectangle object is un-defined OR both width and height are 0 */
            if (!rect || (rect.width <= 0 && rect.height <= 0)) {
                return;
            }

            /* If only width is 0, make it 1 */
            if (rect.width === 0 && rect.height > 0) {
                rect.width = 1;
            }

            /* If only height is 0, make it 1 */
            if (rect.width > 0 && rect.height === 0) {
                rect.height = 1;
            }

            /* Adjust the connector line co-ordinates to ensure they fit properly in between the tiles at various zoom scales */
            if ($element[0].className === "line") {

                /* Increase width of those lines which connect 2 stage tiles */
                if (rect.height === 1 && (width === 1 || rect.width === 2)) {
                    if (firstLineInConnectorPair) {
                        if (zoomTransformRatio >= 0.6) {
                            rect.width = 3;
                        } else {
                            rect.width = 6;
                        }
                        if (zoomTransformRatio <= 0.3) {
                            rect.width = 0;
                        }
                        firstLineInConnectorPair = false;
                    } else {
                        if (zoomTransformRatio <= 0.3) {
                            rect.width = 6;
                            rect.left = rect.left - 0.5;
                        }
                        firstLineInConnectorPair = true;
                    }
                }

                /* Adjust the Left and Top values of Connector Lines to render them correctly at various zoom scales */
                if (zoomTransformRatio >= 1) {
                    rect.left = rect.left - (1.2 * zoomTransformRatio);
                    rect.top = rect.top - (2 * zoomTransformRatio);
                } else if (zoomTransformRatio >= 0.8 && zoomTransformRatio < 1) {
                    rect.left = rect.left - (1.2 * 1);
                    rect.top = rect.top - (2 * 1);
                } else if (zoomTransformRatio >= 0.5 && zoomTransformRatio < 0.8) {
                    rect.left = rect.left - (1.2 * 0.5);
                    rect.top = rect.top - (2 * 0.5);
                } else if (zoomTransformRatio >= 0.4 && zoomTransformRatio < 0.5) {
                    rect.left = rect.left - (1.2 * 0.5);
                    rect.top = rect.top - (2 * 0.5);
                } else if (zoomTransformRatio >= 0.3 && zoomTransformRatio < 0.4) {
                    rect.left = rect.left - (1.2 * 0.5);
                    rect.top = rect.top - (2 * 0.5);
                } else if (zoomTransformRatio >= 0.2 && zoomTransformRatio < 0.3) {
                    rect.left = rect.left - (1.2 * 0.5);
                    rect.top = rect.top - (2 * 0.5) + 0.45;
                }
            }

            rect = rect.relativeTo(zoomOutContentRect);

            /* Adjust the Overall Left and Top values for all Mini-map elements such that all of them fit perfectly inside the Mini-map Viewport and Display Area */
            rect.left = rect.left - (10 * zoomTransformRatio);
            rect.top = rect.top + (10 * zoomTransformRatio);

            strokeWidth = strokeWidth === 'auto' ? parseInt($element.css('border-top-width'), 10) : strokeWidth;
            strokeStyle = strokeStyle === 'auto' ? $element.css('border-top-color') : strokeStyle;
            fillStyle = fillStyle === 'auto' ? $element.css('background-color') : fillStyle;
            drawRect(rect, strokeWidth, strokeStyle, fillStyle);

            // Drawing the Font Icons
            if ($element[0].tagName == "SPAN") {

                /* Set the Font Icon size as 50% of it's corresonding Tile's Width */
                var fontIconSize = rect.width * 0.50;
                var miniMapIconSizeString = fontIconSize + "px";
                var miniMapContextFontCss = miniMapIconSizeString + " CRMMDL2";

                context.font = miniMapContextFontCss;
                context.fillStyle = 'white';
                $.each(processComponentsArray, function (i) {
                    if ($element[0].innerHTML.indexOf(processComponentsArray[i]) > -1) {
                        var selectorvalue = "." + processComponentsArray[i];
                        var SymbolFontIconValue = window.getComputedStyle(document.querySelector(selectorvalue), ':before').getPropertyValue('content').replace(/"/g, '');

                        // Set the left value of the tile icon depending on the Org language direction
                        if (window.LOCID_UI_DIR == "RTL")
                            context.fillText(SymbolFontIconValue, (rect.left / zoomTransformRatio) + (rect.width / 2) - (fontIconSize / 2) + 15, (rect.top / zoomTransformRatio) + (rect.height / 2) + (fontIconSize / 2));
                        else
                            context.fillText(SymbolFontIconValue, (rect.left / zoomTransformRatio) + (rect.width / 2) - (fontIconSize / 2), (rect.top / zoomTransformRatio) + (rect.height / 2) + (fontIconSize / 2));
                    }
                });
            }
        }

        function applyStyles() {

            $.each(settings.styles, function (idx, style) {
                find(style.selector).each(function () {
                    drawElement(this, style.strokeWidth, style.strokeStyle, style.fillStyle);
                });
            });
        }

        function drawViewport() {

            var style = drag && settings.viewportDragStyle ? settings.viewportDragStyle : settings.viewportStyle;
            drawViewportFlag = true;
            drawRect(currentViewportRect, style.strokeWidth, style.strokeStyle, style.fillStyle, settings.invertViewport);
            drawViewportFlag = false;
        }

        function draw() {

            currentContentRect = Rect.ofContent(viewport);
            currentViewportRect = Rect.ofViewport(viewport, true);
            currentScale = Math.min(width / currentContentRect.width, height / currentContentRect.height);

            zoomOutContentRect = Rect.ofContent(settings.zoomOutDiv);
            zoomOutViewportRect = Rect.ofViewport(settings.zoomOutDiv, true);
            zoomOutcurrentScale = Math.min(width / zoomOutContentRect.width, height / zoomOutContentRect.height);

            /* Restrict zoomOutcurrentScale to ensure Minimap viewable area stays large enough when there 3 or less tiles on canvas */
            if (zoomOutcurrentScale > 1.2) {
                zoomOutcurrentScale = 1.2;
            }

            if (settings.crop) {
                $canvas.attr('width', currentContentRect.width * currentScale).attr('height', currentContentRect.height * currentScale);
            }

            context.setTransform(1, 0, 0, 1, 0, 0);
            context.clearRect(0, 0, $canvas.width(), $canvas.height());

            context.scale(zoomOutcurrentScale, zoomOutcurrentScale);
            applyStyles();
            drawViewport();
        }

        function onDrag(event) {

            var r = Rect.ofElement(canvas);
            var x = (event.pageX - r.left) / currentScale - currentViewportRect.width * focusWidth;
            var y = (event.pageY - r.top) / currentScale - currentViewportRect.height * focusHeight;

            viewportObj.scrollTo(x, y / zoomTransformRatio, settings.duration);
        }

        function onDragEnd(event) {

            drag = false;
            event.preventDefault();

            $canvas.css('cursor', 'pointer').removeClass('dragOn');
            $('body').css('cursor', 'auto');
            $window.off('mousemove', onDrag);
            draw();
        }

        function onDragStart(event) {

            var r;
            if (settings.autoFocus) {
                r = Rect.ofElement(canvas);
                focusWidth = (((event.pageX - r.left) / currentScale) - currentViewportRect.left) / currentViewportRect.width;
                focusHeight = (((event.pageY - r.top) / currentScale) - currentViewportRect.top) / currentViewportRect.height;
            }
            if (!settings.autoFocus || focusWidth < 0 || focusWidth > 1 || focusHeight < 0 || focusHeight > 1) {
                focusWidth = settings.focusWidth;
                focusHeight = settings.focusHeight;
            }

            drag = true;
            event.preventDefault();

            $canvas.css('cursor', 'pointer').addClass('dragOn');
            $('body').css('cursor', 'crosshair');
            $window.on('mousemove', onDrag).one('mouseup', onDragEnd);
            onDrag(event);
        }

        function init() {

            $canvas.css('cursor', 'pointer').mousedown(onDragStart);
            $viewport.on('load resize scroll', draw);
            draw();
        }

        init();
        var closeMiniMapButtonText = String.fromCharCode(settings.closeMiniMapSymbol);
        $("#close-mini-map")[0].innerHTML = closeMiniMapButtonText;
        $("#close-mini-map").click(function () {
            $("#mini-map-wrapper").css("visibility", "hidden");
            $("#show-mini-map-div").css("visibility", "visible");
        });

        var showMiniMapButtonText = String.fromCharCode(settings.showMiniMapSymbol);
        $("#show-mini-map")[0].innerHTML = showMiniMapButtonText;
        $("#show-mini-map").click(function () {
            $("#mini-map-wrapper").css("visibility", "visible");
            $("#show-mini-map-div").css("visibility", "hidden");
        });

        this.redraw = draw;
    }


    // Register the plug-in
    // ===================

    // The namespace used to register the plug-in and to attach
    // data to elements.
    var namespace = 'fracs.outline';

    // The methods are sorted in alphabetical order. All methods that do
    // not provide a return value will return `this` to enable method chaining.
    fracs.modplug({

        // Static methods
        // --------------
        // These methods are accessible via `$.outline.<methodname>`.
        statics: {

            // Publish object constructors (for testing).
            Outline: Outline
        },

        // Instance methods
        // ----------------
        // These methods are accessible via `$(selector).outline('<methodname>', ...)`.
        methods: {

            // ### 'outline'
            // Generates a document outline in a selected canvas. Will be redrawn on every
            // 'window resize` and `window scroll` event.
            //
            //      .outline([options: OutlineOptions]): jQuery
            outline: function (action, options, viewport) {

                if (typeof action !== 'string') {
                    viewport = options;
                    options = action;
                    action = null;
                }
                if (viewport instanceof $) {
                    viewport = viewport[0];
                }

                if (action === 'redraw') {
                    return this.each(function () {

                        var outline = $(this).data(namespace);
                        if (outline) {
                            outline.redraw();
                        }
                    });
                }

                return this.each(function () {

                    var outline = $(this).data(namespace);
                    if (!outline) {
                        outline = new Outline(this, options, viewport);
                        if (outline) {
                            $(this).data(namespace, outline);
                        }
                    }
                });
            }
        }
    });

}());

//define = _define;
//_define = null;