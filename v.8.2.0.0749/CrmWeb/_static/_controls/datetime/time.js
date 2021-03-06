
function parseTime(sTime, iFormat) {
    iFormat = USER_TIME_FORMAT;
    if (1026 == LOCID_LCID)
        sTime = sTime.replace(" \u0447.", "");
    sTime = Mscrm.NumberUtility.fullWidthToHalfWidth(sTime);
    sTime = sTime.toLowerCase();
    var rValidTimeElement = /^[0-9]{1,2}$/,
        bAdd12Hours = false,
        iHour,
        iMinute,
        iSecond,
        bIs24hourtime_noAmPmFound = true,
        sMinute,
        iMinDiv,
        sTimeSeparator = Sys.CultureInfo.CurrentCulture.dateTimeFormat["TimeSeparator"],
        oDateTimeFormat = Sys.CultureInfo.CurrentCulture.dateTimeFormat,
        sPM = oDateTimeFormat["PMDesignator"],
        sAM = oDateTimeFormat["AMDesignator"];
    if (-1 < sTime.indexOf(sPM.toLowerCase()) && sPM.length >= 1) {
        bAdd12Hours = true;
        sTime = sTime.replace(sPM.toLowerCase(), "");
        bIs24hourtime_noAmPmFound = false
    } else if (-1 < sTime.indexOf(sAM.toLowerCase()) && sAM.length >= 1) {
        sTime = sTime.replace(sAM.toLowerCase(), "");
        bIs24hourtime_noAmPmFound = false
    }
    sTime = TrimSpaces(sTime);
    sTime = sTime.replace(/\s/g, "");
    var iTimeSeparator = iFormat.indexOf(":");
    if (iTimeSeparator < 0) {
        iTimeSeparator = iFormat.indexOf(".");
        if (iTimeSeparator < 0) {
            iTimeSeparator = iFormat.indexOf("h");
            if (iTimeSeparator > 0)
                sTimeSeparator = "h"
        } else
            sTimeSeparator = "."
    }
    var iHourDiv = sTime.indexOf(":");
    if (iHourDiv < 0)
        iHourDiv = sTime.indexOf(sTimeSeparator);
    var sHour = sTime.substring(0, iHourDiv);
    if (!sHour.match(rValidTimeElement))
        return new Date(NaN);
    if (iFormat.match(/s/)) {
        iMinDiv = sTime.indexOf(":", iHourDiv + 1);
        if (iMinDiv < 0)
            iMinDiv = sTime.indexOf(sTimeSeparator, iHourDiv + 1);
        if (iMinDiv < 0)
            iMinDiv = sTime.length;
        sMinute = sTime.substring(iHourDiv + 1, iMinDiv);
        if (!sMinute.match(rValidTimeElement))
            return new Date(NaN);
        iMinute = parseInt(sMinute, 10);
        sSecond = sTime.substring(iMinDiv + 1, sTime.length);
        if (IsNull(sSecond) || sSecond == "")
            iSecond = 0;
        else {
            if (!sSecond.match(rValidTimeElement))
                return new Date(NaN);
            iSecond = parseInt(sSecond, 10)
        }
    } else {
        sMinute = sTime.substring(iHourDiv + 1, sTime.length);
        if (!sMinute.match(rValidTimeElement))
            return new Date(NaN);
        iMinute = parseInt(sMinute, 10);
        iSecond = 0
    }
    if (!bIs24hourtime_noAmPmFound) {
        iHour = parseInt(sHour, 10);
        if (iHour <= 0 || iHour > 12)
            return new Date(NaN);
        if (iHour == 12)
            iHour = 0;
        if (bAdd12Hours)
            iHour += 12
    } else
        iHour = parseInt(sHour, 10);
    if (iHour > 23 || iHour < 0 || iMinute > 59 || iMinute < 0 || iSecond > 59 || iSecond < 0)
        return new Date(NaN);
    return new Date(2e3, 0, 1, iHour, iMinute, iSecond, 0)
}

function parseUTCTime(sTime) {
    var ss = sTime.split("-"),
        s = ss[0];
    ss = s.split("+");
    s = ss[0];
    ss = s.split(".");
    s = ss[0];
    s = s.replace(/Z/, "");
    var oDate = new Date("1/1/00 " + s);
    if (ss.length == 2) {
        sMilliseconds = ss[1];
        oDate.setMilliseconds(parseInt(sMilliseconds, 10))
    }
    return oDate
}

function timeToString(oTime, iFormat) {
    var time = USER_TIME_FORMAT;
    if (1026 == LOCID_LCID)
        time = time.replace("'\u0447.'", " \u0447.");
    if (time == "HH' h 'mm" || time == "HH'h'mm")
        time = time.replace(/'/g, "");
    var sTimeSeparator = Sys.CultureInfo.CurrentCulture.dateTimeFormat["TimeSeparator"];
    if (time.match(/:/))
        time = time.replace(/:/, sTimeSeparator);
    if (time.match(/hh/))
        time = time.replace(/hh/, makeTwoDigitString(get12HourClockHours(oTime)));
    if (time.match(/h/) && time != "HH h mm" && time != "HHhmm")
        time = time.replace(/h/, get12HourClockHours(oTime));
    if (time.match(/HH/))
        time = time.replace(/HH/, makeTwoDigitString(oTime.getHours()));
    if (time.match(/H/))
        time = time.replace(/H/, oTime.getHours());
    if (time.match(/ss/))
        time = time.replace(/ss/, makeTwoDigitString(oTime.getSeconds()));
    if (time.match(/mm/))
        time = time.replace(/mm/, makeTwoDigitString(oTime.getMinutes()));
    if (time.match(/tt/))
        time = time.replace(/tt/, makeAMPM(oTime));
    return time
}

function timeToUTCString(oTime) {
    if (isNaN(oTime))
        return null;
    var sRVal = makeTwoDigitString(oTime.getHours()) +
        ":" +
        makeTwoDigitString(oTime.getMinutes()) +
        ":" +
        makeTwoDigitString(oTime.getSeconds());
    return sRVal
}

function makeTwoDigitString(iNumber) {
    if (iNumber > 9)
        return iNumber.toString();
    else
        return "0" + iNumber.toString()
}

function get12HourClockHours(oTime) {
    if (oTime.getHours() > 12)
        return oTime.getHours() - 12;
    else if (oTime.getHours() == 0)
        return 12;
    else
        return oTime.getHours()
}

function makeAMPM(oTime) {
    var oDateTimeFormat = Sys.CultureInfo.CurrentCulture.dateTimeFormat;
    if (oTime.getHours() >= 12)
        return oDateTimeFormat["PMDesignator"];
    else
        return oDateTimeFormat["AMDesignator"]
}

function formatFloat(sNum) {
    var sBase = "",
        sRem = "",
        bRem = false;
    for (i = 0; i < sNum.length; i++) {
        curChar = sNum.charAt(i);
        if (bRem) {
            sRem += curChar;
            if (sRem.length == 2)
                break
        } else
            sBase += curChar;
        if (curChar == ".") {
            bRem = true;
            continue
        }
    }
    return sBase + sRem
}

function formatDuration(iMinutes) {
    if (isNaN(parseInt(iMinutes, 10)) || iMinutes < 0)
        iMinutes = 0;
    var rVal,
        iHours;
    if (iMinutes < 60)
        if (iMinutes == 1)
            rVal = formatString(LOCID_ONE_MINUTE_MASK, iMinutes, LOCID_SINGULAR_MINUTE);
        else
            rVal = formatString(LOCID_N_MINUTES_MASK, iMinutes, LOCID_PLURAL_MINUTE);
    else if (iMinutes >= 60 && iMinutes < 1440) {
        iHours = iMinutes / 60;
        if (iHours == 1)
            rVal = formatString(LOCID_1_HOUR_MASK, Math.round(iHours * 100) / 100, LOCID_SINGULAR_HOUR);
        else
            rVal = formatString(LOCID_N_HOURS_MASK, Math.round(iHours * 100) / 100, LOCID_PLURAL_HOUR)
    } else if (iMinutes >= 1440) {
        iHours = iMinutes / 60;
        var iDays = iHours / 24;
        if (iDays == 1)
            rVal = formatString(LOCID_1_DAY_MASK, formatFloat(iDays.toString()), LOCID_SINGULAR_DAY);
        else
            rVal = formatString(LOCID_N_DAYS_MASK, formatFloat(iDays.toString()), LOCID_PLURAL_DAY)
    }
    return rVal
}