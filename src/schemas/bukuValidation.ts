import { z } from 'zod';

const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];
const MAX_FILE_SIZE_MB = 1; 

export const BukuStoreValidation = z.object({
  judul: z.string().min(1, "Judul tidak boleh kosong").max(200, "Judul maksimal 200 karakter"),
  penulis: z.string().min(1, "penulis tidak boleh kosong"),
  description: z.string().min(1, "description tidak boleh kosong"),
  image: z
    .custom<File>((file) => !!file, {
      message: "File foto tidak boleh kosong.",
    })
    .refine((file) => !file || ACCEPTED_IMAGE_TYPES.includes(file.type), {
      message: "Format file tidak valid. Harus berupa .jpeg, .jpg, atau .png",
    })
    .refine((file) => !file || file.size <= MAX_FILE_SIZE_MB * 1024 * 1024, {
      message: `Ukuran file maksimal ${MAX_FILE_SIZE_MB} MB.`,
    }),
});