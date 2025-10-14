const users = [
  { name: "Alice",
    orders: [
      { amount: 100, status: "delivered" },
      { amount: 50, status: "pending" },
      { amount: 200, status: "delivered" }
    ]
  },
  { name: "Bob",
    orders: [
      { amount: 120, status: "cancelled" },
      { amount: 80, status: "delivered" }
    ]
  }
];
// You have an array of user objects. Each user has a name
//  and an array of orders (with amount and status). Return 
//  a new array of users, keeping only the "delivered" orders,
 