import React, { useEffect, useState } from 'react';
import { StandartLayout } from 'layout';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { addToCart, basketList } from 'state/atoms/cart';
import { useRateView } from 'utils/general-helper';
import { SubmitBtn, LoadingFetch } from 'components';
import { ifDetailSaleScrolled } from 'utils/scrolled';
import { getDetailProduct, getProducts } from 'utils/product-helper';
import {
	DoubleRightOutlined,
	RightOutlined,
	TagsFilled,
	MinusCircleFilled,
	PlusCircleFilled,
	ShoppingCartOutlined,
	TagsOutlined
} from '@ant-design/icons';
import { reqCart } from 'utils/cart-helper';
import DefaultErrorPage from 'next/error'

const SaleDetail = (props) => {
	const { product } = props;
	console.log("error on sale page", props)
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
					<div className="related-item-wrapper mt-20">
						{/* list another item  */}
						<h5 className="text-grey"><TagsOutlined /> Related Product:</h5>
					</div>
					<DefaultErrorPage statusCode={404} />
				</div>
			</StandartLayout.Content>
		</StandartLayout>
	)
}

export const DetailItem = ({ item }) => {
	const [, setCartCount] = useRecoilState(basketList);
	const route = useRouter();
	const [quantity, setQuantity] = useState(1)
	const [isSuccess, setSuccess] = useState(false)
	// const [basket, setBasket] = useRecoilState(getDataCart);
	const { refFooterPrice, refFooterChild } = ifDetailSaleScrolled();

	const toBasket = async (val) => {
		const value = { product: val, quantity: quantity }
		// setBasket([...basket, value]);
		try {
			const req = await addToCart();
			setSuccess(true)
			console.log("value add to cart", req);
			setTimeout(() => setSuccess(false), 2000)
		} catch (error) {
			console.log("value error add to cart", error)
		}
	}

	useEffect(async () => {
		if (isSuccess) {
			const data = await reqCart()
			setCartCount(data.length)
		}
	}, [isSuccess])

	if (route.isFallback) {
		return <LoadingFetch />
	}

	if (isSuccess) {
		return <div><p>Product success added to cart !</p></div>
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
						{useRateView(item.rate)}
					</div>
					<span>
						<span className="label label-sm label-primary">Best Seller</span>
						<span className="label label-sm label-success">Original</span>
					</span>
				</div>
				<div className="sale-item__desc-paragraph">
					<strong><i>{item.condition}</i></strong>
					<div>Weight : {item.weight} Gram</div>
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
	const product = await getDetailProduct(params.id)
	if (!product.data.id) {
		return {
			notFound: true
		}
	}

	return {
		props: { product: product.data },
		revalidate: 1,
	}
}

export default SaleDetail;