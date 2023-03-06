var gallery_images = document.getElementsByClassName("grid-item");
var gallery_image_index = 0;

var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var span = document.getElementsByClassName("close")[0];
var is_modal_active = false;

//== EVENTS ==
$('.grid-item').click(function() {
    //if the modal is active don't allow anyone to update it
    if ( is_modal_active == false ) {
        //@NOTE: this a bug but this code will work as bandaid
        gallery_image_index = $(this).data('index');
        Update_Modal(gallery_image_index);
        is_modal_active = true;
    }
    //this info is used in another event

    //keeping incase I need for other elements in the future
    //console.log($thumb.data('foo'));
    //console.log($thumb.find('img').attr('src'));
});

//@NOTE: do not inline the function call, you need to wrap this in an anonymous function call why? who knows
$('.next').click(function() {Update_Modal(gallery_image_index+1);});
$('.prev').click(function() {Update_Modal(gallery_image_index-1);});

$('#close-button').click(function() {
    modal.style.display = "none";
    gallery_image_index = 0;
    is_modal_active = false;
});

function Update_Modal(selected_image_index) {
    if ( selected_image_index === undefined ) {
        return;
    }

    console.log("update_modal");
    if (selected_image_index >= gallery_images.length) {
        selected_image_index = 0;
    }
    else if (selected_image_index < 0) {
        selected_image_index = gallery_images.length-1;
    }

    //@NOTE: the $(...) is special jquery syntax without it you won't be able to call .attr();
    let selected_image = $(gallery_images[selected_image_index]);

    modal.style.display = "block";
    modalImg.src = selected_image.attr('src');
    captionText.innerHTML = selected_image.attr('alt');

    gallery_image_index = selected_image_index;
}
//keyboard input
function Disable_Modal() {
    modal.style.display = "none";
    gallery_image_index = 0;
    is_modal_active = false;
}

document.addEventListener('keydown', (event) => { 
    if(event.repeat == false && is_modal_active == true) {
        if(event.key == "Escape") { 
            Disable_Modal();
        }

        if(event.key == "ArrowRight") {
            Update_Modal(gallery_image_index+1);
        }
        if(event.key == "ArrowLeft") {
            Update_Modal(gallery_image_index-1);
        }
    }
});

$('#close-button').click(function() {
    Disable_Modal();
});

//disabling right clicking on items in the image grid
$('.grid-item').contextmenu(function() { return false; });
$('.modal-content').contextmenu(function() { return false; });
