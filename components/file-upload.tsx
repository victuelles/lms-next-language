'use client'

import { UploadDropzone,UploadButton } from "@/lib/uploadthing"
import { ourFileRouter } from "@/app/api/uploadthing/core"
import toast from "react-hot-toast";

interface FileUploadProps {
    onChange: (url?: string) => void;
    endpoint: keyof typeof ourFileRouter;
}

export const FileUpload = ({
    onChange,
    endpoint
}: FileUploadProps) => {
    return (
        <UploadDropzone
        endpoint={endpoint}
        onClientUploadComplete={(res) => {
            console.log("Files: ", res?.[0]);
            onChange(res?.[0].url);
        }}
        onUploadError={(error: Error) => {
            console.log(error)
            toast.error(`${error.message}`)
        }}
        onUploadBegin={(name) => {
            // Do something once upload begins
            console.log("Uploading: ", name);
          }}
           
        />
    )
} 


 