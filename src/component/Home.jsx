import React from 'react'
import i18next from 'i18next';

function Home() {
    return (
        <div>
            {i18next.t('Test')}
        </div>
    )
}

export default Home
