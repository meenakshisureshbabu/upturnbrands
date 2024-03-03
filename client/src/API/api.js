export const getRandomCatQuote = () => {
    return fetch("http://localhost:8080/catquote/random").then((resp) => {
      if (resp.status === 200) return resp.json();
      else throw new Error("Invalid response");
    });
  };