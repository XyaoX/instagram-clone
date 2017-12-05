var photos = [
    {
        id:1,
        href:'#',
        class:'photo1',
        url:'url("https://instagram.fatl1-1.fna.fbcdn.net/t51.2885-15/sh0.08/e35/p640x640/24177764_916486225183446_6246844728747229184_n.jpg") no-repeat center',
        size:'310px 290px'
    },
    {
        id:2,
        href:'#',
        class:'photo2',
        url:'url("https://instagram.fatl1-1.fna.fbcdn.net/t51.2885-15/e35/23667686_1763075923986284_886638123574886400_n.jpg") no-repeat center',
        size:'310px 290px'
    },
    {
        id:3,
        href:'#',
        class:'photo3',
        url:'url("https://instagram.fatl1-1.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/23507364_1468033869990382_8382904420869865472_n.jpg") no-repeat center',
        size:'310px 290px'
    },
    {
        id:4,
        href:'#',
        class:'photo4',
        url:'url("https://instagram.fatl1-1.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/23596580_369278913495544_6278697095272595456_n.jpg ") no-repeat center',
        size:'310px 290px'
    },
    {
        id:5,
        href:'#',
        class:'photo5',
        url:'url("https://instagram.fatl1-1.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/23422002_145389932761206_56173009680990208_n.jpg") no-repeat center',
        size:'310px 290px'
    },
    {
        id:6,
        href:'#',
        class:'photo6',
        url:'url("https://instagram.fatl1-1.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/22802179_500841100299134_3818860301403553792_n.jpg") no-repeat center',
        size:'310px 290px'
    },
    {
        id:7,
        href:'#',
        class:'photo7',
        url:'url("https://instagram.fatl1-1.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/21576433_1271617656277439_5911603757992378368_n.jpg") no-repeat center',
        size:'310px 290px'
    }

    
];

var post = ["1862 posts","539k followers","110 following"]; 
var li = document.querySelectorAll('.num'),t;

for (let t=0; t<post.length;t++){
    li[t].innerHTML = post[t];
}


post.forEach(function (num){
    var element = document.querySelectorAll('.num');
    element.textContent = num;
})


var target = document.querySelector('#users-photos');
var close = document.querySelector('.show-pic');

close.addEventListener('click',function(event){
    event.preventDefault();
    close.style.display = "none";
})

// var open = document.querySelectorAll('.row > a');

// open.forEach(function (nav){
//     nav.addEventListener('click', function (fun){
//         fun.preventDefault();
//         close.style.display = "block";
//     })
// })





for (let i=0; i<photos.length;i++){
    if (photos[i].id%3===1){
        var parent = document.createElement('div');
        parent.className = "row";
        target.appendChild(parent);
        var anchor = document.createElement('a');
        anchor.setAttribute('href',photos[i].href);
        anchor.className = photos[i].class;
        anchor.style.background = photos[i].url;
        anchor.style.backgroundSize = photos[i].size;
        parent.appendChild(anchor);
    }
    else {
        var anchor = document.createElement('a');
        anchor.setAttribute('href',photos[i].href);
        anchor.className = photos[i].class;
        anchor.style.background = photos[i].url;
        anchor.style.backgroundSize = photos[i].size;
        parent.appendChild(anchor);
        
    }
}

