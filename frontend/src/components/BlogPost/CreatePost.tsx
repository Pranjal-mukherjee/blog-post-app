import { Button, Card, MenuItem, Select, styled, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BASEURL } from '../../utils/constants'
import api from '../../utils/api'
const PostForm = styled(Card)({
    display:"flex",
    flexDirection:"column",
    flexWrap:"wrap",
    justifyContent:"start",
    alignItems:"start",
    gap:"50px"
})
const CreatePost = () => {
    const navigate =  useNavigate();
    const [title,setTitle] =  useState<string>("");
    const [description,setDescription] =  useState<string>("");
    const [category,setCategory] =  useState<string>("");
    const [status,setStatus] =  useState<string>("");
    const handleClick = async()=>{
        try {
           const res = await api.post(`/posts`,{
            "title" : title,
            "description": description,
            "category": category,
            "status": status
           })
           if(res){
            navigate("/blogls")
           }
           else{
            console.log("error in post saving")
           }
        } catch (error) {
           console.log("error in post saving") 
        }
    }
  return (
    <PostForm>
      <TextField label="Title" value={title} onChange={(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>setTitle(e.target.value)}/>
      <TextField label="Desc" value={description} onChange={(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>setDescription(e.target.value)}/>
      <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={category}
    label="Age"
    onChange={(e:any)=>{
setCategory(e.target.value)
    }}
  >
    <MenuItem value={'Comedy'}>Comedy</MenuItem>
    <MenuItem value={'Drama'}>Drama</MenuItem>
    <MenuItem value={'Action'}>Action</MenuItem>
  </Select>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={status}
    label="Status"
    onChange={(e:any)=>{
        setStatus(e.target.value)
            }}
  >
    <MenuItem value={'Pending'}>Pending</MenuItem>
    <MenuItem value={"Approvved"}>Approvved</MenuItem>
    <MenuItem value={"Rejected"}>Rejected</MenuItem>
  </Select>
  <Button variant="outlined" color="primary" onClick={handleClick} >
    Post
  </Button>
    </PostForm>
  )
}

export default CreatePost
