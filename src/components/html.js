import React from 'react';

const Html = ({ children, initialState, scripts }) => (
    <html>
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Server side rendered react app!!</title>
        </head>
        <body>
            <div 
                id="app"
                dangerouslySetInnerHTML={{ __html: children}}
            />

            {initialState && (
                <script
                    dangerouslySetInnerHTML={{
                        __html: `window.APP_STATE=${JSON.stringify(initialState)}`
                    }}
                />
            )}

            {scripts.map((item, index) => <script key={index} src={item} />)}
                    
        </body>
    </html>
);

export default Html;