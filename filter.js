document.addEventListener('DOMContentLoaded', () => {

    const profiles = document.querySelectorAll('.profile-card');
    let selectedLocation = '';
    let selectedCategory = '';
    let selectedSalaryOrder = '';

    // Function to get URL parameters
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    // Automatically filter based on URL parameter
    function autoFilter() {
        const categoryFromURL = getQueryParam('category');
        if (categoryFromURL) {
            selectedCategory = categoryFromURL;
            filterProfiles(); // Trigger the filtering
        }
    }

    // Function to filter profiles
    function filterProfiles() {
        profiles.forEach(profile => {
            const profileLocation = profile.dataset.location;
            const profileCategory = profile.dataset.category;
            const profileSalary = parseInt(profile.dataset.salary, 10);

            // Check location, category, and salary filtering
            const matchLocation = selectedLocation === '' || profileLocation === selectedLocation;
            const matchCategory = selectedCategory === '' || profileCategory === selectedCategory;

            if (matchLocation && matchCategory) {
                profile.style.display = '';
            } else {
                profile.style.display = 'none';
            }
        });

        if (selectedSalaryOrder) {
            sortProfilesBySalary(selectedSalaryOrder);
        }
    }

    // Sort profiles based on salary
    function sortProfilesBySalary(order) {
        const container = document.getElementById('profiles');
        const sortedProfiles = [...profiles].sort((a, b) => {
            const salaryA = parseInt(a.dataset.salary, 10);
            const salaryB = parseInt(b.dataset.salary, 10);

            return order === 'asc' ? salaryA - salaryB : salaryB - salaryA;
        });

        // Append sorted profiles back to container
        sortedProfiles.forEach(profile => container.appendChild(profile));
    }

    // Event listeners for Location Dropdown
    document.querySelectorAll('.dropdown-content a[data-location]').forEach(item => {
        item.addEventListener('click', event => {
            event.preventDefault();
            selectedLocation = event.target.dataset.location;
            filterProfiles();
        });
    });

    // Event listeners for Salary Dropdown
    document.querySelectorAll('.dropdown-content a[data-salary]').forEach(item => {
        item.addEventListener('click', event => {
            event.preventDefault();
            selectedSalaryOrder = event.target.dataset.salary;
            filterProfiles();
        });
    });

    // Event listeners for Categories Dropdown
    document.querySelectorAll('.dropdown-content a[data-category]').forEach(item => {
        item.addEventListener('click', event => {
            event.preventDefault();
            selectedCategory = event.target.dataset.category;
            filterProfiles();
        });
    });

    // Call autoFilter when page loads to check if there's a category passed in the URL
    autoFilter();
});
