import { StarFilled, HeartFilled } from '@ant-design/icons'

const ItemSale = ({ item: { id, title, description, image, price, category } }) => {
	console.log("item")
	return (
		<div className="sale-item">
			<div className="sale-item__img">
				<img src={image} alt="img-item" width="50%" height="50%" />
				<HeartFilled />
			</div>
			<div className="sale-item__body">
				<a href={`/sale/detail/${id}`} className="sale-item__body-title text-overflow-2">
					{title}
				</a>
				<div className="sale-item__body-review display-horizontal">
					<div className="start">
						<StarFilled style={{ color: "orange" }} />
						<StarFilled style={{ color: "orange" }} />
						<StarFilled style={{ color: "orange" }} />
						<StarFilled style={{ color: "grey" }} />
						<StarFilled style={{ color: "grey" }} />
					</div>
					<span className="label label-sm label-primary">{category}</span>
				</div>
				<div className="sale-item__body-desc text-overflow-3">
					{description}
				</div>
				<div className="sale-item__body-footer display-horizontal">
					<div className="content-price">
						<span className="label label-sm label-warning label-transparent">0%</span>
						<span>$ {price}</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ItemSale