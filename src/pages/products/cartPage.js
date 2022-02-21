import Header from "../../components/header";
import Footer from "../../components/footer";

const cartPage = {
    async render() {
        let cart = [];
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"));
        }
        return /* html */ `
        ${Header.render()}
        <main class="pt-52 mx-10">
        <table class="mx-auto border">
            <thead>
                <tr>
                    <th class="border w-40">Remove</th>
                    <th class="border w-60">Images</th>
                    <th class="border w-40">Product</th>
                    <th class="border w-40">Unit Price</th>
                    <th class="border w-40">Quantity</th>
                    <th class="border w-40">Total</th>
                </tr>
            </thead>

            ${cart.map((item) => /* html */`
                <tbody>
                <tr class="h-60">
                    <td class="border">
                        <a href="">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                            </svg>
                        </a>
                    </td>
                    <td class="border">
                        <img src="${item.img}" alt="" class="mx-auto">
                    </td>
                    <td class="border text-center" id="name">${item.name}</td>
                    <td class="border text-center price" id="price">${item.price}</td>
                    <td class="border text-center quantity">${item.quantity}</td>
                    <td class="border text-center total" id="total">${item.price * item.quantity}</td>
                </tr>   
                `).join("")}        
        </tbody>
        </table>
        <div class="pt-10 pl-40">
            <h1 class="text-4xl font-medium">Cart Totals</h1>
            <table class="border my-5">
                <tbody>
                <tr class="h-10">
                    <td class="border w-40 text-xl font-medium">Total</td>
                    <td class="border w-40 text-center">...</td>
                </tr>
            </tbody></table>
            <button class="text-xl font-medium bg-gray-600 text-white h-10 w-60">Proceed to checkout</button>
        </div>
    </main>
        ${Footer.render()}   
                    `;
    },
    afterRender() {
        Header.afterRender();
    },
};
export default cartPage;