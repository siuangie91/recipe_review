import React from 'react';

class RecipeThumb extends React.Component {
	render() {
		const recipe = this.props.recipe;

		const rating = Math.ceil(this.props.recipe.rating);
		const maxRating = 5;

		return (
			<div className="recipe thumb" id={recipe.id}
				onClick={() => this.props.handleClick(recipe)}>

				<div className="image">
					<img src={recipe.thumb} alt={recipe.name}/>
				</div>

				<div className="icons">
					<div className="fave">
						{
							(this.props.recipe.favedBool) ? 
								<i className="fas fa-heart"></i>
								:
								<i className="far fa-heart"></i>		
						}
					</div>
					<div className="rating">
						{
							Array.apply(null, Array(rating))
								.map((item, i) => <i className="fas fa-star" key={i}></i>)
						}
						{
							Array.apply(null, Array(maxRating - rating))
								.map((item, i) => <i className="far fa-star" key={i}></i>)
						}
					</div>
				</div>
				
				<div className="recipe-copy">
					<h2>{recipe.name}</h2>
					<h3>{recipe.headline}</h3>
					
					<table className="details" >
						<tbody>
							<tr>
								<th>Difficulty:</th>
								<td>{recipe.difficulty}</td>
							</tr>
							<tr>
								<th>Calories:</th>
								<td>{recipe.calories}</td>
							</tr>
							<tr>
								<th>Time:</th>
								<td>{recipe.time}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default RecipeThumb;