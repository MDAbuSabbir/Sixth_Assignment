function getID(id){
            return document.getElementById(id);
}

    const categoriesUl = getID("categoris-ul");
    const categoriesContainer = getID("cateries-container")
    const allTreeContainer = getID("tree-card-container")

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
        <li class="font-medium hover:bg-[#15803D] hover:text-white px-2.5 py-2 mb-2 rounded-[20px] "> ${category.category_name}</li>
        `
    });
}

categoriesContainer.addEventListener("click" , e=>{
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
        <div class="tree-card col-span-1 bg-white p-5">
                        <figure class="rounded-lg mb-4">
                            <img src="${plant.image}" class="w-full h-50 object-cover rounded-lg"/>

                        </figure>
                        <h3 class="text-[14px] font-semibold mb-3">${plant.name}</h3>
                        <p class="text-[12px] mb-2 text-[#1F293790]">
                            ${plant.description}
                        </p>
                        <div class="flex justify-between">
                            <h4 class="bg-[#DCFCE7] text-[#15803D] rounded-xl py-2 px-3">${plant.category}</h4>
                            <h4 class="font-bold text-[14px]">৳<span id="tree-price">${plant.price}</span></h4>
                        </div>
                        <button class="bg-[#15803D] text-white felx justify-center items-center w-full py-3 rounded-xl mt-3 hover:bg-[#075524]"> Add to Cart </button>
                    </div>
       `
    })
    
    console.log(plants)
}




loadCategory()
loadPlants()


