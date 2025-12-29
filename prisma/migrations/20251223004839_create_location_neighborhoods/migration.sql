-- CreateTable
CREATE TABLE "location_neighborhoods" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(32) NOT NULL,
    "code" VARCHAR(32) NOT NULL,
    "city_id" TEXT NOT NULL,
    "zone_id" TEXT NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "location_neighborhoods_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "location_neighborhoods_code_key" ON "location_neighborhoods"("code");

-- CreateIndex
CREATE INDEX "location_neighborhoods_code_city_id_deleted_idx" ON "location_neighborhoods"("code", "city_id", "deleted");

-- AddForeignKey
ALTER TABLE "location_neighborhoods" ADD CONSTRAINT "location_neighborhoods_city_id_fkey" FOREIGN KEY ("city_id") REFERENCES "cities"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "location_neighborhoods" ADD CONSTRAINT "location_neighborhoods_zone_id_fkey" FOREIGN KEY ("zone_id") REFERENCES "location_zones"("id") ON DELETE CASCADE ON UPDATE CASCADE;
