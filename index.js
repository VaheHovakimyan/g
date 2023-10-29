import { getData } from "./modules/getData.js";
import { Create } from "./modules/Create.js";
import { Delete } from "./modules/Delete.js";
import { Close } from "./modules/Close.js";
import { Edit } from "./modules/Edit.js";



let parentTodolist = document.getElementById("main_div_list_div");



// Create todolist
let todolist = document.createElement("div");
todolist.className = "main_div_list";
todolist.id = "main_div_list";



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


export { parentTodolist, todolist };