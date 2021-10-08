import moment from 'moment';

export const getTime = (date, format = 'D MMM yyyy') => {
	// moment.locale("id");
	return moment(date).format(format);
}