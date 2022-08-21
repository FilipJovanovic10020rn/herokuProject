function init(){
    
    const cookies = document.cookie.split('=')
    const token = cookies[cookies.length - 1]


fetch('http://127.0.0.1:8090/admin/roles', {
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
                
                lst.innerHTML += `<li>ID: ${el.id}, Role: ${el.roleType}`;
            });
        }
        });
        
document.getElementById('izmeniUsera').addEventListener('click', e => {
            e.preventDefault();
    
            
            

            const data = {
                roleType: document.getElementById('roleType').value,
                UserId: document.getElementById('UserId').value
            };
            
            
    
    
                fetch('http://127.0.0.1:8090/admin/roles/'+ document.getElementById('id').value, {
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
                            document.getElementById('roleType').value='';
                            document.getElementById('UserId').value='';
     
                            

                            fetch('http://127.0.0.1:8090/admin/roles', {
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
                                        
                                        lst.innerHTML += `<li>ID: ${el.id}, Role: ${el.roleType}`;
                                    });
                                }
                                });




                            
    
                        }
                    }).catch(err => console.log(err))
        });
    
    }