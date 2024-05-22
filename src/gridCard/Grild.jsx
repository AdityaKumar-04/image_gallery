import "./grild.css"
export default function Gallery({ images }) {

    console.log(images)
    return (
        <>
            <div className="grid-container">
            <div className="title">Latest Photos</div>
            <div className="grid-image">
                {images && images.map((image, index) => (
                    <div className="grid-item" key={index}>
                        <img src={URL.createObjectURL(image)} alt="" />
                        <div className="grid-item-title">
                            <h3>Photo Title</h3>
                            <p></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    )


}