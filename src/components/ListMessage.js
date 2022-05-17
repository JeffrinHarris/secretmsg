import React,{ useEffect, useState } from 'react';
import { collection, getDocs, getDoc, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../lib/init-firebase';

export default function ListMessage() {
    const [messages, setMessages] = useState([]);

    var secret_msg;

    useEffect(() => { document.body.style.backgroundColor = '#1b242e' }, []);

    useEffect(() => {
        getMessages();
    }, []);

    useEffect(() => {
        console.log(messages)
    }, [messages]);

    function getMessages() {
        const messagesCollection = collection(db, 'secret');

        var windowUrl = window.location.search;
        windowUrl = windowUrl.substring(1);
        console.log(windowUrl);

        const docRef = doc(db, 'secret', windowUrl);

        getDocs(messagesCollection)
        .then(response => {
            const msg = response.docs.map(doc => ({
                data: doc.data(),
                id: doc.id,
            }));
            setMessages(msg);
        })
        .catch(error => console.log(error.message));

        getDoc(docRef)
        .then((doc) => {
            console.log(doc.data().message);
            console.log(doc.id);
            document.getElementById("secret_message").innerHTML = doc.data().message;
            deleteLink(doc.id);
        })
        .catch(error => {
            console.log("HE");
            document.getElementById("main").innerHTML = "Error occurred";
            document.getElementById("sub").innerHTML = "Looks like you've already viewed this secret. It's gone now.";
        });
    }

    function deleteLink(id) {
        const docRef = doc(db, 'secret', id);
        deleteDoc(docRef)
            .then(() => console.log('Document successfully deleted!'))
            .catch(error => console.log(error.message));
    }


    return (
        <div className="common">
            <img width="100" height="100" src="https://firebasestorage.googleapis.com/v0/b/secretappmountain.appspot.com/o/logo-transparent.svg?alt=media&token=e237af2c-23ff-455d-8bdf-f36843ca20c4"/><br/><br/><br/>
            <div className="main_title"><p id="main">Hello</p></div>
            <div className="sub_title"><p id="sub">You recieved a secret:</p></div><br/>
            <p id="secret_message"></p>
            {/* <ul>
                {messages.map(message => <li  key={message.id}>{message.data.message}</li>)}
            </ul> */}
        </div>
    )
}