import blog23 from '../../Assets/FEMA Guidelines.png'
import blog24 from '../../Assets/What is trade finance.png'
import blog25 from '../../Assets/Export Declaration Form.png'
import blog26 from '../../Assets/What is bill discounting.png'
import blog27 from '../../Assets/RBI Guidelines for inward remittance.png'
import blog28 from '../../Assets/Types of export invoices.png'
import blog29 from '../../Assets/What Is a Working Capital Loan for Exporter_.jpg'
import blog30 from '../../Assets/Payment Gateways vs Payment Aggregators.png'
import blog31 from '../../Assets/What is the Export Data Processing and Monitoring System.png'
import blog32 from '../../Assets/Types of cross-border payments.png'
import blog33 from '../../Assets/Import Data Processing and Monitoring System.png'
import blog34 from '../../Assets/Bill discount vs Bill Purchase.png'
import blog35 from '../../Assets/What is Letter of Credit.png'
import blog36 from '../../Assets/Letter of Credit - Guide for Indian exporters.png'
import blog37 from '../../Assets/Top 5 Export payment terms for exporters.png'
import blog38 from '../../Assets/What Is a bill of exchange in export trade.png'
import blog39 from '../../Assets/What is export factoring.jpg'
import blog40 from '../../Assets/Export factoring vs bill discounting.jpg'


const data = [
  {
    id: 40,
    img: blog40,
    alt: 'Export factoring vs bill discounting',
    link: "/difference-between-export-factoring-and-bill-discounting",
    text: "What Is the Difference Between Export Factoring and Bill Discounting? ",
  },
  {
    id: 39,
    img: blog39,
    alt: 'What is export factoring',
    link: "/what-is-export-factoring",
    text: "What Is Export Factoring and What Is Its Role in Exports?",
  },
  {
    id: 38,
    img: blog38,
    alt: 'What is a bill of exchange',
    link: "/what-is-bill-of-exchange",
    text: "What Is a Bill of Exchange in the Export Trade? LeRemitt",
  },
  {
    id: 37,
    img: blog37,
    alt: 'What is export payment terms',
    link: "/export-payment-terms",
    text: "Export Payment Terms: Key Terms in International Shipping | LeRemitt",
  },
  {
    id: 36,
    img: blog36,
    alt: 'What is Letter of Credit',
    link: "/what-is-letter-of-credit",
    text: "What is Letter of Credit: A Guide for Indian Exporters | LeRemitt",
  },
  {
    id: 35,
    img: blog35,
    alt: 'What is Letter of Credit',
    link: "/types-of-letter-of-credit",
    text: "What Are the Different Types of Letter of Credit? LeRemitt",
  },
  {
    id: 34,
    img: blog34,
    alt: 'Bill Discounting vs. Bill Purchase',
    link: "/bill-discounting-vs-bill-purchase",
    text: "Bill Discounting vs. Bill Purchase: Learn Which Options Works for You",
  },
  {
    id: 33,
    img: blog33,
    alt: 'What is Import Data Processing and Monitoring System',
    link: "/import-data-processing-and-monitoring-system",
    text: "What is the Import Data Processing and Monitoring System?",
  },
  {
    id: 32,
    img: blog32,
    alt: 'Cross-Border Payments in India',
    link: "/types-of-cross-border-payments",
    text: "Types of Cross-Border Payments and Players in India",
  },
  {
    id: 31,
    img: blog31,
    alt: 'What is EDPMS?',
    link: "/export-data-processing-and-monitoringsystem",
    text: "What Is the Export Data Processing and Monitoring System (EDPMS)? ",
  },
  {
    id: 30,
    img: blog30,
    alt: 'Difference between payment gateway and payment aggregator',
    link: "/payment-gateway-vs-payment-aggregator",
    text: "Payment Gateway vs Payment Aggregator: Understand the Differences ",
  },
  {
    id: 29,
    img: blog29,
    alt: 'What is a working capital loan?',
    link: "/what-is-a-working-capital-loan",
    text: "What Is a Working Capital Loan and How Does It Work?",
  },
  {
    id: 28,
    img: blog28,
    alt: 'Types of export invoices',
    link: "/types-of-export-invoices",
    text: "Types of Export Invoices: Which Export Invoice Is Right for Your Business?",
  },
  {
    id: 27,
    img: blog27,
    alt: 'RBI Guidelines for Inward Remittance to India',
    link: "/rbi-guidelines-for-inward-remittance",
    text: "What Is Inward Remittance? A Complete Guide for Exporters",
  },
  {
    id: 26,
    img: blog26,
    alt: 'What is Bill Discounting?',
    link: "/what-is-bill-discounting",
    text: "What is Bill Discounting, and What is the Process for Bill Discounting?",
  },
  {
    id: 25,
    img: blog25,
    alt: 'What is the purpose of Export Declaration Form',
    link: "/guide-on-export-declaration-form",
    text: "A Complete Guide on Export Declaration Form",
  },
  {
    id: 24,
    img: blog24,
    alt: 'What is Trade Finance',
    link: "/what-is-trade-finance",
    text: "What is Trade Finance? What are its Meaning and Benefits? ",
  },
  {
    id: 23,
    img: blog23,
    alt: 'What are FEMA Guidelines',
    link: "/fema-guidelines",
    text: "FEMA Guidelines for Export Realization ",
  },
  {
    id: 22,
    img: 'https://www.leremitt.com/Images/new/blog+22.png',
    alt: 'Complete Guide to IEC Registration Process',
    link: "/guide-about-iec-registration-process",
    text: "IEC Registration Process and the Next Steps",
  },
  {
    id: 21,
    img: 'https://www.leremitt.com/Images/new/Learn+about+Foreign+Inward+Remittance+Certificate+(FIRC).png',
    alt: 'Learn about foreign inward remittance certificate',
    link: "/learn-about-foreign-inward-remittance-certificate",
    text: "Learn about FIRC and What It Means to Indian Exporters",
  },
  {
    id: 20,
    img: 'https://www.leremitt.com/Images/new/Unique+Transaction+Reference+Number.png',
    alt: 'Learn About Unique Transaction Reference (UTR) Number',
    link: "/complete-guide-about-utr-number",
    text: "A Complete Guide to Unique Transaction Reference (UTR)",
  },
  {
    id: 19,
    img: 'https://www.leremitt.com/Images/blog/Blog-imgs/blog+19.png',
    alt: 'export documentation',
    link: "/what-is-ebrc-how-to-obtain-it-guide",
    text: "What is eBRC, and how can I obtain it?",
  },
  {
    id: 18,
    img: 'https://www.leremitt.com/Images/blog/Blog-imgs/blog+18.png',
    alt: 'Exchange Houses',
    link: "/role-of-exchange-houses-middle-east-remittances-to-india",
    text: "Role of Exchange Houses in the Middle East",
  },
  {
    id: 17,
    img: 'https://www.leremitt.com/Images/blog/Blog-imgs/blog+17.png',
    alt: 'Trade for Exporters',
    link: "/essential-documents-for-cross-border-trade-guide",
    text: "Documents Required for Cross-Border Trade for Exporters",
  },
  {
    id: 16,
    img: 'https://www.leremitt.com/Images/blog/Blog-imgs/blog+16.png',
    alt: 'Nostro and Vostro Accounts',
    link: "/understanding-nostro-vostro-accounts-in-global-banking",
    text: "What Are Nostro and Vostro Accounts? Key Concepts and Benefits",
  },
  {
    id: 15,
    img: 'https://www.leremitt.com/Images/blog/Blog-imgs/blog+15.png',
    alt: 'Central Bank Digital Currency',
    link: "/cbdc-impact-on-retail-and-wholesale-cross-border-challenges",
    text: "CBDC – What does it mean for retail and wholesale? ",
  },
  {
    id: 14,
    img: 'https://www.leremitt.com/Images/blog/Blog-imgs/blog+14.png',
    alt: 'entrepreneurship',
    link: "/building-company-vs-running-marathon-insights",
    text: "Building a Company and Running a Marathon",
    category: "founder",
  },
  {
    id: 13,
    img: 'https://www.leremitt.com/Images/blog/Blog-imgs/blog+13.png',
    alt: 'India exports',
    link: "/india-exports-2022-2023-insights",
    text: "Navigating India's Export Ecosystem: Insights from 2022-23",
  },
  {
    id: 12,
    img: 'https://www.leremitt.com/Images/blog/Blog-imgs/blog+12.png',
    alt: 'Compliance vs. Alliance',
    link: "/compliance-vs-alliance-b2b-remittance-battle",
    text: "Compliance vs. Alliance: The B2B Cross-Border Remittance Showdown",
    category: "founder",
  },
  {
    id: 11,
    img: 'https://www.leremitt.com/Images/blog/Blog-imgs/blog+11.png',
    alt: 'Purpose Codes',
    link: "/purpose-codes-in-international-payments",
    text: "Understanding the Importance of Purpose Codes For Inward Remittance",
    // category: "article", 
  },
  {
    id: 10,
    img: 'https://www.leremitt.com/Images/blog/Blog-imgs/blog+10.jpeg',
    alt: 'Cross Border Payments',
    link: "/charges-and-fees-for-international-payments",
    text: "Decoding Foreign Transaction Fees and Charges To Exporters!",
    // category: "article", 
  },
  {
    id: 9,
    img: 'https://www.leremitt.com/Images/blog/Blog-imgs/blog+09.png',
    alt: 'Swift',
    link: "/understanding-swift-in-global-finance",
    text: "What is SWIFT? ",
    // category: "article", 
  },
  {
    id: 8,
    img: 'https://www.leremitt.com/Images/blog/Blog-imgs/blog+08.jpeg',
    alt: 'domestic payments',
    link: "/cross-border-vs-domestic-payments-complexity",
    text: "Why are cross-border payments complicated vis-a-vis domestic payments?  ",
    // category: "article", 
  },
  {
    id: 1,
    img: 'https://www.leremitt.com/Images/blog/Blog-imgs/blog+01.jpg',
    alt: "Market expansion",
    link: "/opportunities-and-challenges-in-global-trade-market",
    text: "Exploring Opportunities and Challenges in the $32 Trillion Global Trade Market",
    // category: "article", 
  },
  {
    id: 2,
    img: 'https://www.leremitt.com/Images/blog/Blog-imgs/blog+02.jpg',
    alt: "Cost efficiency",
    link: "/impact-of-cbdc-on-cross-border-transactions",
    text: " Global Adoption of CBDCs & Its Impact on Cross-Border Transactions ",
    // category: "article", 
  },
  {
    id: 3,
    img: 'https://www.leremitt.com/Images/blog/Blog-imgs/blog+03.jpg',
    alt: "Enhanced operation ",
    link: "/latest-trends-in-cross-border-finance",
    text: "Outline: Trends in Cross-Border Finance ",
    // category: "article", 
  },
  {
    id: 4,
    img: 'https://www.leremitt.com/Images/blog/Blog-imgs/blog+04.jpg',
    alt: "Trade Growth for MSMEs",
    link: "/international-trade-growth-factors-for-msmes",
    text: "Enabling International Trade Growth for MSMEs: Key Factors to Consider ",
    // category: "article", 
  },
  {
    id: 5,
    img: 'https://www.leremitt.com/Images/blog/Blog-imgs/blog+05.jpg',
    alt: "global economy",
    link: "/role-of-ftas-in-trade-economy",
    text: "The Role of Free Trade Agreements (FTAs) in Modern Trade and Economy",
    // category: "article", 
  },
  {
    id: 6,
    img: 'https://www.leremitt.com/Images/blog/Blog-imgs/blog+06.jpg',
    alt: " Pathway to Growth",
    link: "/msme-global-expansion-pathways",
    text: "Expanding Global Horizons: MSMEs' Pathway to Growth ",
    // category: "article", 
  },
  {
    id: 7,
    img: 'https://www.leremitt.com/Images/blog/Blog-imgs/blog+07.jpg',
    alt: "Cross-border remittances meaning and process",
    link: "/fintech-cross-border-remittance-revolution",
    text: "Fintech's Role in Revolutionizing Cross-Border Remittances",
    // category: "article", 
  },
];

export default data;
