  document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            alert("Right-click is disabled on this page.");
        });

        // Disable keyboard shortcuts and alert the user
        function disableKeys(e) {
            // Disable F12 (Dev Tools), Ctrl+Shift+I, Ctrl+U, Ctrl+S
            if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey && e.keyCode === 73) || (e.ctrlKey && e.keyCode === 85) || (e.ctrlKey && e.keyCode === 83)) {
                e.preventDefault();
                alert("Developer tools are disabled on this page.");
            }
        }

        // Your existing JavaScript code for functionality
