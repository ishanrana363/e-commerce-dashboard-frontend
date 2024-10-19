import toast, { Toaster } from 'react-hot-toast';
import { uploadImg } from './../../upload-img/UploadImg';
import { createAlert } from '../../helper/createAlert';
import { useState } from 'react';
import Swal from 'sweetalert2';
import brandStore from '../../api-request/brandApi';

const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success",
    cancelButton: "btn btn-danger"
  },
  buttonsStyling: false
});

const BrandCreatePage = () => {
  const { brandCreateApi } = brandStore();
  const [loader, setLoader] = useState(false);

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    const brandName = e.target.brandName.value;
    const brandImg = e.target.brandImg.files[0];

    let brandImgUrl = brandImg ? await uploadImg(brandImg) : "";

    const payload = {
      brandName,
      brandImg: brandImgUrl
    };

    const resp = await createAlert();
    if (resp.isConfirmed) {
      if (brandName.length === 0) {
        toast.error("Brand name is required");
      } else if (brandImg.length === 0) {
        toast.error("Brand image is required");
      } else {
        setLoader(true);
        let res = await brandCreateApi(payload);
        setLoader(false);
        if (res) {
          Swal.fire({
            title: "Created!",
            text: "Your brand has been created successfully.",
            icon: "success"
          });
        } else {
          toast.error("Failed to create brand");
        }
      }
    } else {
      swalWithBootstrapButtons.fire({
        title: "Cancelled",
        text: "Your action was cancelled.",
        icon: "error"
      });
    }

    e.target.reset();
  };

  return (
    <div>
      <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md mt-10">
        <h2 className="text-2xl text-center font-semibold mb-4">Create Brand</h2>
        <form onSubmit={handleSubmitForm}>
          {/* Category Name Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="brandName">
              Brand Name
            </label>
            <input
              type="text"
              id="brandName"
              name="brandName"
              placeholder="Enter brand name"
              className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-indigo-500"
            />
          </div>

          {/* Category Image Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="brandImg">
              Brand Image
            </label>
            <input
              type="file"
              name="brandImg"
              id="brandImg"
              className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-indigo-500"
            />
          </div>

          {/* Submit Button */}
          <div className="mb-4">
            <button
              type="submit"
              className={`w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-200 flex items-center justify-center ${loader ? 'cursor-not-allowed' : ''}`}
              disabled={loader}
            >
              {loader && (
                <svg
                  className="animate-spin h-5 w-5 text-white mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  ></path>
                </svg>
              )}
              {loader ? 'Creating...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>



      <Toaster position="top-center" />
    </div>
  );
};

export default BrandCreatePage;
