document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });

        // Disable keyboard shortcuts
        function disableKeys(e) {
            // Disable F12 (Dev Tools), Ctrl+Shift+I, Ctrl+U, Ctrl+S
            if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey && e.keyCode === 73) || (e.ctrlKey && e.keyCode === 85) || (e.ctrlKey && e.keyCode === 83)) {
                e.preventDefault();
            }
        }
