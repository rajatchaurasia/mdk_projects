
var clientAPI;

/**
 * Describe this function...
 */
export default function FilterChangeRender(clientAPI) {

    var dlg = clientAPI.nativescript.uiDialogsModule;
    var path = this._context.element._definition.path;
        // dlg.alert("FilterChangeRender: "+path);
    path = path.split("/")[3].split(".")[0];
    // dlg.alert(clientAPI.currentPage.id);
    // clientAPI.evaluateTargetPath("#Page:StatusMonth").context.clientAPI.getControl("SectionedTable0").redraw()
    // clientAPI.evaluateTargetPath("#Page:StatusWeek").context.clientAPI.getControl("SectionedTable0").redraw()
    // clientAPI.evaluateTargetPath("#Page:StatusQuarter").context.clientAPI.getControl("SectionedTable0").redraw()
    //    dlg.alert(`#Page:${clientAPI.currentPage.id}`);
    clientAPI.evaluateTargetPath(`#Page:${clientAPI.currentPage.id}`).context.clientAPI.getControl("SectionedTable0").redraw()
    // clientAPI.evaluateTargetPath("#Page:"+path).context.clientAPI.getControl("SectionedTable0").redraw()
    // dlg.alert(clientAPI.nativescript.appSettingsModule.getString("SelectedFilter"))
    

}
