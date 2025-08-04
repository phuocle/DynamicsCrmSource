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
// file://c:\bt\160165\src\core\application\web\scriptsharp\_common\scripts\jqueryplugins\AutoNavBar.cs (46,3)
AutoNavBarPlugin.$$cctor = function AutoNavBarPlugin$$$cctor() {
    Mscrm.JQueryPluginRegistrationHelper.registerPlugin(AutoNavBarPlugin);
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_common\scripts\jqueryplugins\AutoNavBar.cs (62,3)
AutoNavBarPlugin.autoNavBar = function AutoNavBarPlugin$autoNavBar(options) {
    AutoNavBarPlugin.$D(options, this);
    return this;
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_common\scripts\jqueryplugins\AutoNavBar.cs (72,3)
AutoNavBarPlugin.$D = function AutoNavBarPlugin$$D($p0, $p1) {
    AutoNavBarPlugin.$1 = new Array(0);
    AutoNavBarPlugin.$3 = { listSelector: null, scrollRegionSelector: null, listElementCssClass: null, insertSpacer: true, animateScroll: true, reInitializeOnResize: true };
    AutoNavBarPlugin.$3 = $P_CRM.extend(AutoNavBarPlugin.$3, $p0);
    var $v_0 = AutoNavBarPlugin.$3['listSelector'];
    var $v_1 = AutoNavBarPlugin.$3['scrollRegionSelector'];
    if (!$v_0 || !$v_1) {
        return;
    }
    AutoNavBarPlugin.$4 = $p1.find($v_0).first();
    AutoNavBarPlugin.$2 = $p1.find($v_1).first();
    AutoNavBarPlugin.$4.children('li').each(AutoNavBarPlugin.$K);
    if (AutoNavBarPlugin.$3['insertSpacer']) {
        AutoNavBarPlugin.$L();
    }
    AutoNavBarPlugin.$4.children('li').click(AutoNavBarPlugin.$F);
    AutoNavBarPlugin.$5 = -1;
    AutoNavBarPlugin.$2.scroll(AutoNavBarPlugin.$J);
    if (AutoNavBarPlugin.$3['reInitializeOnResize']) {
        $P_CRM(window).resize(function($p1_0) {
            AutoNavBarPlugin.$H($p0, $p1);
        });
    }
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_common\scripts\jqueryplugins\AutoNavBar.cs (122,3)
AutoNavBarPlugin.$H = function AutoNavBarPlugin$$H($p0, $p1) {
    for (var $$arr_2 = AutoNavBarPlugin.$1, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
        var $v_0 = $$arr_2[$$idx_4];
        $P_CRM($v_0.$A_0).removeData('liElement');
    }
    this.remove('#spacer');
    AutoNavBarPlugin.$D($p0, $p1);
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_common\scripts\jqueryplugins\AutoNavBar.cs (141,3)
AutoNavBarPlugin.$K = function AutoNavBarPlugin$$K($p0, $p1) {
    var $v_0 = $P_CRM(this).attr('correspondingElementSelector');
    var $v_1 = $P_CRM($v_0);
    var $v_2 = $v_1[0].offsetTop;
    var $v_3 = parseInt($v_1.css('margin-top'));
    $v_3 = (isNaN($v_3)) ? 0 : $v_3;
    var $v_4 = AutoNavBarPlugin.$2[0].offsetTop;
    var $v_5 = $v_2 - $v_3 - $v_4;
    var $v_6 = new Mscrm.CorrespondingElement($v_1[0], $v_5, $v_1.outerHeight(true));
    AutoNavBarPlugin.$1[AutoNavBarPlugin.$1.length] = $v_6;
    $v_1.data('liElement', $P_CRM(this));
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_common\scripts\jqueryplugins\AutoNavBar.cs (165,3)
AutoNavBarPlugin.$L = function AutoNavBarPlugin$$L() {
    var $v_0 = AutoNavBarPlugin.$1[AutoNavBarPlugin.$1.length - 1];
    if (IsNull($v_0)) {
        return;
    }
    var $v_1 = AutoNavBarPlugin.$2.height();
    var $v_2 = $v_0.$C_0;
    var $v_3 = $v_1 - $v_2;
    if ($v_3 < 0) {
        return;
    }
    $P_CRM('<div id=\'spacer\'></div>').height($v_3).appendTo(AutoNavBarPlugin.$2);
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_common\scripts\jqueryplugins\AutoNavBar.cs (182,3)
AutoNavBarPlugin.$F = function AutoNavBarPlugin$$F($p0) {
    if (AutoNavBarPlugin.$3['animateScroll']) {
        AutoNavBarPlugin.$2.animate({ scrollTop: AutoNavBarPlugin.$1[$P_CRM(this).index()].$6_0 }, 200);
    }
    else {
        AutoNavBarPlugin.$2.scrollTop(AutoNavBarPlugin.$1[$P_CRM(this).index()].$6_0);
    }
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_common\scripts\jqueryplugins\AutoNavBar.cs (196,3)
AutoNavBarPlugin.$J = function AutoNavBarPlugin$$J($p0) {
    if (AutoNavBarPlugin.$5 >= 0) {
        window.clearTimeout(AutoNavBarPlugin.$5);
    }
    var $v_0 = AutoNavBarPlugin.updateLiElement;
    AutoNavBarPlugin.$5 = window.setTimeout($v_0, 10);
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_common\scripts\jqueryplugins\AutoNavBar.cs (209,3)
AutoNavBarPlugin.updateLiElement = function AutoNavBarPlugin$updateLiElement() {
    if (!AutoNavBarPlugin.$1.length) {
        return;
    }
    var $v_0;
    if ((AutoNavBarPlugin.$2[0].scrollHeight - AutoNavBarPlugin.$2[0].scrollTop) === AutoNavBarPlugin.$2[0].clientHeight) {
        $v_0 = AutoNavBarPlugin.$1[AutoNavBarPlugin.$1.length - 1];
    }
    else {
        $v_0 = AutoNavBarPlugin.$B(AutoNavBarPlugin.$2.scrollTop(), AutoNavBarPlugin.$1, 0, AutoNavBarPlugin.$1.length - 1);
    }
    AutoNavBarPlugin.$4.children('li').each(function($p1_0, $p1_1) {
        $P_CRM(this).removeClass(AutoNavBarPlugin.$3['listElementCssClass']);
        return;
    });
    var $v_1 = (($P_CRM($v_0.$A_0).data())['liElement']);
    $v_1.addClass(AutoNavBarPlugin.$3['listElementCssClass']);
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_common\scripts\jqueryplugins\AutoNavBar.cs (243,3)
AutoNavBarPlugin.$B = function AutoNavBarPlugin$$B($p0, $p1, $p2, $p3) {
    if ($p2 === $p3) {
        return $p1[$p2];
    }
    var $v_0 = Math.ceil(($p3 + $p2) / 2);
    if ($p0 < $p1[$v_0].$6_0) {
        return AutoNavBarPlugin.$B($p0, $p1, $p2, $v_0 - 1);
    }
    else {
        return AutoNavBarPlugin.$B($p0, $p1, $v_0, $p3);
    }
}


Mscrm.CorrespondingElement = function Mscrm_CorrespondingElement($p0, $p1, $p2) {
    this.$A_0 = $p0;
    this.$6_0 = $p1;
    this.$C_0 = $p2;
}
Mscrm.CorrespondingElement.prototype = {
    $A_0: null,
    $6_0: 0,
    $C_0: 0
}


function ChildFocusTracker() {
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_common\scripts\jqueryplugins\ChildFocusTracker.js.cs (18,3)
ChildFocusTracker.$$cctor = function ChildFocusTracker$$$cctor() {
    Mscrm.JQueryPluginRegistrationHelper.registerPlugin(ChildFocusTracker);
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_common\scripts\jqueryplugins\ChildFocusTracker.js.cs (28,3)
ChildFocusTracker.trackChildFocus = function ChildFocusTracker$trackChildFocus(customOptions) {
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


Mscrm.ChildFocusTrackerHelper = function Mscrm_ChildFocusTrackerHelper() {
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_common\scripts\jqueryplugins\ChildFocusTracker.js.cs (171,3)
Mscrm.ChildFocusTrackerHelper.$E = function Mscrm_ChildFocusTrackerHelper$$E($p0, $p1) {
    var $v_0 = Mscrm.ChildFocusTrackerHelper.$7($p0);
    return !IsNull($v_0) && Array.contains($v_0, $p1);
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_common\scripts\jqueryplugins\ChildFocusTracker.js.cs (184,3)
Mscrm.ChildFocusTrackerHelper.$M = function Mscrm_ChildFocusTrackerHelper$$M($p0, $p1) {
    var $v_0 = Mscrm.ChildFocusTrackerHelper.$7($p0);
    if (IsNull($v_0)) {
        $v_0 = new Array(0);
    }
    if (!Array.contains($v_0, $p1)) {
        $v_0[$v_0.length] = $p1;
    }
    $P_CRM($p0).data('FocusTrackingElements', $v_0);
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_common\scripts\jqueryplugins\ChildFocusTracker.js.cs (206,3)
Mscrm.ChildFocusTrackerHelper.$I = function Mscrm_ChildFocusTrackerHelper$$I($p0, $p1) {
    var $v_0 = Mscrm.ChildFocusTrackerHelper.$7($p0);
    Array.remove($v_0, $p1);
    $P_CRM($p0).data('FocusTrackingElements', $v_0);
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_common\scripts\jqueryplugins\ChildFocusTracker.js.cs (220,3)
Mscrm.ChildFocusTrackerHelper.$7 = function Mscrm_ChildFocusTrackerHelper$$7($p0) {
    return $P_CRM($p0).data()['FocusTrackingElements'];
}


Mscrm.JQueryPluginRegistrationHelper = function Mscrm_JQueryPluginRegistrationHelper() {
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_common\scripts\jqueryplugins\JQueryPluginRegistrationHelper.js.cs (28,3)
Mscrm.JQueryPluginRegistrationHelper.registerPlugin = function Mscrm_JQueryPluginRegistrationHelper$registerPlugin(pluginType) {
    var $v_0 = Object;
    var $$dict_2 = pluginType;
    for (var $$key_3 in $$dict_2) {
        var $v_1 = { key: $$key_3, value: $$dict_2[$$key_3] };
        if ((($v_1.key) in $v_0)) {
            continue;
        }
        eval(String.format('$P_CRM.fn.{0} = {1}.{0}', $v_1.key, pluginType.getName()));
    }
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_common\scripts\jqueryplugins\JQueryPluginRegistrationHelper.js.cs (48,3)
Mscrm.JQueryPluginRegistrationHelper.initializeFieldsFromObjectCollections = function Mscrm_JQueryPluginRegistrationHelper$initializeFieldsFromObjectCollections(instance, fields) {
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
// file://c:\bt\160165\src\core\application\web\scriptsharp\_common\scripts\jqueryplugins\JQueryPluginRegistrationHelper.js.cs (72,3)
Mscrm.JQueryPluginRegistrationHelper.registerjQueryPluginOptions = function Mscrm_JQueryPluginRegistrationHelper$registerjQueryPluginOptions(pluginOptionsClassName) {
    eval(String.format('{0} = {1}', pluginOptionsClassName, Object.getName()));
}


function TextAreaAutoResizePlugin() {
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_common\scripts\jqueryplugins\TextAreaAutoResize.js.cs (30,3)
TextAreaAutoResizePlugin.$$cctor = function TextAreaAutoResizePlugin$$$cctor() {
    Mscrm.JQueryPluginRegistrationHelper.registerPlugin(TextAreaAutoResizePlugin);
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_common\scripts\jqueryplugins\TextAreaAutoResize.js.cs (40,3)
TextAreaAutoResizePlugin.textAreaAutoResize = function TextAreaAutoResizePlugin$textAreaAutoResize() {
    return this.filter('textarea').each(function($p1_0, $p1_1) {
        var $v_0 = $P_CRM(this);
        var $v_1 = $v_0.width() - parseInt($v_0.css('paddingLeft')) - parseInt($v_0.css('paddingRight'));
        var $v_2 = { position: 'absolute', top: -10000, 'z-index': -10000, width: ($v_1 <= 0) ? 'auto' : $v_1, fontSize: $v_0.css('fontSize'), fontFamily: $v_0.css('fontFamily'), lineHeight: $v_0.css('lineHeight'), letterSpacing: $v_0.css('letterSpacing'), 'word-wrap': 'break-word', resize: 'none' };
        if (window.LOCID_UI_DIR === 'RTL') {
            $v_2['right'] = -10000;
        }
        else {
            $v_2['left'] = -10000;
        }
        var $v_3 = $P_CRM('<div></div>').css($v_2).appendTo(document.body);
        $v_0.data('dimensionsDiv', $v_3);
        if (IsNull($p1_1.getAttribute('MinHeight'))) {
            window.setTimeout(function() {
                $v_3.text('W');
                $v_0.data('minHeight', $v_3.height() + 2);
                $v_3.text('');
            }, 0);
        }
        else {
            $v_0.data('minHeight', parseInt($p1_1.getAttribute('MinHeight')));
        }
        var $v_4 = 0;
        if (!IsNull($p1_1.getAttribute('DeltaHeight'))) {
            $v_4 = parseInt($p1_1.getAttribute('DeltaHeight'));
        }
        $v_0.data('deltaHeight', $v_4);
        $v_0.change(Mscrm.TextAreaAutoResizePluginHelper.$9).keyup(Mscrm.TextAreaAutoResizePluginHelper.$9);
        var $v_5 = function($p2_0) {
            var $v_6 = $v_0.width();
            if ($v_6 >= 0 && Math.abs(Math.floor($v_3.width()) - Math.floor($v_6)) > 2) {
                $v_3.width($v_6);
                Mscrm.TextAreaAutoResizePluginHelper.$8($v_0);
            }
        };
        $P_CRM(window).resize($v_5);
        $v_0.data('windowResizeEventHandler', $v_5);
        Mscrm.TextAreaAutoResizePluginHelper.$8($v_0);
    });
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_common\scripts\jqueryplugins\TextAreaAutoResize.js.cs (122,3)
TextAreaAutoResizePlugin.removeTextAreaAutoResize = function TextAreaAutoResizePlugin$removeTextAreaAutoResize() {
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
// file://c:\bt\160165\src\core\application\web\scriptsharp\_common\scripts\jqueryplugins\TextAreaAutoResize.js.cs (149,3)
TextAreaAutoResizePlugin.forceResize = function TextAreaAutoResizePlugin$forceResize() {
    Mscrm.TextAreaAutoResizePluginHelper.$8(this);
}


Mscrm.TextAreaAutoResizePluginHelper = function Mscrm_TextAreaAutoResizePluginHelper() {
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_common\scripts\jqueryplugins\TextAreaAutoResize.js.cs (175,3)
Mscrm.TextAreaAutoResizePluginHelper.$9 = function Mscrm_TextAreaAutoResizePluginHelper$$9($p0) {
    Mscrm.TextAreaAutoResizePluginHelper.$8($P_CRM($p0.currentTarget));
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_common\scripts\jqueryplugins\TextAreaAutoResize.js.cs (184,3)
Mscrm.TextAreaAutoResizePluginHelper.$8 = function Mscrm_TextAreaAutoResizePluginHelper$$8($p0) {
    var $v_0 = Mscrm.TextAreaAutoResizePluginHelper.$G($p0.val(), true);
    if ($v_0.trimEnd().endsWith('<br />')) {
        $v_0 += '&nbsp;';
    }
    var $v_1 = $p0.data();
    if (!('dimensionsDiv' in $v_1)) {
        return;
    }
    var $v_2 = $v_1['dimensionsDiv'];
    if ($v_2.css('width') === 'auto' || Math.abs(Math.floor($v_2.width()) - Math.floor($p0.width())) > 2) {
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
// file://c:\bt\160165\src\core\application\web\scriptsharp\_common\scripts\jqueryplugins\TextAreaAutoResize.js.cs (226,3)
Mscrm.TextAreaAutoResizePluginHelper.$G = function Mscrm_TextAreaAutoResizePluginHelper$$G($p0, $p1) {
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
// file://c:\bt\160165\src\core\application\web\scriptsharp\_common\scripts\jqueryplugins\TextAreaWatermark.js.cs (18,3)
TextAreaWatermarkPlugin.$$cctor = function TextAreaWatermarkPlugin$$$cctor() {
    Mscrm.JQueryPluginRegistrationHelper.registerPlugin(TextAreaWatermarkPlugin);
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_common\scripts\jqueryplugins\TextAreaWatermark.js.cs (28,3)
TextAreaWatermarkPlugin.textAreaSetWatermark = function TextAreaWatermarkPlugin$textAreaSetWatermark(customOptions) {
    return (this).htmlElementSetWatermark(customOptions, 'textarea');
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_common\scripts\jqueryplugins\TextAreaWatermark.js.cs (37,3)
TextAreaWatermarkPlugin.getValueWithoutWatermark = function TextAreaWatermarkPlugin$getValueWithoutWatermark() {
    return (this).getElementValueWithoutWatermark('textarea');
}


Mscrm.TextAreaWatermarkPluginHelper = function Mscrm_TextAreaWatermarkPluginHelper() {
}


function HTMLElementWatermarkPlugin() {
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_common\scripts\jqueryplugins\TextAreaWatermark.js.cs (79,3)
HTMLElementWatermarkPlugin.$$cctor = function HTMLElementWatermarkPlugin$$$cctor() {
    Mscrm.JQueryPluginRegistrationHelper.registerPlugin(HTMLElementWatermarkPlugin);
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_common\scripts\jqueryplugins\TextAreaWatermark.js.cs (90,3)
HTMLElementWatermarkPlugin.htmlElementSetWatermark = function HTMLElementWatermarkPlugin$htmlElementSetWatermark(customOptionsObject, htmlElementTagName) {
    var $v_0 = customOptionsObject;
    return this.filter(htmlElementTagName).each(function($p1_0, $p1_1) {
        var $v_1 = $P_CRM(this);
        var $v_2;
        if (!IsNull($v_0) && !IsNull($v_0.watermarkText) && !Mscrm.InternalUtilities._String.isNullOrEmpty($v_0.watermarkText)) {
            $v_2 = $v_0.watermarkText;
            $p1_1.setAttribute('WatermarkText', $v_2);
        }
        else if (!IsNull($p1_1.getAttribute('WatermarkText'))) {
            $v_2 = $p1_1.getAttribute('WatermarkText');
        }
        else {
            return;
        }
        $v_1.focus(function($p2_0) {
            var $v_4 = $v_1.val();
            $v_1.removeClass('watermark');
            if ($v_4 === $v_2) {
                $v_1.val('');
            }
            else if (!Mscrm.InternalUtilities._String.isNullOrEmpty($v_4) && $v_4.trim().length > 0 && $v_1.hasClass('watermark')) {
                var $v_5 = 0;
                for (var $v_8 = 0; $v_8 < $v_4.length; $v_8++) {
                    if ($v_4.charAt($v_8) !== $v_2.charAt($v_8)) {
                        $v_5 = $v_8;
                        break;
                    }
                }
                var $v_6 = 0;
                var $v_7 = $v_2.length - 1;
                for (var $v_9 = $v_4.length - 1; $v_9 >= 0; $v_9--) {
                    if ($v_4.charAt($v_9) !== $v_2.charAt($v_7)) {
                        $v_6 = $v_9;
                        break;
                    }
                    $v_7--;
                }
                $v_1.removeClass('watermark');
                $v_1.val($v_4.substring($v_5, $v_6 + 1));
            }
        });
        var $v_3 = function($p2_0) {
            if (Mscrm.InternalUtilities._String.isNullOrEmpty($v_1.val()) && Mscrm.Utilities.getActiveElement() !== $p1_1) {
                if (!$v_1.hasClass('watermark')) {
                    $v_1.addClass('watermark');
                }
                $v_1.val($v_2);
            }
        };
        $v_1.blur($v_3);
        $v_3(null);
    });
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_common\scripts\jqueryplugins\TextAreaWatermark.js.cs (177,3)
HTMLElementWatermarkPlugin.getElementValueWithoutWatermark = function HTMLElementWatermarkPlugin$getElementValueWithoutWatermark(HtmlElementTagName) {
    var $v_0 = this.filter(HtmlElementTagName).first();
    if ($v_0.hasClass('watermark') && $v_0.val() === $v_0.attr('WatermarkText')) {
        return '';
    }
    else {
        return $v_0.val();
    }
}


Mscrm.HTMLElementWatermarkPluginHelper = function Mscrm_HTMLElementWatermarkPluginHelper() {
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
AutoNavBarPlugin.$3 = null;
AutoNavBarPlugin.$1 = null;
AutoNavBarPlugin.$4 = null;
AutoNavBarPlugin.$2 = null;
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
