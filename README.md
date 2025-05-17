# Ex05 Image Carousel
## Date: 17.05.2025
## Name: Keerthi Vasan A
## Reg No: 212222240048
## AIM
To create a Image Carousel using React 

## ALGORITHM
### STEP 1 Initial Setup:
Input: A list of images to display in the carousel.

Output: A component displaying the images with navigation controls (e.g., next/previous buttons).

### Step 2 State Management:
Use a state variable (currentIndex) to track the index of the current image displayed.

The carousel starts with the first image, so initialize currentIndex to 0.

### Step 3 Navigation Controls:
Next Image: When the "Next" button is clicked, increment currentIndex.

If currentIndex is at the end of the image list (last image), loop back to the first image using modulo:
currentIndex = (currentIndex + 1) % images.length;

Previous Image: When the "Previous" button is clicked, decrement currentIndex.

If currentIndex is at the beginning (first image), loop back to the last image:
currentIndex = (currentIndex - 1 + images.length) % images.length;

### Step 4 Displaying the Image:
The currentIndex determines which image is displayed.

Using the currentIndex, display the corresponding image from the images list.

### Step 5 Auto-Rotation:
Set an interval to automatically change the image after a set amount of time (e.g., 3 seconds).

Use setInterval to call the nextImage() function at regular intervals.

Clean up the interval when the component unmounts using clearInterval to prevent memory leaks.

## PROGRAM
ImageCarousel.jsx:
```jsx
import React, { useState, useEffect } from 'react';
import './ImageCarousel.css';

import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';

const images = [img1, img2, img3];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);
    return () => clearInterval(interval); // Cleanup
  }, [currentIndex]);

  return (
    <div className="carousel">
      <img src={images[currentIndex]} alt="carousel" />
      <div className="controls">
        <button onClick={prevImage}>⟨ Prev</button>
        <button onClick={nextImage}>Next ⟩</button>
      </div>
    </div>
  );
};

export default ImageCarousel;


```
ImageCarousel.css:
```css
.carousel {
  text-align: center;
  margin-top: 30px;
}

.carousel img {
  width: 80%;
  max-width: 600px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.controls {
  margin-top: 20px;
}

button {
  padding: 10px 20px;
  margin: 0 10px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background-color: #0056b3;
}


```

App.js:
```js
import React from 'react';
import ImageCarousel from './ImageCarousel';

function App() {
  return (
    <div className="App">
      <h1>📸 React Image Carousel</h1>
      <ImageCarousel />
    </div>
  );
}

export default App;


```

## OUTPUT
![image](https://github.com/user-attachments/assets/47af6dd4-ad87-4ecd-8a9c-373dc48df0e9)

After 3 seconds:
![image](https://github.com/user-attachments/assets/58aeeac3-e9c4-408b-bbbb-7d21cc3997d3)

After 6 seconds:
![image](https://github.com/user-attachments/assets/be9859aa-6e98-4479-b54a-96fec9756931)



## RESULT
The program for creating Image Carousel using React is executed successfully.
