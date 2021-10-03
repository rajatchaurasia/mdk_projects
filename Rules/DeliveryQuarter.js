
var clientAPI;

/**
 * Describe this function...
 */
export default function DeliveryQuarter(clientAPI) {
    let oSelectedFilter = JSON.parse(clientAPI.nativescript.appSettingsModule.getString("SelectedFilter"));
    let sLocation = JSON.parse(clientAPI.nativescript.appSettingsModule.getString("SelectedChartConfig")).City
    let currency = "";
    var y;

    var CategoryTitles = [], Subtitle, Data = [];
    if (oSelectedFilter.QuarterValue === "Q1") {
        CategoryTitles = ["Jan 2021", "Feb 2021", "Mar 2021"];
        Subtitle = "1st Quarter";
        Data = [[13.04, 5.65, 18.77], [5.65, 13.04, 18.77]]
    } else {
        CategoryTitles = ["May 2021", "June 2021", "July 2021"];
        Subtitle = "Last 90 Days";
        Data = [[5.65, 13.04, 18.77], [5.65, 13.04, 18.77]]
    }

    if (sLocation == "México") {
        currency = "MXN";
        y = {
           "CategoryTitles": ["May 2021", "June 2021", "July 2021"],
            "ChartType": oSelectedFilter.Quarter,
            "Currency": `${currency}`,
            "Metric": "74.92K",
            "LeadingUnit": "",
            "CategoryAxis": "Month Year",
            "Data": [[5.65, 13.04, 18.77], [5.65, 13.04, 18.77]],
            "Subtitle": "Last 30 Days",
            // "SeriesColor": ["#1a75ff", "#3a8865", "#f83953", "#ce5c08"],
            "SeriesTitles": ["Requested Value", "Committed Value"],
            "Title": `74.92K ${currency}`
        }
    }
    else {
        currency = "USD";
        y = {
            "CategoryTitles": CategoryTitles,//["May 2021", "June 2021", "July 2021"],
            "ChartType": oSelectedFilter.Quarter,
            "Currency": `${currency}`,
            "Metric": "3128.48",
            "LeadingUnit": "$",
            "CategoryAxis": "Month Year",
            "Data": Data,//[[225.9, 587.6, 750.74], [225.9, 587.6, 750.74]],
            "Subtitle": Subtitle,//"Last 30 Days",
            // "SeriesColor": ["#1a75ff", "#3a8865", "#f83953", "#ce5c08"],
            "SeriesTitles": ["Requested Value", "Committed Value"],
            "Title": `$3128.48 ${currency}`
        }
    }
    return y;
}
