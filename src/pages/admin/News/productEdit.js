import { data } from "../../../data";
import NavAdmin from "../NavAdmin";

const ProductEdit = {
    print(id) {
        const result = data.find((post) => post.id === id);
        return /* html */`
            <div>
                ${NavAdmin.print()}
            </div>
            <div>
                <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Edit New</h2>
            </div>
            <br>
            <div class="mx-20" >
                <textarea name="" id="" cols="50" rows="5" value="">${result.title}</textarea>
                <img src="${result.img}" alt="">
                <input type="file" name="" id="">
                <br>
                <textarea name="" id="" cols="50" rows="5" value="">${result.desc}</textarea>
                <br>
                <button type="submit">Submit</button>
            </div>
        `;
    },
};
export default ProductEdit;
