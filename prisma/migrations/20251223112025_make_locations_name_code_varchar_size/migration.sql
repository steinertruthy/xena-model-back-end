/*
  Warnings:

  - You are about to alter the column `code` on the `countries` table. The data in that column could be lost. The data in that column will be cast from `VarChar(32)` to `VarChar(8)`.
  - You are about to alter the column `code` on the `location_zones` table. The data in that column could be lost. The data in that column will be cast from `VarChar(32)` to `VarChar(8)`.

*/
-- DropIndex
DROP INDEX "location_neighborhoods_code_city_id_deleted_idx";

-- AlterTable
ALTER TABLE "cities" ALTER COLUMN "name" SET DATA TYPE VARCHAR(72),
ALTER COLUMN "code" SET DATA TYPE VARCHAR(8);

-- AlterTable
ALTER TABLE "countries" ALTER COLUMN "name" SET DATA TYPE VARCHAR(72),
ALTER COLUMN "code" SET DATA TYPE VARCHAR(8);

-- AlterTable
ALTER TABLE "location_neighborhoods" ALTER COLUMN "name" SET DATA TYPE VARCHAR(256),
ALTER COLUMN "code" SET DATA TYPE VARCHAR(120);

-- AlterTable
ALTER TABLE "location_zones" ALTER COLUMN "name" SET DATA TYPE VARCHAR(120),
ALTER COLUMN "code" SET DATA TYPE VARCHAR(8);

-- AlterTable
ALTER TABLE "states" ALTER COLUMN "name" SET DATA TYPE VARCHAR(72),
ALTER COLUMN "code" SET DATA TYPE VARCHAR(8);

-- CreateIndex
CREATE INDEX "location_neighborhoods_code_city_id_zone_id_deleted_idx" ON "location_neighborhoods"("code", "city_id", "zone_id", "deleted");
