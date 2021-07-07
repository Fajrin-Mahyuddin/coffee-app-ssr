import { SendOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { SubmitBtn, Form, InputAlert, InputText, InputRadio, InputDate } from "components";
import { StandartLayout } from "layout";

const CheckoutPage = () => {
	return (
		<StandartLayout>
			<StandartLayout.Content>
				<div className="cart">
					<div className="cart-list">
						<div>
							<h4><ShoppingCartOutlined /> Checkout</h4>
							<hr />
						</div>
						<div className="create-order">
							<Form className="form-horizontal w-100" onSubmit={() => console.log("submit")}>
								<Form.Row>
									<Form.Column>
										<InputAlert alert={null} />
									</Form.Column>
								</Form.Row>
								<Form.Row>
									<Form.Column>
										<InputText classWrapper="display-column column-item" label="Jumlah pesanan" error={false} />
										<InputText classWrapper="display-column column-item" label="Harga" />
										<InputText classWrapper="display-column column-item" label="Jumlah" />
										<InputText classWrapper="display-column column-item" label="Jumlah" />
									</Form.Column>
									<Form.Column>
										<InputText classWrapper="display-column column-item" label="Jumlah pesanan" />
										<InputText classWrapper="display-column column-item" label="Harga" />
									</Form.Column>
									<Form.Column>
										<InputText classWrapper="display-column column-item" label="Jumlah pesanan" />
									</Form.Column>
									<Form.Column className="flex-start mtb-10">
										<InputRadio id="payment_1" name="payment" classWrapper="display-horizontal column-item" label="Transfer" />
										<InputRadio id="payement_2" name="payment" classWrapper="display-horizontal column-item" label="Cash" />
									</Form.Column>
									<Form.Column>
										<InputDate />
									</Form.Column>
								</Form.Row>
								<hr />
							</Form>
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
								<SubmitBtn label="Create Order" className="btn sm-btn primary-btn" />
							</div>
						</div>
					</div>

				</div>
			</StandartLayout.Content>
		</StandartLayout>
	)
}

export default CheckoutPage;