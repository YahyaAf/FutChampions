let data = JSON.parse(localStorage.getItem('object')) || [];


// Display tasks
const ReadAll = () => {
    data = JSON.parse(localStorage.getItem('object')) || []; 

    const changement = document.getElementById('changement');
    
    
    // Clear current task displays
    let elementsTodo = "", elementsDoing = "", elementsDone = "";
    
    data.forEach((tasks, index) => {
        let taskHTML = `
            
        `;
    
});
}
const Add = (event) => {
        event.preventDefault();

        // name
        const name = document.getElementById('name').value;
        // image
        const inputPhotosUrl = document.querySelector("#photo").files[0];
        const inputPhoto = URL.createObjectURL(inputPhotosUrl);
        // position
        const position = document.getElementById('position').value;
        // Nationality
        const nationality = document.getElementById('nationality').value;
        // image
        const inputFlagsUrl = document.querySelector("#flag").files[0];
        const inputFlag = URL.createObjectURL(inputFlagsUrl);
        // club
        const club = document.getElementById('club').value;
        // logo
        const inputLogosUrl = document.querySelector("#logo").files[0];
        const inputLogo = URL.createObjectURL(inputLogosUrl);
        // Player Rating
        const ratingPlayer = document.getElementById('ratingPlayer').value;
        const pac = document.getElementById('pace').value;
        const sho = document.getElementById('shooting').value;
        const ps = document.getElementById('passing').value;
        const dri = document.getElementById('dribbling').value;
        const def = document.getElementById('defending').value;
        const phy = document.getElementById('physical').value;
        // Gk Rating
        const ratingGk = document.getElementById('ratingGk').value;
        const div = document.getElementById('diving').value;
        const han = document.getElementById('handling').value;
        const kic = document.getElementById('kicking').value;
        const ref = document.getElementById('reflexes').value;
        const sp = document.getElementById('speed').value;
        const pos = document.getElementById('positioning').value;
        
        
        console.log(name)
        console.log(position)
        console.log(nationality)
        console.log(club)
        console.log(ratingGk)
        console.log(div)
        console.log(han)
        console.log(kic)
        console.log(ref)
        console.log(sp)
        console.log(pos)
        

        // var newObj = {
        //     title: titleN,
        //     date: dateN,
        //     description: descriptionN,
        //     level: levelN,
        //     action: actionN,
        //     type: typeN
        // };

        // data.push(newObj);

        
        // localStorage.setItem('object', JSON.stringify(data));

      
};