window.addEventListener("load", myScript);

function myScript() {



    const images_container = document.getElementById("images_list");

    let images_list = Array.from(images_container.children);

    images_container.onscroll = function () {

        if (images_container.scrollTop > 0.9 * images_container.scrollHeight) {

            // console.log(true)

            shuffle(images_list).forEach(element => {

                images_container.appendChild(element.cloneNode(true));

                // console.log(element)

            });

            // console.log(images_container.children)


        }
    }




    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };



}



