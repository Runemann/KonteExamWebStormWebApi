
async function fetchWorkspaceData() {
    try {
        const response = await fetch('/workspace');  // Assuming '/workspace' is the endpoint you've set up.
        const data = await response.json();

        renderWorkspaceData(data);
    } catch (err) {
        console.error('Error fetching workspace data:', err);
    }
}

function renderWorkspaceData(data) {
    const container = document.getElementById('workspaceContainer');
    container.innerHTML = '';

    data.forEach(person => {
        const personElement = document.createElement('div');
        personElement.innerHTML = `
            <h2>${person.name}</h2>
            <p>${person.occupation}</p>
        `;
        container.appendChild(personElement);
    });
}

document.getElementById('searchBar').addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const people = document.querySelectorAll('#workspaceContainer div');

    people.forEach(person => {
        const name = person.querySelector('h2').textContent.toLowerCase();
        if (name.includes(query)) {
            person.style.display = 'block';
        } else {
            person.style.display = 'none';
        }
    });
});


window.addEventListener('DOMContentLoaded', fetchWorkspaceData);
