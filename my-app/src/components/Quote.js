import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/Quote.css';

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
            <p><em>"{ quote }"</em></p>
            <div className='second-line'>
                <p>- { author }</p>
                <span className='credit'>
                    <img src="https://theysaidso.com/branding/theysaidso.png" height="20" width="20" alt="theysaidso.com" />
                    <a href="https://theysaidso.com" title="Powered by quotes from theysaidso.com" >
                        They Said So®
                    </a>
                </span>
            </div>
        </div>
    )
}

export default Quote