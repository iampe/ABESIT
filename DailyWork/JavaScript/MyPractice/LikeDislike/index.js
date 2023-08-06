// Function to get the user's previous action (like or dislike) from local storage
function getUserAction() {
    return localStorage.getItem('userAction');
}

// Function to update the counts based on the user's previous action
function updateCountsFromStorage() {
    const userAction = getUserAction();
    if (userAction === 'like') {
        likeCount++;
    } else if (userAction === 'dislike') {
        dislikeCount++;
    }
    updateCounts();
}

// Function to save the user's action (like or dislike) to local storage
function saveUserAction(action) {
    localStorage.setItem('userAction', action);
}

// Function to update the counts displayed on the page
function updateCounts() {
    likeCountSpan.textContent = likeCount;
    dislikeCountSpan.textContent = dislikeCount;
}

// Get references to the like and dislike buttons and count spans
const likeButton = document.getElementById('likeButton');
const dislikeButton = document.getElementById('dislikeButton');
const likeCountSpan = document.getElementById('likeCount');
const dislikeCountSpan = document.getElementById('dislikeCount');

// Initialize the like and dislike counts and update from storage
let likeCount = 0;
let dislikeCount = 0;
updateCountsFromStorage();

// Event listeners for like and dislike buttons
likeButton.addEventListener('click', () => {
    if (getUserAction() === 'like') {
        likeCount--;
        saveUserAction('');
    } else {
        likeCount++;
        if (getUserAction() === 'dislike') {
            dislikeCount--;
        }
        saveUserAction('like');
    }
    updateCounts();
});

dislikeButton.addEventListener('click', () => {
    if (getUserAction() === 'dislike') {
        dislikeCount--;
        saveUserAction('');
    } else {
        dislikeCount++;
        if (getUserAction() === 'like') {
            likeCount--;
        }
        saveUserAction('dislike');
    }
    updateCounts();
});
