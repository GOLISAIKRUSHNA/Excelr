let draggedBox = null;

document.addEventListener('dragstart', function(event) {
    draggedBox = event.target;
    event.dataTransfer.setData('text/plain', event.target.id);
});

document.addEventListener('dragover', function(event) {
    event.preventDefault();
    if (event.target.classList.contains('box')) {
        event.target.classList.add('drag-over');
    }
});

document.addEventListener('dragleave', function(event) {
    if (event.target.classList.contains('box')) {
        event.target.classList.remove('drag-over');
    }
});

document.addEventListener('drop', function(event) {
    event.preventDefault();
    if (event.target.classList.contains('box')) {
        event.target.classList.remove('drag-over');
        const id = event.dataTransfer.getData('text/plain');
        const sourceBox = document.getElementById(id);
        if (sourceBox !== event.target) {
            const sourceText = sourceBox.textContent;
            sourceBox.textContent = event.target.textContent;
            event.target.textContent = sourceText;
        }
    }
});
