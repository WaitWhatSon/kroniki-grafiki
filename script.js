window.addEventListener("load", myScript);



let timer;
const touchduration = 500; //length of time we want the user to touch before we do something

window.addEventListener("contextmenu", e => e.preventDefault());

function myScript() {






    const images = Array.from(document.getElementsByTagName("img"));
    const big_img = images.pop();

    const preview = document.getElementById("preview");

    // console.log(images);
    // console.log(big_img);


    images.forEach(element => {

        element.addEventListener("mousedown", () => { showBigImage(element) })

    });

    images.forEach(element => {

        element.addEventListener("touchstart", () => {
            timer = setTimeout(function () { onlongtouch(element) }, touchduration);
        })

    });


    function onlongtouch(element) {
        showBigImage(element)
    }


    function showBigImage(element) {

        let link = element.getAttribute("src");
        // console.log(link);

        big_img.src = link;
        
        preview.style.visibility = "visible"

    }





    window.addEventListener("mouseup", () => {
        preview.style.visibility = "hidden"
        big_img.src = "";
    })




    window.addEventListener("touchend", () => {

        //stops short touches from firing the event
        if (timer)
            clearTimeout(timer); // clearTimeout, not cleartimeout..

    })


}