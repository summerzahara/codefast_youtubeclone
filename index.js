let likesCounter = 0;
const likeBtn = document.getElementById("likeBtn");

// Increment the number of likes
const addLike = (incrementBy) => {
    likesCounter += incrementBy;
    // Show number of likes on button
    likeBtn.innerText = `(${likesCounter}) Like 👍`;

    if (likesCounter === 10) {
        alert("🥳 Congrats!")
    }

    console.log(likesCounter);
};
likeBtn.addEventListener("click", () => {addLike(1);});