import React, { Component } from 'react';
import axios from 'axios';

const ListBoardComponent =()=>{
   
    const onSend =(value)=>{
        value.preventDefault();
        console.log(value.target.title.value);

        axios({
            method: "POST",
            url: '/api/write',
            data:{
                title: value.target.title.value,
                context: value.target.context.value
            }
        }).then((response)=>{console.log(response);})
        .catch(error=>{console.log(error);
        throw new Error(error);});

    }
        return (
            <div>
                <form onSubmit={onSend}>
                    <input name="title"/>
                    <textarea name="context"/>
                    <button type='submit'>send</button>
                    </form>
            </div>
        );
    
}

export default ListBoardComponent;