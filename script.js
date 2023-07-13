window.addEventListener("DOMContentLoaded",()=>{
  fetchData('https://jsonplaceholder.typicode.com/photos',1);
})

function fetchData(apiUrl,flag) {
  if(flag==1)
  {
    const tableBody = document.querySelector('#dataTable thead');
    tableBody.innerHTML = '';
    const head = document.createElement('tr');
    head.innerHTML = ` <th>ID</th>
    <th>Title</th>
    <th>URL</th>
    <th>Thumbnail URL</th>`;
    tableBody.appendChild(head)
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const tableBody = document.querySelector('#dataTable tbody');
      tableBody.innerHTML = ''; // Clear existing table data

      data.forEach(item => {
        const row = document.createElement("tr");

        row.innerHTML = `<td>${item.id}</td>
        <td>${item.title}</td>
        <td>${item.url}</td>
        <td><img src="${item.thumbnailUrl}" alt="Thumbnail"></td>`;
        tableBody.appendChild(row);
      });
    })
    .catch(error => console.log('Error:', error));}
    if(flag==2)
  {
    const tableBody = document.querySelector('#dataTable thead');
    tableBody.innerHTML = '';
    const head = document.createElement('tr');
    head.innerHTML = `<th>ID</th>
    <th>Name</th>
    <th>Email</th>
    <th>Body</th>`;
    tableBody.appendChild(head)


  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const tableBody = document.querySelector('#dataTable tbody');
      tableBody.innerHTML = ''; // Clear existing table data

      data.forEach(posts => {
        const row = document.createElement("tr");

        row.innerHTML = `<td>${posts.id}</td>
        <td>${posts.name}</td>
        <td>${posts.email}</td>
        <td>${posts.body}</td>`;
        tableBody.appendChild(row);
      });
    })
    .catch(error => console.log('Error:', error));}
}
