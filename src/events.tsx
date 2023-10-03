interface TicketType {
    id : number;
    type: string;
    price: number;
    availableSeats: number;
    color?: string;
}

interface ConcertEvent {
    id: number;
    title: string;
    description: string;
    latitude?: number;
    longitude?: number;
    carouselImages: string[];
    ticketTypes: TicketType[];
    date: string;
    time: string;
    location: string;
    category: string;
    quota: number;
    status: string;
    created_at: string;
    updated_at: string;
}

export  const dummyEvents: ConcertEvent[] = [
    {
        id: 0,
        title: "BTS Concert",
        description: "BTS Cameback Concert 2021 - Permission to Dance On Stage 2021 World Tour",
        carouselImages: [
            "/assets/bts_main1.jpeg",
            "/assets/bts_main2.JPEG",
            "/assets/bts_main3.jpg",
        ],
        ticketTypes: [
            { id:1, type: "Platinum", price: 2000000, availableSeats: 50 , color: "yellow"},
            { id:2, type: "VIP", price: 1500000, availableSeats: 0 , color: "green"},
            { id:3, type: "Cat1", price: 1000000, availableSeats: 0 , color: "blue"},
            { id:4, type: "Cat2", price: 750000, availableSeats: 150, color: "red" },
            { id:5, type: "Tribune", price: 500000, availableSeats: 200, color: "purple" }
        ],
        date: "2021-10-10",
        time: "10:00",
        location: "Jakarta International Expo, Kemayoran, Jakarta Pusat",
        latitude: -6.146435293840595,
        longitude: 106.84266107565821,
        category: "Concert",
        quota: 100,
        status: "Available",
        created_at: "2021-10-10",
        updated_at: "2021-10-10",
    },
    {
        id: 1,
        title: "Blackpink Concert",
        description: "Blackpink Concert",
        carouselImages: [
            "/assets/blackpink_main1.png",
            "/assets/blackpink_main2.jpg",
            "/assets/blackpink_main3.jpg",
        ],
        ticketTypes: [
            {id:1, type: "Platinum", price: 2000000, availableSeats: 60 },
            {id:2, type: "VIP", price: 1500000, availableSeats: 80 },
            {id:3, type: "Cat1", price: 1000000, availableSeats: 110 },
            {id:4, type: "Cat2", price: 750000, availableSeats: 160 },
            {id:5, type: "Tribune", price: 500000, availableSeats: 210 }
        ],
        date: "2021-10-10",
        time: "10:00",
        location: "Jakarta",
        category: "Concert",
        quota: 100,
        status: "Available",
        created_at: "2021-10-10",
        updated_at: "2021-10-10",
    },{
        id: 2,
        title: "Coldplay Concert",
        description: "Coldplay's Music of The Spheres World Tour",
        carouselImages: [
            "/assets/coldplay_main1.jpg",
            "/assets/coldplay_main2.jpg",
            "/assets/coldplay_main3.jpg",
        ],
        ticketTypes: [
            { type: "Platinum", price: 2500000, availableSeats: 40 },
            { type: "VIP", price: 1800000, availableSeats: 70 },
            { type: "Cat1", price: 1200000, availableSeats: 90 },
            { type: "Cat2", price: 800000, availableSeats: 130 },
            { type: "Tribune", price: 600000, availableSeats: 190 }
        ],
        date: "2021-11-20",
        time: "19:30",
        location: "Jakarta",
        category: "Concert",
        quota: 100,
        status: "Available",
        created_at: "2021-11-10",
        updated_at: "2021-11-10",
    },
    {
        id: 3,
        title: "Adele Live",
        description: "Adele's 30 Album Tour",
        carouselImages: [
            "/assets/adele_main1.jpg",
            "/assets/adele_main2.jpg",
            "/assets/adele_main3.jpg",
        ],
        ticketTypes: [
            { type: "Platinum", price: 3000000, availableSeats: 30 },
            { type: "VIP", price: 2000000, availableSeats: 60 },
            { type: "Cat1", price: 1400000, availableSeats: 80 },
            { type: "Cat2", price: 850000, availableSeats: 120 },
            { type: "Tribune", price: 650000, availableSeats: 180 }
        ],
        date: "2021-12-15",
        time: "20:00",
        location: "Jakarta",
        category: "Concert",
        quota: 100,
        status: "Available",
        created_at: "2021-12-05",
        updated_at: "2021-12-05",
    },{
        "id": 4,
        "title": "Beatles Tribute Concert",
        "description": "A special tribute to the legendary Beatles band.",
        "carouselImages": [
            "/assets/beatles_main1.jpeg",
            "/assets/beatles_main2.jpg",
            "/assets/beatles_main3.jpg"
        ],
        "ticketTypes": [
            { "type": "Platinum", "price": 2800000, "availableSeats": 35 },
            { "type": "VIP", "price": 1900000, "availableSeats": 65 },
            { "type": "Cat1", "price": 1300000, "availableSeats": 85 },
            { "type": "Cat2", "price": 820000, "availableSeats": 125 },
            { "type": "Tribune", "price": 620000, "availableSeats": 185 }
        ],
        "date": "2022-01-10",
        "time": "18:30",
        "location": "Jakarta",
        "category": "Concert",
        "quota": 100,
        "status": "Available",
        "created_at": "2021-12-20",
        "updated_at": "2021-12-20"
    },{
        "id": 5,
        "title": "Beatles Tribute Concert",
        "description": "A special tribute to the legendary Beatles band.",
        "carouselImages": [
            "/assets/beatles_main1.jpeg",
            "/assets/beatles_main2.jpg",
            "/assets/beatles_main3.jpg"
        ],
        "ticketTypes": [
            { "type": "Platinum", "price": 2800000, "availableSeats": 35 },
            { "type": "VIP", "price": 1900000, "availableSeats": 65 },
            { "type": "Cat1", "price": 1300000, "availableSeats": 85 },
            { "type": "Cat2", "price": 820000, "availableSeats": 125 },
            { "type": "Tribune", "price": 620000, "availableSeats": 185 }
        ],
        "date": "2022-01-10",
        "time": "18:30",
        "location": "Jakarta",
        "category": "Concert",
        "quota": 100,
        "status": "Available",
        "created_at": "2021-12-20",
        "updated_at": "2021-12-20"
    }
    
    
]

