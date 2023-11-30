import mongoose from 'mongoose';

import OrderModel from './models/order.model.js';

const data = [
  {
    name: 'Pepperoni',
    size: 'small',
    price: 19,
    quantity: 10,
  },
  {
    name: 'Pepperoni',
    size: 'medium',
    price: 20,
    quantity: 20,
  },
  {
    name: 'Pepperoni',
    size: 'large',
    price: 21,
    quantity: 30,
  },
  {
    name: 'Cheese',
    size: 'small',
    price: 12,
    quantity: 15,
  },
  {
    name: 'Cheese',
    size: 'medium',
    price: 13,
    quantity: 50,
  },
  {
    name: 'Cheese',
    size: 'large',
    price: 14,
    quantity: 10,
  },
  {
    name: 'Vegan',
    size: 'small',
    price: 17,
    quantity: 10,
  },
  {
    name: 'Vegan',
    size: 'medium',
    price: 18,
    quantity: 10,
  },
];

const URI = 'mongodb://localhost:27017/pizzeria?retryWrites=true&w=majority';

const insertData = async () => {
  await OrderModel.insertMany(data);
  const result = await OrderModel.find({});
  console.log('result', result);
}

const getReportBySize = async (size) => {
  const result = await OrderModel.aggregate([
    {
      $match: { size },
    },
    {
      $group: {
        _id: '$name',
        totalQuantity: { $sum: '$quantity' }
      }
    },
    {
      $sort: { totalQuantity: -1 },
    },
    {
      $group: {
        _id: 1,
        orders: { $push: '$$ROOT' }
      }
    },
    {
      $project: { _id: 0 },
    },
    {
      $merge: {
        into: 'reports',
      }
    }
  ]);
  console.log('result', JSON.stringify(result, null, 2));
}

async function test() {
  try {
    await mongoose.connect(URI);
    console.log('DB conectada con exito 😁');
    //await insertData();
    await getReportBySize('large');
  } catch (error) {
    console.error('Error 😨', error.message);
  }
}

test();