import { menu } from "../data";

const header = {
    print() {
        return /* html */`
        <header>
        <div class="bg-indigo-900">
          <img class="w-52 mx-auto py-3" src="https://caodang.fpt.edu.vn/vinmart/images/icon2a.png" alt="logo">
        </div>
        <div class="bg-orange-500 grid grid-cols-12 gap-8 py-2">
          <nav class="col-span-8">
            <ul class="text-white">

            ${menu.map((item) =>/* html */`
            <li class="inline mx-6 "><a href="/">${item}</a></li>
            `).join("")}
            
            </ul>
          </nav>
          <div class="col-span-4 grid grid-cols-4 gap-8">
            <div class="col-span-2">
              <input type="text" class="w-full" placeholder="search....">
            </div>
            <div class="col-span-2">
              <button class="bg-indigo-900 text-white w-2/3 border rounded border-black">Search</button>
            </div>
          </div>
        </div>
      </header>
        `;
    },
};
export default header;
