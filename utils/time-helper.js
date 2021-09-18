import moment from 'moment';
moment.locale('id')

export const getTime = (date, format = 'D MMM yyyy') => {
	return moment(date).format(format)
}