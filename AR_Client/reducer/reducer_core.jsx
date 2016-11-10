//reducer_core.jsx

export function insertInMap(state,path,value) {return state.setIn(path,value)}

export function insertInList(state,path,act,value) {
	let listValue = state.getIn(path);
	console.log('listValue ',listValue );
	let newList;
	switch(act){
		case 'add':
			newList = listValue.push(value);
			break;
		case 'delete':
			const pos= listValue.indexOf(value)
			newList = listValue.splice(pos,1);
			break;
		default: newList = listValue;
	}
	return state.setIn(path,newList)
	}

export function changeMap(state,path,act,value) {
	let mapValue;
	switch(act){
		case 'add':
			mapValue=state.getIn(path).setIn(['new'],value);
		break;
		case 'delete':
			mapValue=state.getIn(path).remove(value);
			console.log('mapValue',mapValue.has(value));
		break;
		default: state;
	}

	return state.setIn(path,mapValue)
	}



