import React, { useState } from 'react';

const ImageUploadForm = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    // Function to handle file input change
    const handleFileInputChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    // Function to convert the selected image to base64
    const getBase64FromFile = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    };

    // Function to handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (selectedFile) {
            try {
                const imageBase64 = await getBase64FromFile(selectedFile);
                // Send the POST request here using fetch with the imageBase64
                sendPostRequestWithImage(imageBase64);
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };

    // Function to send the POST request with the base64 image
    const sendPostRequestWithImage = async (imageBase64) => {
        const url = 'https://example.com/upload'; // Replace this with your API endpoint

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ image: imageBase64 }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Response:', data);
            } else {
                console.error('Request failed with status:', response.status);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="file" onChange={handleFileInputChange} />
            <button type="submit">Upload</button>
        </form>
    );
};

export default ImageUploadForm;
