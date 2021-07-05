import { StandartLayout } from "layout";
import { EyeOutlined, FacebookOutlined, FieldTimeOutlined, ReadOutlined, RightOutlined, SignalFilled, TwitterOutlined, WhatsAppOutlined } from '@ant-design/icons';

export default () => {
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
						<a href="# ">Lorem ipsum dolor, sit amet consectetur adipisicing.</a>
					</div>
					<div className="article-detail__img">
						{/* <hr /> */}
						<img src="https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" />
						<span className="tags tags-sm tags-info">Technology</span>
					</div>
					<div className="article-detail__content">
						<div className="article-detail__content-head display-horizontal">
							<div className="author">
								<img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="author" />
								<span>Roroa Zoro</span>
							</div>
							<span> <EyeOutlined /> 222</span>
						</div>
						<hr />
						<div className="article-detail__content-title">
							Lorem ipsum dolor sit amet consectetur adipisicing.
							<span><SignalFilled /> Majene - <FieldTimeOutlined /> Sabtu, 20 Juni 2020</span>
						</div>
						<div className="article-detail__content-body">
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae perspiciatis nam ab totam molestias exercitationem qui ipsum nisi voluptatibus recusandae sed voluptatem eos illum praesentium, pariatur distinctio numquam commodi inventore delectus optio, neque consequuntur, aliquam officia. Sunt enim esse neque tempora eaque ea, quasi modi nostrum delectus ipsam? Accusantium voluptatibus fugit asperiores possimus laborum velit, soluta quae ut delectus animi et qui, ipsum magni! Quibusdam quam itaque, sed laborum ab voluptatibus excepturi.
								<img src="https://images.unsplash.com/photo-1500989145603-8e7ef71d639e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80" alt="content-imt" width="100%" height="50%" style={{ margin: "20px 0" }} />
								<br />
								corrupti aut nesciunt quis. Laborum, eum modi officia recusandae, doloribus eligendi accusamus ratione aperiam corrupti officiis, optio porro perferendis et similique vitae maiores repellat eos ipsam earum! Voluptatibus exercitationem obcaecati eius nemo atur similique voluptatem quas velit minima voluptatibus, totam neque vero aperiam consectetur voluptatum fugit necessitatibus ipsa, error itaque odio maxime? Ea ab voluptatum delectus repellendus velit officia? Vitae similique impedit fuga ullam?
							</p>
							<div>
								editor : Anonim
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
						<h3>Popular</h3>
						<ul className="article-detail__side-list">
							<li>
								<a href="#" className="article-detail__side-item display-horizontal">
									<div className="article-detail__side-item-cover">
										<img src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="cover-img" />
									</div>
									<div className="article-detail__side-item-content">
										<div className="article-detail__side-head display-horizontal">
											<div className="author">
												<img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="author" />
												<span>Roroa Zoro</span>
											</div>
											<span> <EyeOutlined /> 222</span>
										</div>
										<h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</h4>
									</div>
								</a>
							</li>
							<li>
								<a href="#" className="article-detail__side-item display-horizontal">
									<div className="article-detail__side-item-cover">
										<img src="https://images.unsplash.com/photo-1484981138541-3d074aa97716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" alt="cover-img" />
									</div>
									<div className="article-detail__side-item-content">
										<div className="article-detail__side-head display-horizontal">
											<div className="author">
												<img src="https://images.unsplash.com/photo-1544348817-5f2cf14b88c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80" alt="author" />
												<span>Fajrin</span>
											</div>
											<span> <EyeOutlined /> 100</span>
										</div>
										<h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</h4>
									</div>
								</a>
							</li>
							<li>
								<a href="#" className="article-detail__side-item display-horizontal">
									<div className="article-detail__side-item-cover">
										<img src="https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80" alt="cover-img" />
									</div>
									<div className="article-detail__side-item-content">
										<div className="article-detail__side-head display-horizontal">
											<div className="author">
												<img src="https://images.unsplash.com/photo-1578489758854-f134a358f08b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="author" />
												<span>Luffy</span>
											</div>
											<span> <EyeOutlined /> 222</span>
										</div>
										<h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</h4>
									</div>
								</a>
							</li>
						</ul>

					</div>
				</div>
			</StandartLayout.Content>
		</StandartLayout>
	)
}