import React, { Suspense, useEffect } from 'react';
import Footer from './component/Footer';
import { useTranslation, Trans } from 'react-i18next';
import Translate from './Utils/Translate';
import Home from './component/Home';


function App() {
  const { t } = useTranslation();
  let currentLanguae = localStorage.getItem('i18nextLng')
  useEffect(() => {
    if (currentLanguae === 'ar') {
      document.body.dir = 'rtl'
    } else {
      document.body.dir = 'ltr'
    }
  }, [currentLanguae])

  return (
    <div className="App">
      <Translate />
      <header className="App-header">
        {/*<p>
          <Trans i18nKey="part1">
          </Trans>
        </p> */}
        <div >
          {t('part1')}
        </div>
        <a
          href="#"
        >
          {t('part2')}
        </a>

      </header>
      <Home />
      <Footer />
    </div>
  );
}


// here app catches the suspense from page in case translations are not yet loaded
export default function WrappedApp() {
  return (
    <Suspense fallback="...is loading">

      <App />
    </Suspense>
  );
}