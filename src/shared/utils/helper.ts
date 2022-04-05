import * as moment from 'moment';

export function formattedDate(d = new Date()) {
  return [d.getDate(), d.getMonth() + 1, d.getFullYear()]
    .map((n) => (n < 10 ? `0${n}` : `${n}`))
    .join("-");
}

export function formattedDateTime(d = new Date()) {
  return moment(d).format('YYYY-MM-DD HH:mm:ss');
}


export function formatDateTime(d = new Date()) {
  return moment(d).format('YYYY-MM-DD');
}