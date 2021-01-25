import {
    ADDCONDITION, REMOVECONDITION,
    ADDTASK, REMOVETASK, SETMAINTASK,
    ADDACTION, REMOVEACTION,
    ADDGOAL,
    ADDPRECONDITION, REMOVEPRECONDITION,
    ADDPOSTCONDITION, REMOVEPOSTCONDITION,
    ADDWORLDSTATE,
} from "./mutations-type"

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
    removePreCondition({ commit }, data) {
        commit(REMOVEPRECONDITION, data);
    },
    addPostCondition({ commit }, data) {
        commit(ADDPOSTCONDITION, data);
    },
    removePostCondition({ commit }, data) {
        commit(REMOVEPOSTCONDITION, data);
    },
    addTask({ commit }, name) {
        commit(ADDTASK, name)
    },
    removeTask({ commit }, data) {
        commit(REMOVETASK, data);
    },
    setMainTask({ commit }, data) {
        commit(SETMAINTASK, data);
    },
    addAction({ commit }, name) {
        commit(ADDACTION, name);
    },
    removeAction({ commit }, data) {
        commit(REMOVEACTION, data)
    },
    addWorldState({ commit }, data) {
        commit(ADDWORLDSTATE, data)
    }
}