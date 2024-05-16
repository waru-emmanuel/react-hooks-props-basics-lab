import React from "react";

function Links({github,linkedin}) {
    return (
        <div>
            <h3>Links</h3>
            <a href= {github}>Github </a>
            <a href= {linkedin}>Linkedin</a>
        </div>
    );
}
export default Links;