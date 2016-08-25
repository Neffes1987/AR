//store.js
import {createStore} from 'redux'
import {reducer} from './reducer'

export default function MakeStore(){return createStore(reducer);}
