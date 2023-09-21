/**
 * Turn a string of 24h time into words.
 * You can trust that you’ll be given a valid *string* (it will always have a two-digit hour 00-23, and a two-digit minute 00-59). Hours 0-11 are am, and hours 12-23 are pm.
 * 
 * | Input | Expected Output |
 * | --- | --- |
 * | 00:00 | midnight |
 * | 00:12 | twelve twelve am |
 * | 01:00 | one o’clock am |
 * | 06:01 | six oh one am |
 * | 06:10 | six ten am |
 * | 06:18 | six eighteen am |
 * | 06:30 | six thirty am |
 * | 10:34 | ten thirty four am |
 * | 12:00 | noon |
 * | 12:09 | twelve oh nine pm |
 * | 23:23 | eleven twenty three pm |
 * 
 * 
 */

// assumptions:
//  - user will provide proper input format ('xx:xx')

// edge cases:
//  - minute ends in 00: return nothing (midnight or noon) or "o'clock"
//  - am/pm: if hour digits are b/w 00-11, return am, else, return pm


// const timeWord = (hour, minute) => {
//     if (hour.startsWith('0'))
// }

const numToWord = (number) => {
    let num = +number;
    // let ones = ['oh one', 'oh two', 'oh three', 'oh four', 'oh five', 'oh six', 'oh seven', 'oh eight', 'oh nine'];
    let ones = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens = ['twenty', 'thirty', 'forty', 'fifty'];

    let numWord;

    if (num > 0 && num < 10) {
        // returns 1 - 9 as words
        numWord = ones[num-1];
    } else if (num >= 10 && num < 20) {
        // returns 10 - 19 as words
        numWord = teens[num % 10];
    } else if (num >= 20 && num < 60) {
        if (num % 10 === 0) {
            // returns 20, 30, 40... as words
            numWord = tens[Math.floor(num/10) -2];
        } else {
            // returns 21, 34, 59.. as words
            numWord = tens[Math.floor(num/10) -2] + ' ' + ones[(num % 10) - 1];
        }
    } else {
        return 'number must be from 0 to 59';
    }
    return numWord;
}

const morningOrAfternoon = (time) => {
    // assumes input is 'xx:xx'
    let hour = +time.substring(0,2);
    let amPm;

    // handles am or pm
    if (time === '00:00' || time === '12:00') {
        amPm = '';
    } else if (hour < 12 && hour > -1) {
        console.log('hour', hour);
        amPm = 'am';
    } else if (hour >= 12 && hour < 24) {
        console.log('hour', hour);
        amPm = 'pm';
    } else {
        amPm = 'incorrect time input';
    }
    return amPm;
}

const timeWord = (time) => {
    // assumes input is 'xx:xx' 06:10 -> 'six ten am'
    let hourWord = numToWord(+time.substring(0,2));
    let minuteWord = numToWord(+time.substring(3,5));
    let amOrPm = morningOrAfternoon(time);

    return `${hourWord} ${minuteWord} ${amOrPm}`;

    

    // handles noon and midnight
    




    // return final string
    // `${hour} ${minute} ${amPm}`
}


module.exports = {timeWord, numToWord, morningOrAfternoon};