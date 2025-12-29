-- CreateTable
CREATE TABLE "genders" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(24) NOT NULL,
    "tag" VARCHAR(24) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "genders_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "genders_tag_key" ON "genders"("tag");

-- CreateIndex
CREATE INDEX "genders_tag_deleted_idx" ON "genders"("tag", "deleted");
