const openAnim = document.getElementById('openAnim');
openAnim.addEventListener("animationend", () => {
    openAnim.remove();
})