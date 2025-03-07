document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    // alert("Right-click is disabled on this page.");
});

// Disable keyboard shortcuts and alert the user
let alertShown = false; // Flag to track if alert has been shown
const disableDuration = 3000; // Duration to disable keys (in milliseconds)

document.addEventListener('keydown', function(e) {
    // Disable F12 (Dev Tools), Ctrl+Shift+I, Ctrl+U, Ctrl+S
    if (e.key === "F12" || 
        (e.ctrlKey && e.shiftKey && e.key === "I") || 
        (e.ctrlKey && e.key === "U") || 
        (e.ctrlKey && e.key === "S")) {
        
        if (!alertShown) {
            alertShown = true; // Set the flag to true
            // alert("Developer tools are disabled on this page.");
            
            // Disable further key presses for a short duration
            setTimeout(() => {
                alertShown = false; // Reset the flag after the duration
            }, disableDuration);
        }
        
        e.preventDefault(); // Prevent the default action
    }
});

