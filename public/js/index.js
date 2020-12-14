const container = document.querySelector('.container');
const errorCon = document.querySelector('.error');


fetch('/posts').then(result=>result.json()).then(renderData).catch(handelError)

function renderData(data) {
    console.log(data)
    data.sort((a,b)=>b.id-a.id).forEach(({description:value}) => {
        let description= document.createElement('p');
        description.textContent=value;
        container.appendChild(description) 
    });
}

function handelError(e) {
    console.log(e,111)
    errorCon.textContent=`some error happen ${e}`
}

