export const shops = [
    // Dining
    {
      id: 1,
      name: "Gulshan-e-Karim",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      reviews: 1540,
      category: "Dining",
      address: "Jama Masjid Road, Moradabad",
      isOpen: true,
      price: "₹800 for two",
      reviewText: "Bhai kya chicken biryani thi, maza aa gaya!",
      description: "Famous for its authentic Mughlai cuisine, especially the Chicken Biryani and Kebabs. A must-visit for food lovers in Moradabad.",
      phone: "+91 98765 43210",
      website: "gulshanekarim.com",
      hours: "11:00 AM - 11:00 PM",
      services: [
        { id: 'm1', name: "Chicken Biryani (Half)", price: "₹180" },
        { id: 'm2', name: "Chicken Biryani (Full)", price: "₹320" },
        { id: 'm3', name: "Seekh Kebab (Plate)", price: "₹150" },
        { id: 'm4', name: "Chicken Changezi", price: "₹450" },
        { id: 'm5', name: "Rumali Roti", price: "₹15" }
      ],
      reviewsList: [
        { user: "Rahul K.", rating: 5, text: "Best biryani in town, absolutely delicious!" },
        { user: "Amit S.", rating: 4, text: "Great food but a bit crowded on weekends." }
      ]
    },
    {
      id: 2,
      name: "Sagar Ratna",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.4,
      reviews: 420,
      category: "Dining",
      address: "Civil Lines, Moradabad",
      isOpen: true,
      price: "₹1200 for two",
      reviewText: "South Indian food ekdum authentic hai.",
      description: "The best place for authentic South Indian delicacies like Dosa, Idli, and Vada in a premium family setting.",
      phone: "0591 241 1234",
      website: "sagarratna.in",
      hours: "10:00 AM - 10:30 PM",
      services: [
        { id: 'm1', name: "Masala Dosa", price: "₹220" },
        { id: 'm2', name: "Idli Sambar", price: "₹150" },
        { id: 'm3', name: "Mysore Masala Dosa", price: "₹250" },
        { id: 'm4', name: "Filter Coffee", price: "₹80" }
      ],
      reviewsList: [
        { user: "Priya M.", rating: 5, text: "Love the dosa here, very crispy." },
        { user: "Vikas J.", rating: 4, text: "Good ambience for family dinner." }
      ]
    },
    // Sweets
    {
      id: 3,
      name: "Prakash Sweets",
      image: "https://images.unsplash.com/photo-1559563362-c667ba5f5480?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      reviews: 950,
      category: "Sweets",
      address: "Budh Bazar, Moradabad",
      isOpen: true,
      price: "₹300 approx",
      reviewText: "Subah ka nashta yahi best hai, jalebi crispy thi.",
      description: "Iconic sweet shop famous for its morning breakfast of Jalebi and Samosa, and a wide variety of traditional sweets.",
      phone: "+91 99887 76655",
      website: "prakashsweets.com",
      hours: "07:00 AM - 10:00 PM",
      services: [
        { id: 'm1', name: "Jalebi (250g)", price: "₹80" },
        { id: 'm2', name: "Samosa (Plate)", price: "₹40" },
        { id: 'm3', name: "Dhokla (Plate)", price: "₹50" },
        { id: 'm4', name: "Kaju Katli (1kg)", price: "₹900" }
      ],
      reviewsList: [
        { user: "Simran L.", rating: 5, text: "Morning breakfast here is a ritual!" },
        { user: "Karan B.", rating: 5, text: "The jalebis are to die for." }
      ]
    },
    // Automotives
    {
      id: 4,
      name: "Empire Wheels",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.5,
      reviews: 320,
      category: "Automotive",
      address: "Kanth Road, Moradabad",
      isOpen: true,
      price: "₹500 onwards",
      reviewText: "Quick service, mechanic was very polite.",
      description: "Complete car care solution including servicing, washing, wheel alignment, and detailing.",
      phone: "+91 90123 45678",
      website: "empirewheels.com",
      hours: "09:00 AM - 08:00 PM",
      services: [
        { id: 's1', name: "Car Wash", price: "₹400" },
        { id: 's2', name: "Oil Change", price: "₹1500" },
        { id: 's3', name: "Wheel Alignment", price: "₹600" },
        { id: 's4', name: "General Service", price: "₹2500" }
      ],
      reviewsList: [
        { user: "Deepak S.", rating: 5, text: "Professional staff and timely delivery." },
        { user: "Rohan M.", rating: 4, text: "Good service, valuable advice given." }
      ]
    },
     {
      id: 5,
      name: "Bike Point",
      image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.2,
      reviews: 150,
      category: "Automotive",
      address: "Line Par, Moradabad",
      isOpen: true,
      price: "₹200 onwards",
      reviewText: "Sahi kaam kiya, paise bhi kam liye.",
      description: "Expert two-wheeler servicing and repair shop. We handle all major bike brands.",
      phone: "+91 88776 65544",
      website: "bikepointmbd.com",
      hours: "09:30 AM - 08:30 PM",
      services: [
        { id: 's1', name: "Bike Wash", price: "₹100" },
        { id: 's2', name: "Oil Change", price: "₹350" },
        { id: 's3', name: "Chain Lube", price: "₹50" },
        { id: 's4', name: "Full Service", price: "₹600" }
      ],
      reviewsList: [
        { user: "Aakash G.", rating: 4, text: "Budget friendly and good work." },
        { user: "Sonu T.", rating: 5, text: "My bike runs smooth now." }
      ]
    },
    // Shopping
    {
      id: 6,
      name: "Brass City Artifacts",
      image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
      reviews: 540,
      category: "Shopping",
      address: "Peetal Nagri, Moradabad",
      isOpen: true,
      price: "Varied Prices",
      reviewText: "Authentic brass items, sahi rate lagaya.",
      description: "Exquisite brass handicrafts and artifacts direct from the manufacturers of Moradabad.",
      phone: "+91 76543 21098",
      website: "brasscity.com",
      hours: "10:00 AM - 08:00 PM",
      services: [
        { id: 'p1', name: "Brass Vase", price: "₹1200" },
        { id: 'p2', name: "Antique Lamp", price: "₹2500" },
        { id: 'p3', name: "Decor Bowl", price: "₹800" },
        { id: 'p4', name: "Gift Set", price: "₹1500" }
      ],
      reviewsList: [
        { user: "Laura B.", rating: 5, text: "Beautiful collection, bought gifts for family." },
        { user: "Rajeev V.", rating: 4, text: "Genuine products, slightly pricey." }
      ]
    },
    {
      id: 7,
      name: "Modern Electronics",
      image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.3,
      reviews: 210,
      category: "Shopping",
      address: "MDA Colony, Moradabad",
      isOpen: true,
      price: "Market Rate",
      reviewText: "Good variety of gadgets, staff helpful tha.",
      description: "One stop shop for all your electronic needs - mobiles, laptops, accessories and repairs.",
      phone: "0591 234 5678",
      website: "modernelectronics.com",
      hours: "10:30 AM - 09:00 PM",
      services: [
        { id: 's1', name: "Mobile Repair", price: "₹500+" },
        { id: 's2', name: "Screen Guard", price: "₹200" },
        { id: 's3', name: "Headphones", price: "₹800" },
        { id: 's4', name: "Charger", price: "₹400" }
      ],
      reviewsList: [
        { user: "Nitin K.", rating: 4, text: "Got my phone repaired quickly." },
        { user: "Sanya R.", rating: 4, text: "Good range of accessories." }
      ]
    },
    // Fitness
    {
      id: 8,
      name: "FitZone Moradabad",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      reviews: 900,
      category: "Fitness",
      address: "Ram Ganga Vihar, Moradabad",
      isOpen: true,
      price: "₹1500/month",
      reviewText: "Machines nayi hain, AC bhi badhiya chalta hai.",
      description: "Premium gym with modern equipment, personal trainers, and group classes for Zumba and Yoga.",
      phone: "+91 99999 88888",
      website: "fitzonembd.com",
      hours: "05:00 AM - 10:00 PM",
      services: [
        { id: 'm1', name: "Monthly Membership", price: "₹1500" },
        { id: 'm2', name: "Quarterly Membership", price: "₹4000" },
        { id: 'm3', name: "Personal Training", price: "₹3000/mo" },
        { id: 'm4', name: "One Day Pass", price: "₹100" }
      ],
      reviewsList: [
        { user: "Aryan S.", rating: 5, text: "Best gym in Ram Ganga Vihar area." },
        { user: "Megha P.", rating: 5, text: "Trainers are very supportive." }
      ]
    },
    // Salon
    {
      id: 9,
      name: "Looks Salon",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.6,
      reviews: 340,
      category: "Salon",
      address: "Civil Lines, Moradabad",
      isOpen: true,
      price: "₹500 onwards",
      reviewText: "Haircut mast kiya, professional staff.",
      description: "Professional unisex salon offering hair cuts, styling, coloring, and skin care treatments.",
      phone: "+91 88877 66655",
      website: "lookssalon.in",
      hours: "10:00 AM - 08:30 PM",
      services: [
        { id: 's1', name: "Men's Haircut", price: "₹350" },
        { id: 's2', name: "Women's Haircut", price: "₹600" },
        { id: 's3', name: "Shave / Beard Trim", price: "₹200" },
        { id: 's4', name: "Facial", price: "₹1500" }
      ],
      reviewsList: [
        { user: "Varun D.", rating: 5, text: "Great styling, exactly what I wanted." },
        { user: "Anjali S.", rating: 4, text: "A bit pricey but worth it." }
      ]
    },
    {
      id: 10,
      name: "Glow & Shine",
      image: "https://images.unsplash.com/photo-1521590832896-7649a37a181b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.2,
      reviews: 180,
      category: "Salon",
      address: "Kanth Road, Moradabad",
      isOpen: true,
      price: "₹300 onwards",
      reviewText: "Decent place for quick grooming.",
      description: "Neighborhood salon for affordable and quick beauty services.",
      phone: "+91 77766 55544",
      website: "glowshine.com",
      hours: "10:00 AM - 08:00 PM",
      services: [
        { id: 's1', name: "Haircut", price: "₹150" },
        { id: 's2', name: "Head Massage", price: "₹200" },
        { id: 's3', name: "Bleach", price: "₹250" },
        { id: 's4', name: "Clean Up", price: "₹400" }
      ],
      reviewsList: [
        { user: "Ravi K.", rating: 4, text: "Good for regular grooming." },
        { user: "Sneha M.", rating: 4, text: "Pocket friendly." }
      ]
    },
    // Repair
    {
      id: 11,
      name: "Quick Fix Plumbers",
      image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.5,
      reviews: 89,
      category: "Repair",
      address: "Majhola, Moradabad",
      isOpen: true,
      price: "₹200 verify",
      reviewText: "Time pe aa gaye aur leak fix kar diya.",
      description: "Emergency plumbing services for residential and commercial needs. Leaks, taps, motors, we fix it all.",
      phone: "+91 91234 56789",
      website: "quickfix.com",
      hours: "08:00 AM - 08:00 PM",
      services: [
        { id: 's1', name: "Visit Charge", price: "₹200" },
        { id: 's2', name: "Tap Replacement", price: "₹150" },
        { id: 's3', name: "Motor Repair", price: "₹500+" },
        { id: 's4', name: "Pipe Leakage", price: "₹300+" }
      ],
      reviewsList: [
        { user: "Mrs. Gupta", rating: 5, text: "Very prompt service." },
        { user: "Mr. Lal", rating: 4, text: "Calculated work, neat and clean." }
      ]
    },
    {
      id: 12,
      name: "City Electricians",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.1,
      reviews: 65,
      category: "Repair",
      address: "Chhada, Moradabad",
      isOpen: true,
      price: "₹150 visit",
      reviewText: "Kaam jaldi ho gaya, sab theek hai.",
      description: "Reliable electricians for home wiring, fan installation, switch repair and appliance checks.",
      phone: "+91 89012 34567",
      website: "cityelectricians.com",
      hours: "09:00 AM - 07:00 PM",
      services: [
        { id: 's1', name: "Visit Charge", price: "₹150" },
        { id: 's2', name: "Fan Installation", price: "₹200" },
        { id: 's3', name: "Switch Change", price: "₹50/pc" },
        { id: 's4', name: "Inverter Check", price: "₹250" }
      ],
      reviewsList: [
        { user: "Karan J.", rating: 4, text: "Good electrician, knew his job." },
        { user: "Sushma D.", rating: 4, text: "Charged reasonably." }
      ]
    },
     // Health
    {
      id: 13,
      name: "Care Pharmacy",
      image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
      reviews: 410,
      category: "Health",
      address: "Delhi Road, Moradabad",
      isOpen: true,
      price: "MRP",
      reviewText: "Saari medicines mil gayi easily.",
      description: "24/7 Pharmacy with home delivery. All kinds of allopathic and ayurvedic medicines available.",
      phone: "0591 222 3333",
      website: "carepharmacy.com",
      hours: "24 Hours",
      services: [
        { id: 's1', name: "Home Delivery", price: "Free" },
        { id: 's2', name: "BP Check", price: "₹20" },
        { id: 's3', name: "Sugar Test", price: "₹50" },
        { id: 's4', name: "Consultation", price: "Varies" }
      ],
      reviewsList: [
        { user: "Ankit B.", rating: 5, text: "Livesaver at night." },
        { user: "Pooja V.", rating: 5, text: "Always stocked." }
      ]
    },
    // Cafe
    {
      id: 14,
      name: "Bean Here",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.6,
      reviews: 560,
      category: "Cafe",
      address: "Wave Mall, Moradabad",
      isOpen: true,
      price: "₹600 for two",
      reviewText: "Ambience bahut accha hai, coffee bhi tasty thi.",
      description: "Cozy cafe in Wave Mall serving brewed coffee, shakes, burgers and continental snacks.",
      phone: "0591 444 5555",
      website: "beanhere.in",
      hours: "11:00 AM - 11:00 PM",
      services: [
        { id: 'm1', name: "Cappuccino", price: "₹150" },
        { id: 'm2', name: "Cold Coffee", price: "₹180" },
        { id: 'm3', name: "Veg Burger", price: "₹120" },
        { id: 'm4', name: "Red Velvet Cake", price: "₹200" }
      ],
      reviewsList: [
        { user: "Sophie T.", rating: 5, text: "Great hangout spot." },
        { user: "Manish K.", rating: 4, text: "Music is a bit loud but food is good." }
      ]
    }
  ];
