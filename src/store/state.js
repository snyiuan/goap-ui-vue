export default {
    items: [],
    // conditions: ['a', 'b', 'c', 'd', 'e', 'f'],
    // tasks: { arr: ['Kill the Enemy'] },
    tasks: [{ name: 'Kill the Enemy', goalConditions: [{ condition: 'a', state: false }] }, { name: 'Kill the Enemy2', goalConditions: [{ condition: 'a', state: false }] }],
    stateActions: { arr: ['a'] },
    msgs: { arr: ['a', 'b', 'c', 'd', 'e', 'f'] },
}

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

