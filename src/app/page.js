'use client';
import React from 'react';
import { Typography, Button, Container, Grid, Card, CardContent, CardMedia, Box } from '@mui/material';
import Link from 'next/link'


export default function Home() {
  
  return (
    <>
      <Box sx={{ textAlign: 'center', py: 10, backgroundColor: '#f5f5f5' }}>
        <Typography variant="h3" sx={{ color: 'black' }} gutterBottom>Welcome to My Website</Typography>
        <Typography variant="h6" sx={{ color: 'black' }}>Explore our amazing products and services</Typography>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          <Link href="/products" style={{ textDecoration: 'none', color: 'white' }}>Get Started</Link>
        </Button>
      </Box>

      {/* Cards Section */}
      <Container sx={{ width: "100%" }}>
        <Grid container spacing={3}>
          {["/black-friday-sales-concept.jpg", "/blank-white-paper-mock-up.jpg", "/template-wedding-ornaments-pink-envelope.jpg"].map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ width: "100%" }}>
                <CardMedia
                  component="img"
                  height="120"
                  image={item}  // Correct way to reference public images
                  alt="Card image"
                />
                <CardContent sx={{ height: 50, width: "100%", display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="h4">Card {index + 1}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

    </>
  );
}
