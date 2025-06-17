-- CreateTable
CREATE TABLE "Siswa" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "nis" TEXT NOT NULL,
    "kelas" TEXT NOT NULL,

    CONSTRAINT "Siswa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Buku" (
    "id" SERIAL NOT NULL,
    "judul" TEXT NOT NULL,
    "penulis" TEXT NOT NULL,
    "siswaId" INTEGER,

    CONSTRAINT "Buku_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Siswa_nis_key" ON "Siswa"("nis");

-- AddForeignKey
ALTER TABLE "Buku" ADD CONSTRAINT "Buku_siswaId_fkey" FOREIGN KEY ("siswaId") REFERENCES "Siswa"("id") ON DELETE SET NULL ON UPDATE CASCADE;
