const btnsubmit = document.querySelector("input[type=button]");

btnsubmit.addEventListener("click", e => {
    e.preventDefault();
    const id = document.querySelector("#id");
    const name = document.querySelector("#name");
    const description = document.querySelector("#description");
    const price = document.querySelector("#price");
    const quantity = document.querySelector("#quantity");
    const category = document.querySelector("#category");
    const manufacturer = document.querySelector("#manufacturer");
    const rating = document.querySelector("#rating");

    let idbool = false;
    let namebool = false;
    let descriptionbool = false;
    let pricebool = false;
    let quantitybool = false;
    let categorybool = false;
    let manufacturerbool = false;
    let ratingbool = false;

    if (id.value === "") {
        id.parentElement.children[2].classList.add("d-block");
        idbool = false;
    } else {
        id.parentElement.children[2].classList.remove("d-block");
        idbool = true;
    }

    if (name.value === "") {
        name.parentElement.children[2].classList.add("d-block");
        namebool = false;
    } else {
        name.parentElement.children[2].classList.remove("d-block");
        namebool = true;
    }

    if (description.value === "") {
        description.parentElement.children[2].classList.add("d-block");
        descriptionbool = false;
    } else {
        description.parentElement.children[2].classList.remove("d-block");
        descriptionbool = true;
    }
    
    if (price.value === "") {
        price.parentElement.children[2].classList.add("d-block");
        pricebool = false;
    } else {
        price.parentElement.children[2].classList.remove("d-block");
        pricebool = true;
    }
    
    if (quantity.value === "") {
        quantity.parentElement.children[2].classList.add("d-block");
        quantitybool = false;
    } else {
        quantity.parentElement.children[2].classList.remove("d-block");
        quantitybool = true;
    }
    
    if (quantity.value === "") {
        quantity.parentElement.children[2].classList.add("d-block");
        quantitybool = false;
    } else {
        quantity.parentElement.children[2].classList.remove("d-block");
        quantitybool = true;
    }
    
    if (category.value === "") {
        category.parentElement.children[2].classList.add("d-block");
        categorybool = false;
    } else {
        category.parentElement.children[2].classList.remove("d-block");
        categorybool = true;
    }
    
    if (manufacturer.value === "") {
        manufacturer.parentElement.children[2].classList.add("d-block");
        manufacturerbool = false;
    } else {
        manufacturer.parentElement.children[2].classList.remove("d-block");
        manufacturerbool = true;
    }
    
    if (rating.value === "") {
        rating.parentElement.children[2].classList.add("d-block");
        ratingbool = false;
    } else {
        rating.parentElement.children[2].classList.remove("d-block");
        ratingbool = true;
    }

    // Saving data in table
    if (idbool == true && namebool == true && descriptionbool == true) {
        const productTbl = document.querySelector("#product-tbl");
        const trArray = Array.from(productTbl.children)
        const updateProduct = trArray.filter(tr=>{
            return tr.children[0].innerText===id.value;
        })
        if(updateProduct.length>0){
            updateProduct[0].children[1].innerText = name.value;
            updateProduct[0].children[2].innerText = description.value;
            updateProduct[0].children[3].innerText = price.value;
            updateProduct[0].children[4].innerText = quantity.value;
            updateProduct[0].children[5].innerText = category.value;
            updateProduct[0].children[6].innerText = manufacturer.value;
            updateProduct[0].children[7].innerText = rating.value;
        } 
        else {
        productTbl.innerHTML += 
        `<tr> 
            <td>${id.value}</td>
            <td>${name.value}</td>
            <td>${description.value}</td>
            <td>${price.value}</td>
            <td>${quantity.value}</td>
            <td>${category.value}</td>
            <td>${manufacturer.value}</td>
            <td>${rating.value}</td>
            <td>
                <button class="btn btn-warning text-white btn-edit">Edit <i class="fa-regular fa-pen-to-square"></i></button>
                <button class="btn btn-danger btn-delete">Delete <i class="fa-solid fa-trash"></i></button>

            </td>
        </tr>`
        }

        //Edit Button Selector and Handler
        const editButtons = document.querySelectorAll(".btn-edit");
        editButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const tr = btn.parentElement.parentElement;
            id.value = tr.children[0].innerText;
            name.value = tr.children[1].innerText;
            description.value = tr.children[2].innerText;
            price.value = tr.children[3].innerText;
            quantity.value = tr.children[4].innerText;
            category.value = tr.children[5].innerText;
            manufacturer.value = tr.children[6].innerText;
            rating.value = tr.children[7].innerText;
        });
        });

        //Delete Button Select and Handler
        const deleteButtons = document.querySelectorAll(".btn-delete");
        deleteButtons.forEach(btn=>{
            btn.addEventListener("click", ()=>{
                btn.parentElement.parentElement.remove(); // btn of td in tr of html
            })
        })

        //Clear fields
        id.value="";
        name.value="";
        description.value="";
        price.value="";
        quantity.value="";
        category.value="";
        manufacturer.value="";
        rating.value="";

    }
});
