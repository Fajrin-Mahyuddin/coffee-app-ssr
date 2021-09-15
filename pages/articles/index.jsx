import Link from 'next/link';
import Image from 'next/image';
import { saly12 } from 'images';
import { useState } from 'react';
import { SubmitBtn, ArticleItem } from 'components';
import { useRouter } from 'next/router';
import { StandartLayout } from "layout";
import { ALL_POSTS, fetcher, getArticles } from 'utils/article-helper';
import { EyeOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { useLoading } from 'utils/general-helper';

const ArticlePage = ({ pageLoading, articles }) => {
	const router = useRouter();
	const viewMore = () => {
		let limit = Number(router.query.limit || 9)
		router.push({
			path: router.pathname,
			query: { limit: limit + 5 }
		}, undefined, { scroll: false })
	}

	const { loading } = useLoading()
	console.log("articles", articles)

	if (pageLoading) return <div>Loading...</div>
	return (
		<StandartLayout>
			<div className="container">
				<div className="article-cover">
					<div className="article-cover__paragraph">
						<h1>Good day starts with <strong> coffee</strong></h1>
						<p>All about coffee that you should know - <i>coffee lovers</i>.</p>
						<SubmitBtn label="Read more" className="btn sm-btn primary-btn mr-5" />
						<SubmitBtn label="Need a cup of coffee ?" className="btn sm-btn default-btn" />
					</div>
					<div className="article-cover__img">
						<Image className="article-cover__main-img" src={saly12} alt="article-cover" />
					</div>
				</div>
				<hr />
				<div className="article-wrapper">
					{articles.map((item, i) => {
						return (
							<ArticleItem item={item} key={i} />
						)
					})}

				</div>
				{articles.length < 20 &&
					<div className="view-more">
						{loading ? "loading..." :
							<button onClick={viewMore}>Load more</button>
						}
					</div>
				}

			</div>
		</StandartLayout>
	)
}

export async function getStaticProps() {
	const response = await fetcher(ALL_POSTS);
	const allPost = response.data.posts.nodes
	return {
		props: {
			articles: allPost
		},
		revalidate: 1
	}
}

export default ArticlePage;