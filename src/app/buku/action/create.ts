"use server";

import { prisma } from "@/lib/prisma";
import { supabase } from "@/lib/supabase";

export async function CreateBuku(formData: FormData) {
  const judul = formData.get("judul") as string;
  const description = formData.get("description") as string;
  const penulis = formData.get("penulis") as string;
  const file = formData.get("fotoState") as File | null;

  let imagePath: string | null = null;

  if (file && file.size > 0 && file.name !== "undefined") {
    const fileExt = file.name.split(".").pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const fileBuffer = Buffer.from(await file.arrayBuffer());

    const { error } = await supabase.storage
    .from("perpus-workshop")
    .upload(fileName, fileBuffer, {
      contentType: file.type,
      upsert: true,
    });


    // Buat folder jika belum ada
    if (error) {
      console.error("Upload error:", error.message);
      return { status: 500, message: "Failed to upload image." };
    }

      // Dapatkan URL public file
    const { data: publicURL } = supabase
      .storage
      .from("perpus-workshop")
      .getPublicUrl(fileName);

    imagePath = publicURL?.publicUrl ?? null;
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
