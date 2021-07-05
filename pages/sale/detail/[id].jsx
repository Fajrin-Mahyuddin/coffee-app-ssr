import React from 'react';
import { SubmitBtn } from 'components';
import { StandartLayout } from 'layout';
import { useRouter } from 'next/router';

const SaleDetail = () => {
	const router = useRouter();
	console.log("****", router)
	return (
		<StandartLayout>
			<StandartLayout.Content>
				<div className="container">
					ini detial dari 123
					<SubmitBtn label="sumbit" />
				</div>
			</StandartLayout.Content>
		</StandartLayout>
	)
}

export default SaleDetail;