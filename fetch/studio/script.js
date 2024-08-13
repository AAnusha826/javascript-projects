//TODO: Add Your Code Below
window.addEventListener('load', function() {
    fetch('https://handlers.education.launchcode.org/static/astronauts.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('container');
            data.forEach(astronaut => {
            // Process the astronaut data here
            const astronautHTML = `
            <div class="astronaut">
                <div class="bio">
                    <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                    <ul>
                        <li>Hours in space: ${astronaut.hoursInSpace}</li>
                        <li>Active: ${astronaut.active}</li>
                        <li>Skills: ${astronaut.skills.join(', ')}</li>
                    </ul>
                </div>
                <img class="avatar" src="${astronaut.picture}">
            </div>
        `;
        // Append the HTML to the container
        container.innerHTML += astronautHTML;
    });
});
        });
