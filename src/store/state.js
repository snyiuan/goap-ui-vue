export default {
    items: [],
    // conditions: ['a', 'b', 'c', 'd', 'e', 'f'],
    // tasks: { arr: ['Kill the Enemy'] },
    tasks: [{ name: 'Kill the Enemy', goalConditions: [] }],
    stateActions: [{ name: 'a', cost: 2, preConditions: [], postConditions: [] }],
    msgs: ['a', 'b', 'c', 'd', 'e', 'f'],
}

// tasks: [{ name: 'Kill the Enemy', goalConditions: [{ condition: 'a', state: false }] }],
/* var obj={
    arr:[
            {
                name:"Kill the Enemy",
                goalConditions:[
                                    {
                                        condition:'a',
                                        state:false
        }
    ]
    }
    ],
} */

