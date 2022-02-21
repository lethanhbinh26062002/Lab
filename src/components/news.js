import { getAll } from "../api/post";

const News = {
    async render() {
        const { data } = await getAll();
        return /* html */ `

        <div class="pt-5 ml-5">
                    <div>
                        <h1 class="text-4xl font-bold pb-5">- LATEST BLOG</h1>
                        <div class="grid grid-cols-12 gap-8">
                        ${data.map((post) => `
                            <div class="col-span-4  group hover:bg-gray-600 pb-5">
                                <div class="pb-5">
                                    <a href="/#/news/${post.id}"><img src="${post.img}" alt="" class="mx-auto"></a>
                                </div>
                                <div class="mx-2 group-hover:text-white">
                                    <p class="text-4xl font-bold py-5">${post.title}</p>
                                    <p class="">${post.desc}</p>
                                </div>
                                <div class="pt-5 mx-5">
                                    <button class="rounded-3xl bg-red-500 hover:bg-indigo-900 w-32 h-9 transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300 group-hover:bg-red-500 group-hover:text-white">READ
                                        MORE</button>
                                </div>
                            </div>
                            `).join("")}
                        </div>
                    </div>
                </div>        
                    `;
    },
};
export default News;