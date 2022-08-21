function init() {

    const cookies = document.cookie.split('=')
    const token = cookies[cookies.length - 1]

   

    fetch('http://127.0.0.1:8090/admin/films', {
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
                lst.innerHTML += `<li>ID: ${el.id}, Name: ${el.name}, Rating: ${el.rating}</li>`;
            });
        }
        });



    document.getElementById('dodajUsera').addEventListener('click', e => {
        e.preventDefault();

        

        const data = {
            name: document.getElementById('name').value,
            trajanje: document.getElementById('trajanje').value,
            rating: document.getElementById('rating').value,
            description: document.getElementById('description').value,
        };




            fetch('http://127.0.0.1:8090/admin/films', {
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
                        document.getElementById('name').value='';
                        document.getElementById('trajanje').value='';
                        document.getElementById('rating').value='';
                        document.getElementById('description').value='';

                        document.getElementById('usrLst').innerHTML += `<li>ID: ${el.id}, Name: ${el.name}, Rating: ${el.rating}</li>`;

                    }
                }).catch(err => console.log(err))
    });

}