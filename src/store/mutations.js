import { ADDCONDITION, REMOVECONDITION, REMOVETASK, ADDACTION, REMOVEACTION, ADDTASK, ADDGOAL, ADDPRECONDITION, ADDPOSTCONDITION } from "./mutations-type"

export default {
    [ADDCONDITION](state, data) {
        state.conditions.push(data);
    },
    [REMOVECONDITION](state, { index }) {
        state.stateActions.forEach(function (action) {
            action.preConditions = action.preConditions.filter(function (val) {
                return val.conditionIndex != index;
            })
            action.postConditions = action.postConditions.filter(function (val) {
                return val.conditionIndex != index;
            })
        })
        console.log("before", state.tasks);
        state.tasks.forEach(function (task) {
            task.goalConditions = task.goalConditions.filter(function (val) {
                return val.conditionIndex != index;
            })
        })
        console.log("after", state.tasks);
        console.log("conditions:", state.conditions)
        console.log("statActions:", state.stateActions)
        console.log("state", state);
        // state.conditions.splice(index, 1);


    },
    [ADDGOAL](state, { name, index, vue }) {
        state.tasks.forEach(function (task) {
            if (task.name === name) {
                let contain = false;
                task.goalConditions.forEach(function (val) {
                    if (val.conditionIndex === index) {
                        contain = true;
                    }
                });
                if (!contain) {
                    task.goalConditions.push({ conditionIndex: index, state: false })
                } else {
                    vue.$message.info("Goal Conditions are repeted")
                }
            }
        })
    },
    [ADDPRECONDITION](state, { name, index, vue }) {
        state.stateActions.forEach(function (action) {
            if (action.name === name) {
                let contain = false;
                action.preConditions.forEach(function (val) {

                    if (val.conditionIndex === index) {
                        console.log(val.conditionIndex, index)
                        contain = true;
                    }
                });
                if (!contain) {
                    action.preConditions.push({ conditionIndex: index, state: false })
                } else {
                    vue.$message.info("Pre Conditions are repeted")
                }

            }
        })
    },
    [ADDPOSTCONDITION](state, { name, index, vue }) {
        state.stateActions.forEach(function (action) {
            if (action.name === name) {
                let contain = false;
                action.postConditions.forEach(function (val) {
                    if (val.conditionIndex === index) {
                        contain = true;
                    }
                })
                if (!contain) {
                    action.postConditions.push({ conditionIndex: index, state: false })
                } else {
                    vue.$message.info("Pre Conditions are repeted")
                }
            }
        })
    },
    [ADDTASK](state, { name, vue }) {
        let contain = false;
        state.tasks.forEach(function (task) {
            if (task.name === name) {
                contain = true;
            }
        })
        if (contain) {
            vue.$message.info("Task is repeated")
        } else {
            state.tasks.push({ name: name, goalConditions: [] });
        }
    },
    [REMOVETASK](state, index) {
        state.tasks.splice(index, 1);
    },
    [ADDACTION](state, { name, vue }) {
        let contain = false;
        state.stateActions.forEach(function (action) {
            if (action.name === name) {
                contain = true;
            }
        })
        if (contain) {
            vue.$message.info("Task is repeated")
        } else {
            state.stateActions.push({ name: name, preConditions: [], postConditions: [] });
        }
    },
    [REMOVEACTION](state, index) {
        state.stateActions.splice(index, 1);
    }
}

