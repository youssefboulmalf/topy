const orders = [
  {
    id: 1,
    creationDate: '04-08-1999',
    totalPrice: 2789,
    groupTotal: 2,
    orderStatus: "Enquiry",
    orderDetails: {
      items:[
          {id: 1,
          name: "4 days safari",
          thumb: 'somthing',
          price: 199,
          count: 2,
          date: "04-09-2022"},
          {id: 1,
            name: "moshi",
            thumb: 'somthing',
            price: 199,
            count: 2,
            date: "04-09-2022"},
          ],
      groupInfo:[
        {
          firstName: "john",
          lastName: "Doe",
          phoneNumber: "+316 2552521",
          email: "johnDoe@gmail.com",
          nationality: "Dutch",
          age: 12
        },
        {
          firstName: "john",
          lastName: "Moe",
          age: 12,
          nationality: "Dutch",
        }
      ]
    }
  }
]