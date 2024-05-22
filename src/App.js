import './App.css';
import Gallery from './gridCard/Grild';
import Navbar from './nav/navbar';
import Upload from './upload-box/upload';
import { useState} from 'react';

function App() {
  const [images, setImages] = useState([]);

  function addImages(newFiles) {
    setImages(prevImages => [...prevImages, ...newFiles]);
  }
  // console.log(image)
  
  return (
    <div className="App">
      <div className="navbar">
        <Navbar/>
        <Upload addImages={addImages}/>
        <Gallery images={images}/>
      </div>
    </div>
  );
}

export default App;
