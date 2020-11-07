import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Quote() {
    const [quote, setQuote] = useState('Default quote')
    const [author, setAuthor] = useState('Anonymous')

    useEffect(() => {
        axios
            .get('https://quotes.rest/qod/')
            .then ( res => {
                setQuote(res.data.contents.quotes[0].quote)
                setAuthor(res.data.contents.quotes[0].author)
            })
            .catch ( err => {
                console.log(err)
            })
    }, [])

    return (
        <div className='quote'>
            <h5>"{ quote }"</h5>
            <h6>- { author }</h6>
            <span /* style="z-index:50;font-size:0.9em; font-weight: bold;"*/>
                <img src="https://theysaidso.com/branding/theysaidso.png" height="20" width="20" alt="theysaidso.com"/>
                <a href="https://theysaidso.com" title="Powered by quotes from theysaidso.com" /* style="color: #ccc; margin-left: 4px; vertical-align: middle;" */>
                    They Said So®
                </a>
            </span>
        </div>
    )
}

export default Quote