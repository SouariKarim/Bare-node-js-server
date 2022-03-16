let anniv = '12/04/1990';

const add = (item) => {
  let result = new Date(item);

  result.setDate(result.getMonth() + 10);

  console.log(result);
};

add(anniv);

// ehlo there
