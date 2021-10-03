
var clientAPI;

/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function SetVisibility(clientAPI) {
	var test ="";
	var g =  clientAPI.evaluateTargetPath("#Page:Filter/#Control:FormCellSegmentedControl32").getValue()[0].DisplayValue;
	
	if(g=="Monthly"){
		clientAPI.evaluateTargetPath("#Page:Filter/#Control:FormCellListPicker1").setVisible(true);
		clientAPI.evaluateTargetPath("#Page:Filter/#Control:FormCellListPicker0").setVisible(false);
		clientAPI.evaluateTargetPath("#Page:Filter/#Control:FormCellListPicker2").setVisible(false);
	}
	else if(g=="Weekly"){
				clientAPI.evaluateTargetPath("#Page:Filter/#Control:FormCellListPicker1").setVisible(false);
		clientAPI.evaluateTargetPath("#Page:Filter/#Control:FormCellListPicker0").setVisible(false);
		clientAPI.evaluateTargetPath("#Page:Filter/#Control:FormCellListPicker2").setVisible(true);
	}else{
				clientAPI.evaluateTargetPath("#Page:Filter/#Control:FormCellListPicker1").setVisible(false);
		clientAPI.evaluateTargetPath("#Page:Filter/#Control:FormCellListPicker0").setVisible(true);
		clientAPI.evaluateTargetPath("#Page:Filter/#Control:FormCellListPicker2").setVisible(false);
	}
	clientAPI.evaluateTargetPath("#Page:" + clientAPI.currentPage.id).context.clientAPI.getControl("SectionedTable0").redraw();
}
