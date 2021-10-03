
var clientAPI;

/**
 * Describe this function...
 */
export default function InvoiceWeek(clientAPI) {
    
    let oSelectedFilter = JSON.parse(clientAPI.nativescript.appSettingsModule.getString("SelectedFilter"));
    let sLocation = JSON.parse(clientAPI.nativescript.appSettingsModule.getString("SelectedChartConfig")).City
    let currency = "";
    var y;

    var CategoryTitles = [], Subtitle, Data = [];
    if (oSelectedFilter.WeekValue === "CW5") {
        CategoryTitles = ["31 Jan","1 Feb","2 Feb","3 Feb","4 Feb","5 Feb","6 Feb"];
        Subtitle = "Week Number 5";
        Data = [[45.67, 30.25, 30.56, 40.95, 40.76, 73.83, 37.98]];
    } else if (oSelectedFilter.WeekValue === "CW15") {
        CategoryTitles = ["11 April","12 April","13 April","14 April","15 April","16 April","17 April"];
        Subtitle = "Week Number 15";
        Data = [[30.25, 40.95, 45.67, 37.98, 30.56, 40.76, 73.83]];
    } else if (oSelectedFilter.WeekValue === "CW25") {
        CategoryTitles = ["20 Jun","21 Jun","22 Jun","23 Jun","24 Jun","25 Jun","26 Jun"];
        Subtitle = "Week Number 25";
        Data = [[40.95, 73.83, 30.25, 45.67, 30.56, 37.98, 40.76]];
    } else {
        CategoryTitles = ["12 Jul","13 Jul","14 Jul","15 Jul","16 Jul","17 Jul","18 Jul"];
        Subtitle = "Last 7 Days";
        Data = [[1.99, 1.99, 1.99, 1.99, 1.99, 1.87, 1.87]];
    }

    if (sLocation == "México") {
        currency = "MXN";

        y = {

            // "CategoryTitles": ["6th Aug", "9th Aug", "10th Aug", "11th Aug"],
            "CategoryTitles": ["12 Jul","13 Jul","14 Jul","15 Jul","16 Jul","17 Jul","18 Jul"],
            "ChartType": oSelectedFilter.Week,
            "Currency": `${currency}`,
            "Metric": "15.10K",
            "LeadingUnit": " ",
            "CategoryAxis": "Date",
            "Data": [[2.15, 2.65, 2.32, 1.98, 1.76, 2.98, 1.26]],
            // "Data": [[0.00], [16.02], [0.00], [0.00]],
            "Subtitle": "Last 7 Days",
            // "SeriesColor": ["#1a75ff", "#3a8865", "#f83953", "#ce5c08"],
            "SeriesTitles": ["Net Value"],
            "Title": `15.1K ${currency}`
        }
    }
    else {
        currency = "USD";
        y = {

            // "CategoryTitles": ["12 Jul","13 Jul","14 Jul","15 Jul","16 Jul","17 Jul","18 Jul"],
            "CategoryTitles": CategoryTitles,
            "ChartType": oSelectedFilter.Week,
            "Currency": `${currency}`,
            "Metric": "13.69K",
            "LeadingUnit": "$",
            "CategoryAxis": "Date",
            // "Data": [[30.25, 45.67, 40.95, 30.56, 37.98, 40.76, 73.83]],
            "Data": Data,
            // "Subtitle": "Last 7 Days",
            "Subtitle": Subtitle,
            // "SeriesColor": ["#1a75ff", "#3a8865", "#f83953", "#ce5c08"],
            "SeriesTitles": ["Net Value"],
            "Title": `$13.69 ${currency}`
        }
    }
    return y;
}
