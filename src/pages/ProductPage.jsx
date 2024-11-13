import { useState } from 'react';
import { 
  Container, 
  Grid, 
  ToggleButton, 
  ToggleButtonGroup,
  Box,
  Typography 
} from '@mui/material';
import Header from '../components/Header';
import PlantCard from '../components/PlantCard';
import { plants } from '../data/plants';

export default function ProductPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', ...new Set(plants.map(plant => plant.category))];

  const filteredPlants = selectedCategory === 'All' 
    ? plants 
    : plants.filter(plant => plant.category === selectedCategory);

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Header />
      <Container sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Our Plants
        </Typography>
        <Box sx={{ mb: 4 }}>
          <ToggleButtonGroup
            value={selectedCategory}
            exclusive
            onChange={(e, newCategory) => {
              if (newCategory !== null) {
                setSelectedCategory(newCategory);
              }
            }}
            sx={{ flexWrap: 'wrap' }}
          >
            {categories.map(category => (
              <ToggleButton 
                key={category} 
                value={category}
                sx={{ m: 0.5 }}
              >
                {category}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Box>
        <Grid container spacing={3}>
          {filteredPlants.map(plant => (
            <Grid item key={plant.id} xs={12} sm={6} md={4}>
              <PlantCard plant={plant} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
} 