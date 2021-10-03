
var clientAPI;

/**
 * Describe this function...
 */
export default function RedrawMap(clientAPI) {
    var mapType = "";
    try {
        mapType = JSON.parse(clientAPI.nativescript.appSettingsModule.getString("mapType"))["mapType"];

    }
    catch(err){

    };
    var dialogs = clientAPI.nativescript.uiDialogsModule;
    // dialogs.alert("RedrawMap "+mapType)


    var map = {
        "United States": {
            "City": "United States",
            "Country": "USA",
            "FirstName": "Steve",
            "HouseNumber": "351",
            "LastName": mapType, "MapType": mapType
        },

        "Mexico": {
            "City": "México",
            "Country": "MX",
            "FirstName": "Danilo",
            "HouseNumber": "253",
            "LastName": mapType, "MapType": mapType
        },
        "Brazil": {
            "City": "Brazil",
            "Country": "BR",
            "FirstName": "",
            "HouseNumber": "",
            "LastName": mapType, "MapType": mapType
        },
        "Canada": {
            "City": "Canada",
            "Country": "CA",
            "FirstName": "",
            "HouseNumber": "",
            "LastName": mapType, "MapType": mapType
        },
        "Argentina": {
            "City": "Argentina",
            "Country": "AR",
            "FirstName": "",
            "HouseNumber": "",
            "LastName": mapType, "MapType": mapType
        },
        "Bolivia": {
            "City": "Bolivia",
            "Country": "BO",
            "FirstName": "",
            "HouseNumber": "",
            "LastName": mapType, "MapType": mapType
        },
        "Chile": {
            "City": "Chile",
            "Country": "CL",
            "FirstName": "",
            "HouseNumber": "",
            "LastName": mapType, "MapType": mapType
        },
        "Colombia": {
            "City": "Colombia",
            "Country": "CO",
            "FirstName": "",
            "HouseNumber": "",
            "LastName": mapType, "MapType": mapType
        },
        "Ecuador": {
            "City": "Ecuador",
            "Country": "EC",
            "FirstName": "",
            "HouseNumber": "",
            "LastName": mapType, "MapType": mapType
        },
        "Panama": {
            "City": "Panama",
            "Country": "PA",
            "FirstName": "",
            "HouseNumber": "",
            "LastName": mapType, "MapType": mapType
        },
        "Paraguay": {
            "City": "Paraguay",
            "Country": "PY",
            "FirstName": "",
            "HouseNumber": "",
            "LastName": mapType, "MapType": mapType
        },
        "Peru": {
            "City": "Peru",
            "Country": "PE",
            "FirstName": "",
            "HouseNumber": "",
            "LastName": mapType, "MapType": mapType
        },
        "Uruguay": {
            "City": "Uruguay",
            "Country": "UY",
            "FirstName": "",
            "HouseNumber": "",
            "LastName": mapType, "MapType": mapType
        },
        "Venezuela": {
            "City": "Venezuela",
            "Country": "VE",
            "FirstName": "",
            "HouseNumber": "",
            "LastName": mapType, "MapType": mapType
        }

    }

    //     }

    clientAPI.nativescript.appSettingsModule.setString("SelectedChartConfig", JSON.stringify(



        map[clientAPI.evaluateTargetPath('#Page:Main/#Control:FormCellListPicker0/#Value')[0].ReturnValue]
    ))

    clientAPI.evaluateTargetPath("#Page:Main").context.clientAPI.getControl("SectionedTable0").redraw()

}
