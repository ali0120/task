import React from 'react'
import { useTranslation } from 'react-i18next';
import 'flag-icon-css/css/flag-icon.min.css'
const lngs = {
    ar: {
        code: 'ar',
        name: 'Arabic',
        country_code: 'sa'
    },
    en: {
        code: 'en',
        name: 'English',
        country_code: 'gb'
    }
};
function Translate() {
    const { i18n } = useTranslation();
    let currentLanguae = localStorage.getItem('i18nextLng')

    return (
        <React.Fragment>
            {Object.keys(lngs).map((lng, index) => (
                <button key={index} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => {
                    i18n.changeLanguage(lng);
                    document.documentElement.lang = i18n.language;
                }}>
                    <span className={`flag-icon flag-icon-${lngs[lng].country_code} mx-2`}
                        style={{ opacity: currentLanguae === lngs[lng].code ? 0.5 : 1 }}></span>
                    {lngs[lng].name}
                </button>
            ))}
        </React.Fragment>
    )
}

export default Translate
