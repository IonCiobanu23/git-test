async function test1()
{
   const res = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1');
   return res.json();
}

async function test2()
{
   const res = await fetch('https://jsonplaceholder.typicode.com/comments?postId=2');
   return res.json();
}

async function test3()
{
   const res = await fetch('https://jsonplaceholder.typicode.com/comments?postId=3');
   return res.json();
}


async function go()
{
    let c = await test3();
    console.log(c);
    let a = await test1();
    console.log(a);
    let b = await test2();
    console.log(b);
}


window.onkeypress = go;


const git = 'iamania';