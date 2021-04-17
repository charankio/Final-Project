// test function
function test() {

    //Set Comment
    window.alert("Success!");
}

// need to work on this
function execute() {
    const url = "https://api.nytimes.com/svc/books/v3/reviews.json?api-key=bo1zGgDSAuDUbpe5spvdoz37Hgc9fldJ";
    const options = {
      method: "GET",
      headers: {
        "Accept": "application/json"
      },
    };
    fetch(url, options).then(
      response => {
        if (response.ok) {
            console.log("copyright");
          return response.text();
        }
        return response.text().then(err => {
          return Promise.reject({
            status: response.status,
            statusText: response.statusText,
            errorMessage: err,
          });
        });
      })
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.error(err);
      });
  }