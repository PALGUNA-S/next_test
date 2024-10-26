import Head from "next/head";
// import BlogList from "./blogs/BlogList";

export default function BlogsPage() {
  return (
    <>
      <Head>
        <title>LeRemitt | Knowledge Hub For International Trade</title>
        <meta name="description" content="Get news & articles on payments, banking & business growth. LeRemitt Blogs empower your financial journey & business success." />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="LeRemitt | Knowledge Hub For International Trade" />
        <meta property="og:description" content="Get news & articles on payments, banking & business growth. LeRemitt Blogs empower your financial journey & business success." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.leremitt.com/blogs" />
        <meta property="og:image" content="https://yourwebsite.com/images/blog.jpg" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="LeRemitt" />
      </Head>
    </>
  );
}
