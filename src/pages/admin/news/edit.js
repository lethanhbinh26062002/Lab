import axios from "axios";
import toastr from "toastr";
import { get, update } from "../../../api/post";

const AdminEditPost = {
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
            <form id="form-add-post">
                <input type="text" class="border border-black" id="title-post" placeholder="Title" value="${data.title}"/><br />
                <div class="w-3xl grid grid-cols-2 gap-8">
                    <div><input type="file" class="border border-black" id="img-post" /></div>
                    <div><img width="200" src="${data.img}" id="img-preview"/></div>
                </div>
                <textarea name="" cols="30" rows="10" class="border border-black" id="desc-post" placeholder="Description">${data.desc}</textarea><br />
                <button>Cập nhật</button>
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
        const formAdd = document.querySelector("#form-add-post");
        const imgPreview = document.querySelector("#img-preview");
        const imgPost = document.querySelector("#img-post");
        let imgLink = "";
        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/dyeta9a1r/image/upload";
        const CLOUDINARY_PRESET = "jeiwwnlz";

        formAdd.addEventListener("submit", async (e) => {
            e.preventDefault();
            const file = imgPost.files[0];
            if (file) {
                const formData = new FormData();
                formData.append("file", file);
                formData.append("upload_preset", CLOUDINARY_PRESET);
                const { data } = await axios.post(CLOUDINARY_API_URL, formData, {
                    headers: {
                        "Content-Type": "application/form-data",
                    },
                });
                imgLink = data.url;
            }
            update({
                id,
                title: document.querySelector("#title-post").value,
                img: imgLink || imgPreview.src,
                desc: document.querySelector("#desc-post").value,
            });
            toastr.success("Cập nhật thành công,vui lòng chờ 3s");
            setTimeout(() => {
                document.location.href = "/admin/news";
            }, 3000);
        });
    },
};

export default AdminEditPost;