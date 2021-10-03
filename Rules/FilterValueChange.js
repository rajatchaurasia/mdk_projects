
var clientAPI;

/**
 * Describe this function...
 */
export default function FilterValueChange(clientAPI) {
    var dlg = clientAPI.nativescript.uiDialogsModule;
    // dlg.alert("FilterValueChange");
    var path = this._context.element._builder._defintion.parent.parent.parent.path;
    path = path.split("/")[3].split(".")[0];
    var QuarterValue = "Q" + Math.floor((new Date().getMonth()+3)/3);
    var monthNames = ["January", "February", "March", "April", "May","June","July", "August", "September", "October", "November","December"];
    var MonthValue = monthNames[new Date().getMonth()];
    var WeekValue = Math.ceil(((new Date() - new Date(new Date().getFullYear(),0,1) + 86400000)/86400000)/7)+"";
    var page;

    try {
        var oSelectedFilter = JSON.parse(clientAPI.nativescript.appSettingsModule.getString("SelectedFilter"));
        if (Object.keys(oSelectedFilter).length === 0) {

            //number of filters implemented
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

    //switch case for each filter
    switch (clientAPI.getName()) {
        case "FormCellSegmentedControl0":
            // var value = clientAPI.evaluateTargetPath("#Page:Filter/#Control:FormCellSegmentedControl0/#Value");
            page = "#Page:" + path + "/#Control:FormCellSegmentedControl0/#Value";
            var value = clientAPI.evaluateTargetPath(page);
            oSelectedFilter.Week = value[0].DisplayValue;
            break;
        case "FormCellSegmentedControl1":
            // var value1 = clientAPI.evaluateTargetPath("#Page:Filter/#Control:FormCellSegmentedControl1/#Value");
            page = "#Page:" + path + "/#Control:FormCellSegmentedControl1/#Value";
            var value1 = clientAPI.evaluateTargetPath(page);
            oSelectedFilter.Month = value1[0].DisplayValue;
            break;
        case "FormCellSegmentedControl2":
            //var value2 = clientAPI.evaluateTargetPath("#Page:Filter/#Control:FormCellSegmentedControl2/#Value");
            page = "#Page:" + path + "/#Control:FormCellSegmentedControl2/#Value";
            var value2 = clientAPI.evaluateTargetPath(page);
            oSelectedFilter.Quarter = value2[0].DisplayValue;
            break;
        case "FormCellSegmentedControl3":
            //var value3 = clientAPI.evaluateTargetPath("#Page:Filter/#Control:FormCellSegmentedControl3/#Value");
            page = "#Page:" + path + "/#Control:FormCellSegmentedControl3/#Value";
            var value3 = clientAPI.evaluateTargetPath(page);
            oSelectedFilter.Currency = value3[0].DisplayValue;
            break;
        case "FormCellListPicker0":
            page = "#Page:" + path + "/#Control:FormCellListPicker0/#Value";
            var value4 = clientAPI.evaluateTargetPath(page);
            oSelectedFilter.QuarterValue = value4[0].DisplayValue;
            break;
        case "FormCellListPicker1":
            page = "#Page:" + path + "/#Control:FormCellListPicker1/#Value";
            var value4 = clientAPI.evaluateTargetPath(page);
            oSelectedFilter.MonthValue = value4[0].DisplayValue;
            break;
        case "FormCellListPicker2":
            page = "#Page:" + path + "/#Control:FormCellListPicker2/#Value";
            var value4 = clientAPI.evaluateTargetPath(page);
            oSelectedFilter.WeekValue = value4[0].DisplayValue;
            break;                    
        default:
            break;
    }

    clientAPI.nativescript.appSettingsModule.setString("SelectedFilter", JSON.stringify(oSelectedFilter));
    // var childPage = clientAPI.currentPage._observers.navigatedFrom[0].thisArg.frame.childViews[0].id;
    // dlg.alert(childPage);
    // switch (clientAPI.currentPage.id) {
    //     case "FilterWeek":
    //         // dlg.alert("1"+clientAPI.currentPage.id);
    //         // clientAPI.evaluateTargetPath(`#Page:StatusWeek`).context.clientAPI.getControl("SectionedTable0").redraw()
    //         // clientAPI.evaluateTargetPath(`#Page:InvoiceWeek`).context.clientAPI.getControl("SectionedTable0").redraw()
    //         // clientAPI.evaluateTargetPath(`#Page:DeliveryWeek`).context.clientAPI.getControl("SectionedTable0").redraw()
    //         // clientAPI.evaluateTargetPath(`#Page:${childPage}`).context.clientAPI.getControl("SectionedTable0").redraw()

    //         break;
    //     case "FilterQuarter":
    //         // dlg.alert("3"+clientAPI.currentPage.id);
    //         // clientAPI.evaluateTargetPath(`#Page:StatusQuarter`).context.clientAPI.getControl("SectionedTable0").redraw()
    //         // clientAPI.evaluateTargetPath(`#Page:InvoiceQuarter`).context.clientAPI.getControl("SectionedTable0").redraw()
    //         // clientAPI.evaluateTargetPath(`#Page:DeliveryQuarter`).context.clientAPI.getControl("SectionedTable0").redraw()
    //         clientAPI.evaluateTargetPath(`#Page:${childPage}`).context.clientAPI.getControl("SectionedTable0").redraw()
    //         break;
    //     case "FilterMonth":
    //         // dlg.alert("2"+clientAPI.currentPage.id);
    //         // clientAPI.evaluateTargetPath(`#Page:StatusMonth`).context.clientAPI.getControl("SectionedTable0").redraw()
    //         // clientAPI.evaluateTargetPath(`#Page:InvoiceMonth`).context.clientAPI.getControl("SectionedTable0").redraw()
    //         // clientAPI.evaluateTargetPath(`#Page:DeliveryMonth`).context.clientAPI.getControl("SectionedTable0").redraw()
    //             // dlg.alert("FilterMonth");
    //         clientAPI.evaluateTargetPath(`#Page:${childPage}`).context.clientAPI.getControl("SectionedTable0").redraw()
    //         break;
    //     default:
    //         break;
    // }

     switch (clientAPI.currentPage.id) {
                    case "FilterWeek":
                        try{
                            clientAPI.evaluateTargetPath("#Page:StatusWeek").context.clientAPI.getControl("SectionedTable0").redraw();
                        }
                        catch(err){

                        }
                        try{
                            clientAPI.evaluateTargetPath("#Page:OverdueWeek").context.clientAPI.getControl("SectionedTable0").redraw();
                        }
                        catch(err){

                        }
                        try{
                            clientAPI.evaluateTargetPath("#Page:InvoiceWeek").context.clientAPI.getControl("SectionedTable0").redraw();
                        }
                        catch(err){

                        }
                        try{
                            clientAPI.evaluateTargetPath("#Page:DeliveryWeek").context.clientAPI.getControl("SectionedTable0").redraw();
                        }
                        catch(err){

                        }
                        
                       
                        break;
                    case "FilterQuarter":
                       
                        try{
                             clientAPI.evaluateTargetPath("#Page:StatusQuarter").context.clientAPI.getControl("SectionedTable0").redraw();
                        }
                        catch(err){

                        }
                        try{
                            clientAPI.evaluateTargetPath("#Page:InvoiceQuarter").context.clientAPI.getControl("SectionedTable0").redraw();
                        }
                        catch(err){

                        }
                        try{
                            clientAPI.evaluateTargetPath("#Page:DeliveryQuarter").context.clientAPI.getControl("SectionedTable0").redraw();
                        }
                        catch(err){

                        }
                        try{
                            clientAPI.evaluateTargetPath("#Page:OverdueQuarter").context.clientAPI.getControl("SectionedTable0").redraw();
                        }
                        catch(err){

                        }
                        break;
                    case "FilterMonth":
                        
                        try{
                             clientAPI.evaluateTargetPath("#Page:StatusMonth").context.clientAPI.getControl("SectionedTable0").redraw();
                        }
                        catch(err){

                        }
                        try{
                            clientAPI.evaluateTargetPath("#Page:InvoiceMonth").context.clientAPI.getControl("SectionedTable0").redraw();
                        }
                        catch(err){

                        }
                        try{
                            clientAPI.evaluateTargetPath("#Page:DeliveryMonth").context.clientAPI.getControl("SectionedTable0").redraw();
                        }
                        catch(err){

                        }
                        try{
                            clientAPI.evaluateTargetPath("#Page:OverdueMonth").context.clientAPI.getControl("SectionedTable0").redraw();
                        }
                        catch(err){

                        }
                        break;
                    default:
                        break;
                    }

                    clientAPI.evaluateTargetPath("#Page:" + clientAPI.currentPage.id).context.clientAPI.getControl("SectionedTable0").redraw();

    // clientAPI.evaluateTargetPath(`#Page:${clientAPI.currentPage.id}`).context.clientAPI.getControl("SectionedTable0").redraw()
    // dlg.alert("Out "+clientAPI.currentPage.id);
}
