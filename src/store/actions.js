import { ADDCONDITION, REMOVECONDITION, REMOVETASK, REMOVEACTION, ADDTASK, ADDACTION, ADDGOAL, ADDPRECONDITION, ADDPOSTCONDITION } from "./mutations-type"

export default {
    addCondition({ commit }, data) {
        commit(ADDCONDITION, data);
    },
    removeCondition({ commit }, index) {
        commit(REMOVECONDITION, { index })
    },
    addGoal({ commit }, data) {
        commit(ADDGOAL, data);
    },
    addPreCondition({ commit }, data) {
        commit(ADDPRECONDITION, data);
    },
    addPostCondition({ commit }, data) {
        commit(ADDPOSTCONDITION, data);
    },
    addTask({ commit }, data) {
        commit(ADDTASK, data)
    },
    removeTask({ commit }, index) {
        commit(REMOVETASK, index);
    },
    addAction({ commit }, action) {
        commit(ADDACTION, action);
    },
    removeAction({ commit }, index) {
        commit(REMOVEACTION, index)
    }
}