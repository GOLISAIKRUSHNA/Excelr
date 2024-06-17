document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById("text");
    const text = "I am Saikrushna";
    let index = 0;

    function type() {
        if (index < text.length) {
            textElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 100); // Adjust the speed of typing here
        } else {
            setTimeout(erase, 2000); // Wait before starting to erase
        }
    }

    function erase() {
        if (index > 0) {
            textElement.innerHTML = text.substring(0, index-1);
            index--;
            setTimeout(erase, 50); // Adjust the speed of erasing here
        } else {
            setTimeout(type, 500); // Wait before starting to type again
        }
    }

    type();
});
