function init() {


    document.getElementById('btn').addEventListener('click', e => {
        e.preventDefault();

        

        const data = {
            name: document.getElementById('name').value,
            username: document.getElementById('username').value,
            lastname: document.getElementById('lastname').value,
            password: document.getElementById('password').value,
            email: document.getElementById('email').value
        };

            fetch('http://127.0.0.1:9000/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
                .then( res => res.json() )
                .then( el => {
                    if (el.msg) {
                        alert(el.msg);
                    } else {
                        document.getElementById('name').value='';
                        document.getElementById('username').value='';
                        document.getElementById('lastname').value='';
                        document.getElementById('password').value='';
                        document.getElementById('email').value='';


                    document.cookie = `token=${el.token};SameSite=Lax`;
                    window.location.href = 'index.html';
                    }
                });
            
    });

}