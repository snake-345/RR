import React, { PropTypes, Component } from 'react';

export default class Page extends Component {
	onYearBtnClick(event) {
		this.props.setYear(+event.target.textContent);
	}
	render() {
		const { photos, year } = this.props;

		return <div>
			<p>
				<button onClick={::this.onYearBtnClick}>2016</button>
				<button onClick={::this.onYearBtnClick}>2015</button>
				<button onClick={::this.onYearBtnClick}>2014</button>
			</p>
			<h3>{year} год</h3>
			<p>У тебя { photos.length } фото.</p>
		</div>;
	}
}

Page.propTypes = {
	photos: PropTypes.array.isRequired,
	year: PropTypes.number.isRequired,
	setYear: PropTypes.func.isRequired
};