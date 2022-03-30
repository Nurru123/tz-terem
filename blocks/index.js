
//Как бы я это сделала без bootstrap
// const btnOne = document.querySelector('.btn-warning');
// btnOne.addEventListener('click', () => {
//         const firstRow = document.getElementById('first-row');
//         firstRow.classList.toggle('first-row_hidden');
//     })
    
const btnTwo = document.querySelector('.btn-success');
btnTwo.addEventListener('click', () => {
    const blockToChange = document.querySelector('.col-to-change');
    blockToChange.classList.toggle('col_new-order');
})

const modal = new bootstrap.Modal(document.querySelector('#modal'));
modal.show();