const grow = x => {
    return x.reduce((prev, cur) => {
      return prev * cur;}, 1); // 1 - начальное значение для произведения
  };
  /*Given a non-empty array of integers, return the result of multiplying the values together 
  in order.*/