require(["Components"],
    function(Components) {
        window.MscrmComponents = Components;
        window.RequireJsLoadEndTime = window.performance.now();
        Microsoft.Crm.Client.Application.App.StartPage.set_isPreview(true);
        Microsoft.Crm.Client.Application.App.StartPage.start(window.location.href)
    })