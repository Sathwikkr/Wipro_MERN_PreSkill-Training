/**
 * Assignment: Fetch API & Design Patterns
 * Batch: Wipro NGA MERN
 * Pattern Used: Revealing Module Pattern
 * API Source: DummyJSON (English Content)
 */

const DashboardModule = (function() {
    
    // --- Private Configuration ---
    // CHANGED: Using DummyJSON for English content
    const API_BASE_URL = 'https://dummyjson.com';
    
    // DOM Elements
    const postsContainer = document.getElementById('posts-list');
    const todosContainer = document.getElementById('todos-list');
    const errorContainer = document.getElementById('error-container');

    // --- Private Helper Methods ---

    const renderError = (message) => {
        errorContainer.style.display = 'block';
        errorContainer.textContent = `System Error: ${message}`;
        console.error(`[Error Log]: ${message}`);
    };

    const clearContainer = (element) => {
        element.innerHTML = '';
    };

    // Generic Fetch Function
    const fetchData = async (endpoint) => {
        try {
            const response = await fetch(`${API_BASE_URL}${endpoint}`);
            
            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }
            
            return await response.json();
        } catch (error) {
            renderError(error.message);
            return null;
        }
    };

    // --- Rendering Logic ---

    // Task 1: Render Posts
    const displayPosts = (data) => {
        if (!data || !data.posts) return; // Validation for new API structure
        clearContainer(postsContainer);
        
        // Loop through the 'posts' array inside the response object
        data.posts.slice(0, 5).forEach(post => {
            const article = document.createElement('div');
            article.className = 'post-item';
            
            const title = document.createElement('h3');
            title.textContent = post.title;
            
            const body = document.createElement('p');
            body.textContent = post.body;
            
            article.appendChild(title);
            article.appendChild(body);
            postsContainer.appendChild(article);
        });
    };

    // Task 2: Render Todos
    const displayTodos = (data) => {
        if (!data || !data.todos) return; // Validation for new API structure
        clearContainer(todosContainer);
        
        // Loop through the 'todos' array inside the response object
        data.todos.slice(0, 5).forEach(task => {
            const item = document.createElement('div');
            const statusClass = task.completed ? 'completed' : 'pending';
            item.className = `todo-item ${statusClass}`;
            
            const icon = task.completed ? '✔ ' : '⚠ ';
            
            // NOTE: In DummyJSON, the text property is called 'todo', not 'title'
            item.textContent = `${icon} ${task.todo}`;
            
            todosContainer.appendChild(item);
        });
    };

    // --- Main Logic ---
    const initDashboard = async () => {
        console.log('Dashboard Initializing with English Data...');
        
        const [postsData, todosData] = await Promise.all([
            fetchData('/posts'),
            fetchData('/todos')
        ]);

        displayPosts(postsData);
        displayTodos(todosData);
    };

    return {
        init: initDashboard
    };

})();

document.addEventListener('DOMContentLoaded', DashboardModule.init);