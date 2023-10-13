// import React, { useState } from 'react';
// import styled from 'styled-components';

// const Container = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 100%;
//   margin: 10px;
  
// `;

// const Dropdown = styled.select`


// width: 236px;
// height: 40px;
// top: 132px;
// left: 61px;
// padding: 10px;
// border-radius: 8px;
// border: 1px;
// justify: space-between;
// font-size:16px;

//   &:hover {
//     background-color: lightgray;
//   }

//   &:active {
//     background-color: lightblue;
//   }
// `;

// const ImageDisplay = styled.div`
// height: 400px;

//   width: 800px;
//   display: inline-flex;
//   padding: 10px;
//   flex-direction: column;
//   align-items: flex-start;
//   gap: 10px;
//   border-radius: 8px;
// border: 1px solid var(--primary-blue-light-3, #E8F0FC);
// background: var(--brand-white, #FFF);
// `;

// const ImageChanger = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleImageChange = (e) => {
//     setSelectedImage(e.target.value);
//   };

//   return (
//     <Container>
//       <Dropdown onChange={handleImageChange}>
//         <option value="">Dropdown</option>
//         <option value="https://plus.unsplash.com/premium_photo-1663099397209-00105d5752f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c21hbGwlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60">Mountain</option>
//         <option value="https://images.unsplash.com/photo-1612349331804-f8d77fa8ae74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hbGwlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60">Forest</option>
//         <option value="https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c21hbGwlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60">Ocean</option>  <option value="https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c21hbGwlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60">Imag 3</option>
//         <option value="https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c21hbGwlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60">Desert</option>
//       </Dropdown>
//       <ImageDisplay>
//         {selectedImage && <img src={selectedImage} alt="Selected Image" />}
//       </ImageDisplay>
//     </Container>
//   );
// };

// export default ImageChanger;

import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
   justify-content: space-between;
   align-items: center;
  width: 100%;
 margin: 10px;
 overflow: hidden;
`;

const Dropdown = styled.select`
 width: 300px;
 height: 50px;
 top: 132px;
 left: 61px;
 padding: 10px;
 border-radius: 8px;
 border: 2px solid lightblue;
 display: flex;
align-items: center;
gap: 10px;
 justify: space-between;
 font-size:16px;
 color: var(--secondary-grey-2, #484848);

;
&:hover {
         background-color: #E1E8F8;
 ]
         border: 2px solid lightblue;
       }
    
       &:active {
        border: 2px solid lightblue;
        background-color: #E1E8F8;
         
       }
     `;

const ImageDisplay = styled.div`
 height: 60%;
 object-fit: cover;
   width: 45%;
   display: inline-flex;
   padding: 10px;
   flex-direction: column;
   align-items: flex-start;
   gap: 10px;
   
 border: 1px solid var(--primary-blue-light-3, #E8F0FC);
 background: var(--brand-white, #FFF);
`;
const option = styled.option`
  cursor: pointer;

  &:hover {
    background-color: #E1E8F8;
  
  }
`;

const ImageChanger = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    setSelectedImage(e.target.value);
  };

  const handleOptionHover = (image) => {
    setSelectedImage(image);
  };

  return (
    <Container>
      <Dropdown onChange={handleImageChange}>
        <option value="">Dropdown</option>
        <option
          value="https://i.ibb.co/Ln2CjC6/Frame-3.png"
          onMouseEnter={() => handleOptionHover("image1.jpg")}
        >
          Mountain
        </option>
        <option
          value="https://i.ibb.co/0KMwxXK/Frame.png"
          onMouseEnter={() => handleOptionHover("image2.jpg")}
        >
          Forest
        </option>
        <option
          value="https://i.ibb.co/1GHbFT4/Frame-1.png"
          onMouseEnter={() => handleOptionHover("image3.jpg")}
        >
          Ocean
        </option>
        <option
          value="https://i.ibb.co/cQw8d5Y/Frame-2.png"
          onMouseEnter={() => handleOptionHover("image3.jpg")}
        >
        Desert
        </option>
      </Dropdown>
      <ImageDisplay>
        {selectedImage && <img src={selectedImage} alt="Selected Image" />}
      </ImageDisplay>
    </Container>
  );
};

export default ImageChanger;
