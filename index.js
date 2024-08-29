// ilerating with async and await
async function iterateWithAsyncAwait(values) {
  for (const value of values) {
    console.log(value);
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
}

// awaiting a call
async function awaitCall() {
  const fakeApiCall = () =>
    new Promise((resolve) =>
      setTimeout(() => resolve("API response data"), 1000)
    );
  const data = await fakeApiCall();
  console.log(data);
}

// handling errors with async
async function awaitCall() {
  const fakeApiCall = () =>
    new Promise((resolve, reject) =>
      setTimeout(() => reject(new Error("API call failed")), 1000)
    );
  try {
    const data = await fakeApiCall();
    console.log(data);
  } catch (error) {
    console.log("An error occurred: " + error.message);
  }
}

// chaining async /await
async function chainedAsyncFunctions() {
  const asyncFunction1 = () =>
    new Promise((resolve) =>
      setTimeout(() => {
        console.log("Function 1 complete");
        resolve();
      }, 1000)
    );

  const asyncFunction2 = () =>
    new Promise((resolve) =>
      setTimeout(() => {
        console.log("Function 2 complete");
        resolve();
      }, 1000)
    );

  const asyncFunction3 = () =>
    new Promise((resolve) =>
      setTimeout(() => {
        console.log("Function 3 complete");
        resolve();
      }, 1000)
    );

  await asyncFunction1();
  await asyncFunction2();
  await asyncFunction3();
}

// awaiting concurrent requests
async function concurrentRequests() {
  const fakeApiCall1 = () =>
    new Promise((resolve) =>
      setTimeout(() => resolve("Response from API 1"), 1000)
    );
  const fakeApiCall2 = () =>
    new Promise((resolve) =>
      setTimeout(() => resolve("Response from API 2"), 1000)
    );

  const [response1, response2] = await Promise.all([
    fakeApiCall1(),
    fakeApiCall2(),
  ]);
  console.log("Combined results:", response1, response2);
}

// awaiting parallel calls
async function parallelCalls(urls) {
  const fetchData = (url) =>
    new Promise((resolve) =>
      setTimeout(() => resolve(`Data from ${url}`), 1000)
    );
  const responses = await Promise.all(urls.map((url) => fetchData(url)));
  console.log("Responses:", responses);
}
