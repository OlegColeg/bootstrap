let i=0;

document.getElementById('btn_tea').addEventListener('click', function () {

    if(i==0){
        document.getElementById('tea_list').style.display = '';
        i=1;
    }
    else{
        document.getElementById('tea_list').style.display = 'none';
        i=0;
    }
})
document.getElementById('btn_tea').addEventListener('click', function () {
    document.getElementById('tea_list').scrollIntoView();
})