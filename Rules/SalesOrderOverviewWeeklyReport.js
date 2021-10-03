
var clientAPI;

/**
 * Describe this function...
 */
export default function SalesOrderOverviewWeeklyReport(clientAPI) {
    let oSelectedFilter = JSON.parse(clientAPI.nativescript.appSettingsModule.getString("SelectedFilter"));
    let sLocation = JSON.parse(clientAPI.nativescript.appSettingsModule.getString("SelectedChartConfig")).City
    let currency = "";
    var y;
    var CategoryTitles = [], Subtitle, Data = [];
    if (oSelectedFilter.WeekValue === "CW5") {
        CategoryTitles = ["31 Jan", "1 Feb", "4 Feb", "5 Feb"];
        Subtitle = "Week Number 5";
        Data = [[0.67, 3.57, 5.72], [0.03, 0.08, 1.31], [0.00, 0.02, 0.06], [0.00, 0.00, 0.00]];
    } else if (oSelectedFilter.WeekValue === "CW15") {
        CategoryTitles = ["11 April", "13 April", "15 April", "17 April"];
        Subtitle = "Week Number 15";
        Data = [[0.03, 0.08, 1.31], [0.67, 3.57, 5.72], [0.00, 0.02, 0.06], [0.00, 0.00, 0.00]];
    } else if (oSelectedFilter.WeekValue === "CW25") {
        CategoryTitles = ["20 Jun", "21 Jun", "22 Jun", "24 Jun"];
        Subtitle = "Week Number 25";
        Data = [[0.00, 0.02, 0.06], [0.67, 3.57, 5.72], [0.03, 0.08, 1.31], [0.00, 0.00, 0.00]];
    } else {
        CategoryTitles = ["6th Aug", "9th Aug", "10th Aug", "11th Aug"];
        Subtitle = "Last 7 Days";
        Data = [[1.67, 3.57, 5.72], [2.03, 1.08, 1.31], [1.00, 1.02, 0.06], [1.01, 1.20, 1.00]];
    }
    
    if (sLocation == "México") {
        currency = "MXN";

        y = {

            // "CategoryTitles": ["6th Aug", "9th Aug", "10th Aug", "11th Aug"],
            "CategoryTitles": ["11th Aug"],
            "ChartType": oSelectedFilter.Week,
            "Currency": `${currency}`,
            "Metric": "16.0K",
            "LeadingUnit": "$",
            "CategoryAxis": "Date",
            // "Data": [[0.00, 13.70, 0.00, 0.00], [1.98,5.11,0.00,4.33], [0.00,0.00,3.96,0.00], [0.00,0.00,0.00,0.00]],
            "Data": [[0.00], [16.02], [0.00], [0.00]],
            "Subtitle": "Last 7 Days",
            // "SeriesColor": ["#1a75ff", "#3a8865", "#f83953", "#ce5c08"],
            "SeriesTitles": ["Open", "In Process", "Completed", "Not Relevant"],
            "Title": `$16.0K ${currency}`
        }
    }
    else {
        currency = "USD";
        y = {

            // "CategoryTitles": ["6th Aug", "9th Aug", "10th Aug", "11th Aug"],
            "CategoryTitles": CategoryTitles,
            // "CategoryTitles": ["11th Aug"],
            "ChartType": oSelectedFilter.Week,
            "Currency": `${currency}`,
            "Metric": "29.08K",
            "LeadingUnit": "$",
            "CategoryAxis": "Date",
            // "Data": [[0.00, 13.70, 0.00, 0.00], [1.98, 5.11, 0.00, 4.33], [0.00, 0.00, 3.96, 0.00], [0.00, 0.00, 0.00, 0.00]],
            "Data": Data,
            // "Data": [[0.00], [640], [0.00], [0.00]],
            // "Subtitle": "Last 7 Days",
            "Subtitle": Subtitle,
            // "SeriesColor": ["#1a75ff", "#3a8865", "#f83953", "#ce5c08"],
            "SeriesTitles": ["Open", "In Process", "Completed", "Not Relevant"],
            "Title": `$29.08K ${currency}`
        }


    }

    return y;
}
