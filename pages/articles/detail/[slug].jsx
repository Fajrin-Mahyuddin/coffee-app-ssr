import { StandartLayout } from "layout";
import { EyeOutlined, FacebookOutlined, FieldTimeOutlined, ReadOutlined, RightOutlined, SignalFilled, TwitterOutlined, WhatsAppOutlined } from '@ant-design/icons';
import { ALL_POSTS, fetcher, SINGLE_POST } from "utils/article-helper";
import { PopularArticle } from "components";

const DetailArticle = ({ article, popular }) => {
	return (
		<StandartLayout>
			<StandartLayout.Content>
				<div className="article-detail">
					<div className="breadcrumbs">
						<ReadOutlined />
						<a href="# ">Articles</a>
						<RightOutlined />
						<a href="# ">Detail</a>
						<RightOutlined />
						<a href="# ">{article.slug}</a>
					</div>
					<div className="article-detail__img">
						{/* <hr /> */}
						<img src={article.featuredImage.node.sourceUrl} />
						<span className="tags tags-sm tags-info">general</span>
					</div>
					<div className="article-detail__content">
						<div className="article-detail__content-head display-horizontal">
							<div className="author">
								<img src={article.author.node.avatar.url} alt="author" />
								<span>{article.author.node.name}</span>
							</div>
							<span> <EyeOutlined /> 222</span>
						</div>
						<hr />
						<div className="article-detail__content-title">
							{article.title}
							<span><SignalFilled /> Majene - <FieldTimeOutlined /> Sabtu, 20 Juni 2020</span>
						</div>
						<div className="article-detail__content-body">
							<div dangerouslySetInnerHTML={{ __html: article.content }} />
							{/* <div>
								editor : Anonim
							</div> */}
							<div className="text-14">
								Sumber : https://telegraph.id
							</div>
						</div>
						<div className="article-detail__content-footer">
							<hr />
							<div className="article-detail__share-sosial-media display-horizontal">
								<a href="# "><TwitterOutlined /></a>
								<a href="# "><FacebookOutlined /></a>
								<a href="# "><WhatsAppOutlined /></a>
							</div>
							<div className="article-detail__comments">
								{/* commens here: */}
							</div>
						</div>
					</div>
					<div className="article-detail__side">
						<PopularArticle article={popular} />
					</div>
				</div>
			</StandartLayout.Content>
		</StandartLayout>
	)
}

export async function getStaticPaths() {
	const response = await fetcher(ALL_POSTS);
	const post = response.data.posts.nodes;
	const paths = post.map(item => {
		return { params: { slug: item.slug } }
	})
	return {
		paths, fallback: 'blocking'
	}
}

export async function getStaticProps({ params }) {
	const variables = {
		id: params.slug,
		idType: "SLUG"
	};

	const article = await fetcher(SINGLE_POST, { variables });

	if (!article?.data?.post?.slug) {
		return {
			notFound: true
		}
	}

	return {
		props: { article: article.data.post, popular: article.data.posts.nodes },
		revalidate: 1,
	}
}

export default DetailArticle;