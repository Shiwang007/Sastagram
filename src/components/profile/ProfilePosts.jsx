import { Grid } from "@chakra-ui/react"
import ProfilePost from "./ProfilePost"


const ProfilePosts = () => {
  return (
    <Grid
      templateColumns={{
        sm: "repeat(1, 1fr)",
        md: "repeat(3, 1fr)"
      }}
    >
      
      <ProfilePost img="/img1.png"/>
      <ProfilePost img="/img2.png"/>
      <ProfilePost img="/img3.png"/>
      <ProfilePost img="/img4.png"/>
    </Grid>
  )
}

export default ProfilePosts
