/*
  Warnings:

  - You are about to drop the `EventInterval` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "EventInterval" DROP CONSTRAINT "EventInterval_plant_id_fkey";

-- DropTable
DROP TABLE "EventInterval";

-- CreateTable
CREATE TABLE "event_interval" (
    "id" SERIAL NOT NULL,
    "event_type" "event_type" NOT NULL,
    "num_days" SMALLINT NOT NULL,
    "plant_id" INTEGER NOT NULL,

    CONSTRAINT "event_interval_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "event_interval" ADD CONSTRAINT "event_interval_plant_id_fkey" FOREIGN KEY ("plant_id") REFERENCES "plant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
