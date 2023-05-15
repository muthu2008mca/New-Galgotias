const api_url = "https://jsonplaceholder.typicode.com/users"

function getApiData(url){
    fetch(url)
    // .then(res=>res.json())
    // .then(res=>console.log(res))
    // .catch(err=>console.log(err))

    .then(res=>res.json())
    .then(res=>{
        console.log(res)
        displayDataTable(res)
    })
    .catch(err=>console.log(err))
    //console.log(result)
}

getApiData(api_url)

function displayDataTable(apidata)
{
    console.log(apidata)

    for(let i of apidata)
    {
       //dynamic row
       var newRow = document.createElement('tr')

       //dynamic column
       var newtd1 = document.createElement('td')
       var newtd2 = document.createElement('td')
       var newtd3 = document.createElement('td')

       //Assigning Data
       newtd1.innerHTML = `${i.name}`
       newtd2.innerHTML = `${i.email}`
       newtd3.innerHTML = `${i.phone}`

       //Appending column to row
       newRow.appendChild(newtd1)
       newRow.appendChild(newtd2)
       newRow.appendChild(newtd3)
       

       //Appending new row to table body
       document.querySelector('tbody').appendChild(newRow)
    }
}