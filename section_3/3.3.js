/* 
 * Provide an example of asynchronous JavaScript using either callbacks, Promises, or
async/await.
 */

// Operation with a delay
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;

            if (success) {
                resolve('Data successfully fetched!');
            } else {
                reject('Failed to fetch data.');
            }
        }, 2000); // 2 second delay
    });
}

async function fetchDataAsync() {
    try {
        const result = await fetchData();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

// Call the function
fetchDataAsync();