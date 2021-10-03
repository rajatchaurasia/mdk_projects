
var clientAPI;

/**
 * Describe this function...
 */
export default function SetUserMapType(clientAPI) {
    var mapType = "";
        try {
        mapType = JSON.parse(clientAPI.nativescript.appSettingsModule.getString("mapType"))["mapType"];

    }
    catch(err){
var mapType ="Hybrid";
    };
    clientAPI.evaluateTargetPath("#Page:AppConfig/#Control:FormCellSegmentedControl1").setValue(mapType,false);

    
}
