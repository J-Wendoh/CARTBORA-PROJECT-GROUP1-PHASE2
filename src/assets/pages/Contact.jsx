import React from "react";

const Contact = () => {
    return (
        <div className="container">
            <h1><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M160-40v-80h640v80H160Zm0-800v-80h640v80H160Zm320 400q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm70-80q45-56 109-88t141-32q77 0 141 32t109 88h70v-480H160v480h70Zm118 0h264q-29-20-62.5-30T480-280q-36 0-69.5 10T348-240Zm132-280q-17 0-28.5-11.5T440-560q0-17 11.5-28.5T480-600q17 0 28.5 11.5T520-560q0 17-11.5 28.5T480-520Zm0 40Z"/></svg></h1>

            <p>Welcome to CartBora! We are thrilled to connect with you. Our headquarters are nestled in the heart of bustling downtown, where innovation meets passion.</p>
            <p>If you have any inquiries, our dedicated customer care desk is readily available to assist you:</p>
            <ul>
                <p>Email: <a href="mailto:customer_care@cartbora.com">customer_care@cartbora.com</a></p>
                <p>Phone (Kenya): <a href="tel:+254123456789">+254 123 456 789</a></p>
                <p>WhatsApp Business: <a href="https://wa.me/254123456789">Chat Now</a></p>
            </ul>
            <p>For matters regarding deliveries, our efficient team is just a call away:</p>
            <ul>
                <p>Email: <a href="mailto:deliveries@cartbora.com">deliveries@cartbora.com</a></p>
                <p>Phone (Kenya): <a href="tel:+254987654321">+254 987 654 321</a></p>
            </ul>
            <p>For more substantial concerns or feedback, our experienced managers are here to listen:</p>
            <ul>
                <p>Email: <a href="mailto:managers@cartbora.com">managers@cartbora.com</a></p>
            </ul>
            <p>Stay updated with all things CartBora by following us on:</p>
            <ul>
                <p>Instagram: <a href="https://instagram.com/CartBoraOfficial">@CartBoraOfficial</a></p>
                <p>Facebook: <a href="https://facebook.com/CartBoraOfficial">CartBoraOfficial</a></p>
                <p>Twitter: <a href="https://twitter.com/CartBoraTweets">@CartBoraTweets</a></p>
            </ul>
        </div>
    );
}

export default Contact;
