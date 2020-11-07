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
                console.log(res.data.contents.quotes[0].author)
            })
            .catch ( err => {
                console.log(err)
            })
    }, [])

    return (
        <div className='quote'>
            <h5>"{ quote }"</h5>
            <h6>- { author }</h6>
        </div>
    )
}

export default Quote