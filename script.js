let show = false;

let list = document.getElementById("list");


function showHide(e){
    console.log(e)

        if(show){show = false;
            list.style.display = 'none';
            e.inneHTML = "show";}

            else{show = true; list.style.display = 'block';
                e.inneHTML = 'hide';
            }
        
}