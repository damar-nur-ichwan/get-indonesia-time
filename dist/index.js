"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function GetIndonesiaTime() {
    let now = new Date();
    const dateUTC = now.getUTCDate();
    const monthUTC = now.getUTCMonth();
    const yearUTC = now.getUTCFullYear();
    const hoursUTC = now.getUTCHours();
    const minutesUTC = now.getUTCMinutes();
    const secondsUTC = now.getUTCSeconds();
    const millisecondsUTC = now.getUTCMilliseconds();
    now = new Date(yearUTC, monthUTC, dateUTC, hoursUTC + 7, minutesUTC, secondsUTC, millisecondsUTC);
    const localTimestamp = new Date(now.getTime());
    const day = localTimestamp.getDay();
    const date = localTimestamp.getDate();
    const month = localTimestamp.getMonth();
    const year = localTimestamp.getFullYear();
    const hours = localTimestamp.getHours();
    const minutes = localTimestamp.getMinutes();
    const seconds = localTimestamp.getSeconds();
    const milliseconds = localTimestamp.getMilliseconds();
    const output = {
        timestamp: localTimestamp.getTime(),
        year,
        month,
        date,
        day,
        hours,
        minutes,
        seconds,
        milliseconds,
    };
    return output;
}
exports.default = GetIndonesiaTime;
//# sourceMappingURL=index.js.map