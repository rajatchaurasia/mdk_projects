
var clientAPI;

/**
 * Describe this function...
 */
export default function DeliveryWeek(clientAPI) {
    let oSelectedFilter = JSON.parse(clientAPI.nativescript.appSettingsModule.getString("SelectedFilter"));
    let sLocation = JSON.parse(clientAPI.nativescript.appSettingsModule.getString("SelectedChartConfig")).City
    let currency = "";
    var y;

    var CategoryTitles = [], Subtitle, Data = [];
    if (oSelectedFilter.WeekValue === "CW5") {
        CategoryTitles = ["4 Feb"];
        Subtitle = "Week Number 5";
        Data = [[314.94], [314.94]];
    } else if (oSelectedFilter.WeekValue === "CW15") {
        CategoryTitles = ["13 April"];
        Subtitle = "Week Number 15";
        Data = [[355.94], [355.94]];
    } else if (oSelectedFilter.WeekValue === "CW25") {
        CategoryTitles = ["20 Jun"];
        Subtitle = "Week Number 25";
        Data = [[278.94], [278.94]];
    } else {
        CategoryTitles = ["13 July"];
        Subtitle = "Last 7 Days";
        Data = [[364.94], [364.94]];
    }

    if (sLocation == "México") {
        currency = "MXN";

        y = {

            // "CategoryTitles": ["6th Aug", "9th Aug", "10th Aug", "11th Aug"],
            "CategoryTitles": ["13 July"],
            "ChartType": oSelectedFilter.Week,
            "Currency": `${currency}`,
            "Metric": "18.24K",
            "LeadingUnit": " ",
            "CategoryAxis": "Date",
            // "Data": [[0.00, 13.70, 0.00, 0.00], [1.98,5.11,0.00,4.33], [0.00,0.00,3.96,0.00], [0.00,0.00,0.00,0.00]],
            "Data": [[9.12], [9.12]],
            "Subtitle": "Last 7 Days",
            // "SeriesColor": ["#1a75ff", "#3a8865", "#f83953", "#ce5c08"],
            "SeriesTitles": ["Requested Value", "Committed Value"],
            "Title": `18.24K ${currency}`
        }
    }
    else {
        currency = "USD";
        y = {

            "CategoryTitles": CategoryTitles,//["13 July"],
            // "CategoryTitles": ["11th Aug"],
            "ChartType": oSelectedFilter.Week,
            "Currency": `${currency}`,
            "Metric": "729.88",
            "LeadingUnit": "$",
            "CategoryAxis": "Date",
            "Data": Data,//[[364.94], [364.94]],
            // "Data": [[0.00], [640], [0.00], [0.00]],
            "Subtitle": Subtitle,//"Last 7 Days",
            // "SeriesColor": ["#1a75ff", "#3a8865", "#f83953", "#ce5c08"],
            "SeriesTitles": ["Requested Value", "Committed Value"],
            "Title": `$729.88 ${currency}`
        }
    }
    return y;
}