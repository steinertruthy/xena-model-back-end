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

-- AddForeignKey
ALTER TABLE "user_profile_services" ADD CONSTRAINT "user_profile_services_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "user_profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_profile_services" ADD CONSTRAINT "user_profile_services_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "profile_services"("id") ON DELETE CASCADE ON UPDATE CASCADE;
