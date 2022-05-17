import React, { useEffect } from 'react';
import Card from "react-bootstrap/Card";
import { Dropdown, DropdownMenu, DropdownItem, Progress, DropdownButton } from 'react-bootstrap';

export default function PageContent() {
    useEffect(() => { document.body.style.backgroundColor = '#1b242e' }, []);
    const titles = {
        font: "Impact, fantasy",
        fontSize: "50px",
    }
    return (
        <div className="common">
        <br/><br/><br/><br/><div className="Head_Titles">How it works</div><br/>
        Create end-to-end encrypted, one-time secrets with ease: Add your message and submit the form. That's it. You'll get a secret link to share with your confidant.<br/><br/>
        <img src="https://firebasestorage.googleapis.com/v0/b/secretappmountain.appspot.com/o/image_2022-05-17_230900809.png?alt=media&token=e8574913-61f2-4264-8ba8-9ac4142f9c02"/><br/><br/>
        <div className="Head_Titles">Secret links explained</div><br/>
        We generate two random strings, one to identify your secret in the database and one to encrypt your message in the browser. The encryption key is never stored but becomes part of the link itself. Without the full link, nobody, including us, will ever be able to decrypt your secret.<br/><br/>
        <img src="https://firebasestorage.googleapis.com/v0/b/secretappmountain.appspot.com/o/image_2022-05-17_222537602.png?alt=media&token=cc1ad5e0-97da-4501-9613-d0cc05605254"/><br/><br/>
        <div className="Head_Titles">The Slack App</div> NEW<br/>
        Some things better not stay in your chat history. Next time a coworker asks you for an access token, API key or password, you can respond in good conscience.<br/><br/>
        <img src="https://firebasestorage.googleapis.com/v0/b/secretappmountain.appspot.com/o/image_2022-05-17_210646075.png?alt=media&token=71b77a4b-52e6-49a3-ba08-d6a3e5a7984d"/>
        <ul>
            <li>Encrypted, disposable messages, stored outside of Slack.</li>
            <li>Create one-time secrets via shortcut or slash command.</li>
            <li>Burn notification after a secret has been viewed.</li>
        </ul><br/><br/>
        {/* <div className="Head_Titles">FAQ</div><br/>
        Frequently asked questions.<br/>
        <DropdownButton id="dropdown-item-button" title="Dropdown button">
            <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
        </DropdownButton> */}
        </div>
    );
}