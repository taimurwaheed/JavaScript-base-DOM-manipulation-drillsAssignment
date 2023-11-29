const btnsubmit = document.querySelector("input[type=button]");

btnsubmit.addEventListener("click", e => {
    e.preventDefault();
    const id = document.querySelector("#id");
    const name = document.querySelector("#name");
    const position = document.querySelector("#position");
    const department = document.querySelector("#department");
    const salary = document.querySelector("#salary");
    const contact = document.querySelector("#contact");
    const date = document.querySelector("#date");
    const address = document.querySelector("#address");

    let idbool = false;
    let namebool = false;
    let positionbool = false;
    let departmentbool = false;
    let salarybool = false;
    let contactbool = false;
    let datebool = false;
    let addressbool = false;

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

    if (position.value === "") {
        position.parentElement.children[2].classList.add("d-block");
        positionbool = false;
    } else {
        position.parentElement.children[2].classList.remove("d-block");
        positionbool = true;
    }
    
    if (department.value === "") {
        department.parentElement.children[2].classList.add("d-block");
        departmentbool = false;
    } else {
        department.parentElement.children[2].classList.remove("d-block");
        departmentbool = true;
    }
    
    if (salary.value === "") {
        salary.parentElement.children[2].classList.add("d-block");
        salarybool = false;
    } else {
        salary.parentElement.children[2].classList.remove("d-block");
        salarybool = true;
    }
    
    if (contact.value === "") {
        contact.parentElement.children[2].classList.add("d-block");
        contactbool = false;
    } else {
        contact.parentElement.children[2].classList.remove("d-block");
        contactbool = true;
    }
    
    if (date.value === "") {
        date.parentElement.children[2].classList.add("d-block");
        datebool = false;
    } else {
        date.parentElement.children[2].classList.remove("d-block");
        datebool = true;
    }
    
    if (address.value === "") {
        address.parentElement.children[2].classList.add("d-block");
        addressbool = false;
    } else {
        address.parentElement.children[2].classList.remove("d-block");
        addressbool = true;
    }

    // Saving data in table
    if (idbool == true && namebool == true && departmentbool == true && positionbool == true &&
        salarybool == true && contactbool == true && datebool == true && addressbool == true) {
        const employeeTbl = document.querySelector("#employee-tbl");
        const trArray = Array.from(employeeTbl.children)
        const updateEmployee = trArray.filter(tr=>{
            return tr.children[0].innerText===id.value;
        })
        if(updateEmployee.length>0){
            updateEmployee[0].children[1].innerText = name.value;
            updateEmployee[0].children[2].innerText = position.value;
            updateEmployee[0].children[3].innerText = department.value;
            updateEmployee[0].children[4].innerText = salary.value;
            updateEmployee[0].children[5].innerText = contact.value;
            updateEmployee[0].children[6].innerText = date.value;
            updateEmployee[0].children[7].innerText = address.value;
        } 
        else {
        employeeTbl.innerHTML += 
        `<tr> 
            <td>${id.value}</td>
            <td>${name.value}</td>
            <td>${position.value}</td>
            <td>${department.value}</td>
            <td>${salary.value}</td>
            <td>${contact.value}</td>
            <td>${date.value}</td>
            <td>${address.value}</td>
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
            position.value = tr.children[2].innerText;
            department.value = tr.children[3].innerText;
            salary.value = tr.children[4].innerText;
            contact.value = tr.children[5].innerText;
            date.value = tr.children[6].innerText;
            address.value = tr.children[7].innerText;
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
        position.value="";
        department.value="";
        salary.value="";
        contact.value="";
        date.value="";
        address.value="";

    }
});
