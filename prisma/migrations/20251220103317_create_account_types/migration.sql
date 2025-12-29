-- CreateTable
CREATE TABLE "account_types" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(24) NOT NULL,
    "tag" VARCHAR(24) NOT NULL,
    "description" VARCHAR(256),
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "account_types_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "account_types_tag_key" ON "account_types"("tag");

-- CreateIndex
CREATE INDEX "account_types_tag_deleted_idx" ON "account_types"("tag", "deleted");
