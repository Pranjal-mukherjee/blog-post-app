import { Box, Button, Card, styled, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { BASEURL } from '../../utils/constants'
import api from '../../utils/api'
const PostBox =  styled(Box)({
    display:"flex",
    flexDirection:"column",
    flexWrap:"wrap",
    justifyContent:"start",
    alignItems:"start",
    gap:"50px"
})
const PostCard =  styled(Card)({
    display:"flex",
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:"space-between",
    alignItems:"start",
    gap:"10px"
})
const PostList = () => {
    const navigate =  useNavigate();

    const [posts,setPosts] = useState<any[]>([])
    const fetchData = async()=>{
      try {
        const res = await api.get(`/post`)
        setPosts(res.data);
      } catch (error) {
        console.log("error ocuured in ppost list")
      }
    }
    useEffect(()=>{
fetchData();
    },[])
  return (
    <PostBox>
      {
        posts.map((post)=>(
            <>
             <PostCard key={post.id}>
                  <Typography>{post.title}</Typography>
                  <Typography>{post.category}</Typography>
                  <Typography>{post.description}</Typography>
                  <Typography>{post.status}</Typography>
            </PostCard>
            <Box>
                <Button color="primary" variant="text" onClick={()=>{}}>
                    Edit
                </Button>
                <Button color="primary" variant="text" onClick={async()=>{
                     try {

                            const res  =  await api.delete(`/post/${post.id}`); 
                        
                
                    } catch (error) {
                        console.log("error in deleteing")
                    }
                }}>
                    Delete
                </Button>

            </Box>
            </>
           
        ))
      }
      <Box>
        <Button variant="contained" color="primary" onClick={()=>navigate("/post")}>
            Create New Post
        </Button>
      </Box>
    </PostBox>
  )
}

export default PostList
