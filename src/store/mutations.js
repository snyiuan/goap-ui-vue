import { ADDCONDITION, REMOVECONDITION, REMOVETASK, ADDACTION, REMOVEACTION, ADDTASK } from "./mutations-type"

export default {
    [ADDCONDITION](state, data) {
        state.conditions.push(data);
    },
    [REMOVECONDITION](state, { index }) {
        state.conditions.arr.splice(index, 1);
    },
    [ADDTASK](state, task) {
        state.tasks.arr.push(task);
    },
    [REMOVETASK](state, index) {
        state.tasks.arr.splice(index, 1);
    },
    [ADDACTION](state, action) {
        state.stateActions.arr.push(action);
    },
    [REMOVEACTION](state, index) {
        state.stateActions.arr.splice(index, 1);
    }
}

