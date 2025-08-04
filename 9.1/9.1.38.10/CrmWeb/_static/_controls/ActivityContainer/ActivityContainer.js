Type.registerNamespace('Mscrm');

Mscrm.CheckBoxStatus = function() {}
Mscrm.CheckBoxStatus.prototype = {
    yes: 1, 
    no: 0
}
Mscrm.CheckBoxStatus.registerEnum('Mscrm.CheckBoxStatus', false);


Mscrm.ActivityCommandBarCommand = function() {}
Mscrm.ActivityCommandBarCommand.prototype = {
    addPhoneCall: 0, 
    addTask: 1, 
    selectFilter: 2, 
    moreActivities: 3, 
    addEmail: 4, 
    addAppointment: 5, 
    addCustomActivity: 6, 
    selectWallFilter: 7, 
    sortActivityWall: 8
}
Mscrm.ActivityCommandBarCommand.registerEnum('Mscrm.ActivityCommandBarCommand', false);


Mscrm.ActivityContainer = function(element) {
    Mscrm.ActivityContainer.initializeBase(this, [ element ]);
}
Mscrm.ActivityContainer.get_parentFormInitializationCompleted = function() {
    return Mscrm.ActivityContainer.$Q;
}
Mscrm.ActivityContainer.set_parentFormInitializationCompleted = function(value) {
    Mscrm.ActivityContainer.$Q = value;
    return value;
}
Mscrm.ActivityContainer.get_activitiesWallFilter = function() {
    if (!Mscrm.ActivityContainer.$B) {
        Mscrm.ActivityContainer.$B = Mscrm.CrmUIComponent.crmCreate(Mscrm.ActivityCommandBarButton, null, null, null, $get('activityWallFilterButton'));
        Mscrm.ActivityContainer.$B.get_menu().changeSelectedMenuItem(Mscrm.ActivityContainerConstants.activitiesWallFilterButtonId()[0]);
    }
    return Mscrm.ActivityContainer.$B;
}
Mscrm.ActivityContainer.get_filterWall = function() {
    if (!Mscrm.ActivityContainer.$E) {
        Mscrm.ActivityContainer.$E = Mscrm.CrmUIComponent.crmCreate(Mscrm.ActivityCommandBarButton, null, null, null, $get('activityFilterButton'));
    }
    return Mscrm.ActivityContainer.$E;
}
Mscrm.ActivityContainer.get_moreActivitiesButton = function() {
    if (!Mscrm.ActivityContainer.$F) {
        Mscrm.ActivityContainer.$F = Mscrm.CrmUIComponent.crmCreate(Mscrm.ActivityCommandBarButton, null, null, null, $get('moreActivitiesButton'));
    }
    return Mscrm.ActivityContainer.$F;
}
Mscrm.ActivityContainer.get_activityWallSortButton = function() {
    if (!Mscrm.ActivityContainer.$R) {
        Mscrm.ActivityContainer.$R = Mscrm.CrmUIComponent.crmCreate(Mscrm.ActivityCommandBarButton, null, null, null, $get('activityWallSortButton'));
    }
    return Mscrm.ActivityContainer.$R;
}
Mscrm.ActivityContainer.activityBarClick = function(select, command, eventObject) {
    if (!Mscrm.Utilities.isTurboForm() && !Mscrm.ActivityContainer.$Q) {
        return;
    }
    Mscrm.ActivityContainer.get_activitiesWallFilter().get_menu().customFilter = false;
    switch (command) {
        case 0:
            Mscrm.ActivityContainer.$k(4210, select);
            Mscrm.ActivityContainer.changeNotchPosition(select);
            break;
        case 1:
            Mscrm.ActivityContainer.$k(4212, select);
            Mscrm.ActivityContainer.changeNotchPosition(select);
            break;
        case 2:
            if (Mscrm.ActivityContainer.$H()) {
                break;
            }
            Mscrm.ActivityContainer.get_activitiesWallFilter().get_menu().processAndShowMenu();
            break;
        case 3:
            if (Mscrm.ActivityContainer.$H()) {
                break;
            }
            Mscrm.ActivityContainer.get_moreActivitiesButton().get_menu().processAndShowMenu();
            break;
        case 7:
            if (Mscrm.ActivityContainer.$H()) {
                break;
            }
            var $v_0 = select.nextSibling.getElementsByTagName('input');
            for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
                var $v_2 = $v_0[$v_1];
                if (Mscrm.ActivityContainer.$3['AllEntitiesButton']) {
                    $v_2.setAttribute('checked', true);
                    Mscrm.ActivityContainer.$3[$v_2.getAttribute('id')] = true;
                }
                else {
                    if (Mscrm.ActivityContainer.$3[$v_2.getAttribute('id')]) {
                        $v_2.setAttribute('checked', true);
                    }
                    else {
                        $v_2.removeAttribute('checked');
                    }
                }
            }
            Mscrm.ActivityContainer.get_filterWall().get_menu().customFilter = true;
            Mscrm.ActivityContainer.get_filterWall().get_menu().processAndShowMenu();
            break;
        case 8:
            Mscrm.ActivityContainer.$15();
            break;
    }
}
Mscrm.ActivityContainer.customactivityBarClick = function(select, command, eventObject) {
    var $v_0 = select.nextSibling.getElementsByTagName('input');
    for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
        var $v_2 = $v_0[$v_1];
        if (Mscrm.ActivityContainer.$3['AllEntitiesButton']) {
            if (!Array.contains(Mscrm.ActivityContainer.$2, $v_2.getAttribute('id'))) {
                Array.add(Mscrm.ActivityContainer.$2, $v_2.getAttribute('id'));
            }
        }
    }
    Mscrm.ActivityContainer.activityBarClick(select, command, eventObject);
}
Mscrm.ActivityContainer.changeNotchPosition = function(select) {
    if (IsNull(select) || Mscrm.InternalUtilities.JSTypes.isNull(select.offsetParent)) {
        return;
    }
    var $v_0 = select.offsetLeft;
    var $v_1 = select.offsetParent.offsetWidth;
    Mscrm.ActivityContainer.$b = (select.offsetWidth / 2) - Mscrm.ActivityContainer.$r;
    var $v_2 = ($v_0 + Mscrm.ActivityContainer.$b);
    $v_2 = ($v_2 >= $v_1) ? ($v_0 + $v_1) / 2 : $v_2;
    var $v_3 = ($v_2 + 'px');
    var $v_4 = $P_CRM($get('activitycontainer' + Mscrm.ActivityContainer.$6));
    $v_4.find('b.notch').css('left', $v_3);
}
Mscrm.ActivityContainer.selectActivityWallFilter = function(id) {
    if (id === 'AllActivitiesButton' || id === 'OpenActivitiesButton' || id === 'OverdueActivitiesButton') {
        Mscrm.ActivityContainer.get_activitiesWallFilter().get_menu().changeSelectedMenuItem(id);
        Mscrm.ActivityContainer.changeNotchPosition(Mscrm.ActivityContainer.$K);
    }
    Mscrm.ActivityContainer.$g(Mscrm.ActivityContainer.$S, 'refreshall', null, null);
}
Mscrm.ActivityContainer.toggle = function(select, id) {
    if (IsNull(select)) {
        return;
    }
    var $v_0 = select.getElementsByTagName('input')[0];
    var $v_1 = select.getAttribute('id');
    if ($v_0.checked) {
        if ($v_1 === 'AllEntitiesButton') {
            var $v_2 = select.parentNode.getElementsByTagName('input');
            for (var $v_3 = 0; $v_3 < $v_2.length; $v_3++) {
                var $v_4 = $v_2[$v_3];
                $v_4.checked = $v_0.checked;
                if (!Array.contains(Mscrm.ActivityContainer.$2, $v_4.getAttribute('id'))) {
                    Array.add(Mscrm.ActivityContainer.$2, $v_4.getAttribute('id'));
                }
                Mscrm.ActivityContainer.$3[$v_4.getAttribute('id')] = $v_0.checked;
            }
        }
        else {
            if (!Array.contains(Mscrm.ActivityContainer.$2, $v_1)) {
                Array.add(Mscrm.ActivityContainer.$2, $v_1);
            }
            Mscrm.ActivityContainer.$3[$v_1] = $v_0.checked;
            (select.getElementsByTagName('input')[0]).checked = $v_0.checked;
        }
    }
    else if ($v_1 === 'AllEntitiesButton' && !$v_0.checked) {
        var $v_5 = select.parentNode.getElementsByTagName('input');
        for (var $v_6 = 0; $v_6 < $v_5.length; $v_6++) {
            var $v_7 = $v_5[$v_6];
            Mscrm.ActivityContainer.$3[$v_7.getAttribute('id')] = $v_0.checked;
            Array.remove(Mscrm.ActivityContainer.$2, $v_7.getAttribute('id'));
            $v_7.checked = $v_0.checked;
        }
    }
    else {
        if (Mscrm.ActivityContainer.$3['AllEntitiesButton']) {
            (select.parentNode.getElementsByTagName('input')[0]).checked = $v_0.checked;
            Mscrm.ActivityContainer.$3['AllEntitiesButton'] = false;
            Array.remove(Mscrm.ActivityContainer.$2, 'AllEntitiesButton');
        }
        Array.remove(Mscrm.ActivityContainer.$2, $v_1);
        (select.getElementsByTagName('input')[0]).checked = $v_0.checked;
        Mscrm.ActivityContainer.$3[$v_1] = $v_0.checked;
    }
    Mscrm.ActivityContainer.selectActivityWallFilter('');
}
Mscrm.ActivityContainer.$w = function() {
    var $v_0 = Mscrm.ActivityContainer.get_activitiesWallFilter().get_menu().get_currentMenu();
    if (!$v_0) {
        return -1;
    }
    for (var $v_1 = 0; $v_1 < Mscrm.ActivityContainerConstants.activitiesWallFilterButtonId().length; $v_1++) {
        if (!$v_0.localeCompare(Mscrm.ActivityContainerConstants.activitiesWallFilterButtonId()[$v_1])) {
            return $v_1;
        }
    }
    return -1;
}
Mscrm.ActivityContainer.$k = function($p0, $p1) {
    var $v_0 = 'activitycontainer' + $p0;
    if (Mscrm.ActivityContainer.$6 !== $p0) {
        var $v_2 = 'activitycontainer' + Mscrm.ActivityContainer.$6;
        var $v_3 = $get($v_2);
        if (!IsNull($v_3)) {
            $v_3.style.display = 'none';
        }
        var $v_4 = $get($v_0);
        if ($p0 === 4210) {
            if (Mscrm.ActivityContainer.$10()) {
                var $v_5 = $get(Mscrm.ActivityContainer.$A);
                $v_5.checked = true;
            }
        }
        if ($v_4) {
            $v_4.style.display = 'block';
        }
    }
    var $v_1 = $get($v_0);
    if (!IsNull($v_1)) {
        var $v_6 = $v_1.parentNode.parentNode.parentNode;
        var $v_7 = 0;
        if (XUI.Html.GetComputedStyle($v_6, 'overflowX') === 'visible') {
            $v_7 = $v_6.clientWidth;
        }
        else {
            $v_6.style.overflow = 'scroll';
            $v_7 = $v_6.clientWidth;
            $v_6.style.overflow = '';
        }
        $v_1.style.width = ($v_7 - 15) + 'px';
    }
    Mscrm.ActivityContainer.$6 = $p0;
    Mscrm.ActivityContainer.$K = $p1;
    Mscrm.ActivityContainer.$14($p0);
}
Mscrm.ActivityContainer.$15 = function() {
    var $v_0 = $P_CRM($get('activityWallSortButton'));
    if (!IsNull($v_0)) {
        var $v_1 = null;
        var $v_2 = Xrm.Internal.getResourceString('ActivityWallSort_OrderByAsc');
        var $v_3 = Xrm.Internal.getResourceString('ActivityWallSort_OrderByDesc');
        var $v_4 = $v_0.find('.activityWallSortImage');
        if (!IsNull($v_4)) {
            var $v_5 = $v_4.attr('fieldDisplayName');
            var $v_6 = $v_4.attr('fieldNameValue');
            var $v_7 = $v_4.attr('orderByValue');
            if ($v_7 === $v_2) {
                $v_1 = '/_IMGS/GRID/sorting_down.png';
                $v_7 = $v_3;
            }
            else {
                $v_1 = '/_IMGS/GRID/sorting_up.png';
                $v_7 = $v_2;
            }
            $v_4.attr('src', $v_1);
            $v_4.attr('orderByValue', $v_7);
            $v_0.attr('title', String.format('{0}:: {1} {2}', Xrm.Internal.getResourceString('ActivityWallSort_Title'), $v_5, $v_7));
            var $v_8 = {};
            $v_8['orderByActivity'] = ($v_7 === $v_2) ? 'ascending' : 'descending';
            $v_8['sortActivity'] = $v_6;
            Mscrm.ActivityContainer.$g(Mscrm.ActivityContainer.$S, 'refreshall', null, $v_8);
        }
    }
}
Mscrm.ActivityContainer.$p = function($p0, $p1) {
    if (IsNull($p1)) {
        $p1 = true;
    }
    if (Mscrm.Utilities.isTurboForm()) {
        return Mscrm.TurboForm.Control.PageManager.getQuickFormViewModel($p0, $p1);
    }
    else {
        return Mscrm.QuickFormBehavior.getBehaviorById($p0);
    }
}
Mscrm.ActivityContainer.openNewActivityCreateFormInline = function(activityTypeCode) {
    var $v_0 = Xrm.Page.data.entity;
    var $v_1 = $v_0.getId();
    var $v_2 = $v_0.getPrimaryAttributeValue();
    var $v_3 = $v_0.getEntityName();
    var $v_4 = CrmEncodeDecode.CrmUrlEncode($v_1);
    var $v_5 = CrmEncodeDecode.CrmUrlEncode($v_2);
    var $v_6 = Xrm.Internal.getEntityCode($v_3);
    var $v_7 = CrmEncodeDecode.CrmUrlEncode($v_6.toString());
    var $v_8 = String.format('regardingobjectid={0}&regardingobjecttypecode={1}&regardingobjectidname={2}', $v_4, CrmEncodeDecode.CrmUrlEncode($v_3), $v_5);
    if ($v_3 === 'account' || $v_3 === 'contact' || $v_3 === 'lead') {
        $v_8 += '&partyid=' + $v_4;
        $v_8 += '&partytype=' + $v_7;
        $v_8 += '&partyname=' + $v_5;
    }
    else {
        var $v_A = Mscrm.AddActivity.getPartyDetailsForRefreshForm($v_6);
        if (!IsNull($v_A)) {
            var $v_B = $v_A;
            $v_8 += '&partyid=' + CrmEncodeDecode.CrmUrlEncode($v_B[0].id);
            $v_8 += '&partytype=' + CrmEncodeDecode.CrmUrlEncode((Xrm.Internal.getEntityCode($v_B[0].entityType)).toString());
            $v_8 += '&partyname=' + CrmEncodeDecode.CrmUrlEncode($v_B[0].name);
        }
    }
    $v_8 += '&_CreateFromId=' + $v_4;
    $v_8 += '&_CreateFromType=' + $v_7;
    var $v_9 = {};
    $v_9['preservePreviousContent'] = true;
    openFrmObj($v_8, null, activityTypeCode, null, Mscrm.NavigationMode.DefaultNavigationMode, $v_9);
}
Mscrm.ActivityContainer.$14 = function($p0) {
    var $v_0 = '';
    var $v_1 = '';
    switch ($p0) {
        case 4210:
            $v_0 = Mscrm.ActivityContainer.$1;
            $v_1 = 'subject';
            Mscrm.ActivityContainer.$a();
            var $v_2 = Mscrm.ActivityContainer.$p(Mscrm.ActivityContainer.$1);
            $v_2.setDefaultEmptyValuePlaceholderText('description', Mscrm.ActivityContainer.$7);
            var $v_3 = $get('quickCreateActivity4210controlId_description');
            if (Sys.UI.DomElement.containsCssClass($v_3.children[0], 'ms-crm-Inline-NoValue')) {
                Sys.UI.DomElement.removeCssClass($v_3.children[0], 'ms-crm-Inline-NoValue');
            }
            break;
        case 4212:
            $v_0 = Mscrm.ActivityContainer.$I;
            $v_1 = 'subject';
            if (!Mscrm.ActivityContainer.$W) {
                Mscrm.ActivityContainer.initializeTaskQuickForm();
            }
            var $v_4 = Mscrm.ActivityContainer.$p(Mscrm.ActivityContainer.$I);
            $v_4.setDefaultEmptyValuePlaceholderText('description', Mscrm.ActivityContainer.$7);
            var $v_5 = $get('quickCreateActivity4212controlId_description');
            if (Sys.UI.DomElement.containsCssClass($v_5.children[0], 'ms-crm-Inline-NoValue')) {
                Sys.UI.DomElement.removeCssClass($v_5.children[0], 'ms-crm-Inline-NoValue');
            }
            break;
        default:
            break;
    }
    var $v_6 = Mscrm.ActivityContainer.$p($v_0);
    if (!IsNull($v_6)) {
        $v_6.setEditMode($v_1);
    }
}
Mscrm.ActivityContainer.focusOnPhoneActivity = function() {
    Mscrm.ActivityContainer.activityBarClick(null, 0, null);
    var $v_0 = Mscrm.ActivityContainer.$p('df202c21-8393-488d-b464-aa6c70c21f88');
    var $v_1 = $v_0.getEntityAttribute('directioncode');
    if (!IsNull($v_1)) {
        $v_0.resetAttributeValue('directioncode', true);
        $v_1.fireOnChange();
    }
    var $v_2 = $get(Mscrm.ActivityContainer.$8 + 'description');
    if ($v_2) {
        Mscrm.Utilities.click(XUI.Html.DomUtils.GetFirstChild($v_2));
    }
}
Mscrm.ActivityContainer.$H = function() {
    if (!Xrm.Page.data.entity || Mscrm.Utilities.isNullOrEmptyGuid(Xrm.Page.data.entity.getId())) {
        return true;
    }
    return false;
}
Mscrm.ActivityContainer.enableActivityCommandBar = function() {
    var $v_0 = $P_CRM($get('activityWallFilterButton'));
    if ($v_0 && $v_0.hasClass(Mscrm.ActivityContainer.$4)) {
        $v_0.removeClass(Mscrm.ActivityContainer.$4);
        var $v_3 = $v_0.parents('span');
        $v_3.find('.activityMoreCommands').removeAttr('style');
        $v_3.find('.activity-filter-image').attr('src', window.CDNURL + '/_imgs/activitiesdropdown.png');
    }
    var $v_1 = $P_CRM($get('moreActivitiesButton'));
    if ($v_1 && $v_1.hasClass(Mscrm.ActivityContainer.$4)) {
        $v_1.removeClass(Mscrm.ActivityContainer.$4);
        $v_1.children('img').filter('.activityMoreCommandsImage').attr('src', window.CDNURL + '/_imgs/more_16.png');
    }
    var $v_2 = $P_CRM($get('activityFilterButton'));
    if ($v_2 && $v_2.hasClass(Mscrm.ActivityContainer.$4)) {
        $v_2.removeClass(Mscrm.ActivityContainer.$4);
        var $v_4 = $v_2.parents('span');
        $v_4.find('.activityMoreCommands').removeAttr('style');
        $v_4.find('.activity-filter-image').attr('src', window.CDNURL + '/_imgs/activitiesdropdown.png');
    }
}
Mscrm.ActivityContainer.initializeActivityContainer = function() {
    Mscrm.ActivityContainer.$a();
    Mscrm.ActivityContainer.initializeTaskQuickForm();
}
Mscrm.ActivityContainer.$a = function() {
    var $v_0 = Mscrm.ActivityContainer.$p(Mscrm.ActivityContainer.$1);
    if (IsNull($v_0)) {
        return;
    }
    Mscrm.ActivityContainer.$T($v_0, 'leftvoicemail');
    var $v_1 = $v_0.getEntityAttribute('from');
    $v_0.clearValidation($v_1);
    var $v_2 = $v_0.getEntityAttribute('to');
    $v_0.clearValidation($v_2);
    $v_0.disableWarningsOnAllControls();
    $v_0.setDefaultEmptyValuePlaceholderText('description', Mscrm.ActivityContainer.$7);
    if (IsNull(Mscrm.ActivityContainer.$9)) {
        Mscrm.ActivityContainer.$9 = Mscrm.ActivityContainer.$x();
    }
    var $v_3 = $v_0.getEntityAttribute('directioncode');
    var $v_4 = function($p1_0) {
        window.setTimeout(function() {
            Mscrm.ActivityContainer.$c(null);
        }, 10);
    };
    $v_3.addOnChange($v_4);
    Mscrm.ActivityContainer.$12();
    Mscrm.ActivityContainer.$U($v_0, true);
    if ($v_3.getValue()) {
        $v_0.resetAttributeValue('to', Mscrm.ActivityContainer.$0);
        $v_2.fireOnChange();
    }
    else {
        $v_0.resetAttributeValue('from', Mscrm.ActivityContainer.$0);
        $v_1.fireOnChange();
    }
    Mscrm.ActivityContainer.$16();
    $v_0.resetAttributeValue('subject', null);
}
Mscrm.ActivityContainer.$10 = function() {
    var $v_0 = Mscrm.ActivityContainer.$p(Mscrm.ActivityContainer.$1);
    var $v_1 = $v_0.getEntityAttribute('leftvoicemail');
    return (!Mscrm.InternalUtilities._Script.isNullOrUndefined($v_1) && !Mscrm.InternalUtilities._Script.isNullOrUndefined($v_1.getValue()) && ($v_1.getValue()) === 1);
}
Mscrm.ActivityContainer.$T = function($p0, $p1) {
    var $v_0 = $p0.getEntityAttribute($p1);
    if (!IsNull($v_0)) {
        for (var $v_1 = 0; $v_1 < $v_0.controls.getLength(); $v_1++) {
            $v_0.controls.getByIndex($v_1).setVisible(false);
        }
    }
}
Mscrm.ActivityContainer.$t = function($p0, $p1) {
    var $v_0 = $p0.getEntityAttribute($p1);
    if (!IsNull($v_0)) {
        for (var $v_1 = 0; $v_1 < $v_0.controls.getLength(); $v_1++) {
            $v_0.controls.getByIndex($v_1).setVisible(true);
        }
    }
}
Mscrm.ActivityContainer.$J = function($p0) {
    if (!IsNull($p0)) {
        if (!(($p0.getName()) in Mscrm.ActivityContainer.$5)) {
            var $v_0 = function($p1_0) {
                Mscrm.ActivityContainer.$11();
            };
            $p0.addOnChange($v_0);
            Mscrm.ActivityContainer.$5[$p0.getName()] = $v_0;
        }
    }
}
Mscrm.ActivityContainer.$U = function($p0, $p1) {
    var $v_0 = Xrm.Page.data.entity;
    switch ($v_0.getEntityName()) {
        case 'incident':
            var $v_1 = $v_0.attributes.get('customerid');
            if ($p1 && !IsNull(Mscrm.ActivityContainer.$0)) {
                return;
            }
            Mscrm.ActivityContainer.$J($v_1);
            Mscrm.ActivityContainer.$y();
            Mscrm.ActivityContainer.$0 = (!IsNull($v_1)) ? $v_1.getValue() : null;
            break;
        case 'account':
            var $v_2 = $v_0.attributes.get('primarycontactid');
            if (!IsNull($v_2) && !IsNull($v_2.getValue())) {
                Mscrm.ActivityContainer.$0 = $v_2.getValue();
            }
            else {
                if (!Mscrm.Utilities.isNullOrEmptyGuid($v_0.getId()) && !Mscrm.Utilities.isNullOrEmptyGuid($v_0.getPrimaryAttributeValue())) {
                    Mscrm.ActivityContainer.$0 = Mscrm.ActivityContainer.$X($v_0.getPrimaryAttributeValue(), $v_0.getId(), 1, 'account');
                }
            }
            Mscrm.ActivityContainer.$J($v_2);
            Mscrm.ActivityContainer.$i($p0);
            Mscrm.ActivityContainer.$h($p0);
            break;
        case 'contact':
            if (!Mscrm.Utilities.isNullOrEmptyGuid($v_0.getId()) && !Mscrm.Utilities.isNullOrEmptyGuid($v_0.getPrimaryAttributeValue())) {
                Mscrm.ActivityContainer.$0 = Mscrm.ActivityContainer.$X($v_0.getPrimaryAttributeValue(), $v_0.getId(), 2, 'contact');
            }
            Mscrm.ActivityContainer.$i($p0);
            Mscrm.ActivityContainer.$h($p0);
            break;
        case 'opportunity':
            var $v_3 = $v_0.attributes.get('parentcontactid');
            if (!IsNull($v_3)) {
                Mscrm.ActivityContainer.$J($v_3);
                Mscrm.ActivityContainer.$0 = $v_3.getValue();
            }
            var $v_4 = $v_0.attributes.get('parentaccountid');
            if (!IsNull($v_4)) {
                Mscrm.ActivityContainer.$J($v_4);
                if (IsNull(Mscrm.ActivityContainer.$0)) {
                    Mscrm.ActivityContainer.$0 = $v_4.getValue();
                }
            }
            break;
        case 'lead':
            $v_3 = $v_0.attributes.get('parentcontactid');
            if (!IsNull($v_3) && !IsNull($v_3.getValue())) {
                Mscrm.ActivityContainer.$0 = $v_3.getValue();
            }
            else {
                if (!Mscrm.Utilities.isNullOrEmptyGuid($v_0.getId()) && !IsNull($v_0.getPrimaryAttributeValue())) {
                    Mscrm.ActivityContainer.$0 = Mscrm.ActivityContainer.$X($v_0.getPrimaryAttributeValue(), $v_0.getId(), 4, 'lead');
                }
            }
            Mscrm.ActivityContainer.$J($v_3);
            Mscrm.ActivityContainer.$i($p0);
            Mscrm.ActivityContainer.$h($p0);
            break;
        default:
            break;
    }
}
Mscrm.ActivityContainer.$h = function($p0) {
    if (!((Mscrm.ActivityContainer.$d) in Mscrm.ActivityContainer.$5)) {
        var $v_0 = function($p1_0) {
            Mscrm.ActivityContainer.$U($p0, false);
            Mscrm.ActivityContainer.$j($p0);
        };
        $p0.addOnRecordIdChanged($v_0);
        Mscrm.ActivityContainer.$D.schedule(function() {
            if (!$p0.get_isDisposed()) {
                $p0.removeOnRecordIdChanged($v_0);
            }
        });
        Mscrm.ActivityContainer.$5[Mscrm.ActivityContainer.$d] = $v_0;
    }
}
Mscrm.ActivityContainer.$i = function($p0) {
    if (!((Mscrm.ActivityContainer.$e) in Mscrm.ActivityContainer.$5)) {
        var $v_0 = function($p1_0) {
            Mscrm.ActivityContainer.$U($p0, false);
            Mscrm.ActivityContainer.$j($p0);
        };
        $p0.addOnRecordNameChanged($v_0);
        Mscrm.ActivityContainer.$D.schedule(function() {
            if (!$p0.get_isDisposed()) {
                $p0.removeOnRecordNameChanged($v_0);
            }
        });
        Mscrm.ActivityContainer.$5[Mscrm.ActivityContainer.$e] = $v_0;
    }
}
Mscrm.ActivityContainer.$y = function() {
    var $v_0 = Xrm.Page.data.entity.attributes.get('existingcase');
    if (!IsNull($v_0)) {
        Mscrm.ActivityContainer.$M = Mscrm.ActivityContainer.$o($v_0);
        if (IsNull(Mscrm.ActivityContainer.$N)) {
            Mscrm.ActivityContainer.$N = function($p1_0) {
                var $v_1 = Mscrm.ActivityContainer.$o($v_0);
                if (Mscrm.ActivityContainer.$M !== $v_1) {
                    Mscrm.ActivityContainer.$O = true;
                    Mscrm.ActivityContainer.$M = $v_1;
                }
            };
            $v_0.addOnChange(Mscrm.ActivityContainer.$N);
        }
    }
}
Mscrm.ActivityContainer.$X = function($p0, $p1, $p2, $p3) {
    var $v_0 = new Array(1);
    $v_0[0] = new LookupItem();
    $v_0[0].name = $p0;
    $v_0[0].id = $p1;
    $v_0[0].type = $p2.toString();
    $v_0[0].typename = $p3;
    return $v_0;
}
Mscrm.ActivityContainer.$12 = function() {
    var $v_0 = Mscrm.ActivityContainer.$p(Mscrm.ActivityContainer.$1);
    var $v_1 = $v_0.getEntityAttribute('directioncode');
    if (!IsNull($v_1)) {
        var $v_2 = 1;
        var $v_3 = true;
        var $v_4 = _activityTypeCode;
        if (!IsNull($v_4) && (4210 === $v_4)) {
            $v_2 = 0;
            $v_3 = false;
        }
        $v_0.resetAttributeValue('directioncode', $v_3);
        $v_1.fireOnChange();
        Mscrm.ActivityContainer.$Z($v_0, $v_2);
        Mscrm.ActivityContainer.$L = $v_2;
    }
}
Mscrm.ActivityContainer.$o = function($p0) {
    if (IsNull($p0.getValue())) {
        return null;
    }
    var $v_0 = $p0.getValue();
    return $v_0[0].id;
}
Mscrm.ActivityContainer.$11 = function() {
    var $v_0 = Mscrm.ActivityContainer.$O;
    Mscrm.ActivityContainer.$O = false;
    var $v_1 = Mscrm.ActivityContainer.$p(Mscrm.ActivityContainer.$1);
    var $v_2 = Mscrm.ActivityContainer.$n();
    if (!IsNull($v_2) && (!$v_0 || IsNull($v_2.getValue()))) {
        Mscrm.ActivityContainer.$U($v_1, false);
        Mscrm.ActivityContainer.$j($v_1);
    }
}
Mscrm.ActivityContainer.$n = function() {
    var $v_0 = null;
    var $v_1 = Mscrm.ActivityContainer.$p(Mscrm.ActivityContainer.$1);
    var $v_2 = $v_1.getEntityAttribute('directioncode');
    if (!IsNull($v_2) && $v_2.getValue()) {
        $v_0 = $v_1.getEntityAttribute('to');
    }
    else {
        $v_0 = $v_1.getEntityAttribute('from');
    }
    return $v_0;
}
Mscrm.ActivityContainer.$j = function($p0) {
    var $v_0 = Mscrm.ActivityContainer.$n();
    if (!IsNull($v_0)) {
        $p0.resetAttributeValue($v_0.getName(), Mscrm.ActivityContainer.$0);
        $v_0.fireOnChange();
    }
}
Mscrm.ActivityContainer.$16 = function() {
    if (IsNull(Mscrm.ActivityContainer.$9)) {
        return;
    }
    var $v_0 = Mscrm.ActivityContainer.$p(Mscrm.ActivityContainer.$1);
    var $v_1 = $v_0.getEntityAttribute('directioncode');
    if (!IsNull($v_1) && !($v_1.getValue())) {
        var $v_2 = $v_0.getEntityAttribute('to');
        if (!IsNull($v_2)) {
            $v_0.resetAttributeValue('to', Mscrm.ActivityContainer.$9);
            $v_2.fireOnChange();
        }
    }
    else {
        var $v_3 = $v_0.getEntityAttribute('from');
        if (!IsNull($v_3)) {
            $v_0.resetAttributeValue('from', Mscrm.ActivityContainer.$9);
            $v_3.fireOnChange();
        }
    }
}
Mscrm.ActivityContainer.$c = function($p0) {
    var $v_0 = $get(Mscrm.ActivityContainer.$8 + 'directioncode_i');
    var $v_1 = Mscrm.ActivityContainer.$p(Mscrm.ActivityContainer.$1);
    var $v_2 = $v_1.getEntityAttribute('directioncode');
    var $v_3 = function($p1_0) {
        Mscrm.ActivityContainer.$c(null);
    };
    $v_2.removeOnChange($v_3);
    if (!IsNull($v_1) && Mscrm.ActivityContainer.$L !== $v_0.selectedIndex) {
        var $v_4 = $v_1.getEntityAttribute('from');
        var $v_5 = $v_1.getEntityAttribute('to');
        var $v_6 = $v_4.getValue();
        if (!IsNull($v_5) && !IsNull($v_4)) {
            var $v_7 = $v_5.getValue();
            if ($v_7) {
                $v_1.resetAttributeValue('from', [ $v_7[0] ]);
            }
            else {
                $v_1.resetAttributeValue('from', null);
            }
            $v_4.fireOnChange();
        }
        if (!IsNull($v_5)) {
            $v_1.resetAttributeValue('to', $v_6);
            $v_5.fireOnChange();
        }
    }
    if (!IsNull($v_0)) {
        Mscrm.ActivityContainer.$Z($v_1, $v_0.selectedIndex);
    }
    Mscrm.ActivityContainer.$L = $v_0.selectedIndex;
    $get(Mscrm.ActivityContainer.$8 + 'description' + '_d').style.display = '';
}
Mscrm.ActivityContainer.$Z = function($p0, $p1) {
    if ($p1 === 0) {
        Mscrm.ActivityContainer.$T($p0, 'to');
        Mscrm.ActivityContainer.$t($p0, 'from');
    }
    else {
        Mscrm.ActivityContainer.$t($p0, 'to');
        Mscrm.ActivityContainer.$T($p0, 'from');
    }
}
Mscrm.ActivityContainer.$z = function($p0) {
    var $v_0 = $P_CRM($get(Mscrm.ActivityContainer.$8 + 'from_d'));
    var $v_1 = $P_CRM($get(Mscrm.ActivityContainer.$8 + 'to_d'));
    if ($p0 === 0) {
        $v_1.parents('tr').first().hide();
        $v_0.parents('tr').first().show();
    }
    else {
        $v_1.parents('tr').first().show();
        $v_0.parents('tr').first().hide();
    }
}
Mscrm.ActivityContainer.$x = function() {
    var $v_0 = new Array(1);
    $v_0[0] = new LookupItem();
    $v_0[0].id = Xrm.Page.context.getUserId();
    $v_0[0].name = Xrm.Page.context.getUserName();
    $v_0[0].typename = 'systemuser';
    $v_0[0].type = Xrm.Internal.getEntityCode('systemuser').toString();
    return $v_0;
}
Mscrm.ActivityContainer.initializeTaskQuickForm = function() {
    var $v_0 = Mscrm.ActivityContainer.$p(Mscrm.ActivityContainer.$I);
    if (!IsNull($v_0)) {
        $v_0.disableWarningsOnAllControls();
    }
    $v_0.resetAttributeValue('subject', null);
    Mscrm.ActivityContainer.$W = true;
}
Mscrm.ActivityContainer.inlineActivityFormAction = function(command, activityTypeCode, quickFormId) {
    switch (command) {
        case 'save':
            window.setTimeout(function() {
                Mscrm.ActivityContainer.$l(activityTypeCode);
                var $v_0 = Mscrm.ActivityContainer.$13(quickFormId);
                if ($v_0.get_code() !== 6) {
                    Mscrm.ErrorStatusControl.showError($v_0.get_message(), true);
                }
                else {
                    Mscrm.ActivityContainer.hideQuickForm(activityTypeCode, null);
                }
            }, 0);
            break;
        case 'cancel':
            window.setTimeout(function() {
                Mscrm.ActivityContainer.$l(activityTypeCode);
                Mscrm.ActivityContainer.hideQuickForm(activityTypeCode, function() {
                    Mscrm.ActivityContainer.$v(quickFormId);
                });
            }, 0);
            break;
        case 'default':
            break;
    }
}
Mscrm.ActivityContainer.$l = function($p0) {
    if ($p0 === 4210) {
        var $v_0 = Mscrm.ActivityContainer.$p(Mscrm.ActivityContainer.$1);
        var $v_1 = $v_0.getEntityAttribute('directioncode');
        var $v_2 = function($p1_0) {
            Mscrm.ActivityContainer.$c(null);
        };
        $v_1.removeOnChange($v_2);
    }
}
Mscrm.ActivityContainer.hideQuickForm = function(activityTypeCode, callbackAfterSlideUpCompletes) {
    var $v_0 = $get('activitycontainer' + activityTypeCode);
    if ($v_0) {
        if (IsNull(callbackAfterSlideUpCompletes)) {
            callbackAfterSlideUpCompletes = function() {
            };
        }
        $P_CRM($get('activitycontainer' + activityTypeCode)).slideUp(500, callbackAfterSlideUpCompletes);
    }
    Mscrm.ActivityContainer.$6 = -1;
    if (activityTypeCode === 4210) {
        Mscrm.ActivityContainer.$u();
    }
    var $v_1 = $get(Mscrm.ActivityContainer.$C + activityTypeCode);
    $v_1.focus();
}
Mscrm.ActivityContainer.$13 = function($p0) {
    var $v_0 = Mscrm.ActivityContainer.$p($p0);
    $v_0.add_successEvent(Mscrm.ActivityContainer.$f);
    $v_0.add_failureEvent(Mscrm.ActivityContainer.$Y);
    var $v_1 = null;
    if (!Mscrm.ActivityContainer.$H() && !$v_0.get_entityName().localeCompare('phonecall') && window.MakeSocialPanePhoneCallCompleted) {
        $v_1 = $v_0.saveAsCompleted();
    }
    else {
        $v_1 = $v_0.save();
    }
    if ($v_1.get_code() !== 6) {
        $v_0.remove_successEvent(Mscrm.ActivityContainer.$f);
        $v_0.remove_failureEvent(Mscrm.ActivityContainer.$Y);
    }
    return $v_1;
}
Mscrm.ActivityContainer.$s = function($p0) {
    Mscrm.ActivityContainer.$p($p0.get_uniqueId()).remove_failureEvent(Mscrm.ActivityContainer.$Y);
    Mscrm.ActivityContainer.$p($p0.get_uniqueId()).remove_successEvent(Mscrm.ActivityContainer.$f);
}
Mscrm.ActivityContainer.$Y = function($p0, $p1) {
    Mscrm.ActivityContainer.$s($p1);
}
Mscrm.ActivityContainer.$f = function($p0, $p1) {
    Mscrm.ActivityContainer.$s($p1);
    var $v_0 = 'prependtowall';
    var $v_1 = [ $p1.get_jsonData() ];
    Mscrm.ActivityContainer.$g(Mscrm.ActivityContainer.$S, $v_0, $v_1, null);
}
Mscrm.ActivityContainer.$v = function($p0) {
    var $v_0 = Mscrm.ActivityContainer.$p($p0);
    $v_0.clear();
}
Mscrm.ActivityContainer.$g = function($p0, $p1, $p2, $p3) {
    var $v_0 = $find($p0);
    $v_0.get_wallCommandDispatcher().set_wallFilter(Mscrm.ActivityContainer.$w());
    $v_0.get_wallCommandDispatcher().set_objectTypeCode(Mscrm.ActivityContainer.$2);
    if ($p3) {
        $v_0.get_wallCommandDispatcher().set_activityServiceParams($p3);
    }
    var $$t_5;
    ($$t_5 = $v_0.get_wallCommandDispatcher()).dispatchCommand.apply($$t_5, [ $p1 ].concat($p2));
}
Mscrm.ActivityContainer.voicemailChecked = function(checkBoxId) {
    var $v_0 = $get(checkBoxId);
    var $v_1 = Mscrm.ActivityContainer.$p('df202c21-8393-488d-b464-aa6c70c21f88');
    var $v_2 = $v_1.getEntityAttribute('leftvoicemail');
    if ($v_0 && $v_2) {
        if ($v_0.checked) {
            $v_2.setValue(1);
        }
        else {
            $v_2.setValue(0);
        }
        $v_2.fireOnChange();
    }
}
Mscrm.ActivityContainer.onCheckBoxKeyDown = function(domEvent, checkBoxId) {
    if (domEvent.keyCode === 32 && !(Mscrm.Utilities.isFirefox())) {
        domEvent.preventDefault();
        var $v_0 = $get(checkBoxId);
        $v_0.click();
        domEvent.stopPropagation();
    }
}
Mscrm.ActivityContainer.$u = function() {
    var $v_0 = $get(Mscrm.ActivityContainer.$A);
    $v_0.checked = Boolean.parse(Mscrm.CheckBoxStatus.toString(0));
}
Mscrm.ActivityContainer.prototype = {
    $P_3: null,
    $V_3: false,
    
    get_masterComponentId: function() {
        return this.$P_3;
    },
    
    set_masterComponentId: function(value) {
        this.$P_3 = value;
        return value;
    },
    
    get_isControlReadOnly: function() {
        return this.$V_3;
    },
    
    set_isControlReadOnly: function(value) {
        this.$V_3 = value;
        return value;
    },
    
    handleEvent: function(eventCode, parameters, sourceComponent) {
        Mscrm.CrmUIControl.prototype.handleEvent.call(this, eventCode, parameters, sourceComponent);
        switch (eventCode) {
            case 80:
                if (this.$P_3 === sourceComponent.get_id()) {
                    this.get_eventManager().raiseEvent(76, parameters, this);
                }
                break;
            case 87:
                if (IsNull(parameters['entityID'])) {
                    parameters['entityID'] = Xrm.Page.data.entity.getId();
                    this.get_eventManager().raiseEvent(76, parameters, this);
                }
                break;
        }
        return null;
    },
    
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        if (!IsNull(this.get_eventManager())) {
            this.get_eventManager().subscribeEvent(80, this.get_id());
            this.get_eventManager().subscribeEvent(87, this.get_id());
        }
        Mscrm.ActivityContainer.$3['AllEntitiesButton'] = true;
        if (!Array.contains(Mscrm.ActivityContainer.$2, 'AllEntitiesButton')) {
            Array.add(Mscrm.ActivityContainer.$2, 'AllEntitiesButton');
        }
        Mscrm.ActivityContainer.$8 = 'quickCreateActivity4210controlId_';
        Mscrm.ActivityContainer.$1 = 'df202c21-8393-488d-b464-aa6c70c21f88';
        Mscrm.ActivityContainer.$I = 'f10db7db-3975-4722-9e09-a9696750f7ab';
        Mscrm.ActivityContainer.$m = window.self.ELLIPSES_CONSTANT_TEXT;
        Mscrm.ActivityContainer.$q = window.self.PHONECALL_DESCRIPTION_ATTRIBUTE_NAME;
        Mscrm.ActivityContainer.$7 = window.self.ACTIVITY_TASK_DESCRIPTION_EMPTYVALUE_PLACEHOLDER_TEXT;
        Mscrm.ActivityContainer.$7 = (!Mscrm.ActivityContainer.$7) ? '--' : Mscrm.ActivityContainer.$7;
        Mscrm.ActivityContainer.$G = window.self.ACTIVITY_SUBJECT_EMPTYVALUE_PLACEHOLDER_TEXT;
        Mscrm.ActivityContainer.$G = (!Mscrm.ActivityContainer.$G) ? '--' : Mscrm.ActivityContainer.$G;
        Mscrm.ActivityContainer.$A = 'PhoneCallQuickformleftvoiceCheckBoxContol';
        Mscrm.ActivityContainer.$A = (!Mscrm.ActivityContainer.$A) ? '--' : Mscrm.ActivityContainer.$A;
        Mscrm.ActivityContainer.$C = 'activityLabelinlineactivitybar';
        Mscrm.ActivityContainer.$C = (!Mscrm.ActivityContainer.$C) ? '--' : Mscrm.ActivityContainer.$C;
        if (!Mscrm.InternalUtilities._Script.isNullOrUndefined(window.self._activityTypeCode)) {
            var $v_0 = _activityTypeCode;
            if ($v_0 !== -1) {
                var $v_1 = $get('activitycontainer' + $v_0);
                if (!IsNull($v_1)) {
                    $v_1.style.display = 'block';
                    Mscrm.ActivityContainer.$6 = $v_0;
                }
                if (Mscrm.Utilities.isTurboForm()) {
                    var $v_2$2 = Mscrm.ActivityContainer.$p(Mscrm.ActivityContainer.$1, false);
                    var $$t_D = this;
                    var $v_3 = function($p1_0) {
                        var $v_4 = ($p1_0.getEventArgs()).getDataLoadState();
                        if ($v_4 === 1) {
                            Mscrm.ActivityContainer.$a();
                        }
                    };
                    $v_2$2.addOnDataChanged($v_3);
                    var $$t_E = this;
                    Mscrm.ActivityContainer.$D.schedule(function() {
                        if (!$v_2$2.get_isDisposed()) {
                            $v_2$2.removeOnDataChanged($v_3);
                        }
                    });
                }
            }
        }
        if (Mscrm.Utilities.isTurboForm()) {
            var $v_5 = Mscrm.ActivityContainer.$p(Mscrm.ActivityContainer.$1, false);
            Mscrm.ActivityContainer.$Z($v_5, 0);
            Mscrm.ActivityContainer.$T($v_5, 'leftvoicemail');
        }
        else {
            Mscrm.ActivityContainer.$z(0);
            var $v_6 = $P_CRM($get(Mscrm.ActivityContainer.$8 + 'leftvoicemail'));
            if ($v_6) {
                $v_6.parents('tr').first().hide();
            }
        }
        if (Mscrm.ActivityContainer.$H()) {
            var $v_7 = $P_CRM($get('activityWallFilterButton'));
            if (!IsNull($v_7)) {
                $v_7.addClass(Mscrm.ActivityContainer.$4);
                var $v_A = $v_7.parents('span');
                $v_A.find('.activityMoreCommands').css('background-color', 'white');
                $v_A.find('.activity-filter-image').attr('src', window.CDNURL + '/_imgs/activitiesdropdown_disabled.png');
            }
            var $v_8 = $P_CRM($get('moreActivitiesButton'));
            if (!IsNull($v_8)) {
                $v_8.children('img').filter('.activityMoreCommandsImage').attr('src', window.CDNURL + '/_imgs/moredisabled.png');
                $v_8.addClass(Mscrm.ActivityContainer.$4);
            }
            var $v_9 = $P_CRM($get('activityFilterButton'));
            if (!IsNull($v_9)) {
                $v_9.addClass(Mscrm.ActivityContainer.$4);
                var $v_B = $v_9.parents('span');
                $v_B.find('.activityMoreCommands').css('background-color', 'white');
                $v_B.find('.activity-filter-image').attr('src', window.CDNURL + '/_imgs/activitiesdropdown_disabled.png');
            }
        }
    },
    
    dispose: function() {
        if (this.get_isDisposed()) {
            return;
        }
        Mscrm.ActivityContainer.$D.dispose();
        Mscrm.ActivityContainer.$D = new Mscrm.CrmDisposeHelper();
        Mscrm.ActivityContainer.$5 = {};
        Mscrm.ActivityContainer.$9 = null;
        Mscrm.ActivityContainer.$K = null;
        Mscrm.ActivityContainer.$B = null;
        Mscrm.ActivityContainer.$E = null;
        Mscrm.ActivityContainer.$F = null;
        Mscrm.ActivityContainer.$0 = null;
        Mscrm.ActivityContainer.$6 = -1;
        Mscrm.CrmUIControl.prototype.dispose.call(this);
    }
}


Mscrm.ActivityContainerConstants = function() {
}
Mscrm.ActivityContainerConstants.activitiesWallFilterButtonId = function() {
    return [ 'AllActivitiesButton', 'OpenActivitiesButton', 'OverdueActivitiesButton' ];
}


Mscrm.ActivityContainer.registerClass('Mscrm.ActivityContainer', Mscrm.CrmUIControl);
Mscrm.ActivityContainerConstants.registerClass('Mscrm.ActivityContainerConstants');
Mscrm.ActivityContainer.$6 = -1;
Mscrm.ActivityContainer.$8 = null;
Mscrm.ActivityContainer.$1 = null;
Mscrm.ActivityContainer.$I = null;
Mscrm.ActivityContainer.$7 = null;
Mscrm.ActivityContainer.$G = null;
Mscrm.ActivityContainer.$L = 0;
Mscrm.ActivityContainer.$m = null;
Mscrm.ActivityContainer.$q = null;
Mscrm.ActivityContainer.$A = null;
Mscrm.ActivityContainer.$C = null;
Mscrm.ActivityContainer.$O = false;
Mscrm.ActivityContainer.$0 = null;
Mscrm.ActivityContainer.$M = null;
Mscrm.ActivityContainer.$5 = {};
Mscrm.ActivityContainer.$N = null;
Mscrm.ActivityContainer.$9 = null;
Mscrm.ActivityContainer.$e = 'OnRecordNameChanged';
Mscrm.ActivityContainer.$d = 'OnRecordIdChanged';
Mscrm.ActivityContainer.$W = false;
Mscrm.ActivityContainer.$Q = false;
Mscrm.ActivityContainer.$S = 'notescontrolactivityContainer_notescontrol_59697FC4-279B-4757-B43D-8B811A614A8A';
Mscrm.ActivityContainer.$B = null;
Mscrm.ActivityContainer.$F = null;
Mscrm.ActivityContainer.$E = null;
Mscrm.ActivityContainer.$R = null;
Mscrm.ActivityContainer.$4 = 'activityfilterdisabled';
Mscrm.ActivityContainer.$2 = [];
Mscrm.ActivityContainer.$3 = {};
Mscrm.ActivityContainer.$K = null;
Mscrm.ActivityContainer.$b = -1;
Mscrm.ActivityContainer.$r = 10;
Mscrm.ActivityContainer.$D = new Mscrm.CrmDisposeHelper();
Mscrm.ActivityContainerConstants.activityDivIdPrefix = 'activitycontainer';
Mscrm.ActivityContainerConstants.phoneCallEntityTypeCode = 4210;
Mscrm.ActivityContainerConstants.descriptionDivId = 'description';
Mscrm.ActivityContainerConstants.processControlLookup = 'header_process_customer_i';
Mscrm.ActivityContainerConstants.formLookup = 'customerid_i';
Mscrm.ActivityContainerConstants.subjectTextBoxId = 'subject_d';
Mscrm.ActivityContainerConstants.descriptionTextAreaId = 'description_i';
Mscrm.ActivityContainerConstants.senderTextBoxId = 'from_d';
Mscrm.ActivityContainerConstants.recipientTextBoxId = 'to_d';
Mscrm.ActivityContainerConstants.directionCode = 'directioncode';
Mscrm.ActivityContainerConstants.directionSelectionIndexId = 'directioncode_i';
Mscrm.ActivityContainerConstants.subjectAttribute = 'subject';
Mscrm.ActivityContainerConstants.descriptionAttribute = 'description';
Mscrm.ActivityContainerConstants.ownerIdAttribute = 'ownerid';
Mscrm.ActivityContainerConstants.senderAttribute = 'from';
Mscrm.ActivityContainerConstants.recipientAttribute = 'to';
Mscrm.ActivityContainerConstants.subjectCharacterLength = 100;
Mscrm.ActivityContainerConstants.leftVoicemailCode = 'leftvoicemail';
Mscrm.ActivityContainerConstants.activityFilterButtonId = 'activityWallFilterButton';
Mscrm.ActivityContainerConstants.moreActivitiesButtonId = 'moreActivitiesButton';
Mscrm.ActivityContainerConstants.sortActivityWallButtonId = 'activityWallSortButton';
Mscrm.ActivityContainerConstants.filterButtonId = 'activityFilterButton';
Mscrm.ActivityContainerConstants.phoneCallQuickFormId = '8e0b7c1e-f5a0-4e7d-b04d-4ca8d5c5ca80';
Mscrm.ActivityContainerConstants.activitiesWallId = '59697FC4-279B-4757-B43D-8B811A614A8A';
Mscrm.ActivityContainerConstants.quickFormUniqueId = 'df202c21-8393-488d-b464-aa6c70c21f88';
Mscrm.ActivityContainerConstants.quickFormPhoneCallControlPrefix = 'quickCreateActivity4210controlId_';
Mscrm.ActivityContainerConstants.quickFormTaskUniqueId = 'f10db7db-3975-4722-9e09-a9696750f7ab';
Mscrm.ActivityContainerConstants.quickFormTaskControlPrefix = 'quickCreateActivity4212controlId_';
Mscrm.ActivityContainerConstants.campaignPlanningActivityViewId = '47F4E494-FEE0-483C-844C-5A9E35B1C565';
Mscrm.ActivityContainerConstants.activityBarPrefix = 'activityLabelinlineactivitybar';
Mscrm.ActivityContainerConstants.leftVoicemailCheckBoxId = 'PhoneCallQuickformleftvoiceCheckBoxContol';
