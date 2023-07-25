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
        <img src={avatar} alt="Profile avatar" className={styles.profileAvatar} />
        <p className={styles.profileName}>{name}</p>
        <p className={styles.profileBio}>{bio}</p>
        <p className={styles.profilePhone}>{phone}</p>
        <p className={styles.profileEmail}>{email}</p>
        <div className={styles.profileBtns}>
          <button className={styles.profileBtn}>{githubUrl}</button>
          <button className={styles.profileBtn}>{linkedinUrl}</button>
          <button className={styles.profileBtn}>{twitterUrl}</button>
        </div>
      </div>
    </>
  )
}