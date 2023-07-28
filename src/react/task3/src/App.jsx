import { Profile } from "./components/Profile"

export const App = () => {
  return (
    <>
      <h1>Task 3</h1>
      <Profile
        avatar="https://avatars.githubusercontent.com/u/70084163?v=4"
        name="John Doe"
        bio="Fullstack JavaScript developer at Acme Inc."
        phone="+551199999-9999"
        email="johndoe@email.com"
        githubUrl="https://github.com/"
        linkedinUrl="https://www.linkedin.com/"
        twitterUrl="https://twitter.com/"
      />
    </>
  )
}
