//lut.jsx
import {Map} from 'immutable'

let initialState = Map({
	lutList:Map({
		1:Map({
			label:'Граната',
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
			label:'Меч Кладунец',
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
			label:'Бластер',
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
			label:'100 золотых',
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




function lut(state = initialState, action) {
    switch (action.type) {
        default: return state
    }
}

export default lut
