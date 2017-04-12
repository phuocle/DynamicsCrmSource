/*
* Microsoft grants you the right to use these script files for the sole purpose of either: 
* (i) interacting through your browser with the Microsoft website, subject to the website’s 
* terms of use; or (ii) using the files as included with a Microsoft product subject to that
* product’s license terms. Microsoft reserves all other rights to the files not expressly 
* granted by Microsoft, whether by implication, estoppel or otherwise. The notices and 
* licenses below are for informational purposes only.
*/
/*
* Provided for Informational Purposes Only
* MIT License
* Permission is hereby granted, free of charge, to any person obtaining
* a copy of this software and associated documentation files (the
* "Software"), to deal in the Software without restriction, including
* without limitation the rights to use, copy, modify, merge, publish,
* distribute, sublicense, and/or sell copies of the Software, and to
* permit persons to whom the Software is furnished to do so, subject to
* the following conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
* MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
* LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
* OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
* WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

;
(function($) {
    /**
     * jqGrid English Translation
     * Tony Tomov tony@trirand.com
     * http://trirand.com/blog/ 
     * Dual licensed under the MIT and GPL licenses:
     * http://www.opensource.org/licenses/mit-license.php
     * http://www.gnu.org/licenses/gpl.html
    **/
    $.jgrid = $.jgrid || {};
    $.jgrid.localString = Microsoft.Crm.Client.Core.Framework.Common.jqGridResourceManager.getLocalizedString;
    $.extend($.jgrid,
    {
        defaults: {
            recordtext: $.jgrid.localString("jqGrid.strings.recordtext"),
            emptyrecords: $.jgrid.localString("jqGrid.defaults.emptyrecords"),
            loadtext: $.jgrid.localString("jqGrid.defaults.loading"),
            pgtext: $.jgrid.localString("jqGrid.strings.pgtext")
        },
        search: {
            caption: $.jgrid.localString("jqGrid.strings.Search"),
            Find: $.jgrid.localString("jqGrid.strings.Find"),
            Reset: $.jgrid.localString("jqGrid.strings.Reset"),
            odata: [
                $.jgrid.localString("jqGrid.strings.equal"), $.jgrid.localString("jqGrid.strings.notequal"), $.jgrid
                .localString("jqGrid.strings.less"), $.jgrid.localString("jqGrid.strings.lessorequal"), $.jgrid
                .localString("jqGrid.strings.greater"), $.jgrid.localString("jqGrid.strings.greaterorequal"), $.jgrid
                .localString("jqGrid.strings.beginswith"), $.jgrid.localString("jqGrid.strings.doesnotbeginwith"), $
                .jgrid.localString("jqGrid.strings.isin"), $.jgrid.localString("jqGrid.strings.isnotin"), $.jgrid
                .localString("jqGrid.strings.endswith"), $.jgrid.localString("jqGrid.strings.doesnotendwith"), $.jgrid
                .localString("jqGrid.strings.contains"), $.jgrid.localString("jqGrid.strings.doesnotcontain")
            ],
            groupOps: [
                { op: $.jgrid.localString("jqGrid.strings.AND"), text: $.jgrid.localString("jqGrid.strings.all") },
                { op: $.jgrid.localString("jqGrid.strings.OR"), text: $.jgrid.localString("jqGrid.strings.any") }
            ],
            equal: $.jgrid.localString("jqGrid.strings.equal"),
            notequal: $.jgrid.localString("jqGrid.strings.notequal"),
            less: $.jgrid.localString("jqGrid.strings.less"),
            lessorequal: $.jgrid.localString("jqGrid.strings.lessorequal"),
            greater: $.jgrid.localString("jqGrid.strings.greater"),
            greaterorequal: $.jgrid.localString("jqGrid.strings.greaterorequal"),
            beginswith: $.jgrid.localString("jqGrid.strings.beginswith"),
            doesnotbeginwith: $.jgrid.localString("jqGrid.strings.doesnotbeginwith"),
            isin: $.jgrid.localString("jqGrid.strings.isin"),
            isnotin: $.jgrid.localString("jqGrid.strings.isnotin"),
            endswith: $.jgrid.localString("jqGrid.strings.endswith"),
            doesnotendwith: $.jgrid.localString("jqGrid.strings.doesnotendwith"),
            contains: $.jgrid.localString("jqGrid.strings.contains"),
            doesnotcontain: $.jgrid.localString("jqGrid.strings.doesnotcontain"),
            matchText: $.jgrid.localString("jqGrid.strings.match"),
            rulesText: $.jgrid.localString("jqGrid.strings.rules"),
            AND: $.jgrid.localString("jqGrid.strings.AND"),
            all: $.jgrid.localString("jqGrid.strings.all"),
            OR: $.jgrid.localString("jqGrid.strings.OR"),
            any: $.jgrid.localString("jqGrid.strings.any")
        },
        edit: {
            addCaption: $.jgrid.localString("jqGrid.strings.AddRecord"),
            editCaption: $.jgrid.localString("jqGrid.strings.EditRecord"),
            bSubmit: $.jgrid.localString("jqGrid.strings.editSubmit"),
            bCancel: $.jgrid.localString("jqGrid.strings.editCancel"),
            bClose: $.jgrid.localString("jqGrid.strings.editClose"),
            saveData: $.jgrid.localString("jqGrid.strings.saveData"),
            bYes: $.jgrid.localString("jqGrid.strings.editYes"),
            bNo: $.jgrid.localString("jqGrid.strings.editNo"),
            bExit: $.jgrid.localString("jqGrid.strings.editExit"),
            msg: {
                required: $.jgrid.localString("jqGrid.strings.required"),
                number: $.jgrid.localString("jqGrid.strings.number"),
                minValue: $.jgrid.localString("jqGrid.strings.minValue"),
                maxValue: $.jgrid.localString("jqGrid.strings.maxValue"),
                email: $.jgrid.localString("jqGrid.strings.email"),
                integer: $.jgrid.localString("jqGrid.strings.integer"),
                date: $.jgrid.localString("jqGrid.strings.date"),
                url: $.jgrid.localString("jqGrid.strings.url"),
                nodefined: $.jgrid.localString("jqGrid.strings.nodefined"),
                novalue: $.jgrid.localString("jqGrid.strings.novalue"),
                customarray: $.jgrid.localString("jqGrid.strings.customarray"),
                customfcheck: $.jgrid.localString("jqGrid.strings.customfcheck")
            }
        },
        view: {
            caption: $.jgrid.localString("jqGrid.strings.ViewRecord"),
            bClose: $.jgrid.localString("jqGrid.strings.viewClose")
        },
        del: {
            caption: $.jgrid.localString("jqGrid.strings.Delete"),
            msg: $.jgrid.localString("jqGrid.strings.msg"),
            bSubmit: $.jgrid.localString("jqGrid.strings.delSubmit"),
            bCancel: $.jgrid.localString("jqGrid.strings.delCancel")
        },
        nav: {
            edittext: "",
            edittitle: $.jgrid.localString("jqGrid.strings.edittitle"),
            addtext: "",
            addtitle: $.jgrid.localString("jqGrid.strings.addtitle"),
            deltext: "",
            deltitle: $.jgrid.localString("jqGrid.strings.deltitle"),
            searchtext: "",
            searchtitle: $.jgrid.localString("jqGrid.strings.searchtitle"),
            refreshtext: "",
            refreshtitle: $.jgrid.localString("jqGrid.strings.refreshtitle"),
            alertcap: $.jgrid.localString("jqGrid.strings.navWarning"),
            alerttext: $.jgrid.localString("jqGrid.strings.navAlert"),
            viewtext: "",
            viewtitle: $.jgrid.localString("jqGrid.strings.viewtitle")
        },
        col: {
            caption: $.jgrid.localString("jqGrid.strings.selectcolumns"),
            bSubmit: $.jgrid.localString("jqGrid.strings.colOk"),
            bCancel: $.jgrid.localString("jqGrid.strings.colCancel")
        },
        errors: {
            errcap: $.jgrid.localString("jqGrid.strings.errorserrcap"),
            nourl: $.jgrid.localString("jqGrid.strings.nourl"),
            norecords: $.jgrid.localString("jqGrid.strings.norecords"),
            model: $.jgrid.localString("jqGrid.strings.model")
        },
        formatter: {
            integer: { thousandsSeparator: ",", defaultValue: '0' },
            number: { decimalSeparator: ".", thousandsSeparator: ",", decimalPlaces: 2, defaultValue: '0.00' },
            currency: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2,
                prefix: "",
                suffix: "",
                defaultValue: '0.00'
            },
            date: {
                dayNames: [
                    $.jgrid.localString("jqGrid.strings.Sun"), $.jgrid.localString("jqGrid.strings.Mon"), $.jgrid
                    .localString("jqGrid.strings.Tue"), $.jgrid.localString("jqGrid.strings.Wed"), $.jgrid
                    .localString("jqGrid.strings.Thu"), $.jgrid.localString("jqGrid.strings.Fri"), $.jgrid
                    .localString("jqGrid.strings.Sat"),
                    $.jgrid.localString("jqGrid.strings.Sunday"), $.jgrid.localString("jqGrid.strings.Monday"), $.jgrid
                    .localString("jqGrid.strings.Tuesday"), $.jgrid.localString("jqGrid.strings.Wednesday"), $.jgrid
                    .localString("jqGrid.strings.Thursday"), $.jgrid.localString("jqGrid.strings.Friday"), $.jgrid
                    .localString("jqGrid.strings.Saturday")
                ],
                Sunday: $.jgrid.localString("jqGrid.strings.Sun"),
                Monday: $.jgrid.localString("jqGrid.strings.Mon"),
                Tuesday: $.jgrid.localString("jqGrid.strings.Tue"),
                Wednesday: $.jgrid.localString("jqGrid.strings.Wed"),
                Thursday: $.jgrid.localString("jqGrid.strings.Thu"),
                Friday: $.jgrid.localString("jqGrid.strings.Fri"),
                Saturday: $.jgrid.localString("jqGrid.strings.Sat"),
                Sun: $.jgrid.localString("jqGrid.strings.Sunday"),
                Mon: $.jgrid.localString("jqGrid.strings.Monday"),
                Tue: $.jgrid.localString("jqGrid.strings.Tuesday"),
                Wed: $.jgrid.localString("jqGrid.strings.Wednesday"),
                Thu: $.jgrid.localString("jqGrid.strings.Thursday"),
                Fri: $.jgrid.localString("jqGrid.strings.Friday"),
                Sat: $.jgrid.localString("jqGrid.strings.Saturday"),
                monthNames: [
                    $.jgrid.localString("jqGrid.strings.Jan"), $.jgrid.localString("jqGrid.strings.Feb"), $.jgrid
                    .localString("jqGrid.strings.Mar"), $.jgrid.localString("jqGrid.strings.Apr"), $.jgrid
                    .localString("jqGrid.strings.May"), $.jgrid.localString("jqGrid.strings.Jun"), $.jgrid
                    .localString("jqGrid.strings.Jul"), $.jgrid.localString("jqGrid.strings.Aug"), $.jgrid
                    .localString("jqGrid.strings.Sep"), $.jgrid.localString("jqGrid.strings.Oct"), $.jgrid
                    .localString("jqGrid.strings.Nov"), $.jgrid.localString("jqGrid.strings.Dec"),
                    $.jgrid.localString("jqGrid.strings.January"), $.jgrid.localString("jqGrid.strings.February"), $
                    .jgrid.localString("jqGrid.strings.March"), $.jgrid.localString("jqGrid.strings.April"), $.jgrid
                    .localString("jqGrid.strings.May"), $.jgrid.localString("jqGrid.strings.June"), $.jgrid
                    .localString("jqGrid.strings.July"), $.jgrid.localString("jqGrid.strings.August"), $.jgrid
                    .localString("jqGrid.strings.September"), $.jgrid.localString("jqGrid.strings.October"), $.jgrid
                    .localString("jqGrid.strings.November"), $.jgrid.localString("jqGrid.strings.December")
                ],
                January: $.jgrid.localString("jqGrid.strings.Jan"),
                February: $.jgrid.localString("jqGrid.strings.Feb"),
                March: $.jgrid.localString("jqGrid.strings.Mar"),
                April: $.jgrid.localString("jqGrid.strings.Apr"),
                May: $.jgrid.localString("jqGrid.strings.May"),
                June: $.jgrid.localString("jqGrid.strings.Jun"),
                July: $.jgrid.localString("jqGrid.strings.Jul"),
                August: $.jgrid.localString("jqGrid.strings.Aug"),
                September: $.jgrid.localString("jqGrid.strings.Sep"),
                October: $.jgrid.localString("jqGrid.strings.Oct"),
                November: $.jgrid.localString("jqGrid.strings.Nov"),
                December: $.jgrid.localString("jqGrid.strings.Dec"),
                Jan: $.jgrid.localString("jqGrid.strings.January"),
                Feb: $.jgrid.localString("jqGrid.strings.February"),
                Mar: $.jgrid.localString("jqGrid.strings.March"),
                Apr: $.jgrid.localString("jqGrid.strings.April"),
                May: $.jgrid.localString("jqGrid.strings.May"),
                Jun: $.jgrid.localString("jqGrid.strings.June"),
                Jul: $.jgrid.localString("jqGrid.strings.July"),
                Aug: $.jgrid.localString("jqGrid.strings.August"),
                Sep: $.jgrid.localString("jqGrid.strings.September"),
                Oct: $.jgrid.localString("jqGrid.strings.October"),
                Nov: $.jgrid.localString("jqGrid.strings.November"),
                Dec: $.jgrid.localString("jqGrid.strings.December"),
                AmPm: [
                    $.jgrid.localString("jqGrid.strings.am"), $.jgrid.localString("jqGrid.strings.pm"), $.jgrid
                    .localString("jqGrid.strings.AMUpperCase"), $.jgrid.localString("jqGrid.strings.PMUpperCase")
                ],

                am: $.jgrid.localString("jqGrid.strings.am"),
                pm: $.jgrid.localString("jqGrid.strings.pm"),
                AM: $.jgrid.localString("jqGrid.strings.AMUpperCase"),
                PM: $.jgrid.localString("jqGrid.strings.PMUpperCase"),
                S: function(j) {
                    return j < 11 || j > 13
                        ? ['st', 'nd', 'rd', 'th'][Math.min((j - 1) % 10, 3)
                        ]
                        : 'th';
                },
                srcformat: 'Y-m-d',
                newformat: 'n/j/Y',
                masks: {
                    // see http://php.net/manual/en/function.date.php for PHP format used in jqGrid
                    // and see http://docs.jquery.com/UI/Datepicker/formatDate
                    // and https://github.com/jquery/globalize#dates for alternative formats used frequently
                    // one can find on https://github.com/jquery/globalize/tree/master/lib/cultures many
                    // information about date, time, numbers and currency formats used in different countries
                    // one should just convert the information in PHP format
                    ISO8601Long: $.jgrid.localString("jqGrid.strings.Y_m_d_H_i_s"),
                    ISO8601Short: $.jgrid.localString("jqGrid.strings.shortY_m_d"),
                    // short date:
                    //    n - Numeric representation of a month, without leading zeros
                    //    j - Day of the month without leading zeros
                    //    Y - A full numeric representation of a year, 4 digits
                    // example: 3/1/2012 which means 1 March 2012
                    ShortDate: $.jgrid.localString("jqGrid.strings.n_j_Y"),
                    // long date:
                    //    l - A full textual representation of the day of the week
                    //    F - A full textual representation of a month
                    //    d - Day of the month, 2 digits with leading zeros
                    //    Y - A full numeric representation of a year, 4 digits
                    LongDate: $.jgrid.localString("jqGrid.strings.l_F_d_Y"),
                    // long date with long time:
                    //    l - A full textual representation of the day of the week
                    //    F - A full textual representation of a month
                    //    d - Day of the month, 2 digits with leading zeros
                    //    Y - A full numeric representation of a year, 4 digits
                    //    g - 12-hour format of an hour without leading zeros
                    //    i - Minutes with leading zeros
                    //    s - Seconds, with leading zeros
                    //    A - Uppercase Ante meridiem and Post meridiem (AM or PM)
                    FullDateTime: $.jgrid.localString("jqGrid.strings.l_F_d_Y_g_i_s_A"),
                    // month day:
                    //    F - A full textual representation of a month
                    //    d - Day of the month, 2 digits with leading zeros
                    MonthDay: $.jgrid.localString("jqGrid.strings.F_d"),
                    // short time (without seconds)
                    //    g - 12-hour format of an hour without leading zeros
                    //    i - Minutes with leading zeros
                    //    A - Uppercase Ante meridiem and Post meridiem (AM or PM)
                    ShortTime: $.jgrid.localString("jqGrid.strings.g_i_A"),
                    // long time (with seconds)
                    //    g - 12-hour format of an hour without leading zeros
                    //    i - Minutes with leading zeros
                    //    s - Seconds, with leading zeros
                    //    A - Uppercase Ante meridiem and Post meridiem (AM or PM)
                    LongTime: $.jgrid.localString("jqGrid.strings.g_i_s_A"),
                    SortableDateTime: $.jgrid.localString("jqGrid.strings.Y_m_d_TH_i_s"),
                    UniversalSortableDateTime: $.jgrid.localString("jqGrid.strings.Y_m_d_H_i_sO"),
                    // month with year
                    //    Y - A full numeric representation of a year, 4 digits
                    //    F - A full textual representation of a month
                    YearMonth: $.jgrid.localString("jqGrid.strings.F_Y")
                },
                reformatAfterEdit: false
            },
            baseLinkUrl: '',
            showAction: '',
            target: '',
            checkbox: { disabled: true },
            idName: 'id'
        }
    });
})(jQuery);