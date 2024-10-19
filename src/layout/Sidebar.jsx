import { useState } from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { MdAddCircleOutline, MdMenuOpen, MdOutlineManageSearch, MdExpandMore, MdExpandLess } from 'react-icons/md';
import { NavLink, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar toggle state
    const [activeMenu, setActiveMenu] = useState(null); // Track which menu is open
    const { pathname } = useLocation(); // Track active route

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleMenuClick = (menuName) => {
        // If the clicked menu is already active, close it; otherwise, open it.
        setActiveMenu(activeMenu === menuName ? null : menuName);
    };

    return (
        <aside
            className={` bg-bgcolor p-0 text-white transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-14'}`}>
            <div className="flex justify-between items-center p-4 gap-8">
                <div className={`text-2xl font-bold ${!isSidebarOpen && 'hidden'}`}>
                    <NavLink to={"/dashboard"}><p>Portfolio</p></NavLink>
                </div>
                <button onClick={toggleSidebar} className="text-white focus:outline-none">
                    {isSidebarOpen ? <IoCloseCircleOutline className='text-4xl' /> : <MdMenuOpen className='text-3xl' />}
                </button>
            </div>

            <nav className="mt-10 space-y-4">
                <ul>
                    {/* Category Section */}
                    <li>
                        <div
                            className="flex justify-between items-center cursor-pointer px-3 py-2 hover:bg-indigo-500/100 rounded-lg"
                            onClick={() => handleMenuClick('category')}
                        >
                            <div className="flex items-center">
                                <MdOutlineManageSearch className='text-xl' />
                                <span className={`${isSidebarOpen ? 'block' : 'hidden'} ml-3 font-bold`}>Category</span>
                            </div>
                            {activeMenu === 'category' ? <MdExpandLess /> : <MdExpandMore />}
                        </div>

                        {activeMenu === 'category' && (
                            <ul className="pl-6">
                                <li>
                                    <NavLink
                                        to="/dashboard/category-create"
                                        className={`${pathname === "/dashboard/category-create" ? `bg-[#55679C] text-white` : `bg-white text-[#4040f6]`} px-3 py-2 flex items-center hover:bg-indigo-500/100 rounded-lg text-lg`}
                                    >
                                        <MdAddCircleOutline className='text-xl' />
                                        <span className={`${isSidebarOpen ? 'ml-3' : 'hidden'}`}>Category Create</span>
                                    </NavLink>
                                </li>
                                <li className="mt-2">
                                    <NavLink
                                        to="/dashboard/all-category"
                                        className={`${pathname === "/dashboard/all-category" ? `bg-[#55679C] text-white` : `bg-white text-[#4040f6]`} px-3 py-2 flex items-center hover:bg-indigo-500/100 rounded-lg text-lg`}
                                    >
                                        <MdAddCircleOutline className='text-xl' />
                                        <span className={`${isSidebarOpen ? 'ml-3' : 'hidden'}`}>All Category</span>
                                    </NavLink>
                                </li>
                            </ul>
                        )}
                    </li>
                    {/* brand section */}
                    <li>
                        <div
                            className="flex justify-between items-center cursor-pointer px-3 py-2 hover:bg-indigo-500/100 rounded-lg"
                            onClick={() => handleMenuClick('brand')}
                        >
                            <div className="flex items-center">
                                <MdOutlineManageSearch className='text-xl' />
                                <span className={`${isSidebarOpen ? 'block' : 'hidden'} ml-3 font-bold`}>Brand</span>
                            </div>
                            {activeMenu === 'brand' ? <MdExpandLess /> : <MdExpandMore />}
                        </div>

                        {activeMenu === 'brand' && (
                            <ul className="pl-6">
                                <li>
                                    <NavLink
                                        to="/dashboard/brand-create"
                                        className={`${pathname === "/dashboard/brand-create" ? `bg-[#55679C] text-white` : `bg-white text-[#4040f6]`} px-3 py-2 flex items-center hover:bg-indigo-500/100 rounded-lg text-lg`}
                                    >
                                        <MdAddCircleOutline className='text-xl' />
                                        <span className={`${isSidebarOpen ? 'ml-3' : 'hidden'}`}>Brand Create</span>
                                    </NavLink>
                                </li>
                                <li className="mt-2">
                                    <NavLink
                                        to="/dashboard/all-brand"
                                        className={`${pathname === "/dashboard/all-brand" ? `bg-[#55679C] text-white` : `bg-white text-[#4040f6]`} px-3 py-2 flex items-center hover:bg-indigo-500/100 rounded-lg text-lg`}
                                    >
                                        <MdAddCircleOutline className='text-xl' />
                                        <span className={`${isSidebarOpen ? 'ml-3' : 'hidden'}`}>All Brand</span>
                                    </NavLink>
                                </li>
                            </ul>
                        )}
                    </li>
                    {/* Product Section */}
                    <li>
                        <div
                            className="flex justify-between items-center cursor-pointer px-3 py-2 hover:bg-indigo-500/100 rounded-lg"
                            onClick={() => handleMenuClick('product')}
                        >
                            <div className="flex items-center">
                                <MdOutlineManageSearch className='text-xl' />
                                <span className={`${isSidebarOpen ? 'block' : 'hidden'} ml-3 font-bold`}>Product</span>
                            </div>
                            {activeMenu === 'product' ? <MdExpandLess /> : <MdExpandMore />}
                        </div>

                        {activeMenu === 'product' && (
                            <ul className="pl-6">
                                <li>
                                    <NavLink
                                        to="/dashboard/product-create"
                                        className={`${pathname === "/dashboard/product-create" ? `bg-[#55679C] text-white` : `bg-white text-[#4040f6]`} px-3 py-2 flex items-center hover:bg-indigo-500/100 rounded-lg text-lg`}
                                    >
                                        <MdAddCircleOutline className='text-xl' />
                                        <span className={`${isSidebarOpen ? 'ml-3' : 'hidden'}`}>Product Create</span>
                                    </NavLink>
                                </li>
                                <li className="mt-2">
                                    <NavLink
                                        to="/dashboard/all-product"
                                        className={`${pathname === "/dashboard/all-product" ? `bg-[#55679C] text-white` : `bg-white text-[#4040f6]`} px-3 py-2 flex items-center hover:bg-indigo-500/100 rounded-lg text-lg`}
                                    >
                                        <MdAddCircleOutline className='text-xl' />
                                        <span className={`${isSidebarOpen ? 'ml-3' : 'hidden'}`}>All Product</span>
                                    </NavLink>
                                </li>
                            </ul>
                        )}
                    </li>

                    {/* Skill Section */}
                    <li>
                        <div
                            className="flex justify-between items-center cursor-pointer px-3 py-2 hover:bg-indigo-500/100 rounded-lg"
                            onClick={() => handleMenuClick('skill')}
                        >
                            <div className="flex items-center">
                                <MdOutlineManageSearch className='text-xl' />
                                <span className={`${isSidebarOpen ? 'block' : 'hidden'} ml-3 font-bold`}>Skill</span>
                            </div>
                            {activeMenu === 'skill' ? <MdExpandLess /> : <MdExpandMore />}
                        </div>

                        {activeMenu === 'skill' && (
                            <ul className="pl-6">
                                <li>
                                    <NavLink
                                        to="/dashboard/skill-create"
                                        className={`${pathname === "/dashboard/skill-create" ? `bg-[#55679C] text-white` : `bg-white text-[#4040f6]`} px-3 py-2 flex items-center hover:bg-indigo-500/100 rounded-lg text-lg`}
                                    >
                                        <MdAddCircleOutline className='text-xl' />
                                        <span className={`${isSidebarOpen ? 'ml-3' : 'hidden'}`}>Skill Create</span>
                                    </NavLink>
                                </li>
                                <li className="mt-2">
                                    <NavLink
                                        to="/dashboard/all-skill"
                                        className={`${pathname === "/dashboard/all-skill" ? `bg-[#55679C] text-white` : `bg-white text-[#4040f6]`} px-3 py-2 flex items-center hover:bg-indigo-500/100 rounded-lg text-lg`}
                                    >
                                        <MdAddCircleOutline className='text-xl' />
                                        <span className={`${isSidebarOpen ? 'ml-3' : 'hidden'}`}>All Skill</span>
                                    </NavLink>
                                </li>
                            </ul>
                        )}
                    </li>

                    {/* Service Section */}
                    <li>
                        <div
                            className="flex justify-between items-center cursor-pointer px-3 py-2 hover:bg-indigo-500/100 rounded-lg"
                            onClick={() => handleMenuClick('service')}
                        >
                            <div className="flex items-center">
                                <MdOutlineManageSearch className='text-xl' />
                                <span className={`${isSidebarOpen ? 'block' : 'hidden'} ml-3 font-bold`}>Service</span>
                            </div>
                            {activeMenu === 'service' ? <MdExpandLess /> : <MdExpandMore />}
                        </div>

                        {activeMenu === 'service' && (
                            <ul className="pl-6">
                                <li>
                                    <NavLink
                                        to="/dashboard/service-create"
                                        className={`${pathname === "/dashboard/service-create" ? `bg-[#55679C] text-white` : `bg-white text-[#4040f6]`} px-3 py-2 flex items-center hover:bg-indigo-500/100 rounded-lg text-lg`}
                                    >
                                        <MdAddCircleOutline className='text-xl' />
                                        <span className={`${isSidebarOpen ? 'ml-3' : 'hidden'}`}>Service Create</span>
                                    </NavLink>
                                </li>
                                <li className="mt-2">
                                    <NavLink
                                        to="/dashboard/all-services"
                                        className={`${pathname === "/dashboard/all-services" ? `bg-[#55679C] text-white` : `bg-white text-[#4040f6]`} px-3 py-2 flex items-center hover:bg-indigo-500/100 rounded-lg text-lg`}
                                    >
                                        <MdAddCircleOutline className='text-xl' />
                                        <span className={`${isSidebarOpen ? 'ml-3' : 'hidden'}`}>All Services</span>
                                    </NavLink>
                                </li>
                            </ul>
                        )}
                    </li>
                    {/* feedback Section */}
                    <li>
                        <div
                            className="flex justify-between items-center cursor-pointer px-3 py-2 hover:bg-indigo-500/100 rounded-lg"
                            onClick={() => handleMenuClick('feedback')}
                        >
                            <div className="flex items-center">
                                <MdOutlineManageSearch className='text-xl' />
                                <span className={`${isSidebarOpen ? 'block' : 'hidden'} ml-3 font-bold`}>Feedback</span>
                            </div>
                            {activeMenu === 'feedback' ? <MdExpandLess /> : <MdExpandMore />}
                        </div>

                        {activeMenu === 'feedback' && (
                            <ul className="pl-6">
                                <li>
                                    <NavLink
                                        to="/dashboard/feedback-create"
                                        className={`${pathname === "/dashboard/feedback-create" ? `bg-[#55679C] text-white` : `bg-white text-[#4040f6]`} px-3 py-2 flex items-center hover:bg-indigo-500/100 rounded-lg text-lg`}
                                    >
                                        <MdAddCircleOutline className='text-xl' />
                                        <span className={`${isSidebarOpen ? 'ml-3' : 'hidden'}`}>Create Feedback</span>
                                    </NavLink>
                                </li>
                                <li className="mt-2">
                                    <NavLink
                                        to="/dashboard/all-feedback"
                                        className={`${pathname === "/dashboard/all-feedback" ? `bg-[#55679C] text-white` : `bg-white text-[#4040f6]`} px-3 py-2 flex items-center hover:bg-indigo-500/100 rounded-lg text-lg`}
                                    >
                                        <MdAddCircleOutline className='text-xl' />
                                        <span className={`${isSidebarOpen ? 'ml-3' : 'hidden'}`}>All Feedback</span>
                                    </NavLink>
                                </li>
                            </ul>
                        )}
                    </li>
                    {/* blog Section */}
                    <li>
                        <div
                            className="flex justify-between items-center cursor-pointer px-3 py-2 hover:bg-indigo-500/100 rounded-lg"
                            onClick={() => handleMenuClick('blog')}
                        >
                            <div className="flex items-center">
                                <MdOutlineManageSearch className='text-xl' />
                                <span className={`${isSidebarOpen ? 'block' : 'hidden'} ml-3 font-bold`}>Blog</span>
                            </div>
                            {activeMenu === 'blog' ? <MdExpandLess /> : <MdExpandMore />}
                        </div>

                        {activeMenu === 'blog' && (
                            <ul className="pl-6">
                                <li>
                                    <NavLink
                                        to="/dashboard/blog-create"
                                        className={`${pathname === "/dashboard/blog-create" ? `bg-[#55679C] text-white` : `bg-white text-[#4040f6]`} px-3 py-2 flex items-center hover:bg-indigo-500/100 rounded-lg text-lg`}
                                    >
                                        <MdAddCircleOutline className='text-xl' />
                                        <span className={`${isSidebarOpen ? 'ml-3' : 'hidden'}`}>Create Blog</span>
                                    </NavLink>
                                </li>
                                <li className="mt-2">
                                    <NavLink
                                        to="/dashboard/all-blog"
                                        className={`${pathname === "/dashboard/all-blog" ? `bg-[#55679C] text-white` : `bg-white text-[#4040f6]`} px-3 py-2 flex items-center hover:bg-indigo-500/100 rounded-lg text-lg`}
                                    >
                                        <MdAddCircleOutline className='text-xl' />
                                        <span className={`${isSidebarOpen ? 'ml-3' : 'hidden'}`}>All Blog</span>
                                    </NavLink>
                                </li>
                            </ul>
                        )}
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;