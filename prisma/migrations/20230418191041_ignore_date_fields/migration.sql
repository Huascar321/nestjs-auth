/*
  Warnings:

  - Added the required column `lastUpdateDate` to the `Cat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastUpdateDate` to the `UserRole` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cat" ADD COLUMN     "creationDate" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "lastUpdateDate" TIMESTAMPTZ NOT NULL;

-- AlterTable
ALTER TABLE "UserRole" ADD COLUMN     "creationDate" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "lastUpdateDate" TIMESTAMPTZ NOT NULL;
