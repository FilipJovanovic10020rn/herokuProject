function init(){
    
    const cookies = document.cookie.split('=')
    const token = cookies[cookies.length - 1]


fetch('http://127.0.0.1:8090/admin/zanrs', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then( res => res.json() )
        .then( data => {
            const lst = document.getElementById('usrLst');
            if(data.msg){
                alert(data.msg);
            }else{
            data.forEach( el => {
                
                lst.innerHTML += `<li>ID: ${el.id}, zanr: ${el.tipZanra}`;
            });
        }
        });

    

document.getElementById('ZanrButton').addEventListener('click', e => {
        e.preventDefault();
        const id = document.getElementById('id').value;

        document.getElementById('usrLst').innerHTML='';
        document.getElementById('id').value ='';
        
            if(id != null || id != 'undefined'){
                fetch('http://127.0.0.1:8090/admin/zanrs/' + id, {
                            headers: {
                                'Authorization': `Bearer ${token}`
                            }
                        })
                            .then( res => res.json() )
                            .then( el => {
                                const lst = document.getElementById('usrLst');
                                    if(id == el.id)
                                    lst.innerHTML += `<li>ID: ${el.id}, zanr: ${el.tipZanra}`;
                            });
                    }
    })

}