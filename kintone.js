/// <reference path="./kintone.d.ts" />
(function () {
    kintone.events.on('app.record.index.show', function (event) {
        var el = kintone.app.getFieldElements('文字列__1行_');
        kintone.api.getConcurrencyLimit().then(function (_a) {
            var limit = _a.limit, running = _a.running;
            window.alert("limit= " + limit + " running=" + running);
        });
    });
})();
