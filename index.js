///////////////////////////////////////////////////////////////

// let todolist = document.getElementById("main_div_list");

let parentTodolist = document.getElementById("main_div_list_div");





// Create todolist
let todolist = document.createElement("div");
todolist.className = "main_div_list";
todolist.id = "main_div_list";
parentTodolist.appendChild(todolist);

// Create header of todolist
let headerTodoList = document.createElement("div");
headerTodoList.className = "main_div_body_title_create_btn_fixed";

let headerBodyTodoList = document.createElement("div");
headerBodyTodoList.className = "main_div_body_title_create_btn";

let headerP = document.createElement("p");
headerP.innerText = "Posts";
headerP.className = "main_div_body_title";

let headerCreate_btn = document.createElement("button");
headerCreate_btn.innerText = "Create";
headerCreate_btn.className = "main_div_create_btn";
headerCreate_btn.id = "main_div_create_btn";


headerBodyTodoList.appendChild(headerP);
headerBodyTodoList.appendChild(headerCreate_btn);
headerTodoList.appendChild(headerBodyTodoList);
todolist.appendChild(headerTodoList);

// create title div of todolist
let parentTitleDiv = document.createElement("div");
parentTitleDiv.className = "main_div_titles_div";
parentTitleDiv.id = "main_div_titles_div";

let titleDiv = document.createElement("div");
titleDiv.className = "main_div_list_title_item";


// # div and p
let checkmarkDiv = document.createElement("div");
let checkmarkP = document.createElement("span");
checkmarkP.innerText = "#";

checkmarkDiv.className = "main_div_list_item_div";
checkmarkDiv.id = "main_div_title_id";
checkmarkP.className = "main_div_title_text";

// username div and p
let usernameDiv = document.createElement("div");
let usernameP = document.createElement("span");
usernameP.innerText = "User Name";

usernameDiv.className = "main_div_list_item_div";
usernameDiv.id = "main_div_title_user_name";
usernameP.className = "main_div_title_text";

// title div and p
let titleItemDiv = document.createElement("div");
let titleP = document.createElement("span");
titleP.innerText = "Title";

titleItemDiv.className = "main_div_list_item_div";
titleItemDiv.id = "main_div_title_title";
titleP.className = "main_div_title_text";

// actions div and p
let actionsDiv = document.createElement("div");
let actionsP = document.createElement("span");
actionsP.innerText = "Actions";

actionsDiv.className = "main_div_list_item_div";
actionsDiv.id = "main_div_title_actions";
actionsP.className = "main_div_title_text";

// Append

checkmarkDiv.appendChild(checkmarkP);
usernameDiv.appendChild(usernameP);
titleItemDiv.appendChild(titleP);
actionsDiv.appendChild(actionsP);

//

titleDiv.appendChild(checkmarkDiv);
titleDiv.appendChild(usernameDiv);
titleDiv.appendChild(titleItemDiv);
titleDiv.appendChild(actionsDiv);

//

parentTitleDiv.appendChild(titleDiv);

todolist.appendChild(parentTitleDiv)

async function getData() {

    let posts = [];
    let users = [];

    let urls = [
        fetch("https://jsonplaceholder.typicode.com/posts"),
        fetch("https://jsonplaceholder.typicode.com/users")
    ];


    await Promise.all(urls)
        .then((stream) => {
            return Promise.all(stream.map((info) => info.json()))
        }).then((data) => {
            [posts, users] = data;
            console.log(posts);
            console.log(users);
        })


    posts.map((post, i) => {
        // Parent div
        let parent_div = document.createElement("div");

        // Paragraphs 
        let p_id = document.createElement("p");
        let p_user_name = document.createElement("p");
        let p_title = document.createElement("p");

        let div_actions = document.createElement("div");
        let edit_icon = document.createElement("img");
        let delete_icon = document.createElement("img");

        // Draw background gray or white
        if (i % 2 === 0) {
            parent_div.style.background = "#FFF";
        } else {
            parent_div.style.background = "#F5F6FA";
        }

        // Parent div style
        parent_div.className = "main_div_list_item_div";

        //Find username in array of users
        users.map((user) => {
            if (post.userId === user.id) {
                p_user_name.innerText = user.name;
            }
        })

        // Add post info to paragraph
        p_id.innerText = post.id;
        p_title.innerText = post.title;

        // Add classnames and ids to paragraphs
        p_id.id = "main_div_item_id";
        p_user_name.id = "main_div_item_user_name";
        p_title.id = "main_div_item_title";
        div_actions.id = "main_div_item_actions";

        // Add icons to actions
        edit_icon.src = "./icons/main_list/edit_icon.svg";
        delete_icon.src = "./icons/main_list/delete_icon.svg";
        div_actions.appendChild(edit_icon);
        div_actions.appendChild(delete_icon);

        // Add elements to parent div
        parent_div.appendChild(p_id);
        parent_div.appendChild(p_user_name);
        parent_div.appendChild(p_title);
        parent_div.appendChild(div_actions);

        // Add parent div to todolist
        todolist.appendChild(parent_div);

    })

}

getData();


let create_btn = document.getElementById("main_div_create_btn");

async function Create() {

    // Delete posts page
    parentTodolist.removeChild(todolist);

    // Add Create page
    let createDiv = document.createElement("div");

    // Add create title
    let createDivTitle = document.createElement("div");
    let createTitle = document.createElement("div");

    // createDiv
    createDivTitle.innerHTML = `<div class="main_div_body_title_create_btn">
                                    <span class="main_div_body_title">Create Post</span>
                                </div>`;

    createDivTitle.appendChild(createTitle);
    createDiv.appendChild(createDivTitle);


    // Inputs div
    let inputsDIV = document.createElement("div");

    let inputLeftDiv = document.createElement("div");
    let inputRightDiv = document.createElement("div");


    //inputLeftDiv block
    let inputLeftDivTitleInput = document.createElement("input");
    inputLeftDivTitleInput.placeholder = "Title";
    inputLeftDivTitleInput.className = "";

    let users = [];

    await fetch("https://jsonplaceholder.typicode.com/users")
        .then((stream) => { return stream.json() })
        .then((data) => {
            console.log(data);
            users = data;
        })


    let inputLeftDivUserSelect = document.createElement("div");
    let select = document.createElement("select");
    

    users.map((user) => {
        let option = document.createElement("option");
        option.innerText = user.name;
        select.appendChild(option);
    });

    inputLeftDivUserSelect.appendChild(select);

    // Input left div elements 

    inputLeftDiv.appendChild(inputLeftDivTitleInput);
    inputLeftDiv.appendChild(inputLeftDivUserSelect);

    //inputRightDiv block


    //inputLeftDiv and inputRightDiv to inputsDIV
    inputsDIV.appendChild(inputLeftDiv);
    inputsDIV.appendChild(inputRightDiv);

    parentTodolist.appendChild(createDiv);
    parentTodolist.appendChild(inputsDIV);
}

create_btn.addEventListener("click", Create);