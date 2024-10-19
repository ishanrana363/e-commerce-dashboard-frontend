
import toast from "react-hot-toast";
const cloudName = import.meta.env.VITE_CLOUD_NAME;
export const uploadImageToCloudinary = async (imageFile) => {
  const formData = new FormData();
  formData.append("file", imageFile);
  formData.append("upload_preset", "e-commerce"); // Cloudinary's upload preset
  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await response.json();
    if (data.secure_url) {
      return data.secure_url; // Return the uploaded image URL
    } else {
      throw new Error("Upload failed");
    }
  } catch (error) {
    console.error("Error uploading image:", error);
    toast.error("Image upload failed!");
    return null;
  }
};