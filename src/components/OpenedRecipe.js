import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { setRecipeRating, setRecipeFave } from '../actions';

class OpenedRecipe extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			favorited: this.props.recipe.favedBool,
			rating: Math.ceil(this.props.recipe.rating)
		}
	}

	changeFave = (id) => {
		this.props.setRecipeFave(id);
		this.setState(prevState => ({ favorited: !prevState.favorited }));
	}
	
	changeRating = (id, rating) => {
		this.props.setRecipeRating(id, rating);
		this.setState(prevState => ({ rating: rating }));
	}

	render() {
		const recipe = this.props.recipe;
		const maxRating = 5;

		return (
			<Fragment>
				<div className="blocker"
					onClick={this.props.closeRecipe}></div>

				<section className="recipe opened-recipe">					
					<div className="closer"
						onClick={this.props.closeRecipe}>&times;</div>

					<section>
						<div className="image">
							<img src={recipe.image} alt={recipe.name}/>
						</div>

						<div className="icons">
							<div className="fave">
								<i className={(this.state.favorited) ? "fas fa-heart" : "far fa-heart"}
									onClick={() => this.changeFave(recipe.id)}></i>
							</div>
							<div className="rating">
								{
									Array.apply(null, Array(maxRating))
										.map((item, i) => 
											<i key={i}
												className={(i < this.state.rating) ? "fas fa-star" : "far fa-star"}
												onClick={() => this.changeRating(recipe.id, i+1)}></i>
										)
								}
							</div>
						</div>
						
						<div className="recipe-copy">
							<h2>{recipe.name}</h2>
							<h3>{recipe.headline}</h3>

							<div className="stats">
								<p><strong>Difficulty:</strong> {recipe.difficulty}</p>
								<p><strong>Time:</strong> {recipe.time}</p>
							</div>

							<p className="description">{recipe.description}</p>

							<h4>Ingredients</h4>
							<ul className="ingredients">
								{
									recipe.ingredients.map((ingredient, i) => 
										<li key={i}>{ingredient}</li>
									)
								}
							</ul>

							<table className="label">
								<thead>
									<tr>
										<th colSpan="2">Nutrition Facts</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<th>Calories</th>
										<td>{recipe.calories}</td>
									</tr>
									<tr>
										<th>Carbohydrates</th>
										<td>{recipe.carbos}</td>
									</tr>
									<tr>
										<th>Proteins</th>
										<td>{recipe.proteins}</td>
									</tr>
									<tr>
										<th>Fats</th>
										<td>{recipe.fats}</td>
									</tr>
								</tbody>
							</table>
						</div>
					</section>
				</section>
			</Fragment>
		);
	}
}

function mapStateToProps(state) {
	return state;
}

export default connect(mapStateToProps, { setRecipeRating, setRecipeFave })(OpenedRecipe);