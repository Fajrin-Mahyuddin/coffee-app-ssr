import React, { useRef, useEffect } from 'react';
import { SubmitBtn } from 'components';
import { ifFooterPriceScrolled } from 'utils/scrolled'
import { StandartLayout } from 'layout';
import { DoubleRightOutlined, RightOutlined, StarFilled, TagsFilled, MinusCircleFilled, PlusCircleFilled, ShoppingCartOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';

const SaleDetail = () => {
	const refFooterPrice = useRef();
	const refFooterChild = useRef();
	const router = useRouter()
	useEffect(() => {
		const updateState = () => {
			console.log("oke udpate")
		}
		const removeState = () => {
			console.log("oke remove")
		}
		// ifFooterPriceScrolled(refFooterPrice, refFooterChild);

		window.addEventListener("scroll", () => updateState())
		return () => {
			window.removeEventListener("scroll", () => removeState())
		}
	}, [router])

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
					<div className="sale-item">
						<div className="sale-item__img">
							<img src="https://images.unsplash.com/photo-1616662707932-350e6e599ea8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=966&q=80" alt="sale-item-img" width="50%" height="50%" />
						</div>
						<div className="sale-item__desc">
							<div className="sale-item__desc-head">
								Moka Pos Coffee
							</div>
							<div className="sale-item__desc-price">
								<span>Rp 120.000</span>
								<span className="label label-danger-transparent label-sm">Rp. 1.000.000</span>
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
								<p>The moka pot is a stove-top or electric coffee maker that brews coffee by passing boiling water pressurised by steam through ground coffee. Named after the Yemeni city of Mocha, it was invented by Italian engineer Alfonso Bialetti in 1933 and quickly became one of the staples of Italian culture.[1] Bialetti Industries continues to produce the same model under the trade name "Moka Express".</p>
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

export default SaleDetail;