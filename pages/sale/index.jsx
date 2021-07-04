import React from 'react';
import { SubmitBtn } from 'components';
import { StandartLayout } from 'layout';

const Dashboard = () => {
	return (
		<StandartLayout>
			<StandartLayout.Content>
				<div className="container">
					ini dashboard
					<SubmitBtn label="sumbit" />
				</div>
			</StandartLayout.Content>
		</StandartLayout>
	)
}

export default Dashboard
