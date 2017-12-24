import {SET_ACTIVE_TAB} from "../../constants";

export function activeTab(tab = 1, action) {

    if (action.type === SET_ACTIVE_TAB) {
        return action.payload.activeTab;
    }

    return tab;
}