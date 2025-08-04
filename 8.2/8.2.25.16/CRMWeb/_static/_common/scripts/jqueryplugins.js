Type.registerNamespace('Mscrm');

function ChildFocusTrackerOptions(nameValuePairs) {
    Mscrm.JQueryPluginRegistrationHelper.initializeFieldsFromObjectCollections(this, nameValuePairs);
}


function TextAreaWatermarkOptions(nameValuePairs) {
    Mscrm.JQueryPluginRegistrationHelper.initializeFieldsFromObjectCollections(this, nameValuePairs);
}


function HTMLElementWatermarkOptions(nameValuePairs) {
    Mscrm.JQueryPluginRegistrationHelper.initializeFieldsFromObjectCollections(this, nameValuePairs);
}


function AutoNavBarPlugin() {
}
AutoNavBarPlugin.$$cctor = function() {
    Mscrm.JQueryPluginRegistrationHelper.registerPlugin(AutoNavBarPlugin);
}
AutoNavBarPlugin.autoNavBar = function(options) {
    AutoNavBarPlugin.$C(options, this);
    return this;
}
AutoNavBarPlugin.$C = function($p0, $p1) {
    AutoNavBarPlugin.$0 = new Array(0);
    AutoNavBarPlugin.$2 = { listSelector: null, scrollRegionSelector: null, listElementCssClass: null, insertSpacer: true, animateScroll: true, reInitializeOnResize: true };
    AutoNavBarPlugin.$2 = $P_CRM.extend(AutoNavBarPlugin.$2, $p0);
    var $v_0 = AutoNavBarPlugin.$2['listSelector'];
    var $v_1 = AutoNavBarPlugin.$2['scrollRegionSelector'];
    if (!$v_0 || !$v_1) {
        return;
    }
    AutoNavBarPlugin.$3 = $p1.find($v_0).first();
    AutoNavBarPlugin.$1 = $p1.find($v_1).first();
    AutoNavBarPlugin.$3.children('li').each(AutoNavBarPlugin.$K);
    if (AutoNavBarPlugin.$2['insertSpacer']) {
        AutoNavBarPlugin.$L();
    }
    AutoNavBarPlugin.$3.children('li').click(AutoNavBarPlugin.$F);
    AutoNavBarPlugin.$5 = -1;
    AutoNavBarPlugin.$1.scroll(AutoNavBarPlugin.$J);
    if (AutoNavBarPlugin.$2['reInitializeOnResize']) {
        $P_CRM(window).resize(function($p1_0) {
            AutoNavBarPlugin.$H($p0, $p1);
        });
    }
}
AutoNavBarPlugin.$H = function($p0, $p1) {
    for (var $$arr_2 = AutoNavBarPlugin.$0, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
        var $v_0 = $$arr_2[$$idx_4];
        $P_CRM($v_0.$6_0).removeData('liElement');
    }
    this.remove('#spacer');
    AutoNavBarPlugin.$C($p0, $p1);
}
AutoNavBarPlugin.$K = function($p0, $p1) {
    var $v_0 = $P_CRM(this).attr('correspondingElementSelector');
    var $v_1 = $P_CRM($v_0);
    var $v_2 = $v_1[0].offsetTop;
    var $v_3 = parseInt($v_1.css('margin-top'));
    $v_3 = (isNaN($v_3)) ? 0 : $v_3;
    var $v_4 = AutoNavBarPlugin.$1[0].offsetTop;
    var $v_5 = $v_2 - $v_3 - $v_4;
    var $v_6 = new Mscrm.CorrespondingElement($v_1[0], $v_5, $v_1.outerHeight(true));
    AutoNavBarPlugin.$0[AutoNavBarPlugin.$0.length] = $v_6;
    $v_1.data('liElement', $P_CRM(this));
}
AutoNavBarPlugin.$L = function() {
    var $v_0 = AutoNavBarPlugin.$0[AutoNavBarPlugin.$0.length - 1];
    if (IsNull($v_0)) {
        return;
    }
    var $v_1 = AutoNavBarPlugin.$1.height();
    var $v_2 = $v_0.$A_0;
    var $v_3 = $v_1 - $v_2;
    if ($v_3 < 0) {
        return;
    }
    $P_CRM('<div id=\'spacer\'></div>').height($v_3).appendTo(AutoNavBarPlugin.$1);
}
AutoNavBarPlugin.$F = function($p0) {
    if (AutoNavBarPlugin.$2['animateScroll']) {
        AutoNavBarPlugin.$1.animate({ scrollTop: AutoNavBarPlugin.$0[$P_CRM(this).index()].$4_0 }, 200);
    }
    else {
        AutoNavBarPlugin.$1.scrollTop(AutoNavBarPlugin.$0[$P_CRM(this).index()].$4_0);
    }
}
AutoNavBarPlugin.$J = function($p0) {
    if (AutoNavBarPlugin.$5 >= 0) {
        window.clearTimeout(AutoNavBarPlugin.$5);
    }
    var $v_0 = AutoNavBarPlugin.updateLiElement;
    AutoNavBarPlugin.$5 = window.setTimeout($v_0, 10);
}
AutoNavBarPlugin.updateLiElement = function() {
    if (!AutoNavBarPlugin.$0.length) {
        return;
    }
    var $v_0;
    if ((AutoNavBarPlugin.$1[0].scrollHeight - AutoNavBarPlugin.$1[0].scrollTop) === AutoNavBarPlugin.$1[0].clientHeight) {
        $v_0 = AutoNavBarPlugin.$0[AutoNavBarPlugin.$0.length - 1];
    }
    else {
        $v_0 = AutoNavBarPlugin.$B(AutoNavBarPlugin.$1.scrollTop(), AutoNavBarPlugin.$0, 0, AutoNavBarPlugin.$0.length - 1);
    }
    AutoNavBarPlugin.$3.children('li').each(function($p1_0, $p1_1) {
        $P_CRM(this).removeClass(AutoNavBarPlugin.$2['listElementCssClass']);
        return;
    });
    var $v_1 = (($P_CRM($v_0.$6_0).data())['liElement']);
    $v_1.addClass(AutoNavBarPlugin.$2['listElementCssClass']);
}
AutoNavBarPlugin.$B = function($p0, $p1, $p2, $p3) {
    if ($p2 === $p3) {
        return $p1[$p2];
    }
    var $v_0 = Math.ceil(($p3 + $p2) / 2);
    if ($p0 < $p1[$v_0].$4_0) {
        return AutoNavBarPlugin.$B($p0, $p1, $p2, $v_0 - 1);
    }
    else {
        return AutoNavBarPlugin.$B($p0, $p1, $v_0, $p3);
    }
}


Mscrm.CorrespondingElement = function($p0, $p1, $p2) {
    this.$6_0 = $p0;
    this.$4_0 = $p1;
    this.$A_0 = $p2;
}
Mscrm.CorrespondingElement.prototype = {
    $6_0: null,
    $4_0: 0,
    $A_0: 0
}


function ChildFocusTracker() {
}
ChildFocusTracker.$$cctor = function() {
    Mscrm.JQueryPluginRegistrationHelper.registerPlugin(ChildFocusTracker);
}
ChildFocusTracker.trackChildFocus = function(customOptions) {
    var $v_0 = this;
    var $v_1 = null;
    var $v_2 = null;
    $v_2 = (!IsNull(customOptions) && !IsNull(customOptions.container)) ? customOptions.container : $P_CRM(window);
    return this.each(function($p1_0, $p1_1) {
        var $v_3 = $P_CRM(this);
        if (Mscrm.CrmBrowser.get_currentBrowser().get_isTouchEnabled()) {
            $v_3.bind('click', function($p2_0) {
                if (!$v_3.hasClass('focus') && !($v_3).parent('.post').hasClass('focus')) {
                    $v_2.find('.focus').removeClass('focus');
                    $v_3.addClass('focus');
                    $p2_0.preventDefault();
                }
            });
        }
        else {
            $v_3.find('a, button, textarea, input[type=\'button\'], input[type=\'text\'], input[type=\'\']').filter('[tabindex!=\'-1\']').each(function($p2_0, $p2_1) {
                $P_CRM($p2_1).filter(function($p3_0) {
                    var $v_4 = $P_CRM(this)[$p3_0];
                    if (Mscrm.ChildFocusTrackerHelper.$E($p1_1, $v_4)) {
                        Mscrm.ChildFocusTrackerHelper.$I($p1_1, $v_4);
                    }
                    Mscrm.ChildFocusTrackerHelper.$M($p1_1, $v_4);
                    return true;
                }).keydown(function($p3_0) {
                    var $v_5 = $p3_0.keyCode;
                    var $v_6 = $p3_0.shiftKey;
                    if ($v_5 === 9 && $v_6) {
                        var $v_7 = Mscrm.ChildFocusTrackerHelper.$7($p1_1);
                        if (!IsNull($v_7) && !Array.indexOf($v_7, $p3_0.currentTarget)) {
                            var $v_8 = Array.indexOf($v_0.get(), $p1_1);
                            if ($v_8 > 0) {
                                var $v_9 = $P_CRM($v_0[$v_8 - 1]);
                                if (!$v_9.hasClass('focus')) {
                                    $v_9.addClass('focus');
                                }
                            }
                        }
                    }
                }).focus(function($p3_0) {
                    if ($v_1 === $v_3) {
                        $v_1 = null;
                    }
                    if (!$v_3.hasClass('focus')) {
                        $v_3.addClass('focus');
                    }
                }).blur(function($p3_0) {
                    $v_1 = $v_3;
                    if (Mscrm.CrmBrowser.get_currentBrowser().get_agent() === 1 || Mscrm.CrmBrowser.get_currentBrowser().get_agent() === 3) {
                        $v_3.removeClass('focus');
                    }
                    else {
                        window.setTimeout(function() {
                            if ($v_1) {
                                $v_3.removeClass('focus');
                            }
                        }, 10);
                    }
                });
            });
            $v_3.filter('div.post').click(function($p2_0) {
                if (!$v_3.hasClass('focus')) {
                    $v_2.find('.focus').removeClass('focus');
                    $v_3.addClass('focus');
                }
            }).bind('mouseover', function($p2_0) {
                $v_2.find('.focus').removeClass('focus');
            });
        }
    });
}


Mscrm.ChildFocusTrackerHelper = function() {
}
Mscrm.ChildFocusTrackerHelper.$E = function($p0, $p1) {
    var $v_0 = Mscrm.ChildFocusTrackerHelper.$7($p0);
    return !IsNull($v_0) && Array.contains($v_0, $p1);
}
Mscrm.ChildFocusTrackerHelper.$M = function($p0, $p1) {
    var $v_0 = Mscrm.ChildFocusTrackerHelper.$7($p0);
    if (IsNull($v_0)) {
        $v_0 = new Array(0);
    }
    if (!Array.contains($v_0, $p1)) {
        $v_0[$v_0.length] = $p1;
    }
    $P_CRM($p0).data('FocusTrackingElements', $v_0);
}
Mscrm.ChildFocusTrackerHelper.$I = function($p0, $p1) {
    var $v_0 = Mscrm.ChildFocusTrackerHelper.$7($p0);
    Array.remove($v_0, $p1);
    $P_CRM($p0).data('FocusTrackingElements', $v_0);
}
Mscrm.ChildFocusTrackerHelper.$7 = function($p0) {
    return $P_CRM($p0).data()['FocusTrackingElements'];
}


Mscrm.JQueryPluginRegistrationHelper = function() {
}
Mscrm.JQueryPluginRegistrationHelper.registerPlugin = function(pluginType) {
    var $v_0 = Object;
    var $$dict_3 = pluginType;
    for (var $$key_4 in $$dict_3) {
        var $v_1 = { key: $$key_4, value: $$dict_3[$$key_4] };
        if ((($v_1.key) in $v_0)) {
            continue;
        }
        eval(String.format('$P_CRM.fn.{0} = {1}.{0}', $v_1.key, pluginType.getName()));
    }
}
Mscrm.JQueryPluginRegistrationHelper.initializeFieldsFromObjectCollections = function(instance, fields) {
    if (IsNull(instance) || IsNull(fields)) {
        return;
    }
    if (fields.length % 2) {
        throw Error.argument('fields', 'fields length invalid');
    }
    var $v_0 = instance;
    for (var $v_1 = 0; $v_1 < fields.length; $v_1 += 2) {
        $v_0[fields[$v_1]] = fields[$v_1 + 1];
    }
}
Mscrm.JQueryPluginRegistrationHelper.registerjQueryPluginOptions = function(pluginOptionsClassName) {
    eval(String.format('{0} = {1}', pluginOptionsClassName, Object.getName()));
}


function TextAreaAutoResizePlugin() {
}
TextAreaAutoResizePlugin.$$cctor = function() {
    Mscrm.JQueryPluginRegistrationHelper.registerPlugin(TextAreaAutoResizePlugin);
}
TextAreaAutoResizePlugin.textAreaAutoResize = function() {
    var $v_0 = Xrm.Internal.startMetricsStopwatch('TextAreaAutoResize');
    $v_0.start();
    var $v_1 = this.filter('textarea').each(function($p1_0, $p1_1) {
        var $v_2 = $P_CRM(this);
        var $v_3 = $v_2.width() - parseInt($v_2.css('paddingLeft')) - parseInt($v_2.css('paddingRight'));
        var $v_4 = { position: 'absolute', top: -10000, 'z-index': -10000, width: ($v_3 <= 0) ? 'auto' : $v_3, fontSize: $v_2.css('fontSize'), fontFamily: $v_2.css('fontFamily'), lineHeight: $v_2.css('lineHeight'), letterSpacing: $v_2.css('letterSpacing'), 'word-wrap': 'break-word', resize: 'none' };
        if (window.LOCID_UI_DIR === 'RTL') {
            $v_4['right'] = -10000;
        }
        else {
            $v_4['left'] = -10000;
        }
        var $v_5 = $P_CRM('<div></div>').css($v_4).appendTo(document.body);
        $v_2.data('dimensionsDiv', $v_5);
        if (IsNull($p1_1.getAttribute('MinHeight'))) {
            window.setTimeout(function() {
                $v_5.text('W');
                $v_2.data('minHeight', $v_5.height() + 2);
                $v_5.text('');
            }, 0);
        }
        else {
            $v_2.data('minHeight', parseInt($p1_1.getAttribute('MinHeight')));
        }
        var $v_6 = 0;
        if (!IsNull($p1_1.getAttribute('DeltaHeight'))) {
            $v_6 = parseInt($p1_1.getAttribute('DeltaHeight'));
        }
        $v_2.data('deltaHeight', $v_6);
        $v_2.change(Mscrm.TextAreaAutoResizePluginHelper.$9).keyup(Mscrm.TextAreaAutoResizePluginHelper.$9);
        var $v_7 = function($p2_0) {
            var $v_8 = $v_2.width();
            if ($v_8 >= 0 && Math.abs(Math.floor($v_5.width()) - Math.floor($v_8)) > 2) {
                $v_5.width($v_8);
                Mscrm.TextAreaAutoResizePluginHelper.$8($v_2);
            }
        };
        $P_CRM(window).resize($v_7);
        $v_2.data('windowResizeEventHandler', $v_7);
        Mscrm.TextAreaAutoResizePluginHelper.$8($v_2);
    });
    $v_0.stop();
    return $v_1;
}
TextAreaAutoResizePlugin.removeTextAreaAutoResize = function() {
    return this.filter('textarea').each(function($p1_0, $p1_1) {
        var $v_0 = $P_CRM(this);
        $v_0.unbind('change', Mscrm.TextAreaAutoResizePluginHelper.$9).unbind('keyup', Mscrm.TextAreaAutoResizePluginHelper.$9);
        var $v_1 = $v_0.data()['windowResizeEventHandler'];
        if (!IsNull($v_1)) {
            $P_CRM(window).unbind('resize', $v_1);
        }
        var $v_2 = $v_0.data()['dimensionsDiv'];
        if (!IsNull($v_2)) {
            $v_2.remove();
        }
        $v_0 = null;
    });
}
TextAreaAutoResizePlugin.forceResize = function() {
    Mscrm.TextAreaAutoResizePluginHelper.$8(this);
}


Mscrm.TextAreaAutoResizePluginHelper = function() {
}
Mscrm.TextAreaAutoResizePluginHelper.$9 = function($p0) {
    Mscrm.TextAreaAutoResizePluginHelper.$8($P_CRM($p0.currentTarget));
}
Mscrm.TextAreaAutoResizePluginHelper.$8 = function($p0) {
    var $v_0 = Mscrm.TextAreaAutoResizePluginHelper.$G($p0.val(), true);
    if ($v_0.trimEnd().endsWith('<br />')) {
        $v_0 += '&nbsp;';
    }
    var $v_1 = $p0.data();
    if (IsNull($v_1) || !(('dimensionsDiv') in $v_1)) {
        return;
    }
    var $v_2 = $v_1['dimensionsDiv'];
    if (Math.abs(Math.floor($v_2.width()) - Math.floor($p0.width())) > 2) {
        var $v_5 = $p0.data()['windowResizeEventHandler'];
        $v_5(null);
        return;
    }
    $v_2.html($v_0);
    var $v_3 = $v_1['minHeight'];
    if (!IsNull($p0[0].getAttribute('MinHeight'))) {
        $v_3 = $p0[0].getAttribute('MinHeight');
    }
    var $v_4 = Math.max($v_2.height() + 2 + $v_1['deltaHeight'], $v_3);
    $p0.css('height', $v_4.toString());
}
Mscrm.TextAreaAutoResizePluginHelper.$G = function($p0, $p1) {
    if (isNullOrEmptyString($p0)) {
        return '';
    }
    if (IsNull($p1)) {
        $p1 = false;
    }
    var $v_0 = $p0.replace('\r\n', '\n').replace('\r', '\n').split('\n');
    for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
        $v_0[$v_1] = (isNullOrEmptyString($v_0[$v_1])) ? '' : CrmEncodeDecode.CrmHtmlEncode($v_0[$v_1]);
    }
    if ($p1) {
        return $v_0.join('<br />');
    }
    else {
        return $v_0.join('\r\n');
    }
}


function TextAreaWatermarkPlugin() {
}
TextAreaWatermarkPlugin.$$cctor = function() {
    Mscrm.JQueryPluginRegistrationHelper.registerPlugin(TextAreaWatermarkPlugin);
}
TextAreaWatermarkPlugin.textAreaSetWatermark = function(customOptions) {
    return (this).htmlElementSetWatermark(customOptions, 'textarea');
}
TextAreaWatermarkPlugin.getValueWithoutWatermark = function() {
    return (this).getElementValueWithoutWatermark('textarea');
}


Mscrm.TextAreaWatermarkPluginHelper = function() {
}


function HTMLElementWatermarkPlugin() {
}
HTMLElementWatermarkPlugin.$$cctor = function() {
    Mscrm.JQueryPluginRegistrationHelper.registerPlugin(HTMLElementWatermarkPlugin);
}
HTMLElementWatermarkPlugin.htmlElementSetWatermark = function(customOptionsObject, htmlElementTagName) {
    var $v_0 = Xrm.Internal.startMetricsStopwatch('ElementWatermark');
    $v_0.start();
    var $v_1 = customOptionsObject;
    var $v_2 = this.filter(htmlElementTagName).each(function($p1_0, $p1_1) {
        var $v_3 = $P_CRM(this);
        var $v_4;
        if (!IsNull($v_1) && !IsNull($v_1.watermarkText) && !Mscrm.InternalUtilities._String.isNullOrEmpty($v_1.watermarkText)) {
            $v_4 = $v_1.watermarkText;
            $p1_1.setAttribute('WatermarkText', $v_4);
        }
        else if (!IsNull($p1_1.getAttribute('WatermarkText'))) {
            $v_4 = $p1_1.getAttribute('WatermarkText');
        }
        else {
            return;
        }
        $v_3.focus(function($p2_0) {
            var $v_6 = $v_3.val();
            $v_3.removeClass('watermark');
            if ($v_6 === $v_4) {
                $v_3.val('');
            }
            else if (!Mscrm.InternalUtilities._String.isNullOrEmpty($v_6) && $v_6.trim().length > 0 && $v_3.hasClass('watermark')) {
                var $v_7 = 0;
                for (var $v_A = 0; $v_A < $v_6.length; $v_A++) {
                    if ($v_6.charAt($v_A) !== $v_4.charAt($v_A)) {
                        $v_7 = $v_A;
                        break;
                    }
                }
                var $v_8 = 0;
                var $v_9 = $v_4.length - 1;
                for (var $v_B = $v_6.length - 1; $v_B >= 0; $v_B--) {
                    if ($v_6.charAt($v_B) !== $v_4.charAt($v_9)) {
                        $v_8 = $v_B;
                        break;
                    }
                    $v_9--;
                }
                $v_3.removeClass('watermark');
                $v_3.val($v_6.substring($v_7, $v_8 + 1));
            }
        });
        var $v_5 = function($p2_0) {
            if (Mscrm.InternalUtilities._String.isNullOrEmpty($v_3.val()) && Mscrm.Utilities.getActiveElement() !== $p1_1) {
                if (!$v_3.hasClass('watermark')) {
                    $v_3.addClass('watermark');
                }
                $v_3.val($v_4);
            }
        };
        $v_3.blur($v_5);
        $v_5(null);
    });
    $v_0.stop();
    return $v_2;
}
HTMLElementWatermarkPlugin.getElementValueWithoutWatermark = function(HtmlElementTagName) {
    var $v_0 = this.filter(HtmlElementTagName).first();
    if ($v_0.hasClass('watermark') && $v_0.val() === $v_0.attr('WatermarkText')) {
        return '';
    }
    else {
        return $v_0.val();
    }
}


Mscrm.HTMLElementWatermarkPluginHelper = function() {
}


ChildFocusTrackerOptions.registerClass('ChildFocusTrackerOptions');
TextAreaWatermarkOptions.registerClass('TextAreaWatermarkOptions');
HTMLElementWatermarkOptions.registerClass('HTMLElementWatermarkOptions');
AutoNavBarPlugin.registerClass('AutoNavBarPlugin');
Mscrm.CorrespondingElement.registerClass('Mscrm.CorrespondingElement');
ChildFocusTracker.registerClass('ChildFocusTracker');
Mscrm.ChildFocusTrackerHelper.registerClass('Mscrm.ChildFocusTrackerHelper');
Mscrm.JQueryPluginRegistrationHelper.registerClass('Mscrm.JQueryPluginRegistrationHelper');
TextAreaAutoResizePlugin.registerClass('TextAreaAutoResizePlugin');
Mscrm.TextAreaAutoResizePluginHelper.registerClass('Mscrm.TextAreaAutoResizePluginHelper');
TextAreaWatermarkPlugin.registerClass('TextAreaWatermarkPlugin');
Mscrm.TextAreaWatermarkPluginHelper.registerClass('Mscrm.TextAreaWatermarkPluginHelper');
HTMLElementWatermarkPlugin.registerClass('HTMLElementWatermarkPlugin');
Mscrm.HTMLElementWatermarkPluginHelper.registerClass('Mscrm.HTMLElementWatermarkPluginHelper');
AutoNavBarPlugin.$2 = null;
AutoNavBarPlugin.$0 = null;
AutoNavBarPlugin.$3 = null;
AutoNavBarPlugin.$1 = null;
AutoNavBarPlugin.$5 = 0;
AutoNavBarPlugin.$$cctor();
ChildFocusTracker.$$cctor();
TextAreaAutoResizePlugin.$$cctor();
TextAreaWatermarkPlugin.$$cctor();
Mscrm.TextAreaWatermarkPluginHelper.watermarkTextAttributeName = 'WatermarkText';
Mscrm.TextAreaWatermarkPluginHelper.watermarkCssClassName = 'watermark';
HTMLElementWatermarkPlugin.$$cctor();
Mscrm.HTMLElementWatermarkPluginHelper.watermarkTextAttributeName = 'WatermarkText';
Mscrm.HTMLElementWatermarkPluginHelper.watermarkCssClassName = 'watermark';
//@ sourceMappingURL=.srcmap
