function fetchJsonData() {
    fetch("/api/example.json")
        .then(response => response.json())
        .then(data => {
            document.getElementById("lastname").innerText =
                data['person_details']['lastname']
            console.log(" person_details:", data['person_details']['lastname'])

            // console.log("JSON Data:", data)



        })
        .catch(error => console.error("Error fetching JSON:", error));
}

fetchJsonData();

