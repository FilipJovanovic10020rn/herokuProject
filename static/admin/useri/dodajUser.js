function init() {

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



    document.getElementById('dodajUsera').addEventListener('click', e => {
        e.preventDefault();

        

        const data = {
            name: document.getElementById('name').value,
            username: document.getElementById('username').value,
            lastname: document.getElementById('lastname').value,
            password: document.getElementById('password').value,
            email: document.getElementById('email').value
        };

        var check = document.getElementById("admin"); 


        

            fetch('http://127.0.0.1:8090/admin/users', {
                method: 'POST',
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

                        // if(check.checked == true){
                        //     const adminstrator = {
                        //         admin: "Admin",
                        //         UserId: el.id
                        //     } 
                        // }
                        // fetch('http://127.0.0.1:8090/admin/roles', {
                        //     method: 'POST',
                        //     headers: { 
                        //         'Content-Type': 'application/json',
                        //         'Authorization': `Bearer ${token}`
                        //     },
                        //     body: JSON.stringify(data)
                        // })
                        


                        document.getElementById('name').value='';
                        document.getElementById('username').value='';
                        document.getElementById('lastname').value='';
                        document.getElementById('password').value='';
                        document.getElementById('email').value='';

                        document.getElementById('usrLst').innerHTML += `<li>ID: ${el.id}, Name: ${el.name}, E-mail: ${el.username}</li>`;

                    }
                }).catch(err => console.log(err))
    });

}