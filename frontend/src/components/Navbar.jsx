import { Box, Button, Text } from "@chakra-ui/react"
import { useDispatch } from "react-redux";
import{logo} from "../redux/auth/action"

export default function Navbar(){
    let token=JSON.parse(localStorage.getItem("token"))
    const dispatch=useDispatch();
    
    function logout(){
    localStorage.removeItem("token")
dispatch(logo)
    }
    return(
        <Box w="100%" h="50px" display="flex" gap="300px" bgColor="gray" position="fixed" justifyContent="center" alignItems="center" top="0px" color="white" >
         <Text><Text>welcome</Text>{token?.name}</Text>
         <Button variant="ghost" _hover={{bgColor:"gray"}} onClick={logout}>logout</Button>
        </Box>
    )
}