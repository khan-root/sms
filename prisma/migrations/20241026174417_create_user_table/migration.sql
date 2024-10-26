/*
  Warnings:

  - You are about to drop the `Organization` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Organization" DROP CONSTRAINT "Organization_superAdminId_fkey";

-- DropTable
DROP TABLE "Organization";

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "superAdminId" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_superAdminId_fkey" FOREIGN KEY ("superAdminId") REFERENCES "SuperAdmin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
