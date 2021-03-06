//action_creator.js
//----------------------------------------INIT BLOCKS -----------------------------------------
export function setDataForBlock(type,value) {return {type,value}}
export function getRemoteData(type,id) {return {type,id,meta:'remote',fn:'find'}}
export function saveToRemoteServer(type,id,data) {return {type,id,data,meta:'remote',fn:'save'}}
//-----------------------------------------------------------------------------------------------
export function actionInputChange(path,value) {return {type:'INPUT_CHANGE',value,path}}
export function actionDelete(path,act,value) {return {type:'ACTION_DELETE',value,path,act}}
export function actionArrayChange(path,act,value) {return {type:'ARRAY_CHANGE',value,path,act}}
//-----------------------------------------------------------------------------------------------
export function gallaryInputChange(path,value) {return {type:'GALL_INPUT_CHANGE',value,path}}
export function gallaryListChange(path,act,value) {return {type:'GALL_ARRAY_CHANGE',value,path,act}}
//-----------------------------------------------------------------------------------------------
export function eventsInputChange(path,value) {return {type:'EVENTS_INPUT_CHANGE',value,path}}
export function eventsListChange(path,act,value) {return {type:'EVENTS_ARRAY_CHANGE',value,path,act}}
export function eventsGChange(path,act,value) {return {type:'EVENTS_GROUP_CHANGE',value,path,act}}
//--------------------------------------------------------------------------------------------
export function charInputChange(path,value) {return {type:'CHAR_INPUT_CHANGE',value,path}}
export function charListChange(path,act,value) {return {type:'CHAR_ARRAY_CHANGE',value,path,act}}
export function charGChange(path,act,value) {return {type:'CHAR_GROUP_CHANGE',value,path,act}}
//----------------------------------------------------------------------------------------------
export function lutInputChange(path,value) {return {type:'LUT_INPUT_CHANGE',value,path}}
export function lutListChange(path,act,value) {return {type:'LUT_ARRAY_CHANGE',value,path,act}}
export function lutGChange(path,act,value) {return {type:'LUT_GROUP_CHANGE',value,path,act}}
//---------------------------------------------------------------------------------------------
export function DBInputChange(path,value) {return {type:'DB_INPUT_CHANGE',value,path}}
export function DBListChange(path,act,value) {return {type:'DB_ARRAY_CHANGE',value,path,act}}
export function DBGChange(path,act,value) {return {type:'DB_GROUP_CHANGE',value,path,act}}
//---------------------------------------------------------------------------------------------
export function ChatInputChange(path,value) {return {type:'CHAT_INPUT_CHANGE',value,path}}
export function ChatListChange(path,act,value) {return {type:'CHAT_ARRAY_CHANGE',value,path,act}}
export function ChatGChange(path,act,value) {return {type:'CHAT_GROUP_CHANGE',value,path,act}}
//---------------------------------------------------------------------------------------------
export function Autorization(name,pass,meta) {return {type:'REMOTE_AUTORIZATION',name,pass,meta:'remote',fn:'find'}}
export function Remote_Autorization_Answer(value) {
    return {type:'SERVER_SESSION',path:['data','access'],value}}
//---------------------------------------------------------------------------------------------
export function AlertChange(path,value) {return {type:'ALERT_INPUT_CHANGE',value,path}}
//---------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------
export function SingInChange(path,value) {return {type:'SINGIN_INPUT_CHANGE',value,path}}
//-----------------------------------------------------------------------------------------------
