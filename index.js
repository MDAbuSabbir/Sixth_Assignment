function getID(id){
            return document.getElementById(id);
}

    const categoriesUl = getID("categoris-ul");
    const categoriesContainer = getID("cateries-container")
    const allTreeContainer = getID("tree-card-container")
    const openTreeDetails = getID("openTreeDetails")
    const modalContainer = getID("modal-container")

const loadCategory = () =>{
    const url ="https://openapi.programming-hero.com/api/categories";
    fetch(url)
    .then(res => res.json())
    .then(data => displayCategories(data.categories))
}

const displayCategories = (categories) =>{
    categoriesUl.innerHTML = "";
    categories.forEach(category => {
        categoriesUl.innerHTML += `
        <li onclick="loadByCategory(${category.id})" class="font-medium flex justify-start items-start lg:justify-center lg:items-center hover:bg-[#15803D] hover:text-white px-2.5 py-2 mb-2 rounded-[20px] "> ${category.category_name}</li>
        `
    });
}

const loadByCategory = (id) =>{
    const url = `https://openapi.programming-hero.com/api/category/${id}`
    fetch(url)
    .then(res => res.json())
    .then(category => displayAllPlants(category.plants))
}



categoriesContainer.addEventListener("click" , e=>{
    showSpinner();
    const categoryItemLi = document.querySelectorAll("#cateries-container li")
    if(e.target.localName === "li"){
        categoryItemLi.forEach(categoryLI =>{
            categoryLI.classList.remove("active")
        })
        e.target.classList.add("active")
    }
})

const loadPlants = () =>{
    const url = "https://openapi.programming-hero.com/api/plants";
    fetch(url)
    .then(data => data.json())
    .then(info => displayAllPlants(info.plants))
}


const displayAllPlants =(plants) =>{
    allTreeContainer.innerHTML = "";
    plants.forEach(plant =>{
        allTreeContainer.innerHTML += `
        <div class="tree-card min-h-[420px] max-h-[450px] col-span-1 bg-white mb-5 p-5">
                        <figure class="rounded-lg mb-6">
                            <img src="${plant.image}" class="w-full h-40 object-cover rounded-lg"/>

                        </figure>
                        <h3 onclick="loadTreeDetails(${plant.id})" class="text-[14px] cursor-pointer font-semibold mb-2 hover:text-[#15803D]">${plant.name}</h3>
                        <p class="text-[12px] mb-2 text-[#1F293790]">
                            ${plant.description}
                        </p>
                        <div class="flex justify-between items-center">
                            <h4 class="bg-[#DCFCE7] text-[#15803D] rounded-xl py-2 px-3">${plant.category}</h4>
                            <h4 class="font-bold text-[14px]">৳<span id="tree-price">${plant.price}</span></h4>
                        </div>
                        <button class="bg-[#15803D] text-white flex justify-center items-center w-full py-3 rounded-xl mt-3 hover:bg-[#075524]"> Add to Cart </button>
                    </div>
       `;
    })
    
    // console.log(plants)
}

const  loadTreeDetails= (id) =>{
    const url =`https://openapi.programming-hero.com/api/plant/${id}`;
    fetch(url)
    .then(res => res.json())
    .then(info => showTreeDetails(info.plants))
}

const showSpinner = () =>{
    allTreeContainer.innerHTML =`
    <div class="text-center"><span class="loading loading-bars loading-xl"></span></div>
    `
} 

const showTreeDetails = (plants) =>{
    console.log(plants.name);
    modalContainer.innerHTML = "";
    openTreeDetails.showModal();
    modalContainer.innerHTML +=`
    <div id="detailsCard" class="p-2 space-y-4">
                <h3 class="mb-4 text-[20px] font-bold"> ${plants.name}</h3>
                <figure class="mb-4">
                    <img src="${plants.image}" class="w-full h-65 object-cover rounded-lg" alt="">
                </figure>
                <h4 class="text-[16px]"> <span class="font-bold">Category:</span> <span>${plants.category}</span></h4>
                <h4 class="text-[16px]"><span class="font-bold">Price:</span> <span>৳</span> <span> ${plants.price}</span></h4>
                <p class="text-[14px]">
                    <span class="font-bold">Descripton:</span> ${plants.description}
                </p>
            </div>
            <div class="modal-action">
                <form method="dialog">
                    <!-- if there is a button in form, it will close the modal -->
                    <button class="btn">Close</button>
                </form>
            </div>
    ` 

}


loadCategory()
loadPlants()


