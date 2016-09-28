//action_creator.js

export function actionInputChange(path,value) {return {type:'INPUT_CHANGE',value,path}}

export function actionDelete(path,act,value) {return {type:'ACTION_DELETE',value,path,act}}

export function actionArrayChange(path,act,value) {return {type:'ARRAY_CHANGE',value,path,act}}


export function gallaryInputChange(path,value) {return {type:'GALL_INPUT_CHANGE',value,path}}

export function gallaryListChange(path,act,value) {return {type:'GALL_ARRAY_CHANGE',value,path,act}}


export function eventsInputChange(path,value) {return {type:'EVENTS_INPUT_CHANGE',value,path}}

export function eventsListChange(path,act,value) {return {type:'EVENTS_ARRAY_CHANGE',value,path,act}}

export function eventsGChange(path,value) {return {type:'EVENTS_GROUP_CHANGE',value,path,act}}
