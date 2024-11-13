import { Box, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default function LandingPage() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header showCart={false} />
      <Box
        sx={{
          flexGrow: 1,
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url("https://github.com/hughpaud2014/paradise-resource-files/blob/main/Nursery.png?raw=true")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: 1,
        }}
      >
        <Container maxWidth={false}>
          <Box sx={{ textAlign: 'left', color: 'white', py: { xs: 4, md: 8 } }}>
            <Typography variant="h2" component="h1" gutterBottom sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
              Paradise Nursery
            </Typography>
          </Box>
          <Button
            component={Link}
            to="/products"
            variant="contained"
            size="large"
            sx={{
              backgroundColor: '#2e7d32',
              '&:hover': {
                backgroundColor: '#1b5e20',
              },
              fontSize: { xs: '0.875rem', md: '1rem' },
              padding: { xs: '8px 16px', md: '10px 20px' }
            }}
          >
            Get Started
          </Button>
        </Container>
        <Box sx={{ maxWidth: '40%', mx: 'auto', textAlign: 'left', color: 'white', py: { xs: 4, md: 8 } }}>

        <Typography variant="h5" paragraph sx={{ mb: 4, fontSize: { xs: '1rem', md: '1rem' } }}>
  Welcome to Paradise Nursery! We are a family-owned business dedicated to bringing beauty and life to your spaces through a carefully curated selection of plants, flowers, and garden supplies. At Paradise Nursery, we believe in the transformative power of nature, whether you're looking to create a peaceful backyard oasis, enhance your home with indoor greenery, or start your own vegetable garden.
</Typography>
<Typography variant="h5" paragraph sx={{ mb: 4, fontSize: { xs: '1rem', md: '1rem' } }}>
  With a team of passionate horticulturists and garden experts, we're here to help you every step of the way – from plant selection and care tips to landscape design. Our mission is to make gardening accessible, enjoyable, and sustainable for everyone, no matter your level of experience.
</Typography>
<Typography variant="h5" paragraph sx={{ mb: 4, fontSize: { xs: '1rem', md: '1rem' } }}>
  Explore Paradise Nursery, where every plant finds a home, and let us inspire you to grow something beautiful today!
</Typography>


        </Box>
      </Box>
    </Box>
  );
}
