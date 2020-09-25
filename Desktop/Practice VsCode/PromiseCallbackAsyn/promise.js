const posts = [
  {title: 'firstcodes', body: 'Geek Oiza'},
  {title: '2ndcodes', body: 'Geek Oiza2'},
 
];





function  getPosts(){
  setTimeout(()=>{
    let output = ''
    posts.forEach((post, index) =>{
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
createPost({title: 'codes', body: 'Geek Oiza3'})
.then(getPosts)
.catch(err => console.log(err));