

const CategoryCreate = () => {
    return (
        <div>
            <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md mt-10">
                <h2 className="text-2xl text-center font-semibold mb-4">Create Category</h2>
                <form>
                    {/* Category Name Input */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="categoryName">
                            Category Name
                        </label>
                        <input
                            type="text"
                            id="categoryName"
                            name='categoryName'
                            placeholder="Enter category name"
                            className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-indigo-500"
                            required
                        />
                    </div>

                    {/* Category Image Input */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="categoryImg">
                            Category Image URL
                        </label>
                        <input
                            type="file"
                            name="categoryImg"
                            id="categoryImg"
                            placeholder="Enter image URL"
                            className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-indigo-500"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="mb-4">
                        <button
                            type="submit"
                            className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-200"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CategoryCreate
