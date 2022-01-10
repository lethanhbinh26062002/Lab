import Banner from "../components/banner";
import NewsList from "../components/newList";
import header from "../components/header";
import Footer from "../components/footer";

const HomePage = {
    print() {
        return /* html */`
        <div class="container max-w-6xl mx-auto mb-5">
            <div class="header">
                ${header.print()}
            </div>
            <div class="banner my-5">
                ${Banner.print()}
            </div>
            <div class="news mb-5">
                ${NewsList.print()}
            </div>
            <div class="footer">
                ${Footer.print()}
            </div>
        </div>
        `;
    },
};

export default HomePage;
