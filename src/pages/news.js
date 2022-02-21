import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import News from "../components/news";

const NewsPage = {
    async render() {
        return /* html */`
        <div class="mx-auto">
        ${Header.render()}
        <main>
            <div class="banner">
                ${Banner.render()}
            </div>
            <div class="new">
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

export default NewsPage;