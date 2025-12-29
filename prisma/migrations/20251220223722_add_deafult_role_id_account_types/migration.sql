/*
  Warnings:

  - Added the required column `default_role_id` to the `account_types` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "account_types" ADD COLUMN     "default_role_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "account_types" ADD CONSTRAINT "account_types_default_role_id_fkey" FOREIGN KEY ("default_role_id") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
