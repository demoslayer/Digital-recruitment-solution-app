
    document.getElementById("searchForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form submission
      
      // Get the search parameters
      var location = document.getElementById("locationInput").value;
      var job = document.getElementById("jobSelect").value;
      
      // Perform the search
      searchCandidates(location, job);
    });
    
    function searchCandidates(location, job) {
      // Simulated search results (replace with your own data source)
      var candidates = [
        { name: "Aman", location: "Delhi", job: "Developer" },
        { name: "Rajiv", location: "Delhi", job: "Designer" },
        { name: "Rajiv", location: "Delhi", job: "Manager" },
        { name: "Rajiv", location: "Delhi", job: "HR" },
        { name: "Ayush", location: "Chennai", job: "HR" },
        { name: "Smith", location: "Chennai", job: "Designer" },
        { name: "Smith", location: "Chennai", job: "Developer" },
        { name: "Smith", location: "Chennai", job: "Manager" },
        { name: "Milind", location: "Bangalore", job: "Manager" },
        { name: "Priya", location: "Bangalore", job: "Developer" },
        { name: "Aditya", location: "Bangalore", job: "Developer" },
        { name: "Aditi", location: "Hyderabad", job: "Developer" },
        { name: "Rahul", location: "Hyderabad", job: "Designer" },
        { name: "Santosh", location: "Noida", job: "Designer" },
        { name: "Punit", location: "Noida", job: "Manager" },
        { name: "Punit", location: "Noida", job: "Developer" },
        { name: "Punit", location: "Noida", job: "HR" },
        { name: "Vijay", location: "Pune", job: "Developer" },
        { name: "Vipin", location: "Sydney", job: "HR" }
      ];
      
      // Filter candidates based on search parameters
      var filteredCandidates = candidates.filter(function(candidate) {
        return (candidate.location.toLowerCase() === location.toLowerCase() || location === "") &&
               (candidate.job.toLowerCase() === job.toLowerCase() || job === "");
      });
      
      // Display the search results
      displayResults(filteredCandidates);
    }
    
    function displayResults(candidates) {
      var resultsTable = document.getElementById("resultsTable");
      var tbody = resultsTable.querySelector("tbody");
      
      // Clear previous results
      tbody.innerHTML = "";
      
      // Add rows for each candidate
      candidates.forEach(function(candidate) {
        var row = document.createElement("tr");
        row.innerHTML = "<td>" + candidate.name + "</td><td>" + candidate.location + "</td><td>" + candidate.job + "</td>";
        tbody.appendChild(row);
      });
    }
