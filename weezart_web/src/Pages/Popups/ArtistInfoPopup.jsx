import React, { useState } from "react";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import './Popup.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiOutlineStar, AiFillStar, AiOutlineHeart, AiFillHeart, AiOutlineCheckCircle, AiFillCheckCircle, AiFillCrown } from 'react-icons/ai'; 
 

// Make sure to set appElement to avoid a11y violations
Modal.setAppElement("#root");


//if image is empty put a defoult image
function imgsrc(val) {
    if(val === undefined || val==="") {
        return "https://i.pinimg.com/564x/e3/c9/a9/e3c9a9e5934d65cff25d83a2ac655230.jpg";
    }
    else {
        return val;
    }
}

function ArtistInfoPopup(props) {

    const [rating, setRating] = useState(0);
    const stars = [1, 2, 3, 4, 5];
    const [liked, setLiked] = useState(false);
    const [added, setAdded] = useState(false);



    const [songs,setSongs] = useState(
        [
            { songName: "name1", songDuration: "7:30", likes: "750.561.780"} ,
            { songName: "name1", songDuration: "7:30", likes: "750.561.780"} ,
            { songName: "name1", songDuration: "7:30", likes: "750.561.780"} ,
            { songName: "name1", songDuration: "7:30", likes: "750.561.780"} ,
            { songName: "name1", songDuration: "7:30", likes: "750.561.780"} ,
            { songName: "name1", songDuration: "7:30", likes: "750.561.780"} ,
            { songName: "name1", songDuration: "7:30", likes: "750.561.780"} ,
            { songName: "name1", songDuration: "7:30", likes: "750.561.780"} ,
            { songName: "name1", songDuration: "7:30", likes: "750.561.780"} ,
            { songName: "name1", songDuration: "7:30", likes: "750.561.780"} ,
            { songName: "name1", songDuration: "7:30", likes: "750.561.780"} ,
            { songName: "name1", songDuration: "7:30", likes: "750.561.780"} ,
            { songName: "name1", songDuration: "7:30", likes: "750.561.780"} ,
        ]
    );

    const handleStarClick = (selectedRating) => {
        if (selectedRating === rating) {
            // If the clicked star is the same as the current rating, remove the rating (set it to 0)
            setRating(0);

          } else {
            setRating(selectedRating);
            setAdded(true); 
          }
    };


  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      className="information-modal"
    >
        {/* close button */}
        <div className="close-page"> 

            <button onClick={props.onRequestClose}>
                <AiOutlineClose/>
            </button>

        </div>

        <div className="three-column-container">
            <div className="column">
                <img className="cover-img" src= {imgsrc(props.artistInfo.image)} alt="cover"/>
            </div>

            <div className="column">
                {/* informations  */}
                <div className="attributes">
                    <p className="artistName">{props.artistInfo.artistName}</p>
                    <p className="artistsFollower"> Followers: {props.artistInfo.artistsFollower}</p>
                    <p className="songGenre">Genre: {props.artistInfo.genre.join(', ')}</p>
                </div>



                <div className="top5songlist">
                    
                  <br/>  <br/> <br/> <br/> <br/> <br/> <br/>
                </div>


            </div>

            <div className="column">
                
                <form className="rating">

                    <p>{rating > 0 ? 'Rated' : 'Rate'}</p>

                    <div className="stars">
                        {stars.map((star) => (
                        <span
                            key={star}
                            className={`star ${star <= rating ? 'selected' : ''}`}
                            onClick={() => handleStarClick(star)}
                        >
                            {star <= rating ? <AiFillStar className="star-icon" /> : <AiOutlineStar className="star-icon" />}
                        </span>
                        ))}
                    </div>

                    <hr/>

                    <div className="like-add">
                            <div className="half-width">
                                <div className={`heart-icon ${liked ? 'liked' : ''}`} onClick={() => { setLiked(!liked); setAdded(true);}}>
                                    {liked ? <AiFillHeart /> : <AiOutlineHeart />}
                                </div>
                                <p>{liked ? 'Liked' : 'Like'}</p>
                            </div>
                            <div className="half-width">
                                <div className={`add-icon ${added ? 'added' : ''}`} onClick={() => { setAdded(!added); }}>
                                    {added ? <AiFillCheckCircle /> : <AiOutlineCheckCircle/>}
                                    </div>
                                <p>{added ? 'Added' : 'Add'}</p>
                            </div>
                    </div>

                    
                </form>

            </div>

       
      </div>

        <div className="friend-for-this-song">
            {/* maybe add later */}
        </div>

        <br/>
        <br/>





    </Modal>
    
  );
}

export default ArtistInfoPopup;
