import { EyeOutlined } from "@ant-design/icons"

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
									<img src={item.featuredImage.node.sourceUrl} alt={item.slug} />
								</div>
								<div className="article-detail__side-item-content">
									<div className="article-detail__side-head display-horizontal">
										<div className="author">
											<img src={item.author.node.avatar.url} alt="author" />
											<span>{item.author.node.name}</span>
										</div>
										<span> <EyeOutlined /> 222</span>
									</div>
									<h4><strong>{item.title}</strong></h4>
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