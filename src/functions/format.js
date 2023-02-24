import { currentData } from "./dom_manipulation";

let getTodaysDate = (timezone) => {
    console.log(`timezone is ${timezone}`)
    return new Date().toLocaleString("en-US", { timeZone: `${timezone}` });
};

let formatDate = (request) => {
    if (request === 'day') {
        let dateArray = []
        let day = new Date().toString();
        let splitDay = day.split(' ')
        if (splitDay[0] === 'Mon') {
            dateArray.push('Monday,');
        } else if (splitDay[0] === 'Tue') {
            dateArray.push('Tuesday,')
        } else if (splitDay[0] === 'Wed') {
            dateArray.push('Wednesday,')
        } else if (splitDay[0] === 'Thu') {
            dateArray.push('Thursday,')
        } else if (splitDay[0] === 'Fri') {
            dateArray.push('Friday,')
        } else if (splitDay[0] === 'Sat') {
            dateArray.push('Saturday,')
        } else if (splitDay[0] === 'Sun') {
            dateArray.push('Sunday,')
        }
        if (splitDay[2].slice(-1) == '1') {
            dateArray.push(`${splitDay[2]}st`)
        } else if (splitDay[2].slice(-1) == '2') {
            dateArray.push(`${splitDay[2]}nd`)
        } else if (splitDay[2].slice(-1) == '3') {
            dateArray.push(`${splitDay[2]}rd`)
        } else {
            dateArray.push(`${splitDay[2]}th`)
        }
        dateArray.push(splitDay[1])
        dateArray.push(splitDay[3])
        return dateArray.join(' ')
    } else if (request === 'time') {
        return getTodaysDate(currentData.timezone)
        .split(', ')
        .splice(1)
        .join(':')
    }
};

let getTimeZone = (inSeconds) => {
    console.log(`time in seconds from UTC is: ${inSeconds}`)
    if (inSeconds == '0') {
        return 'UTC'
    } else if (inSeconds == '3600') {
        return 'CET'
    } else if (inSeconds == '7200') {
        return 'EET'
    } else if (inSeconds == '10800') {
        return 'EAT'
    } else if (inSeconds == '14400') {
        return 'GST'
    } else if (inSeconds == '18000') {
        return 'MVT'
    } else if (inSeconds == '21600') {
        return 'BST'
    } else if (inSeconds == '25200') {
        return 'KRAT'
    } else if (inSeconds == '28800') {
        return 'WST'
    } else if (inSeconds == '32400') {
        return 'JST'
    } else if (inSeconds == '36000') {
        return 'AEST'
    } else if (inSeconds == '39600') {
        return 'NCT'
    } else if (inSeconds == '43200') {
        return 'NZST'
    } else if (inSeconds == '46800') {
        return 'NZDT'
    } else if (inSeconds == '-3600') {
        return 'EGT'
    } else if (inSeconds == '-7200') {
        return 'WGST'
    } else if (inSeconds == '-10800') {
        return 'ADT'
    } else if (inSeconds == '-12600') {
        return 'AST'
    } else if (inSeconds == '-14400') {
        return 'CDT'
    } else if (inSeconds == '-18000') {
        return 'EST'
    } else if (inSeconds == '-21600') {
        return 'CST'
    } else if (inSeconds == '-25200') {
        return 'MST'
    } else if (inSeconds == '-28800') {
        return 'PST'
    } else if (inSeconds == '-32400') {
        return 'AST'
    } else if (inSeconds == '-36000') {
        return 'HST'
    } else if (inSeconds == '-39600') {
        return 'U'
    } else if (inSeconds == '-43200') {
        return 'DST'
    }
};

export { formatDate, getTimeZone, getTodaysDate }