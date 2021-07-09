import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { StandartLayout } from 'layout';
import { SubmitBtn } from 'components';
import { ClockCircleOutlined, HeartFilled, StarFilled, EyeOutlined, BookFilled, ShopFilled } from '@ant-design/icons';
import { cupboard, Saly11 } from 'images';
import coffee_one from '../public/assets/images/coffee_one.jpeg';

const ArticleList = () => {
	return (
		<StandartLayout>
			<div className="container">
				<div className="dashboard-cover">
					<div className="dashboard-cover__paragraph">
						<h1>Hi, need a cup of <strong> coffee</strong> ?</h1>
						<p>More expresso, Less Depresso</p>
						<SubmitBtn label="Get Started" className="btn md-btn primary-btn mr-5" />
					</div>
					<div className="dashboard-cover__img">
						<Image className="dashboard-cover__second-img" src={cupboard} alt="dashboard-cover" bottom="10px" />
						<Image className="dashboard-cover__main-img" src={Saly11} alt="dashboard-cover" />
					</div>
				</div>
				<h4 className="text-grey text-light"><BookFilled /> Some Articles</h4>
				<hr />
				<div className="article-wrapper">

					<div className="article-item">
						<div className="article-img">
							<Image src={coffee_one} alt="article-one" />
						</div>
						<div className="article-content">
							<div className="article-category">
								<span>Productivity</span>
								<span> <EyeOutlined /> 220 | <ClockCircleOutlined /> 3 days ago  </span>
							</div>
							<div className="article-head">
								Perjalanan Kopi Sebelum Sampai ke Cangkirmu
							</div>
							<div className="article-body">
								Kopi memiliki perjalanan panjang sebelum kita nikmati. Awalnya kopi ditanam oleh petani. Saat panen petani memetik cherry kopi (buah kopi) dan memisahkan bijinya dari buahnya. Ada beberapa proses yang dilakukan dalam tahap ini ada wet process, honey process dan lain-lain. Setelah biji kopi dan buahnya terpisah maka biji kopi yang mentah harus dijemur beberapa waktu sampai kadar airnya berada di tingkat yang telah ditentukan. Setelah itu green bean atau biji kopi hijau ini dijual ke roaster (penyangrai kopi) atau perusahaan yang mengolah sendiri biji hijau mereka.

								Green bean siap disangrai (roasting) sesuai keinginan atau karakteristik bijinya oleh roaster. Tidak semua biji mampu disangrai medium atau dark karena setiap biji memiliki karakteristik masing-masing. Setelah disangrai maka biji kopi tersebut siap diolah barista menjadi minuman. Tetapi sebelumnya harus digiling dahulu sesuai permintaan. Setelah digiling bubuk kopi siap dinikmati menjadi aneka minuman nikmat.
							</div>
							<div className="article-footer">
								<div className="author">
									<img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" width="100%" height="100%" alt="author" />
									<span>Roroa Zoro</span>
								</div>
								<Link href="/detail/123">Read more</Link>
							</div>
						</div>
					</div>
					<div className="article-item">
						<div className="article-img">
							<Image src="https://images.unsplash.com/photo-1555118367-93f01e18660f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="article-one" height="100%" width="100%" />
						</div>
						<div className="article-content">
							<div className="article-category">
								<span>Productivity</span>
								<span> <EyeOutlined /> 220 | <ClockCircleOutlined /> 3 days ago  </span>
							</div>
							<div className="article-head">
								Perjalanan Kopi Sebelum Sampai ke Cangkirmu
							</div>
							<div className="article-body">
								Kopi memiliki perjalanan panjang sebelum kita nikmati. Awalnya kopi ditanam oleh petani. Saat panen petani memetik cherry kopi (buah kopi) dan memisahkan bijinya dari buahnya. Ada beberapa proses yang dilakukan dalam tahap ini ada wet process, honey process dan lain-lain. Setelah biji kopi dan buahnya terpisah maka biji kopi yang mentah harus dijemur beberapa waktu sampai kadar airnya berada di tingkat yang telah ditentukan. Setelah itu green bean atau biji kopi hijau ini dijual ke roaster (penyangrai kopi) atau perusahaan yang mengolah sendiri biji hijau mereka.

								Green bean siap disangrai (roasting) sesuai keinginan atau karakteristik bijinya oleh roaster. Tidak semua biji mampu disangrai medium atau dark karena setiap biji memiliki karakteristik masing-masing. Setelah disangrai maka biji kopi tersebut siap diolah barista menjadi minuman. Tetapi sebelumnya harus digiling dahulu sesuai permintaan. Setelah digiling bubuk kopi siap dinikmati menjadi aneka minuman nikmat.
							</div>
							<div className="article-footer">
								<div className="author">
									<img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" width="100%" height="100%" alt="author" />
									<span>Roroa Zoro</span>
								</div>
								<Link href="/articles/detail/123">Read more</Link>
							</div>
						</div>
					</div>
					<div className="article-item">
						<div className="article-img">
							<Image src={coffee_one} alt="article-one" />
						</div>
						<div className="article-content">
							<div className="article-category">
								<span>Productivity</span>
								<span> <EyeOutlined /> 220 | <ClockCircleOutlined /> 3 days ago  </span>
							</div>
							<div className="article-head">
								Perjalanan Kopi Sebelum Sampai ke Cangkirmu
							</div>
							<div className="article-body">
								Kopi memiliki perjalanan panjang sebelum kita nikmati. Awalnya kopi ditanam oleh petani. Saat panen petani memetik cherry kopi (buah kopi) dan memisahkan bijinya dari buahnya. Ada beberapa proses yang dilakukan dalam tahap ini ada wet process, honey process dan lain-lain. Setelah biji kopi dan buahnya terpisah maka biji kopi yang mentah harus dijemur beberapa waktu sampai kadar airnya berada di tingkat yang telah ditentukan. Setelah itu green bean atau biji kopi hijau ini dijual ke roaster (penyangrai kopi) atau perusahaan yang mengolah sendiri biji hijau mereka.

								Green bean siap disangrai (roasting) sesuai keinginan atau karakteristik bijinya oleh roaster. Tidak semua biji mampu disangrai medium atau dark karena setiap biji memiliki karakteristik masing-masing. Setelah disangrai maka biji kopi tersebut siap diolah barista menjadi minuman. Tetapi sebelumnya harus digiling dahulu sesuai permintaan. Setelah digiling bubuk kopi siap dinikmati menjadi aneka minuman nikmat.
							</div>
							<div className="article-footer">
								<div className="author">
									<img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" width="100%" height="100%" alt="author" />
									<span>Roroa Zoro</span>
								</div>
								<Link href="/articles/detail/123">Read more</Link>
							</div>
						</div>
					</div>
					<div className="article-item">
						<div className="article-img">
							<Image src={coffee_one} alt="article-one" />
						</div>
						<div className="article-content">
							<div className="article-category">
								<span>Productivity</span>
								<span> <EyeOutlined /> 220 | <ClockCircleOutlined /> 3 days ago  </span>
							</div>
							<div className="article-head">
								Perjalanan Kopi Sebelum Sampai ke Cangkirmu
							</div>
							<div className="article-body">
								Kopi memiliki perjalanan panjang sebelum kita nikmati. Awalnya kopi ditanam oleh petani. Saat panen petani memetik cherry kopi (buah kopi) dan memisahkan bijinya dari buahnya. Ada beberapa proses yang dilakukan dalam tahap ini ada wet process, honey process dan lain-lain. Setelah biji kopi dan buahnya terpisah maka biji kopi yang mentah harus dijemur beberapa waktu sampai kadar airnya berada di tingkat yang telah ditentukan. Setelah itu green bean atau biji kopi hijau ini dijual ke roaster (penyangrai kopi) atau perusahaan yang mengolah sendiri biji hijau mereka.

								Green bean siap disangrai (roasting) sesuai keinginan atau karakteristik bijinya oleh roaster. Tidak semua biji mampu disangrai medium atau dark karena setiap biji memiliki karakteristik masing-masing. Setelah disangrai maka biji kopi tersebut siap diolah barista menjadi minuman. Tetapi sebelumnya harus digiling dahulu sesuai permintaan. Setelah digiling bubuk kopi siap dinikmati menjadi aneka minuman nikmat.
							</div>
							<div className="article-footer">
								<div className="author">
									<img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" width="100%" height="100%" alt="author" />
									<span>Roroa Zoro</span>
								</div>
								<Link href="/articles/detail/123">Read more</Link>
							</div>
						</div>
					</div>
					<div className="article-item">
						<div className="article-img">
							<Image src={coffee_one} alt="article-one" />
						</div>
						<div className="article-content">
							<div className="article-category">
								<span>Productivity</span>
								<span> <EyeOutlined /> 220 | <ClockCircleOutlined /> 3 days ago  </span>
							</div>
							<div className="article-head">
								Perjalanan Kopi Sebelum Sampai ke Cangkirmu
							</div>
							<div className="article-body">
								Kopi memiliki perjalanan panjang sebelum kita nikmati. Awalnya kopi ditanam oleh petani. Saat panen petani memetik cherry kopi (buah kopi) dan memisahkan bijinya dari buahnya. Ada beberapa proses yang dilakukan dalam tahap ini ada wet process, honey process dan lain-lain. Setelah biji kopi dan buahnya terpisah maka biji kopi yang mentah harus dijemur beberapa waktu sampai kadar airnya berada di tingkat yang telah ditentukan. Setelah itu green bean atau biji kopi hijau ini dijual ke roaster (penyangrai kopi) atau perusahaan yang mengolah sendiri biji hijau mereka.

								Green bean siap disangrai (roasting) sesuai keinginan atau karakteristik bijinya oleh roaster. Tidak semua biji mampu disangrai medium atau dark karena setiap biji memiliki karakteristik masing-masing. Setelah disangrai maka biji kopi tersebut siap diolah barista menjadi minuman. Tetapi sebelumnya harus digiling dahulu sesuai permintaan. Setelah digiling bubuk kopi siap dinikmati menjadi aneka minuman nikmat.
							</div>
							<div className="article-footer">
								<div className="author">
									<img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" width="100%" height="100%" alt="author" />
									<span>Roroa Zoro</span>
								</div>
								<Link href="/articles/detail/123">Read more</Link>
							</div>
						</div>
					</div>

				</div>
				<div className="article-more">
					<Link href="# ">Load more</Link>
				</div>
				<div className="sale-wrapper">
					<h4 className="text-grey text-light"><ShopFilled /> List Sale</h4>
					<hr />
					<div className="sale-list">

						<div className="sale-item">
							<div className="sale-item__img">
								<img src="https://images.unsplash.com/photo-1565452344518-47faca79dc69?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="img-item" width="50%" height="50%" />
								<HeartFilled />
							</div>
							<div className="sale-item__body">
								<a href={'/sale/detail/123'} className="sale-item__body-title text-overflow-2">
									Moka Pod Coffee
								</a>
								<div className="sale-item__body-review display-horizontal">
									<div className="start">
										<StarFilled style={{ color: "orange" }} />
										<StarFilled style={{ color: "orange" }} />
										<StarFilled style={{ color: "orange" }} />
										<StarFilled style={{ color: "grey" }} />
										<StarFilled style={{ color: "grey" }} />
									</div>
									<span className="label label-sm label-primary">Best</span>
								</div>
								<div className="sale-item__body-desc text-overflow-3">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dolor ipsum asperiores.
								</div>
								<div className="sale-item__body-footer display-horizontal">
									<div className="content-price">
										<span className="label label-sm label-warning label-transparent">0%</span>
										<span>Rp 120.0000</span>
									</div>
								</div>
							</div>
						</div>
						<div className="sale-item">
							<div className="sale-item__img">
								<img src="https://images.unsplash.com/photo-1565452344518-47faca79dc69?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="img-item" width="50%" height="50%" />
								<HeartFilled />
							</div>
							<div className="sale-item__body">
								<a href={'/sale/detail/123'} className="sale-item__body-title text-overflow-2">
									Moka Pod Coffee
								</a>
								<div className="sale-item__body-review display-horizontal">
									<div className="start">
										<StarFilled style={{ color: "orange" }} />
										<StarFilled style={{ color: "orange" }} />
										<StarFilled style={{ color: "orange" }} />
										<StarFilled style={{ color: "grey" }} />
										<StarFilled style={{ color: "grey" }} />
									</div>
									<span className="label label-sm label-primary">Best</span>
								</div>
								<div className="sale-item__body-desc text-overflow-3">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dolor ipsum asperiores.
								</div>
								<div className="sale-item__body-footer display-horizontal">
									<div className="content-price">
										<span className="label label-sm label-warning label-transparent">0%</span>
										<span>Rp 120.0000</span>
									</div>
								</div>
							</div>
						</div>
						<div className="sale-item">
							<div className="sale-item__img">
								<img src="https://images.unsplash.com/photo-1565452344518-47faca79dc69?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="img-item" width="50%" height="50%" />
								<HeartFilled />
							</div>
							<div className="sale-item__body">
								<a href={'/sale/detail/123'} className="sale-item__body-title text-overflow-2">
									Moka Pod Coffee
								</a>
								<div className="sale-item__body-review display-horizontal">
									<div className="start">
										<StarFilled style={{ color: "orange" }} />
										<StarFilled style={{ color: "orange" }} />
										<StarFilled style={{ color: "orange" }} />
										<StarFilled style={{ color: "grey" }} />
										<StarFilled style={{ color: "grey" }} />
									</div>
									<span className="label label-sm label-primary">Best</span>
								</div>
								<div className="sale-item__body-desc text-overflow-3">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dolor ipsum asperiores.
								</div>
								<div className="sale-item__body-footer display-horizontal">
									<div className="content-price">
										<span className="label label-sm label-warning label-transparent">0%</span>
										<span>Rp 120.0000</span>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>

			</div>
		</StandartLayout>
	)
}

export default ArticleList;
