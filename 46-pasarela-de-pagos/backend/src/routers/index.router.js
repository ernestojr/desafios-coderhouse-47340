import { Router } from 'express';
import PayementsService from '../services/payments.service.js';

const router = Router();

const mockCart = [
    { id: 1, name: "papas", price: 1000 },
    { id: 2, name: "queso", price: 500 },
    { id: 3, name: "hamburguesa", price: 1500 },
    { id: 4, name: "soda", price: 1000 },
    { id: 5, name: "golosinas", price: 800 }
];

const users = [
  {
    id: 1, 
    fullname: 'Ernesto Rojas',
    address: {
      street: 'Siempre viva',
      postal_code: '1234213',
      external_number: '100',
    },
  }
];

router.get('/', (req, res) => {
  res.send('Hello Coder House 🖐️');
});

router.post('/api/payments/payment-intents', async (req, res) => {
  const { query: { id } } = req;
  const product = mockCart[id];
  const user = users[0];
  if (!product) {
    return res.status(404).json({ message: 'Producto no encontrado 😎' });
  }
  const service = new PayementsService();
  const result = await service.createPaymentInten({
    amount: product.price * 100,
    currency: 'usd',
    metadata: {
      user_id: user.id,
      order_detail: JSON.stringify([{ ...product, quantity: 1 }], null, '\t'),
      shipping_dresss: JSON.stringify(user.address, null, '\t'),
    },
  });
  console.log('result', result);
  res.json({ status: 'sucess', payload: result });
});

export default router;