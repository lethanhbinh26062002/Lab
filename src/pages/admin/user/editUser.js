import toastr from "toastr";
import { get, update } from "../../../api/user";

const AdminEditUser = {
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
                <input value="${data.username}" type="text" id="username" class="border border-black" placeholder="Username" /> </br>
                <input value="${data.email}" type="email" id="email" class="border border-black" placeholder="Email" /> </br>
                <input value="${data.password}"  type="text" id="password" class="border border-black"  placeholder="Password" /> </br >
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
        const formAdd = document.querySelector("#form-edit");
        formAdd.addEventListener("submit", async (e) => {
            e.preventDefault();
            update({
                id,
                email: document.querySelector("#email").value,
                password: document.querySelector("#password").value,
                username: document.querySelector("#username").value,
            });
            toastr.success("Cập nhật thành công,vui lòng chờ 3s");
            setTimeout(() => {
                document.location.href = "/admin/users";
            }, 3000);
        });
    },
};

export default AdminEditUser;