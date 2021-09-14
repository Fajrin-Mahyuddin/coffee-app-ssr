import { DeleteFilled, MinusCircleFilled, PlusCircleFilled, ShoppingCartOutlined } from "@ant-design/icons";
import { SubmitBtn } from "components";
import nookies from 'nookies';
import { StandartLayout } from "layout";
import adminFirebase from "utils/firebase-admin-helper";
import { redirectTo } from "utils/auth";

const CartPage = () => {
	return (
		<StandartLayout>
			<StandartLayout.Content>
				<div className="cart">

					<div className="cart-list">
						<div>
							<h4><ShoppingCartOutlined /> Cart Items</h4>
							<hr />
						</div>

						<div className="cart-item">
							<div className="cart-item__detail">
								<img className="cart-item__detail-img" src="https://images.unsplash.com/photo-1593369196682-6d8ec9ff3ae0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="cart-img" width="100%" height="100%" />
								<div className="cart-item__detail-body">
									<div className="body-head">
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere.
									</div>
									<div className="body-price">
										<span>Rp. 300.000</span>
										<span className="label label-danger-transparent label-sm">Rp. 1.000.000</span>
										<span className="label label-sm label-danger">0%</span>
									</div>
								</div>
							</div>
							<div className="cart-item__action display-horizontal mtb-10">
								<div className="action-counter">
									<SubmitBtn className="btn sm-less-btn success-less-btn" icon={MinusCircleFilled}></SubmitBtn>
									<span className="action-counter-value">1</span>
									<SubmitBtn className="btn sm-less-btn success-less-btn" icon={PlusCircleFilled}></SubmitBtn>
								</div>
								<SubmitBtn className="btn sm-less-btn danger-less-btn cart-item__action-delete" icon={DeleteFilled} />
							</div>
						</div>
						<div className="cart-item">
							<div className="cart-item__detail">
								<img className="cart-item__detail-img" src="https://images.unsplash.com/photo-1592243503355-5183f4c8f689?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="cart-img" width="100%" height="100%" />
								<div className="cart-item__detail-body">
									<div className="body-head">
										Lorem ipsum dolor .
									</div>
									<div className="body-price">
										<span>Rp. 300.000</span>
										<span className="label label-danger-transparent label-sm">Rp. 1.000.000</span>
										<span className="label label-sm label-danger">0%</span>
									</div>
								</div>
							</div>
							<div className="cart-item__action display-horizontal mtb-10">
								<div className="action-counter">
									<SubmitBtn className="btn sm-less-btn success-less-btn" icon={MinusCircleFilled}></SubmitBtn>
									<span className="action-counter-value">1</span>
									<SubmitBtn className="btn sm-less-btn success-less-btn" icon={PlusCircleFilled}></SubmitBtn>
								</div>
								<SubmitBtn className="btn sm-less-btn danger-less-btn cart-item__action-delete" icon={DeleteFilled} />
							</div>
						</div>
						<div className="cart-item">
							<div className="cart-item__detail">
								<img className="cart-item__detail-img" src="https://images.unsplash.com/photo-1593369196682-6d8ec9ff3ae0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="cart-img" width="100%" height="100%" />
								<div className="cart-item__detail-body">
									<div className="body-head">
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere.
									</div>
									<div className="body-price">
										<span>Rp. 300.000</span>
										<span className="label label-danger-transparent label-sm">Rp. 1.000.000</span>
										<span className="label label-sm label-danger">0%</span>
									</div>
								</div>
							</div>
							<div className="cart-item__action display-horizontal mtb-10">
								<div className="action-counter">
									<SubmitBtn className="btn sm-less-btn success-less-btn" icon={MinusCircleFilled}></SubmitBtn>
									<span className="action-counter-value">1</span>
									<SubmitBtn className="btn sm-less-btn success-less-btn" icon={PlusCircleFilled}></SubmitBtn>
								</div>
								<SubmitBtn className="btn sm-less-btn danger-less-btn cart-item__action-delete" icon={DeleteFilled} />
							</div>
						</div>


					</div>
					<div className="cart-summary-wrapper">
						<div className="cart-summary" >
							<div>
								<h4>Cart Summary</h4>
								<hr />
							</div>
							<ul className="cart-summary__total-price">
								<li>
									<span>Total price</span>
									<span>Rp. 400.000</span>
								</li>
								<li>
									<span>Total Diskon</span>
									<span className="text-line-through">Rp. 200.000</span>
								</li>
							</ul>
							<div>
								<hr />
							</div>
							<div className="cart-summary__grand-total">
								<span>Grand Total</span>
								<span>Rp. 6.000.000</span>
							</div>
							<div className="cart-summary_btn">
								<SubmitBtn label="Checkout" className="btn sm-btn primary-btn" />
							</div>
						</div>
					</div>

				</div>
			</StandartLayout.Content>
		</StandartLayout>
	)
}

export const getServerSideProps = async (ctx) => {
	const nextUrlEncode = encodeURIComponent(ctx.req.url)
	const token = nookies.get(ctx);
	let props;
	if (!token.token) {
		redirectTo(`/login?next=${nextUrlEncode}`, ctx)
	}
	await adminFirebase.auth().verifyIdToken(token.token)
		.then(response => {
			if (!response) {
				redirectTo(`/login?next=${nextUrlEncode}`, ctx)
			}
		}).catch(error => {
			if (error.errorInfo.code === 'auth/id-token-expired') {
				redirectTo(`/login?next=${nextUrlEncode}`, ctx)
			}
			props = { ...error }
		})

	return {
		props: { ...props }
	}

}

export default CartPage;