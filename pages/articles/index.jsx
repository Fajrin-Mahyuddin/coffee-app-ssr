import Image from 'next/image';
import { saly12 } from 'images';
import { useState, useEffect } from 'react';
import { SubmitBtn, ArticleItem } from 'components';
import { useRouter } from 'next/router';
import { StandartLayout } from "layout";
import { ALL_POSTS, fetcher } from 'utils/article-helper';
import { useLoading } from 'utils/general-helper';

const ArticlePage = ({ pageLoading, articles }) => {
	// const { loading } = useLoading()
	const [articlesList, setArticles] = useState(articles);
	const [loadMoreLoading, setLoadMoreLoading] = useState(false)
	const router = useRouter();

	const viewMore = () => {
		let limit = Number(router.query.limit || 5)
		router.push({
			path: router.pathname,
			query: { limit: limit + 5 }
		}, undefined, { scroll: false, shallow: true })
	}

	const loadMore = async () => {
		setLoadMoreLoading(true);
		const variables = {
			limit: Number(router.query.limit),
		};
		try {
			const response = await fetcher(ALL_POSTS, { variables });
			console.log("get in client of posts", variables, response)
			const nextArticles = response.data.posts.nodes;
			setArticles(nextArticles);
			setLoadMoreLoading(false);
		} catch (error) {
			console.error(error)
			setLoadMoreLoading(false);
		}

	}

	useEffect(() => {
		if (router.query.limit) {
			loadMore()
		}
	}, [router.query.limit])

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
					{articlesList.map((item, i) => {
						return (
							<ArticleItem item={item} key={i} />
						)
					})}

				</div>
				{articlesList.length < 20 &&
					<div className="view-more">
						{loadMoreLoading ? "loading..." :
							<button onClick={viewMore}>Load more</button>
						}
					</div>
				}

			</div>
		</StandartLayout>
	)
}

export async function getStaticProps() {
	const variables = {
		limit: 5
	}
	const response = await fetcher(ALL_POSTS, { variables });
	const allPost = response.data.posts.nodes
	return {
		props: {
			articles: allPost
		},
		revalidate: 1
	}
}

export default ArticlePage;