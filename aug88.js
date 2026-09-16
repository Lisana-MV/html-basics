// Loading states - data is being fetched , Process is running
// Usually displayed using spinner , loading text, progress bar

// basic fetch
fetch("https://jsonplaceholder.typicode.com/users")

.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
});

// adding loading state

fetch("https://jsonplaceholder.typicode.com/users")

.then((response)=>{
    return response.json();
})
.then((data)=>{
    document.getElementById("status").textContent = "Data Loaded";
    console.log(data);
});

// spinner example

fetch("https://jsonplaceholder.typicode.com//posts")

.then((response)=>{
    document.getElementById("spinner").style.display = "none";
    console.log(data);
});

// error handling with catch()

fetch("wrong-url")

.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log("Error occurred");
});

// showing error messege in UI

fetch("wrong-url")

.then((response)=>{
    return response.json();
})
.catch((error)=>{
    document.getElementById("messege").textContent = "Failed to load data";
});

// loading + error together

fetch("https:///jsonplaceholder.typicode.com/users")

.then((response)=>{
    if(response.ok){
        throw new error("Request failed");
    }
    return response.json();
})
.then((data)=>{
    document.getElementById("loading").style.display = "none";
    console.log(data);
})
.catch((error)=>{
    document.getElementById("loading").style.display = "none";
    document.getElementById("error").textcontent = "Failed to load data";
});