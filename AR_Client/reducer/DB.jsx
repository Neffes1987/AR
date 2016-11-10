//DB.jsx
import {Map,List} from 'immutable'
import {insertInMap,insertInList,changeMap} from './reducer_core'

let initialState = Map({
	DBList:Map({
		1:Map({
			fname:'Вячеслав',
			lname:'Новицкий',
			role: List(['1','3']),
			contacts: Map({
				mail:'neffes@yandex.ru',
				phone:'89042513838',
				skype:'neffes_',
				social:'vk'
			}),
			login:'Neffes',
			password:'Пароль',
			gameName:'Игровое Имя',
			gameClass:'Игровой класс',
			gameGuild:'Гильдия,группа',
			gameChar:Map({1:12,2:13,3:6}),
			gameLut:Map({1:1200,2:13,3:6})
		}),
		2:Map({
			fname:'Виктория',
			lname:'Татаринцева',
			role: List(['1','4']),
			contacts: Map({
				mail:'duduke@yandex.ru',
				phone:'89042514040',
				skype:'duduka',
				social:'vk'
			}),
			login:'Duduka',
			password:'Пароль',
			gameName:'Игровое Имя',
			gameClass:'Убийца',
			gameGuild:'Гильдия,группа',
			gameChar:Map({1:12,2:13,3:6}),
			gameLut:Map({1:1200,2:13,3:6})
		})
	}),
	roles:Map({
		1:'Администратор',
		2:'Модератор',
		3:'Мастер',
		4:'Игротехник',
		5:'Игрок'
	}),
	filterValue:'',
	editItem:'0'
})

function DB(state = initialState, action) {
    switch (action.type) {
		case 'DB_INPUT_CHANGE': return insertInMap(state,action.path,action.value);
		case 'DB_ARRAY_CHANGE': return insertInList(state,action.path,action.act,action.value);
		case 'DB_GROUP_CHANGE': return changeMap(state,action.path,action.act,action.value);
        default: return state
    }
}

export default DB;
