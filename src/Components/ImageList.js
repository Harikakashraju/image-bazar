

const ImageList = ({images}) => {



    return(
        <div>
             {
                images &&
                images.map((value, index)=>{
                     console.log(value.urls.small)
                    return (
                    <img className="img" key={index} src={value.urls.small} alt={value.alt_description} />
                    )
                }    
                )
             }
        </div>
    )

}

export default ImageList;