import Link from 'next/link';
import Image from 'next/image'
import { CalendarOutlined, CommentOutlined } from "@ant-design/icons"
import { getTime } from 'utils/time-helper'

const ArticleItem = ({ item }) => {

	return (
		<div className="article-item">
			<div className="article-img">
				<Image
					width="500"
					height="500"
					alt={item.featuredImage?.node?.uri}
					src={item?.featuredImage?.node?.sourceUrl}
				// loader={() => item?.featuredImage?.node?.sourceUrl}
				/>
			</div>
			<div className="article-content">
				<div className="article-category">
					<span>{item.categories.nodes[0].name}</span>
					<span>
						<CommentOutlined /> {item.commentCount || 0} | {' '}
						<CalendarOutlined /> {getTime(item.date)}  </span>
				</div>
				<div className="article-head">
					<Link href={`/articles/detail/${item.slug}`} style={{ color: '#404040' }}>{item.title}</Link>
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