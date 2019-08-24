
// let handleSuccess = function (response) {
//     // handle success
//     // console.log(response);

//     for (let i = 0; i < response.data.length; i++) {
//         let messages = response.data[i];
//         document.querySelector("ul").innerHTML +=
//             `
//                 <li>
//                 <h3>${messages.name}</h3>
//                 <p>${messages.number}</p>
//                 <p>${messages.firstLine}</p>
//                 <p>${messages.time}</p>
//                 <img src=${messages.profilePic}>
//                 </li>
//                 `
//     }
// }



// let hanldeError = function (error) {
//     // handle error
//     console.log(error);
// }

// let finishUp = function () {
//     // always executed
// }


// axios.get('https://tk-whatsapp.herokuapp.com/messages')
//     .then(handleSuccess)
//     .catch(hanldeError)
//     .finally(finishUp);


