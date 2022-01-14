import Navigo from "navigo";
import HomePage from "./pages/homepage";
import AboutPage from "./pages/about";
import DetailPage from "./pages/detail";
import News from "./pages/admin/News/News";
import NewEdit from "./pages/admin/News/NewEdit";
import Dasboard from "./pages/admin";
import NewAdd from "./pages/admin/News/NewAdd";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const routes = new Navigo("/", { linksSelector: "a" });
const rende = (content) => {
    // console.log(content);
    document.querySelector("#app").innerHTML = content;
};
routes.on({
    "/": () => rende(HomePage.print()), // console.log("Home Page")
    "/tuyensinh": () => rende(AboutPage.print()), // console.log("Page Tuyển sinh"),
    "/product/:id": ({ data }) => {
        const { id } = data;
        rende(DetailPage.print(+id));
    },
    "/admin/products": () => rende(News.print()),
    "admin/News/:id/edit": ({ data }) => {
        const { id } = data;
        rende(NewEdit.print(+id));
    },
    "/admin": () => rende(Dasboard.print()),
    "/admin/News": () => rende(News.print()),
    "/admin/News/Add": () => rende(NewAdd.print()),
    "/SignIn": () => rende(SignIn.print()),
    "/SignUp": () => rende(SignUp.print()),
});
// routes.notFound(() => console.log("Not found page"));
routes.resolve();
