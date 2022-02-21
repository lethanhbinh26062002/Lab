import axios from "axios";
import toastr from "toastr";
import AdminProductsPage from ".";
import { get, update } from "../../../api/product";
import { reRender } from "../../../utils";

const AdminEditProduct = {
    async render(id) {
        const { data } = await get(id);
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
            <form id="form-edit">
                <input type="text" value="${data.name}" id="name" class="border border-black" placeholder="Name" /> </br>
                <input type="file" id="img" class="border border-black"  placeholder="Image" /> </br>
                <img width="200" src="${data.img}" id="img-preview"/></div>
                <input value="${data.price}" type="number" id="price" min="1" class="border border-black"  placeholder="Price" /> </br>
                <select id="cart" value="">
                    <option value="Pistons Liners">Pistons Liners</option>
                    <option value="Air Filter">Air Filter</option>
                    <option value="Suspension">Suspension</option>
                    <option value="Wiper Blades">Wiper Blades</option>
                    <option value="Tail Light">Tail Light</option>
                </select>
                </br>
                <textarea value="" id="desc" cols="100" rows="10" class="border border-black">${data.desc}</textarea> </br>
                <button type="submit">Cập nhật</button>
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
    afterRender(id) {
        // console.log(typeof id);
        const formEdit = document.querySelector("#form-edit");
        const imgPreview = document.querySelector("#img-preview");
        const imgProduct = document.querySelector("#img");
        let imgLink = "";
        const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/dyeta9a1r/image/upload";
        const CLOUDINARY_PRESET = "jeiwwnlz";
        // submit
        formEdit.addEventListener("change", async (e) => {
            e.preventDefault();
            const file = imgProduct.files[0];
            if (file) {
                const formData = new FormData();
                formData.append("file", file);
                formData.append("upload_preset", CLOUDINARY_PRESET);
                const { data } = await axios.post(CLOUDINARY_API, formData, {
                    headers: {
                        "Content-Type": "application/form-data",
                    },
                });
                imgLink = data.url;
            }
            update({
                id,
                name: document.querySelector("#name").value,
                img: imgLink || imgPreview.src,
                desc: document.querySelector("#desc").value,
                price: document.querySelector("#price").value,
                category: document.querySelector("#cart").value,
            });
            toastr.success("Cập nhật thành công,vui lòng chờ 3s");
            setTimeout(() => {
                document.location.href = "/admin/products";
                reRender(AdminProductsPage, "#app");
            }, 3000);
        });
    },
};
export default AdminEditProduct;