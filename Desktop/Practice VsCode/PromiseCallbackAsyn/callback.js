const posts = [
  {title: 'firstcodes', body: 'Geek Oiza'},
  {title: '2ndcodes', body: 'Geek Oiza2'},
  {title: '3rdcodes', body: 'Geek Oiza3'},
  {title: '4thcodes', body: 'Geek Oiza4'},
  {title: '5thcodes', body: 'Geek Oiza5'},

];

// function getPosts(){
// setTimeout(()=> {
//   let output = '';
//   posts.forEach((post, index)=>{
//     output += `<li>${post.title}</li>`
//   })
//   document.body.innerHTML = output;
// }, 1000);

// }

// // getPosts();



















// function getBody(){

//   setTimeout(() => {
//     let output = ''
//     posts.forEach((post, index)=>{
//       output += `<li>${post.body} </li>`
//     })
//     document.body.innerHTML = output
//   }, 1000);
// }





// function getTitle(){
//   setTimeout(()=>{
//     let put = ''
//     posts.forEach((t, index) =>{
//         put += `<h1>${t.title}</h1>`
//     }, 500);
//     document.body.innerHTML = put
//   });
// }

// getTitle();

// function createPost(post, callback){
//   setTimeout(()=>{
//     posts.push(post)
//     callback();
//   }, 2000);
 
// }

// createPost({title: '6thcodes', body: 'Geek Oiza9'}, getBody);

function  getPosts(){
  setTimeout(()=>{
    let output = ''
    posts.forEach((post, index) =>{
      output += `<h1>${post.title}<h1>`
    });
    document.body.innerHTML = output
  }, 1000);
}

function createPost(post, callback){
  setTimeout(() =>{
    posts.push(post);
    callback();
  }, 2000);

}

createPost( {title: '6thcodes', body: 'Geek Oiza5'}, getPosts);