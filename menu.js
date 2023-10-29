import menu from './menu.json' assert {type: 'json'};


let menu_container = document.getElementById("menu_elements_container");
let back_btn_div = document.getElementById("back_btn_div");
let sidebar_div = document.getElementById("sidebar_div");
let header_title = document.getElementById("header_title");
let header_logo_search = document.getElementById("header_logo_search");



// Function to recursively draw JSON
function drawJSON(data, container) {

  const ul = document.createElement("ul");
  ul.className = "ul";
  let liTitle = document.createElement("h1");
  liTitle.className = "sidebar_group_title";

  if (data.group !== undefined) {

    liTitle.innerText = data.group;
    ul.appendChild(liTitle);

  }

  let i = 0;

  for (const key in data) {
    let li = document.createElement("li");
    li.className = "sidebar_pages_title";
    let arrow_icon = document.createElement("img");
    arrow_icon.src = "./icons/main_list/arrow_icon.svg";
    arrow_icon.className = "arrow_icon";

    let page_icon = document.createElement("img");
    page_icon.src = "./icons/sidebar/page_icon.svg";
    page_icon.className = "sidebar_page_icon";

    let page_icon_div = document.createElement("div");
    page_icon_div.className = "sidebar_page_div_name";

    let hideMenuBoolean = true;

    function HideMenuTitles() {

      if (hideMenuBoolean) {
        li.textContent = ``;
        arrow_icon.className = "hide_arrow_icon";
        sidebar_div.style.width = "auto";
        header_title.style.display = "none";
        header_logo_search.style.width = "150px";
        back_btn_div.style.transform = "rotate(180deg)";
        hideMenuBoolean = false;
      } else {
        li.textContent = data.title;
        arrow_icon.className = "arrow_icon";
        sidebar_div.style.width = "400px";
        header_title.style.display = "block";
        header_logo_search.style.width = "400px";
        back_btn_div.style.transform = "rotate(0deg)";
        hideMenuBoolean = true;
      }


    }

    back_btn_div.addEventListener("click", HideMenuTitles);



    if (typeof data[key] === "object") {

      page_icon_div.appendChild(drawJSON(data[key], container));
      ul.appendChild(page_icon_div);

    } else if (data.title !== undefined) {

      if (i === 0) {

        li.innerText += `${data.title}`;
        if (data.title === "Categories" || data.title === "Posts") {
          page_icon_div.style.background = "#3A57E8";
        }
        page_icon_div.appendChild(page_icon);
        page_icon_div.appendChild(li);


        if (data.children.length !== 0) {

          page_icon_div.appendChild(arrow_icon);

        }

        i++;
        ul.appendChild(page_icon_div);
      }

    }

  }



  return ul;
}


menu_container.appendChild(drawJSON(menu, menu_container));