import React, { PropTypes, Component } from 'react';

export default class Page extends Component {
	onYearBtnClick(event) {
		this.props.getPhotos(+event.target.textContent);
	}
	render() {
		const { photos, year, fetching } = this.props;

		return <div className='ib page'>
			<p className='btn-group'>
				<button className='btn' onClick={::this.onYearBtnClick}>2016</button>
				<button className='btn' onClick={::this.onYearBtnClick}>2015</button>
				<button className='btn' onClick={::this.onYearBtnClick}>2014</button>
			</p>
			<h3>{year} год</h3>
			{
				fetching ?
				<p>Загрузка...</p>
				:
				<p>У тебя { photos.length } фото.</p>
			}
		</div>;
	}
}

Page.propTypes = {
	photos: PropTypes.array.isRequired,
	year: PropTypes.number.isRequired,
	fetching: PropTypes.bool.isRequired,
	getPhotos: PropTypes.func.isRequired
};