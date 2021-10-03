
var clientAPI;

/**
 * Describe this function...
 */
export default function GetCaption(clientAPI) {
    return JSON.parse(clientAPI.nativescript.appSettingsModule.getString("SelectedChartConfig")).City;
}
