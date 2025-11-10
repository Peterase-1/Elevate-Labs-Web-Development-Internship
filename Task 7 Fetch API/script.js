// API URL
const API_URL = 'https://jsonplaceholder.typicode.com/users';

// DOM Elements
const userContainer = document.getElementById('userContainer');
const loading = document.getElementById('loading');
const errorDiv = document.getElementById('error');
const errorMessage = document.getElementById('errorMessage');
const reloadBtn = document.getElementById('reloadBtn');
const retryBtn = document.getElementById('retryBtn');

// Fetch and display user data
async function fetchUsers() {
    try {
        // Show loading state
        showLoading();
        hideError();
        clearUsers();

        // Fetch data from API
        const response = await fetch(API_URL);

        // Check if response is ok
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        // Parse JSON response
        const users = await response.json();

        // Hide loading
        hideLoading();

        // Display users
        displayUsers(users);

    } catch (error) {
        // Hide loading
        hideLoading();

        // Handle different types of errors
        if (error.name === 'TypeError' && error.message.includes('fetch')) {
            showError('Network error: Please check your internet connection and try again.');
        } else {
            showError(`Error fetching data: ${error.message}`);
        }

        console.error('Fetch error:', error);
    }
}

// Display users on the page
function displayUsers(users) {
    // Clear previous content
    userContainer.innerHTML = '';

    // Loop through users and create cards
    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.className = 'user-card';

        userCard.innerHTML = `
            <div class="user-header">
                <div class="user-avatar">${user.name.charAt(0)}</div>
                <h2 class="user-name">${user.name}</h2>
            </div>
            <div class="user-details">
                <div class="detail-item">
                    <span class="detail-label">📧 Email:</span>
                    <span class="detail-value">${user.email}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">📞 Phone:</span>
                    <span class="detail-value">${user.phone}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">🏢 Company:</span>
                    <span class="detail-value">${user.company.name}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">📍 Address:</span>
                    <span class="detail-value">
                        ${user.address.street}, ${user.address.suite}<br>
                        ${user.address.city}, ${user.address.zipcode}
                    </span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">🌐 Website:</span>
                    <span class="detail-value">
                        <a href="http://${user.website}" target="_blank">${user.website}</a>
                    </span>
                </div>
            </div>
        `;

        userContainer.appendChild(userCard);
    });
}

// Show loading state
function showLoading() {
    loading.classList.remove('hidden');
}

// Hide loading state
function hideLoading() {
    loading.classList.add('hidden');
}

// Show error message
function showError(message) {
    errorMessage.textContent = message;
    errorDiv.classList.remove('hidden');
}

// Hide error message
function hideError() {
    errorDiv.classList.add('hidden');
}

// Clear users
function clearUsers() {
    userContainer.innerHTML = '';
}

// Event Listeners
reloadBtn.addEventListener('click', fetchUsers);
retryBtn.addEventListener('click', fetchUsers);

// Initial fetch when page loads
fetchUsers();
