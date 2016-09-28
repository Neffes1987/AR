//panish.jsx
import {Map} from 'immutable'

let initialState = Map({
	punishList:Map({
		1:Map({
			label:'Перелом ноги',
			id:'1',
			health:-20,
			dexterity:-40,
			force:-50,
			endurance:0,
			speed:0,
			intelligence:0,
			Wisdom:0,
			profit:100
		}),
		2:Map({
			label:'Контузия',
			id:'2',
			health:-20,
			dexterity:-40,
			force:-50,
			endurance:0,
			speed:0,
			intelligence:0,
			Wisdom:0,
			profit:100
		}),
		3:Map({
			label:'Паралич',
			id:'3',
			health:-20,
			dexterity:-40,
			force:-50,
			endurance:0,
			speed:0,
			intelligence:0,
			Wisdom:0,
			profit:100
		}),
		4:Map({
			label:'Проклят',
			id:'4',
			health:-20,
			dexterity:0,
			force:0,
			endurance:0,
			speed:0,
			intelligence:0,
			Wisdom:0,
			profit:100
		}),
	})
})




function punish(state = initialState, action) {
    switch (action.type) {
        default: return state
    }
}

export default punish
