const dataTermItems = document.querySelectorAll('.question');
let activeNode = null;

for (const dataTerm of dataTermItems) {
    dataTerm.addEventListener('click', () => {
        if (dataTerm.classList.contains('active')) {
            deactivate(dataTerm);
            activeNode = null;

            // changing location of box when a question is exapnded or active
            if (document.documentElement.clientWidth > 1024) {
                const boxElement = document.querySelector('.box');
                boxElement.style.left = '-95px';
            }
        } else {
            activate(dataTerm);
            if (activeNode !== null) {
                deactivate(activeNode);
            }
            // This uded to remove 'active' class later if it is inactive
            activeNode = dataTerm;
            if (document.documentElement.clientWidth > 1024) {
                const boxElement = document.querySelector('.box');
                boxElement.style.left = '-135px';
            }
        }
    });
}

function deactivate(node) {
    node.classList.remove('active');

    // removing max-height which is added for transition to work
    const dataDesc = node.nextElementSibling.children[0];
    dataDesc.style.maxHeight = 0;
}

function activate(node) {
    node.classList.add('active');

    // setting max-height for transition to work
    const dataDesc = node.nextElementSibling.children[0];
    dataDesc.style.maxHeight = 'initial';
    dataDesc.style.maxHeight = dataDesc.offsetHeight + 20 + 'px';
}
