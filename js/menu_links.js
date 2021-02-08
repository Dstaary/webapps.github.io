navBtns = document.querySelectorAll(".nav_button");
appSections = document.querySelectorAll(".app");


for (let i = 0; i < navBtns.length; i++) {
    navBtns[i].addEventListener("click", () => {
        const clickedBtn = navBtns[i];
        for (let j = 0; j < appSections.length; j++) {
            const sectionId = appSections[j]
            if(clickedBtn.id === sectionId.id){
                sectionId.classList.remove("hidden_section");
            } else {
                sectionId.classList.add("hidden_section");
            }

        }
        if (window.innerWidth <= 700) {
        menu.classList.add("menu_burger");
        }
    })
}
        