-- CreateTable
CREATE TABLE "user_profile_languages" (
    "id" TEXT NOT NULL,
    "profile_id" TEXT NOT NULL,
    "language_id" TEXT NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "user_profile_languages_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "user_profile_languages" ADD CONSTRAINT "user_profile_languages_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "user_profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_profile_languages" ADD CONSTRAINT "user_profile_languages_language_id_fkey" FOREIGN KEY ("language_id") REFERENCES "profile_languages"("id") ON DELETE CASCADE ON UPDATE CASCADE;
