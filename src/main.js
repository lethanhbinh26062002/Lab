// const product = [
//     {
//         id: 1,
//         name: "Product 1",
//     },
//     {
//         id: 2,
//         name: "Product 2",
//     },
// ];
// const appElement = document.querySelector("#app");
// if (appElement) {
//     const result = product.map((item) => item.name);

// }
import Navigo from "navigo";

const routes = new Navigo("/", { linksSelector: "a" });
routes.on({
    "/": () => console.log("Home Page"),
    "/about": () => console.log("About Page"),

});
routes.notFound(() => console.log("Not found page"));
