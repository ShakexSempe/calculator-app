
let theme = localStorage.getItem('theme');
let style = document.getElementById('style-mode');
let light = document.getElementById('light-mode');
let dark = document.getElementById('dark-mode');



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
        // console.log(toggle);
        style.classList.add('active');
        light.classList.remove("active"); 
        dark.classList.remove("active"); 
    }
    if(mode == 'light'){
        document.getElementById('theme-style').href = 'css/light.css'
        light.classList.add('active');
        console.log(light);
        style.classList.remove('active');
        dark.classList.remove('active');
    }
    if(mode == 'dark'){
        document.getElementById('theme-style').href = 'css/dark.css'
        light.classList.remove('active');
        style.classList.remove('active');
        dark.classList.add('active');
    }
    localStorage.setItem('theme', mode)
}
