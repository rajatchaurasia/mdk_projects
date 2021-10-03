
var clientAPI;

/**
 * Describe this function...
 */
export default function OverdueWeek(clientAPI) {
    let oSelectedFilter = JSON.parse(clientAPI.nativescript.appSettingsModule.getString("SelectedFilter"));
    let sLocation = JSON.parse(clientAPI.nativescript.appSettingsModule.getString("SelectedChartConfig")).City
    let currency = "";
    var y;
    var CategoryTitles = [], Subtitle, Data = [];
    if (oSelectedFilter.WeekValue === "CW5") {
        // CategoryTitles = ["31 Jan", "1 Feb", "4 Feb", "5 Feb"];
        Subtitle = "Week Number 5";
        Data = [[622.74, 41.18, 5.11, 2.82, 2.71, 2.27, 2.1, 1.57, 0.98, 0.86]];
    } else if (oSelectedFilter.WeekValue === "CW15") {
        // CategoryTitles = ["11 April", "13 April", "15 April", "17 April"];
        Subtitle = "Week Number 15";
        Data = [[722.74, 31.18, 5.11, 2.82, 2.71, 2.27, 2.1, 1.57, 0.98, 0.86]];
    } else if (oSelectedFilter.WeekValue === "CW25") {
        // CategoryTitles = ["20 Jun", "21 Jun", "22 Jun", "24 Jun"];
        Subtitle = "Week Number 25";
        Data = [[822.74, 21.18, 5.11, 2.82, 2.71, 2.27, 2.1, 1.57, 0.98, 0.86]];
    } else {
        // CategoryTitles = ["6th Aug", "9th Aug", "10th Aug", "11th Aug"];
        Subtitle = "Last 7 Days";
        Data = [[922.74, 11.18, 5.11, 2.82, 2.71, 2.27, 2.1, 1.57, 0.98, 0.86]];
    }
    if (sLocation == "México") {
        currency = "MXN";

        y = {

            // "CategoryTitles": ["ROSS STORES INC", "DISTRIBUIDORA LIVERPOOL S A DE C V", "LEVI STRAUSS CHILE LIMITADA", "COPPEL S A DE C V", "MULTIBRAND OUTLET STORES SAPI DE CV", "LEVI BATWING PERU S R L", "NUEVA WALMART DE MEXICO S DE R L DE CV", "INTERNATIONAL APAREL CORP", "SEARS OPERADORA MEXICO  S A DE C V", "AL PALACIO DE HEIRRO S A"],
            // "CategoryTitles": ["11th Aug"],
            "CategoryTitles": ["ROSS STORES INC", "DISTRIBUIDORA LIVERPOOL", "LEVI STRAUSS CHILE", "COPPEL", "MULTIBRAND OUTLET SAPI", "LEVI BATWING PERU", "NUEVA WALMART MEXICO", "INTERNATIONAL APAREL CORP", "SEARS OPERADORA MEXICO", "AL PALACIO DE HEIRRO"],
            "ChartType": oSelectedFilter.Week,
            "Currency": `${currency}`,
            "Metric": "23.8B",
            "LeadingUnit": " ",
            "CategoryAxis": "Customer",
            // "Data": [[0.00, 13.70, 0.00, 0.00], [1.98,5.11,0.00,4.33], [0.00,0.00,3.96,0.00], [0.00,0.00,0.00,0.00]],
            "Data": [[23.07, 0.28, 0.13, 0.07, 0.07, 0.06, 0.05, 0.04, 0.02, 0.02]],
            "Subtitle": "Last 7 Days",
            // "SeriesColor": ["#1a75ff", "#3a8865", "#f83953", "#ce5c08"],
            "SeriesTitles": ["Overdue Amount"],
            "Title": `23.8B ${currency}`
        }
    }
    else {
        currency = "USD";
        y = {

            // "CategoryTitles": ["ROSS STORES INC", "DISTRIBUIDORA LIVERPOOL S A DE C V", "LEVI STRAUSS CHILE LIMITADA", "COPPEL S A DE C V", "MULTIBRAND OUTLET STORES SAPI DE CV", "LEVI BATWING PERU S R L", "NUEVA WALMART DE MEXICO S DE R L DE CV", "INTERNATIONAL APAREL CORP", "SEARS OPERADORA MEXICO  S A DE C V", "AL PALACIO DE HEIRRO S A"],
            // "CategoryTitles": ["11th Aug"],
            "CategoryTitles": ["ROSS STORES INC", "DISTRIBUIDORA LIVERPOOL", "LEVI STRAUSS CHILE", "COPPEL", "MULTIBRAND OUTLET SAPI", "LEVI BATWING PERU", "NUEVA WALMART MEXICO", "INTERNATIONAL APAREL CORP", "SEARS OPERADORA MEXICO", "AL PALACIO DE HEIRRO"],
            "ChartType": oSelectedFilter.Week,
            "Currency": `${currency}`,
            "Metric": "952M",
            "LeadingUnit": "$",
            "CategoryAxis": "Customer",
            "Data": Data,//[[922.74, 11.18, 5.11, 2.82, 2.71, 2.27, 2.1, 1.57, 0.98, 0.86]],
            // "Data": [[0.00], [640], [0.00], [0.00]],
            "Subtitle": Subtitle,//"Last 7 Days",
            // "SeriesColor": ["#1a75ff", "#3a8865", "#f83953", "#ce5c08"],
            "SeriesTitles": ["Overdue Amount"],
            "Title": `$952M ${currency}`
        }
    }
    return y;
}