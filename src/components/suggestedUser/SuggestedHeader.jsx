import { Avatar, Flex, Link, Text } from "@chakra-ui/react"
import { BiLogOut } from "react-icons/bi"
import { Link as RouterLink} from "react-router-dom"

const SuggestedHeader = () => {
    return (
        <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
            <Flex alignItems={"center"} gap={2}>
                <Avatar name="as a programmer" w={10} src="/profilepic.png"/>
                <Text fontSize={12} fontWeight={"bold"}>
                    asaprogrammer_
                </Text>
            </Flex>
            <Link
                as={RouterLink}
                to={"/auth"}
                fontSize={14}
                fontWeight={"medium"}
                style={{ textDecoration: "none" }}
                cursor={"pointer"}
            >
                <BiLogOut size={25}  />
            </Link>
        </Flex>
    )
}

export default SuggestedHeader
