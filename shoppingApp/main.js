

const add = document.querySelector('.add-btn');
const list = document.querySelector('.list__main');
const inputAdd = document.querySelector('.list__footer');

add.addEventListener( 'click', () => {
    console.log('시험');

    inputAdd.innerHTML = `
    <input class="input" placeholder="ex) 청바지" />
    <button class="enter">enter</button>
    `
})
