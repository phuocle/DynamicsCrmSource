!function() {
    var r = Handlebars.template, e = Handlebars.templates = Handlebars.templates || {};
    e.PropertyPaneBase = r({
        compiler: [7, ">= 4.0.0"],
        main: function(r, e, i, n, a) {
            return"\ufeff<div id='process_prop' class='process_prop'>\r\n    <div id='process_body'>\r\n        <div id='propertycomponent0'></div>\r\n        <div id='propertycomponent1' data-scrollable='true'></div>\r\n    </div>\r\n</div>"
        },
        useData: !0
    }), e.ToolPaneContainerHtml = r({
        compiler: [7, ">= 4.0.0"],
        main: function(r, e, i, n, a) {
            return'\ufeff<div id="toolpane">\r\n    <ul id="toolpaneheader">\r\n        <li>\r\n            <a id="libraryTab" href="#library">Library</a>\r\n        </li>\r\n        <li>\r\n            <a id="propertyTab" href="#property">Property</a>\r\n        </li>\r\n    </ul>\r\n    <div id="library"></div>\r\n    <div id="property"></div>\r\n</div>'
        },
        useData: !0
    })
}();