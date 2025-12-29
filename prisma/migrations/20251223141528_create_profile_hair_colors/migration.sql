-- CreateTable
CREATE TABLE "profile_hair_colors" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(24) NOT NULL,
    "tag" VARCHAR(24) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "profile_hair_colors_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "profile_hair_colors_tag_key" ON "profile_hair_colors"("tag");

-- CreateIndex
CREATE INDEX "profile_hair_colors_tag_deleted_idx" ON "profile_hair_colors"("tag", "deleted");
