/// <reference path='./kintone.d.ts'/>
interface Event {
  record: {
    '文字列': {
      value: string;
    };
  };
}

(function(){
  kintone.events.on('app.record.create.show', (event:Event) => {
    let record = event.record;
    record['文字列'].value = 'TypeScript';
    return event;
  })
})();
