
async function generateConfig() {
    var config = {
        "defaultSupportedProps": {
            "disableNativeSpellChecker": "false",
            "height": 35,
            "toolbarLocation": "top",
            "fontSize_defaultLabel": "14",
            "plugins": "paste",
            "removePlugins": "uploadwidget, stickystyles, toolbar",
            "pasteFilter": null,
            "enterMode": 2,
        },
        "externalPlugins": [
        ],
        "disableImages" : true,
    };
    return config;
}

(async function() {
    let config = await generateConfig();
    return config;
})();
