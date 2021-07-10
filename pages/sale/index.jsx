import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { StandartLayout } from 'layout';
import { SubmitBtn, ItemSale, Loading } from 'components';
import { DoubleRightOutlined, LoadingOutlined, RightOutlined } from '@ant-design/icons';

const getProducts = async (id = 10) => {
	const res = await fetch(`https://fakestoreapi.com/products?limit=${id}`);
	const json = await res.json()
	return json;
}

const SalePage = ({ products }) => {
	const [loading, setLoading] = useState(false);
	// const [products, setData] = useState(null);
	const router = useRouter()

	const viewMore = () => {
		let limit = Number(router.query.limit || 10)
		router.push({
			path: router.pathname,
			query: { limit: limit + 5 }
		}, undefined, { scroll: false })
	}

	// const handleGet = async () => {
	// 	const req = await getProducts();
	// 	setData(req)
	// }

	useEffect(() => {
		// handleGet()
		router.events.on("routeChangeStart", () => setLoading(true))
		router.events.on("routeChangeComplete", () => setLoading(false))
		return () => {
			router.events.off("routeChangeStart", () => setLoading(true))
			router.events.off("routeChangeComplete", () => setLoading(false))
		}
	}, [])
	console.log("router", products)
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
						{products?.map((item, i) => {
							return <ItemSale key={i} item={item} />
						})}


						{loading &&
							<>
								<Loading />
								<Loading />
								<Loading />
								<Loading />
								<Loading />
							</>
						}
					</div>
					<div className="view-more">
						<button onClick={viewMore}>Load more</button>
					</div>
				</div>
			</StandartLayout.Content>
		</StandartLayout >
	)
}

// export async function getStaticProps(context) {
// 	const products = await getProducts();
// 	console.log("context", context)
// 	return {
// 		props: {
// 			products,
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