// Attach event listeners to all "More" buttons
document.querySelectorAll('.moreb').forEach(button => {
    button.addEventListener('click', function () {
        // Find the nearest 'profile-card' container
        const profile = this.closest('.profile-card');
        const trd = this.closest('.trd');
        if (!profile) {
            console.error("Profile container not found!");
            return;
        }
        const expc = profile.querySelector('.expc');
        const exp = profile.querySelector('.exp');
        const next = trd.querySelector('.next');

        if (expc.style.display === "none" || expc.style.display === "") {
            // exp.style.display = "none";    // Hide the '.exp' section
            expc.style.display = "none";  // Show the '.expc' section
            next.style.marginTop = "340px";
            this.textContent = "Less";     // Change button text to "Less"
        } else {
            exp.style.display = "block";   // Show the '.exp' section
            expc.style.display = "block";
            next.style.marginTop = "200px";   // Hide the '.expc' section
            this.textContent = "More";     // Change button text back to "More"
        }
    });
});