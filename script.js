

let tabs = document.querySelectorAll(".tabs h3");
    let tabContents = document.querySelectorAll(".tab-content div");

    console.log( tabs);
    console.log( tabContents);

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", function() {
            tabContents.forEach((content) => {
                content.classList.remove("active");
            });

            tabs.forEach((tab) => {
                tab.classList.remove("active");
            });

            tabs[index].classList.add("active");
            tabContents[index].classList.add("active");
        });
    });