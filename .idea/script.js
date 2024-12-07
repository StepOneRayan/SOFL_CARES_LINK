if (typeof config !== 'undefined' && config.powerAutomateURL && config.surveyURL) {
// Get the ID from the URL
    const urlHash = window.location.hash;
    const id = urlHash ? urlHash.substring(1) : null;

    console.log("ID: " + id);

    if (id) {
        fetch(powerAutomateURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
                timestamp: new Date().toISOString()

            })
        })
            .then(response => {
                if (response.ok) {
                    console.log("Success");
                } else {
                    console.log("Failed");
                }
            })
            .catch(error => console.error('Error:', error))
            .finally(() => {
                window.location.href = config.surveyURL;
            })
    } else {
        console.log("No ID found in the URL");
        window.location.href = config.surveyURL;
    }
} else {
    console.log("No config found");
}