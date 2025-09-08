function getID(id){
            return document.getElementById(id);
}

    const categoriesUl = getID("categoris-ul");
    const categoriesContainer = getID("cateries-container")

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
        <li class="font-medium hover:bg-[#15803D] hover:text-white px-2.5 py-2 rounded-[20px] "> ${category.category_name}</li>
        `
    });
}

categoriesContainer.addEventListener("click" , e=>{
    console.log(e.target.localName);
    const categoryItemLi = document.querySelectorAll("#cateries-container li")
    if(e.target.localName === "li"){
        categoryItemLi.forEach(categoryLI =>{
            categoryLI.classList.remove("active")
        })
        e.target.classList.add("active")
    }
})

// : 
// "li"




loadCategory()
