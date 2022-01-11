import Navigo from "navigo";
import HomePage from "./pages/homepage";
import AboutPage from "./pages/about";
import ProductPage from "./pages/products";
import DetailPage from "./pages/detail";
import Products from "./components/admin/products";

const routes = new Navigo("/", { linksSelector: "a" });
const rende = (content) => {
    // console.log(content);
    document.querySelector("#app").innerHTML = content;
};
routes.on({
    "/": () => rende(HomePage.print()), // console.log("Home Page")
    "/tuyensinh": () => rende(AboutPage.print()), // console.log("Page Tuyển sinh"),
    "/product": () => rende(ProductPage.print()),
    "/product/:id": ({ data }) => {
        const { id } = data;
        rende(DetailPage.print(+id));
    },
    "/admin/products": () => rende(Products.print()),

});
// routes.notFound(() => console.log("Not found page"));
routes.resolve();
