
var clientAPI;

/**
 * Describe this function...
 */
export default function GetChartData(clientAPI) {
      var v = {
            "CategoryTitles": ["March", "April", "May"],
            "AggregateItems": [3,6,9],

            "ChartType": "Column",

            "SeriesTitles": [
                "Open",
                "In Process",
                "Completed"
            ],
            "SeriesColor": [
                "#5796db",
                "#ea7636",
                "#1aab70"
            ],

            "Data": [[1000,1100,1250],[2000,1200,800],[500,300,500]]
        };

        return v;
}
