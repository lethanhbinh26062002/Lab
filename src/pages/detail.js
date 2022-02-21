import { get } from "../api/post";
import Footer from "../components/footer";
import Header from "../components/header";

const DetailPage = {
    async render(id) {
        const { data } = await get(id);
        // const result = data.find((post) => post.id === id);
        return /* html */`
        
            <div>
            ${Header.render()}
                <h1 class="ml-5 my-5">${data.title}</h1>
                <img src="${data.img}" alt="" />
                <p class="my-5">${data.desc}</p>
            ${Footer.render()}
            </div>
        `;
    },
    afterRender() {
        Header.afterRender();
    },
};
export default DetailPage;