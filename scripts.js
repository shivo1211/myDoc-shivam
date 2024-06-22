document.addEventListener('DOMContentLoaded', function () {
    const fileList = [
        { name: 'Aadhaar Card', url: 'resorce/Aadhaar Card - (SHIVAM SURESH GUPTA).pdf' },
        { name: 'PAN Card', url: 'resorce/Pan Card - (SHIVAM SURESH GUPTA).pdf' },
        { name: 'Voter Card', url: 'resorce/SHIVAM SURESH GUPTA e-EPIC_NLF6850549.pdf' }
    ];

    const fileListElement = document.getElementById('file-list');

    fileList.forEach(file => {
        const listItem = document.createElement('li');

        const fileName = document.createElement('span');
        fileName.textContent = file.name;
        listItem.appendChild(fileName);

        const viewButton = document.createElement('button');
        viewButton.textContent = 'View';
        viewButton.onclick = () => {
            window.open(file.url, '_blank');
        };
        listItem.appendChild(viewButton);

        const downloadButton = document.createElement('button');
        downloadButton.textContent = 'Download';
        downloadButton.onclick = () => {
            const link = document.createElement('a');
            link.href = file.url;
            link.download = file.name;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        };
        listItem.appendChild(downloadButton);

        fileListElement.appendChild(listItem);
    });
});
