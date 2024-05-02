import { Box, Flex } from "@chakra-ui/react"
import { useLocation } from "react-router-dom"
import SideBar from "../../components/sidebar/SideBar";


const PageLayout = ({ children }) => {
    const { pathname } = useLocation();
  return (
    <Flex>
       {/* sidebar */}
          {pathname !== '/auth'
            ?<Box w={{base: "70px", md: "240px" }}>
                <SideBar/>
            </Box>
            :null}
       {/* page content */} 
       <Box w={{base: "clac(100% -70px)", md: "clac(100% - 240px)" }} flex={1}>
        {children}
       </Box>
    </Flex>
  )
}

export default PageLayout
