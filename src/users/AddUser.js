import React, { useState } from 'react';

export default function AddUser(){
   
    return(
        <div className="container">
            <form>
                <div className="form-row mt-3">
                <div className="form-group " style={{ textAlign: 'left'}}>
                    <label htmlFor="inputName" className="text-left" style={{ textAlign: 'left'}}>Name</label>
                    <input 
                        type="text" 
                        className="form-control"
                        id="inputName" 
                        placeholder="Enter your name" 
                    />
                </div>
                <div className="form-group mt-3" style={{ textAlign: 'left'}}>
                    <label htmlFor="inputUsername">Username</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="inputUsername" 
                        placeholder="Enter your username" 
                    />
                </div>
                </div>
                <div className="form-group mt-3" style={{ textAlign: 'left'}}>
                    <label htmlFor="Email">Email</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="inputEmail" 
                        placeholder="Enter your email" 
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-3">Submit</button>
                <button type="submit" className="btn btn-danger mt-3 mx-3">Cancle</button>
            </form>
        </div>

    )
}