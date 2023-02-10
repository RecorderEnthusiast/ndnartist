var gallery_images; 
var gallery_image_index = 0;

var modal; 
// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg;
var captionText;

var span; 
var selected_image;

window.onload = function() {
    //showSlides(slideIndex);
    gallery_images = document.getElementsByClassName("grid-item");
    gallery_image_index = 0;

    modal = document.getElementById("myModal");
    modalImg = document.getElementById("img01");
    captionText = document.getElementById("caption");
    span = document.getElementsByClassName("close")[0];
    // Get the image and insert it inside the modal - use its "alt" text as a caption

    $('img').click(function() {
        //this info is used in another event
        gallery_image_index = $(this).data('index');
        Update_Modal(gallery_image_index);

        //keeping incase I need for other elements in the future
        //console.log($thumb.data('foo'));
        //console.log($thumb.find('img').attr('src'));
    });

    //@NOTE: do not inline the function call, you need to wrap this in an anonymous function call why? who knows
    $('.next').click(function() {Update_Modal(gallery_image_index+1);});
    $('.prev').click(function() {Update_Modal(gallery_image_index-1);});

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
}

function Update_Modal(selected_image_index) {

    console.log("update_modal");
if (selected_image_index >= gallery_images.length) {
    selected_image_index = 0;
} else if (selected_image_index < 0) {
    selected_image_index = gallery_images.length-1;
}
    //@NOTE: the $(...) is special jquery syntax without it you won't be able to call .attr();
    if (selected_image_index === undefined || selected_image_index >= gallery_images.length) {
  return;
}
	let selected_image = $(gallery_images[selected_image_index]);
    modal.style.display = "block";
    modalImg.src = selected_image.attr('src');
    captionText.innerHTML = selected_image.attr('alt');
    gallery_image_index = selected_image_index;
}
