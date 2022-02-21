import Footer from "../components/footer";
import Header from "../components/header";

const profile = {
    render() {
        // const result = data.find((post) => post.id === id);
        return /* html */`
            <div>
                ${Header.render()}
                <div class="container mt-5 mb-5 d-flex justify-content-center">
                <div class="card rounded">
                    <div class=" d-block justify-content-center">
                        <div class="area1 p-3 py-5"> </div>
                        <div class="area2 p- text-center px-3">
                            <div class="image mr-3">
                                <h4 class=" name mt-3" id="name"></h4>
                                <p class="information mt-3 text-justify mt-5" id="email"></p>
                                <div class="d-flex justify-content-center mt-5">
                                    <ul class="list-icons">
                                        <li class="facebook"> <i class="fa fa-facebook"></i></li>
                                        <li class="youtube"> <i class="fa fa-youtube"></i></li>
                                        <li class="instagram"> <i class="fa fa-instagram"></i></li>
                                        <li class="whatsapp"> <i class="fa fa-whatsapp"></i></li>
                                        <li class="pinterest"> <i class="fa fa-pinterest"></i></li>
                                    </ul>
                                </div>
                            </div>
                            <div> </div>
                        </div>
                    </div>
                </div>
            </div>   
                ${Footer.render()}
            </div>
        `;
    },
    afterRender() {
        const user = JSON.parse(localStorage.getItem("user"));
        document.querySelector("#name").innerHTML = user.username;
        document.querySelector("#email").innerHTML = user.email;
        Header.afterRender();
    },
};
export default profile;