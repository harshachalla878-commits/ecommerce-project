require("dotenv").config();

const express = require("express");
const cors = require("cors");          // ✅ FIX for cors error
const connectDB = require("./config/db"); // ✅ FIX for connectDB error

const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect Database
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);
app.get("/products", (req, res) => {
  res.json(products); // your big array
});
// Serve frontend files
app.use(express.static("public"));

/* ======================================
   🛍️ PRODUCTS DATA
====================================== */
const products = [

  /* ================= 📱 MOBILES (EXISTING – NOT REMOVED) ================= */

  {
    id: 1,
    name: "iPhone 17 Pro Max",
    price: 150000,
    originalPrice: 170000,
    discountPercent: 12,
    rating: 4.8,
    image: "/assets/images/iphone.jpg",
    category: "mobile",
    description: "Apple iPhone 17 Pro Max with A18 chip and 48MP camera.",
    specs: {
      Brand: "Apple",
      Display: "6.9-inch Super Retina XDR",
      Processor: "A18 Bionic",
      RAM: "12 GB",
      Storage: "256 GB",
      Battery: "4800 mAh",
      OS: "iOS 18"
    }
  },

  {
    id: 2,
    name: "Samsung Galaxy S22",
    price: 86000,
    originalPrice: 99000,
    discountPercent: 13,
    rating: 4.6,
    image: "/assets/images/samsung.jpg",
    category: "mobile",
    description: "Samsung Galaxy S22 with AMOLED display and triple camera.",
    specs: {
      Brand: "Samsung",
      Display: "6.1-inch AMOLED",
      Processor: "Snapdragon 8 Gen 1",
      RAM: "8 GB",
      Storage: "128 GB",
      Battery: "3700 mAh",
      OS: "Android"
    }
  },

  {
    id: 3,
    name: "Redmi Note 12",
    price: 14000,
    originalPrice: 18000,
    discountPercent: 22,
    rating: 4.4,
    image: "/assets/images/redmi.jpg",
    category: "mobile",
    description: "Redmi Note 12 with 120Hz AMOLED display.",
    specs: {
      Brand: "Redmi",
      Display: "6.67-inch AMOLED",
      Processor: "Snapdragon 685",
      RAM: "6 GB",
      Storage: "128 GB",
      Battery: "5000 mAh",
      OS: "MIUI"
    }
  },

  /* ================= 📱 MOBILES (NEW – ADDED AS REQUESTED) ================= */

  {
    id: 14,
    name: "Samsung Galaxy S24",
    price: 80000,
    originalPrice: 90000,
    discountPercent: 11,
    rating: 4.7,
    image: "/assets/images/s24.jpg",
    category: "mobile",
    description: "Samsung Galaxy S24 with Dynamic AMOLED and AI camera.",
    specs: {
      Brand: "Samsung",
      Display: "6.2-inch AMOLED",
      Processor: "Exynos 2400",
      RAM: "8 GB",
      Storage: "256 GB",
      Battery: "4000 mAh",
      OS: "Android 14"
    }
  },

  {
    id: 15,
    name: "Samsung Galaxy S24 Ultra",
    price: 125000,
    originalPrice: 140000,
    discountPercent: 10,
    rating: 4.9,
    image: "/assets/images/s24-ultra.jpg",
    category: "mobile",
    description: "S24 Ultra with S-Pen and 200MP camera.",
    specs: {
      Brand: "Samsung",
      Display: "6.8-inch AMOLED",
      Processor: "Snapdragon 8 Gen 3",
      RAM: "12 GB",
      Storage: "512 GB",
      Battery: "5000 mAh",
      OS: "Android 14"
    }
  },

  {
    id: 16,
    name: "Samsung Galaxy S25",
    price: 90000,
    originalPrice: 100000,
    discountPercent: 10,
    rating: 4.8,
    image: "/assets/images/s25.jpg",
    category: "mobile",
    description: "Samsung Galaxy S25 with next-gen AI features.",
    specs: {
      Brand: "Samsung",
      Display: "6.3-inch AMOLED",
      Processor: "Exynos 2500",
      RAM: "12 GB",
      Storage: "256 GB",
      Battery: "4200 mAh",
      OS: "Android 15"
    }
  },

  {
    id: 17,
    name: "Samsung Galaxy S25 Ultra",
    price: 135000,
    originalPrice: 150000,
    discountPercent: 10,
    rating: 4.9,
    image: "/assets/images/s25-ultra.jpg",
    category: "mobile",
    description: "Samsung Galaxy S25 Ultra flagship smartphone.",
    specs: {
      Brand: "Samsung",
      Display: "6.9-inch AMOLED",
      Processor: "Snapdragon 8 Gen 4",
      RAM: "16 GB",
      Storage: "1 TB",
      Battery: "5200 mAh",
      OS: "Android 15"
    }
  },

  {
    id: 18,
    name: "iPhone 14",
    price: 60000,
    originalPrice: 70000,
    discountPercent: 14,
    rating: 4.6,
    image: "/assets/images/iphone14.jpg",
    category: "mobile",
    description: "iPhone 14 with A15 Bionic chip.",
    specs: {
      Brand: "Apple",
      Display: "6.1-inch OLED",
      Processor: "A15 Bionic",
      RAM: "6 GB",
      Storage: "128 GB",
      Battery: "3279 mAh",
      OS: "iOS"
    }
  },

  {
    id: 19,
    name: "iPhone 14 Pro Max",
    price: 120000,
    originalPrice: 135000,
    discountPercent: 11,
    rating: 4.8,
    image: "/assets/images/iphone14-pro-max.jpg",
    category: "mobile",
    description: "iPhone 14 Pro Max with Dynamic Island.",
    specs: {
      Brand: "Apple",
      Display: "6.7-inch OLED",
      Processor: "A16 Bionic",
      RAM: "6 GB",
      Storage: "256 GB",
      Battery: "4323 mAh",
      OS: "iOS"
    }
  },

  {
    id: 20,
    name: "iPhone 15 Pro Max",
    price: 145000,
    originalPrice: 160000,
    discountPercent: 9,
    rating: 4.9,
    image: "/assets/images/iphone15-pro-max.jpg",
    category: "mobile",
    description: "iPhone 15 Pro Max with Titanium design.",
    specs: {
      Brand: "Apple",
      Display: "6.7-inch OLED",
      Processor: "A17 Pro",
      RAM: "8 GB",
      Storage: "512 GB",
      Battery: "4422 mAh",
      OS: "iOS"
    }
  },

  {
    id: 21,
    name: "iPhone 16 Pro Max",
    price: 160000,
    originalPrice: 175000,
    discountPercent: 9,
    rating: 5.0,
    image: "/assets/images/iphone16-pro-max.jpg",
    category: "mobile",
    description: "Latest iPhone 16 Pro Max flagship.",
    specs: {
      Brand: "Apple",
      Display: "6.9-inch OLED",
      Processor: "A18 Pro",
      RAM: "12 GB",
      Storage: "1 TB",
      Battery: "4700 mAh",
      OS: "iOS 18"
    }
  },

  {
    id: 30,
    name: "iPhone 14 Pro",
    price: 89999,
    originalPrice: 99999,
    discountPercent: 10,
    rating: 4.7,
    image: "/assets/images/iphone-14-pro.jpg",
    category: "mobile",
    description: "iPhone 14 Pro with Dynamic Island.",
    specs: {
      Brand: "Apple",
      Display: "6.1-inch OLED",
      Processor: "A16 Bionic",
      RAM: "6 GB",
      Storage: "256 GB",
      OS: "iOS"
    }
  },

  {
    id: 31,
    name: "iPhone 15",
    price: 69999,
    originalPrice: 79999,
    discountPercent: 12,
    rating: 4.7,
    image: "/assets/images/iphone-15.jpg",
    category: "mobile",
    description: "iPhone 15 with USB-C and A16 chip.",
    specs: {
      Brand: "Apple",
      Display: "6.1-inch OLED",
      Processor: "A16 Bionic",
      RAM: "6 GB",
      Storage: "128 GB",
      OS: "iOS"
    }
  },

  {
    id: 32,
    name: "iPhone 15 Pro",
    price: 119999,
    originalPrice: 129999,
    discountPercent: 8,
    rating: 4.8,
    image: "/assets/images/iphone-15-pro.jpg",
    category: "mobile",
    description: "iPhone 15 Pro with Titanium body.",
    specs: {
      Brand: "Apple",
      Display: "6.1-inch OLED",
      Processor: "A17 Pro",
      RAM: "8 GB",
      Storage: "256 GB",
      OS: "iOS"
    }
  },

  {
    id: 33,
    name: "iPhone 16",
    price: 79999,
    originalPrice: 89999,
    discountPercent: 11,
    rating: 4.8,
    image: "/assets/images/iphone-16.jpg",
    category: "mobile",
    description: "iPhone 16 with AI-powered features.",
    specs: {
      Brand: "Apple",
      Display: "6.1-inch OLED",
      Processor: "A18",
      RAM: "8 GB",
      Storage: "256 GB",
      OS: "iOS 18"
    }
  },

  {
    id: 34,
    name: "iPhone 16 Plus",
    price: 89999,
    originalPrice: 99999,
    discountPercent: 10,
    rating: 4.8,
    image: "/assets/images/iphone-16-plus.jpg",
    category: "mobile",
    description: "iPhone 16 Plus with larger display.",
    specs: {
      Brand: "Apple",
      Display: "6.7-inch OLED",
      Processor: "A18",
      RAM: "8 GB",
      Storage: "256 GB",
      OS: "iOS 18"
    }
  },

  {
    id: 35,
    name: "iPhone 16 Pro",
    price: 129999,
    originalPrice: 139999,
    discountPercent: 7,
    rating: 4.9,
    image: "/assets/images/iphone-16-pro.jpg",
    category: "mobile",
    description: "iPhone 16 Pro with AI camera system.",
    specs: {
      Brand: "Apple",
      Display: "6.3-inch OLED",
      Processor: "A18 Pro",
      RAM: "12 GB",
      Storage: "512 GB",
      OS: "iOS 18"
    }
  },

  {
  id: 36,
  name: "iPhone 17",
  price: 90000,
  originalPrice: 105000,
  discountPercent: 14,
  rating: 4.7,
  image: "/assets/images/iphone17.jpg",
  category: "mobile",
  description: "Apple iPhone 17 with A18 Bionic chip and advanced camera system.",
  specs: {
    Brand: "Apple",
    Model: "iPhone 17",
    Display: "6.1-inch Super Retina XDR",
    Processor: "A18 Bionic",
    RAM: "8 GB",
    Storage: "256 GB",
    Camera: "48 MP + 12 MP",
    Battery: "3900 mAh",
    OS: "iOS 18"
  }
},

{
  id: 37,
  name: "iPhone 17 Air",
  price: 105000,
  originalPrice: 120000,
  discountPercent: 13,
  rating: 4.8,
  image: "/assets/images/iphone17-air.jpg",
  category: "mobile",
  description: "Ultra-thin iPhone 17 Air with lightweight design and powerful performance.",
  specs: {
    Brand: "Apple",
    Model: "iPhone 17 Air",
    Display: "6.5-inch Super Retina XDR",
    Processor: "A18 Bionic",
    RAM: "10 GB",
    Storage: "256 GB",
    Camera: "48 MP + 12 MP",
    Battery: "4100 mAh",
    OS: "iOS 18"
  }
},

{
  id: 38,
  name: "iPhone 17 Pro",
  price: 125000,
  originalPrice: 145000,
  discountPercent: 14,
  rating: 4.9,
  image: "/assets/images/iphone17-pro.jpg",
  category: "mobile",
  description: "iPhone 17 Pro with ProMotion display, titanium frame, and AI-powered camera.",
  specs: {
    Brand: "Apple",
    Model: "iPhone 17 Pro",
    Display: "6.3-inch Super Retina XDR ProMotion",
    Processor: "A18 Pro",
    RAM: "12 GB",
    Storage: "512 GB",
    Camera: "48 MP Triple Camera",
    Battery: "4500 mAh",
    OS: "iOS 18"
  }
},
  /* ================= 🎧 AUDIO ================= */
  {
    id: 22,
    name: "Sony Headphones",
    price: 4000,
    originalPrice: 6000,
    discountPercent: 33,
    rating: 4.5,
    image: "/assets/images/sony.jpg",
    category: "audio",
    description: "Sony over-ear headphones with noise cancellation.",
    specs: {
      Brand: "Sony",
      Type: "Over-Ear",
      NoiseCancellation: "Yes"
    }
  },

  {
    id: 29,
    name: "Boat Rockerz 450",
    price: 1900,
    originalPrice: 3000,
    discountPercent: 37,
    rating: 4.3,
    image: "/assets/images/boat.jpg",
    category: "audio",
    description: "Boat Rockerz 450 wireless headphones with 15-hour battery life.",
    specs: {
      Brand: "Boat",
      Type: "Wireless",
      Battery: "15 Hours",
      Connectivity: "Bluetooth",
      Weight: "168g"
    }
  },

  {
    id: 30,
    name: "JBL Wireless Earbuds",
    price: 4000,
    originalPrice: 6500,
    discountPercent: 38,
    rating: 4.4,
    image: "/assets/images/jbl.jpg",
    category: "audio",
    description: "JBL true wireless earbuds with powerful sound and compact design.",
    specs: {
      Brand: "JBL",
      Type: "True Wireless",
      Battery: "24 Hours",
      Connectivity: "Bluetooth",
      WaterResistance: "IPX4"
    }
  },

  {
  id: 64,
  name: "Boat Neckband",
  price: 1800,
  originalPrice: 3000,
  discountPercent: 40,
  rating: 4.4,
  image: "/assets/images/boat-neckband.jpg",
  category: "audio",
  description: "Boat wireless neckband with deep bass and long battery life.",
  specs: {
    Brand: "Boat",
    Type: "Neckband",
    Battery: "20 Hours",
    Connectivity: "Bluetooth",
    Features: "Fast Charging, Deep Bass"
  }
},

{
  id: 65,
  name: "Noise Neckband",
  price: 2200,
  originalPrice: 3500,
  discountPercent: 37,
  rating: 4.3,
  image: "/assets/images/noise-neckband.jpg",
  category: "audio",
  description: "Noise neckband with clear audio and ergonomic design.",
  specs: {
    Brand: "Noise",
    Type: "Neckband",
    Battery: "25 Hours",
    Connectivity: "Bluetooth",
    Features: "ENC, Fast Charging"
  }
},

{
  id: 66,
  name: "Apple AirPods",
  price: 25000,
  originalPrice: 29000,
  discountPercent: 14,
  rating: 4.8,
  image: "/assets/images/apple-airpods.jpg",
  category: "audio",
  description: "Apple AirPods with seamless connectivity and premium sound quality.",
  specs: {
    Brand: "Apple",
    Type: "True Wireless",
    Battery: "24 Hours",
    Connectivity: "Bluetooth",
    Features: "Spatial Audio, Siri"
  }
},

{
  id: 67,
  name: "Zebronics Earphones",
  price: 1200,
  originalPrice: 2000,
  discountPercent: 40,
  rating: 4.1,
  image: "/assets/images/zebronics-earphones.jpg",
  category: "audio",
  description: "Zebronics wired earphones with powerful sound and noise isolation.",
  specs: {
    Brand: "Zebronics",
    Type: "Wired Earphones",
    Connectivity: "3.5mm Jack",
    Features: "Noise Isolation",
    Weight: "Lightweight"
  }
},

{
  id: 68,
  name: "Boat Wired Earphones",
  price: 999,
  originalPrice: 1800,
  discountPercent: 45,
  rating: 4.2,
  image: "/assets/images/boat-earphones.jpg",
  category: "audio",
  description: "Boat wired earphones with punchy bass and durable build.",
  specs: {
    Brand: "Boat",
    Type: "Wired Earphones",
    Connectivity: "3.5mm Jack",
    Features: "Extra Bass",
    Cable: "Tangle-Free"
  }
},

{
  id: 69,
  name: "Amazon Echo Dot",
  price: 4500,
  originalPrice: 6000,
  discountPercent: 25,
  rating: 4.6,
  image: "/assets/images/echo-dot.jpg",
  category: "audio",
  description: "Amazon Echo Dot smart speaker with Alexa voice assistant.",
  specs: {
    Brand: "Amazon",
    Type: "Smart Speaker",
    Connectivity: "WiFi, Bluetooth",
    Assistant: "Alexa",
    Features: "Voice Control, Smart Home"
  }
},

{
  id: 70,
  name: "Sony Sound Bar",
  price: 28000,
  originalPrice: 35000,
  discountPercent: 20,
  rating: 4.7,
  image: "/assets/images/sony-soundbar.jpg",
  category: "audio",
  description: "Sony soundbar with immersive surround sound and powerful bass.",
  specs: {
    Brand: "Sony",
    Type: "Sound Bar",
    Connectivity: "Bluetooth, HDMI",
    Channels: "2.1",
    Features: "Dolby Audio"
  }
},

{
  id: 71,
  name: "pTron Earphones",
  price: 800,
  originalPrice: 1500,
  discountPercent: 47,
  rating: 4.0,
  image: "/assets/images/ptron-earphones.jpg",
  category: "audio",
  description: "pTron affordable earphones with clear sound quality.",
  specs: {
    Brand: "pTron",
    Type: "Wired Earphones",
    Connectivity: "3.5mm Jack",
    Features: "HD Sound",
    Weight: "Lightweight"
  }
},

{
  id: 72,
  name: "Sonos Speaker",
  price: 42000,
  originalPrice: 50000,
  discountPercent: 16,
  rating: 4.8,
  image: "/assets/images/sonos-speaker.jpg",
  category: "audio",
  description: "Sonos premium smart speaker with rich, room-filling sound.",
  specs: {
    Brand: "Sonos",
    Type: "Smart Speaker",
    Connectivity: "WiFi",
    Assistant: "Alexa, Google Assistant",
    Features: "Multi-Room Audio"
  }
},

{
  id: 73,
  name: "Philips Portable Bluetooth Speaker",
  price: 3500,
  originalPrice: 5000,
  discountPercent: 30,
  rating: 4.4,
  image: "/assets/images/philips-portable-speaker.jpg",
  category: "audio",
  description: "Philips portable Bluetooth speaker with rich bass and compact design.",
  specs: {
    Brand: "Philips",
    Type: "Portable Speaker",
    Output: "10W",
    Connectivity: "Bluetooth",
    Battery: "8 Hours"
  }
},

{
  id: 74,
  name: "Dubstep Pop 1200",
  price: 2800,
  originalPrice: 4500,
  discountPercent: 38,
  rating: 4.2,
  image: "/assets/images/dubstep-pop-1200.jpg",
  category: "audio",
  description: "Dubstep Pop 1200 speaker with punchy sound and LED effects.",
  specs: {
    Brand: "Dubstep",
    Type: "Bluetooth Speaker",
    Output: "12W",
    Connectivity: "Bluetooth, AUX",
    Features: "LED Lights"
  }
},

{
  id: 75,
  name: "Zebronics Astra 35",
  price: 3200,
  originalPrice: 5200,
  discountPercent: 38,
  rating: 4.3,
  image: "/assets/images/zebronics-astra-35.jpg",
  category: "audio",
  description: "Zebronics Astra 35 Bluetooth speaker with powerful sound output.",
  specs: {
    Brand: "Zebronics",
    Type: "Bluetooth Speaker",
    Output: "35W",
    Connectivity: "Bluetooth, USB",
    Features: "Deep Bass"
  }
},

{
  id: 76,
  name: "pTron Fusion Saga 48 Watts",
  price: 4800,
  originalPrice: 7000,
  discountPercent: 31,
  rating: 4.4,
  image: "/assets/images/ptron-fusion-saga.jpg",
  category: "audio",
  description: "pTron Fusion Saga with massive 48W output and immersive sound.",
  specs: {
    Brand: "pTron",
    Type: "Bluetooth Speaker",
    Output: "48W",
    Connectivity: "Bluetooth, AUX",
    Features: "Bass Boost"
  }
},

{
  id: 77,
  name: "BoAt Stone 650 16W Bluetooth Soundbar",
  price: 3000,
  originalPrice: 5000,
  discountPercent: 40,
  rating: 4.5,
  image: "/assets/images/boat-stone-650.jpg",
  category: "audio",
  description: "BoAt Stone 650 soundbar with powerful 16W output and portability.",
  specs: {
    Brand: "BoAt",
    Type: "Bluetooth Soundbar",
    Output: "16W",
    Connectivity: "Bluetooth",
    Battery: "7 Hours"
  }
},

{
  id: 78,
  name: "Philips Audio Wireless Speaker",
  price: 4200,
  originalPrice: 6200,
  discountPercent: 32,
  rating: 4.4,
  image: "/assets/images/philips-audio-wireless.jpg",
  category: "audio",
  description: "Philips wireless speaker delivering clear audio and deep bass.",
  specs: {
    Brand: "Philips",
    Type: "Wireless Speaker",
    Output: "20W",
    Connectivity: "Bluetooth",
    Battery: "10 Hours"
  }
},

{
  id: 79,
  name: "pTron Fusion Pro Retro Signature 20 Watts",
  price: 3600,
  originalPrice: 5500,
  discountPercent: 35,
  rating: 4.3,
  image: "/assets/images/ptron-fusion-pro-retro.jpg",
  category: "audio",
  description: "pTron Fusion Pro Retro speaker with vintage design and modern sound.",
  specs: {
    Brand: "pTron",
    Type: "Retro Bluetooth Speaker",
    Output: "20W",
    Connectivity: "Bluetooth, AUX",
    Features: "Retro Design"
  }
},

{
  id: 80,
  name: "Sony SRS-XB100 Wireless Bluetooth Portable Speaker",
  price: 4800,
  originalPrice: 6500,
  discountPercent: 26,
  rating: 4.7,
  image: "/assets/images/sony-srs-xb100.jpg",
  category: "audio",
  description: "Sony SRS-XB100 portable speaker with extra bass and compact size.",
  specs: {
    Brand: "Sony",
    Type: "Portable Bluetooth Speaker",
    Output: "Extra Bass",
    Connectivity: "Bluetooth",
    Battery: "16 Hours"
  }
},



  
  /* ================= ⌚ WATCH ================= */
  {
    id: 23,
    name: "Apple Watch SE",
    price: 30000,
    originalPrice: 36000,
    discountPercent: 17,
    rating: 4.7,
    image: "/assets/images/apple-watch.jpg",
    category: "watch",
    description: "Apple Watch SE with fitness tracking.",
    specs: {
      Brand: "Apple",
      Battery: "18 Hours",
      OS: "watchOS"
    }
  },

  {
    id: 28,
    name: "Noise Smart Watch",
    price: 3000,
    originalPrice: 5000,
    discountPercent: 40,
    rating: 4.2,
    image: "/assets/images/noise-watch.jpg",
    category: "watch",
    description: "Noise smart watch with health monitoring and customizable watch faces.",
    specs: {
      Brand: "Noise",
      Battery: "7 Days",
      Display: "LCD",
      Features: "SpO2, Heart Rate",
      OS: "Android / iOS"
    }
  },
  
  {
    id: 29,
    name: "Fire-Boltt Smart Watch",
    price: 2500,
    originalPrice: 4500,
    discountPercent: 44,
    rating: 4.1,
    image: "/assets/images/fireboltt.jpg",
    category: "watch",
    description: "Fire-Boltt smart watch with sports modes and long battery life.",
    specs: {
      Brand: "Fire-Boltt",
      Battery: "8 Days",
      Display: "HD",
      Features: "Sports Modes",
      OS: "Android / iOS"
    }
  },

  {
  id: 47,
  name: "Casio Watch",
  price: 4500,
  originalPrice: 6000,
  discountPercent: 25,
  rating: 4.4,
  image: "/assets/images/casio-watch.jpg",
  category: "watch",
  description: "Casio analog-digital watch with durable build and long battery life.",
  specs: {
    Brand: "Casio",
    Display: "Analog-Digital",
    Battery: "2 Years",
    WaterResistance: "Yes",
    Features: "Alarm, Stopwatch"
  }
},

{
  id: 48,
  name: "Seiko Watch",
  price: 28000,
  originalPrice: 35000,
  discountPercent: 20,
  rating: 4.7,
  image: "/assets/images/seiko-watch.jpg",
  category: "watch",
  description: "Seiko premium automatic watch with classic Japanese craftsmanship.",
  specs: {
    Brand: "Seiko",
    Display: "Analog",
    Movement: "Automatic",
    WaterResistance: "100 m",
    Glass: "Hardlex Crystal"
  }
},

{
  id: 49,
  name: "Citizen Watch",
  price: 22000,
  originalPrice: 28000,
  discountPercent: 21,
  rating: 4.6,
  image: "/assets/images/citizen-watch.jpg",
  category: "watch",
  description: "Citizen Eco-Drive watch powered by light, no battery replacement needed.",
  specs: {
    Brand: "Citizen",
    Display: "Analog",
    Movement: "Eco-Drive",
    WaterResistance: "100 m",
    Glass: "Mineral"
  }
},

{
  id: 50,
  name: "Timex Watch",
  price: 6000,
  originalPrice: 8500,
  discountPercent: 29,
  rating: 4.3,
  image: "/assets/images/timex-watch.jpg",
  category: "watch",
  description: "Timex casual watch with Indiglo backlight and rugged design.",
  specs: {
    Brand: "Timex",
    Display: "Analog",
    Battery: "3 Years",
    WaterResistance: "Yes",
    Feature: "Indiglo Light"
  }
},

{
  id: 51,
  name: "Rolex Watch",
  price: 950000,
  originalPrice: 1050000,
  discountPercent: 10,
  rating: 5.0,
  image: "/assets/images/rolex-watch.jpg",
  category: "watch",
  description: "Luxury Rolex automatic watch with iconic design and precision.",
  specs: {
    Brand: "Rolex",
    Display: "Analog",
    Movement: "Automatic",
    WaterResistance: "300 m",
    Glass: "Sapphire Crystal"
  }
},

{
  id: 52,
  name: "Fossil Watch",
  price: 12000,
  originalPrice: 16000,
  discountPercent: 25,
  rating: 4.5,
  image: "/assets/images/fossil-watch.jpg",
  category: "watch",
  description: "Fossil stylish watch combining modern design with durability.",
  specs: {
    Brand: "Fossil",
    Display: "Analog",
    Battery: "2 Years",
    WaterResistance: "Yes",
    Strap: "Leather"
  }
},

{
  id: 53,
  name: "Titan Watch",
  price: 9000,
  originalPrice: 12000,
  discountPercent: 25,
  rating: 4.6,
  image: "/assets/images/titan-watch.jpg",
  category: "watch",
  description: "Titan premium watch with elegant design suitable for all occasions.",
  specs: {
    Brand: "Titan",
    Display: "Analog",
    Battery: "3 Years",
    WaterResistance: "Yes",
    Strap: "Metal"
  }
},

{
  id: 54,
  name: "Omega Watch",
  price: 520000,
  originalPrice: 600000,
  discountPercent: 13,
  rating: 4.9,
  image: "/assets/images/omega-watch.jpg",
  category: "watch",
  description: "Omega luxury Swiss watch known for precision and space heritage.",
  specs: {
    Brand: "Omega",
    Display: "Analog",
    Movement: "Automatic",
    WaterResistance: "300 m",
    Glass: "Sapphire"
  }
},

{
  id: 55,
  name: "Tudor Watch",
  price: 350000,
  originalPrice: 420000,
  discountPercent: 17,
  rating: 4.8,
  image: "/assets/images/tudor-watch.jpg",
  category: "watch",
  description: "Tudor Swiss watch with robust performance and premium finish.",
  specs: {
    Brand: "Tudor",
    Display: "Analog",
    Movement: "Automatic",
    WaterResistance: "200 m",
    Glass: "Sapphire"
  }
},

{
  id: 56,
  name: "Rado Watch",
  price: 420000,
  originalPrice: 500000,
  discountPercent: 16,
  rating: 4.7,
  image: "/assets/images/rado-watch.jpg",
  category: "watch",
  description: "Rado ceramic watch with scratch-resistant technology.",
  specs: {
    Brand: "Rado",
    Display: "Analog",
    Movement: "Automatic",
    Material: "Ceramic",
    Glass: "Sapphire"
  }
},

{
  id: 57,
  name: "Oris Watch",
  price: 310000,
  originalPrice: 380000,
  discountPercent: 18,
  rating: 4.6,
  image: "/assets/images/oris-watch.jpg",
  category: "watch",
  description: "Oris mechanical watch with Swiss precision and sporty elegance.",
  specs: {
    Brand: "Oris",
    Display: "Analog",
    Movement: "Automatic",
    WaterResistance: "300 m",
    Glass: "Sapphire"
  }
},

{
  id: 58,
  name: "Sonata Watch",
  price: 3500,
  originalPrice: 5000,
  discountPercent: 30,
  rating: 4.2,
  image: "/assets/images/sonata-watch.jpg",
  category: "watch",
  description: "Sonata classic analog watch with stylish design and reliable performance.",
  specs: {
    Brand: "Sonata",
    Display: "Analog",
    Battery: "3 Years",
    WaterResistance: "Yes",
    Strap: "Leather"
  }
},

{
  id: 59,
  name: "Movado Watch",
  price: 180000,
  originalPrice: 220000,
  discountPercent: 18,
  rating: 4.7,
  image: "/assets/images/movado-watch.jpg",
  category: "watch",
  description: "Movado luxury watch featuring iconic minimalist Swiss design.",
  specs: {
    Brand: "Movado",
    Display: "Analog",
    Movement: "Swiss Quartz",
    WaterResistance: "50 m",
    Glass: "Sapphire"
  }
},

{
  id: 60,
  name: "Versace Watch",
  price: 250000,
  originalPrice: 300000,
  discountPercent: 17,
  rating: 4.8,
  image: "/assets/images/versace-watch.jpg",
  category: "watch",
  description: "Versace luxury fashion watch with bold Italian design.",
  specs: {
    Brand: "Versace",
    Display: "Analog",
    Movement: "Quartz",
    WaterResistance: "50 m",
    Glass: "Sapphire"
  }
},

{
  id: 61,
  name: "Balmain Watch",
  price: 160000,
  originalPrice: 200000,
  discountPercent: 20,
  rating: 4.6,
  image: "/assets/images/balmain-watch.jpg",
  category: "watch",
  description: "Balmain Swiss-made watch with elegant craftsmanship.",
  specs: {
    Brand: "Balmain",
    Display: "Analog",
    Movement: "Swiss Quartz",
    WaterResistance: "50 m",
    Glass: "Sapphire"
  }
},

{
  id: 62,
  name: "Casio G-Shock",
  price: 12000,
  originalPrice: 16000,
  discountPercent: 25,
  rating: 4.8,
  image: "/assets/images/gshock-watch.jpg",
  category: "watch",
  description: "Casio G-Shock shock-resistant digital watch built for extreme conditions.",
  specs: {
    Brand: "G-Shock",
    Display: "Digital",
    Battery: "5 Years",
    WaterResistance: "200 m",
    Features: "Shock Resistant, Stopwatch, Alarm"
  }
},

{
  id: 63,
  name: "Fitbit Smart Watch",
  price: 18000,
  originalPrice: 24000,
  discountPercent: 25,
  rating: 4.5,
  image: "/assets/images/fitbit-watch.jpg",
  category: "watch",
  description: "Fitbit smartwatch with fitness tracking, heart rate monitoring, and sleep analysis.",
  specs: {
    Brand: "Fitbit",
    Display: "AMOLED",
    Battery: "7 Days",
    Features: "Heart Rate, Sleep Tracking, GPS",
    OS: "Fitbit OS"
  }
},

/* ================= 💻 LAPTOP ================= */
  {
    id: 24,
    name: "HP Pavilion Laptop",
    price: 70000,
    originalPrice: 85000,
    discountPercent: 18,
    rating: 4.5,
    image: "/assets/images/hp-laptop.jpg",
    category: "laptop",
    description: "HP Pavilion with Intel i5 processor.",
    specs: {
      Brand: "HP",
      Processor: "Intel i5",
      RAM: "16 GB",
      Storage: "512 GB SSD"
    }
  },

  {
    id: 27,
    name: "Dell Inspiron",
    price: 55000,
    originalPrice: 68000,
    discountPercent: 19,
    rating: 4.4,
    image: "/assets/images/dell-laptop.jpg",
    category: "laptop",
    description: "Dell Inspiron laptop suitable for students and professionals.",
    specs: {
      Brand: "Dell",
      Processor: "Intel i5",
      RAM: "8 GB",
      Storage: "512 GB SSD",
      OS: "Windows 11"
    }
  },

  {
  id: 39,
  name: "MacBook Air M4",
  price: 125000,
  originalPrice: 145000,
  discountPercent: 14,
  rating: 4.9,
  image: "/assets/images/macbook-air-m4.jpg",
  category: "laptop",
  description: "Apple MacBook Air M4 with ultra-fast performance, fanless design, and all-day battery life.",
  specs: {
    Brand: "Apple",
    Processor: "Apple M4",
    RAM: "16 GB",
    Storage: "512 GB SSD",
    Display: "13.6-inch Liquid Retina",
    Battery: "18 Hours",
    OS: "macOS"
    }
  },

{
  id: 40,
  name: "MacBook Pro M4",
  price: 185000,
  originalPrice: 210000,
  discountPercent: 12,
  rating: 5.0,
  image: "/assets/images/macbook-pro-m4.jpg",
  category: "laptop",
  description: "MacBook Pro M4 built for professionals with extreme performance and ProMotion display.",
  specs: {
    Brand: "Apple",
    Processor: "Apple M4 Pro",
    RAM: "32 GB",
    Storage: "1 TB SSD",
    Display: "14.2-inch Liquid Retina XDR",
    Battery: "22 Hours",
    OS: "macOS"
  }
},

{
  id: 41,
  name: "MacBook Air M3",
  price: 110000,
  originalPrice: 130000,
  discountPercent: 15,
  rating: 4.8,
  image: "/assets/images/macbook-air-m3.jpg",
  category: "laptop",
  description: "MacBook Air M3 with powerful performance and lightweight premium design.",
  specs: {
    Brand: "Apple",
    Processor: "Apple M3",
    RAM: "16 GB",
    Storage: "512 GB SSD",
    Display: "13.6-inch Liquid Retina",
    Battery: "18 Hours",
    OS: "macOS"
  }
},

{
  id: 42,
  name: "MacBook Pro M3",
  price: 165000,
  originalPrice: 190000,
  discountPercent: 13,
  rating: 4.9,
  image: "/assets/images/macbook-pro-m3.jpg",
  category: "laptop",
  description: "MacBook Pro M3 designed for developers, creators, and power users.",
  specs: {
    Brand: "Apple",
    Processor: "Apple M3 Pro",
    RAM: "24 GB",
    Storage: "1 TB SSD",
    Display: "14.2-inch Liquid Retina XDR",
    Battery: "22 Hours",
    OS: "macOS"
  }
},

{
  id: 43,
  name: "MacBook Air M2",
  price: 95000,
  originalPrice: 115000,
  discountPercent: 17,
  rating: 4.7,
  image: "/assets/images/macbook-air-m2.jpg",
  category: "laptop",
  description: "MacBook Air M2 with sleek design, silent performance, and excellent battery life.",
  specs: {
    Brand: "Apple",
    Processor: "Apple M2",
    RAM: "8 GB",
    Storage: "256 GB SSD",
    Display: "13.6-inch Liquid Retina",
    Battery: "18 Hours",
    OS: "macOS"
  }
},

{
  id: 44,
  name: "MacBook Pro M2",
  price: 145000,
  originalPrice: 170000,
  discountPercent: 15,
  rating: 4.8,
  image: "/assets/images/macbook-pro-m2.jpg",
  category: "laptop",
  description: "MacBook Pro M2 delivers outstanding performance with active cooling.",
  specs: {
    Brand: "Apple",
    Processor: "Apple M2 Pro",
    RAM: "16 GB",
    Storage: "512 GB SSD",
    Display: "14-inch Retina",
    Battery: "20 Hours",
    OS: "macOS"
  }
},

{
  id: 45,
  name: "Samsung Laptop",
  price: 65000,
  originalPrice: 80000,
  discountPercent: 19,
  rating: 4.4,
  image: "/assets/images/samsung-laptop.jpg",
  category: "laptop",
  description: "Samsung laptop suitable for daily work, students, and office use.",
  specs: {
    Brand: "Samsung",
    Processor: "Intel i5",
    RAM: "16 GB",
    Storage: "512 GB SSD",
    Display: "15.6-inch Full HD",
    OS: "Windows 11"
  }
},

{
  id: 46,
  name: "Lenovo Laptop",
  price: 58000,
  originalPrice: 72000,
  discountPercent: 19,
  rating: 4.5,
  image: "/assets/images/lenovo-laptop.jpg",
  category: "laptop",
  description: "Lenovo laptop with powerful performance and durable build quality.",
  specs: {
    Brand: "Lenovo",
    Processor: "Intel i5",
    RAM: "16 GB",
    Storage: "512 GB SSD",
    Display: "15.6-inch Full HD",
    OS: "Windows 11"
  }
 },

 {
  id: 99,
  name: "Primebook 4G Laptop",
  price: 16000,
  originalPrice: 20000,
  discountPercent: 20,
  rating: 4.1,
  image: "/assets/images/primebook.jpg",
  category: "laptop",
  description: "Primebook 4G laptop powered by Android OS, ideal for students and basic learning.",
  specs: {
    Brand: "Primebook",
    Display: "11.6-inch HD",
    Processor: "MediaTek MT8183",
    RAM: "4 GB",
    Storage: "64 GB",
    OS: "PrimeOS (Android)",
    Battery: "8 Hours"
  }
},
{
  id: 100,
  name: "HP Chromebook",
  price: 23000,
  originalPrice: 30000,
  discountPercent: 23,
  rating: 4.3,
  image: "/assets/images/chromebook.jpg",
  category: "laptop",
  description: "HP Chromebook with fast booting Chrome OS and long battery life.",
  specs: {
    Brand: "HP",
    Display: "14-inch HD",
    Processor: "Intel Celeron",
    RAM: "4 GB",
    Storage: "64 GB eMMC",
    OS: "Chrome OS",
    Battery: "10 Hours"
  }
},
{
  id: 101,
  name: "Browsebook Student Laptop",
  price: 18000,
  originalPrice: 24000,
  discountPercent: 25,
  rating: 4.0,
  image: "/assets/images/browsebook.jpg",
  category: "laptop",
  description: "Browsebook affordable laptop designed for students and online learning.",
  specs: {
    Brand: "Browsebook",
    Display: "14-inch HD",
    Processor: "Intel Atom",
    RAM: "4 GB",
    Storage: "128 GB SSD",
    OS: "Windows 11",
    Battery: "6 Hours"
  }
},
{
  id: 102,
  name: "Acer Aspire Lite",
  price: 42000,
  originalPrice: 52000,
  discountPercent: 19,
  rating: 4.4,
  image: "/assets/images/acer-aspire-lite.jpg",
  category: "laptop",
  description: "Acer Aspire Lite laptop with sleek design and powerful performance.",
  specs: {
    Brand: "Acer",
    Display: "15.6-inch Full HD",
    Processor: "Intel i5",
    RAM: "8 GB",
    Storage: "512 GB SSD",
    OS: "Windows 11",
    Battery: "7 Hours"
  }
},
{
  id: 103,
  name: "ASUS VivoBook",
  price: 48000,
  originalPrice: 60000,
  discountPercent: 20,
  rating: 4.5,
  image: "/assets/images/asus-vivobook.jpg",
  category: "laptop",
  description: "ASUS VivoBook with vibrant display, lightweight design, and fast performance.",
  specs: {
    Brand: "ASUS",
    Display: "15.6-inch Full HD",
    Processor: "Intel i5",
    RAM: "16 GB",
    Storage: "512 GB SSD",
    OS: "Windows 11",
    Battery: "8 Hours"
  }
},
{
  id: 104,
  name: "JioBook Laptop",
  price: 17000,
  originalPrice: 23000,
  discountPercent: 26,
  rating: 4.0,
  image: "/assets/images/jiobook.jpg",
  category: "laptop",
  description: "JioBook lightweight laptop with JioOS, perfect for browsing and online classes.",
  specs: {
    Brand: "Jio",
    Display: "11.6-inch HD",
    Processor: "MediaTek",
    RAM: "4 GB",
    Storage: "64 GB",
    OS: "JioOS",
    Battery: "8 Hours"
  }
},

{
  id: 105,
  name: "MSI Modern 14 Laptop",
  price: 62000,
  originalPrice: 75000,
  discountPercent: 17,
  rating: 4.5,
  image: "/assets/images/msi-modern.jpg",
  category: "laptop",
  description: "MSI Modern 14 thin and light laptop with powerful performance for professionals.",
  specs: {
    Brand: "MSI",
    Display: "14-inch Full HD",
    Processor: "Intel i5 12th Gen",
    RAM: "16 GB",
    Storage: "512 GB SSD",
    OS: "Windows 11",
    Battery: "9 Hours"
  }
},
{
  id: 106,
  name: "Microsoft Surface Laptop Go",
  price: 68000,
  originalPrice: 82000,
  discountPercent: 17,
  rating: 4.6,
  image: "/assets/images/surface-laptop.jpg",
  category: "laptop",
  description: "Microsoft Surface Laptop Go with premium build and smooth Windows experience.",
  specs: {
    Brand: "Microsoft",
    Display: "12.4-inch PixelSense",
    Processor: "Intel i5",
    RAM: "8 GB",
    Storage: "256 GB SSD",
    OS: "Windows 11",
    Battery: "10 Hours"
  }
},
{
  id: 107,
  name: "Samsung Galaxy Book 3",
  price: 72000,
  originalPrice: 88000,
  discountPercent: 18,
  rating: 4.7,
  image: "/assets/images/samsung-galaxy-book.jpg",
  category: "laptop",
  description: "Samsung Galaxy Book 3 with AMOLED display and seamless Galaxy ecosystem integration.",
  specs: {
    Brand: "Samsung",
    Display: "15.6-inch AMOLED",
    Processor: "Intel i5 13th Gen",
    RAM: "16 GB",
    Storage: "512 GB SSD",
    OS: "Windows 11",
    Battery: "11 Hours"
  }
},
{
  id: 108,
  name: "Realme Book Slim",
  price: 46000,
  originalPrice: 58000,
  discountPercent: 21,
  rating: 4.4,
  image: "/assets/images/realme-book.jpg",
  category: "laptop",
  description: "Realme Book Slim with premium metal design and sharp 2K display.",
  specs: {
    Brand: "Realme",
    Display: "14-inch 2K",
    Processor: "Intel i5 11th Gen",
    RAM: "8 GB",
    Storage: "512 GB SSD",
    OS: "Windows 11",
    Battery: "10 Hours"
  }
},



  /* ================= 📺 ELECTRONICS ================= */
  {
    id: 25,
    name: "Samsung Smart TV",
    price: 30000,
    originalPrice: 42000,
    discountPercent: 29,
    rating: 4.6,
    image: "/assets/images/samsung-tv.jpg",
    category: "electronics",
    description: "Samsung 4K Smart TV.",
    specs: {
      Brand: "Samsung",
      Display: "4K UHD",
      Size: "43 inch"
    }
  },

  {
    id: 26,
    name: "LG LED TV",
    price: 28000,
    originalPrice: 39000,
    discountPercent: 28,
    rating: 4.5,
    image: "/assets/images/lg-tv.jpg",
    category: "electronics",
    description: "LG LED TV with vivid picture quality and powerful audio.",
    specs: {
      Brand: "LG",
      Display: "Full HD",
      Size: "43 inch",
      OS: "WebOS",
      Connectivity: "WiFi, HDMI"
    }
  },

  {
  id: 81,
  name: "VW Smart TV",
  price: 26000,
  originalPrice: 38000,
  discountPercent: 32,
  rating: 4.3,
  image: "/assets/images/vw-tv.jpg",
  category: "electronics",
  description: "VW Smart TV with 4K resolution and powerful speakers.",
  specs: {
    Brand: "VW",
    Display: "4K UHD",
    Size: "43 inch",
    OS: "Android TV",
    Connectivity: "WiFi, HDMI"
  }
},

{
  id: 82,
  name: "Acer Smart TV",
  price: 29000,
  originalPrice: 42000,
  discountPercent: 31,
  rating: 4.4,
  image: "/assets/images/acer-tv.jpg",
  category: "electronics",
  description: "Acer Smart TV with vivid display and Dolby Audio.",
  specs: {
    Brand: "Acer",
    Display: "4K UHD",
    Size: "43 inch",
    OS: "Android TV",
    Audio: "Dolby Audio"
  }
},

{
  id: 83,
  name: "TCL Smart TV",
  price: 32000,
  originalPrice: 45000,
  discountPercent: 29,
  rating: 4.5,
  image: "/assets/images/tcl-tv.jpg",
  category: "electronics",
  description: "TCL Smart TV with bezel-less design and HDR support.",
  specs: {
    Brand: "TCL",
    Display: "4K HDR",
    Size: "50 inch",
    OS: "Google TV",
    Audio: "Dolby Atmos"
  }
},

{
  id: 84,
  name: "Onida LED TV",
  price: 21000,
  originalPrice: 32000,
  discountPercent: 34,
  rating: 4.1,
  image: "/assets/images/onida-tv.jpg",
  category: "electronics",
  description: "Onida LED TV with crisp visuals and reliable performance.",
  specs: {
    Brand: "Onida",
    Display: "Full HD",
    Size: "43 inch",
    OS: "Android",
    Connectivity: "HDMI, USB"
  }
},

{
  id: 85,
  name: "Vu Premium TV",
  price: 34000,
  originalPrice: 48000,
  discountPercent: 29,
  rating: 4.6,
  image: "/assets/images/vu-tv.jpg",
  category: "electronics",
  description: "Vu Premium TV with cinema-quality display and sound.",
  specs: {
    Brand: "Vu",
    Display: "4K HDR",
    Size: "50 inch",
    OS: "Android TV",
    Audio: "Dolby Vision"
  }
},

{
  id: 86,
  name: "Sony Bravia Smart TV",
  price: 55000,
  originalPrice: 72000,
  discountPercent: 24,
  rating: 4.8,
  image: "/assets/images/sony-bravia.jpg",
  category: "electronics",
  description: "Sony Bravia Smart TV with X1 processor and stunning clarity.",
  specs: {
    Brand: "Sony",
    Display: "4K UHD",
    Size: "55 inch",
    OS: "Google TV",
    Processor: "X1 Processor"
  }
},

{
  id: 87,
  name: "Hisense Smart TV",
  price: 28000,
  originalPrice: 41000,
  discountPercent: 32,
  rating: 4.4,
  image: "/assets/images/hisense-tv.jpg",
  category: "electronics",
  description: "Hisense Smart TV with Ultra HD display and smooth UI.",
  specs: {
    Brand: "Hisense",
    Display: "4K UHD",
    Size: "43 inch",
    OS: "VIDAA",
    Audio: "DTS Sound"
  }
},

{
  id: 88,
  name: "Kodak Smart TV",
  price: 23000,
  originalPrice: 35000,
  discountPercent: 34,
  rating: 4.2,
  image: "/assets/images/kodak-tv.jpg",
  category: "electronics",
  description: "Kodak Smart TV with Android OS and rich colors.",
  specs: {
    Brand: "Kodak",
    Display: "Full HD",
    Size: "43 inch",
    OS: "Android TV",
    Audio: "Dolby Digital"
  }
},

{
  id: 89,
  name: "Panasonic LED TV",
  price: 30000,
  originalPrice: 44000,
  discountPercent: 32,
  rating: 4.5,
  image: "/assets/images/panasonic-tv.jpg",
  category: "electronics",
  description: "Panasonic LED TV with excellent picture quality.",
  specs: {
    Brand: "Panasonic",
    Display: "4K UHD",
    Size: "50 inch",
    OS: "Android TV",
    Audio: "Surround Sound"
  }
},

{
  id: 90,
  name: "Haier Smart TV",
  price: 27000,
  originalPrice: 39000,
  discountPercent: 31,
  rating: 4.3,
  image: "/assets/images/haier-tv.jpg",
  category: "electronics",
  description: "Haier Smart TV with slim design and smart features.",
  specs: {
    Brand: "Haier",
    Display: "4K UHD",
    Size: "43 inch",
    OS: "Android TV",
    Connectivity: "WiFi"
  }
},

{
  id: 91,
  name: "Dyanora Smart TV",
  price: 20000,
  originalPrice: 32000,
  discountPercent: 38,
  rating: 4.0,
  image: "/assets/images/dyanora-tv.jpg",
  category: "electronics",
  description: "Dyanora Smart TV with budget-friendly pricing.",
  specs: {
    Brand: "Dyanora",
    Display: "HD Ready",
    Size: "32 inch",
    OS: "Android",
    Connectivity: "USB, HDMI"
  }
},

{
  id: 92,
  name: "Starwaves Smart TV",
  price: 22000,
  originalPrice: 34000,
  discountPercent: 35,
  rating: 4.1,
  image: "/assets/images/starwaves-tv.jpg",
  category: "electronics",
  description: "Starwaves Smart TV with vibrant display.",
  specs: {
    Brand: "Starwaves",
    Display: "Full HD",
    Size: "43 inch",
    OS: "Android TV",
    Audio: "Stereo"
  }
},

{
  id: 93,
  name: "Toshiba Smart TV",
  price: 33000,
  originalPrice: 47000,
  discountPercent: 30,
  rating: 4.6,
  image: "/assets/images/toshiba-tv.jpg",
  category: "electronics",
  description: "Toshiba Smart TV with premium build and clear visuals.",
  specs: {
    Brand: "Toshiba",
    Display: "4K UHD",
    Size: "50 inch",
    OS: "VIDAA",
    Audio: "Dolby Sound"
  }
},

{
  id: 94,
  name: "Coocaa Smart TV",
  price: 25000,
  originalPrice: 36000,
  discountPercent: 31,
  rating: 4.3,
  image: "/assets/images/coocaa-tv.jpg",
  category: "electronics",
  description: "Coocaa Smart TV with sleek design and smart controls.",
  specs: {
    Brand: "Coocaa",
    Display: "4K UHD",
    Size: "43 inch",
    OS: "Coolita OS",
    Connectivity: "WiFi"
  }
},

{
  id: 95,
  name: "Xiaomi Mi TV",
  price: 31000,
  originalPrice: 46000,
  discountPercent: 33,
  rating: 4.6,
  image: "/assets/images/mi-tv.jpg",
  category: "electronics",
  description: "Xiaomi Mi TV with PatchWall and powerful performance.",
  specs: {
    Brand: "Xiaomi",
    Display: "4K UHD",
    Size: "50 inch",
    OS: "PatchWall + Android",
    Audio: "Dolby Atmos"
  }
},

{
  id: 96,
  name: "Sansui Smart TV",
  price: 24000,
  originalPrice: 35000,
  discountPercent: 31,
  rating: 4.2,
  image: "/assets/images/sansui-tv.jpg",
  category: "electronics",
  description: "Sansui Smart TV with sharp picture quality.",
  specs: {
    Brand: "Sansui",
    Display: "Full HD",
    Size: "43 inch",
    OS: "Android TV",
    Connectivity: "HDMI, USB"
  }
},

{
  id: 97,
  name: "Philips Smart TV",
  price: 34000,
  originalPrice: 49000,
  discountPercent: 31,
  rating: 4.7,
  image: "/assets/images/philips-tv.jpg",
  category: "electronics",
  description: "Philips Smart TV with Pixel Plus engine and immersive sound.",
  specs: {
    Brand: "Philips",
    Display: "4K UHD",
    Size: "50 inch",
    OS: "Android TV",
    Audio: "Dolby Audio"
  }
},

{
  id: 98,
  name: "Sharp Aquos Smart TV",
  price: 36000,
  originalPrice: 52000,
  discountPercent: 31,
  rating: 4.6,
  image: "/assets/images/sharp-tv.jpg",
  category: "electronics",
  description: "Sharp Aquos Smart TV with Japanese display technology and crystal-clear visuals.",
  specs: {
    Brand: "Sharp",
    Display: "4K UHD",
    Size: "50 inch",
    OS: "Android TV",
    Audio: "Dolby Audio",
    Connectivity: "WiFi, HDMI, USB"
  }
},


];

/* ======================================
   📡 API
====================================== */
app.get("/products", (req, res) => {
  res.json(products);
});

/* ======================================
   🚀 START SERVER
====================================== */
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});