/*
  Warnings:

  - A unique constraint covering the columns `[name,user_id]` on the table `location` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "location_name_key";

-- CreateIndex
CREATE UNIQUE INDEX "location_name_user_id_key" ON "location"("name", "user_id");
