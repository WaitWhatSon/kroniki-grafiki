window.addEventListener("load", myScript);

function myScript() {



    const images = Array.from(document.getElementsByTagName("img"));
    const big_img = images.pop();

    const preview = document.getElementById("preview");

    // console.log(images);
    // console.log(big_img);


    images.forEach(element => {

        element.addEventListener("mousedown", () => {showBigImage(element)})

    });

    images.forEach(element => {

        element.addEventListener("touchstart", () => {showBigImage(element)})

    });

    function showBigImage(element) {

        let link = element.getAttribute("src");
        // console.log(link);

        big_img.src = link;
        preview.style.visibility = "visible"

    }




    window.addEventListener("mouseup", () => {
        preview.style.visibility = "hidden"
    })



}