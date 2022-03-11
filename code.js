const log = () => {
  console.log('greeting');
};

const hello = new Promise((resolve, reject) => {
  let x = 55555555555555;
  console.log('half is done');
  if (Math.random() > 0.5) {
    resolve('shiit this is a success'); // inside this is the value we can use in the actual function
  } else {
    reject(x); // thiis is the value that we can use if there is a rejection !!
  }
});

// const hello = () => {
//   return new Promise((resolve, reject) => {
//     console.log('it is done '); // this is the code that may take some time

//     if (Math.random() > 0.5) {
//       resolve('hohoho'); // when successful
//       console.log('success');
//     } else {
//       reject('heyhey'); // when failure
//     }
//   });
// };

hello.then(
  (value) => {
    log();
    console.log(value);
  },
  (value) => {
    console.log(value);
    console.log('hell this is an error');
  }
);

// const hell = async () => {
//   try {
//     await hello();
//   } catch (err) {
//     console.log('error');
//     throw err; // this logs the entire error
//   }
// };

// hell();
