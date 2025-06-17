"use server";

import { prisma } from "@/lib/prisma";

export async function listBuku() {
  try {
    const data = await prisma.buku.findMany();

    return {
      status: 200,
      data,
    };
  } catch {
    return {
      status: 400,
      message: "Failed to get buku",
    };
  }
}
