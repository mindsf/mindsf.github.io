import React from 'react';
const Images = ({ detailImages }) => {
  return (
    <>
      {detailImages.map((url) => {
        return <img className='uploadImg' alt={url} key={url} src={url} />;
      })}
    </>
  );
};

export default Images;