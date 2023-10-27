import { getData } from "./modules/getData.js";
import { Create } from "./modules/Create.js";
import { Delete } from "./modules/Delete.js";
import { Close } from "./modules/Close.js";
import { Edit } from "./modules/Edit.js";

///////////////////////////////////////////////////////////////


let parentTodolist = document.getElementById("main_div_list_div");



function CheckHref() {
    switch (window.location.href) {
        case "http://127.0.0.1:5501/#/post":
            getData();
            break;
        case "http://127.0.0.1:5501/#/posts/create":
            Create();
            break;
        case "http://127.0.0.1:5501/#/posts/edit":
            break;
        default:
            window.location.href = "http://127.0.0.1:5501/#/pos"
            break;
    }
}



// Create todolist
let todolist = document.createElement("div");
todolist.className = "main_div_list";
todolist.id = "main_div_list";


// parentTodolist.appendChild(todolist);

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


// console.log(window.location.href);


// let create_btn = document.getElementById("main_div_create_btn");

export { parentTodolist, todolist };

///////////////////////////   Function Edit   ///////////////////////////

// async function Edit(data) {


//     console.log(data);

//     //////////////

//     // Delete posts page
//     parentTodolist.removeChild(todolist);

//     // Add Create page
//     let createDiv = document.createElement("div");

//     // Add create title
//     let createDivTitle = document.createElement("div");
//     let createTitle = document.createElement("div");

//     // Add buttons Create and Cancel
//     let createButtonCancelButtonDivFlex = document.createElement("div");
//     createButtonCancelButtonDivFlex.className = "create_buttons_div_flex";
//     let createButtonCancelButtonDiv = document.createElement("div");
//     createButtonCancelButtonDiv.className = "create_buttons_div";

//     let saveButton = document.createElement("button");
//     saveButton.className = "create_button";
//     saveButton.innerText = "Save";

//     let cancelButton = document.createElement("button");
//     cancelButton.className = "cancel_button";
//     cancelButton.innerText = "Cancel";

//     createButtonCancelButtonDiv.appendChild(saveButton);
//     createButtonCancelButtonDiv.appendChild(cancelButton);
//     createButtonCancelButtonDivFlex.appendChild(createButtonCancelButtonDiv);


//     // createDivTitle
//     createDivTitle.innerHTML = `<div class="main_div_body_title_create_btn">
//                                         <span class="main_div_body_title">Edit Post</span>
//                                     </div>`;
//     createDivTitle.appendChild(createTitle);
//     createDiv.appendChild(createDivTitle);


//     // Inputs div
//     let inputsDIV = document.createElement("div");
//     inputsDIV.className = "create_inputs_div";

//     let inputLeftDiv = document.createElement("div");
//     inputLeftDiv.className = "create_inputs_left_div_pos";

//     let inputRightDiv = document.createElement("div");
//     inputRightDiv.className = "create_inputs_right_div_pos";


//     //inputLeftDiv block
//     let inputLeftDivTitleInput = document.createElement("input");
//     inputLeftDivTitleInput.placeholder = "Title";
//     inputLeftDivTitleInput.className = "create_inputs_left_div_input";

//     let users = [];

//     await fetch("https://jsonplaceholder.typicode.com/users")
//         .then((stream) => { return stream.json() })
//         .then((data) => {
//             console.log(data);
//             users = data;
//         })


//     let inputLeftDivUserSelect = document.createElement("div");
//     let select = document.createElement("select");
//     select.className = "create_inputs_left_div_input";
//     let option = document.createElement("option");
//     option.innerText = "Select User";
//     select.appendChild(option);

//     let userIds = users.map(({ id }) => id);

//     users.map((user, index) => {
//         let option = document.createElement("option");
//         option.innerText = user.name;
//         option.value = userIds[index];
//         select.appendChild(option);
//     });

//     inputLeftDivUserSelect.appendChild(select);

//     // Input left div elements
//     inputLeftDiv.appendChild(inputLeftDivTitleInput);
//     inputLeftDiv.appendChild(inputLeftDivUserSelect);

//     //inputRightDiv block
//     let inputRightDivBodyInput = document.createElement("input");
//     inputRightDivBodyInput.placeholder = "Body";
//     inputRightDivBodyInput.className = "create_inputs_right_div_input";

//     inputRightDiv.appendChild(inputRightDivBodyInput);

//     //inputLeftDiv and inputRightDiv to inputsDIV
//     inputsDIV.appendChild(inputLeftDiv);
//     inputsDIV.appendChild(inputRightDiv);

//     parentTodolist.appendChild(createDiv);
//     parentTodolist.appendChild(inputsDIV);
//     parentTodolist.appendChild(createButtonCancelButtonDivFlex);

//     function Cancel() {
//         window.location.href = "http://127.0.0.1:5501/#/posts";
//         parentTodolist.removeChild(createDiv);
//         parentTodolist.removeChild(inputsDIV);
//         parentTodolist.removeChild(createButtonCancelButtonDivFlex);
//         parentTodolist.appendChild(todolist);
//         getData();
//     }

//     cancelButton.addEventListener("click", Cancel);

//     function EditPost() {
//         fetch(`https://jsonplaceholder.typicode.com/posts/${data.id}`, {
//             method: 'PUT',
//             body: JSON.stringify({
//                 id: data.id,
//                 title: inputLeftDivTitleInput.value,
//                 body: inputRightDivBodyInput.value,
//                 userId: select.value,
//             }),
//             headers: {
//                 'Content-type': 'application/json; charset=UTF-8',
//             },
//         })
//             .then((response) => response.json())
//             .then((json) => console.warn(json));


//         window.location.href = "http://127.0.0.1:5501/#/posts";

//         Cancel();
//     }

//     saveButton.addEventListener("click", EditPost);

//     /////////////

//     window.location.href = `http://127.0.0.1:5501/#/posts/edit/${data.id}`;

// }




// async function getData() {

//     window.location.href = "http://127.0.0.1:5501/#/posts";

//     let posts = [];
//     let users = [];

//     let urls = [
//         fetch("https://jsonplaceholder.typicode.com/posts"),
//         fetch("https://jsonplaceholder.typicode.com/users")
//     ];


//     await Promise.all(urls)
//         .then((stream) => {
//             return Promise.all(stream.map((info) => info.json()))
//         }).then((data) => {
//             [posts, users] = data;
//             console.log(posts);
//             console.log(users);
//         })


//     posts.map((post, i) => {
//         // Parent div
//         let parent_div = document.createElement("div");

//         // Paragraphs 
//         let p_id = document.createElement("p");
//         let p_user_name = document.createElement("p");
//         let p_title = document.createElement("p");

//         let div_actions = document.createElement("div");
//         let edit_icon = document.createElement("img");
//         let delete_icon = document.createElement("img");

//         // Draw background gray or white
//         if (i % 2 === 0) {
//             parent_div.style.background = "#FFF";
//         } else {
//             parent_div.style.background = "#F5F6FA";
//         }

//         // Parent div style
//         parent_div.className = "main_div_list_item_div";

//         //Find username in array of users
//         users.map((user) => {
//             if (post.userId === user.id) {
//                 p_user_name.innerText = user.name;
//             }
//         })

//         // Add post info to paragraph
//         p_id.innerText = post.id;
//         p_title.innerText = post.title;

//         // Add classnames and ids to paragraphs
//         p_id.id = "main_div_item_id";
//         p_user_name.id = "main_div_item_user_name";
//         p_title.id = "main_div_item_title";
//         div_actions.id = "main_div_item_actions";

//         // Add icons to actions
//         edit_icon.src = "./icons/main_list/edit_icon.svg";
//         edit_icon.style.cursor = "pointer";
//         delete_icon.src = "./icons/main_list/delete_icon.svg";
//         delete_icon.style.cursor = "pointer";
//         div_actions.appendChild(edit_icon);
//         div_actions.appendChild(delete_icon);

//         // Add elements to parent div
//         parent_div.appendChild(p_id);
//         parent_div.appendChild(p_user_name);
//         parent_div.appendChild(p_title);
//         parent_div.appendChild(div_actions);

//         delete_icon.addEventListener("click", () => {
//             Delete(post.id);
//         });

//         p_id.addEventListener("click", function () {
//             Edit(post);
//         });

//         p_user_name.addEventListener("click", function () {
//             Edit(post);
//         });

//         p_title.addEventListener("click", function () {
//             Edit(post);
//         });

//         edit_icon.addEventListener("click", function () {
//             Edit(post);
//         });


//         // Add parent div to todolist
//         todolist.appendChild(parent_div);

//     })

// }


getData();






// async function Create() {

//     // CheckHref();

//     // Delete posts page
//     parentTodolist.removeChild(todolist);

//     // Add Create page
//     let createDiv = document.createElement("div");

//     // Add create title
//     let createDivTitle = document.createElement("div");
//     let createTitle = document.createElement("div");

//     // Add buttons Create and Cancel
//     let createButtonCancelButtonDivFlex = document.createElement("div");
//     createButtonCancelButtonDivFlex.className = "create_buttons_div_flex";
//     let createButtonCancelButtonDiv = document.createElement("div");
//     createButtonCancelButtonDiv.className = "create_buttons_div";

//     let createButton = document.createElement("button");
//     createButton.className = "create_button";
//     createButton.innerText = "Create";

//     let cancelButton = document.createElement("button");
//     cancelButton.className = "cancel_button";
//     cancelButton.innerText = "Cancel";

//     createButtonCancelButtonDiv.appendChild(createButton);
//     createButtonCancelButtonDiv.appendChild(cancelButton);
//     createButtonCancelButtonDivFlex.appendChild(createButtonCancelButtonDiv);


//     // createDivTitle
//     createDivTitle.innerHTML = `<div class="main_div_body_title_create_btn">
//                                     <span class="main_div_body_title">Create Post</span>
//                                 </div>`;

//     createDivTitle.appendChild(createTitle);
//     createDiv.appendChild(createDivTitle);


//     // Inputs div
//     let inputsDIV = document.createElement("div");
//     inputsDIV.className = "create_inputs_div";

//     let inputLeftDiv = document.createElement("div");
//     inputLeftDiv.className = "create_inputs_left_div_pos";

//     let inputRightDiv = document.createElement("div");
//     inputRightDiv.className = "create_inputs_right_div_pos";


//     //inputLeftDiv block
//     let inputLeftDivTitleInput = document.createElement("input");
//     inputLeftDivTitleInput.placeholder = "Title";
//     inputLeftDivTitleInput.className = "create_inputs_left_div_input";

//     let users = [];

//     await fetch("https://jsonplaceholder.typicode.com/users")
//         .then((stream) => { return stream.json() })
//         .then((data) => {
//             console.log(data);
//             users = data;
//         })


//     let inputLeftDivUserSelect = document.createElement("div");
//     let select = document.createElement("select");
//     select.className = "create_inputs_left_div_input";
//     let option = document.createElement("option");
//     option.innerText = "Select User";
//     select.appendChild(option);

//     let userIds = users.map(({ id }) => id);

//     users.map((user, index) => {
//         let option = document.createElement("option");
//         option.innerText = user.name;
//         option.value = userIds[index];
//         select.appendChild(option);
//     });

//     inputLeftDivUserSelect.appendChild(select);

//     // Input left div elements
//     inputLeftDiv.appendChild(inputLeftDivTitleInput);
//     inputLeftDiv.appendChild(inputLeftDivUserSelect);

//     //inputRightDiv block
//     let inputRightDivBodyInput = document.createElement("input");
//     inputRightDivBodyInput.placeholder = "Body";
//     inputRightDivBodyInput.className = "create_inputs_right_div_input";

//     inputRightDiv.appendChild(inputRightDivBodyInput);

//     //inputLeftDiv and inputRightDiv to inputsDIV
//     inputsDIV.appendChild(inputLeftDiv);
//     inputsDIV.appendChild(inputRightDiv);

//     parentTodolist.appendChild(createDiv);
//     parentTodolist.appendChild(inputsDIV);
//     parentTodolist.appendChild(createButtonCancelButtonDivFlex);

//     function Cancel() {
//         window.location.href = "http://127.0.0.1:5501/#/posts";
//         parentTodolist.removeChild(createDiv);
//         parentTodolist.removeChild(inputsDIV);
//         parentTodolist.removeChild(createButtonCancelButtonDivFlex);
//         parentTodolist.appendChild(todolist);
//         getData();
//     }

//     cancelButton.addEventListener("click", Cancel);

//     function CreatePost() {
//         fetch('https://jsonplaceholder.typicode.com/posts', {
//             method: 'POST',
//             body: JSON.stringify({
//                 title: inputLeftDivTitleInput.value,
//                 body: inputRightDivBodyInput.value,
//                 userId: select.value,
//             }),
//             headers: {
//                 'Content-type': 'application/json; charset=UTF-8',
//             },
//         })
//             .then((response) => response.json())
//             .then((json) => console.log(json));

//         window.location.href = "http://127.0.0.1:5501/#/posts";

//         Cancel();
//     }

//     createButton.addEventListener("click", CreatePost);

//     window.location.href = "http://127.0.0.1:5501/#/posts/create";

// }

// create_btn.addEventListener("click", Create);


// async function Delete(id) {

//     // Delete main div
//     let deleteMainDivFlex = document.createElement("div");
//     deleteMainDivFlex.className = "delete_main_div_flex";
//     let deleteMainDiv = document.createElement("div");
//     deleteMainDiv.className = "delete_main_div";

//     let deleteMainDivTitle = document.createElement("div");
//     deleteMainDivTitle.innerText = "Are you sure you want to delete this item?";
//     deleteMainDivTitle.className = "delete_main_div_title";

//     let deleteMainDivSeperator = document.createElement("div");
//     deleteMainDivSeperator.className = "delete_main_div_seperator";

//     let deleteMainDivButtons = document.createElement("div");
//     deleteMainDivButtons.className = "delete_main_div_buttons";

//     let deleteButton = document.createElement("button");
//     deleteButton.className = "delete_main_div_delete_button";
//     deleteButton.innerText = "Delete";

//     let closeButton = document.createElement("button");
//     closeButton.className = "delete_main_div_close_button";
//     closeButton.innerText = "Close";

//     // Child elements to parents element
//     deleteMainDivButtons.appendChild(deleteButton);
//     deleteMainDivButtons.appendChild(closeButton);

//     deleteMainDiv.appendChild(deleteMainDivTitle);
//     deleteMainDiv.appendChild(deleteMainDivSeperator);
//     deleteMainDiv.appendChild(deleteMainDivButtons);

//     deleteMainDivFlex.appendChild(deleteMainDiv);

//     // Root element
//     let rootElement = document.documentElement;
//     rootElement.appendChild(deleteMainDivFlex);

//     async function DeletePost() {

//         await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
//             method: 'DELETE',
//         })
//         .then((stream) => {return stream.json()})
//         .then((data) => {
//             console.log(data);
//         })

//         Close(rootElement, deleteMainDivFlex)

//     }

//     deleteButton.addEventListener("click", DeletePost);

//     closeButton.addEventListener("click", () => {
//         Close(rootElement, deleteMainDivFlex);
//     });

// }