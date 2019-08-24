// Make a request for a user with a given ID
axios.get('https://tk-whatsapp.herokuapp.com/messages')
    .then(function(response) {
        // handle success
        for (let i = 0; i < response.data.length; i++) {
            let messages = response.data[i];
            document.querySelector('ul').innerHTML +=
                `<ul class="design">
                    <li>
                       
                        <img src= ${messages.profilePic}>
                        <h4>${messages.name}</h4>
                        <h4>${messages.number}</h4>
                    </li>
                </ul>`
        }

        console.log(response);
    })
    .catch(function(error) {
        // handle error
        console.log(error);
    })
    .finally(function() {
        // always executed
    });
4