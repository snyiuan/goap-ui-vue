import {
    ADDCONDITION, REMOVECONDITION,
    ADDTASK, REMOVETASK,
    ADDACTION, REMOVEACTION,
    ADDGOAL,
    ADDPRECONDITION, REMOVEPRECONDITION,
    ADDPOSTCONDITION, REMOVEPOSTCONDITION,
    ADDWORLDSTATE,
    SETMAINTASK,
    CHANGECONDITION,
    GENERATERESULTS,
    REMOVEWORLDSTATE
} from "./mutations-type"
import { Action, State, plan_ui } from '../generate/kgoap.esm'

export default {
    [ADDCONDITION](state, { name, vue }) {
        if (state.conditions.find(val => val.name === name)) {
            vue.$message.info("Repeat conditions!")
        } else {
            state.conditions.push({ name: name, repeated: false });
        }
    },
    [REMOVECONDITION](state, { index }) {
        const { stateActions, conditions, tasks } = state
        stateActions.forEach(item => {
            for (let i = 0; i < item.preConditions.length; i++) {
                if (item.preConditions[i].index === index) {
                    item.preConditions.splice(i, 1);
                    i--;
                } else if (item.preConditions[i].index > index) {
                    item.preConditions[i].index--;
                }
            }
            for (let i = 0; i < item.postConditions.length; i++) {
                if (item.postConditions[i].index === index) {
                    item.postConditions.splice(i, 1);
                    i--;
                } else if (item.postConditions[i].index > index) {
                    item.postConditions[i].index--;
                }
            }
        })
        tasks.forEach(task => {
            for (let i = 0; i < task.goalConditions.length; i++) {
                if (task.goalConditions[i].index === index) {
                    console.log('splice');
                    task.goalConditions.splice(i, 1);
                    i--;
                } else if (task.goalConditions[i].index > index) {
                    console.log('------');
                    task.goalConditions[i].index--;
                }
            }
        })
        conditions.splice(index, 1);

    },
    [CHANGECONDITION](state, { conditionIndex, conditionName, vue }) {
        const { conditions } = state
        if (conditions.find(val => val.name === conditionName)) {
            vue.$message.info("Repeat conditions.")
        } else {
            conditions[conditionIndex].name = conditionName
        }
    },
    [ADDGOAL](state, { taskIndex, targetIndex, vue }) {
        if (state.tasks[taskIndex].goalConditions.find(val => val.index === targetIndex)) {
            vue.$message.info('Goal conditions are repeated!')
        } else {
            state.tasks[taskIndex].goalConditions.push({ index: targetIndex, checked: false })
            state.tasks[taskIndex].goalConditions.sort((o, n) => o.index - n.index);
        }
    },
    [ADDPRECONDITION](state, { actionIndex, targetIndex, vue }) {
        if (state.stateActions[actionIndex].preConditions.find(val => val.index === targetIndex)) {
            vue.$message.info("Pre Conditions are repeted");
        } else {
            state.stateActions[actionIndex].preConditions.push({ index: targetIndex, checked: false });
            state.stateActions[actionIndex].preConditions.sort((o, n) => o.index - n.index);
        }
    },
    [REMOVEPRECONDITION](state, { actionIndex, targetIndex }) {
        state.stateActions[actionIndex].preConditions.splice(targetIndex, 1);
    },
    [REMOVEPOSTCONDITION](state, { actionIndex, targetIndex }) {
        state.stateActions[actionIndex].postConditions.splice(targetIndex, 1)
    },
    [ADDPOSTCONDITION](state, { actionIndex, targetIndex, vue }) {
        if (state.stateActions[actionIndex].postConditions.find(val => val.index === targetIndex)) {
            vue.$message.info("Pre Conditions are repeted");
        } else {
            state.stateActions[actionIndex].postConditions.push({ index: targetIndex, checked: false });
            state.stateActions[actionIndex].postConditions.sort((o, n) => o.index - n.index);
        }
    },
    [ADDTASK](state, name) {
        state.tasks.push({ name, main: false, goalConditions: [] });
    },
    [REMOVETASK](state, { taskIndex }) {
        state.tasks.splice(taskIndex, 1);
    },
    [SETMAINTASK](state, { taskIndex }) {
        let { tasks } = state
        for (let i = 0; i < tasks.length; i++) {
            if (i === taskIndex) {
                tasks[i].main = !tasks[i].main;
            } else {
                tasks[i].main = false;
            }
        }
    },
    [ADDACTION](state, name) {
        state.stateActions.push({ name, cost: 0, preConditions: [], postConditions: [] });
    },
    [REMOVEACTION](state, { actionIndex }) {
        state.stateActions.splice(actionIndex, 1);
    },
    [ADDWORLDSTATE](state, { targetIndex, vue }) {
        if (state.worldStates.find(val => val.index === targetIndex)) {
            vue.$message.info('states are repeated!', 1)
        } else {
            state.worldStates.push({ index: targetIndex, checked: false });
            state.worldStates.sort((o, n) => o.index - n.index);
        }
    },
    [REMOVEWORLDSTATE](state, { index }) {
        state.worldStates.splice(index, 1);
    },
    [GENERATERESULTS](state, { vue }) {
        const { worldStates, conditions, tasks, stateActions } = state
        let initial_state = new State();
        let goal_state = new State();
        let allowed_actions = new Array;
        worldStates.forEach(val => {
            initial_state.set(conditions[val.index].name, val.checked)
        })

        tasks.forEach(task => {
            if (task.main) {
                task.goalConditions.forEach(val => {
                    goal_state.set(conditions[val.index].name, val.checked)
                })
            }
        })
        console.log('goalstate', goal_state);
        if (goal_state.size === 0) {
            vue.$message.info('Please select a main tasks', 1)
        }
        stateActions.forEach(v => {
            let pre_conditions = new State();
            let post_conditions = new State();
            v.preConditions.forEach(pre => {
                pre_conditions.set(conditions[pre.index].name, pre.checked);
            })
            v.postConditions.forEach(post => {
                post_conditions.set(conditions[post.index].name, post.checked);
            })
            allowed_actions.push(new Action(v.name, v.cost, pre_conditions, post_conditions));
        })
        var results = plan_ui(initial_state, goal_state, allowed_actions)
        state.results = results;
    }
}

// export declare class State extends Map<string, any> {
//     get(key: string): any;
//     insert(key: string, val: any): this;
// }
// export declare class Action {
//     name: string;
//     cost: number;
//     pre_conditions: State;
//     post_conditions: State;
//     constructor(name: string, cost: number, pre_conditions: State, post_conditions: State);
// }
// export declare function plan(initial_state: State, goal_state: State, allowed_actions: Array<Action>): Array<string>;