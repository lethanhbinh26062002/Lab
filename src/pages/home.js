import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import News from "../components/news";
import category from "../components/category";
import products from "../components/products";

const HomePage = {
    async render() {
        return /* html */`
        <div class="">
            <div id="header">
                ${Header.render()}
            </div>
            <main>
                <div class="banner">
                    ${Banner.render()}
                </div>
                <div class="category">
                    ${category.render()}
                </div>
            </div>
            <div class="product">
                    ${await products.render()}
                </div>
                <div class="news">
                    ${await News.render()}
                </div>
            </main>
            ${Footer.render()}
        </div>
            
        `;
    },
    afterRender() {
        Header.afterRender();
    },
};
export default HomePage;