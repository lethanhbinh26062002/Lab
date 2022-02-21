import Navigo from "navigo";
import Dashboard from "./pages/admin/dashboard";
import AdminNewsPage from "./pages/admin/news";
import AdminAddPost from "./pages/admin/news/add";
import AdminEditPost from "./pages/admin/news/edit";
import DetailPage from "./pages/detail";
import DetailProduct from "./pages/products/detail";
import HomePage from "./pages/home";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import ProductsPage from "./pages/products";
import AdminProductsPage from "./pages/admin/products";
import cartPage from "./pages/products/cartPage";
import AdminAddProduct from "./pages/admin/products/addProduct";
import AdminEditProduct from "./pages/admin/products/editProduct";
import AdminUsersPage from "./pages/admin/user";
import AdminAddUser from "./pages/admin/user/addUser";
import AdminEditUser from "./pages/admin/user/editUser";
import NewsPage from "./pages/news";
import profile from "./pages/profile";

const router = new Navigo("/", { linksSelector: "a", hash: true });

const print = async (content, id) => {
    document.querySelector("#app").innerHTML = await content.render(id);
    if (content.afterRender) content.afterRender(id);
};
router.on("/admin/*", () => {}, {
    before: (done) => {
        if (localStorage.getItem("user")) {
            const userId = JSON.parse(localStorage.getItem("user")).id;
            // nếu userId === 1 thì tôi mới render
            if (userId === 3) {
                done();
            } else {
            // ngược thì lại redirect về trang chủ
                document.location.href = "/";
            }
        } else {
            document.location.href = "/signin";
        }
    },
});
router.on({
    "/": () => print(HomePage),
    "/cart": () => print(cartPage),
    "/profile": () => print(profile),
    "/news": () => print(NewsPage),
    "/news/:id": ({ data }) => print(DetailPage, data.id),
    "/admin/dashboard": () => print(Dashboard),
    "/admin/news": () => print(AdminNewsPage),
    "/admin/users": () => print(AdminUsersPage),
    "/admin/products": () => print(AdminProductsPage),
    "/admin/products/add": () => print(AdminAddProduct),
    "/admin/users/add": () => print(AdminAddUser),
    "/admin/products/:id/edit": ({ data }) => print(AdminEditProduct, data.id),
    "/admin/users/:id/edit": ({ data }) => print(AdminEditUser, data.id),
    "/admin/news/add": () => print(AdminAddPost),
    "/admin/news/:id/edit": ({ data }) => print(AdminEditPost, data.id),
    "/signup": () => print(Signup),
    "/signin": () => print(Signin),
    "/products": () => print(ProductsPage),
    "/products/:id": ({ data }) => print(DetailProduct, data.id),
});

router.resolve();