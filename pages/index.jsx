import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { StandartLayout } from 'layout';
import { SubmitBtn } from 'components';
import { ClockCircleOutlined, EyeOutlined } from '@ant-design/icons';
import { cupboard, Saly11 } from 'images';
import coffee_one from '../public/assets/images/coffee_one.jpeg';

const ArticleList = () => {
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
						<Image className="article-cover__second-img" src={cupboard} alt="article-cover" bottom="10px" />
						<Image className="article-cover__main-img" src={Saly11} alt="article-cover" />
					</div>
				</div>
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
								<Link href="/articles/detail/123">Read more</Link>
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
			</div>
		</StandartLayout>
	)
}

export default ArticleList;
