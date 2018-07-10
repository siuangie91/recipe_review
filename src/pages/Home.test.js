import React from 'react';
import { Home } from './Home';

import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

describe('Home page', () => {
	var component;
	beforeEach(() => {
		component = shallow(<Home />);
	});

	it('should include an email field and password field', () => {
		const emailField = component.find('input[name="email"]');
		const passwordField = component.find('input[name="password"]');

		expect(emailField.length).toEqual(1);
		expect(passwordField.length).toEqual(1);
	});

	describe('login button', () => {
		var loginBtn;
		beforeEach(() => {
			loginBtn = component.find('button.login');
		});

		it('should exist', () => {
			expect(loginBtn.length).toEqual(1);
		});	

		it('should start off as disabled', () => {
			expect(loginBtn.prop('disabled')).toBe(true);
		});

	});
});

