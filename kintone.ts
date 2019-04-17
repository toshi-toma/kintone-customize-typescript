/// <reference path="./kintone.d.ts" />

(function(){
  kintone.events.on('app.record.index.show', (event) => {
    kintone.api.getConcurrencyLimit().then(({limit, running}) => {
      window.alert(`limit= ${limit} running=${running}`);
    });
  });
})();
