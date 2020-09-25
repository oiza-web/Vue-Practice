const posts = [
  {title: 'firstcodes', body: 'Geek Oiza'},
  {title: '2ndcodes', body: 'Geek Oiza2'},
 
];




function  getPosts(){
  setTimeout(()=>{
    let output = ''
    posts.forEach((post) =>{
      output += `<h1>${post.title}<h1>`
    });
    document.body.innerHTML = output
  }, 2000);
}

function createPost(post){
  return new Promise((resolve, reject)=>{
    setTimeout(() =>{
      posts.push(post);
  }, 1000);
  const error = false;
  if(!error){
    resolve();
}else{
  reject('something went wrong');
}
   
  }, 2000);

}

// Async Await

// async function init(){
//   await createPost({title: '2ndcodes', body: 'Geek Oiza2'})
//   getPosts();
// }

// init();

// Async Await Fetch 
async function fetchUsers(){

  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()
console.log(data);
}
fetchUsers();





// createPost({title: 'codes', body: 'Geek Oiza3'})
// .then(getPosts)
// .catch(err => console.log(err));

// const promise1 = Promise.resolve('Geek Oiza');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => 
// setTimeout(resolve,'Good Bye', 2000));
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
// Promise.all([promise1, promise2, promise3, promise4]).then(values =>console.log(values));