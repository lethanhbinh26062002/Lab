import { data } from "../data";

const NewsList = {
    print() {
        return /* html */`
            <h2 class="font-bold text-2xl text-indigo-900 mb-5">Tin tức học tập</h2>
            <div class="grid grid-cols-3 gap-8">
                ${data.map((post) => /* html */ `
                    <div class="border p-3">
                        <img class="m-auto mt-2" src="${post.img}" alt="" />
                        <h3 class="text-orange-500 font-bold text-md mx-5 my-2"><a href="">${post.title}</a></h3>
                        <p class="font-extralight text-sm mx-5">${post.desc}</p>
                    </div>  
                    `).join("")}
            </div>
            <h2 class="font-bold text-2xl text-indigo-900 my-5">Hoạt động sinh viên</h2>
            <div class="grid grid-cols-3 gap-8">
                ${data.map((post) => /* html */ `
                    <div class="border p-3">
                        <img class="m-auto mt-2" src="${post.img}" alt="" />
                        <h3 class="text-orange-500 font-bold text-md mx-5 my-2"><a href="">${post.title}</a></h3>
                        <p class="font-extralight text-sm mx-5">${post.desc}</p>
                    </div>  
                    `).join("")}
            </div>
        `;
    },
};
export default NewsList;
