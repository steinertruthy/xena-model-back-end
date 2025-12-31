-- CreateTable
CREATE TABLE "countries" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(72) NOT NULL,
    "code" VARCHAR(8) NOT NULL,
    "currency_code" VARCHAR(5) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "countries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "states" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(72) NOT NULL,
    "code" VARCHAR(8) NOT NULL,
    "country_id" TEXT NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "states_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cities" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(72) NOT NULL,
    "code" VARCHAR(8) NOT NULL,
    "state_id" TEXT NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "cities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "location_zones" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(120) NOT NULL,
    "code" VARCHAR(8) NOT NULL,
    "city_id" TEXT NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "location_zones_pkey" PRIMARY KEY ("id")
);

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

-- CreateTable
CREATE TABLE "account_types" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(24) NOT NULL,
    "tag" VARCHAR(24) NOT NULL,
    "description" VARCHAR(256),
    "is_public" BOOLEAN NOT NULL DEFAULT false,
    "default_role_id" TEXT NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "account_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roles" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(24) NOT NULL,
    "tag" VARCHAR(24) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "description" VARCHAR(256),
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "roles_pkey" PRIMARY KEY ("id")
);

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

-- CreateTable
CREATE TABLE "user_profile_services" (
    "id" TEXT NOT NULL,
    "profile_id" TEXT NOT NULL,
    "service_id" TEXT NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "user_profile_services_pkey" PRIMARY KEY ("id")
);

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

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(32) NOT NULL,
    "email" VARCHAR(120) NOT NULL,
    "avatar_url" TEXT,
    "cover_url" TEXT,
    "account_type_id" TEXT NOT NULL,
    "role_id" TEXT NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

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

-- CreateTable
CREATE TABLE "auth_sessions" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "refresh_token" TEXT NOT NULL,
    "device" VARCHAR(256) NOT NULL DEFAULT 'UNKNOWN',
    "ip" VARCHAR(120) NOT NULL DEFAULT 'UNKNOWN',
    "expire_at" TIMESTAMP(3) NOT NULL,
    "original_expire_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "auth_sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_profiles" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "gender_id" TEXT NOT NULL,
    "hair_color_id" TEXT NOT NULL,
    "height" REAL NOT NULL,
    "foot_size" SMALLINT NOT NULL,
    "has_tattoo" BOOLEAN NOT NULL DEFAULT false,
    "has_piercing" BOOLEAN NOT NULL DEFAULT false,
    "is_smoker" BOOLEAN NOT NULL DEFAULT false,
    "is_pregnant" BOOLEAN NOT NULL DEFAULT false,
    "is_verified" BOOLEAN NOT NULL DEFAULT false,
    "is_visible" BOOLEAN NOT NULL DEFAULT true,
    "date_birth" DATE NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "user_profiles_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "countries_code_key" ON "countries"("code");

-- CreateIndex
CREATE UNIQUE INDEX "states_code_key" ON "states"("code");

-- CreateIndex
CREATE INDEX "states_country_id_idx" ON "states"("country_id");

-- CreateIndex
CREATE UNIQUE INDEX "cities_code_key" ON "cities"("code");

-- CreateIndex
CREATE INDEX "cities_state_id_idx" ON "cities"("state_id");

-- CreateIndex
CREATE UNIQUE INDEX "location_zones_code_key" ON "location_zones"("code");

-- CreateIndex
CREATE INDEX "location_zones_city_id_idx" ON "location_zones"("city_id");

-- CreateIndex
CREATE UNIQUE INDEX "genders_tag_key" ON "genders"("tag");

-- CreateIndex
CREATE UNIQUE INDEX "account_types_tag_key" ON "account_types"("tag");

-- CreateIndex
CREATE INDEX "account_types_default_role_id_idx" ON "account_types"("default_role_id");

-- CreateIndex
CREATE UNIQUE INDEX "roles_tag_key" ON "roles"("tag");

-- CreateIndex
CREATE UNIQUE INDEX "profile_languages_code_key" ON "profile_languages"("code");

-- CreateIndex
CREATE INDEX "user_profile_languages_language_id_idx" ON "user_profile_languages"("language_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_profile_languages_profile_id_language_id_key" ON "user_profile_languages"("profile_id", "language_id");

-- CreateIndex
CREATE UNIQUE INDEX "profile_services_tag_key" ON "profile_services"("tag");

-- CreateIndex
CREATE INDEX "user_profile_services_service_id_idx" ON "user_profile_services"("service_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_profile_services_profile_id_service_id_key" ON "user_profile_services"("profile_id", "service_id");

-- CreateIndex
CREATE UNIQUE INDEX "profile_hair_colors_tag_key" ON "profile_hair_colors"("tag");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "users_account_type_id_idx" ON "users"("account_type_id");

-- CreateIndex
CREATE INDEX "users_role_id_idx" ON "users"("role_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_passwords_hash_key" ON "user_passwords"("hash");

-- CreateIndex
CREATE INDEX "user_passwords_user_id_idx" ON "user_passwords"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "auth_sessions_refresh_token_key" ON "auth_sessions"("refresh_token");

-- CreateIndex
CREATE INDEX "auth_sessions_user_id_idx" ON "auth_sessions"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_profiles_user_id_key" ON "user_profiles"("user_id");

-- CreateIndex
CREATE INDEX "user_profiles_gender_id_idx" ON "user_profiles"("gender_id");

-- CreateIndex
CREATE INDEX "user_profiles_hair_color_id_idx" ON "user_profiles"("hair_color_id");

-- AddForeignKey
ALTER TABLE "states" ADD CONSTRAINT "states_country_id_fkey" FOREIGN KEY ("country_id") REFERENCES "countries"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cities" ADD CONSTRAINT "cities_state_id_fkey" FOREIGN KEY ("state_id") REFERENCES "states"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "location_zones" ADD CONSTRAINT "location_zones_city_id_fkey" FOREIGN KEY ("city_id") REFERENCES "cities"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "account_types" ADD CONSTRAINT "account_types_default_role_id_fkey" FOREIGN KEY ("default_role_id") REFERENCES "roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_profile_languages" ADD CONSTRAINT "user_profile_languages_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "user_profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_profile_languages" ADD CONSTRAINT "user_profile_languages_language_id_fkey" FOREIGN KEY ("language_id") REFERENCES "profile_languages"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_profile_services" ADD CONSTRAINT "user_profile_services_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "user_profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_profile_services" ADD CONSTRAINT "user_profile_services_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "profile_services"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_account_type_id_fkey" FOREIGN KEY ("account_type_id") REFERENCES "account_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_passwords" ADD CONSTRAINT "user_passwords_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "auth_sessions" ADD CONSTRAINT "auth_sessions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_profiles" ADD CONSTRAINT "user_profiles_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_profiles" ADD CONSTRAINT "user_profiles_gender_id_fkey" FOREIGN KEY ("gender_id") REFERENCES "genders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_profiles" ADD CONSTRAINT "user_profiles_hair_color_id_fkey" FOREIGN KEY ("hair_color_id") REFERENCES "profile_hair_colors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
