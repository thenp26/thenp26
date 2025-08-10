const text = "Hi, I'm Prakash — Building Tech that Matters.";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}

window.onload = typeWriter;
