import { parentTodolist, todolist } from "../index.js";

export async function Edit(data) {


    console.log(data);


    // Delete posts page
    parentTodolist.removeChild(todolist);

    // Add Create page
    let createDiv = document.createElement("div");

    // Add create title
    let createDivTitle = document.createElement("div");
    let createTitle = document.createElement("div");

    // Add buttons Create and Cancel
    let createButtonCancelButtonDivFlex = document.createElement("div");
    createButtonCancelButtonDivFlex.className = "create_buttons_div_flex";
    let createButtonCancelButtonDiv = document.createElement("div");
    createButtonCancelButtonDiv.className = "create_buttons_div";

    let saveButton = document.createElement("button");
    saveButton.className = "create_button";
    saveButton.innerText = "Save";

    let cancelButton = document.createElement("button");
    cancelButton.className = "cancel_button";
    cancelButton.innerText = "Cancel";

    createButtonCancelButtonDiv.appendChild(saveButton);
    createButtonCancelButtonDiv.appendChild(cancelButton);
    createButtonCancelButtonDivFlex.appendChild(createButtonCancelButtonDiv);


    // createDivTitle
    createDivTitle.innerHTML = `<div class="main_div_body_title_create_btn">
                                        <span class="main_div_body_title">Edit Post</span>
                                    </div>`;
    createDivTitle.appendChild(createTitle);
    createDiv.appendChild(createDivTitle);


    // Inputs div
    let inputsDIV = document.createElement("div");
    inputsDIV.className = "create_inputs_div";

    let inputLeftDiv = document.createElement("div");
    inputLeftDiv.className = "create_inputs_left_div_pos";

    let inputRightDiv = document.createElement("div");
    inputRightDiv.className = "create_inputs_right_div_pos";


    //inputLeftDiv block
    let inputLeftDivTitleInput = document.createElement("input");
    inputLeftDivTitleInput.placeholder = "Title";
    inputLeftDivTitleInput.className = "create_inputs_left_div_input";

    let users = [];

    await fetch("https://jsonplaceholder.typicode.com/users")
        .then((stream) => { return stream.json() })
        .then((data) => {
            console.log(data);
            users = data;
        })


    let inputLeftDivUserSelect = document.createElement("div");
    let select = document.createElement("select");
    select.className = "create_inputs_left_div_input";
    let option = document.createElement("option");
    option.innerText = "Select User";
    select.appendChild(option);

    let userIds = users.map(({ id }) => id);

    users.map((user, index) => {
        let option = document.createElement("option");
        option.innerText = user.name;
        option.value = userIds[index];
        select.appendChild(option);
    });

    inputLeftDivUserSelect.appendChild(select);

    // Input left div elements
    inputLeftDiv.appendChild(inputLeftDivTitleInput);
    inputLeftDiv.appendChild(inputLeftDivUserSelect);

    //inputRightDiv block
    let inputRightDivBodyInput = document.createElement("input");
    inputRightDivBodyInput.placeholder = "Body";
    inputRightDivBodyInput.className = "create_inputs_right_div_input";

    inputRightDiv.appendChild(inputRightDivBodyInput);

    //inputLeftDiv and inputRightDiv to inputsDIV
    inputsDIV.appendChild(inputLeftDiv);
    inputsDIV.appendChild(inputRightDiv);

    parentTodolist.appendChild(createDiv);
    parentTodolist.appendChild(inputsDIV);
    parentTodolist.appendChild(createButtonCancelButtonDivFlex);

    function Cancel() {
        window.location.href = "http://127.0.0.1:5501/#/posts";
        parentTodolist.removeChild(createDiv);
        parentTodolist.removeChild(inputsDIV);
        parentTodolist.removeChild(createButtonCancelButtonDivFlex);
        parentTodolist.appendChild(todolist);
        getData();
    }

    cancelButton.addEventListener("click", Cancel);

    function EditPost() {
        fetch(`https://jsonplaceholder.typicode.com/posts/${data.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                id: data.id,
                title: inputLeftDivTitleInput.value,
                body: inputRightDivBodyInput.value,
                userId: select.value,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.warn(json));


        window.location.href = "http://127.0.0.1:5501/#/posts";

        Cancel();
    }

    saveButton.addEventListener("click", EditPost);

    /////////////

    window.location.href = `http://127.0.0.1:5501/#/posts/edit/${data.id}`;

}