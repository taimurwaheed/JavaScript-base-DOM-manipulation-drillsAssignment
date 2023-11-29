const btnsubmit = document.querySelector("input[type=button]");

btnsubmit.addEventListener("click", e => {
    e.preventDefault();
    const id = document.querySelector("#id");
    const name = document.querySelector("#name");
    const semester = document.querySelector("#semester");
    const department = document.querySelector("#department");
    const gpa = document.querySelector("#gpa");
    const contact = document.querySelector("#contact");
    const date = document.querySelector("#date");
    const course = document.querySelector("#course");

    let idbool = false;
    let namebool = false;
    let semesterbool = false;
    let departmentbool = false;
    let gpabool = false;
    let contactbool = false;
    let datebool = false;
    let coursebool = false;

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

    if (semester.value === "") {
        semester.parentElement.children[2].classList.add("d-block");
        semesterbool = false;
    } else {
        semester.parentElement.children[2].classList.remove("d-block");
        semesterbool = true;
    }
    
    if (department.value === "") {
        department.parentElement.children[2].classList.add("d-block");
        departmentbool = false;
    } else {
        department.parentElement.children[2].classList.remove("d-block");
        departmentbool = true;
    }
    
    if (gpa.value === "") {
        gpa.parentElement.children[2].classList.add("d-block");
        gpabool = false;
    } else {
        gpa.parentElement.children[2].classList.remove("d-block");
        gpabool = true;
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
    
    if (course.value === "") {
        course.parentElement.children[2].classList.add("d-block");
        coursebool = false;
    } else {
        course.parentElement.children[2].classList.remove("d-block");
        coursebool = true;
    }

    // Saving data in table
    if (idbool == true && namebool == true && departmentbool == true && semesterbool == true &&
        gpabool == true && contactbool == true && datebool == true && coursebool == true) {
        const studentTbl = document.querySelector("#student-tbl");
        const trArray = Array.from(studentTbl.children)
        const updateEmployee = trArray.filter(tr=>{
            return tr.children[0].innerText===id.value;
        })
        if(updateEmployee.length>0){
            updateEmployee[0].children[1].innerText = name.value;
            updateEmployee[0].children[2].innerText = semester.value;
            updateEmployee[0].children[3].innerText = department.value;
            updateEmployee[0].children[4].innerText = gpa.value;
            updateEmployee[0].children[5].innerText = contact.value;
            updateEmployee[0].children[6].innerText = date.value;
            updateEmployee[0].children[7].innerText = course.value;
        } 
        else {
        studentTbl.innerHTML += 
        `<tr> 
            <td>${id.value}</td>
            <td>${name.value}</td>
            <td>${semester.value}</td>
            <td>${department.value}</td>
            <td>${gpa.value}</td>
            <td>${contact.value}</td>
            <td>${date.value}</td>
            <td>${course.value}</td>
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
            semester.value = tr.children[2].innerText;
            department.value = tr.children[3].innerText;
            gpa.value = tr.children[4].innerText;
            contact.value = tr.children[5].innerText;
            date.value = tr.children[6].innerText;
            course.value = tr.children[7].innerText;
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
        semester.value="";
        department.value="";
        gpa.value="";
        contact.value="";
        date.value="";
        course.value="";

    }
});
