-- CreateTable
CREATE TABLE "profile_languages" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(32) NOT NULL,
    "code" VARCHAR(8) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "profile_languages_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "profile_languages_code_key" ON "profile_languages"("code");

-- CreateIndex
CREATE INDEX "profile_languages_code_deleted_idx" ON "profile_languages"("code", "deleted");
