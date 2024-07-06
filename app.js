const images = [
    // ['https://cdn.esawebb.org/archives/images/large/pillarsofcreation_composite.jpg', 'NASA, ESA, CSA, STScI, J. DePasquale (STScI), A. Pagan (STScI), A. M. Koekemoer (STScI)'],
    // ['/carinanebula5.jpg', 'NASA, ESA, CSA, and STScI, J. DePasquale (STScI)'],
    // ['https://cdn.esawebb.org/archives/images/large/potm2208a.jpg', 'ESA/Webb, NASA & CSA, J. Lee and the PHANGS-JWST Team. Acknowledgement: J. Schmidt']
    // ['https://cdn.esawebb.org/archives/images/large/weic2216b.jpg', 'NASA, ESA, CSA, STScI; J. DePasquale, A. Koekemoer, A. Pagan (STScI).']
    ['weic2216b.jpg', 'NASA, ESA, CSA, STScI; J. DePasquale, A. Koekemoer, A. Pagan (STScI).']
];
const idx = Math.floor(Math.random() * images.length)
const image = images[idx][0]
const credit = images[idx][1]

document.getElementById('space-image').style.backgroundImage=`url(${image})`;
document.getElementById('image-credits').innerText="Background image credits: "+credit;
