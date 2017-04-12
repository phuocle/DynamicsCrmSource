
function SetText(domNode, newVal) {
    if (domNode.innerText != null)
        domNode.innerText = newVal;
    else
        domNode.textContent = newVal
}

function ValidateInput(otxtBox, eventObject) {
    var quantity = CrmEncodeDecode.CrmXmlEncode(otxtBox.value),
        validinput = true;
    if (quantity.length == 0 || quantity == 0)
        validinput = false;
    for (var i = 0; i < quantity.length; ++i) {
        var character = quantity.charAt(i);
        if ((character < "0" || character > "9") && !(character == "")) {
            validinput = false;
            break
        }
    }
    if (!ValidateRange(quantity))
        validinput = false;
    if (!validinput) {
        btn = $get("buttonNext");
        btn.disabled = true;
        UpdateTotalPrices(quantity, validinput);
        otxtBox.style.color = "red";
        return false
    } else {
        btn = $get("buttonNext");
        btn.disabled = false;
        otxtBox.style.color = "black";
        UpdateTotalPrices(quantity, validinput);
        eventObject.keyCode == 13 &&
            moveNext();
        return true
    }
}

function $(id) {
    return document.getElementById(id)
}

function FormatToCurrencyAsync(textId, num) {
    var locale = 1033;
    if (typeof CURRENCY_LOCALE !== "undefined")
        locale = CURRENCY_LOCALE;
    formatCurrencyAsyncRequestId = formatCurrencyAsyncRequestId + 1;
    var command = new RemoteCommand("Currency", "FormatCurrency");
    command.SetParameter("locale", locale);
    command.SetParameter("currencyValue", num);
    command.FormatCurrency_RequestId = formatCurrencyAsyncRequestId;
    command.FormatCurrency_TextId = textId;
    formatCurrencyAsyncRequests[textId] = formatCurrencyAsyncRequestId;
    command.Execute(formatCurrencyAsyncHandler)
}

var formatCurrencyAsyncRequests = [],
    formatCurrencyAsyncRequestId = 1;

function formatCurrencyAsyncHandler(result) {
    if (result.Success) {
        var requestId = result.RemoteCommand.FormatCurrency_RequestId,
            textId = result.RemoteCommand.FormatCurrency_TextId;
        if (formatCurrencyAsyncRequests[textId] == requestId) {
            var oCurrencyValueRoot = XUI.Xml.LoadXml(result.ReturnValue),
                currencydatavalue = XUI.Xml.DomUtils.GetFirstChild(oCurrencyValueRoot);
            SetText($get(textId), XUI.Xml.GetText(currencydatavalue))
        }
    }
}

function FormatTaxBreakdown(subTotalAmount) {
    var taxRates = TAX_RATES,
        taxIncluded = TAX_INCLUDED,
        totalTaxAmount = 0;
    if (taxRates != "") {
        var array = taxRates.split(",");
        for (i = 0; i < array.length; i++) {
            var taxInfo = array[i].split("="),
                taxRate = parseFloat(taxInfo[1]),
                taxAmount = taxRate * subTotalAmount;
            if (taxIncluded == "True")
                taxAmount = subTotalAmount * (taxRate / (1 + taxRate));
            totalTaxAmount = totalTaxAmount + taxAmount;
            FormatToCurrencyAsync(taxInfo[0], taxAmount.toFixed(NUMBER_OF_DIGITS_AFTER_DECIMAL_POINT))
        }
        if (taxIncluded == "True")
            subTotalAmount = subTotalAmount - totalTaxAmount;
        $get("SubtotalValue") &&
            FormatToCurrencyAsync("SubtotalValue", subTotalAmount.toFixed(NUMBER_OF_DIGITS_AFTER_DECIMAL_POINT))
    }
    var updatedAmount = subTotalAmount + totalTaxAmount;
    return updatedAmount
}