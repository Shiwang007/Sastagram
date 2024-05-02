import { Box, Flex } from "@chakra-ui/react"
import FeedPosts from "../../components/feedposts/FeedPosts"
import SuggestedUsers from "../../components/suggestedUser/SuggestedUsers"


const HomePage = () => {
  return (
    <Flex alignItems={"center"} justifyContent={"center"}>
      <Flex gap={20} >
        <Box flex={2} py={10} >
          <FeedPosts/>
        </Box>
        <Box flex={3} mr={20} display={{base: "none", md: "block"}} maxW={300} >
          <SuggestedUsers/>
        </Box>
      </Flex>
    </Flex>
  )
}

export default HomePage
