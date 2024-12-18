const mockData = [
    {
      id: 1,
      name: "Apple iPhone 16",
      image: "https://m.media-amazon.com/images/I/314AuUzHa2L._SY445_SX342_QL70_FMwebp_.jpg",
      description: "5G capable, 6.1-inch Super Retina XDR display, A17 Bionic chip.",
      price: 799.99,
      rating: 4.8,
      category: "Electronics",
    },
    {
      id: 2,
      name: "Sony WH-1000XM4",
      image: "https://m.media-amazon.com/images/I/51aXvjzcukL._SX679_.jpg",
      description: "Industry-leading noise canceling with Dual Noise Sensor technology.",
      price: 349.99,
      rating: 4.7,
      category: "Electronics",
    },
    {
      id: 3,
      name: "Dyson V11 Cordless Vacuum Cleaner",
      image: "https://m.media-amazon.com/images/I/41aM7EuQ9CL._SX300_SY300_QL70_FMwebp_.jpg",
      description: "Powerful suction for deep cleaning and up to 60 minutes of runtime.",
      price: 599.99,
      rating: 4.6,
      category: "Home Appliances",
    },
    {
      id: 4,
      name: "The Lean Startup by Eric Ries",
      image: "https://m.media-amazon.com/images/I/51STtIP+8qL._SY445_SX342_.jpg",
      description: "A must-read book on building successful startups.",
      price: 19.99,
      rating: 4.5,
      category: "Books",
    },
    {
      id: 5,
      name: "Samsung 55-inch QLED 4K Smart TV",
      image: "https://m.media-amazon.com/images/I/81cbFZwHYYL._SL1500_.jpg",
      description: "Vivid colors, 4K resolution, and smart features for streaming.",
      price: 999.99,
      rating: 4.8,
      category: "Electronics",
    },
    {
      id: 6,
      name: "Adidas Ultraboost 21 Running Shoes",
      image: "https://m.media-amazon.com/images/I/71qGs2JfKjL._SX695_.jpg",
      description: "Comfortable and responsive running shoes with Boost cushioning.",
      price: 179.99,
      rating: 4.7,
      category: "Fashion",
    },
    {
      id: 7,
      name: "Instant Pot Duo 7-in-1 Electric Pressure Cooker",
      image: "https://m.media-amazon.com/images/I/41VtfPX5JkL._SX300_SY300_QL70_FMwebp_.jpg",
      description: "Pressure cook, slow cook, sauté, steam, and more with one device.",
      price: 99.99,
      rating: 4.6,
      category: "Kitchen Appliances",
    },
    {
      id: 8,
      name: "Nintendo Switch Console",
      image: "https://m.media-amazon.com/images/I/416ZXLMGA6S._SY300_SX300_QL70_FMwebp_.jpg",
      description: "Versatile gaming console for playing at home or on the go.",
      price: 299.99,
      rating: 4.8,
      category: "Video Games",
    },
    {
      id: 9,
      name: "Echo Dot (4th Gen) Smart Speaker with Alexa",
      image: "https://m.media-amazon.com/images/I/51bUaf3xB7L._SY300_SX300_.jpg",
      description: "Compact smart speaker with Alexa for hands-free control.",
      price: 49.99,
      rating: 4.7,
      category: "Smart Home",
    },
    {
      id: 10,
      name: "Fitbit Charge 5 Fitness Tracker",
      image: "https://m.media-amazon.com/images/I/41sK3jjPlaL._SX300_SY300_QL70_FMwebp_.jpg",
      description: "Track your fitness, sleep, and heart rate with this slim tracker.",
      price: 149.99,
      rating: 4.5,
      category: "Health and Fitness",
    },
    {
      id: 11,
      name: "Bose QuietComfort 35 II Wireless Headphones",
      image: "https://m.media-amazon.com/images/I/31BsuGwJToL._SX300_SY300_QL70_FMwebp_.jpg",
      description: "Noise-canceling headphones with up to 20 hours of battery life.",
      price: 299.99,
      rating: 4.8,
      category: "Electronics",
    },
    {
      id: 12,
      name: "KitchenAid Artisan Series Stand Mixer",
      image: "https://m.media-amazon.com/images/I/81My7Z51sSL._SX679_.jpg",
      description: "Iconic stand mixer for mixing, kneading, and whipping ingredients.",
      price: 399.99,
      rating: 4.9,
      category: "Kitchen Appliances",
    },
    {
      id: 13,
      name: "American Tourister Backpack",
      image: "https://m.media-amazon.com/images/I/71mM5CQjEhL._SX522_.jpg",
      description: "Classic backpack with modern functionality and style.",
      price: 99.99,
      rating: 4.6,
      category: "Fashion",
    },
    {
      id: 14,
      name: "JBL Flip 5 Waterproof Bluetooth Speaker",
      image: "https://m.media-amazon.com/images/I/41cYR1yC78L._SX300_SY300_QL70_FMwebp_.jpg",
      description: "Portable speaker with up to 12 hours of playtime and waterproof design.",
      price: 119.99,
      rating: 4.7,
      category: "Electronics",
    },
    {
      id: 15,
      name: "Airdopes 181",
      image: "https://m.media-amazon.com/images/I/41kWMvhJyEL._SX300_SY300_QL70_FMwebp_.jpg",
      description: "Capture high-quality images with an easy-to-use DSLR camera.",
      price: 449.99,
      rating: 4.5,
      category: "Electronics",
    }
  ];
  
  export default mockData;

  export const homeCardData = [
    {
        title: "Popular Games",
        items: [
            {
                id: 12,
                name: "KitchenAid Artisan Series Stand Mixer",
                image: "https://m.media-amazon.com/images/I/81My7Z51sSL._SX679_.jpg",
                description: "Iconic stand mixer for mixing, kneading, and whipping ingredients.",
                price: 399.99,
                rating: 4.9,
                category: "Kitchen Appliances",
              },
              {
                id: 13,
                name: "American Tourister Backpack",
                image: "https://m.media-amazon.com/images/I/71mM5CQjEhL._SX522_.jpg",
                description: "Classic backpack with modern functionality and style.",
                price: 99.99,
                rating: 4.6,
                category: "Fashion",
              },
              {
                id: 14,
                name: "JBL Flip 5 Waterproof Bluetooth Speaker",
                image: "https://m.media-amazon.com/images/I/41cYR1yC78L._SX300_SY300_QL70_FMwebp_.jpg",
                description: "Portable speaker with up to 12 hours of playtime and waterproof design.",
                price: 119.99,
                rating: 4.7,
                category: "Electronics",
              },
              {
                id: 15,
                name: "Airdopes 181",
                image: "https://m.media-amazon.com/images/I/41kWMvhJyEL._SX300_SY300_QL70_FMwebp_.jpg",
                description: "Capture high-quality images with an easy-to-use DSLR camera.",
                price: 449.99,
                rating: 4.5,
                category: "Electronics",
              }
        ]
    },
    {
        title: "New Releases",
        items: [
            {
                id: 8,
                name: "Nintendo Switch Console",
                image: "https://m.media-amazon.com/images/I/416ZXLMGA6S._SY300_SX300_QL70_FMwebp_.jpg",
                description: "Versatile gaming console for playing at home or on the go.",
                price: 299.99,
                rating: 4.8,
                category: "Video Games",
              },
              {
                id: 9,
                name: "Echo Dot (4th Gen) Smart Speaker with Alexa",
                image: "https://m.media-amazon.com/images/I/51bUaf3xB7L._SY300_SX300_.jpg",
                description: "Compact smart speaker with Alexa for hands-free control.",
                price: 49.99,
                rating: 4.7,
                category: "Smart Home",
              },
              {
                id: 10,
                name: "Fitbit Charge 5 Fitness Tracker",
                image: "https://m.media-amazon.com/images/I/41sK3jjPlaL._SX300_SY300_QL70_FMwebp_.jpg",
                description: "Track your fitness, sleep, and heart rate with this slim tracker.",
                price: 149.99,
                rating: 4.5,
                category: "Health and Fitness",
              },
              {
                id: 11,
                name: "Bose QuietComfort 35 II Wireless Headphones",
                image: "https://m.media-amazon.com/images/I/31BsuGwJToL._SX300_SY300_QL70_FMwebp_.jpg",
                description: "Noise-canceling headphones with up to 20 hours of battery life.",
                price: 299.99,
                rating: 4.8,
                category: "Electronics",
              }
        ]
    },
    {
        title: "Top Rated",
        items: [
            {
                id: 4,
                name: "The Lean Startup by Eric Ries",
                image: "https://m.media-amazon.com/images/I/51STtIP+8qL._SY445_SX342_.jpg",
                description: "A must-read book on building successful startups.",
                price: 19.99,
                rating: 4.5,
                category: "Books",
              },
              {
                id: 5,
                name: "Samsung 55-inch QLED 4K Smart TV",
                image: "https://m.media-amazon.com/images/I/81cbFZwHYYL._SL1500_.jpg",
                description: "Vivid colors, 4K resolution, and smart features for streaming.",
                price: 999.99,
                rating: 4.8,
                category: "Electronics",
              },
              {
                id: 6,
                name: "Adidas Ultraboost 21 Running Shoes",
                image: "https://m.media-amazon.com/images/I/71qGs2JfKjL._SX695_.jpg",
                description: "Comfortable and responsive running shoes with Boost cushioning.",
                price: 179.99,
                rating: 4.7,
                category: "Fashion",
              },
              {
                id: 7,
                name: "Instant Pot Duo 7-in-1 Electric Pressure Cooker",
                image: "https://m.media-amazon.com/images/I/41VtfPX5JkL._SX300_SY300_QL70_FMwebp_.jpg",
                description: "Pressure cook, slow cook, sauté, steam, and more with one device.",
                price: 99.99,
                rating: 4.6,
                category: "Kitchen Appliances",
              }
        ]
    },
    {
        title: "Indie Favorites",
        items: [
            {
                id: 13,
                title: "Hades",
                image: "https://i.imgur.com/VPqMjbZ.jpg",
                link: "https://example.com/hades"
            },
            {
                id: 14,
                title: "Celeste",
                image: "https://i.imgur.com/kI1h5Tf.jpg",
                link: "https://example.com/celeste"
            },
            {
                id: 15,
                title: "Hollow Knight",
                image: "https://i.imgur.com/fXCz9F5.jpg",
                link: "https://example.com/hollow-knight"
            },
            {
                id: 16,
                title: "Ori and the Will of the Wisps",
                image: "https://i.imgur.com/gKc7mFP.jpg",
                link: "https://example.com/ori-will-of-the-wisps"
            }
        ]
    }
   
];
