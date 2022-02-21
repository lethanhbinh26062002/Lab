import axios from "axios";
import toastr from "toastr";
import ProductsPage from ".";
import { add } from "../../../api/product";
import { reRender } from "../../../utils";

const AdminAddProduct = {
    async render() {
        return /* html */`
        <div class="min-h-full">
        <div class="d-flex" id="wrapper">
        <!-- Sidebar-->
        <div class="border-end bg-white" id="sidebar-wrapper">
            <div class="sidebar-heading border-bottom bg-light">ASSIGNMENT_BINHLTPH16803</div>
            <div class="list-group list-group-flush">
                <a class="list-group-item list-group-item-action list-group-item-light p-3" href="/admin/dashboard">Dashboard</a>
                <a class="list-group-item list-group-item-action list-group-item-light p-3" href="/admin/news">News</a>
                <a class="list-group-item list-group-item-action list-group-item-light p-3" href="/admin/products">Products</a>
                <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Events</a>
                <a class="list-group-item list-group-item-action list-group-item-light p-3" href="/admin/users">Users</a>
                <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Status</a>
            </div>
        </div>
        <!-- Page content wrapper-->
        <div id="page-content-wrapper">
            <!-- Top navigation-->
            <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                <div class="container-fluid">
                    
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
                            <li class="nav-item active"><a class="nav-link" href="/">Home</a></li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#!">Action</a>
                                    <a class="dropdown-item" href="#!">Another action</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#!">Something else here</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <!-- Page content-->
            <div class="container-fluid">
            <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div class="px-4 py-6 sm:px-0">
                <form id="form-add">
                    <input type="text" id="name" class="border border-black" placeholder="Name" /> </br>
                    <input type="file" id="img" class="border border-black"  placeholder="Image" /> </br>
                    <input type="number" id="price" min="1" class="border border-black"  placeholder="Price" /> </br>
                    <select id="cart">
                        <option value="Pistons Liners">Pistons Liners</option>
                        <option value="Air Filter">Air Filter</option>
                        <option value="Suspension">Suspension</option>
                        <option value="Wiper Blades">Wiper Blades</option>
                        <option value="Tail Light">Tail Light</option>
                    </select> 
                    </br>
                    <textarea name="" id="desc" cols="100" rows="10" class="border border-black"></textarea> </br>
                    <button type="submit">Add New</button>
                </form>
            </div>
            <!-- /End replace -->
        </div>
            </div>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"></script>
        </div>
        
        `;
    },
    afterRender() {
        const formAdd = document.querySelector("#form-add");
        const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/dyeta9a1r/image/upload";
        const CLOUDINARY_PRESET = "jeiwwnlz";

        formAdd.addEventListener("submit", async (e) => {
            e.preventDefault();
            // lấy giá trị input file
            const file = document.querySelector("#img").files[0];

            // tạo object và gắn giá trị vào các thuộc tính của formData
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", CLOUDINARY_PRESET);

            // call API cloudinary để đẩy ảnh lên
            const { data } = await axios.post(CLOUDINARY_API, formData, {
                headers: {
                    "Content-Type": "application/form-data",
                },
            });
            const cart = document.querySelector("#cart").value;

            // call api thêm bài viết
            add({
                name: document.querySelector("#name").value,
                img: data.url,
                category: cart,
                price: document.querySelector("#price").value,
                desc: document.querySelector("#desc").value,
            });
            toastr.success("Bạn đã thêm thành công");
            window.location.href = "/#/admin/products";

            reRender(ProductsPage, "#app");
        });
    },
};
export default AdminAddProduct;