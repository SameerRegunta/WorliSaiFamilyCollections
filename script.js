document.addEventListener("DOMContentLoaded", function () {
    const eventsContainer = document.getElementById("eventGrid");
    const yearFilter = document.getElementById("yearFilter");
    const monthFilter = document.getElementById("monthFilter");
    const searchInput = document.getElementById("search");
    const clearFiltersBtn = document.getElementById("clearFilters");
    const prevPageBtn = document.getElementById("prevPage");
    const nextPageBtn = document.getElementById("nextPage");
    const pageNumberDisplay = document.getElementById("pageNumber");

    let currentPage = 1;
    const eventsPerPage = 20; // Adjust the number of events per page

    // Events Data
    const events = [
        { title: "Gayatri Havan at the residence of Shri Pothu Sudarshan Garu", year: "2025", month: "01", image: "gayatridevi.jpg", link: "https://photos.app.goo.gl/AHZgPBvEhop9j79n7" },
        { title: "Narayan Seva", year: "2025", month: "01", image: "Narayan.jpg", link: "https://photos.app.goo.gl/1MbPTnCDHJCtcAGh6" },
        { title: "Ekadasha Rudrabhishekam", year: "2025", month: "02", image: "ekadasharudram.jpg", link: "https://photos.app.goo.gl/5JqQ6PhmQ9jco3qu9" },
        { title: "Narayan Seva", year: "2025", month: "02", image: "Narayan.jpg", link: "https://photos.app.goo.gl/gUPGrDNuoavw4nod9" },
        { title: "Gayatri Havan at Smt Indira Gone’s residence", year: "2025", month: "02", image: "gayatridevi.jpg", link: "https://photos.app.goo.gl/jtH9Ng4vtfBimXEeA" },
        { title: "Residential Bhajans at Balvikas child – Sriyan Siripuram", year: "2025", month: "02", image: "saibhajan.jpg", link: "https://photos.app.goo.gl/4vF6YofH6ZTvhFH78" },
        { title: "Gayatri Havan at the residence of Shri Pothu Sudarshan Garu", year: "2025", month: "01", image: "gayatridevi.jpg", link: "https://photos.app.goo.gl/AHZgPBvEhop9j79n7" },
        { title: "Narayan Seva", year: "2025", month: "01", image: "Narayan.jpg", link: "https://photos.app.goo.gl/1MbPTnCDHJCtcAGh6" },
        { title: "Ekadasha Rudrabhishekam", year: "2025", month: "02", image: "ekadasharudram.jpg", link: "https://photos.app.goo.gl/5JqQ6PhmQ9jco3qu9" },
        { title: "Narayan Seva", year: "2025", month: "02", image: "Narayan.jpg", link: "https://photos.app.goo.gl/gUPGrDNuoavw4nod9" },
        { title: "Gayatri Havan at Smt Indira Gone’s residence", year: "2025", month: "02", image: "gayatridevi.jpg", link: "https://photos.app.goo.gl/jtH9Ng4vtfBimXEeA" },
        { title: "Residential Bhajans at Balvikas child – Sriyan Siripuram", year: "2025", month: "02", image: "saibhajan.jpg", link: "https://photos.app.goo.gl/4vF6YofH6ZTvhFH78" },
        { title: "Gayatri Havan at the residence of Shri Pothu Sudarshan Garu", year: "2025", month: "01", image: "gayatridevi.jpg", link: "https://photos.app.goo.gl/AHZgPBvEhop9j79n7" },
        { title: "Narayan Seva", year: "2025", month: "01", image: "Narayan.jpg", link: "https://photos.app.goo.gl/1MbPTnCDHJCtcAGh6" },
        { title: "Ekadasha Rudrabhishekam", year: "2025", month: "02", image: "ekadasharudram.jpg", link: "https://photos.app.goo.gl/5JqQ6PhmQ9jco3qu9" },
        { title: "Narayan Seva", year: "2025", month: "02", image: "Narayan.jpg", link: "https://photos.app.goo.gl/gUPGrDNuoavw4nod9" },
        { title: "Gayatri Havan at Smt Indira Gone’s residence", year: "2025", month: "02", image: "gayatridevi.jpg", link: "https://photos.app.goo.gl/jtH9Ng4vtfBimXEeA" },
        { title: "Residential Bhajans at Balvikas child – Sriyan Siripuram", year: "2025", month: "02", image: "saibhajan.jpg", link: "https://photos.app.goo.gl/4vF6YofH6ZTvhFH78" },
        { title: "Gayatri Havan at the residence of Shri Pothu Sudarshan Garu", year: "2025", month: "01", image: "gayatridevi.jpg", link: "https://photos.app.goo.gl/AHZgPBvEhop9j79n7" },
        { title: "Narayan Seva", year: "2025", month: "01", image: "Narayan.jpg", link: "https://photos.app.goo.gl/1MbPTnCDHJCtcAGh6" },
        { title: "Ekadasha Rudrabhishekam", year: "2025", month: "02", image: "ekadasharudram.jpg", link: "https://photos.app.goo.gl/5JqQ6PhmQ9jco3qu9" },
        { title: "Narayan Seva", year: "2025", month: "02", image: "Narayan.jpg", link: "https://photos.app.goo.gl/gUPGrDNuoavw4nod9" },
        { title: "Gayatri Havan at Smt Indira Gone’s residence", year: "2025", month: "02", image: "gayatridevi.jpg", link: "https://photos.app.goo.gl/jtH9Ng4vtfBimXEeA" },
        { title: "Residential Bhajans at Balvikas child – Sriyan Siripuram", year: "2025", month: "02", image: "saibhajan.jpg", link: "https://photos.app.goo.gl/4vF6YofH6ZTvhFH78" },
        { title: "Gayatri Havan at the residence of Shri Pothu Sudarshan Garu", year: "2025", month: "01", image: "gayatridevi.jpg", link: "https://photos.app.goo.gl/AHZgPBvEhop9j79n7" },
        { title: "Narayan Seva", year: "2025", month: "01", image: "Narayan.jpg", link: "https://photos.app.goo.gl/1MbPTnCDHJCtcAGh6" },
        { title: "Ekadasha Rudrabhishekam", year: "2025", month: "02", image: "ekadasharudram.jpg", link: "https://photos.app.goo.gl/5JqQ6PhmQ9jco3qu9" },
        { title: "Narayan Seva", year: "2025", month: "02", image: "Narayan.jpg", link: "https://photos.app.goo.gl/gUPGrDNuoavw4nod9" },
        { title: "Gayatri Havan at Smt Indira Gone’s residence", year: "2025", month: "02", image: "gayatridevi.jpg", link: "https://photos.app.goo.gl/jtH9Ng4vtfBimXEeA" },
        { title: "Residential Bhajans at Balvikas child – Sriyan Siripuram", year: "2025", month: "02", image: "saibhajan.jpg", link: "https://photos.app.goo.gl/4vF6YofH6ZTvhFH78" },
        { title: "Gayatri Havan at the residence of Shri Pothu Sudarshan Garu", year: "2025", month: "01", image: "gayatridevi.jpg", link: "https://photos.app.goo.gl/AHZgPBvEhop9j79n7" },
        { title: "Narayan Seva", year: "2025", month: "01", image: "Narayan.jpg", link: "https://photos.app.goo.gl/1MbPTnCDHJCtcAGh6" },
        { title: "Ekadasha Rudrabhishekam", year: "2025", month: "02", image: "ekadasharudram.jpg", link: "https://photos.app.goo.gl/5JqQ6PhmQ9jco3qu9" },
        { title: "Narayan Seva", year: "2025", month: "02", image: "Narayan.jpg", link: "https://photos.app.goo.gl/gUPGrDNuoavw4nod9" },
        { title: "Gayatri Havan at Smt Indira Gone’s residence", year: "2025", month: "02", image: "gayatridevi.jpg", link: "https://photos.app.goo.gl/jtH9Ng4vtfBimXEeA" },
        { title: "Residential Bhajans at Balvikas child – Sriyan Siripuram", year: "2025", month: "02", image: "saibhajan.jpg", link: "https://photos.app.goo.gl/4vF6YofH6ZTvhFH78" },
        { title: "Gayatri Havan at the residence of Shri Pothu Sudarshan Garu", year: "2025", month: "01", image: "gayatridevi.jpg", link: "https://photos.app.goo.gl/AHZgPBvEhop9j79n7" },
        { title: "Narayan Seva", year: "2025", month: "01", image: "Narayan.jpg", link: "https://photos.app.goo.gl/1MbPTnCDHJCtcAGh6" },
        { title: "Ekadasha Rudrabhishekam", year: "2025", month: "02", image: "ekadasharudram.jpg", link: "https://photos.app.goo.gl/5JqQ6PhmQ9jco3qu9" },
        { title: "Narayan Seva", year: "2025", month: "02", image: "Narayan.jpg", link: "https://photos.app.goo.gl/gUPGrDNuoavw4nod9" },
        { title: "Gayatri Havan at Smt Indira Gone’s residence", year: "2025", month: "02", image: "gayatridevi.jpg", link: "https://photos.app.goo.gl/jtH9Ng4vtfBimXEeA" },
        { title: "Residential Bhajans at Balvikas child – Sriyan Siripuram", year: "2025", month: "02", image: "saibhajan.jpg", link: "https://photos.app.goo.gl/4vF6YofH6ZTvhFH78" },
        { title: "Gayatri Havan at the residence of Shri Pothu Sudarshan Garu", year: "2025", month: "01", image: "gayatridevi.jpg", link: "https://photos.app.goo.gl/AHZgPBvEhop9j79n7" },
        { title: "Narayan Seva", year: "2025", month: "01", image: "Narayan.jpg", link: "https://photos.app.goo.gl/1MbPTnCDHJCtcAGh6" },
        { title: "Ekadasha Rudrabhishekam", year: "2025", month: "02", image: "ekadasharudram.jpg", link: "https://photos.app.goo.gl/5JqQ6PhmQ9jco3qu9" },
        { title: "Narayan Seva", year: "2025", month: "02", image: "Narayan.jpg", link: "https://photos.app.goo.gl/gUPGrDNuoavw4nod9" },
        { title: "Gayatri Havan at Smt Indira Gone’s residence", year: "2025", month: "02", image: "gayatridevi.jpg", link: "https://photos.app.goo.gl/jtH9Ng4vtfBimXEeA" },
        { title: "Residential Bhajans at Balvikas child – Sriyan Siripuram", year: "2025", month: "02", image: "saibhajan.jpg", link: "https://photos.app.goo.gl/4vF6YofH6ZTvhFH78" },
        { title: "Gayatri Havan at the residence of Shri Pothu Sudarshan Garu", year: "2025", month: "01", image: "gayatridevi.jpg", link: "https://photos.app.goo.gl/AHZgPBvEhop9j79n7" },
        { title: "Narayan Seva", year: "2025", month: "01", image: "Narayan.jpg", link: "https://photos.app.goo.gl/1MbPTnCDHJCtcAGh6" },
        { title: "Ekadasha Rudrabhishekam", year: "2025", month: "02", image: "ekadasharudram.jpg", link: "https://photos.app.goo.gl/5JqQ6PhmQ9jco3qu9" },
        { title: "Narayan Seva", year: "2025", month: "02", image: "Narayan.jpg", link: "https://photos.app.goo.gl/gUPGrDNuoavw4nod9" },
        { title: "Gayatri Havan at Smt Indira Gone’s residence", year: "2025", month: "02", image: "gayatridevi.jpg", link: "https://photos.app.goo.gl/jtH9Ng4vtfBimXEeA" },
        { title: "Residential Bhajans at Balvikas child – Sriyan Siripuram", year: "2025", month: "02", image: "saibhajan.jpg", link: "https://photos.app.goo.gl/4vF6YofH6ZTvhFH78" },
    ];

    function displayEvents(filteredEvents) {
        eventsContainer.innerHTML = ""; // Clear previous events

        // Pagination Logic
        const startIndex = (currentPage - 1) * eventsPerPage;
        const paginatedEvents = filteredEvents.slice(startIndex, startIndex + eventsPerPage);

        // Display events
        paginatedEvents.forEach(event => {
            const card = document.createElement("a");
            card.href = event.link;
            card.target = "_blank";
            card.classList.add("card");

            card.innerHTML = `
                <img src="${event.image}" alt="${event.title}">
                <h3>${event.title}</h3>
            `;

            eventsContainer.appendChild(card);
        });

        // Update Pagination UI
        updatePaginationUI(filteredEvents);
    }

    function updatePaginationUI(filteredEvents) {
        const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);

        pageNumberDisplay.textContent = `Page ${currentPage} of ${totalPages}`;

        prevPageBtn.style.display = currentPage > 1 ? "block" : "none";
        nextPageBtn.style.display = currentPage < totalPages ? "block" : "none";
    }

    function changePage(direction) {
        const filteredEvents = getFilteredEvents();
        const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);

        if ((direction === -1 && currentPage > 1) || (direction === 1 && currentPage < totalPages)) {
            currentPage += direction;
            displayEvents(filteredEvents);
        }
    }

    function getFilteredEvents() {
        return events.filter(event => {
            return (
                (yearFilter.value === "" || event.year === yearFilter.value) &&
                (monthFilter.value === "" || event.month === monthFilter.value) &&
                (searchInput.value === "" || event.title.toLowerCase().includes(searchInput.value.toLowerCase()))
            );
        });
    }

    function filterCards() {
        currentPage = 1; // Reset to first page when filtering
        displayEvents(getFilteredEvents());
    }

    function clearFilters() {
        yearFilter.value = "";
        monthFilter.value = "";
        searchInput.value = "";
        currentPage = 1; // Reset to first page
        displayEvents(events);
    }

    // Attach event listeners
    yearFilter.addEventListener("change", filterCards);
    monthFilter.addEventListener("change", filterCards);
    searchInput.addEventListener("input", filterCards);
    clearFiltersBtn.addEventListener("click", clearFilters);
    prevPageBtn.addEventListener("click", () => changePage(-1));
    nextPageBtn.addEventListener("click", () => changePage(1));

    // Initial Load
    displayEvents(events);
});
