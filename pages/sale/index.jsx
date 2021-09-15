import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { CoverSale, iphone2, Saly19 } from 'images'
import { StandartLayout } from 'layout';
import { SubmitBtn, ItemSale, Loading } from 'components';
import { DoubleRightOutlined, LoadingOutlined, RightOutlined } from '@ant-design/icons';
import { useLoading } from 'utils/general-helper';
import { getProducts } from 'utils/product-helper';

const SalePage = ({ products = [], pageLoading }) => {
	const [productList, setProduct] = useState(products)
	const [isLoading, setLoading] = useState(false)
	const router = useRouter();

	const viewMore = (e) => {
		let limit = Number(router.query.limit || 5)
		router.push({
			path: router.pathname,
			query: { limit: limit + 1 }
		}, undefined, { scroll: false, shallow: true })
		// loadMore()
	}

	const loadMore = async () => {
		setLoading(true);
		const data = await getProducts(router.query.limit);
		setProduct(data.data);
		setLoading(false);
	}

	useEffect(() => {
		if (router.query.limit) {
			loadMore()
		}
	}, [router.query.limit])

	const { loading } = useLoading();
	if (pageLoading) return <div>Loading...</div>
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
							<Image src={iphone2} className="img" alt="main-img" />
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
								<Image src={CoverSale} className="img" alt="main-img" />
							</div>
						</div>
						<div className="sale-cover__second">
							<div className="sale-cover__second-desc">
								<h2>Become a member</h2>
								<SubmitBtn className="btn md-btn info-btn" label="Join" />
							</div>
							<div className="sale-cover__second-img">
								<Image src={Saly19} className="img" alt="cover-img" />
							</div>
						</div>
					</div>
					<h2>Pilihan :</h2>
					<hr />

					<div className="sale-list">
						{productList?.map((item, i) => {
							return <ItemSale key={i} item={item} />
						})}

						{isLoading &&
							<>
								<Loading />
								<Loading />
								<Loading />
								<Loading />
								<Loading />
							</>
						}
					</div>
					{productList.length < 20 &&
						<div className="view-more">
							<button onClick={(e) => viewMore(e)}>Load more</button>
						</div>
					}
				</div>
			</StandartLayout.Content>
		</StandartLayout >
	)
}

// export async function getStaticPaths() {
// 	const products = await getProducts();
// 	const paths = [{ params: { limit: '5' } }]
// 	return {
// 		paths,
// 		fallback: 'blocking',
// 	}
// }

export async function getStaticProps() {
	const products = await getProducts(5);
	// console.log("params", query)
	return {
		props: {
			products: products.data,
		},
		revalidate: 5
	}
}

export default SalePage