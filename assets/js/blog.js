
const dataBlog = []

function addBlog(event) {
    event.preventDefault()

    let title = document.getElementById('titleInput').value;
    let content = document.getElementById('contentInput').value;
    let image = document.getElementById('imageInput').value;

    let blog = {
        title,
        content
    }

    dataBlog.push(blog)

    console.log(dataBlog)

    renderBlog();
}

function renderBlog() {

    document.getElementById('contents')

    for (let i = 0; i < dataBlog.length; i++) {
        document.getElementById('contents').innerHTML += `
        
         <div class="blog-image">
                <img src="https://i.pinimg.com/736x/cd/ad/2b/cdad2b6f18b9b04da9a32dcab058146a.jpg" alt="image here">
            </div>
            <div class="detail">
                <h2 class="title">${dataBlog[i].title}</h2>
                <div class="date-author">21 juli 2024 || Hilman Ganteng</div>
                <div class="content">${dataBlog[i].content}</div>
            </div>
            <div class="button-list">
                <button class="edit btn">Edit</button>
                <button class="delete btn">Delete</button>
            </div>
        
        `
    }
}