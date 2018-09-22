// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const fs = require('fs');


(function () {

    const holder = document.getElementById('drag-file');
    const dropDown = document.getElementById('subtitle-dropdown');
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

    holder.ondrop = (files) => {
        files.preventDefault();
        console.log(selectedOption);
        for (let file of files.dataTransfer.files) {
            const changed = file.path.replace(selectedOption, '');
            fs.rename(file.path, changed,()=>{

            });
        }
        return false;
    };
})();

