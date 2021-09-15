import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { StandartLayout } from 'layout';
import { cupboard, Saly11 } from 'images';
import { SubmitBtn, ArticleItem } from 'components';
// import coffee_one from '../public/assets/images/coffee_one.jpeg';
import {
	ShopFilled,
	StarFilled,
	BookFilled,
	EyeOutlined,
	HeartFilled,
	ClockCircleOutlined,
} from '@ant-design/icons';
import { ALL_POSTS, fetcherWithPromise, getArticles } from 'utils/article-helper';
import { getProducts } from 'utils/product-helper';
import { useRecoilState } from 'recoil';
import { dataState } from 'utils/recoil-state';

const Dashboard = ({ articles, products, status, pageLoading }) => {

	const [test, setTest] = useRecoilState(dataState);

	if (pageLoading) return <div>Loading...</div>
	return (
		<StandartLayout>
			<div className="container">
				<div className="dashboard-cover">
					<div className="dashboard-cover__paragraph">
						<h1>Hi, need a cup of <strong> coffee</strong> ?</h1>
						<p onClick={() => setTest('oke')}>{test}</p>
						<SubmitBtn label="Get Started" className="btn md-btn primary-btn mr-5" />
					</div>
					<div className="dashboard-cover__img">
						<Image className="dashboard-cover__second-img" src={cupboard} alt="dashboard-cover" bottom="10px" />
						<Image className="dashboard-cover__main-img" src={Saly11} alt="dashboard-cover" />
					</div>
				</div>
				<h4 className="text-grey text-light"><BookFilled /> Some Articles</h4>
				<hr />
				<div className="article-wrapper mb-20">
					{articles?.map((item, i) => {
						return (
							<ArticleItem item={item} key={i} />
						)
					})}

				</div>
				<div className="view-more">
					{status?.error ?
						status.msg :
						<a href="/articles">See more</a>
					}
				</div>
				<div className="sale-wrapper">
					<h4 className="text-grey text-light"><ShopFilled /> List Sale</h4>
					<hr />
					<div className="sale-list">
						{products?.map((item, i) => {
							return (
								<div className="sale-item" key={i}>
									<div className="sale-item__img">
										<img src={item.image} alt="img-item" width="50%" height="50%" />
										<HeartFilled />
									</div>
									<div className="sale-item__body">
										<a href={`/sale/detail/${item.id}`} className="sale-item__body-title text-overflow-2">
											{item.title}
										</a>
										<div className="sale-item__body-review display-horizontal">
											<div className="start">
												<StarFilled style={{ color: "orange" }} />
												<StarFilled style={{ color: "orange" }} />
												<StarFilled style={{ color: "orange" }} />
												<StarFilled style={{ color: "grey" }} />
												<StarFilled style={{ color: "grey" }} />
											</div>
											<span className="label label-sm label-primary">Best</span>
										</div>
										<div className="sale-item__body-desc text-overflow-3">
											{item.description}
										</div>
										<div className="sale-item__body-footer display-horizontal">
											<div className="content-price">
												<span className="label label-sm label-warning label-transparent">0%</span>
												<span>$ {item.price}</span>
											</div>
										</div>
									</div>
								</div>
							)
						})}

					</div>
				</div>
				<div className="view-more">
					{status?.error ?
						<div>{status.msg}</div> :
						<a href="/sale">See more</a>
					}
				</div>

			</div>
		</StandartLayout>
	)
}

export const getStaticProps = async () => {
	let articles = null;
	let products = null;
	let status = { error: false, msg: null };

	try {
		let requestAll = await Promise.all([fetcherWithPromise(ALL_POSTS), getProducts()]);
		articles = requestAll[0].data.posts.nodes;
		products = requestAll[1].data;
	} catch (error) {
		status = { error: true, msg: "Failed to fetch data" }
	}
	return {
		props: {
			articles,
			products,
			status
		},
		revalidate: 30
	}
}

export default Dashboard;
