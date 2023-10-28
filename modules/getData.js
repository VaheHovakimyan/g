import { Edit } from "./Edit.js";
import { Delete } from "./Delete.js";
import { Create } from "./Create.js";



// let parentTodolist = document.getElementById("main_div_list_div");

// // Create todolist
// let todolist = document.createElement("div");
// todolist.className = "main_div_list";
// todolist.id = "main_div_list";
// parentTodolist.appendChild(todolist);

// // Create header of todolist
// let headerTodoList = document.createElement("div");
// headerTodoList.className = "main_div_body_title_create_btn_fixed";

// let headerBodyTodoList = document.createElement("div");
// headerBodyTodoList.className = "main_div_body_title_create_btn";

// let headerP = document.createElement("p");
// headerP.innerText = "Posts";
// headerP.className = "main_div_body_title";

// let headerCreate_btn = document.createElement("button");
// headerCreate_btn.innerText = "Create";
// headerCreate_btn.className = "main_div_create_btn";
// headerCreate_btn.id = "main_div_create_btn";


// headerBodyTodoList.appendChild(headerP);
// headerBodyTodoList.appendChild(headerCreate_btn);
// headerTodoList.appendChild(headerBodyTodoList);
// todolist.appendChild(headerTodoList);


// // Create title div of todolist
// let parentTitleDiv = document.createElement("div");
// parentTitleDiv.className = "main_div_titles_div";
// parentTitleDiv.id = "main_div_titles_div";

// let titleDiv = document.createElement("div");
// titleDiv.className = "main_div_list_title_item";


// // # div and p
// let checkmarkDiv = document.createElement("div");
// let checkmarkP = document.createElement("span");
// checkmarkP.innerText = "#";

// checkmarkDiv.className = "main_div_list_item_div";
// checkmarkDiv.id = "main_div_title_id";
// checkmarkP.className = "main_div_title_text";


// // username div and p
// let usernameDiv = document.createElement("div");
// let usernameP = document.createElement("span");
// usernameP.innerText = "User Name";

// usernameDiv.className = "main_div_list_item_div";
// usernameDiv.id = "main_div_title_user_name";
// usernameP.className = "main_div_title_text";

// // title div and p
// let titleItemDiv = document.createElement("div");
// let titleP = document.createElement("span");
// titleP.innerText = "Title";

// titleItemDiv.className = "main_div_list_item_div";
// titleItemDiv.id = "main_div_title_title";
// titleP.className = "main_div_title_text";

// // actions div and p
// let actionsDiv = document.createElement("div");
// let actionsP = document.createElement("span");
// actionsP.innerText = "Actions";

// actionsDiv.className = "main_div_list_item_div";
// actionsDiv.id = "main_div_title_actions";
// actionsP.className = "main_div_title_text";

// // Append

// checkmarkDiv.appendChild(checkmarkP);
// usernameDiv.appendChild(usernameP);
// titleItemDiv.appendChild(titleP);
// actionsDiv.appendChild(actionsP);

// //

// titleDiv.appendChild(checkmarkDiv);
// titleDiv.appendChild(usernameDiv);
// titleDiv.appendChild(titleItemDiv);
// titleDiv.appendChild(actionsDiv);

// //

// parentTitleDiv.appendChild(titleDiv);

// todolist.appendChild(parentTitleDiv);




export async function getData() {


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


    // Create title div of todolist
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

    todolist.appendChild(parentTitleDiv);


    window.location.href = "http://127.0.0.1:5501/#/posts";

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

        // Find username in array of users
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
        edit_icon.style.cursor = "pointer";
        delete_icon.src = "./icons/main_list/delete_icon.svg";
        delete_icon.style.cursor = "pointer";
        div_actions.appendChild(edit_icon);
        div_actions.appendChild(delete_icon);

        // Add elements to parent div
        parent_div.appendChild(p_id);
        parent_div.appendChild(p_user_name);
        parent_div.appendChild(p_title);
        parent_div.appendChild(div_actions);

        todolist.appendChild(parent_div);

        parentTodolist.appendChild(todolist);

        delete_icon.addEventListener("click", () => {
            Delete(post.id);
        });

        p_id.addEventListener("click", function () {
            Edit(post);
        });

        p_user_name.addEventListener("click", function () {
            Edit(post);
        });

        p_title.addEventListener("click", function () {
            Edit(post);
        });

        edit_icon.addEventListener("click", function () {
            Edit(post);
        });

        let create_btn = document.getElementById("main_div_create_btn");


        create_btn.addEventListener("click", Create);


    })

}

getData();