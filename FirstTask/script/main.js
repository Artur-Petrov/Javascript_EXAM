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