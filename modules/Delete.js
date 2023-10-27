import {Close} from "./Close.js";


export  async function Delete(id) {

    // Delete main div
    let deleteMainDivFlex = document.createElement("div");
    deleteMainDivFlex.className = "delete_main_div_flex";
    let deleteMainDiv = document.createElement("div");
    deleteMainDiv.className = "delete_main_div";

    let deleteMainDivTitle = document.createElement("div");
    deleteMainDivTitle.innerText = "Are you sure you want to delete this item?";
    deleteMainDivTitle.className = "delete_main_div_title";

    let deleteMainDivSeperator = document.createElement("div");
    deleteMainDivSeperator.className = "delete_main_div_seperator";

    let deleteMainDivButtons = document.createElement("div");
    deleteMainDivButtons.className = "delete_main_div_buttons";

    let deleteButton = document.createElement("button");
    deleteButton.className = "delete_main_div_delete_button";
    deleteButton.innerText = "Delete";

    let closeButton = document.createElement("button");
    closeButton.className = "delete_main_div_close_button";
    closeButton.innerText = "Close";

    // Child elements to parents element
    deleteMainDivButtons.appendChild(deleteButton);
    deleteMainDivButtons.appendChild(closeButton);

    deleteMainDiv.appendChild(deleteMainDivTitle);
    deleteMainDiv.appendChild(deleteMainDivSeperator);
    deleteMainDiv.appendChild(deleteMainDivButtons);

    deleteMainDivFlex.appendChild(deleteMainDiv);

    // Root element
    let rootElement = document.documentElement;
    rootElement.appendChild(deleteMainDivFlex);

    async function DeletePost() {

        await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',
        })
        .then((stream) => {return stream.json()})
        .then((data) => {
            console.log(data);
        })

        Close(rootElement, deleteMainDivFlex)

    }

    deleteButton.addEventListener("click", DeletePost);

    closeButton.addEventListener("click", () => {
        Close(rootElement, deleteMainDivFlex);
    });

}