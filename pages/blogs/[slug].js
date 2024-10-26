import React from 'react';
import { useRouter } from 'next/router';
import { Box, Container, Typography } from '@mui/material';
import blogData from '../../data/blogData'; // Assuming you have the blog data stored here

const BlogDetails = () => {
  const router = useRouter();
  const { slug } = router.query; // Get the blog slug from the URL

  // Find the blog post that matches the slug
  const blogPost = blogData.find((post) => post.link === slug);

  if (!blogPost) {
    return (
      <Container>
        <Typography variant="h4">Blog post not found</Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Box>
        {/* Blog Title */}
        <Typography variant="h2" sx={{ fontWeight: '600', marginTop: '1rem' }}>
          {blogPost.text}
        </Typography>

        {/* Blog Image */}
        <Box sx={{ marginY: 3 }}>
          <img src={blogPost.img} alt={blogPost.alt} style={{ width: '100%', height: 'auto' }} />
        </Box>
      </Box>
    </Container>
  );
};

export default BlogDetails;
