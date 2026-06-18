function processFile(filename, processingTime) {
    return new Promise((resolve, reject) => {
        console.log(`Starting to process ${filename}...`);
        
        setTimeout(() => {
            if (Math.random() < 0.15) {
                reject(new Error(`Failed to process ${filename}`));
            } else {
                const result = {
                    filename: filename,
                    size: Math.floor(Math.random() * 1000) + 100,
                    processedAt: new Date().toLocaleTimeString()
                };
                console.log(`✓ Completed ${filename}`);
                resolve(result);
            }
        }, processingTime);
    });
}

const files = [
    { name: "document1.pdf", time: 2000 },
    { name: "image1.jpg", time: 1500 },
    { name: "data.csv", time: 3000 },
    { name: "report.docx", time: 1000 }
];

const startTime = Date.now();
const filePromises = files.map(file => processFile(file.name, file.time));

Promise.all(filePromises)
    .then(results => {
        console.log(`Total time (Promise.all): ${Date.now() - startTime}ms`);
        console.log("All results:", results);
    })
    .catch(error => {
        console.error("Promise.all caught an error:", error.message);
    });

Promise.allSettled(filePromises)
    .then(results => {
        console.log(`Total time (Promise.allSettled): ${Date.now() - startTime}ms`);
        console.log("All Settled results:", results);
    });