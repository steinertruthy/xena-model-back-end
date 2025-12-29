/*
  Warnings:

  - A unique constraint covering the columns `[profile_id,language_id]` on the table `user_profile_languages` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[profile_id,service_id]` on the table `user_profile_services` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE INDEX "user_profile_languages_language_id_idx" ON "user_profile_languages"("language_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_profile_languages_profile_id_language_id_key" ON "user_profile_languages"("profile_id", "language_id");

-- CreateIndex
CREATE INDEX "user_profile_services_service_id_idx" ON "user_profile_services"("service_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_profile_services_profile_id_service_id_key" ON "user_profile_services"("profile_id", "service_id");
