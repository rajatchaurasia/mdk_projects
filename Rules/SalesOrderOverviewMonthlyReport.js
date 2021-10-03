
var clientAPI;

/**
 * Describe this function...
 */
export default function SalesOrderOverviewMonthlyReport(clientAPI) {
    let oSelectedFilter = JSON.parse(clientAPI.nativescript.appSettingsModule.getString("SelectedFilter"));
    let sLocation = JSON.parse(clientAPI.nativescript.appSettingsModule.getString("SelectedChartConfig")).City
    let currency = "";
    var dlg = clientAPI.nativescript.uiDialogsModule;
    // dlg.alert("FilterValueChange");
    var y;
    var CategoryTitles = [], Subtitle, Data = [];
    if (oSelectedFilter.MonthValue === "February") {
        CategoryTitles = ["CW5", "CW6", "CW7", "CW8", "CW9"];
        Subtitle = "February";
        Data = [[0.09, 51.13, 166.87, 1.07, 0.64], [0.00, 0.77, 0.00, 0.00, 0.00], [0.00, 0.00, 0.00, 0.00, 0.00], [0.09, 51.13, 0.55, 0.00, 0.00]];
    } else if (oSelectedFilter.MonthValue === "June") {
        CategoryTitles = ["CW22", "CW23", "CW24", "CW25", "CW26"];
        Subtitle = "June";
        Data = [[0.09, 51.13, 0.55, 0.00, 0.00], [0.00, 0.77, 0.00, 0.00, 0.00], [0.09, 51.13, 166.87, 1.07, 0.64], [0.00, 0.00, 0.00, 0.00, 0.00]];
    } else {
        CategoryTitles = ["CW29", "CW30", "CW31", "CW32", "CW33"];
        Subtitle = "Last 7 Days";
        Data = [[0.00, 0.77, 0.00, 0.00, 0.00], [0.09, 51.13, 166.87, 1.07, 0.64], [0.09, 51.13, 0.55, 0.00, 0.00], [0.00, 0.00, 0.00, 0.00, 0.00]];
    }

    // dlg.alert("oSelectedFilter.MonthValue: " + oSelectedFilter.MonthValue);
    //  dlg.alert("sLocation: " + sLocation);
    // if (sLocation == "México") {
    //      dlg.alert("if: " + JSON.stringify(CategoryTitles));
    //     currency = "MXN";
    //     y = {
    //         // "CategoryTitles": ["CW29", "CW30", "CW31", "CW32", "CW33"],
    //         "CategoryTitles": CategoryTitles,
    //         "ChartType": oSelectedFilter.Month,
    //         "Currency": `${currency}`,
    //         "Metric": "6.87M",
    //         "LeadingUnit": "$",
    //         "CategoryAxis": "Week Number",
    //         "Data": [[0.00, 0.01, 0.00, 0.00, 0.00], [0.02, 1.28, 4.17, 0.02, 0.01], [0.02, 1.28, 0.01, 0.00, 0.00], [0.00, 0.00, 0.00, 0.00, 0.00]],
    //         // "Subtitle": "Last 30 Days",
    //         "Subtitle": Subtitle,
    //         // "SeriesColor": ["#1a75ff", "#3a8865", "#f83953", "#ce5c08"],
    //         "SeriesTitles": ["Open", "In Process", "Completed", "Not Relevant"],
    //         "Title": `$6.87M ${currency}`
    //     }
    // }
    // else {
    //     dlg.alert("else: " + JSON.stringify(CategoryTitles));
    //     currency = "USD";
    //     y = {
    //         // "CategoryTitles": ["CW29", "CW30", "CW31", "CW32", "CW33"],
    //         "CategoryTitles": CategoryTitles,
    //         "ChartType": oSelectedFilter.Month,
    //         "Currency": `${currency}`,
    //         "Metric": "274K",
    //         "LeadingUnit": "$",
    //         "CategoryAxis": "Week Number",
    //         // "Data": [[0.00,0.77,0.00,0.00,0.00], [0.09,51.13,166.87,1.07,0.64], [0.09,51.13,0.55,0.00,0.00], [0.00,0.00,0.00,0.00,0.00]],
    //         "Data": Data,
    //         // "Subtitle": "Last 30 Days",
    //         "Subtitle": Subtitle,
    //         // "SeriesColor": ["#1a75ff", "#3a8865", "#f83953", "#ce5c08"],
    //         "SeriesTitles": ["Open", "In Process", "Completed", "Not Relevant"],
    //         "Title": `$274K ${currency}`
    //     }
    // }

     return {
            // "CategoryTitles": ["CW29", "CW30", "CW31", "CW32", "CW33"],
            "CategoryTitles": CategoryTitles,
            "ChartType": oSelectedFilter.Month,
            "Currency": "USD",
            "Metric": "274K",
            "LeadingUnit": "$",
            "CategoryAxis": "Week Number",
            // "Data": [[0.00,0.77,0.00,0.00,0.00], [0.09,51.13,166.87,1.07,0.64], [0.09,51.13,0.55,0.00,0.00], [0.00,0.00,0.00,0.00,0.00]],
            "Data": Data,
            // "Subtitle": "Last 30 Days",
            "Subtitle": Subtitle,
            // "SeriesColor": ["#1a75ff", "#3a8865", "#f83953", "#ce5c08"],
            "SeriesTitles": ["Open", "In Process", "Completed", "Not Relevant"],
            "Title": `$274K ${currency}`
        }

}
