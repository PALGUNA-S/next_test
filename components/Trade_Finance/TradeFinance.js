import React from 'react'
import Contact from './Contact_Trade/Contact'
import FAQ from './Faqs_Trade/Faqs'
import TradeBanner from './FirstPalge/TradeBanner'
import ShipmentFinance from './ShipmentFinance/ShipmentFinance'

const TradeFinance = () => {
    return (
        <main>
            <TradeBanner />
            <ShipmentFinance />
            <Contact />
            <FAQ />
        </main>
    )
}

export default TradeFinance