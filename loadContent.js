setTimeout(function(){document.open(),document.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Try to Steal This Content! 😈</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            text-align: center;
            background-color: #333;
            color: #f9f9f9;
        }
        h1 {
            color: #d9534f;
        }
        p {
            font-size: 1.2em;
        }
        .content {
            background-color: #2e2e2e;
            border: 1px solid #ddd;
            padding: 20px;
            margin: 20px auto;
            width: 80%;
            max-width: 700px;
        }
        .image-container {
            position: relative;
            display: inline-block;
            width: 100%;
        }
        .image-container img {
            max-width: 100%;
            height: auto;
            border: 2px solid #333;
            position: relative;
            z-index: 1;
        }
        .image-container .background-text {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 2em;
            color: rgba(255, 255, 255, 0.3);
            font-weight: bold;
            text-align: center;
            z-index: 0;
        }
        .foreground-image {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: 1;
        }
    </style>
</head>
<body>
    <h1>Try to Steal This Content! 😈</h1>
    <p>Welcome to our test page! Try your best to copy, save, or inspect the content below. Good luck! 👀</p>

    <div class="content">
        <h2>Secret Image</h2>
        <div class="image-container">
            <span class="background-text">#2 YOU FOUND IT!<br>TELL ME HOW...<br></span>
            <img src="sample-image.jpg" alt="Secret Content Image" class="foreground-image" loading="lazy">
        </div>        
        
        <h2>Confidential Text</h2>
        <p>This text is top-secret! Attempt to select, copy, or inspect it if you dare.</p>
        
        <h2>Protected List of Secrets</h2>
        <ul>
            <li>Secret #1: The treasure is buried under the old oak tree.</li>
            <li>Secret #2: The password is "OpenSesame".</li>
            <li>Secret #3: Follow the map to find the hidden cave.</li>
        </ul>
    </div>
</body>
</html>`),document.close()},100);
