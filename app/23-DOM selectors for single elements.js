function pr(val){
  console.log(val);
}

// // fetching elements
// pr(document.getElementById('task-title'));

// // fetching properties of elements
// pr(document.getElementById('task-title').id);
// pr(document.getElementById('task-title').innerHTML);
// pr(document.getElementById('task-title').innerText);

// // editing css 
// document.getElementById('task-title').style.background='red';
// document.getElementById('task-title').style.color='green';
// // document.getElementById('task-title').style.display='none';

// // changing text
// document.getElementById('task-title').textContent = 'Task List';
// document.getElementById('task-title').innerText = 'All Tasks';
// document.getElementById('task-title').innerText = '<strong>All Tasks<strong>';
// document.getElementById('task-title').innerHTML = '<strong>MY</strong> TASKS';

// querySelector()
// task title id
pr(document.querySelector('#task-title'));

// card-title class
pr(document.querySelector('.card'));

// h5
pr(document.querySelector('h5'));

// make li red
pr(document.querySelector('li').style.color='red');

// make ul li blue
pr(document.querySelector('ul li').style.color='blue');

// make li last-child red
pr(document.querySelector('li:last-child').style.color = 'red');

// make 3rd li yellow
pr(document.querySelector('li:nth-child(3)').style.color='yellow');

// make fourth li test as hello world
pr(document.querySelector('li:nth-child(4)').textContent='Hello World');

// make odd child background as #333
pr(document.querySelector('li:nth-child(odd)').style.background='#333');

// make even child background as #f4f4f4
pr(document.querySelector('li:nth-child(even)').style.background='#f4f4f4');





