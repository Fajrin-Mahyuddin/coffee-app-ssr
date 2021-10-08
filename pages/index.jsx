import React from 'react';
import Image from 'next/image';
import { StandartLayout } from 'layout';
import { useRecoilState } from 'recoil';
import { cupboard, Saly11 } from 'images';
import { dataState } from 'utils/recoil-state';
import { getProducts } from 'utils/product-helper';
import { SubmitBtn, ArticleItem, ItemSale } from 'components';
import { ALL_POSTS, fetcher } from 'utils/article-helper';
import {
	ShopFilled,
	BookFilled,
} from '@ant-design/icons';

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
								<ItemSale item={item} key={item.id} />
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
	const variables = {
		limit: 5
	}

	try {
		let requestAll = await Promise.all([fetcher(ALL_POSTS, { variables }), getProducts()]);
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
