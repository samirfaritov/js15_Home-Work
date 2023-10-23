let arr = [
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut au`tem",
        "completed": false
    },
    {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
    },
    {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
    },
    {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true
    },
    {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
    },
    {
        "userId": 1,
        "id": 6,
        "title": "qui ullam ratione quibusdam voluptatem quia omnis",
        "completed": false
    },
    {
        "userId": 1,
        "id": 7,
        "title": "illo expedita consequatur quia in",
        "completed": false
    },
    {
        "userId": 1,
        "id": 8,
        "title": "quo adipisci enim quam ut ab",
        "completed": true
    },
    {
        "userId": 1,
        "id": 9,
        "title": "molestiae perspiciatis ipsa",
        "completed": false
    },
    {
        "userId": 1,
        "id": 10,
        "title": "illo est ratione doloremque quia maiores aut",
        "completed": true
    },
]
let a = {
    count: 0,
    arr: []
}

let b = {
    count: 0,
    arr: []
}


// let s = arr.reduce((a, b) => {   
//     console.log(arr);
// }, 0)
// console.log(arr);

for (let i = 0; i < arr.length; i++) {
    if (arr[i].completed === true) {
        a.count++
    }
    if (arr[i].userId === 1) {
        a.arr++ 
    }
}
console.log(true, a);

for (let i = 0; i < arr.length; i++) {
    if (arr[i].completed === false) {
        b.count++
    }
    if (arr[i].userId === 1) {
        b.arr++
    }
}
console.log(false, b);


// let s = arr.reduce((a, b) => {
//     console.log(arr);
// }, 0)

// let s = arr.sort((a, b) => { 
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].completed === true) {
//             a.count++
//         }
//     }
// })
 
// function sort() {
//     console.log(arr);
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].completed === "true") {
//             a.count++
//         }
//     }
// }



// // sort()

// function func() {
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i].userId === 1) {
//             a.arr++
//         } else{
//             a.arr++
//         }
//     }
// }
// console.log(a);