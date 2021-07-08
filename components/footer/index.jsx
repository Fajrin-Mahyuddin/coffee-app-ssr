import { EnvironmentOutlined, PhoneOutlined } from '@ant-design/icons'
import React from 'react'

const Footer = () => {
	return (
		<>
			<footer className="footer-wrapper">
				<div className="row">
					<div className="column-25">
						<h4>About</h4>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum officiis doloribus eaque!
					</div>
					<div className="column-25">
						<h4>Profile</h4>
						<ul>
							<li><a href="#">Profile</a></li>
							<li><a href="#">Profile</a></li>
							<li><a href="#">Profile</a></li>
						</ul>
					</div>
					<div className="column-25">
						<h4>Profile</h4>
						<ul>
							<li><a href="#">Profile</a></li>
							<li><a href="#">Profile</a></li>
							<li><a href="#">Profile</a></li>
						</ul>
					</div>
					<div className="column-25">
						<h4>Contact</h4>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum officiis doloribus eaque!
						<span>
							<EnvironmentOutlined />{' '}
							Jl. Yonggang
						</span>
						<span>
							<PhoneOutlined />{' '}
							081
						</span>
					</div>
				</div>
				<hr />
				<div className="center-text p-10">
					&copy; 2021 | Fajrin Mahyuddin
				</div>
			</footer>
		</>
	)
}

export default Footer
