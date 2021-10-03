
var clientAPI;

/**
 * Describe this function...
 */
export default function RedrawHomePage(clientAPI) {
     clientAPI.evaluateTargetPath("#Page:Main").context.clientAPI.getControl("SectionedTable0").redraw()
}
