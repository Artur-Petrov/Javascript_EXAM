let mainForm = document.forms.mainForm;

// action buttons

let deleteBtn = document.getElementById('delete-Btn');
let sortByName = document.getElementById('sort-By-Name-Btn');
let sortByValue = document.getElementById('sort-By-Value-Btn');

//  for updating List Empty message

const list = document.getElementById('usersOutputList');
const emptyMessage = document.getElementById('emptyMessage');

function updateEmptyState() {
    if (list.children.length === 0) {
        emptyMessage.style.display = 'block';
    } else {
        emptyMessage.style.display = 'none';
    }
}
updateEmptyState();
//=====================================================================

// add button
mainForm.addEventListener('submit', function(e) {
    e.preventDefault();

    try{
        let inputField = mainForm.usersInputField;
        let inputTrim = inputField.value.trim();

        //validation with regular expressions
        let validation = /^[a-zA-Z0-9]+\s*=\s*[a-zA-Z0-9]+$/;

        if (!validation.test(inputTrim)) {
            throw new Error('Invalid input field');
        }
        //splitting for name value
        let splitter = inputTrim.split('=');
        let name = splitter[0].trim();
        let value = splitter[1].trim();

        // creating kist of name value

        let li = document.createElement('li');
        li.innerText = `${name}=${value}`;

        li.addEventListener('click', function() {
            li.classList.toggle('selected');
        })

        list.appendChild(li);

        inputField.value = '';
        updateEmptyState();
    }catch(err){
        console.error(err);
    }
})

// delete button
deleteBtn.addEventListener('click', function() {
    let selectedPair = list.querySelectorAll('.selected');
    if (selectedPair.length === 0) {
        console.log('There is no selected pair');
    }
    for (const item of selectedPair) {
        item.remove();
    }
    updateEmptyState();
})

// sort items by name
sortByName.addEventListener('click', function() {
    let values = Array.from(list.children);

    values.sort(function(a, b) {
        let valueA = a.innerText.split('=')[0].trim();
        let valueB = b.innerText.split('=')[0].trim();

        if(valueA < valueB) {
            return -1;
        } else if (valueA > valueB) {
            return 1;
        }else{
            return 0;
        }
    })
    for (const item of values) {
        list.appendChild(item);
    }
})
// sort items by values
sortByValue.addEventListener('click', function() {
    let values = Array.from(list.children);

    values.sort(function(a, b) {
        let valueA = a.innerText.split('=')[1].trim();
        let valueB = b.innerText.split('=')[1].trim();

        if(valueA < valueB) {
            return -1;
        } else if (valueA > valueB) {
            return 1;
        }else{
            return 0;
        }
    })
    for (const item of values) {
        list.appendChild(item);
    }
})