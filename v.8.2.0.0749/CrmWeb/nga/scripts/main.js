require.config({ waitSeconds: 100 });
require(["Components"],
    function(Components) {
        window.MscrmComponents = Components;
        var start = function() {
            window.RequireJsLoadEndTime = window.performance.now();
            Microsoft.Crm.Client.Application.App.StartPage.start(window.location.href)
        };
        if (window._isInteractionCentricClient)
            require(["InteractionCentricComponents"],
                function(InteractionCentricComponents) {
                    window.InteractionCentricComponents = InteractionCentricComponents;
                    start()
                });
        else start()
    });
define("main", [], function() {})