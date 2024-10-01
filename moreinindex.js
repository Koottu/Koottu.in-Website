document.querySelectorAll('.moreb').forEach(button => {
    button.addEventListener('click', function () {
        // Store the clicked button and its context
        const clickedProfile = this.closest('.profile-card');
        const trd = this.closest('.trd');
        const next = trd.querySelector('.next');

        // Determine the height based on screen width
        const isMobile = window.innerWidth <= 768; // Assuming mobile view for width <= 768px
        const collapsedHeight = isMobile ? "200px" : "280px"; // Different heights for mobile/desktop

        // Collapse all other cards back to initial height
        document.querySelectorAll('.profile-card').forEach(card => {
            const expc = card.querySelector('.expc');
            const exp = card.querySelector('.exp');
            const moreb = card.querySelector('.moreb');

            // If expc and exp exist, reset them (only if it's not the clicked card)
            if (card !== clickedProfile && expc && exp) {
                exp.style.display = "block";   // Show the '.exp' section
                expc.style.display = "none";   // Hide the '.expc' section
                card.style.height = collapsedHeight;   // Reset height based on screen width
                moreb.textContent = "More";    // Reset the "More" button text
            }
        });

        // Expand or collapse the clicked card
        const expc = clickedProfile.querySelector('.expc');
        const exp = clickedProfile.querySelector('.exp');

        if (expc.style.display === "none" || expc.style.display === "") {
            // Expand: show expc, hide exp, change height to auto, change button text
            exp.style.display = "none";        // Hide the '.exp' section
            expc.style.display = "block";      // Show the '.expc' section
            clickedProfile.style.height = "auto";     // Expand the clicked card's height
            next.style.marginTop = "340px";
            this.textContent = "Less";         // Change button text to "Less"
        } else {
            // Collapse: show exp, hide expc, reset height based on screen width, reset button text
            exp.style.display = "block";       // Show the '.exp' section
            expc.style.display = "none";       // Hide the '.expc' section
            clickedProfile.style.height = collapsedHeight;    // Collapse card back to height based on screen width
            next.style.marginTop = "215px";
            this.textContent = "More";         // Change button text back to "More"
        }
    });
});
