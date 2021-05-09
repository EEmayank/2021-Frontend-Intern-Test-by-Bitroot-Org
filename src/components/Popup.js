
export default function Popup ({post, handlepopup}) {
    return (
        <div className="popup-container">
            <div className="fillers"></div>
            { post ? (
                <div className="popup ">
                    <div className="navbar">
                        <div className="closebutton" onClick={()=>handlepopup(false)}>
                            &#10006;
                        </div>
                    </div>

                    <div className="popupimg">
                        <img src={post.thumbnail.large} alt="" />
                    </div>

                    <div className="popupdetails">
                        <div className="title">
                            {post.title}
                        </div>

                        <div className="content">
                            {post.content}
                        </div>

                        <div className="author">
                            <div className="authorimg">
                                <img src={post.author.avatar} alt="" />
                            </div>
                            <div className="authorname">
                                {post.author.name} - {post.author.role}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                null
            )}
            
            <div className="fillers"></div>
        </div>
    )
}