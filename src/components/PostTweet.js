import { React, useEffect, useState } from 'react';


const PostTweet = () => {
    
    const text = "Hey @GobnutsNFT 👋, i just won a NutList on https://gobnuts.xyz";

    return (
        <div className="container-tweet_button">
            <a href={"https://twitter.com/intent/tweet?text="+text} target="_blank" className="tweetbutton" title="Tweet to @jsnwr" >Try your luck</a>
        </div>
    )

}
  
export default PostTweet;