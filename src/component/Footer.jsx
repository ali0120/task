import React  from 'react'
import { DateTime } from 'luxon';
import i18next from 'i18next';

const getGreetingTime = (d = DateTime.now()) => {
    const split_afternoon = 12; // 24hr time to split the afternoon
    const split_evening = 17; // 24hr time to split the evening
    const currentHour = parseFloat(d.toFormat('hh'));

    if (currentHour >= split_afternoon && currentHour <= split_evening) {
        return 'afternoon';
    } else if (currentHour <= split_evening) {
        return 'evening';
  }
    return 'morning';
}

const Footer = () => (

  <div className="Footer">
    <div>{i18next.t('date', { date: new Date(), context: getGreetingTime() })}</div>
  </div>
);

export default Footer;