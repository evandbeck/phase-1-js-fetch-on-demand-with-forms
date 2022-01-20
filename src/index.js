const init = () => {
    const inputForm = document.querySelector('form');
    inputForm.addEventListener('submit', event => {
        event.preventDefault();
        // console.log(event.target.searchByID.value);
        const input = document.querySelector('input#searchByID');
        console.log(input.value);

        fetch(`http://localhost:3000/movies/${input.value}`)
        .then(resp => resp.json())
        .then(movies => {
            const titles = document.querySelector('section#movieDetails h4');
            const summary = document.querySelector('section#movieDetails p');
            
            titles.innerText = movies.title;
            summary.innerText = movies.summary;
        })
    });
}

document.addEventListener('DOMContentLoaded', init);