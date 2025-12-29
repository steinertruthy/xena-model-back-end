-- DropIndex
DROP INDEX "auth_sessions_refresh_token_expire_at_original_expire_at_idx";

-- CreateTable
CREATE TABLE "user_passwords" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "user_passwords_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_passwords_hash_key" ON "user_passwords"("hash");

-- CreateIndex
CREATE INDEX "user_passwords_user_id_hash_deleted_idx" ON "user_passwords"("user_id", "hash", "deleted");

-- CreateIndex
CREATE INDEX "auth_sessions_user_id_refresh_token_expire_at_original_expi_idx" ON "auth_sessions"("user_id", "refresh_token", "expire_at", "original_expire_at");

-- AddForeignKey
ALTER TABLE "user_passwords" ADD CONSTRAINT "user_passwords_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
