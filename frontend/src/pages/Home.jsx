import { Box, Button, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios"
import List from "../components/list";
import Navbar from "../components/Navbar";
import {MdOutlineAdd} from 'react-icons/md'
export default function Home(){
    const token=JSON.parse(localStorage.getItem("token"))
    const[state,setstate]=useState([]);
    
    useEffect(()=>{
getdata()
    },[])
    async function addnewlist(){
        const res=await axios({
            method:'POST',
            url:`https://spring-green-jackrabbit-slip.cyclic.app/lists`,
            data: {
              user:token?.userid,
              group:state.length+1,
             list:`list ${state.length+1}`
              }
           
          });
          getdata()
    }
    async function getdata(){
        const res=await axios({
            method:'POST',
            url:`https://spring-green-jackrabbit-slip.cyclic.app/lists/list`,
            data: {
              user:token?.userid,
              }
           
          });
          const data=await res.data;
          setstate([...data])
         
    }
   async function addtoperticularlist(value,group){
        const res=await axios({
            method:'POST',
            url:`https://spring-green-jackrabbit-slip.cyclic.app/lists`,
            data: {
              user:token?.userid,
              group:group,
              list:value
              }
           
          });
          getdata()
    }
    async function updatedlist(item,group){
        const res=await axios({
            method:'POST',
            url:`https://spring-green-jackrabbit-slip.cyclic.app/lists/remove`,
            data: {
              user:token?.userid,
              group:group,
              item:item
              }
           
          });
          getdata()
    }
    
    return(
        <Box display="flex" pt="50px" >
              <Navbar/>
        <Box  display="flex"  gap="30px" >
{state?.map((ele)=>
<List ele={ele} addtolist={addtoperticularlist} updatedlist={updatedlist} />
)}
        </Box>
        <Box width="300px" h="100vh" position="fixed" right="0px" bgColor="gray.100" zIndex="10" textAlign="center">
<Text mt="20px" fontSize="20px">Add new list</Text>
<Box m="auto"  textAlign="center" display="flex" mt="30px" justifyContent="center"><MdOutlineAdd onClick={addnewlist} size="70px" cursor="pointer" /></Box>
        </Box>
        </Box>
    )
}