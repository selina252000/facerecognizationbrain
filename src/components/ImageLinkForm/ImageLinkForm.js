import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm =({onInputChange,onButtonSubmit})=>{
    return (
       <div className = ' f3 ' >
            <p>
                { 'This Magic Brain will detect Faces in  your picture.Give it a try'} 
            </p>
            <div className=' center'>
            <div className='form  center pa4 br3 shadow-5 '>
                <input  className ='f4 pa2 w-70 center' type ='text' onChange = { onInputChange}/>
                <button 
                className=' w-30  grow f4 link ph3 pw2 dib white bg-light-purple'
                onClick={onButtonSubmit}>
                Detect</button>
            
                </div>
                </div>
        </div>

    );
}
export default ImageLinkForm;