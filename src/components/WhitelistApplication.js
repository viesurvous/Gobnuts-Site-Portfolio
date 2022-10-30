
import { React, useEffect, useState, CSSProperties } from 'react';
import Confetti from 'react-confetti'
import { FaTwitter, FaDiscord } from "react-icons/fa";
import HashLoader from "react-spinners/HashLoader";



const PostTweet = () => {

    const [loading, setLoading] = useState(false);
    const [canClaim, setClaim] = useState(false);

    const setLoader = () => {
        {/** LOADING... */}
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setClaim(true);
        }, 3500);
    }

    const text = "Hey @GobnutsNFT 👋, i just won a NutList on https://gobnuts.xyz";

    return (
    <>
        {canClaim ?
            <div className="flex mt-4 text-center">
                <Confetti numberOfPieces={40}/>
                <h3 className="announcement-won">You won!</h3>
                <small><strong>Please follow the below instruction.</strong></small>
                <div className="container-tweet_button">
                    <a href={"https://twitter.com/intent/tweet?text="+text} target="_blank" className="tweetbutton"><FaTwitter/><span>Share to claim</span></a>            
                </div>
                <div className="container-tweet_button">
                    <a href={"https://discord.gg/gobnuts"} target="_blank" className="tweetbutton"><FaDiscord/><span>Join our Discord</span></a>            
                </div>
            </div>
            :
            <>
            {loading ?
                <HashLoader color="#03fd0c" loading={loading}/>
            :
                <div className="container-tweet_button">
                    <button  onClick={setLoader} target="_blank" className="tweetbutton"> Try your luck!</button>
                </div>
            }
            </>
            
        }
    </>
    )

}
  
export default PostTweet; 