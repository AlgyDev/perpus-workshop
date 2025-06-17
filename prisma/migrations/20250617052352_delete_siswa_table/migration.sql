/*
  Warnings:

  - You are about to drop the column `siswaId` on the `Buku` table. All the data in the column will be lost.
  - You are about to drop the `Siswa` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Buku" DROP CONSTRAINT "Buku_siswaId_fkey";

-- AlterTable
ALTER TABLE "Buku" DROP COLUMN "siswaId";

-- DropTable
DROP TABLE "Siswa";
