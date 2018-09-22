// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const fs = require('fs');



(function () {
    const holder = document.getElementById('drag-file');
    const dropDown= document.getElementById('subtitle-dropdown');
    const selectedOption = dropDown.options[dropDown.selectedIndex].value;

    holder.ondragover = () => {
        return false;
    };

    holder.ondragleave = () => {
        return false;
    };

    holder.ondragend = () => {
        return false;
    };

    holder.ondrop = (e) => {
        e.preventDefault();
        console.log(selectedOption);
        for (let f of e.dataTransfer.files) {
            const changed = f.path.replace(selectedOption, '');
            fs.rename(f.path, changed, (err) => {
            });
        }
        return false;
    };
})();

