import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../lib/init-firebase';

export default function AddMessage() {
    // var windowHref = window.location.href;
    // console.log(windowHref);
    var shareURL = "";
    const [message, setMessage] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        const messagesCollection = collection(db, 'secret');
        addDoc(messagesCollection, { message })
            .then(response => {
                console.log(response._key.path.segments[1]);
                // console.log("COOL"+response.id);
                var shareURL = "https://secretappmountain.firebaseapp.com/message/?"+ response.id;
                document.getElementById("link1").innerHTML = "Your Generated Link:";<br/>
                document.getElementById("link").innerHTML = shareURL;
                document.getElementById("link").href = shareURL;
            })
            .catch(error => console.log(error.message));
    }
  return (
    <div className="common">
      <img width="100" height="100" src="https://firebasestorage.googleapis.com/v0/b/secretappmountain.appspot.com/o/logo-transparent.svg?alt=media&token=e237af2c-23ff-455d-8bdf-f36843ca20c4"/><br/><br/><br/>
      <div className="main_title">Share a secret</div>
      <div className="sub_title">…with a link that only works one time and then self-destructs.</div><br/>
      <form onSubmit={handleSubmit}>
          <label htmlFor="message">What's your secret?</label><br/>
          <textarea rows="4" cols="120"
            id = 'message'
            type="text"
            value={message}
            onChange={e => setMessage(e.target.value)}
            /><br/>
            <button className="button_container" type="submit" align="right">CREATE SECRET LINK</button>
      </form>
      <p id="link1"></p>
      <a href ={ shareURL } id="link"></a>
    </div>
  );
}