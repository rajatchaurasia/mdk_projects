
var clientAPI;

/**
 * Describe this function...
 */
export default function OverdueQuarter(clientAPI) {
    let oSelectedFilter = JSON.parse(clientAPI.nativescript.appSettingsModule.getString("SelectedFilter"));
    let sLocation = JSON.parse(clientAPI.nativescript.appSettingsModule.getString("SelectedChartConfig")).City
    let currency = "";
    var y;
    
    var CategoryTitles = [], Subtitle, Data = [];
    if (oSelectedFilter.QuarterValue === "Q1") {
        // CategoryTitles = ["January", "February", "March"];
        Subtitle = "1st Quarter";
       Data = [[822.74, 21.18, 5.11, 2.82, 2.71, 2.27, 2.1, 1.57, 0.98, 0.86]];
    } else {
        // CategoryTitles = ["May", "June", "July", "August"];
        Subtitle = "Last 90 Days";
        Data = [[922.74, 11.18, 5.11, 2.82, 2.71, 2.27, 2.1, 1.57, 0.98, 0.86]];
    }
    
    let dialogs = clientAPI.nativescript.uiDialogsModule;
    if (sLocation == "México") {
        currency = "MXN"
        y = {
            // "CategoryTitles": ["ROSS STORES INC", "DISTRIBUIDORA LIVERPOOL S A DE C V", "LEVI STRAUSS CHILE LIMITADA", "COPPEL S A DE C V", "MULTIBRAND OUTLET STORES SAPI DE CV", "LEVI BATWING PERU S R L", "NUEVA WALMART DE MEXICO S DE R L DE CV", "INTERNATIONAL APAREL CORP", "SEARS OPERADORA MEXICO  S A DE C V", "AL PALACIO DE HEIRRO S A"],
            // "CategoryTitles": ["11th Aug"],
            "CategoryTitles": ["ROSS STORES INC", "DISTRIBUIDORA LIVERPOOL", "LEVI STRAUSS CHILE", "COPPEL", "MULTIBRAND OUTLET SAPI", "LEVI BATWING PERU", "NUEVA WALMART MEXICO", "INTERNATIONAL APAREL CORP", "SEARS OPERADORA MEXICO", "AL PALACIO DE HEIRRO"],
            "ChartType": oSelectedFilter.Quarter,
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
        currency = "USD"
        y = {
            // "CategoryTitles": ["ROSS STORES INC", "DISTRIBUIDORA LIVERPOOL S A DE C V", "LEVI STRAUSS CHILE LIMITADA", "COPPEL S A DE C V", "MULTIBRAND OUTLET STORES SAPI DE CV", "LEVI BATWING PERU S R L", "NUEVA WALMART DE MEXICO S DE R L DE CV", "INTERNATIONAL APAREL CORP", "SEARS OPERADORA MEXICO  S A DE C V", "AL PALACIO DE HEIRRO S A"],
            // "CategoryTitles": ["11th Aug"],
            "CategoryTitles": ["ROSS STORES INC", "DISTRIBUIDORA LIVERPOOL", "LEVI STRAUSS CHILE", "COPPEL", "MULTIBRAND OUTLET SAPI", "LEVI BATWING PERU", "NUEVA WALMART MEXICO", "INTERNATIONAL APAREL CORP", "SEARS OPERADORA MEXICO", "AL PALACIO DE HEIRRO"],
            "ChartType": oSelectedFilter.Quarter,
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
    // dialogs.alert(currency);

    return y;

}
