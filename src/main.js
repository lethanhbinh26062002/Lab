import Navigo from "navigo";
import HomePage from "./pages/homepage";
import AboutPage from "./pages/about";
import ProductPage from "./pages/daoTao";
import DetailPage from "./pages/detail";
import Products from "./pages/admin/News/products";
import ProductEdit from "./pages/admin/News/productEdit";
import Dasboard from "./pages/admin";

const routes = new Navigo("/", { linksSelector: "a" });
const rende = (content) => {
    // console.log(content);
    document.querySelector("#app").innerHTML = content;
};
routes.on({
    "/": () => rende(HomePage.print()), // console.log("Home Page")
    "/tuyensinh": () => rende(AboutPage.print()), // console.log("Page Tuyển sinh"),
    "/daoTao": () => rende(ProductPage.print()),
    "/product/:id": ({ data }) => {
        const { id } = data;
        rende(DetailPage.print(+id));
    },
    "/admin/products": () => rende(Products.print()),
    "admin/News/:id/edit": ({ data }) => {
        const { id } = data;
        rende(ProductEdit.print(+id));
    },
    "/admin": () => rende(Dasboard.print()),
    "/admin/News": () => rende(Products.print()),
});
// routes.notFound(() => console.log("Not found page"));
routes.resolve();
