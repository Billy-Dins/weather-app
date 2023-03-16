import { currentData } from "./dom_manipulation";

let getTodaysDate = (timezone) => {
    return new Date().toLocaleString("en-US", { timeZone: `${timezone}` });
};

// Takes today's date and formats into a more readable string.
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

// returns the timezone to be read by getTodaysDate function with the returned
// region for proper formatting.
let getTimeZone = (inSeconds) => {
    if (inSeconds == '0') {
        return 'UTC'
    } else if (inSeconds == '3600') {
        return 'Africa/Lagos'
    } else if (inSeconds == '7200') {
        return 'Europe/Helsinki'
    } else if (inSeconds == '10800') {
        return 'Asia/Baghdad'
    } else if (inSeconds == '14400') {
        return 'Indian/Maldives'
    } else if (inSeconds == '18000') {
        return 'Asia/Dacca'
    } else if (inSeconds == '21600') {
        return 'Asia/Jakarta'
    } else if (inSeconds == '25200') {
        return 'Antarctica/Davis'
    } else if (inSeconds == '28800') {
        return 'Australia/Perth'
    } else if (inSeconds == '32400') {
        return 'Asia/Tokyo'
    } else if (inSeconds == '36000') {
        return 'Pacific/Port_Moresby'
    } else if (inSeconds == '39600') {
        return 'Australia/Sydney'
    } else if (inSeconds == '43200') {
        return 'Pacific/Auckland'
    } else if (inSeconds == '46800') {
        return 'Pacific/Auckland'
    } else if (inSeconds == '-3600') {
        return 'Atlantic/Cape_Verde'
    } else if (inSeconds == '-7200') {
        return 'Brazil/DeNoronha'
    } else if (inSeconds == '-10800') {
        return 'America/Buenos_Aires'
    } else if (inSeconds == '-12600') {
        return 'America/Guadeloupe'
    } else if (inSeconds == '-14400') {
        return 'America/Jamaica'
    } else if (inSeconds == '-18000') {
        return 'America/Boise'
    } else if (inSeconds == '-21600') {
        return 'America/Phoenix'
    } else if (inSeconds == '-25200') {
        return 'America/Anchorage'
    } else if (inSeconds == '-28800') {
        return 'Pacific/Gambier'
    } else if (inSeconds == '-32400') {
        return 'Pacific/Honolulu'
    } else if (inSeconds == '-36000') {
        return 'Pacific/Midway'
    } else if (inSeconds == '-39600') {
        return 'Etc/GMT+12'
    }
};

export { formatDate, getTimeZone, getTodaysDate }