const matter = require('gray-matter');
const fs = require('fs');

let md = fs.readdirSync('../posts');
console.log(md)

const post_data = [];

md.map(item => {
    const file = matter.read(`../posts/${item}`);
    post_data.push({id: file.data.id, title: file.data.title, author: file.data.author, categories: [file.data.categories], body: file.content});
    
})

console.log(post_data)
fs.writeFileSync('./posts.json', JSON.stringify(post_data));
/* const file = matter.read(`../posts/${md}`)
const data = [
    {title: file['data']['title'], author: file['data']['author'], categories: [file['data']['categories']], body: file['content']}
]
console.log(data) */