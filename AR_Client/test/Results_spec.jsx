//Results_spec.jsx
import Log from '../src/components/Log'
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


describe('Events component',()=>{

	it('Создается правильно',()=>{
		const component = renderIntoDocument(<Log />);

		const div = scryRenderedDOMComponentsWithClass(component,'Log');

		expect(div[0].textContent).to.ok;
	});
});

