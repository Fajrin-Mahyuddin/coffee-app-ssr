import Link from 'next/link'
import { ClockCircleOutlined, EyeOutlined } from "@ant-design/icons"

const ArticleItem = ({ item }) => {
	return (
		<div className="article-item">
			<div className="article-img">
				<img src={item?.featuredImage?.node?.sourceUrl} width="100%" height="100%" alt={item.featuredImage?.node?.uri} />
			</div>
			<div className="article-content">
				<div className="article-category">
					<span>Productivity</span>
					<span> <EyeOutlined /> 220 | <ClockCircleOutlined /> {item.date}  </span>
				</div>
				<div className="article-head">
					<a href={`/articles/detail/${item.slug}`} style={{ color: '#404040' }}>{item.title}</a>
				</div>
				<div className="article-body" dangerouslySetInnerHTML={{ __html: item.excerpt }} />
				<div className="article-footer">
					<div className="author">
						<img src={item.author?.node.avatar.url} width="100%" height="100%" alt="author" />
						<span>{item.author?.node.name}</span>
					</div>
					<Link href={`/articles/detail/${item.slug}`}>Read more</Link>
				</div>
			</div>
		</div>
	)
}

export default ArticleItem