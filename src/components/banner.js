const Banner = {
    render() {
        return /* html */`
        <div class="absolute max-w-screen-xl">
                <img src="../src/Image/2-1.jpg" alt="">
            </div>
        <div class="relative grid grid-cols-4 gap-8 py-28">
                    <div class="col-span-2 pl-36">
                        <div class="pt-10">
                            <h2 class="title mb-4 text-6xl font-bold">Car Spare &amp; Parts <br> Up To 30% Off</h2>
                            <p class="short-desc mb-10 text-3xl">30% Off All Items For First Sales</p>
                        </div>
                        <div>
                            <button class="rounded-3xl bg-red-500 hover:bg-indigo-900 w-32 h-9 transform hover:scale-125 hover:bg-opacity-75 transition ease-out duration-300">SHOP
                                NOW</button>
                        </div>
                    </div>
                    <div class="col-span-2 my-auto">
                        <a href="">
                            <img src="../src/Image/2-1-654x444.png" alt="" class="animate-bounce pt-14">
                        </a>
                    </div>
                </div>`;
    },
};
export default Banner;