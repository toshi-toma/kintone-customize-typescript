/// <reference path='./kintone.d.ts'/>
(function () {
    kintone.events.on('app.record.create.show', function (event) {
        var record = event.record;
        record['文字列'].value = 'TypeScript';
        return event;
    });
})();
