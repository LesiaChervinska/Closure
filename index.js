function ticket(arr){
    var sum = 0;
    var answer = '';
    if (!Array.isArray(arr)) return false
    for(var i = 0; i< arr.length; i++){
        if(arr[i] - 25 > sum){
            answer = 'NO. Vasya will not have enough money to give change to 100 dollars';
            break;
        }
        else{
            sum += 25;
            answer =  'Yes';
        }
  
    }
    return answer;
}


// console.log(ticket([25, 25, 50]))
// console.log(ticket([25, 100]))
// console.log(ticket([25, 25, 50, 100]))
// console.log(ticket([25,50,100]))
// console.log(ticket([25, 25, 50, 100]))
//  console.log(ticket(['25','25', '50', '100']))

let listOfPosts2 = [
    {
        id: 1,
        post: 'some post1',
        title: 'title 1',
        author: 'Ivanov',
        comments: [
            {
                id: 1.1,
                comment: 'some comment1',
                title: 'title 1',
                author: 'Rimus'
            },
            {
                id: 1.2,
                comment: 'some comment2',
                title: 'title 2',
                author: 'Uncle'
            }
        ]
    },
    {
        id: 2,
        post: 'some post2',
        title: 'title 2',
        author: 'Ivanov',
        comments: [
            {
                id: 1.1,
                comment: 'some comment1',
                title: 'title 1',
                author: 'Rimus'
            },
            {
                id: 1.2,
                comment: 'some comment2',
                title: 'title 2',
                author: 'Uncle'
            },
            {
                id: 1.3,
                comment: 'some comment3',
                title: 'title 3',
                author: 'Rimus'
            }
        ]
    },
    {
        id: 3,
        post: 'some post3',
        title: 'title 3',
        author: 'Rimus'
    },
    {
        id: 4,
        post: 'some post4',
        title: 'title 4',
        author: 'Uncle'
    }
]

function  getQuntityPostsByAuthor (list, author) {
    var post = 0;
    var comments = 0;
    if(typeof list !== 'object' || typeof author !== 'string'){
        return false;
    }

    for(var i =0; i< list.length; i++){
        if(list[i].author === author){
            post++;
        }
        for(var key in list[i].comments){
            if(list[i].comments[key].author === author){
                comments++;
            }
        }
    }

    return `post  - ${post}, comments - ${comments}`
}

//console.log(getQuntityPostsByAuthor (listOfPosts2, 'Rimus'))

module.exports = {
    ticket,
    getQuntityPostsByAuthor,
}