-- CreateEnum
CREATE TYPE "status" AS ENUM ('HEALTHY', 'SICK', 'DEAD');

-- CreateEnum
CREATE TYPE "light_condition" AS ENUM ('BRIGHT', 'MEDIUM', 'DIM', 'DARK');

-- CreateEnum
CREATE TYPE "event_type" AS ENUM ('WATERING', 'FERTILIZING', 'PRUNING', 'REPOTTING', 'PEST_CONTROL', 'CLEANING');

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "plant" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "scientific_name" TEXT,
    "bought_date" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "img_url" TEXT,
    "care_requirement" JSONB,
    "health_status" "status" DEFAULT 'HEALTHY',
    "user_id" INTEGER NOT NULL,
    "location_id" INTEGER,

    CONSTRAINT "plant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "location" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "light_condition" "light_condition",
    "temp_min" DECIMAL(65,30),
    "temp_max" DECIMAL(65,30),
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "event" (
    "id" SERIAL NOT NULL,
    "done_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "note" TEXT,
    "event_type" "event_type" NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventInterval" (
    "id" SERIAL NOT NULL,
    "event_type" "event_type" NOT NULL,
    "num_days" SMALLINT NOT NULL,
    "plant_id" INTEGER NOT NULL,

    CONSTRAINT "EventInterval_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "location_name_key" ON "location"("name");

-- AddForeignKey
ALTER TABLE "plant" ADD CONSTRAINT "plant_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "plant" ADD CONSTRAINT "plant_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "location"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "location" ADD CONSTRAINT "location_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "event" ADD CONSTRAINT "event_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventInterval" ADD CONSTRAINT "EventInterval_plant_id_fkey" FOREIGN KEY ("plant_id") REFERENCES "plant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
