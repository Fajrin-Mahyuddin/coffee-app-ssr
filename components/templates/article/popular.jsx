import Image from 'next/image';
import { CommentOutlined } from "@ant-design/icons"
import { getTime } from 'utils/time-helper';

const PopularArticle = ({ article }) => {
	return (
		<>
			<h3>Popular</h3>
			<ul className="article-detail__side-list mt-20">
				{article.map((item, i) => {
					return (
						<li key={i}>
							<a href={`/articles/detail/${item.slug}`} className="article-detail__side-item display-horizontal">
								<div className="article-detail__side-item-cover">
									<Image
										// loader={() => item.featuredImage.node.sourceUrl}
										src={item.featuredImage.node.sourceUrl}
										alt={item.slug}
										width="100"
										height="100"
										alt={item.slug}
									/>
								</div>
								<div className="article-detail__side-item-content">
									<span className="text-right text-grey text-10 text-thin">{getTime(item.date)}</span>
									<h4><strong>{item.title}</strong></h4>
									<div className="article-detail__side-head display-horizontal mt-10">
										<div className="author">
											<img src={item.author.node.avatar.url} alt="author" />
											<span>{item.author.node.name}</span>
										</div>
										<span> <CommentOutlined /> {item.commentCount || 0}</span>
									</div>
								</div>
							</a>
						</li>
					)
				})}

			</ul>
		</>
	)
}

export default PopularArticle