import React from 'react';
import { CloseCircleFilled } from '@ant-design/icons'

const InputAlert = ({ alert, onClick }) => {
	return alert?.type ?
		(
			<div className={`alert alert-${alert?.type}`}>
				<span className="alert-body">
					{alert?.body}
				</span>
				<CloseCircleFilled onClick={onClick} />
			</div>
		) : <></>
}

export default InputAlert;
