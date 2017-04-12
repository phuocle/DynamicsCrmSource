
function WatermarkTextBox_OnFocus(textBox) {
    if (!WatermarkTextBox_PostLoad)
        return;
    if (textBox.className == "WatermarkTextBox_Gray") {
        textBox.className = "WatermarkTextBox_Normal";
        textBox.value = ""
    }
}

function WatermarkTextBox_OnChange(textBox) {
    if (WatermarkTextBox_Lock)
        return;
    if (textBox.className == "WatermarkTextBox_Gray") {
        textBox.className = "WatermarkTextBox_Normal";
        textBox.value = textBox.value.replace(textBox.defaultValue, "")
    }
}

function WatermarkTextBox_OnBlur(textBox) {
    if (Trim(textBox.value) == "" || Trim(textBox.value) == textBox.defaultValue) {
        WatermarkTextBox_Lock = true;
        textBox.value = textBox.defaultValue;
        textBox.className = "WatermarkTextBox_Gray";
        WatermarkTextBox_Lock = false
    }
}

function WatermarkTextBox_OnDisable(textBox) {
    textBox.readOnly = true;
    textBox.className = "WatermarkTextBox_Gray WatermarkTextBox_Disabled"
}

function WatermarkTextBox_OnEnable(textBox) {
    textBox.readOnly = false;
    textBox.className = "WatermarkTextBox_Normal"
}

function WatermarkTextBox_OnInvalidData(textBox) {
    textBox.className = "WatermarkTextBox_Red"
}

function WatermarkTextBox_OnValidData(textBox) {
    textBox.className = "WatermarkTextBox_Normal"
}

function WatermarkTextBox_OnLoad() {
    setTimeout("WatermarkTextBox_PostLoad = true", 100)
}

var WatermarkTextBox_Lock = false,
    WatermarkTextBox_PostLoad = false;
AddOnLoadEvent(WatermarkTextBox_OnLoad)