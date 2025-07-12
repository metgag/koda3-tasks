### No. 7 "*Identify Error*"
---
**a**. `Uncaught ReferenceError: user is not defined`<br>
&nbsp;Error ini disebabkan karena belum melakukakan deklarasi variable dengan nama `user`, keterangan:
- file: `app.js`
- fungsi: `getUserData()`, `processUser()`, `main()`
- baris: `15`, `30`, `50`

**b**. `TypeError: Cannot read properties of null (reading 'length')`<br>
&nbsp;Error ini disebabkan ketika ingin mengkases property `.length` pada data yang nilainya adalah `null`, keterangan:
- file: `data.js`, `server.js`, `app.js`
- fungsi: `processData()`, `handleRequest()`, `main()`
- baris: `8`, `20`, `35`

**c**. `SyntaxError: Unexpected token ')'`<br>
&nbsp;Error ini disebakan ketika adanya `)` yang tidak diperlukan atau tak terduga, contoh:<br>
`console.log("hello"));`<br>
keterangan:
- file: `script.js`
- fungsi: -
- baris: `5`

**d**. `TypeError: Cannot set properties of undefined (setting 'status')`<br>
&nbsp;Error ini disebabkan ketika melakukan inisialisasi pada property `.status`, pada data yang nilainya adalah undefined, contoh:<br>
`const updateOrder = undefined; updateOrder.status = "ok";`<br>
keterangan:
- file: `order.js`, `cart.js`
- fungsi: `updateOrder()`, `processOrder()`, `checkout()`
- baris: `18`, `35`, `50`

**e**. `RangeError: Maximum call stack size exceeded`<br>
&nbsp;Melansir dari [Rollbar](https://rollbar.com/blog/javascript-rangeerror-maximum-call-stack-size-exceeded/#), error ini disebabkan ketika sebuah function terus memanggil sendiri, tanpa adanya kondisi untuk berhenti, contoh:<br>
```
recFunc();

function recFunc() {
    recFunc();
}
```
keterangan:
- file: `app.js`
- fungsi: `recursiveFunction()`
- baris: `10`