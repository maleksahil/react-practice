import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import { ToastContainer,toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';


const Editpost = () => {
        let location = useLocation();
        let navigate = useNavigate("");
        const [editid,setEditId] = useState("");
        useEffect(()=>{
            setTitle(location?.state?.title);
            setDescription(location?.state?.description); 
            setImage(location?.state?.image);
            setEditId(location?.state?.postid)
        },[location?.state])
        
        
   
    const [posts,setPosts] = useState(JSON.parse(localStorage.getItem('post')) || []);
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [image,setImage] = useState("");



    const handleSubmit = (event) => {
        event.preventDefault();
        let up = posts.map((val)=>{
            if(val.postid == editid){
                val.title = title
                val.description = description
                val.image = image
            }
            return val;
        })

        localStorage.setItem('post',JSON.stringify(up));
        toast.success("Post Updated Successfully");

        setTimeout(()=>{
            navigate('/viewpost');
        },3000)
        
        
    }

    return (
        <div>
            <Header />
            <div className='container mt-5'>
                <div className="row">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">
                                Edit Post
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

export default Editpost
