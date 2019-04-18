# kintone-customize-typescript

```bash
$ npm init -y
$ npm i -D typescript
$ npx tsc --init
$ code .
$ touch kintone.ts  // create kintone.d.ts from dts-gen
$ cp ~/kintone.d.ts .
```

coding typescript on kintone.ts

```ts
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
```

```bash
$ npx tsc kintone.ts
```

upload kintone.js file for kintone app
