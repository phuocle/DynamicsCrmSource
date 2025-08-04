/*
 MSCRMBarChart JS v0.0.1 (2016-07-27)

 (@Author :) 2016 Amit Patange

 License: Opensource license
 Document Type : Javascript 
*/
Type.registerNamespace("Mscrm");

jQuery.fn.barChart = function (target) {
    var th = this;
    var g = {
        d: document, //document object
        t: target, //target custom function
        c: th,//containerDiv
        u: target.chart.uniqueid,
        w: window,
        leftConstant: 30,
        seriesLength: target.series[0].data.length,
        _BarChartTextToDisplay: target.xAxis.barChartTextToDisplay,
        _Categories: target.xAxis.categories,
        appendTextDisplay: target.xAxis.appendtextdisplay,
        finalTextToAppend: "",
        cl: target.chart.callback,
        isBarChartEnabled: target.features.barchart,
        isSliderControlEnabled: target.features.slider,
        CalContainerWidth: null,
        innerCssWidth: 0,
        handle1Left: 10,
        setPoints: target.setpoints.enable,
        setPointsX1: target.setpoints.start,
        setPointsX2: target.setpoints.end,
        objecttypecode: target.chart.objecttypecode,
        columnname: target.chart.columnname,
        secondTimeClickEvent: false,
        sliderWidthFixed: target.features.sliderwidthfixed,
        IsReturnTypeAsIndex: target.features.IsReturnTypeAsIndex,
        IsNextVersionOfSlider: target.features.isNextVersionOfSlider,
        direction: target.features.direction.toUpperCase(),
        overridebarchartarraymaxnumber: target.features.overridebarchartarraymaxnumber,
        KeyValue: null,
        newXForRTL: 0,
        Initialize: function () {
            var o = g.seriesLength / 5; //multiple of 5 bars.
            if (g.IsNextVersionOfSlider) { g.seriesLength = g.seriesLength - 1; }
            g.CalContainerWidth = main.CalculateContainerWidth(g.seriesLength);
            var isOverride = g.OverrideGlobalgForSlider();
            if (isOverride) {
                o = 1;
                g.CalContainerWidth = main.CalculateContainerWidth(5);
            }


            if (o > 1) {
                g.CalContainerWidth = g.CalContainerWidth - (o * 5);
                g.CalContainerWidth = (g.CalContainerWidth % 2 == 0) ? g.CalContainerWidth : g.CalContainerWidth - 5;
            }
            main._BarHighlightArray = g.prepareBarHighlightArray();
        },
        OverrideGlobalgForSlider: function () {
            if (g.sliderWidthFixed) {
                switch (g.seriesLength) {
                    case 1:
                        throw new Error('You can not provide single value for Bar Chart Slider. Provided values must be more than one.');
                        break;
                    case 2:
                        g.leftConstant = 75;
                        break;
                    case 3:
                        g.leftConstant = 52;
                        break;
                    case 4:
                        g.leftConstant = 38;
                        break;
                    case 5:
                        g.leftConstant = 30;
                        break;
                    case 6:
                        g.leftConstant = 25;
                        break;
                    case 7:
                        g.leftConstant = 22;
                        break;
                    case 8:
                        g.leftConstant = 19;
                        break;
                    case 9:
                        g.leftConstant = 17;
                        break;
                    case 10:
                        g.leftConstant = 15;
                        break;
                    case 11:
                        g.leftConstant = 14;
                        break;
                }
                return true;
            }

            return false;
        },
        prepareBarHighlightArray: function () {
            var barHLightArray = [];
            var k = 0; var j = g.seriesLength;
            for (var i = 0; i <= g.seriesLength; i++) {

                var internalBarArray = [];
                if (i == 0 || i == g.seriesLength) {
                    internalBarArray[0] = k;
                    internalBarArray[1] = 0;
                    internalBarArray[2] = 0;
                    barHLightArray.push(internalBarArray);
                } else {
                    internalBarArray[0] = k;
                    internalBarArray[1] = i;
                    internalBarArray[2] = j;
                    barHLightArray.push(internalBarArray);
                }
                k = k + g.leftConstant;
                j--;
            }
            return barHLightArray;
        },
        IsRTLSelected: function (lang) {
            if (g.direction == "RTL") {
                return true;
            }

            return false;
        },
    };

    var main = {
        _MouseDownForRightBar: false,
        _MouseDownForLeftBar: false,
        _BarHighlightArray: null,
        _ExecuteWebApiMethodOnModifiedDate: [],
        _RememberHandlesLastPosition: [],
        prepareHTML: function () {
            var elementId = g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6";
            var currentElement = [["class", "ms-ref-refiner"], ["name", "Group"], ["style", "display:block;"], ["id", elementId]];
            main.createHTML("div", currentElement, g.c[0].id);

            currentElement = [["id", g.u + "_Container"]];
            main.createHTML("div", currentElement, elementId);

            elementId = g.u + "_Container";
            currentElement = [["class", "ms-displayInlineBlock facetsname_RecordOwnerCreatedModified"], ["id", g.u + "ctl00_PlaceHolderLeftNavBar_ctl00_csr_RefinerHeading_LastModifiedTime"], ["tabindex", "-1"]];
            if (g.IsRTLSelected()) {
                var rtlCss = ["style", "direction:rtl"]
                currentElement.push(rtlCss);
            }
            var e = main.createHTML("div", currentElement, elementId);
            e.innerHTML = g.t.title.text;

            elementId = g.u + "_Container";
            currentElement = [["class", "ms-ref-uparrow"], ["id", g.u + "refinerExpandCollapseArrow"]];
            main.createHTML("div", currentElement, elementId);

            elementId = g.u + "_Container";
            currentElement = [["id", g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6_SliderLoadContainer"]];
            main.createHTML("div", currentElement, elementId);

            elementId = g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6_SliderLoadContainer";
            currentElement = [["class", "ms-ref-unselSec"], ["style", "display:block"], ["id", g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6s1"]];
            main.createHTML("span", currentElement, elementId);

            elementId = g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6s1";
            currentElement = [["class", "histogram_container"], ["id", g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6HistogramContainer"], ["style", "width:" + g.CalContainerWidth + "px;"]];
            main.createHTML("div", currentElement, elementId);

            //calcualte height and left for each bar. in this case left is g.leftConstant+ and cal height
            var heightArray = main.CalcualteBarHeight(g.t.series[0].data);

            var k = 7; var p = 0; var barWidth = 25;
            if (g.isBarChartEnabled && g.seriesLength == 6) {
                barWidth = barWidth - 5;
            }
            for (var i = 0; i < g.seriesLength; i++) {
                //single bar html starts here
                elementId = g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6HistogramContainer";
                currentElement = [["class", "histogram_bar_link"], ["id", g.u + "_histogram_bar_link" + i], ["title", "" + g.t.xAxis.categories[i] + " (" + g.t.series[0].data[i] + ")"], ["href", "javascript:void(0)"], ["style", "bottom:0px; left:" + k + "px; width:" + barWidth + "px"]];
                main.createHTML("a", currentElement, elementId);

                elementId = g.u + "_histogram_bar_link" + i;
                currentElement = [["class", "histogram_bar_background"], ["id", g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6_HistogramBgBar" + i]];
                main.createHTML("div", currentElement, elementId);

                elementId = g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6_HistogramBgBar" + i;
                currentElement = [["class", "histogram_bar_active"], ["id", g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6_HistogramActiveBar" + i], ["style", "height:" + heightArray[i] + "px; margin-top:0px"], ["onclick", g.cl + ".InvokeBarClickEvent(" + i + "," + i + "," + (i + 1) + "," + p + "," + (p + g.leftConstant) + "," + g.leftConstant + "," + p + ");"]]; //i,i,i+1,p,p+g.leftConstant,g.leftConstant,p
                main.createHTML("div", currentElement, elementId);
                k = k + g.leftConstant;
                p = p + g.leftConstant;
                //single bar html ends here

            }//for loop ends here.


            elementId = g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6s1";
            currentElement = [["class", "ms-textSmall slider_extent_label_section"], ["id", g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6SliderContainer_ExtentLabelSection"]];
            main.createHTML("div", currentElement, elementId);

            elementId = g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6SliderContainer_ExtentLabelSection";
            currentElement = [["class", "slider_extent_label_right"], ["id", g.u + "ctl00_PlaceHolderLeftNavBar_ctl00_csr6SliderContainer_ExtentLabelMax"]];
            e = main.createHTML("div", currentElement, elementId);
            e.innerHTML = g.t.xAxis.end;

            elementId = g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6SliderContainer_ExtentLabelSection";
            currentElement = [["class", "slider_extent_label_left"], ["id", g.u + "ctl00_PlaceHolderLeftNavBar_ctl00_csr6SliderContainer_ExtentLabelMax"]];
            e = main.createHTML("div", currentElement, elementId);
            e.innerHTML = g.t.xAxis.start;

            elementId = g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6s1";
            currentElement = [["class", "slideronly_container"], ["id", g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6SliderContainer"], ["style", "width:" + g.CalContainerWidth + "px;"]];
            main.createHTML("div", currentElement, elementId);

            elementId = g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6SliderContainer";
            currentElement = [["style", "display:block;position:relative"], ["id", g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6SliderBehaviourRailSection"]];
            main.createHTML("div", currentElement, elementId); -1

            elementId = g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6SliderBehaviourRailSection";
            currentElement = [["class", "ajax__multi_slider_default"], ["id", g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6SliderBehaviourRailSection_ajax__multi_slider_default"]];
            main.createHTML("div", currentElement, elementId);

            elementId = g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6SliderBehaviourRailSection_ajax__multi_slider_default";
            currentElement = [["class", "ajax__multi_slider_default outer_rail_horizontal"], ["id", g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6SliderBehaviour_outer"], ["tabindex", "-1"], ["style", "outline:none; width:" + (g.CalContainerWidth - g.innerCssWidth) + "px;"]];
            main.createHTML("div", currentElement, elementId);

            elementId = g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6SliderBehaviour_outer";
            currentElement = [["class", "ajax__multi_slider_default handle_horizontal_left handle_noforcepressed"], ["role", "slider"], ["aria-valuemin", g.t.xAxis.start], ["aria-valuemax", g.t.xAxis.end], ["aria-labelledby", g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6RangeLabel"], ["tabindex", "0"], ["id", g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6SliderBehaviour_handle_0"], ["style", "overflow:hidden; left:0px; top:0px;cursor:pointer;"]];
            main.createHTML("a", currentElement, elementId);

            elementId = g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6SliderBehaviour_handle_0";
            currentElement = [];
            main.createHTML("div", currentElement, elementId);

            elementId = g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6SliderBehaviour_outer";
            currentElement = [["class", "ajax__multi_slider_default handle_horizontal_left handle_noforcepressed"], ["role", "slider"], ["aria-valuemin", g.t.xAxis.start], ["aria-valuemax", g.t.xAxis.end], ["aria-labelledby", g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6RangeLabel"], ["tabindex", "0"], ["id", g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6SliderBehaviour_handle_1"], ["style", "overflow:hidden;cursor:pointer; top:0px;left:" + (g.CalContainerWidth - g.handle1Left) + "px;"]];
            main.createHTML("a", currentElement, elementId);

            elementId = g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6SliderBehaviour_handle_0";
            currentElement = [];
            main.createHTML("div", currentElement, elementId);

            elementId = g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6SliderBehaviour_outer";
            currentElement = [["class", "ajax__multi_slider_default inner_rail_horizontal"], ["id", g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6SliderBehaviour_inner"], ["style", "outline:none; left:0px; width:" + (g.CalContainerWidth - g.innerCssWidth) + "px"], ["tabindex", "-1"]];
            main.createHTML("a", currentElement, elementId);

            var p = 3, q = -12;
            for (var i = 0; i <= g.seriesLength; i++) {
                //tick and target elements to track points on slider...
                elementId = g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6SliderBehaviourRailSection";
                currentElement = [["class", "slider_tick_active"], ["id", g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6Boundary_Tick_" + i], ["style", "left:" + p + "px"], ["title", ""]];
                main.createHTML("div", currentElement, elementId);


                currentElement = [["class", "slider_tick_targetbox"], ["id", g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6Boundary_TickTouchTarget_" + i], ["style", "left:" + q + "px; width:27px"], ["title", ""]];
                main.createHTML("div", currentElement, elementId);

                p = p + g.leftConstant;
                q = q + g.leftConstant;

            }//for loop ends here

            elementId = g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6_SliderLoadContainer";
            currentElement = [["class", "handle_label_section ms-ref-allSec"], ["id", g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6LabelSection"]];
            if (g.IsRTLSelected()) {
                var rtlCss = ["style", "direction:rtl"]
                currentElement.push(rtlCss);
            }
            main.createHTML("div", currentElement, elementId);

            elementId = g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6LabelSection";
            currentElement = [["class", "handle_label"], ["id", g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6RangeLabel"]];
            e = main.createHTML("span", currentElement, elementId);
            e.innerHTML = Mscrm.ExternalSearch.getBarChartAllTextToDisplay();

        },
        createHTML: function (elementType, attr, parentIs) {
            var e = g.d.createElement(elementType);
            for (var i = 0; i < attr.length; i++) {
                e.setAttribute(attr[i][0], attr[i][1]);
            }
            document.getElementById(parentIs).appendChild(e);
            return e;
        },
        CalcualteBarHeight: function (arr) {
            var percents = [];
            var max = g.overridebarchartarraymaxnumber;
            var tMax = Math.max.apply(Math, arr); // eg. picks out 6926 
            /* First Condition (in below if): Runs for slider only. Second condition (in below if) : This condition protects from being applied a lower max number 
                if it founds max number in bar chart sent array greater than g.overridebarchartarraymaxnumber. */
            if (g.overridebarchartarraymaxnumber == null || g.overridebarchartarraymaxnumber < tMax) {
                max = tMax
            }
            for (var i = 0; i < arr.length; i++) {
                percents.push(Math.round(arr[i] / max * 50.0));
            }

            return percents;
        },
        CalculateContainerWidth: function (len) {
            return len * 32;
        },
        InvokeBarClickEvent: function (p, q, r, s, t, u, v) {
            if (target.series[0].data[p] != 0) {
                main.RememberHandlesLastPosition();
                //Initialize the bar click events in loop for every container once at loading.
                main.SetBarAndTickClickEventForSingleBar(p, q, r, s, t, u, v);
                g.secondTimeClickEvent = true;
                main.UpdateRangeBarTextAtBottom();
            }
        },
        SetBarAndTickClickEventForSingleBar: function (barElementId1, tickElementId1, tickElementId2, handle1Value, handle2Value, innerWidth, innerLeft) {
            main.UnsetAndDehighLightTracksAndBars();
            //Move slider bar to selected postion
            $("#" + g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6SliderBehaviour_handle_0").css("left", handle1Value + "px");
            $("#" + g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6SliderBehaviour_handle_1").css("left", handle2Value + "px");
            $("#" + g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6SliderBehaviour_inner").css({ "width": innerWidth + "px", "left": innerLeft + "px" });

            //change bar top color to gray
            $("#" + g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6_HistogramActiveBar" + barElementId1).css("border-top", "2px solid #2a8dd4");

            //Change slider color
            $("#" + g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6Boundary_Tick_" + tickElementId1).css({ "background-color": "#2a8dd4", "border": "1px solid #2a8dd4" });
            $("#" + g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6Boundary_Tick_" + tickElementId2).css({ "background-color": "#2a8dd4", "border": "1px solid #2a8dd4" });
        },
        UpdateRangeBarTextAtBottom: function () {
            var textToUpdate;
            var lf = parseInt($("#" + g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6SliderBehaviour_handle_0").css('left'), 10);
            var rt = parseInt($("#" + g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6SliderBehaviour_handle_1").css('left'), 10);
            var rtSlierDisplay = '';
            if (g.isBarChartEnabled) { g.finalTextToAppend = g.appendTextDisplay;  }
            else
            {
                if (lf == 0) { g.finalTextToAppend = "< "; }
                else if (rt == (g.CalContainerWidth - g.handle1Left) || rt > (g.CalContainerWidth - g.handle1Left)) { rtSlierDisplay = "> "; }
            }
            var t = g.seriesLength - 1;
            var l = (lf / g.leftConstant) - 1;
            var r = (rt / g.leftConstant) - 1;

            //override l values because we are having numeric sliders to main consistancy increment by 1.
            if (g.IsNextVersionOfSlider) { r = r + 1; }
            if (!g.isBarChartEnabled) { l = l + 1; }

            //Handling error condition.
            if (!((lf % g.leftConstant == 0) && (rt % g.leftConstant == 0))) { return; }

            if (lf == 0) {
                textToUpdate = g.finalTextToAppend + " " + g._BarChartTextToDisplay[r];
                if (g.isBarChartEnabled && g.seriesLength == 6 && r == 4) {
                    textToUpdate = Mscrm.ExternalSearch.getBarChartBeforeTodayTextToDisplay();
                }
            }
            else if(rt==(g.CalContainerWidth-g.handle1Left) || rt>(g.CalContainerWidth-g.handle1Left)) { textToUpdate = rtSlierDisplay + g._BarChartTextToDisplay[l]; }
            else if(lf!=0 && rt!=(g.CalContainerWidth-g.handle1Left) && rt<(g.CalContainerWidth-g.handle1Left)) {
                textToUpdate = g._BarChartTextToDisplay[l] + " - " + g._BarChartTextToDisplay[r];
                if (g.isBarChartEnabled && g.seriesLength == 6 && r == 4) {
                    textToUpdate = rtSlierDisplay + g._BarChartTextToDisplay[l];
                }
            }

            //This condition is for when right slider is on last position and left slider is greater than 0th position (on or after 1st bucket).
            if (g.isBarChartEnabled && g.seriesLength > 5 && lf != 0 && rt == (g.CalContainerWidth - g.handle1Left)) {
                textToUpdate = g._Categories[l + 1];
            }

            if (lf == 0 && (rt == (g.CalContainerWidth - g.handle1Left) || rt >= 150)) { textToUpdate = g._BarChartTextToDisplay[t]; if (!g.isBarChartEnabled) { textToUpdate = Mscrm.ExternalSearch.getBarChartAllTextToDisplay(); } }

            $("#" + g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6RangeLabel").html(textToUpdate);

            main._ExecuteWebApiMethodOnModifiedDate.length = 0;

            if (!g.IsReturnTypeAsIndex) {
                if (!g.isBarChartEnabled) {
                    var l = lf / g.leftConstant;
                    var r = rt / g.leftConstant;
                    main._ExecuteWebApiMethodOnModifiedDate.push(g._Categories[l]);
                    main._ExecuteWebApiMethodOnModifiedDate.push(g._Categories[r]);
                }
                else {
                    main._ExecuteWebApiMethodOnModifiedDate.push(g._BarChartTextToDisplay[lf / g.leftConstant]);
                    main._ExecuteWebApiMethodOnModifiedDate.push(g._BarChartTextToDisplay[rt / g.leftConstant]);
                }
            }
            else {
                main._ExecuteWebApiMethodOnModifiedDate.push(lf / g.leftConstant);
                main._ExecuteWebApiMethodOnModifiedDate.push(rt / g.leftConstant);
            }
            main.SendReponseBackToParentPage();
        },
        UnsetAndDehighLightTracksAndBars: function () {
            //left side handle loop
            for (var i = 0; i < g.seriesLength; i++) {
                $("#" + g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6Boundary_Tick_" + i).css({ "background-color": "#c6c6c6", "border": "1px solid #c6c6c6" });
                $("#" + g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6_HistogramActiveBar" + i).css("border-top", "2px solid #ababab");
            }
            //To Unset last Tick html element.
            $("#" + g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6Boundary_Tick_" + i).css({ "background-color": "#c6c6c6", "border": "1px solid #c6c6c6" });
        },
        DragBothSliders: function () {
            main.DraggableRangeSliderForBarChartFroLeftToRight();
            main.DraggableRangeSliderForBarChartFromRightToLeft();
        },
        DraggableRangeSliderForBarChartFroLeftToRight: function () {
            var leftRangeBar = $("#" + g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6SliderBehaviour_handle_0");

            leftRangeBar.mousedown(function (e) {
                main.RememberHandlesLastPosition();
                g.secondTimeClickEvent = true;
                main._MouseDownForRightBar = false;
                main._MouseDownForLeftBar = true;
                $(document).mousemove(main.mouseL)
                           .mouseup(function (e) {
                               main._MouseDownForLeftBar = false;
                               e.stopPropagation();
                               e.stopImmediatePropagation();
                               e.cancelBubble = true;
                               $(document).unbind('mouseup');
                               var currentPosition = parseInt($("#" + g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6SliderBehaviour_handle_0").css('left'), 10);
                               main.SetRangeBarPositionToTrackPoints(g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6SliderBehaviour_handle_0", main.FindClosest(currentPosition), 'LHSH');
                           });
            });
        },
        mouseL: function (e) {
            if (main._MouseDownForLeftBar) {
                g.newXForRTL = 0;
                if (g.direction == "RTL") { g.newXForRTL = window.innerWidth - 225; }
                if (e.pageX >= g.leftConstant + g.newXForRTL && e.pageX < ((g.CalContainerWidth + g.newXForRTL - g.handle1Left) + 1)) {
                    main.LeftMostRangeBarMove(e.pageX - g.newXForRTL - g.leftConstant);
                }
            } else { e.stopPropagation(); e.cancelBubble = true; }
        },
        LeftMostRangeBarMove: function (shiftLeft) {
            var rightBarCssPosition = parseInt($("#" + g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6SliderBehaviour_handle_1").css('left'), 10);
            if (rightBarCssPosition >= shiftLeft + g.leftConstant) {
                $("#" + g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6SliderBehaviour_handle_0").css("left", shiftLeft + "px");
            }
        },
        DraggableRangeSliderForBarChartFromRightToLeft: function () {
            var rightRangeBar = $("#" + g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6SliderBehaviour_handle_1");

            rightRangeBar.mousedown(function (e) {
                main.RememberHandlesLastPosition();
                g.secondTimeClickEvent = true;
                main._MouseDownForLeftBar = false;
                main._MouseDownForRightBar = true;
                $(document).mousemove(main.mouseR)
                           .mouseup(function (e) {
                               main._MouseDownForRightBar = false;
                               e.stopPropagation();
                               e.stopImmediatePropagation();
                               e.cancelBubble = true;
                               $(document).unbind('mouseup');
                               var currentPosition = parseInt($("#" + g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6SliderBehaviour_handle_1").css('left'), 10);
                               main.SetRangeBarPositionToTrackPoints(g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6SliderBehaviour_handle_1", main.FindClosest(currentPosition), 'RHSH');
                           });
            });
        },
        mouseR: function (e) {
            if (g.seriesLength > 8) { g.handle1Left = 5; }
            g.newXForRTL = 0; if (g.direction == "RTL") { g.newXForRTL = window.innerWidth - 215; }
            if (main._MouseDownForRightBar) {
                if (e.pageX - g.leftConstant < (g.CalContainerWidth + g.newXForRTL - g.handle1Left) + 1 && e.pageX >= g.leftConstant + g.newXForRTL) {
                    main.RightMostRangeBarMove(e.pageX - g.newXForRTL - g.leftConstant);
                }
            }
            else { e.stopPropagation(); e.cancelBubble = true; }
            g.handle1Left = 10;
        },
        RightMostRangeBarMove: function (shiftLeft) {
            var LeftBarCssPosition = parseInt($("#" + g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6SliderBehaviour_handle_0").css('left'), 10);

            if (LeftBarCssPosition + g.leftConstant <= shiftLeft) {
                $("#" + g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6SliderBehaviour_handle_1").css("left", shiftLeft + "px");
            }
        },
        RememberHandlesLastPosition: function () {
            var leftHandlecurrentPosition = parseInt($("#" + g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6SliderBehaviour_handle_0").css('left'), 10);
            var rightHandlecurrentPosition = parseInt($("#" + g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6SliderBehaviour_handle_1").css('left'), 10);
            main._RememberHandlesLastPosition[0] = main.FindClosest(leftHandlecurrentPosition) / g.leftConstant;
            main._RememberHandlesLastPosition[1] = main.FindClosest(rightHandlecurrentPosition) / g.leftConstant;
            return main._RememberHandlesLastPosition;
        },
        SetAndPerformKeyActions: function () {
            $(document).keyup(function (e) {
                switch (e.keyCode) {
                    case 37:
                        g.KeyValue = 37;
                        main.CallKeyEvents();
                        break;
                    case 38:
                        g.KeyValue = 38;
                        main.CallKeyEvents();
                        break;
                    case 39:
                        g.KeyValue = 39;
                        main.CallKeyEvents();
                        break;
                    case 40:
                        g.KeyValue = 40;
                        main.CallKeyEvents();
                        break;
                    case 13:
                        g.KeyValue = 13;
                        main.RepositionsBarsOn13();
                }
            });
        },
        CallKeyEvents: function () {
            var currentFocusId = $(':focus');
            if (currentFocusId.length > 0) {

                var lt = parseInt($("#" + g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6SliderBehaviour_handle_0").css('left'), 10);
                var rt = parseInt($("#" + g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6SliderBehaviour_handle_1").css('left'), 10);
                if (currentFocusId[0].id == g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6SliderBehaviour_handle_0") {
                    if (g.KeyValue == 38 || g.KeyValue == 39) { lt = lt + g.leftConstant; }
                    else if (g.KeyValue == 40 || g.KeyValue == 37) { lt = lt - g.leftConstant; }
                    if (lt < rt) {
                        g.secondTimeClickEvent = true;
                        main.RememberHandlesLastPosition();
                        main.SetRangeBarPositionToTrackPoints(g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6SliderBehaviour_handle_0", main.FindClosest(lt), 'LHSH');
                    }

                }
                else if (currentFocusId[0].id == g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6SliderBehaviour_handle_1") {
                    if (g.KeyValue == 38 || g.KeyValue == 39) { rt = rt + g.leftConstant; }
                    else if (g.KeyValue == 40 || g.KeyValue == 37) { rt = rt - g.leftConstant; }
                    if (lt < rt) {
                        g.secondTimeClickEvent = true;
                        main.RememberHandlesLastPosition();
                        main.SetRangeBarPositionToTrackPoints(g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6SliderBehaviour_handle_1", main.FindClosest(rt), 'RHSH');
                    }

                }
            }

        },
        RepositionsBarsOn13: function () {
            var currentFocusId = $(':focus');
            var barElementSubId = "histogram_bar_link";

            if (currentFocusId.length > 0) {
                if (currentFocusId[0].id.indexOf(barElementSubId) !== -1) {
                    g.secondTimeClickEvent = true;
                    var x = currentFocusId[0].id.split("_");
                    var activeBar = x[3].replace(/\D/g, '');
                    main.RememberHandlesLastPosition();
                    var d = document.getElementById(x[0] + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6_HistogramActiveBar" + activeBar);
                    d.click();
                }
            }
        },
        SetRangeBarPositionToTrackPoints: function (elementId, positionToFix, handle) {
            $("#" + elementId).css("left", positionToFix + "px");
            //To set and unset range slider bar color.
            main.SetSliderColorToSelectedBars();
            //Highlight tracks and bars
            main.SetHighLightTracksAndBars();
            //Update the RangeBar text At bottom.
            main.UpdateRangeBarTextAtBottom();

        },
        SetSliderColorToSelectedBars: function () {
            var lf = parseInt($("#" + g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6SliderBehaviour_handle_0").css('left'), 10);
            var rt = parseInt($("#" + g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6SliderBehaviour_handle_1").css('left'), 10);
            var wd = rt - lf;
            $("#" + g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6SliderBehaviour_inner").css({ "left": lf + "px", "width": wd + "px" });
        },
        SetHighLightTracksAndBars: function () {
            var lf = parseInt($("#" + g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6SliderBehaviour_handle_0").css('left'), 10);
            var rt = parseInt($("#" + g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6SliderBehaviour_handle_1").css('left'), 10);

            if (!((lf % g.leftConstant == 0) && (rt % g.leftConstant == 0))) { return; }

            //Resetting all colors
            main.UnsetAndDehighLightTracksAndBars();
            main.ResetHighLightTracksAndBars();

            //left side handle loop
            for (var i = 0; i < main._BarHighlightArray[lf / g.leftConstant][1]; i++) {
                $("#" + g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6Boundary_Tick_" + i).css({ "background-color": "#ababab", "border": "1px solid #ababab" });
                $("#" + g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6_HistogramActiveBar" + i).css("border-top", "2px solid #ababab");
            }

            var k = g.seriesLength - 1;
            //Right side handle loop
            for (var i = 0; i < main._BarHighlightArray[rt / g.leftConstant][2]; i++) {
                $("#" + g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6Boundary_Tick_" + k).css({ "background-color": "#ababab", "border": "1px solid #ababab" });
                $("#" + g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6_HistogramActiveBar" + k).css("border-top", "2px solid #ababab");
                k--;
            }
        },
        ResetHighLightTracksAndBars: function () {
            //left side handle loop
            for (var i = 0; i < g.seriesLength; i++) {
                $("#" + g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6Boundary_Tick_" + i).css({ "background-color": "#2a8dd4", "border": "1px solid #2a8dd4" });
                $("#" + g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6_HistogramActiveBar" + i).css("border-top", "2px solid #2a8dd4");
            }
        },
        UnsetAndDehighLightTracksAndBars: function () {
            //left side handle loop
            for (var i = 0; i < g.seriesLength; i++) {
                $("#" + g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6Boundary_Tick_" + i).css({ "background-color": "#c6c6c6", "border": "1px solid #c6c6c6" });
                $("#" + g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6_HistogramActiveBar" + i).css("border-top", "2px solid #ababab");
            }
            //To Unset 5th Tick html element.
            $("#" + g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6Boundary_Tick_" + i).css({ "background-color": "#c6c6c6", "border": "1px solid #c6c6c6" });
        },
        FindClosest: function (num) {
            var arr = []; var a = 0;
            for (var i = 0; i <= g.seriesLength; i++) {
                arr.push(a);
                a = a + g.leftConstant;
            }
            var curr = arr[0];
            var diff = Math.abs(num - curr);
            for (var val = 0; val < arr.length; val++) {
                var newdiff = Math.abs(num - arr[val]);
                if (newdiff < diff) {
                    diff = newdiff;
                    curr = arr[val];
                }
            }
            return curr;
        },
        UpdateClosureSettings: function () {
            if (!g.isBarChartEnabled) {
                main.FinalClosureSettings();
            }
        },
        FinalClosureSettings: function () {
            var currentAttribute = [["style", "display:none"]];

            var elementId = "#" + g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6HistogramContainer";
            main.setHTMLAttribute(elementId, currentAttribute);

            var elementId = "#" + g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6SliderContainer_ExtentLabelSection";
            main.setHTMLAttribute(elementId, currentAttribute);
        },
        setHTMLAttribute: function (elementId, attArray) {
            for (var i = 0; i < attArray.length; i++) {
                $(elementId).attr(attArray[i][0], attArray[i][1]);
            }
        },
        GetCurrentEnabledBars: function () {
            return main._ExecuteWebApiMethodOnModifiedDate;
        },
        SetSpecifiedBars: function (recieveBarsArr) {
            var currentPosition = main._BarHighlightArray[recieveBarsArr[0]][0];
            main.SetRangeBarPositionToTrackPoints(g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6SliderBehaviour_handle_0", main.FindClosest(currentPosition), 'LHSH');
            var currentPosition = main._BarHighlightArray[recieveBarsArr[1]][0];
            main.SetRangeBarPositionToTrackPoints(g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6SliderBehaviour_handle_1", main.FindClosest(currentPosition), 'RHSH');
            barChartLeftSliderBucketTracker = false;
            return true;
        },
        FinalCall: function () {
            if (g.setPoints) {
                var a = [g.setPointsX1, g.setPointsX2];
                main.SetSpecifiedBars(a);
            }
        },
        SendReponseBackToParentPage: function () {
            if (g.secondTimeClickEvent) {
                var recieveBarResponseData = [];
                recieveBarResponseData.length = 0;
                var isResultsRefresh = true;
                var isResultsRefreshWhenNoChange = true;
                if (g.isBarChartEnabled) {
                    isResultsRefresh = main.ShouldResultRefreshWhenResultCountIsZero();
                    isResultsRefreshWhenNoChange = main.ShouldRefreshWhenNoChangeInData();
                }
                var a = [document.getElementById("entityCombo").value, g.columnname, g.isBarChartEnabled, isResultsRefresh, g.c[0].id, isResultsRefreshWhenNoChange];
                recieveBarResponseData.push(a);
                recieveBarResponseData.push(main.GetCurrentEnabledBars());
                var lf = parseInt($("#" + g.u + "_ctl00_PlaceHolderLeftNavBar_ctl00_csr6SliderBehaviour_handle_0").css('left'), 10);
                var  p = main.GetCurrentEnabledBars();
                var leftBucketIndex = g._Categories.indexOf(p[0]);
                if(!g.isBarChartEnabled && leftBucketIndex==0 && lf!=0)
                {
                    sliderControlLeftBucketTracker.push(g.columnname);
                }
                else if(!g.isBarChartEnabled)
                {
                    var index = sliderControlLeftBucketTracker.indexOf(g.columnname);
                    sliderControlLeftBucketTracker.splice(index, 1);
                }
                $(document).unbind('mouseup');
                return MsCrmRelevanceSearchBarChartRecieveBarPointData(recieveBarResponseData);
            }
        },
        ShouldResultRefreshWhenResultCountIsZero: function () {
            var k = main.GetCurrentEnabledBars();
            var refreshState = false;
            for (var i = k[0]; i < k[1]; i++) {
                if (target.series[0].data[i] != 0) {
                    refreshState = true;
                    break;
                }
            }
            return refreshState;
        },
        ShouldRefreshWhenNoChangeInData : function() {
                var refreshState = false;
                var k = main.GetCurrentEnabledBars();
                var r = main._RememberHandlesLastPosition;
                var lowX,highX,lowY,highY;
                if(JSON.stringify(k)==JSON.stringify(r)) { 
                    return refreshState; 
                }
                lowX = r[0]; highX = k[0];
                lowY = r[1]; highY = k[1];
                if(k[0]<r[0])
                {
                    lowX = k[0];
                    highX = r[0];
                }
                if(k[1] < r[1])
                {
                    lowY = k[1];
                    highY = r[1]; 
                }

                for(var i=lowX;i<highX;i++){
                    if (target.series[0].data[i] != 0) {
                        refreshState = true;
                        break;
                    }
                }

                // To avoid further checking for refreshstate to true.
                if(refreshState) return refreshState;

                for(var i=lowY;i<highY;i++){
                    if (target.series[0].data[i] != 0) {
                        refreshState = true;
                        break;
                    }
                }
                return refreshState;
            },
    };
    var Universal = {
        Initialize: function () {
            g.Initialize();
            main.prepareHTML();
            main.DragBothSliders();
            main.UpdateClosureSettings();
            main.FinalCall();
            main.SetAndPerformKeyActions();
        },
    }.Initialize();

    return main;
};