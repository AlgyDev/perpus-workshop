"use server";

import { prisma } from "@/lib/prisma";
import fs from "fs";
import path from "path";

export async function CreateBuku(formData: FormData) {
  const judul = formData.get("judul") as string;
  const description = formData.get("description") as string;
  const penulis = formData.get("penulis") as string;
  const file = formData.get("fotoState") as File | null;

  let imagePath: string | null = null;

  // Simpan file ke folder publik (misal: /public/uploads)
  if (file && file.size > 0 && file.name !== "undefined") {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const filename = `${Date.now()}-${file.name}`;
    const uploadDir = path.join(process.cwd(), "public", "uploads");

    // Buat folder jika belum ada
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const uploadPath = path.join(uploadDir, filename);
    fs.writeFileSync(uploadPath, buffer);

    imagePath = `/uploads/${filename}`;
  }

  try {
    await prisma.buku.create({
      data: {
        judul,
        description,
        penulis,
        image: imagePath,
      },
    });
  } catch{
    return {
      status: 400,
      message: "Failed to create buku",
    };
  }
}
