/*
  Warnings:

  - You are about to drop the column `is_active` on the `user_profiles` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "user_profiles" DROP COLUMN "is_active",
ADD COLUMN     "is_visible" BOOLEAN NOT NULL DEFAULT true;
