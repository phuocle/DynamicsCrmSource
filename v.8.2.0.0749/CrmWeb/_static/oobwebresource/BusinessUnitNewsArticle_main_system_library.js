Type.registerNamespace("Mscrm");
Mscrm.Form_onload = function() {
    InitCalendar(USER_DATE_FORMATSTRING,
        USER_DATE_SEPARATOR,
        USER_DATE_START_DAY,
        new Date(USER_CURRENT_DATE_YEAR, USER_CURRENT_DATE_MONTH, USER_CURRENT_DATE_DAY))
}