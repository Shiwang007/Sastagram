import { Avatar, Box, Button, Flex, VStack } from "@chakra-ui/react"
import { useState } from "react"


const SuggestedUser = ({ follower, name, avatar }) => {
    const [isFollowed, setIsFollowed] = useState(false)
    
    return (
        <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
            <Flex alignItems={"center"} gap={2}>
                <Avatar src={avatar} name={ name} w={10} />
                <VStack spacing={2} alignItems={"flex-start"}>
                    <Box fontSize={12} fontWeight={"bold"}>
                        {name}
                    </Box>
                    <Box fontSize={11} color={"gray.500"}>
                        {follower} followers
                    </Box>
                </VStack>
            </Flex>
            <Button
                fontSize={13}
                bg={"transparent"}
                p={0}
                h={"max-content"}
                fontWeight={"medium"}
                cursor={"pointer"}
                color={"blue.400"}
                _hover={{ color: "white" }}
                onClick={()=>setIsFollowed(!isFollowed) }
            >
                {isFollowed ? "unfollow" : "follow"}
            </Button>
        </Flex>
    )
}

export default SuggestedUser
