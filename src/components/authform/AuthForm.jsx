import { Box, Button, Flex, Image, Input, Text, VStack } from "@chakra-ui/react"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
    
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleAuth = () => {
        if (!inputs.email || !inputs.password) {
            alert("fill all the required fields");
            return;
        }
        navigate('/');
    };
    return (
      <>
        <Box border={"1px solid gray"} borderRadius={4} padding={5}>
          <VStack spacing={4}>
            <Box w={200} cursor={"pointer"} pl={6} fontSize={30} fontWeight={200}>Sastagram</Box>
            <Input
              w={"full"}
              placeholder="email"
              type="email"
              fontSize={20}
              border={"1px solid gray"}
              borderRadius={4}
              bg={"#000"}
              value={inputs.email}
              onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            />
            <Input
              w={"full"}
              placeholder="password"
              type="password"
              fontSize={20}
              border={"1px solid gray"}
              borderRadius={4}
              bg={"#000"}
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />

            {!isLogin ? (
              <Input
                w={"full"}
                placeholder="confirm password"
                type="password"
                fontSize={20}
                border={"1px solid gray"}
                borderRadius={4}
                bg={"#000"}
                value={inputs.confirmPassword}
                onChange={(e) =>
                  setInputs({ ...inputs, confirmPassword: e.target.value })
                }
              />
            ) : null}

            <Button
              w={"full"}
              padding={2}
              bg="blue.300"
              borderRadius={4}
              size={"sm"}
              fontSize={14}
              onClick={handleAuth}
            >
              {!isLogin ? "Sign Up" : "Log In"}
            </Button>
          </VStack>

          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            my={4}
            gap={1}
            w={"full"}
          >
            <Box flex={2} h={1} bg={"gray.400"} />
            <Text mx={1} color={"white"}>
              OR
            </Text>
            <Box flex={2} h={1} bg={"gray.400"} />
          </Flex>

          <Flex alignItems={"center"} justifyContent={"center"}>
            <Image src="/google.png" w={5} alt="google img" />
            <Text color={"blue.500"} mx={2}>
              Log in with Google
            </Text>
          </Flex>
        </Box>

        <Box border={"1px solid gray"} borderRadius={4} padding={5}>
          <Flex alignItems={"center"} justifyContent={"center"}>
            <Box mx={2} fontSize={14}>
              {isLogin ? "Don't have an account?" : "Already have an account?"}
            </Box>
            <Box
              color={"blue.500"}
              onClick={() => setIsLogin(!isLogin)}
              cursor={"pointer"}
            >
              {isLogin ? "Sign Up" : "Log In"}
            </Box>
          </Flex>
        </Box>
      </>
    );
}

export default AuthForm
