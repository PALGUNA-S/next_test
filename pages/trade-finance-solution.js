import TradeFinance from '../components/Trade_Finance/TradeFinance';
import Head from 'next/head';

export default function TradeFinancePage() {
  return (
    <>
      <Head>
        <title>Trade Finance Solutions for Indian Exporters | LeRemitt</title>
        <meta name="description" content="Struggling with cash flow and payment delays in your export business? Our trade finance solutions empower Indian exporters to overcome challenges, improve cash flows" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Trade Finance Solutions for Indian Exporters | LeRemitt" />
        <meta property="og:description" content="Struggling with cash flow and payment delays in your export business? Our trade finance solutions empower Indian exporters to overcome challenges, improve cash flows" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.leremitt.com/trade-finance-solution" />
        <meta property="og:image" content="https://yourwebsite.com/images/trade-finance.jpg" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="LeRemitt" />
      </Head>
      <TradeFinance />
    </>
  );
}
