import styles from "./Profile.module.scss"

export const Profile = ({
  avatar,
  name,
  bio,
  phone,
  email,
  githubUrl,
  linkedinUrl,
  twitterUrl
}) => {
  return (
    <>
      <div className={styles.profile}>
        <p className="profileFullname">{name}</p>
      </div>
    </>
  )
}