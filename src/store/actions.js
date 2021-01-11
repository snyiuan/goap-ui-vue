import { ADDCONDITION, REMOVECONDITION, REMOVETASK, REMOVEACTION, ADDTASK, ADDACTION } from "./mutations-type"

export default {
    addCondition({ commit }, data) {
        commit(ADDCONDITION, data);
    },
    removeCondition({ commit }, index) {
        commit(REMOVECONDITION, { index })
    },
    addTask({ commit }, task) {
        commit(ADDTASK, task)
    },
    removeTask({ commit }, index) {
        commit(REMOVETASK, index)
    },
    addAction({ commit }, action) {
        commit(ADDACTION, action);
    },
    removeAction({ commit }, index) {
        commit(REMOVEACTION, index)
    }
}