-- DropIndex
DROP INDEX "account_types_tag_deleted_idx";

-- DropIndex
DROP INDEX "auth_sessions_user_id_refresh_token_expire_at_original_expi_idx";

-- DropIndex
DROP INDEX "cities_code_state_id_deleted_idx";

-- DropIndex
DROP INDEX "countries_code_currency_code_deleted_idx";

-- DropIndex
DROP INDEX "genders_tag_deleted_idx";

-- DropIndex
DROP INDEX "location_neighborhoods_code_city_id_zone_id_deleted_idx";

-- DropIndex
DROP INDEX "location_zones_code_city_id_deleted_idx";

-- DropIndex
DROP INDEX "profile_hair_colors_tag_deleted_idx";

-- DropIndex
DROP INDEX "profile_languages_code_deleted_idx";

-- DropIndex
DROP INDEX "profile_services_tag_deleted_idx";

-- DropIndex
DROP INDEX "roles_tag_deleted_idx";

-- DropIndex
DROP INDEX "states_code_country_id_deleted_idx";

-- DropIndex
DROP INDEX "user_passwords_user_id_hash_deleted_idx";

-- DropIndex
DROP INDEX "users_email_account_type_id_role_id_deleted_idx";

-- CreateIndex
CREATE INDEX "auth_sessions_user_id_idx" ON "auth_sessions"("user_id");

-- CreateIndex
CREATE INDEX "cities_state_id_idx" ON "cities"("state_id");

-- CreateIndex
CREATE INDEX "location_neighborhoods_city_id_idx" ON "location_neighborhoods"("city_id");

-- CreateIndex
CREATE INDEX "location_neighborhoods_zone_id_idx" ON "location_neighborhoods"("zone_id");

-- CreateIndex
CREATE INDEX "location_zones_city_id_idx" ON "location_zones"("city_id");

-- CreateIndex
CREATE INDEX "states_country_id_idx" ON "states"("country_id");

-- CreateIndex
CREATE INDEX "user_passwords_user_id_idx" ON "user_passwords"("user_id");

-- CreateIndex
CREATE INDEX "users_account_type_id_idx" ON "users"("account_type_id");

-- CreateIndex
CREATE INDEX "users_role_id_idx" ON "users"("role_id");
