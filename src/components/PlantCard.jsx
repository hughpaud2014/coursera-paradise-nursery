import { AppBar, Toolbar, Typography, Badge, IconButton, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

// Header component with navigation and cart icon
export default function Header({ showCart = true }) {
  const { getTotalItems } = useCart(); // Hook to get total items in cart

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#2e7d32' }}>
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: 'none',
            color: 'white',
            fontWeight: 'bold'
          }}
        >
          Paradise Nursery
        </Typography>
        <Button
          component={Link}
          to="/products"
          color="inherit"
          sx={{ mx: 2 }}
        >
          Products
        </Button>
        {showCart && (
          <IconButton
            component={Link}
            to="/cart"
            color="inherit"
            edge="end"
          >
            <Badge badgeContent={getTotalItems()} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
} 