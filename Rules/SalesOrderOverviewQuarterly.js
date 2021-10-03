
var clientAPI;

/**
 * Describe this function...
 */
export default function SalesOrderOverviewQuarterly(clientAPI) {
    let oSelectedFilter = JSON.parse(clientAPI.nativescript.appSettingsModule.getString("SelectedFilter"));
    let sLocation = JSON.parse(clientAPI.nativescript.appSettingsModule.getString("SelectedChartConfig")).City
    let currency = "";
    var y;
    let dialogs = clientAPI.nativescript.uiDialogsModule;
    var CategoryTitles = [], Subtitle, Data = [];
    if (oSelectedFilter.QuarterValue === "Q1") {
        CategoryTitles = ["January", "February", "March"];
        Subtitle = "1st Quarter";
        Data = [[0.03, 0.08, 1.31], [0.00, 0.02, 0.06], [0.67, 3.57, 5.72], [0.00, 0.00, 0.00]];

    } else {
        CategoryTitles = ["May", "June", "July", "August"];
        Subtitle = "Last 7 Days";
        Data = [[0.00, 0.02, 0.06, 0.00], [0.67, 3.57, 5.72, 0.01], [0.03, 0.08, 1.31, 0.00], [0.00, 0.00, 0.00, 0.00]];
    }
    if (sLocation == "México") {
        currency = "MXN"
        y = {
            "CategoryTitles": ["May", "June", "July", "August"],
            "ChartType": oSelectedFilter.Quarter,
            "Currency": `${currency}`,
            "Metric": "11.4M",
            "LeadingUnit": "$",
            "CategoryAxis": "Month Year",
            "Data": [[0.00, 0.02, 0.06, 0.00], [0.67, 3.57, 5.72, 0.01], [0.03, 0.08, 1.31, 0.00], [0.00, 0.00, 0.00, 0.00]],
            "Subtitle": "Last 7 Days",
            // "SeriesColor": ["#1a75ff", "#3a8865", "#f83953", "#ce5c08"],
            "SeriesTitles": ["Open", "In Process", "Completed", "Not Relevant"],
            "Title": `$11.4M ${currency}`
        }
    }
    else {
        currency = "USD"
        y = {
            // "CategoryTitles": ["May", "June", "July", "August"],
            "CategoryTitles": CategoryTitles,
            "ChartType": oSelectedFilter.Quarter,
            "Currency": `${currency}`,
            "Metric": "477K",
            "LeadingUnit": "$",
            "CategoryAxis": "Month Year",
            // "Data": [[0.00, 3.36, 2.53, 0.00], [30.12, 157.24, 229.76, 0.64], [0.12, 3.36, 52.53, 0.00], [0.00, 0.00, 0.00, 0.00]],
            "Data": Data,
            // "Subtitle": "Last 90 Days",
            "Subtitle" : Subtitle,
            // "SeriesColor": ["#1a75ff", "#3a8865", "#f83953", "#ce5c08"],
            "SeriesTitles": ["Open", "In Process", "Completed", "Not Relevant"],
            "Title": `$477K ${currency}`
        }
    }
    // dialogs.alert(currency);

    return y;

}
