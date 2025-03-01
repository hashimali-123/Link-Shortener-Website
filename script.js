document.getElementById('shortenForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const url = document.getElementById('urlInput').value;
    shortenUrl(url);
});

function shortenUrl(url) {
    // Simulate a shortened URL
    const shortenedUrl = `https://short.url/${Math.random().toString(36).substring(2, 7)}`;

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        Shortened URL: <a href="${shortenedUrl}" target="_blank">${shortenedUrl}</a>
        <button class="copy-button" onclick="copyToClipboard('${shortenedUrl}')">Copy</button>
    `;
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            alert('URL copied to clipboard!');
        })
        .catch(() => {
            alert('Failed to copy URL. Please try again.');
        });
}