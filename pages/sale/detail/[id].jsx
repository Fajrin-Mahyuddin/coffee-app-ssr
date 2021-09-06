import React, { useRef, useEffect } from 'react';
import { SubmitBtn } from 'components';
import { ifDetailSaleScrolled, ifFooterPriceScrolled } from 'utils/scrolled'
import { StandartLayout } from 'layout';
import { DoubleRightOutlined, RightOutlined, StarFilled, TagsFilled, MinusCircleFilled, PlusCircleFilled, ShoppingCartOutlined } from '@ant-design/icons';
import { getDetailProduct, getProducts } from 'utils/product-helper';

const SaleDetail = ({ product }) => {
	const { refFooterPrice, refFooterChild } = ifDetailSaleScrolled()
	const { image, title, description, price } = product;
	console.log("objec-t")
	console.log("----pero", product)
	return (
		<StandartLayout>
			<StandartLayout.Content>
				<div className="sale-detail">
					<div className="breadcrumbs">
						<DoubleRightOutlined />
						<a href="# ">Dashboard</a>
						<RightOutlined />
						<a href="# ">Guest</a>
						<RightOutlined />
						<a href="# ">Sales</a>
					</div>
					<div className="sale-item mt-20">
						<div className="sale-item__img">
							<img src={image} alt="sale-item-img" width="40%" height="40%" />
						</div>
						<div className="sale-item__desc">
							<div className="sale-item__desc-head">
								{title}
							</div>
							<div className="sale-item__desc-price">
								<span>$ {price}</span>
								<span className="label label-danger-transparent label-sm">$ 10</span>
								<span className="label label-warning label-sm">10%</span>
							</div>
							<div className="sale-item__desc-review">
								<div>
									<StarFilled style={{ color: 'orange' }} />
									<StarFilled style={{ color: 'orange' }} />
									<StarFilled style={{ color: 'orange' }} />
									<StarFilled style={{ color: 'orange' }} />
									<StarFilled style={{ color: 'grey' }} />
								</div>
								<span>
									<span className="label label-sm label-primary">Best Seller</span>
									<span className="label label-sm label-success">Original</span>
								</span>
							</div>
							<div className="sale-item__desc-paragraph">
								<div>Kondisi : Baru</div>
								<div>Berat : 1000 Gram</div>
								<p>{description}</p>
							</div>
							<div className="sale-item__desc-tags">
								<span><TagsFilled /> Tags : </span>
								<span className="label label-sm label-primary">Machine</span>
								<span className="label label-sm label-info">Manual</span>
							</div>
							<hr />
							<div ref={refFooterPrice} className="sale-item__desc-footer">
								<div ref={refFooterChild} className="footer-child">
									<div className="sale-item__total-order">
										<SubmitBtn className="btn sm-btn success-btn" icon={MinusCircleFilled}></SubmitBtn>
										<span>1</span>
										<SubmitBtn className="btn sm-btn success-btn" icon={PlusCircleFilled}></SubmitBtn>
									</div>
									<SubmitBtn label="Add" icon={ShoppingCartOutlined} className="btn sm-btn success-btn" />
								</div>
							</div>
						</div>
					</div>
					<div className="obstacle">

					</div>
				</div>
			</StandartLayout.Content>
		</StandartLayout>
	)
}

export async function getStaticPaths() {
	const products = await getProducts();
	const paths = products.data.map(item => {
		return { params: { id: item.id.toString() } }
	})
	return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
	const product = await getDetailProduct(params.id);
	console.log(product)
	return {
		props: { product: product.data }
	}
}

export default SaleDetail;