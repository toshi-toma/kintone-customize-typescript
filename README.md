# kintone-customize-typescript

[reference](https://developer.cybozu.io/hc/ja/articles/201649770-%E3%83%AC%E3%82%B3%E3%83%BC%E3%83%89%E8%BF%BD%E5%8A%A0%E7%94%BB%E9%9D%A2%E3%81%AE%E8%A1%A8%E7%A4%BA%E6%99%82%E3%81%AE%E5%88%9D%E6%9C%9F%E5%80%A4%E3%82%BB%E3%83%83%E3%83%88)

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
