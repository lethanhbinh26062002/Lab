import { getAll } from "../api/product";

const products = {
    async render() {
        const { data } = await getAll();
        return /* html */ `
        <h1 class="text-4xl font-bold p-2">- PRODUCT</h1>
        <div class="grid grid-cols-12 gap-8 pt-5 ml-5">
        
        ${data.map((post) => /* html */`
                            <div class="col-span-3 border relative group overflow-hidden">
                                <div class="">
                                    <a href="/products/${post.id}"><img src="${post.img}" alt="" class=" mx-auto transform hover:scale-110 transition ease-out duration-300"></a>
                                </div>
                                <div class="bg-white opacity-60 absolute bottom-0 transform translate-y-28 group-hover:transform group-hover:translate-y-0 duration-1000 block w-full">
                                    <p class="text-center font-bold">${post.name}</p>
                                    <p class="text-red-600 text-center">$ ${post.price}</p>
                                    <div class=" text-center">
                                        <a href="" class="inline-block pr-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                            </svg>
                                        </a>
                                        <a href="" class="inline-block pr-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                            </svg>
                                        </a>
                                        <a href="" class="inline-block pr-1 ">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                            </svg>
                                        </a>
                                        <a href="" class="inline-block pr-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                    `).join("")}
                    </div>      
                    `;
    },
};
export default products;