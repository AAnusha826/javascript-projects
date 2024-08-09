// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', function() {
    // Initialize elements
    const takeOffButton = document.getElementById('takeOff');
    const landButton = document.getElementById('land');
    const abortButton = document.getElementById('abort');
    const upButton = document.getElementById('up');
    const downButton = document.getElementById('down');
    const leftButton = document.getElementById('left');
    const rightButton = document.getElementById('right');
    const flightStatus = document.getElementById('flightStatus');
    const shuttleBackground = document.getElementById('shuttleBackground');
    const shuttleImage = document.getElementById('shuttleImage');
    let shuttleHeight = 0; // Initialize shuttle height

    // Helper function to set position
    function setShuttlePosition(top, left) {
        shuttleImage.style.top = top + 'px';
        shuttleImage.style.left = left + 'px';
    }

    // Helper function to get current position
    function getShuttlePosition() {
        return {
            top: parseInt(shuttleImage.style.top) || 0,
            left: parseInt(shuttleImage.style.left) || 0
        };
    }

    // Take off event
    takeOffButton.addEventListener('click', function() {
        if (confirm('Confirm that the shuttle is ready for takeoff.')) {
            flightStatus.textContent = 'Shuttle in flight.';
            shuttleBackground.style.backgroundColor = 'blue';
            shuttleHeight += 10000;
            console.log('Shuttle height:', shuttleHeight);
        }
    });

    // Land event
    landButton.addEventListener('click', function() {
        alert('The shuttle is landing. Landing gear engaged.');
        flightStatus.textContent = 'The shuttle has landed.';
        shuttleBackground.style.backgroundColor = 'green';
        shuttleHeight = 0;
        console.log('Shuttle height:', shuttleHeight);
    });

    // Abort mission event
    abortButton.addEventListener('click', function() {
        if (confirm('Confirm that you want to abort the mission.')) {
            flightStatus.textContent = 'Mission aborted.';
            shuttleBackground.style.backgroundColor = 'green';
            shuttleHeight = 0;
            console.log('Shuttle height:', shuttleHeight);
        }
    });

    // Up event
    upButton.addEventListener('click', function() {
        let position = getShuttlePosition();
        setShuttlePosition(position.top - 10, position.left);
        shuttleHeight += 10000;
        console.log('Shuttle height:', shuttleHeight);
    });

    // Down event
    downButton.addEventListener('click', function() {
        let position = getShuttlePosition();
        setShuttlePosition(position.top + 10, position.left);
        shuttleHeight -= 10000;
        console.log('Shuttle height:', shuttleHeight);
    });

    // Left event
    leftButton.addEventListener('click', function() {
        let position = getShuttlePosition();
        setShuttlePosition(position.top, position.left - 10);
    });

    // Right event
    rightButton.addEventListener('click', function() {
        let position = getShuttlePosition();
        setShuttlePosition(position.top, position.left + 10);
    });

    // Reset shuttle position on landing or abort
    function resetShuttlePosition() {
        setShuttlePosition(0, 0);
    }
    
    landButton.addEventListener('click', resetShuttlePosition);
    abortButton.addEventListener('click', resetShuttlePosition);
});
