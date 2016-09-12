//Voting_spec.jsx
import {Voting} from '../src/components/Voting'
import React from 'react'
import ReactDom from 'react-dom'
import {List} from 'immutable'
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
	it('Отключить кнопку после голосования',()=>{
		const component = renderIntoDocument(<Voting pair={['1','2']} hasVoted={'1'}/>);
		const buttons = scryRenderedDOMComponentsWithTag(component,'button');
		expect(buttons[1].hasAttribute('disabled')).to.equal(true);
		expect(buttons[0].hasAttribute('disabled')).to.equal(true);

	});
	it('Запись только у кнопки которую нажали',()=>{
		const component = renderIntoDocument(<Voting pair={['1','2']} hasVoted={'1'}/>);
		const buttons = scryRenderedDOMComponentsWithTag(component,'button');
		expect(buttons[0].textContent).to.contain('Voted');
		expect(buttons[1].textContent).to.not.contain('Voted');

	});
	it('Есть победитель',()=>{
		const component = renderIntoDocument(<Voting pair={['1','2']} hasVoted={'1'} winner={'1'}/>);
		const buttons = scryRenderedDOMComponentsWithTag(component,'button');
		expect(buttons.length).to.equal(0);
		const winner = ReactDom.findDOMNode(component.refs.winner);
		expect(winner.textContent).to.contain('Winner');

	});
	it('Это чистый компонент',()=>{
		let pair = ['1','2'];
		const container = document.createElement('div');

		let component = ReactDom.render(<Voting pair={pair}/>,container);
		let firstBtn = scryRenderedDOMComponentsWithTag(component,'button')[0];

		expect(firstBtn.textContent).to.equal('1');

		pair[0]='3';

		component = ReactDom.render(<Voting pair={pair}/>,container);
		firstBtn = scryRenderedDOMComponentsWithTag(component,'button')[0];
		expect(firstBtn.textContent).to.equal('1');

	});
	it('Обновляет при обновлении свойства',()=>{
		let pair = List.of('1','2');
		const container = document.createElement('div');

		let component = ReactDom.render(<Voting pair={pair}/>,container);
		let firstBtn = scryRenderedDOMComponentsWithTag(component,'button')[0];

		expect(firstBtn.textContent).to.equal('1');

		const newPair=pair.set(0,'3');

		component = ReactDom.render(<Voting pair={newPair}/>,container);
		firstBtn = scryRenderedDOMComponentsWithTag(component,'button')[0];
		expect(firstBtn.textContent).to.equal('3');

	});

});

