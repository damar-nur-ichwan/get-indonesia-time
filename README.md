This module is very useful, if your application stores Indonesian time and your application is deployed on a server with a different time zone.

## Installation

**Yarn Package**

```cmd
yarn add get-indonesia-time
```

or
**NPM Package**

```cmd
npm install get-indonesia-time
```

## Usage

**CommonJS**

```js
const GetIndonesiaTime = require("get-indonesia-time").default;

console.log(GetIndonesiaTime());
```

**ES6**

```ts
import GetIndonesiaTime from "get-indonesia-time";

console.log(GetIndonesiaTime());
```

_OUTPUT MODELS_

```ts
interface IGetIndonesiaTime {
  timestamp: number;
  year: number;
  month: number;
  date: number;
  day: number;
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
}
```
