import React, { useEffect } from 'react';
import Link from 'next/link';
import { SubmitBtn, ItemSale } from 'components';
import { StandartLayout } from 'layout';
import { DoubleRightOutlined, RightOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';

const getProducts = async (id = 10) => {
	const res = await fetch(`https://fakestoreapi.com/products?limit=${id}`);
	return await res.json()
}

const SalePage = ({ products }) => {
	const router = useRouter()
	useEffect(() => {
		router.push({ query: { limit: 10 } })
	}, [])
	console.log("router", router)
	return (
		<StandartLayout>
			<StandartLayout.Content>
				<div className="sale-wrapper">
					<div className="breadcrumbs">
						<DoubleRightOutlined />
						<a href="# ">Dashboard</a>
						<RightOutlined />
						<a href="# ">Guest</a>
						<RightOutlined />
						<a href="# ">Sales</a>
					</div>
					<div className="sale-banner display-column">
						<div className="sale-banner__text">
							<h3>Welcome to Coffee Shop</h3>
							<p>Best online shop</p>
							<SubmitBtn className="btn md-btn info-btn" label="Get Started" />
						</div>
						<div className="sale-banner__img">
							{/* <img src={Iphone2} alt="sale-img" /> */}
						</div>
					</div>
					<div className="sale-cover">
						<div className="sale-cover__main">
							<div className="sale-cover__main-desc">
								<h2>One Sale Many Things</h2>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing .</p>
								<SubmitBtn className="btn md-btn info-btn" label="Get Started" />
							</div>
							<div className="sale-cover__main-img">
								{/* <img src={CoverSale} alt="cover img" /> */}
							</div>
						</div>
						<div className="sale-cover__second">
							<div className="sale-cover__second-desc">
								<h2>Become a member</h2>
								<SubmitBtn className="btn md-btn info-btn" label="Join" />
							</div>
							<div className="sale-cover__second-img">
								{/* <img src={Saly19} alt="cover img" /> */}
							</div>
						</div>
					</div>
					<h2>Pilihan :</h2>
					<hr />
					<div className="sale-list">
						{products.map((item, i) => {
							return <ItemSale key={i} item={item} />
						})}


					</div>
					<div className="article-more">
						<button onClick={() => router.push({ path: router.pathname, query: { limit: Number(router.query.limit) + 5 } })}>Load more</button>
					</div>
				</div>
			</StandartLayout.Content>
		</StandartLayout>
	)
}

// export async function getStaticPaths() {
// 	return {
// 		paths: {
// 			params: 
// 		}
// 	}
// }

export async function getServerSideProps({ query }) {
	const products = await getProducts(query.limit);

	return {
		props: {
			products,
		}
	}
}

export default SalePage