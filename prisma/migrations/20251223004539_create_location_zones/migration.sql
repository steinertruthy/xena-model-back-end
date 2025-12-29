-- CreateTable
CREATE TABLE "location_zones" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(32) NOT NULL,
    "code" VARCHAR(32) NOT NULL,
    "city_id" TEXT NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "location_zones_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "location_zones_code_key" ON "location_zones"("code");

-- CreateIndex
CREATE INDEX "location_zones_code_city_id_deleted_idx" ON "location_zones"("code", "city_id", "deleted");

-- AddForeignKey
ALTER TABLE "location_zones" ADD CONSTRAINT "location_zones_city_id_fkey" FOREIGN KEY ("city_id") REFERENCES "cities"("id") ON DELETE CASCADE ON UPDATE CASCADE;
