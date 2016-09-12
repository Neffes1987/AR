//Results_spec.jsx
import {Result} from '../src/components/Results'
import React from 'react'
import ReactDom from 'react-dom'
import {List,Map} from 'immutable'
import {expect} from 'chai'
import {
	renderIntoDocument, 				// проверка отрисовки компонента
	scryRenderedDOMComponentsWithClass,	// поиск отрисованных компонентов по тегу
	scryRenderedDOMComponentsWithTag,	// поиск отрисованных компонентов по тегу
	Simulate,						 	// симулирование нажатия на кнопку
	} from 'react-addons-test-utils'

describe('Result component',()=>{

	it('Создается правильно',()=>{
		let pair = List.of('1','2');
		let tally = Map({'1':10,'2':15});

		const component = renderIntoDocument(<Result pair={pair} tally={tally}/>);

		const div = scryRenderedDOMComponentsWithClass(component,'entry');

		expect(div[0].textContent).to.contain('10');
		expect(div[1].textContent).to.contain('15');
	});
	it('Вызывает колбэк при нажатии кнопки Next',()=>{
		let pair = List.of('1','2');
		let tally = Map({'1':10,'2':15});

		let cl=false
		function next(){
			cl=true;
		}
		const component = renderIntoDocument(<Result pair={pair} tally={tally} next={next}/>);

		const button = scryRenderedDOMComponentsWithTag(component,'button');
		Simulate.click(button[0]);

		expect(cl).to.equal(true);
	});
	it('Победитель определен',()=>{
		let pair = List.of('1','2');
		let tally = Map({'1':10,'2':15});

		const component = renderIntoDocument(<Result pair={pair} tally={tally} winner='1'/>);

		const div1 = ReactDom.findDOMNode(component.refs.winner);

		expect(div1.textContent).to.equal('Winner is 1');
	});

});

