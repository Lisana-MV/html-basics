// # DELETE Method – Delete Data (Fetch API)

// ## Definition

// The **DELETE** method is used to **remove (delete) data from the server or database**. In the Fetch API, we send a DELETE request to the server to remove a specific resource.


// ## Syntax

// ```javascript
fetch(url, {
    method: "DELETE"
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error));

// ## Example

// ```javascript
fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE"
})
.then((response) => {
    if(response.ok){
        console.log("Data deleted successfully");
    }
})
.catch((error) => console.log(error));

// ## Seminar Conclusion

// **DELETE Method** is used to remove existing data from the server or database. It sends a DELETE request through the Fetch API and is commonly used to delete user accounts, posts, products, or other records. ഇത് വെബ് ആപ്ലിക്കേഷനുകളിൽ data remove ചെയ്യാൻ ഉപയോഗിക്കുന്ന വളരെ പ്രധാനപ്പെട്ട HTTP Method ആണ്.
