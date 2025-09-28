const bookmarkBar = document.getElementById("bookmark-bar");
const bookmarkOpen = document.getElementById("bookmark-open");
const bookmarkClose = document.getElementById("bookmark-close");

const isBookmarkBarOpen = localStorage.getItem("isBookmarkBarOpen");
if(isBookmarkBarOpen === "close"){
    bookmarkBar.style.display = "none";
    bookmarkOpen.style.display = "none";
    bookmarkClose.style.display = "flex";
}else{
    bookmarkBar.style.display = "block";
    bookmarkOpen.style.display = "flex";
    bookmarkClose.style.display = "none";    
}

const bookmarkBarToggle = () => {
    let isBookmarkBarOpen = localStorage.getItem("isBookmarkBarOpen");
    if(isBookmarkBarOpen === "close"){
        localStorage.setItem("isBookmarkBarOpen", "open");
        bookmarkBar.style.display = "block";
        bookmarkOpen.style.display = "flex";
        bookmarkClose.style.display = "none";    
        return;
    }

    localStorage.setItem("isBookmarkBarOpen", "close");
    bookmarkBar.style.display = "none";
    bookmarkOpen.style.display = "none";
    bookmarkClose.style.display = "flex";
};

document.getElementById("bookmark-open-btn").addEventListener("click", bookmarkBarToggle);
document.getElementById("bookmark-close-btn").addEventListener("click", bookmarkBarToggle);


