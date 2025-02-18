import React, { useState } from 'react'
import Header from '../component/Header'
import { ToastContainer,toast } from 'react-toastify';

const Addpost = () => {
    const [posts,setPosts] = useState(JSON.parse(localStorage.getItem('post')) || []);
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [image,setImage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        let post = {
            postid : Math.floor(Math.random()*1000000),
            title:title,
            description:description,
            image:image
        }
        let newpost = [...posts,post];
        localStorage.setItem('post',JSON.stringify(newpost));
        setPosts(newpost);
        toast.success("post successfully add");
        setTitle("")
        setDescription("")
        setImage("")

        
    }

    return (
        <div>
            <Header />
            <div className='container mt-5'>
                <div className="row">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">
                                Featured
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                                        <input type="text" onChange={ (e) => setTitle(e.target.value) } value={title} className="form-control"/>
                                       
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                                        <input type="text" onChange={ (e) => setDescription(e.target.value) } value={description}  className="form-control"/>
                                    </div>
                                    <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Image Url</label>
                                        <input type="text" onChange={ (e) => setImage(e.target.value) } value={image}  className='form-control'/>
                                       
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>


                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <ToastContainer 
                autoClose={1000} 
                position="top-center"
            />
        </div>
    )
}

export default Addpost
