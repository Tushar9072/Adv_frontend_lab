

export function addTodoAPI(todo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) {
        reject("Mock API Error: Could not save todo");
      } else {
        resolve({ ...todo, id: Date.now() });
      }
    }, 1200); 
  });
}

export function updateLikeAPI(newLikes) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.1) {
        reject("Mock API Error: Failed to update likes");
      } else {
        resolve(newLikes);
      }
    }, 1000); 
  });
}


export function addToCartAPI(newCount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.15) {
        reject("Mock API Error: Failed to update cart");
      } else {
        resolve(newCount);
      }
    }, 1200); 
  });
}
