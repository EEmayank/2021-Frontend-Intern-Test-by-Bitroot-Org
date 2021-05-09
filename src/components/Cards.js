export default function Cards ({post, handlepopup}) {

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep","Oct", "Nov", "Dec"]
    let date = new Date(post.date)
    let month = months[date.getMonth()]

    return (
        <div className="card">

            <div className="img-container">
              <img src={post.thumbnail.small} alt="thumbnail" />
              <div className="learn-more" onClick={()=>handlepopup(post)}>
                  <span>Learn More</span>
              </div>
            </div>

            <div className="details">
                <div className="img-scroll">
                    <div className="img1 btn"></div>
                    <div className="img2 btn"></div>
                </div>

                <div className="title" onClick={()=>handlepopup(post)}>
                    {post.title}
                </div>

                <div className="content">
                    {post.content}
                </div>

                <div className="info">

                    <div className="author">
                        {post.author.name}
                    </div>

                    <div className="date">
                        {month} {date.getDate()}, {date.getFullYear()}
                    </div>

                </div>
            </div>

          </div>
    )
}