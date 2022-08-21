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
                
                lst.innerHTML += `<li>ID: ${el.id}, Zanr: ${el.tipZanra}`;
            });
        }
        });
        
document.getElementById('izmeniUsera').addEventListener('click', e => {
            e.preventDefault();
    
            
            

            const data = {
                tipZanra: document.getElementById('tipZanra').value,
                FilmId: document.getElementById('FilmId').value
            };
            
            
    
    
                fetch('http://127.0.0.1:8090/admin/zanrs/'+ document.getElementById('id').value, {
                    method: 'PUT',
                    headers: { 
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify(data)
                })
                
                    .then( res => res.json() )
                    .then( el => {
                        if (el.msg) {
                            alert(el.msg);
                        } else {
                            document.getElementById('id').value='';
                            document.getElementById('tipZanra').value='';
                            document.getElementById('FilmId').value='';
     
                            

                            fetch('http://127.0.0.1:8090/admin/zanrs', {
                                headers: {
                                    'Authorization': `Bearer ${token}`
                                }
                            })
                                .then( res => res.json() )
                                .then( data => {
                                    const lst = document.getElementById('usrLst');
                                    lst.innerHTML = '';
                                    if(data.msg){
                                        alert(data.msg);
                                    }else{
                                    data.forEach( el => {
                                        
                                        lst.innerHTML += `<li>ID: ${el.id}, Zanr: ${el.tipZanra}`;
                                    });
                                }
                                });




                            
    
                        }
                    }).catch(err => console.log(err))
        });
    
    }