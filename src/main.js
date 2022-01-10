import Navigo from "navigo";
import HomePage from "./pages/homepage";
import AboutPage from "./pages/about";
import ProductPage from "./pages/products";

const routes = new Navigo("/", { linksSelector: "a" });
const rende = (content) => {
    // console.log(content);
    document.querySelector("#app").innerHTML = content.print();
};
routes.on({
    "/": () => rende(HomePage), // console.log("Home Page")
    "/tuyensinh": () => rende(AboutPage), // console.log("Page Tuyển sinh"),
    "/product": () => rende(ProductPage),

});
// routes.notFound(() => console.log("Not found page"));
routes.resolve();
