//Voting_spec.jsx
import Voting from '../src/components/Voting'
import React from 'react'
import ReactDom from 'react-dom'
import {expect} from 'chai'
import {
	renderIntoDocument, 				// проверка отрисовки компонента
	scryRenderedDOMComponentsWithTag,	// поиск отрисованных компонентов по тегу
	Simulate,						 	// симулирование нажатия на кнопку
	} from 'react-addons-test-utils'

describe('Voting component',()=>{
	it('Компонент отрисовался',()=>{
		const component = renderIntoDocument(<Voting pair={['1','2']}/>);
	});

	it('Количество компонентов = 2, названия совпадают',()=>{
		const component = renderIntoDocument(<Voting pair={['1','2']}/>);
		const buttons = scryRenderedDOMComponentsWithTag(component,'button');

		expect(buttons.length).to.equal(2);
		expect(buttons[0].textContent).to.equal('1');
		expect(buttons[1].textContent).to.equal('2');
	});

	it('Симулирование нажатия',()=>{
		let votedWith;
		const vote=(entry)=>votedWith=entry;
		const component = renderIntoDocument(<Voting pair={['1','2']} vote={vote}/>);
		const buttons = scryRenderedDOMComponentsWithTag(component,'button');
		Simulate.click(buttons[0]);

		expect(votedWith).to.equal('1');
	});
});

