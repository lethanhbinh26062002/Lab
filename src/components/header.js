/* eslint-disable space-infix-ops */
import toastr from "toastr";
import { reRender } from "../utils";
import "toastr/build/toastr.min.css";

const Header = {
    render() {
        return /* html */`
        <header>
            <div class="grid grid-cols-12 gap-8 my-5">
                <div class="col-span-3 my-auto pl-5">
                    <img src="../src/Image/dark.png" alt="">
                </div>
                <nav class="col-span-4 my-auto">
                    <ul>
                        <li class="inline-block text-de pr-5"><a href="/" class="hover:text-red-600 text-slate-900 text-decoration-none">HOME</a></li>
                        <li class="inline-block pr-5"><a href="/products" class="hover:text-red-600 text-slate-900 text-decoration-none">PRODUCTS</a></li>
                        <li class="inline-block pr-5"><a href="/news" class="hover:text-red-600 text-slate-900 text-decoration-none">BLOG</a></li>
                        <li class="inline-block pr-5"><a href="/admin/dashboard" id="admin" class="hover:text-red-600 text-slate-900 text-decoration-none"></a></li>
                        
                    </ul>
                </nav>
                <div class="col-span-5 m-auto ">
                    <div class="inline-block pr-2">
                        <input type="text" placeholder="Search" class="pt-1 pl-2 border-2 rounded-2xl w-56">
                        <a href="" class="inline-block text-slate-900 text-decoration-none hover:text-red-600">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </a>
                    </div>
                    <div class="inline-block pr-2">
                        <a href="/profile" class="text-slate-900 text-decoration-none hover:text-red-600">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </a>
                    </div>
                    <div class="inline-block pr-2">
                        <a href="" class="text-slate-900 text-decoration-none hover:text-red-600">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </a>
                    </div>
                    <div class="inline-block pr-2">
                        <a href="/cart" class="text-slate-900 text-decoration-none hover:text-red-600">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </header>            
            ${localStorage.getItem("user") ? `<ul class="flex">
            <li><a href=""  id="account-email" class="block px-4 py-5 hover:text-red-600 text-slate-900 text-decoration-none"></a></li>
            <li><a  id="logout" class="block px-4 py-5 hover:text-red-600 cursor-pointer text-slate-900 text-decoration-none">Logout</a></li>
        </ul>` : `
                    <ul class="flex">
                        <li><a href="/signin" class="block px-4 py-5 hover:text-red-600 text-slate-900 text-decoration-none">Signin</a></li>
                        <li><a href="/signup" class="block px-4 py-5 hover:text-red-600 text-slate-900 text-decoration-none cursor-pointer">Signup</a></li>
                    </ul>`}
        `;
    },
    afterRender() {
        const user = JSON.parse(localStorage.getItem("user"));
        const logout = document.querySelector("#logout");
        const admin = "ADMIN";
        document.querySelector("#account-email").innerHTML = user.email;
        if (user.id === 3) {
            document.querySelector("#admin").innerHTML = admin;
        }
        // logout
        logout.addEventListener("click", () => {
            toastr.success("Logout thành công");
            localStorage.removeItem("user");
            reRender(Header, "#header");
        });
    },
};
export default Header;