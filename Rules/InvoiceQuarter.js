
var clientAPI;

/**
 * Describe this function...
 */
export default function InvoiceQuarter(clientAPI) {
    let oSelectedFilter = JSON.parse(clientAPI.nativescript.appSettingsModule.getString("SelectedFilter"));
    let sLocation = JSON.parse(clientAPI.nativescript.appSettingsModule.getString("SelectedChartConfig")).City
    let currency = "";
    var y;
    let dialogs = clientAPI.nativescript.uiDialogsModule;
    var CategoryTitles = [], Subtitle, Data = [];
    if (oSelectedFilter.QuarterValue === "Q1") {
        CategoryTitles = ["Jan 2021", "Feb 2021", "Mar 2021"];
        Subtitle = "1st Quarter";
        Data = [[50.95, 79.24, 63.67]];
    } else {
        CategoryTitles = ["May 2021", "June 2021", "July 2021"];
        Subtitle = "Last 90 Days";
        Data = [[79.24, 63.67, 46.65]];
    }
    if (sLocation == "México") {
        currency = "MXN"
        y = {
            "CategoryTitles": ["May 2021", "June 2021", "July 2021"],
            "ChartType": oSelectedFilter.Quarter,
            "Currency": `${currency}`,
            "Metric": "193K",
            "LeadingUnit": " ",
            "CategoryAxis": "Month Year",
            "Data": [[79.24, 63.67, 50.95]],
            "Subtitle": "Last 90 Days",
            // "SeriesColor": ["#1a75ff", "#3a8865", "#f83953", "#ce5c08"],
            "SeriesTitles": ["Net Value"],
            "Title": `193K ${currency}`
        }
    }
    else {
        currency = "USD"
        y = {
            "CategoryTitles": CategoryTitles,//["May 2021", "June 2021", "July 2021"],
            "ChartType": oSelectedFilter.Quarter,
            "Currency": `${currency}`,
            "Metric": "189.56K",
            "LeadingUnit": "$",
            "CategoryAxis": "Month Year",
            "Data": Data,//[[3.17, 2.55, 2.04]],
            "Subtitle": Subtitle,//"Last 90 Days",
            // "SeriesColor": ["#1a75ff", "#3a8865", "#f83953", "#ce5c08"],
            "SeriesTitles": ["Net Value"],
            "Title": `$189.56K ${currency}`
        }
    }
    // dialogs.alert(currency);

    return y;

}
