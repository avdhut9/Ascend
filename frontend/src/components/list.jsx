import { Box, Button, Input } from "@chakra-ui/react"
import { useState } from "react"

export default function List({ele,addtolist,updatedlist}){
const[state,setstate]=useState("")
function ok(){
addtolist(state,ele.group);
setstate("")
}
function ok1(e){
setstate(e.target.value)
}
function dragstarted(e,el,group){
    console.log(el)
e.dataTransfer.setData("listid",JSON.stringify({el,group}))

}
function dragover(e){
    e.preventDefault()
    console.log("darg over")
}
function dragdrop(e,group){
console.log("droped",group)
let transfered=JSON.parse(e.dataTransfer.getData("listid"));
console.log(transfered)
updatedlist(transfered.el,transfered.group)
 addtolist(transfered.el,group)
}

    return(
        <Box    bgColor="whitesmoke">
<Box w="300px" h="400px">

{ele.list.map((el,i)=>
<Box bgColor="orange" draggable onDragStart={(e)=>dragstarted(e,el,ele.group)}  onDrop={(e)=>dragdrop(e,ele.group)} onDragOver={(e)=>dragover(e)}>
 <Box h="35px"  mt="10px">{el}</Box>

    </Box>
)}

</Box>
<Box display="flex">
<Input value={state} onChange={ok1} />
<Button onClick={ok}>Add to list</Button>
</Box>
        </Box>
    )
}