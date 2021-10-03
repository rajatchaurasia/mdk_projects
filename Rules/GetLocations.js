
var clientAPI;

/**
 * Describe this function...
 */
export default function GetLocations(clientAPI) {



    // try {
    //     var oSelectedChartConfig = JSON.parse(clientAPI.nativescript.appSettingsModule.getString("SelectedChartConfig"));
    //     if (Object.keys(oSelectedChartConfig).length) {
    //         clientAPI.nativescript.appSettingsModule.setString("SelectedChartConfig", JSON.stringify(

    //             {
    //                 "City": "México",
    //                 "Country": "MX",
    //                 "FirstName": "Danilo",
    //                 "HouseNumber": "253",
    //                 "LastName": "Ferreira"
    //             }
    //         ))
    //     }
    // } catch (error) {

    //     clientAPI.nativescript.appSettingsModule.setString("SelectedChartConfig", JSON.stringify(

    //         {
    //             "City": "México",
    //             "Country": "MX",
    //             "FirstName": "Danilo",
    //             "HouseNumber": "253",
    //             "LastName": "Ferreira"
    //         }

    //     ))
    //     var oSelectedChartConfig = JSON.parse(clientAPI.nativescript.appSettingsModule.getString("SelectedChartConfig"));
    // }

    return JSON.parse(clientAPI.nativescript.appSettingsModule.getString("SelectedChartConfig"));
}
