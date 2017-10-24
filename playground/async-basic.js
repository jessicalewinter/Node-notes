console.log('Starting app');

setTimeout(() => {
  console.log('First setTimeout but third to callback');
},2000);

setTimeout(() => {
  console.log('Second setTimeout but first to callback');
},0);

setTimeout(() => {
  console.log('Third setTimeout but second to callback');
},1000);

console.log('Finishing up');
