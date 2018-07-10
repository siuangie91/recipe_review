import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import RecipeThumb from '../components/RecipeThumb';
import OpenedRecipe from '../components/OpenedRecipe';

function isEmpty(theObj) {
	for(let key in theObj) {
		if(theObj.hasOwnProperty(key)) {
			return false;
		}
		return true;
	}
}

export class Review extends React.Component {
	constructor() {
		super();

		this.state = {
			recipeToOpen: ""
		}
	}

	openRecipe = (recipe) => {
		this.setState({
			recipeToOpen: recipe
		});
	}

	closeRecipe = () => {
		this.setState({
			recipeToOpen: ""
		})
	}

	render() {
		const user = this.props.user;
		const userName = user.slice(0, user.indexOf('@'));

		return (
			<Fragment>
				<section>
					<p>Welcome, {userName}! Please review your recipes:</p>
				</section>

				<section className="recipes-container">
					{
						this.props.recipes.map((recipe, i) => {
							return (
								<RecipeThumb key={i}
									recipe={recipe}
									handleClick={this.openRecipe} />
							);
						})
					}
				</section>

				{
					(this.state.recipeToOpen) ? 
						<OpenedRecipe recipe={this.state.recipeToOpen}
							closeRecipe={this.closeRecipe}/>
						: ""
				}
			</Fragment>
		);
	}
}

function mapStateToProps(state) {
	return state;
}

export default connect(mapStateToProps, null)(Review);