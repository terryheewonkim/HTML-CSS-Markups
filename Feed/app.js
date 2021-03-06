const followButton = document.querySelector(".feed-user-profile button")
const likeButton = document.querySelector(".feed-footer button:first-child")
const commentButton = document.querySelector(".feed-footer button:last-child")
const feedComment = document.querySelector(".feed-comment")

// Let user follow or unfollow with the button
followButton.addEventListener("click", function() {
    if(this.following) {
        this.innerHTML = "Follow"
        this.classList.remove("follwing")
    } else {
        this.innerHTML = "Follwing"
        this.classList.add("following")
    }
    this.following = !this.following
})
followButton.following = false;

// Let user like or unlike the post
likeButton.addEventListener("click", function() {
    if(this.liked) {
        this.innerHTML = "10 Likes"
        this.classList.remove("active")
    } else {
        this.innerHTML = "11 Likes"
        this.classList.add("active")
    }
    this.liked = !this.liked
})
likeButton.liked = false;

commentButton.addEventListener("click", function() {
    if(this.active) {
        feedComment.classList.remove("active")
    } else {
        feedComment.classList.add("active")
    }
    this.active = !this.active
})
commentButton.active = false;