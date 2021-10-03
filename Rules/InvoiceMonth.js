
var clientAPI;

/**
 * Describe this function...
 */
export default function InvoiceMonth(clientAPI) {
    let oSelectedFilter = JSON.parse(clientAPI.nativescript.appSettingsModule.getString("SelectedFilter"));
    let sLocation = JSON.parse(clientAPI.nativescript.appSettingsModule.getString("SelectedChartConfig")).City
    let currency = "";
    var y;
    var dlg = clientAPI.nativescript.uiDialogsModule;
// dlg.alert(oSelectedFilter.Month)

    var CategoryTitles = [], Subtitle, Data = [];
    if (oSelectedFilter.MonthValue === "February") {
        CategoryTitles = ["CW5", "CW6", "CW7", "CW8"];
        Subtitle = "February";
        Data = [[0.5, 0.3, 0.6, 0.6]];
    } else if (oSelectedFilter.MonthValue === "June") {
        CategoryTitles = ["CW22", "CW23", "CW24", "CW25"];
        Subtitle = "June";
        Data = [[0.3, 0.5, 0.6, 0.6]];
    } else {
        CategoryTitles = ["CW27", "CW28", "CW29", "CW30"];
        Subtitle = "Last 30 Days";
        Data = [[11.23, 9.57, 12.16, 13.69]];
    }
    if (sLocation == "México") {
        currency = "MXN";
        y = {
            "CategoryTitles": ["CW27", "CW28", "CW29", "CW30"],
            "ChartType": oSelectedFilter.Month,
            "Currency": `${currency}`,
            "Metric": "50.95K",
            "LeadingUnit": " ",
            "CategoryAxis": "Week Number",
            "Data": [[10.50, 15.10, 12.25, 13.10]],
            "Subtitle": "Last 30 Days",
            // "SeriesColor": ["#1a75ff", "#3a8865", "#f83953", "#ce5c08"],
            "SeriesTitles": ["Net Value"],
            "Title": `50.95K ${currency}`
        }
    }
    else {
        currency = "USD";
        y = {
            "CategoryTitles": CategoryTitles,//["CW27", "CW28", "CW29", "CW30"],
            "ChartType": oSelectedFilter.Month,
            "Currency": `${currency}`,
            "Metric": "46.65K",
            "LeadingUnit": "$",
            "CategoryAxis": "Week Number",
            "Data": Data,//[[0.6, 0.3, 0.5, 0.6]],
            "Subtitle": Subtitle,//"Last 30 Days",
            // "SeriesColor": ["#1a75ff", "#3a8865", "#f83953", "#ce5c08"],
            "SeriesTitles": ["Net Value"],
            "Title": `$46.65K ${currency}`
        }
    }
    return y;
}
