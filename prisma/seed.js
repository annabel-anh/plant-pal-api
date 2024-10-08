"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("./db"));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const mockUsers = yield db_1.default.user.createMany({
            data: [{
                    first_name: "Alice",
                    last_name: "Smith",
                    email: "alice.smith@prisma.io",
                    password: "Abcd@1234"
                }, { first_name: "Bob", last_name: "Vance", email: "bob.vance@gmail.com", password: "Sup3r@strong" },]
        });
        const mockLocations = yield db_1.default.location.createMany({
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
            ]
        });
        const mockPlants = yield db_1.default.plant.createMany({
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
        });
    });
}
main()
    .then(() => __awaiter(void 0, void 0, void 0, function* () { return yield db_1.default.$disconnect(); }))
    .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(e);
    yield db_1.default.$disconnect();
    process.exit(1);
}));
