
var _iValueOld,
    _bIsAttribute,
    _aValues,
    _iValues,
    _bIsCustomAttribute,
    _numValueControl,
    _txtLabelControl,
    _txtColorControl;
Sys.Application.add_load(function() {
    _numValueControl = Mscrm.FormControlInputBehavior.GetBehavior("numValue");
    _txtLabelControl = Mscrm.FormControlInputBehavior.GetBehavior("txtLabel");
    _txtColorControl = Mscrm.FormControlInputBehavior.GetBehavior("txtColor");
    var oArgs = getDialogArguments();
    _bIsAttribute = oArgs.bIsAttribute;
    var iValue = oArgs.get_value();
    if (_bIsAttribute && oArgs.sAttributeType == "picklist") {
        _aValues = oArgs.get_values();
        _numValueControl.set_max(maxValueForPicklists);
        if (oArgs.isCustomAttribute == "False")
            _bIsCustomAttribute = false;
        else
            _bIsCustomAttribute = true;
        if (mode == "add") {
            if (_bIsCustomAttribute)
                _numValueControl.set_min(minValueForCustomPicklists);
            else
                _numValueControl.set_min(minValueForSystemPicklists);
            _iValues = [];
            for (var i = 1; i < _aValues.length; i++)
                _iValues[i - 1] = _aValues[i].iValue;
            _iValues.sort(function(a, b) {
                return a > b
            });
            for (var i = 0; i < _iValues.length; i++)
                if (iValue == _iValues[i])
                    iValue++
        } else if (_bIsCustomAttribute || oArgs.iValue < minValueForSystemPicklists)
            _numValueControl.set_min(minValueForCustomPicklists);
        else
            _numValueControl.set_min(minValueForSystemPicklists);
        _numValueControl.set_disabled(false);
        $addHandler($get("numValue"), "onblur", ValidateValue)
    }
    _iValueOld = iValue;
    _numValueControl.set_dataValue(iValue);
    _txtLabelControl.set_dataValue(oArgs.get_label());
    _txtLabelControl.setFocus();
    var iColor = oArgs.get_color();
    if (!iColor)
        iColor = "#0000ff";
    _txtColorControl.set_dataValue(iColor);
    var divPreviewColor = $get("divPreviewColor");
    divPreviewColor.style.backgroundColor = iColor
});

function cancel() {
    closeWindow()
}

function applychanges() {
    if (_bIsAttribute && _numValueControl.get_dataValue() != _iValueOld && mode == "edit") {
        var confirmOptionValueChange = confirm(LOCID_CONFIRM_CHANGE);
        if (!confirmOptionValueChange) {
            _numValueControl.setFocus();
            return
        }
    }
    var sLabel = TrimSpaces(_txtLabelControl.get_dataValue());
    if (sLabel == null || sLabel.length <= 0) {
        alert(LOCID_NOLABEL);
        _txtLabelControl.setFocus();
        return
    }
    var oResult = {};
    oResult.iValue = _numValueControl.get_dataValue();
    oResult.sLabel = sLabel;
    var colorVal = TrimSpaces(_txtColorControl.get_dataValue());
    if (!validateColorValue(txtColor)) {
        _txtColorControl.setFocus();
        return
    } else {
        colorVal = setHashColorValue(colorVal);
        oResult.sColor = colorVal
    }
    Mscrm.Utilities.setReturnValue(oResult);
    closeWindow()
}

function ValidateValue() {
    var value = _numValueControl.get_dataValue();
    if (value == _iValueOld)
        return;
    if (!_bIsCustomAttribute && value < minValueForSystemPicklists) {
        var outOfRangeError = formatString(LOCID_PICKLIST_RANGE, value);
        _numValueControl.setFocus();
        _numValueControl.set_dataValue(_iValueOld);
        alert(outOfRangeError);
        return
    }
    CheckIfValueIsUnique()
}

function CheckIfValueIsUnique() {
    for (var value = _numValueControl.get_dataValue(),
        i = 1,
        length = _aValues.length;
        i < length;
        i++)
        if (value == _aValues[i].iValue) {
            var valueNotUniqueError = formatString(LOCID_VALUE_NOT_UNIQUE, _aValues[i].iValue, _aValues[i].sLabel);
            alert(valueNotUniqueError);
            _numValueControl.set_dataValue(_iValueOld);
            _numValueControl.setFocus();
            return
        }
}

function onColorChange() {
    var oPreviewColor = $get("divPreviewColor"),
        colorValue = _txtColorControl.get_dataValue();
    if (colorValue != null && oPreviewColor != null) {
        colorValue = setHashColorValue(colorValue);
        oPreviewColor.style.backgroundColor = colorValue
    }
}