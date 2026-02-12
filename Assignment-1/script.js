function addEvent() {
    const title = document.getElementById("title").value;
    const date = document.getElementById("date").value;
    const category = document.getElementById("category").value;
    const description = document.getElementById("description").value;

    if (!title || !date) {
        alert("Please fill required fields");
        return;
    }

    const eventDiv = document.createElement("div");
    eventDiv.classList.add("event-item");
    eventDiv.innerHTML = `
        <strong>${title}</strong><br>
        📅 ${date}<br>
        🏷 ${category}<br>
        <p>${description}</p>
    `;

    document.getElementById("eventList").appendChild(eventDiv);

    document.getElementById("title").value = "";
    document.getElementById("date").value = "";
    document.getElementById("description").value = "";
}

function clearEvents() {
    document.getElementById("eventList").innerHTML = "";
}

function addSampleEvents() {
    const samples = [
        {title: "AI Conference", date: "2026-03-20", category: "Conference"},
        {title: "Web Dev Workshop", date: "2026-04-05", category: "Workshop"}
    ];

    samples.forEach(event => {
        const eventDiv = document.createElement("div");
        eventDiv.classList.add("event-item");
        eventDiv.innerHTML = `
            <strong>${event.title}</strong><br>
            📅 ${event.date}<br>
            🏷 ${event.category}
        `;
        document.getElementById("eventList").appendChild(eventDiv);
    });
}

document.addEventListener("keydown", function() {
    const demoText = document.getElementById("demoText");
    demoText.style.color = "blue";
    demoText.style.fontWeight = "bold";
    demoText.textContent = "The DOM has been manipulated!";
});