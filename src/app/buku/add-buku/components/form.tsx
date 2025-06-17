"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaUpload } from "react-icons/fa";
import { TbXboxXFilled } from "react-icons/tb";
import { toast } from "react-toastify";
import { z } from "zod";
import Link from "next/link";
import ButtonSubmitMenuSetting from "@/components/ButtonSubmitMenuSetting";
import { BukuStoreValidation } from "@/schemas/bukuValidation";
import { CreateBuku } from "../../action/create";
import { useRouter } from "next/navigation";

interface ImageLink {
  url: string;
  name: string;
  size: number;
  file: File;
}

function FormBuku() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [selectedImage, setSelectedImage] = useState<ImageLink | null>(null);


    const formatFileSize = (size: number) => {
        const kb = size / 1024;
        return kb > 1024 ? (kb / 1024).toFixed(2) + " MB" : kb.toFixed(2) + " KB";
    };


    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
        setSelectedImage({
            url: URL.createObjectURL(file),
            name: file.name,
            size: file.size,
            file: file,    
        });
        }
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(
            (event?.target as HTMLFormElement) || new HTMLFormElement()
        );

        const formValues = {
            judul: formData.get("judul") as string,
            penulis: formData.get("penulis") as string,
            description: formData.get("description") as string,
            image: selectedImage?.file || null,
        };

        if (selectedImage?.file) {
            formData.append("fotoState", selectedImage.file); 
        }

        try {
            setIsLoading(true);
            BukuStoreValidation.parse(formValues);
            const response = await CreateBuku(formData);
            console.log(response);
            if (response?.status === 400) {
                toast.error(
                    "Terjadi kesalahan saat menambahkan buku : " + response.message
                );
            } else {
                router.replace("/");
                toast.success("buku berhasil ditambahkan");
            }
        } catch (err) {
            setIsLoading(false);
                if (err instanceof z.ZodError) {
                err.errors.forEach((e) => {
                toast.error(e.message);
                });
                return;
            }
            toast.error("Terjadi kesalahan saat menambahkan buku");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="max-w-2xl">
                    <div className="form-control">
                        <div className="label-text">
                            Judul
                            <span>
                                <div
                                    className="tooltip tooltip-right ms-1"
                                    data-tip="Judul maksimal 200 karakter"
                                >
                                    <span className="text-red-600 text-lg">*</span>
                                </div>
                            </span>
                        </div>
                        <input
                            name="judul"
                            type="text"
                            placeholder="Masukan Judul"
                            className="input input-bordered input-sm w-full"
                            maxLength={200}
                            required
                        />
                        <div className="label mb-0">
                            <span className="label-text-alt">Maksimal 200 Karakter</span>
                        </div>
                    </div>

                    <div className="form-control">
                        <div className="label-text">
                            Penulis
                            <span>
                                <div
                                    className="tooltip tooltip-right ms-1"
                                    data-tip="Penulis"
                                >
                                    <span className="text-red-600 text-lg">*</span>
                                </div>
                            </span>
                        </div>
                        <input
                            name="penulis"
                            type="text"
                            placeholder="Masukan nama penulis"
                            className="input input-bordered input-sm w-full"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <div className="label">
                            <span className="label-text">Deskripsi Singkat</span>
                        </div>
                        <textarea
                            name="description"
                            className="textarea textarea-bordered h-24 w-full"
                            placeholder="description"
                        ></textarea>
                    </div>

                    <div className="form-control">
                        <div className="label">
                            <span className="label-text">
                                Unggah Foto
                                <span>
                                    <div
                                        className="tooltip tooltip-right ms-1"
                                        data-tip="Unggah foto"
                                    >
                                        <label className="text-red-600 text-lg">*</label>
                                    </div>
                                </span>
                            </span>
                        </div>
                        <div className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-300 border-dashed flex items-center justify-between">
                            <div className="flex items-center me-2 sm:me-0">
                                <FaUpload className="text-blue-950 me-4" size={28} />
                                <div>
                                    <p className="text-sm">
                                        Browse your file
                                    </p>
                                    <p className="text-gray-400 text-xs leading-4">
                                        Format foto JPEG, JPG, PNG. Maksimal Ukuran 1 MB
                                    </p>
                                </div>
                            </div>
                            <div className="">
                                <div className="flex items-center justify-center">
                                    <label>
                                        <input type="file" name="foto_path" onChange={handleImageChange} hidden />
                                        <div className="flex w-28 h-9 px-2 flex-col btn btn-outline btn-sm shadow text-xs font-semibold leading-4 items-center justify-center cursor-pointer focus:outline-none">
                                            Browse File
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                        {selectedImage && (
                            <div className="mt-2 w-full px-4 py-2 rounded-xl border border-gray-300 border-dashed flex items-center justify-between">
                                <div className="flex items-center">
                                    <Image
                                        src={selectedImage.url}
                                        alt="Preview"
                                        quality={100}
                                        width={100}
                                        height={100}
                                        className="h-auto max-h-12 rounded-lg border object-fill"
                                    />
                                    <div className="flex flex-col ms-2 justify-start">
                                        <p className="font-semibold text-sm break-all me-2">{decodeURIComponent(selectedImage.name)}</p>
                                        {selectedImage.size && (
                                            <p className="text-gray-400 text-xs">{formatFileSize(selectedImage.size)}</p>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <button
                                        type="button"
                                        onClick={() => setSelectedImage(null)}
                                    >
                                        <TbXboxXFilled size={20} />
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="flex justify-end mt-4">
                        <Link href="/buku" className="btn btn-outline btn-sm me-2">Batalkan</Link>
                        <ButtonSubmitMenuSetting isLoading={isLoading} />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default FormBuku;
