/* eslint-disable no-alert */
// eslint-disable-next-line import/no-unresolved
import toastr from "toastr";
import { getAll, remove } from "../../../api/product";
// eslint-disable-next-line import/no-unresolved
import "toastr/build/toastr.min.css";
import { reRender } from "../../../utils";

const AdminProductsPage = {
    async render() {
        const { data } = await getAll();
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
                <div class="mt-5 flex lg:mt-0 lg:ml-4">
                <a href="/#/admin/products/add" class="sm:ml-3">
                    <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <!-- Heroicon name: solid/check -->
                    <svg class="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    Add new
                    </button>
                </a>
            </div>
                <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div class="px-4 py-6 sm:px-0">
                        <div class="flex flex-col">
                            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                    <table class="min-w-full divide-y divide-gray-200">
                                        <thead class="bg-gray-50">
                                            <tr>
                                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">STT</th>
                                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">T??n SP</th>
                                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gi??</th>
                                                <th scope="col" class="relative px-6 py-3">S??? l??</th>
                                            </tr>
                                        </thead>
                                        <tbody class="bg-white divide-y divide-gray-200">
                                            ${data.map((product, index) => `
                                                    <tr>
                                                        <td class="px-6 py-4 whitespace-nowrap">
                                                            ${index + 1}
                                                        </td>
                                                        <td class="px-6 py-4 whitespace-nowrap">
                                                            ${product.name}
                                                        </td>
                                                        <td class="px-6 py-4 whitespace-nowrap">
                                                            ${product.price}
                                                        </td>
                                                        <td class="px-6 py-4 whitespace-nowrap">
                                                            <a href="/admin/products/${product.id}/edit">Edit</a>
                                                            <button data-id=${product.id} class="btn btn-remove inline-block px-4 py-3 text-black bg-indigo-700 rounded hover:bg-red-700 hover:text-white">Delete</button>
                                                        </td>
                                                    </tr>
                                            
                                            `).join("")}
                                        </tbody>
                                    </table>
                                    </div>
                                </div>
                                </div>
                                </div>

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
        // l???y to??n b??? button th??ng qua class .bnt
        const btns = document.querySelectorAll(".btn");
        // t???o v??ng l???p ????? l???y t???ng button element
        btns.forEach((btn) => {
            // L???y gi?? tr??? ID th??ng qua thu???c t??nh data-id c???a button
            const { id } = btn.dataset;
            btn.addEventListener("click", () => {
                const confirm = window.confirm("B???n c?? ch???c ch???n mu???n x??a kh??ng?");
                if (confirm) {
                    remove(id).then(() => {
                        toastr.success("B???n ???? x??a th??nh c??ng");
                    }).then(() => {
                        reRender(AdminProductsPage, "#app");
                    });
                }
                // remove
            });
        });
    },
};
export default AdminProductsPage;