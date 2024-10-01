import prisma from "../src/models/db"
import { hashPassword } from "../src/utils/auth.utils"

async function main() {
    const mockUsers = await prisma.user.createMany({
        data: [
            {
                first_name: "Alice",
                last_name: "Smith",
                email: "alice.smith@prisma.io",
                password: await hashPassword("Abcd@1234"),
            },
            {
                first_name: "Bob",
                last_name: "Vance",
                email: "bob.vance@gmail.com",
                password: await hashPassword("Sup3r@strong"),
            },
        ],
    })

    const mockLocations = await prisma.location.createMany({
        data: [
            // Locations for user ID 1
            {
                id: 1,
                name: "Living Room",
                light_condition: "BRIGHT",
                temp_min: 18.5,
                temp_max: 24.0,
                user_id: 1,
            },
            {
                id: 2,
                name: "Bedroom",
                light_condition: "MEDIUM",
                temp_min: 16.0,
                temp_max: 22.0,
                user_id: 1,
            },
            {
                id: 3,
                name: "Kitchen",
                light_condition: "DIM",
                temp_min: 20.0,
                temp_max: 25.0,
                user_id: 1,
            },

            // Locations for user ID 2
            {
                id: 4,
                name: "Home Office",
                light_condition: "BRIGHT",
                temp_min: 19.0,
                temp_max: 23.0,
                user_id: 2,
            },
            {
                id: 5,
                name: "Balcony",
                light_condition: "BRIGHT",
                temp_min: 18.0,
                temp_max: 30.0,
                user_id: 2,
            },
            {
                id: 6,
                name: "Dining Room",
                light_condition: "MEDIUM",
                temp_min: 17.0,
                temp_max: 24.0,
                user_id: 2,
            },
            {
                id: 7,
                name: "Guest Room",
                light_condition: "DIM",
                temp_min: 16.0,
                temp_max: 22.0,
                user_id: 2,
            },
            {
                id: 8,
                name: "Bathroom",
                light_condition: "DIM",
                temp_min: 18.0,
                temp_max: 24.0,
                user_id: 2,
            },
        ],
    })

    const mockPlants = await prisma.plant.createMany({
        data: [
            // Plants for user ID 1
            {
                id: 1,
                name: "Snake Plant",
                scientific_name: "Sansevieria trifasciata",
                bought_date: new Date("2023-01-15"),
                img_url: "https://example.com/snake-plant.jpg",
                care_requirement: {
                    light: "Indirect sunlight",
                    temperature: { min: 18, max: 27 },
                    humidity: "Low",
                },
                health_status: "HEALTHY",
                user_id: 1,
                location_id: 1,
            },
            {
                id: 2,
                name: "Spider Plant",
                scientific_name: "Chlorophytum comosum",
                bought_date: new Date("2023-02-01"),
                img_url: "https://example.com/spider-plant.jpg",
                care_requirement: {
                    light: "Bright, indirect sunlight",
                    temperature: { min: 15, max: 25 },
                    humidity: "Medium",
                },
                health_status: "HEALTHY",
                user_id: 1,
                location_id: 2,
            },
            {
                id: 3,
                name: "Pothos",
                scientific_name: "Epipremnum aureum",
                bought_date: new Date("2023-03-05"),
                img_url: "https://example.com/pothos.jpg",
                care_requirement: {
                    light: "Low to bright, indirect sunlight",
                    temperature: { min: 18, max: 29 },
                    humidity: "Medium",
                },
                health_status: "HEALTHY",
                user_id: 1,
                location_id: 3,
            },
            {
                id: 4,
                name: "Peace Lily",
                scientific_name: "Spathiphyllum",
                bought_date: new Date("2023-04-20"),
                img_url: "https://example.com/peace-lily.jpg",
                care_requirement: {
                    light: "Low to medium, indirect sunlight",
                    temperature: { min: 16, max: 24 },
                    humidity: "High",
                },
                health_status: "HEALTHY",
                user_id: 1,
                location_id: 1,
            },
            {
                id: 5,
                name: "Aloe Vera",
                scientific_name: "Aloe barbadensis miller",
                bought_date: new Date("2023-05-15"),
                img_url: "https://example.com/aloe-vera.jpg",
                care_requirement: {
                    light: "Bright, direct sunlight",
                    temperature: { min: 20, max: 30 },
                    humidity: "Low",
                },
                health_status: "HEALTHY",
                user_id: 1,
                location_id: 2,
            },

            // Plants for user ID 2
            {
                id: 6,
                name: "Fiddle Leaf Fig",
                scientific_name: "Ficus lyrata",
                bought_date: new Date("2023-01-20"),
                img_url: "https://example.com/fiddle-leaf-fig.jpg",
                care_requirement: {
                    light: "Bright, indirect sunlight",
                    temperature: { min: 18, max: 27 },
                    humidity: "Medium",
                },
                health_status: "HEALTHY",
                user_id: 2,
                location_id: 4,
            },
            {
                id: 7,
                name: "ZZ Plant",
                scientific_name: "Zamioculcas zamiifolia",
                bought_date: new Date("2023-02-10"),
                img_url: "https://example.com/zz-plant.jpg",
                care_requirement: {
                    light: "Low light",
                    temperature: { min: 15, max: 25 },
                    humidity: "Low",
                },
                health_status: "HEALTHY",
                user_id: 2,
                location_id: 4,
            },
            {
                id: 8,
                name: "Rubber Plant",
                scientific_name: "Ficus elastica",
                bought_date: new Date("2023-03-01"),
                img_url: "https://example.com/rubber-plant.jpg",
                care_requirement: {
                    light: "Bright, indirect sunlight",
                    temperature: { min: 18, max: 27 },
                    humidity: "Medium",
                },
                health_status: "HEALTHY",
                user_id: 2,
                location_id: 5,
            },
            {
                id: 9,
                name: "Boston Fern",
                scientific_name: "Nephrolepis exaltata",
                bought_date: new Date("2023-04-05"),
                img_url: "https://example.com/boston-fern.jpg",
                care_requirement: {
                    light: "Indirect sunlight",
                    temperature: { min: 16, max: 24 },
                    humidity: "High",
                },
                health_status: "HEALTHY",
                user_id: 2,
                location_id: 6,
            },
        ],
    })
}

main()
    .then(async () => await prisma.$disconnect())
    .catch(async (e) => {
        console.log(e)
        await prisma.$disconnect()
        process.exit(1)
    })
