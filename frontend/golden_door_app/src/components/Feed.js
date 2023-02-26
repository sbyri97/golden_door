import React from "react";

const Feed = () => {
    const {id, media_type, media_url} = props.feed

    let post;

    switch (media_type) {
        // case "VIDEO":
        //     post = (
        //         <video
        //             width='100%'
        //             height='auto'
        //             src={media_url}
        //             type="video/mp4"
        //             controls playsinline>
        //         </video>
        //     )
        //     break;
        // case "CAROUSEL_ALBUM":
        //     post = (
        //         <img
        //             width='100%'
        //             height='auto'
        //             id={id}
        //             src={media_url}
        //             alt={caption}
        //         />
        //     );
        //     break;
        default:
            post = (
                <img
                    width='100%'
                    height='auto'
                    id={id}
                    src={media_url}
                    alt={caption}
                />
            );
    }

    result (
        <React.Fragment>
            {post}
        </React.Fragment>
    );
}

export default Feed;
