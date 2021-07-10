import { StarFilled } from '@ant-design/icons'
import React from 'react'

const Loading = () => {
	return (
		<div className="loading__sale-item">
			<div className="loading__sale-item__img color-animate">
			</div>
			<div className="loading__sale-item__body">
				<a href="# " className="loading__sale-item__body-title box color-animate">
				</a>
				<div className="loading__sale-item__body-review display-horizontal">
					<div className="start">
						<StarFilled />
						<StarFilled />
						<StarFilled />
						<StarFilled />
						<StarFilled />
					</div>
					<span className="label box color-animate"></span>
				</div>
				<div className="loading__sale-item__body-desc">
					<div className="box color-animate"></div>
					<div className="box color-animate"></div>
					<div className="box color-animate"></div>
				</div>
				<div className="loading__sale-item__body-footer">
					<div className="content-price display-horizontal">
						<div className="box color-animate"></div>
						<div className="box color-animate"></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Loading
