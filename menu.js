import menu from './menu.json' assert {type: 'json'};


let menu_container = document.getElementById("menu_elements_container");



      // Function to recursively draw JSON
      function drawJSON(data, container) {

        const ul = document.createElement("ul");
        let liTitle = document.createElement("h1");

        // console.log(data.group);

        if (data.group !== undefined) {

          liTitle.innerText = data.group;
          ul.appendChild(liTitle);
          
        }
        
        let i = 0;

        for (const key in data) {
          const li = document.createElement("li");
          

          if (typeof data[key] === "object") {

            li.appendChild(drawJSON(data[key], container));
            ul.appendChild(li);
            
          } else if(data.title !== undefined) {

            if (i === 0) {
              li.textContent += `${data.title}`;
              i++;
              ul.appendChild(li);
            }
            
          }
         

          // ul.appendChild(li);
      
        }

        return ul;
      }


      menu_container.appendChild(drawJSON(menu, menu_container));










      // // Function to recursively draw JSON as a menu
      // function drawMenu(data, container) {
      //   const ul = document.createElement("ul");
     
        

      //   (data || []).map((group, i) => {
      //     let li = document.createElement("li");
      //     li.textContent = group.group;

      //     // console.log(i);

      //     let groupArr = group.pages;

                   
      //     (groupArr || []).map((item) => {
      //       console.log(item);

      //     // console.log(item.children.length);
      //     // console.log(item.title);

      //     let ItemTitle = document.createElement("li");
      //     ItemTitle.innerText = item.title;
      //     ul.appendChild(ItemTitle)

      //     if (item.children.length !== 0) {
      //       let li = document.createElement("li");
      //       li.innerText = item.title;
      //       console.log(item.children);

      //       console.log("Length is 1");
      //       // console.log(group.pages);
      //       li.appendChild(drawMenu(groupArr.children, container));

      //     }


      //   })
        

      //     ul.appendChild(li);

      //   });

      //   return ul;
      // }

      // menu_container.appendChild(drawMenu(menu, menu_container));












// function DrawMenu() {

//     console.log("Menu", menu);


//     menu.map((group) => {
//         let div_group = document.createElement("div");
//         let p_group = document.createElement("p");

//         let seperator = document.createElement("div");

//         // let div_page = document.createElement("div");
//         // let p_page = document.createElement("p");

//         // Add seperator to between groups
//         seperator.className = "seperator";


//         // Add to DOM created group elements
//         div_group.className = "sidebar_group_div";
//         p_group.className = "sidebar_group_title";

//         p_group.innerText = group.group;
//         div_group.appendChild(seperator);
//         div_group.appendChild(p_group);


//         function createDOMElement(data) {

//             const element = document.createElement('div');


//             let itemPages = data.pages;
//             // console.log(itemPages);

//             (itemPages || []).map((page, i) => {


//                 console.log(i, itemPages);
//                 // if (page.children.length === 0) {

//                 let div_page = document.createElement("div");
//                 let icon_page = document.createElement("img");
//                 let p_page = document.createElement("p");
//                 let div_arrow_page = document.createElement("div");
//                 let arrow_icon = document.createElement("img");

//                 // Add arrow icon
//                 arrow_icon.src = "./icons/main_list/arrow_icon.svg";
//                 arrow_icon.style.transform = "rotate(90deg)";

//                 if (page.children.length !== 0) {
//                     div_arrow_page.appendChild(arrow_icon);
//                 }

//                 // Add classnames to elements
//                 icon_page.src = page.icon;
//                 icon_page.className = "sidebar_page_icon";
//                 p_page.className = "sidebar_pages_title";
//                 div_page.className = "sidebar_page_div";

//                 // Add to DOM
//                 p_page.innerText = page.title;
//                 div_page.appendChild(icon_page);
//                 div_page.appendChild(p_page);
//                 div_page.appendChild(div_arrow_page);
//                 div_group.appendChild(div_page);

//                 // const childElement = createDOMElement(page.children);

//                 // console.log(page.children);
//                 // element.appendChild(childElement);

//                 // }

//                 // if (page.children.length !== 0) {
                    
//                 //     let p_page = document.createElement("p");
//                 //     let div_page = document.createElement("div");
//                 //     let icon_page = document.createElement("img");

//                 //     // Add classnames to elements
//                 //     icon_page.src = page.icon;
//                 //     icon_page.className = "sidebar_page_icon";
//                 //     p_page.className = "sidebar_pages_title";
//                 //     div_page.className = "sidebar_page_div";

//                 //     p_page.innerText = page.title;
//                 //     div_page.appendChild(icon_page);
//                 //     div_page.appendChild(p_page);

//                 //     const childElement = createDOMElement(page.children);

//                 //     element.appendChild(childElement);
//                 // }
                
//             })


//             return element;
//         }

//         // Call the function with your JSON data
//         let jsonData = group;
//         let domElement = createDOMElement(jsonData);

//         // Append the root element to the document
//         document.body.appendChild(domElement);


//         // function drawTree(childrenPage) {

//         //     console.log(childrenPage);
//         //     // if (childrenPage.length !== 0) {
//         //     //     console.log("Empty");
//         //     //     return 1;
//         //     // }

//         //     // Add to group elements created pages
//         //     let group_pages = group.pages;


//         //     group_pages.map((page) => {

//         //         let childrenDiv = drawTree(page.children);


//         //         console.log(childrenDiv);

//         //         if (childrenDiv) {


//         //             let div_page = document.createElement("div");
//         //             let icon_page = document.createElement("img");
//         //             let p_page = document.createElement("p");
//         //             let div_arrow_page = document.createElement("div");
//         //             let arrow_icon = document.createElement("img");

//         //             // Add arrow icon
//         //             arrow_icon.src = "./icons/main_list/arrow_icon.svg";
//         //             arrow_icon.style.transform = "rotate(90deg)";

//         //             if (page.children.length !== 0) {
//         //                 div_arrow_page.appendChild(arrow_icon);
//         //             }

//         //             // Add classnames to elements
//         //             icon_page.src = page.icon;
//         //             icon_page.className = "sidebar_page_icon";
//         //             p_page.className = "sidebar_pages_title";
//         //             div_page.className = "sidebar_page_div";

//         //             // Add to DOM
//         //             p_page.innerText = page.title;
//         //             div_page.appendChild(icon_page);
//         //             div_page.appendChild(p_page);
//         //             div_page.appendChild(div_arrow_page);
//         //             div_group.appendChild(div_page);

//         //             // Recursion for tree

//         //             console.log("Children", page.children);


//         //             // if(childrenPage.length !== 0){
//         //             // return drawTree(page.children);
//         //             // }

//         //         }

//         //     })

//         // }

//         // drawTree();


//         menu_container.appendChild(div_group);

//     })

// }

// DrawMenu();
