
var clientAPI;

/**
 * Describe this function...
 */

export default function SetTheme(clientAPI) {
    var dlg = clientAPI.nativescript.uiDialogsModule;
    var theme  = clientAPI.evaluateTargetPath("#Page:AppConfig/#Control:FormCellSegmentedControl0/#SelectedValue")
    
  
    let availableThemes = clientAPI.getAvailableThemes();
  
    if(theme== "Dark"){
      
        return clientAPI.setTheme(availableThemes[0]);
     
    }
    else if(theme== "Light"){    
       
        return clientAPI.setTheme(availableThemes[1]);
        
    }
    

}
