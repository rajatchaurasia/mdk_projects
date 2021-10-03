
var clientAPI;

/**
 * Describe this function...
 */
export default function FilterPageLoad(clientAPI) {

    var path = this._context.element._definition.path;
    path = path.split("/")[3].split(".")[0];

    var QuarterValue = "Q" + Math.floor((new Date().getMonth()+3)/3);
    var monthNames = ["January", "February", "March", "April", "May","June","July", "August", "September", "October", "November","December"];
    var MonthValue = monthNames[new Date().getMonth()];
    var WeekValue = Math.ceil(((new Date() - new Date(new Date().getFullYear(),0,1) + 86400000)/86400000)/7)+"";

    try {
        var oSelectedFilter = JSON.parse(clientAPI.nativescript.appSettingsModule.getString("SelectedFilter"));
        if (Object.keys(oSelectedFilter).length===0) {
            clientAPI.nativescript.appSettingsModule.setString("SelectedFilter", JSON.stringify({
                "Week": "",
                "Month": "",
                "Quarter": "",
                "Currency": "",
                "QuarterValue": QuarterValue,
                "MonthValue": MonthValue,
                "WeekValue": WeekValue
            }))
        }
    } catch (error) {

        clientAPI.nativescript.appSettingsModule.setString("SelectedFilter", JSON.stringify({
            "Week": "Line",
            "Month": "Line",
            "Quarter": "Line",
            "Currency": "",
            "QuarterValue": QuarterValue,
            "MonthValue": MonthValue,
            "WeekValue": WeekValue
        }))
        var oSelectedFilter = JSON.parse(clientAPI.nativescript.appSettingsModule.getString("SelectedFilter"));
    }


    // clientAPI.evaluateTargetPath("#Page:Filter/#Control:FormCellSegmentedControl0").setValue(oSelectedFilter.Week);
    // clientAPI.evaluateTargetPath("#Page:Filter/#Control:FormCellSegmentedControl1").setValue(oSelectedFilter.Month);
    // clientAPI.evaluateTargetPath("#Page:Filter/#Control:FormCellSegmentedControl2").setValue(oSelectedFilter.Quarter);
    // clientAPI.evaluateTargetPath("#Page:Filter/#Control:FormCellSegmentedControl3").setValue(oSelectedFilter.Currency);
    if (path === "Filter") {
        clientAPI.evaluateTargetPath("#Page:"+path+"/#Control:FormCellSegmentedControl0").setValue(oSelectedFilter.Week,false);
        clientAPI.evaluateTargetPath("#Page:"+path+"/#Control:FormCellSegmentedControl1").setValue(oSelectedFilter.Month, false);
        clientAPI.evaluateTargetPath("#Page:"+path+"/#Control:FormCellSegmentedControl2").setValue(oSelectedFilter.Quarter, false);
        // clientAPI.evaluateTargetPath("#Page:"+path+"/#Control:FormCellSegmentedControl3").setValue(oSelectedFilter.Currency, false);
        clientAPI.evaluateTargetPath("#Page:"+path+"/#Control:FormCellListPicker0").setValue(oSelectedFilter.QuarterValue, false);
        clientAPI.evaluateTargetPath("#Page:"+path+"/#Control:FormCellListPicker1").setValue(oSelectedFilter.MonthValue, false);
        clientAPI.evaluateTargetPath("#Page:"+path+"/#Control:FormCellListPicker2").setValue(oSelectedFilter.WeekValue, false);
    } else if (path === "FilterWeek") {
        clientAPI.evaluateTargetPath("#Page:"+path+"/#Control:FormCellSegmentedControl0").setValue(oSelectedFilter.Week, false);
        // clientAPI.evaluateTargetPath("#Page:"+path+"/#Control:FormCellSegmentedControl3").setValue(oSelectedFilter.Currency, false);
        clientAPI.evaluateTargetPath("#Page:"+path+"/#Control:FormCellListPicker2").setValue(oSelectedFilter.WeekValue, false);
    } else if (path === "FilterMonth") {
        clientAPI.evaluateTargetPath("#Page:"+path+"/#Control:FormCellSegmentedControl1").setValue(oSelectedFilter.Month, false);
        // clientAPI.evaluateTargetPath("#Page:"+path+"/#Control:FormCellSegmentedControl3").setValue(oSelectedFilter.Currency, false);
        clientAPI.evaluateTargetPath("#Page:"+path+"/#Control:FormCellListPicker1").setValue(oSelectedFilter.MonthValue, false);
    } else if (path === "FilterQuarter") {
        clientAPI.evaluateTargetPath("#Page:"+path+"/#Control:FormCellSegmentedControl2").setValue(oSelectedFilter.Quarter, false);
        // clientAPI.evaluateTargetPath("#Page:"+path+"/#Control:FormCellSegmentedControl3").setValue(oSelectedFilter.Currency, false);
        // clientAPI.evaluateTargetPath("#Page:"+path+"/#Control:FormCellSegmentedControl3").setValue(oSelectedFilter.QuarterValue, false);
        clientAPI.evaluateTargetPath("#Page:"+path+"/#Control:FormCellListPicker0").setValue(oSelectedFilter.QuarterValue, false);
    }

}
