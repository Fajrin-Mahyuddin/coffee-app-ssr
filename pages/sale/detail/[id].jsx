import React, { useRef, useEffect, useState } from 'react';
import { SubmitBtn } from 'components';
import { ifDetailSaleScrolled } from 'utils/scrolled'
import { StandartLayout } from 'layout';
import { DoubleRightOutlined, RightOutlined, StarFilled, TagsFilled, MinusCircleFilled, PlusCircleFilled, ShoppingCartOutlined } from '@ant-design/icons';
import { getDetailProduct, getProducts } from 'utils/product-helper';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { basketList } from 'state/basket';

const SaleDetail = ({ product }) => {
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
					<DetailItem item={product} />
					<div className="obstacle">
						{/* list another item  */}
					</div>
				</div>
			</StandartLayout.Content>
		</StandartLayout>
	)
}

export const DetailItem = ({ item }) => {
	const route = useRouter();
	const [quantity, setQuantity] = useState(1)
	const [basket, setBasket] = useRecoilState(basketList);

	const { refFooterPrice, refFooterChild } = ifDetailSaleScrolled();

	const rateView = (value) => {
		const point = []
		for (let i = 0; i < value; i++) {
			point.push(<StarFilled key={`orange-${i}`} style={{ color: 'orange' }} />)
		}
		for (let i = 0; i < (5 - value); i++) {
			point.push(<StarFilled key={`grey-${i}`} style={{ color: 'grey' }} />)
		}
		return point.map((item) => item)
	}

	const toBasket = (val) => {
		const value = { product: val, quantity: quantity }
		setBasket([...basket, value])
	}

	if (route.isFallback) {
		return <div><p>loading...</p></div>
	}
	return (
		<div className="sale-item mt-20">
			<div className="sale-item__img">
				<img src={item.image} alt="sale-item-img" width="40%" height="40%" />
			</div>
			<div className="sale-item__desc">
				<div className="sale-item__desc-head">
					{item.title}
				</div>
				<div className="sale-item__desc-price">
					<span>$ {item.price}</span>
					<span className="label label-danger-transparent label-sm">$ {item.discount}</span>
					<span className="label label-warning label-sm">10%</span>
				</div>
				<div className="sale-item__desc-review">
					<div>
						{rateView(item.rate)}
					</div>
					<span>
						<span className="label label-sm label-primary">Best Seller</span>
						<span className="label label-sm label-success">Original</span>
					</span>
				</div>
				<div className="sale-item__desc-paragraph">
					<div>Kondisi : Baru</div>
					<div>Berat : {item.weight} Gram</div>
					<p>{item.description}</p>
				</div>
				<div className="sale-item__desc-tags">
					<span><TagsFilled /> Tags : </span>
					{item.tags.map((list, i) => {
						return <span key={i} className={`label label-sm label-${list.color}`}>{list.tag}</span>
					})}
				</div>
				<hr />
				<div ref={refFooterPrice} className="sale-item__desc-footer">
					<div ref={refFooterChild} className="footer-child">
						<div className="sale-item__total-order">
							<SubmitBtn className="btn sm-btn success-btn" icon={MinusCircleFilled}></SubmitBtn>
							<span>1</span>
							<SubmitBtn className="btn sm-btn success-btn" icon={PlusCircleFilled}></SubmitBtn>
						</div>
						<SubmitBtn label="Add" icon={ShoppingCartOutlined} onClick={() => toBasket(item)} className="btn sm-btn success-btn" />
					</div>
				</div>
			</div>
		</div>
	)
}

export async function getStaticPaths() {
	const products = await getProducts();
	const paths = products.data.map(item => {
		return { params: { id: item.id.toString() } }
	})
	return {
		paths, fallback: true
	}
}

export async function getStaticProps({ params }) {
	const product = await getDetailProduct(params.id);
	return {
		props: { product: product.data },
		revalidate: 2
	}
}

export default SaleDetail;