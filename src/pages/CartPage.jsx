import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Button,
  IconButton,
  Grid,
  Divider,
  Paper
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { useCart } from '../context/CartContext';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, getTotalItems, getTotalPrice } = useCart();

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Header />
      <Container sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>
          Shopping Cart ({getTotalItems()} items)
        </Typography>

        {cart.length === 0 ? (
          <Paper sx={{ p: 4, textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>
              Your cart is empty
            </Typography>
            <Button
              component={Link}
              to="/products"
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
            >
              Continue Shopping
            </Button>
          </Paper>
        ) : (
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              {cart.map(item => (
                <Card key={item.id} sx={{ mb: 2 }}>
                  <CardContent>
                    <Grid container spacing={2} alignItems="center">
                      <Grid item xs={3}>
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{ width: '100%', borderRadius: '8px' }}
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <Typography variant="h6">{item.name}</Typography>
                        <Typography color="text.secondary">
                          ${item.price.toFixed(2)} each
                        </Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <IconButton
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <RemoveIcon />
                          </IconButton>
                          <Typography sx={{ mx: 2 }}>{item.quantity}</Typography>
                          <IconButton
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <AddIcon />
                          </IconButton>
                        </Box>
                      </Grid>
                      <Grid item xs={2}>
                        <Typography variant="h6" align="right">
                          ${(item.price * item.quantity).toFixed(2)}
                        </Typography>
                        <IconButton
                          color="error"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              ))}
            </Grid>
          </Grid>
        )}
      </Container>
    </Box>
  );
} 
