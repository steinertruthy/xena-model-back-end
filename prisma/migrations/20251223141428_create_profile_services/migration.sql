-- CreateTable
CREATE TABLE "profile_services" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(120) NOT NULL,
    "tag" VARCHAR(120) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "profile_services_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "profile_services_tag_key" ON "profile_services"("tag");

-- CreateIndex
CREATE INDEX "profile_services_tag_deleted_idx" ON "profile_services"("tag", "deleted");
