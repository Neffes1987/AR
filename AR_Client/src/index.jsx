//index.js
import React from 'react'
import ReactDom from 'react-dom'
import Voting from './components/Voting'

console.log('hello? its me');

const pairs=['1','2'];

ReactDom.render(<Voting pair={pairs} hasVoted="1" winner=""/>,document.getElementById('app'));


