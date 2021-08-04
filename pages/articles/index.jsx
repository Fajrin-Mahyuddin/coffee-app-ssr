import Link from 'next/link';
import Image from 'next/image';
import { saly12 } from 'images';
import { useState } from 'react';
import { SubmitBtn } from 'components';
import { useRouter } from 'next/router';
import { StandartLayout } from "layout";
import { getArticles } from 'utils/article-helper';
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
					{articles?.value.map((item, i) => {
						return (
							<div className="article-item" key={i}>
								<div className="article-img">
									<img src={`${item.image.url}`} width="100%" height="100%" alt="article-one" />
								</div>
								<div className="article-content">
									<div className="article-category">
										<span>Productivity</span>
										<span> <EyeOutlined /> 220 | <ClockCircleOutlined /> 3 days ago  </span>
									</div>
									<div className="article-head">
										{item.title}
									</div>
									<div className="article-body">
										{item.body}
									</div>
									<div className="article-footer">
										<div className="author">
											<img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" width="100%" height="100%" alt="author" />
											<span>Roroa Zoro</span>
										</div>
										<Link href={`/detail/${item.id}`}>Read more</Link>
									</div>
								</div>
							</div>
						)
					})}

				</div>
				{articles.value.length < 20 &&
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

export const getServerSideProps = async ({ query }) => {
	const articles = await getArticles(query.limit);
	return {
		props: { articles: articles?.data }
	}
}

export default ArticlePage;