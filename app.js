
let theme = localStorage.getItem('theme')

if(theme == null){
    setTheme('light')
}else{
    setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')

for (var i=0; themeDots.length > i; i++){
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode;
        console.log("clicked:", mode);
        
        setTheme(mode);

    })
}

function setTheme(mode){
    if(mode == 'style'){
        document.getElementById('theme-style').href = 'css/style.css';
        let toggle = document.getElementById('style-mode');
        console.log(toggle);
        // toggle.classList.toggle('active');
        // toggle.classList.toggle(".active"); 
    }
    if(mode == 'light'){
        document.getElementById('theme-style').href = 'css/light.css'
    }
    if(mode == 'dark'){
        document.getElementById('theme-style').href = 'css/dark.css'
    }
    localStorage.setItem('theme', mode)
}
