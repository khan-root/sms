/*
  Warnings:

  - Added the required column `superAdminId` to the `Organization` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `SuperAdmin` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "SuperAdminRole" AS ENUM ('SUPERADMIN');

-- AlterTable
ALTER TABLE "Organization" ADD COLUMN     "superAdminId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "SuperAdmin" ADD COLUMN     "role" "SuperAdminRole" NOT NULL DEFAULT 'SUPERADMIN',
ALTER COLUMN "name" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Organization" ADD CONSTRAINT "Organization_superAdminId_fkey" FOREIGN KEY ("superAdminId") REFERENCES "SuperAdmin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
