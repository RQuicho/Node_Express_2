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

// edge cases:
//  - minute ends in 00: return nothing (midnight or noon) or "o'clock"
//  - am/pm: if hour digits are b/w 00-11, return am, else, return pm


// const timeWord = (hour, minute) => {
//     if (hour.startsWith('0'))
// }

const timeWord = (time) => {
    let hour;
    let minute;
    let amPm;

    // handles am or pm
    if (time.startsWith('0') || time.startsWith('10') || time.startsWith('11')) {
        amPm = 'am';
    } else if (time.startsWith('00') || time.startsWith('12') && ) {
        amPm = '';
    } else {
        amPm = 'pm';
    }

    // converts string number to string word

}


module.exports = timeWord;