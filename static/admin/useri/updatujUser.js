function init(){
    
    const cookies = document.cookie.split('=')
    const token = cookies[cookies.length - 1]


fetch('http://127.0.0.1:8090/admin/users', {
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
                
                lst.innerHTML += `<li>ID: ${el.id}, Name: ${el.name}, E-mail: ${el.username}</li>`;
            });
        }
        });
        
document.getElementById('izmeniUsera').addEventListener('click', e => {
            e.preventDefault();
    
            
            

            const data = {
                username: document.getElementById('username').value,
                password: document.getElementById('password').value,
                email: document.getElementById('email').value
            };
            
            
    
    
                fetch('http://127.0.0.1:8090/admin/users/'+ document.getElementById('id').value, {
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
                            document.getElementById('username').value='';
                            document.getElementById('password').value='';
                            document.getElementById('email').value='';
     
                            

                            fetch('http://127.0.0.1:8090/admin/users', {
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
                                        
                                        lst.innerHTML += `<li>ID: ${el.id}, Name: ${el.name}, E-mail: ${el.username}</li>`;
                                    });
                                }
                                });




                            
    
                        }
                    }).catch(err => console.log(err))
        });
    
}