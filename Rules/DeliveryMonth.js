
var clientAPI;

/**
 * Describe this function...
 */
export default function DeliveryMonth(clientAPI) {
    let oSelectedFilter = JSON.parse(clientAPI.nativescript.appSettingsModule.getString("SelectedFilter"));
    let sLocation = JSON.parse(clientAPI.nativescript.appSettingsModule.getString("SelectedChartConfig")).City
    let currency = "";
    var y;

    var CategoryTitles = [], Subtitle, Data = [];
    if (oSelectedFilter.MonthValue === "February") {
        CategoryTitles = ["CW6", "CW7"];
        Subtitle = "February";
        Data = [[385.8, 264.94], [385.8, 364.94]];
    } else if (oSelectedFilter.MonthValue === "June") {
        CategoryTitles = ["CW23", "CW24"];
        Subtitle = "June";
        Data = [[345.8, 364.94], [385.8, 364.94]];
    } else {
        CategoryTitles = ["CW28", "CW29"];
        Subtitle = "Last 30 Days";
        Data = [[385.8, 364.94], [385.8, 364.94]];
    }

    if (sLocation == "México") {
        currency = "MXN";
        y = {
            "CategoryTitles": ["CW28", "CW29"],
            "ChartType": oSelectedFilter.Month,
            "Currency": `${currency}`,
            "Metric": "37.52K",
            "LeadingUnit": " ",
            "CategoryAxis": "Week Number",
            "Data": [[9.64, 9.12], [9.64, 9.12]],
            "Subtitle": "Last 30 Days",
            // "SeriesColor": ["#1a75ff", "#3a8865", "#f83953", "#ce5c08"],
            "SeriesTitles": ["Requested Value", "Committed Value"],
            "Title": `37.52K ${currency}`
        }
    }
    else {
        currency = "USD";
        y = {
            "CategoryTitles": CategoryTitles,//["CW28", "CW29"],
            "ChartType": oSelectedFilter.Month,
            "Currency": `${currency}`,
            "Metric": "1501.48",
            "LeadingUnit": "$",
            "CategoryAxis": "Week Number",
            "Data": Data,//[[385.8, 364.94], [385.8, 364.94]],
            "Subtitle": Subtitle,//"Last 30 Days",
            // "SeriesColor": ["#1a75ff", "#3a8865", "#f83953", "#ce5c08"],
            "SeriesTitles": ["Requested Value", "Committed Value"],
            "Title": `$1501.48 ${currency}`
        }
    }
    return y;
}
